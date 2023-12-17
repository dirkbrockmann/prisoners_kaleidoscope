import './styles.css'
import cfg from "./container_config.js"
import setup_container from "./setup_container.js"
import setup_interactions from "./setup_interactions.js"
import setup_controls from "./controls.js"
import {initialize as setup_simulation} from "./simulation.js"
import {go} from "./controls.js"


var display,controls,grid;

const load = function (container_id,config=cfg) {
	
// setting up the container
	
	const container = setup_container(container_id,config);

	display = container.display;
	controls = container.controls;
	grid = container.grid;
		

	
	setup_controls(controls,grid); 
	
	setup_interactions(display,controls,config); 
	
	setup_simulation(display,config)
	
}

const halt  = function(){
	if(go.value()==1){
			go.press(controls)
	}
}

export {load,cfg as config,halt};
