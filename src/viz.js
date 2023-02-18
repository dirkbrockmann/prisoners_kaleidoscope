import * as d3 from "d3"
import param from "./parameters.js"
import {agents} from "./model.js"
import cfg from "./config.js"
import {each} from "lodash-es"

const paint = cfg.simulation.colors;

//const N = param.N;

const X = d3.scaleLinear().domain([-0.5,0.5]);
const Y = d3.scaleLinear().domain([-0.5,0.5]);


var ctx,dL,W,H;


function draw_rect(){
	agents.forEach(d=>{
		const c = d.cell();
		const l = c.length;
		
		const color = param.show_transition_states.widget.value() ? paint[d.state+d.previous_state] : paint[d.state]
		
		ctx.fillStyle=color;
		ctx.strokeStyle=color;
		ctx.lineWidth = 0;
		ctx.fillRect(X(c[0].x),X(c[0].y),X(c[2].x)-X(c[0].x),X(c[2].y)-X(c[0].y))
	})
}

function draw_path(){
	agents.forEach(d=>{
		const c = d.cell();
		const l = c.length;
		
		const color = param.show_transition_states.widget.value() ? paint[d.state+d.previous_state] : paint[d.state]
		
		ctx.fillStyle=color;
		ctx.strokeStyle=color;

		ctx.lineWidth = 1;

		ctx.beginPath();
		ctx.moveTo(X(c[0].x),Y(c[0].y))
		each(c,(p,i)=>ctx.lineTo(X(c[(i+1)%l].x),Y(c[(i+1)%l].y)))
		ctx.fill();
		ctx.stroke()
		ctx.closePath();
	})
}

const go = (display,config) => {
	
	ctx.clearRect(0, 0, W, H);
	if (param.lattice_type.widget.value()==0){
		draw_rect()		
	} else
	{
		draw_path()
	}
	
}

const update = (display,config) => {

	go(display,config)
	
}

const initialize = (display,config) => {

	W = config.display_size.width;
	H = config.display_size.height;
			
	X.range([0,W]);
	Y.range([0,H]);
	
	ctx = display.node().getContext('2d');	

	go(display,config)
	
};




export {initialize,go,update}
