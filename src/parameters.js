// maybe add an optional full set of parameters
//
// choice between square and hey lattice


export default {
		N:50,
		boundary:"periodic",
    	"T": {
			range:[1.5,2.5],
			default:1.85,
			alt_range:[0,3],
			alt_default:1.85
		},
    	"R": {
			range:[0.5,1],
			default:1,
			alt_range:[0,3],
			alt_default:1.2
		},
    	"S": {
			range:[0,1],
			default:0,
			alt_range:[0,3],
			alt_default:0.15			
		},
    	"P": {
			range:[0,1],
			default:0,
			alt_range:[0,3],
			alt_default:0.25			
		},
    	defector_concentration: {
			range:[0,1],
			default:0.1
		},
		initial_condition : {
			choices:["random","defector seed"],
		default:0
		},
		lattice_type : {
			choices:["square","hexagonal"],
		default:0
		},
		show_transition_states: {
			default: false
		},
		all_parameters: {
		default: false
		}
}

