// maybe add an optional full set of parameters
//
// choice between square and hey lattice


export default {
		N:{hex:50,square:100},
		boundary:"dirichlet",
    	"T": {
			range:[1.5,2.5],
			default:1.85,
			group:"payoff"
		},
    	"R": {
			range:[0.5,1],
			default:1,
			group:"payoff"
		},
    	"S": {
			range:[0,.1],
			default:0,
			group:"payoff"
		},
    	"P": {
			range:[0,.2],
			default:0.05,
			group:"payoff"
		},
    	defector_concentration: {
			range:[0,1],
			default:0.1
		},
		initial_condition : {
			choices:["random","defector seed"],
		default:1
		},
		lattice_type : {
			choices:["square","hexagonal"],
		default:0
		},
		show_transition_states: {
		default: true
		}
		// all_parameters: {
		// default: false
		// }
}

