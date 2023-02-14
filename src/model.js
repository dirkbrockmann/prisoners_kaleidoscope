
import param from "./parameters.js"
import {each,range,map,mean} from "lodash-es"
import {rad2deg,deg2rad} from "./utils"

const L = param.L;
const dt = param.dt;

var agents = [];

const initialize = () => {

	// set/reset timer
	param.timer={}; param.tick=0;

	// make agents

	const N = param.number_of_particles.choices[param.number_of_particles.widget.value()];
	
	agents = map(range(N), i => { return {
				index:i, 
				x:L*Math.random(), 
				y:L*Math.random(),
				theta: 2*Math.PI*Math.random(),
			} 
	});
	
};

const go  = () => {
	
	param.tick++;
	
	each(agents,a=>{
		
		var dx = dt*param.speed.widget.value()*Math.cos(a.theta);
		var dy = dt*param.speed.widget.value()*Math.sin(a.theta);
		
		const x_new = a.x + dx;
		const y_new = a.y + dy;
		
		if (x_new < 0) {dx+=L};
		if (y_new < 0) {dy+=L};
		if (x_new > L) {dx-=L};
		if (y_new > L) {dy-=L};  
		
		a.x += dx;
		a.y += dy;
		
		var neighbors = agents.filter(d =>  (d.x-a.x)**2 + (d.y-a.y)**2 <= param.interaction_radius.widget.value()**2 )
		
		var mx = mean(map(neighbors,x=> Math.cos(deg2rad(x.theta))));
		var my = mean(map(neighbors,x=> Math.sin(deg2rad(x.theta))));	
		
		a.theta = rad2deg(Math.atan2(my,mx))
		
		a.theta += deg2rad(param.wiggle.widget.value())*(Math.random()-0.5)
		
	})
	
}

const update = () => {
	
	each(agents,x => {x.active = x.index < param.number_of_particles.widget.value() ? true : false})

}

export {agents,initialize,go,update}
