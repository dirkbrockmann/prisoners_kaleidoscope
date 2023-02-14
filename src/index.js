import './styles.css'
import cfg from "./container_config.js"
import setup_container from "./setup_container.js"
import setup_interactions from "./setup_interactions.js"
import setup_controls from "./controls.js"
import {initialize as setup_simulation} from "./simulation.js"

const load = function (container_id,config=cfg) {
	
// setting up the container
	
	const container = setup_container(container_id,config);

	const display = container.display;
	const controls = container.controls;
	const grid = container.grid;
		
// setting up the controls and actions
	
	setup_controls(controls,grid);
	setup_interactions(display,controls,config);

// initializing the system
	
	setup_simulation(display,config)
	
}

export {load,cfg as config};
