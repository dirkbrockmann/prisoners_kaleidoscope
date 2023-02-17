import param from "./parameters.js"
import {each,maxBy,shuffle} from "lodash-es"
import * as lattices from "lattices"

const L = param.L;
const dt = param.dt;

var agents = [];



const initialize = () => {

	// set/reset timer
	param.timer={}; param.tick=0;
	const s = lattices[param.lattice_type.widget.value()==1?"hex":"square"](param.N)
		.boundary(param.boundary)
	
	console.log(s.boundary())
	agents = s.nodes;
	
	if (param.initial_condition.widget.value()==0) {
		each(agents,a=>{
			a.state = Math.random() < param.defector_concentration.widget.value() ? "D" : "C";
			a.previous_state = a.state;
		})
	} else {
		agents.forEach(a=>a.state="C")
		agents.filter(a=>{return a.x==0 && a.y==0}).forEach(a=>{a.state="D"})
	}	

	
};

const go  = () => {

	param.tick++;

	const R = param.R.widget.value();
	const S = param.S.widget.value();
	const T = param.T.widget.value();
	const P = param.P.widget.value();


	agents.forEach(a=>{
		let nD = a.neighbors.filter(n=>n.state=="D").length;
		let nC = a.neighbors.filter(n=>n.state=="C").length;
		a.state == "D" ? nD++ : nC++;
		const pc = R*nC+S*nD;
		const pd = T*nC+P*nD;
		a.score = a.state == "D" ? pd : pc;
		a.score += 0.001*Math.random();
	})

	agents.forEach(a=>{
		const myscore = a.score;
		const winning_neighbor = maxBy(a.neighbors,n=>n.score);
		const wn_score = winning_neighbor.score;
		a.next_state = wn_score >= myscore ? winning_neighbor.state : a.state;
	})

	agents.forEach(a=>{
		a.previous_state = a.state;
		a.state = a.next_state;
	})
}


function compute_score(a){
		let nD = a.neighbors.filter(n=>n.state=="D").length;
		let nC = a.neighbors.filter(n=>n.state=="C").length;
		//a.state == "D" ? nD++ : nC++;
		const pc = R*nC+S*nD;
		const pd = T*nC+P*nD;
		a.score = a.state == "D" ? pd : pc;
		a.score += 0.001*Math.random();
}

// const go  = () => {
//
// 	param.tick++;
//
// 	shuffle(agents).forEach(a=>{
// 		compute_score(a);
// 		const myscore = a.score;
// 		const winning_neighbor = maxBy(a.neighbors,n=>n.score);
// 		const wn_score = winning_neighbor.score;
// 		a.state = wn_score >= myscore ? winning_neighbor.state : a.state;
// 	})
//
// 	// agents.forEach(a=>{
// 	// 	a.previous_state = a.state;
// 	// 	//a.state = a.next_state;
// 	// })
// }

const update = () => {
	

}

export {agents,initialize,go,update}
