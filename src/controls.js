import * as widgets from "d3-widgets"
import {range,map,concat,toPairs} from "lodash-es"

import cfg from "./config.js"
import parameters from "./parameters.js"

import {toArray,add_id_label,add_widget,get_variables,get_booleans,get_choices,get_payoff} from "./utils.js"


// write a function that makes a legend in the specified colors

const variables = get_variables(parameters);
const booleans = get_booleans(parameters);
const choices = get_choices(parameters);
const payoff = get_payoff(parameters);

add_id_label(variables)
add_id_label(booleans)
add_id_label(choices)
add_id_label(payoff)


const va = toArray(variables);
const bo = toArray(booleans);
const ch = toArray(choices);
const po = toArray(payoff);


console.log(po)

const toggles = map(bo, 
		v => widgets.toggle()
					.id(v.id).
					label(v.label).
					value(v.default)					
		);
		
add_widget(bo,toggles);

const payoff_sliders = map(po,
		v => widgets.slider()
					.id(v.id)
					.label(cfg.widgets.payoff_slider_labels[v.id])
//					.range(parameters.all_parameters.widget.value() ? v.alt_range : v.range)
//					.value(parameters.all_parameters.widget.value() ? v.alt_default : v.default)
					.range(v.range)
					.value(v.default)
					.girth(cfg.widgets.payoff_slider_girth)	
					.knob(cfg.widgets.payoff_slider_knob)
					.size(cfg.widgets.payoff_slider_size)
//					.show(parameters.all_parameters.widget.value())
					.show(true)
		);

const sliders = map(va,
		v => widgets.slider()
					.id(v.id)
					.label(v.label)
					.range(v.range)
					.value(v.default)
					.girth(cfg.widgets.slider_girth)	
					.knob(cfg.widgets.slider_knob)
					.size(cfg.widgets.slider_size)
		);



const radios = map(ch, 
		v => widgets.radio()
					.choices(v.choices)
					.id(v.id)
					.value(v.default)
					.orientation(cfg.widgets.radio_orientation)
					.labelposition(cfg.widgets.radio_label_position)
		);



add_widget(po,payoff_sliders);
add_widget(va,sliders);
add_widget(ch,radios);


const go = widgets.button().actions(["play","pause"])
const setup = widgets.button().actions(["back"])
const reset = widgets.button().actions(["rewind"])
		
const buttons = [go,setup,reset];


export default (controls,grid)=>{
	
	
	var legend1 = ["CC","DD","CD","DC"].map((s,i)=>{
		const p = grid.position(cfg.widgets.legend_anchor.x+i*cfg.widgets.legend_gap,cfg.widgets.legend_anchor.y)

		return {
			s:cfg.simulation.legend[s],
			c:cfg.simulation.colors[s],
			x:p.x,
			y:p.y,
			vgap:grid.position(0,cfg.widgets.legend_vgap)
		}
	})
	
	var legend2 = ["C","D"].map((s,i)=>{
		const p = grid.position(cfg.widgets.legend_anchor.x+(i+2)*cfg.widgets.legend_gap,cfg.widgets.legend_anchor.y)

		return {
			s:cfg.simulation.legend[s],
			c:cfg.simulation.colors[s],
			x:p.x,
			y:p.y,
			vgap:grid.position(0,cfg.widgets.legend_vgap)
		}
	})

	const leg1 = controls.selectAll("#legend1").data(legend1).enter().append("g")
		.attr("transform",d=>"translate("+d.x+","+d.y+")").attr("id","legend1")
		.style("opacity",parameters.show_transition_states.widget.value()?1:0)
		
	const leg2 = controls.selectAll("#legend2").data(legend2).enter().append("g")
		.attr("transform",d=>"translate("+d.x+","+d.y+")").attr("id","legend2")
		.style("opacity",parameters.show_transition_states.widget.value()?0:1)
	
	leg2.append("text").text(d=>d.s).style("text-anchor","middle")
	leg2.append("circle").style("fill",d=>d.c)
		.attr("r",cfg.widgets.legend_size)
		.style("stroke-width","1px")
		.style("stroke","black")
		.attr("transform",d=>"translate(0,"+d.vgap.y+")")
		
	leg1.append("text").text(d=>d.s).style("text-anchor","middle")
	leg1.append("circle").style("fill",d=>d.c)
		.attr("r",cfg.widgets.legend_size)
		.style("stroke-width","1px")
		.style("stroke","black")
		.attr("transform",d=>"translate(0,"+d.vgap.y+")")
	
	const sl_pos1=grid.position(cfg.widgets.payoff_slider_anchor.x,range(2)
			.map(x=>(cfg.widgets.payoff_slider_anchor.y+cfg.widgets.payoff_slider_gap*x)));

	const sl_pos2=grid.position(cfg.widgets.payoff_slider_anchor.x+cfg.widgets.payoff_slider_hgap,range(2)
			.map(x=>(cfg.widgets.payoff_slider_anchor.y+cfg.widgets.payoff_slider_gap*x)));


	const tg_pos=grid.position(cfg.widgets.toggle_anchor.x,cfg.widgets.toggle_anchor.y);		

	const latt_pos=grid.position(cfg.widgets.lattice_anchor.x,cfg.widgets.lattice_anchor.y);		
	const ic_pos=grid.position(cfg.widgets.ic_anchor.x,cfg.widgets.ic_anchor.y);		

	const sldens_pos=grid.position(cfg.widgets.slider_anchor.x,cfg.widgets.slider_anchor.y);		

	
	payoff_sliders.forEach((sl,i) => {
			if (i < 2) {
				sl.position(sl_pos1[i])
			}
			if (i>=2 < 4) {
				sl.position(sl_pos2[i-2])
			}
	});
	
	toggles[0].position(tg_pos).labelposition(cfg.widgets.toggle_label_pos)


	radios[0].position(latt_pos)
		.size(cfg.widgets.radio_size).shape(cfg.widgets.radio_shape)

	radios[1].position(ic_pos)
		.size(cfg.widgets.radio_size).shape(cfg.widgets.radio_shape)
	
	sliders[0].position(sldens_pos)
	
	go.position(grid.position(cfg.widgets.playbutton_anchor.x,cfg.widgets.playbutton_anchor.y))
		.size(cfg.widgets.playbutton_size);
	
	reset.position(grid.position(cfg.widgets.backbutton_anchor.x,cfg.widgets.backbutton_anchor.y));
	
	setup.position(grid.position(cfg.widgets.resetbutton_anchor.x,cfg.widgets.resetbutton_anchor.y));
	

	controls.selectAll(".slider").data(concat(sliders,payoff_sliders)).enter().append(widgets.widget);
	controls.selectAll(".toggle").data(toggles).enter().append(widgets.widget);
	controls.selectAll(".button").data(buttons).enter().append(widgets.widget);
	controls.selectAll(".radio").data(radios).enter().append(widgets.widget)
	
	if(parameters.initial_condition.widget.value() == 1) {
		controls.select("#slider_"+parameters.defector_concentration.widget.id()).transition().style("opacity",0)
		controls.select("#slider_"+parameters.defector_concentration.widget.id()).select(" .track-overlay").style("pointer-events","none")
	} else {
		controls.select("#slider_"+parameters.defector_concentration.widget.id()).transition().style("opacity",1)
		controls.select("#slider_"+parameters.defector_concentration.widget.id()).select(" .track-overlay").style("pointer-events","all")
	}

}

export {sliders,toggles,radios,go,setup,reset,variables,booleans,choices,payoff,payoff_sliders}


