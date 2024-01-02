import {interval} from "d3"
import * as ct from "./controls.js"
import cfg from "./config.js"
import param from "./parameters.js"
import resetparameters,{reset_payoff} from "./reset_parameters.js"
import {iterate,initialize,update} from "./simulation.js"
import * as widgets from "d3-widgets"

var timer = {}

const startstop = (display,config) => {
	ct.go.value() == 1 ? timer = interval(()=>iterate(display,config),cfg.simulation.delay) : timer.stop()

}


function update_slider_visibility(controls){
	if(param.initial_condition.widget.value() == 1) {
		controls.select("#slider_"+param.defector_concentration.widget.id()).transition().style("opacity",0)
		
		controls.select("#slider_"+param.defector_concentration.widget.id())
			.select("."+widgets.styles.handle).style("pointer-events","none")
		
		controls.select("#slider_"+param.defector_concentration.widget.id())
			.select("."+widgets.styles.track_overlay).style("pointer-events","none")
		
		controls.select("#slider_"+param.defector_concentration.widget.id())
			.select("."+widgets.styles.label).style("pointer-events","none")

		
	} else {
		controls.select("#slider_"+param.defector_concentration.widget.id()).transition().style("opacity",1)
		
		controls.select("#slider_"+param.defector_concentration.widget.id())
			.select("."+widgets.styles.handle).style("pointer-events","all")
		
		controls.select("#slider_"+param.defector_concentration.widget.id())
			.select("."+widgets.styles.track_overlay).style("pointer-events","all")
		
		controls.select("#slider_"+param.defector_concentration.widget.id())
			.select("."+widgets.styles.label).style("pointer-events","none")
		
	}
}


export default (display,controls,config) => {
	
	ct.reset.update(()=>{resetparameters(controls); initialize(display,config) })	
	ct.go.update(()=>startstop(display,config))
	ct.setup.update(()=>initialize(display,config))
	param.lattice_type.widget.update(()=>{
		initialize(display,config)}
	)
	param.defector_concentration.widget.update(()=>initialize(display,config))
	
	param.initial_condition.widget.update(()=>{
		update_slider_visibility(controls)		
		initialize(display,config)
	})
	param.show_transition_states.widget.update(()=>{
		update(display,config)
	controls.selectAll("#legend1").transition()
		.style("opacity",param.show_transition_states.widget.value()?1:0)
		
	controls.selectAll("#legend2").transition()
		.style("opacity",param.show_transition_states.widget.value()?0:1)
	})
}


