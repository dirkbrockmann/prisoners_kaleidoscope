import * as d3 from "d3"
import param from "./parameters.js"
import {agents} from "./model.js"

const L = param.L;
const X = d3.scaleLinear().domain([0,L]);
const Y = d3.scaleLinear().domain([0,L]);


const update = (display,config) => {
	
	display.selectAll(".node")
		.style("fill", d => param.color_by_heading.widget.value() ? d3.interpolateSinebow(d.theta/2/Math.PI)  : "black")
	
}

const initialize = (display,config) => {

	const W = config.display_size.width;
	const H = config.display_size.height;
	
	X.range([0,W]);
	Y.range([0,H]);
		
	display.selectAll("#origin").remove();
	display.selectAll(".node").remove();
	
	const origin = display.append("g").attr("id","origin")
	
	origin.selectAll(".node").data(agents).enter().append("circle")
		.attr("class","node")
		.attr("cx",d=>X(d.x))
		.attr("cy",d=>Y(d.y))
		.attr("r",X(param.agentsize/2))
		.style("fill", d => param.color_by_heading.widget.value() ? d3.interpolateSinebow(d.theta/2/Math.PI)  : "black")
	
};

const go = (display,config) => {
	
	display.selectAll(".node")
		.attr("cx",d=>X(d.x))
		.attr("cy",d=>Y(d.y))
		.style("fill", d => param.color_by_heading.widget.value() ? d3.interpolateSinebow(d.theta/2/Math.PI)  : "black")
	
}


export {initialize,go,update}
