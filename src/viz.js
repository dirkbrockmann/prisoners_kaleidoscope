import * as d3 from "d3"
import param from "./parameters.js"
import {agents} from "./model.js"
import {color_schemes} from "./utils.js"
import cfg from "./config.js"
import {each} from "lodash-es"

const paint = color_schemes[cfg.simulation.color_scheme];

const N = param.N;

const X = d3.scaleLinear().domain([-0.5,0.5]);
const Y = d3.scaleLinear().domain([-0.5,0.5]);


var ctx,dL,W,H;


const update = (display,config) => {
	
	ctx.clearRect(0, 0, W, H);

	
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

const initialize = (display,config) => {

	W = config.display_size.width;
	H = config.display_size.height;
			
	X.range([0,W]);
	Y.range([0,H]);
	
	ctx = display.node().getContext('2d');
	
	ctx.clearRect(0, 0, W, H);

	
	agents.forEach(d=>{
		const c = d.cell();
		const l = c.length;
		ctx.fillStyle=paint[d.state];
		ctx.strokeStyle=paint[d.state];

		ctx.lineWidth = 1;
		ctx.beginPath();
		
		ctx.moveTo(X(c[0].x),Y(c[0].y))
		each(c,(p,i)=>ctx.lineTo(X(c[(i+1)%l].x),Y(c[(i+1)%l].y)))
		ctx.fill();
		ctx.stroke()
		ctx.closePath();
	})


	
};

const go = (display,config) => {
	
	ctx.clearRect(0, 0, W, H);

	
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


export {initialize,go,update}
