import {interval} from "d3"
import * as ct from "./controls.js"
import cfg from "./config.js"
import param from "./parameters.js"
import resetparameters,{reset_payoff} from "./reset_parameters.js"
import {iterate,initialize,update} from "./simulation.js"


var timer = {}

const startstop = (display,config) => {
	ct.go.value() == 1 ? timer = interval(()=>iterate(display,config),cfg.simulation.delay) : timer.stop()

}

function update_slider_visibility(controls){
	if(param.initial_condition.widget.value() == 1) {
		controls.select("#slider_"+param.defector_concentration.widget.id()).transition().style("opacity",0)
		controls.select("#slider_"+param.defector_concentration.widget.id()).select(" .track-overlay").style("pointer-events","none")
	} else {
		controls.select("#slider_"+param.defector_concentration.widget.id()).transition().style("opacity",1)
		controls.select("#slider_"+param.defector_concentration.widget.id()).select(" .track-overlay").style("pointer-events","all")
	}
}

export default (display,controls,config) => {
	
	ct.reset.update(()=>{resetparameters(controls); initialize(display,config) })	
	ct.go.update(()=>startstop(display,config))
	ct.setup.update(()=>initialize(display,config))
	param.lattice_type.widget.update(()=>initialize(display,config))
//	param.all_parameters.widget.update(()=>reset_payoff(controls))
	param.defector_concentration.widget.update_end(()=>initialize(display,config))
	param.initial_condition.widget.update(()=>{
		update_slider_visibility(controls)		
		initialize(display,config)
	})
	param.show_transition_states.widget.update(()=>{
		update(display,config)
	})
}


