export default { 
	widgets:{
		payoff_slider_size: 180,
		payoff_slider_show: true,
		payoff_slider_gap : 1.5,
		payoff_slider_hgap: 6,
		payoff_slider_girth: 12,
		payoff_slider_knob: 14,
		payoff_slider_anchor: {x:0.5,y:10},
		payoff_slider_labels: {
			T:"T",
			R:"R",
			S:"S",
			P:"P"
		},
		slider_size: 180,
		slider_girth: 12,
		slider_knob: 14,
		slider_anchor: {x:6.5,y:5.5},
		toggle_anchor: {x:5.5,y:3},
		toggle_label_pos:"right",
		playbutton_size: 120,
		playbutton_anchor:{x:2.5,y:2},
		backbutton_anchor:{x:3.5,y:5},
		resetbutton_anchor:{x:1.5,y:5},
		radio_size:40,
		radio_orientation:"vertical",
		radio_label_position:"right",
		radio_shape:"rect",
		lattice_anchor:{x:1,y:7},
		ic_anchor:{x:6.5,y:7},
		legend_anchor:{x:5.5,y:1},
		legend_gap:1.75,
		legend_size:10,
		legend_vgap:0.5
	},
	simulation: {
		delay:0,
		colors:{
			D:"black",
			DD:"black",
			C:"teal",
			CC:"teal",
			CD:"aqua",
			DC:"white"
		},
		legend:{
			D:"D",
			C:"C",
			DD:"D\u2192D",
			CC:"C\u2192C",
			CD:"D\u2192C",
			DC:"C\u2192D"
		}		
	}
}