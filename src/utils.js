import * as d3 from "d3"
import {map, replace, capitalize, each, has, isBoolean, pickBy, toPairs } from "lodash-es"

// const add_id_label = (x) => map(toPairs(x), d => {d[1]["id"]=d[0]; d[1]["label"]=replace(capitalize(d[0]),/_/g," "); return d[1]} );

const add_id_label = (x) => map(toPairs(x), d => {d[1]["id"]=d[0]; d[1]["label"]=replace(capitalize(d[0]),/_/g," ")} );

const toArray = (x) => map(toPairs(x),d=>d[1]);

const add_widget = (p,w) => each(p,(v,i) => v["widget"]=w[i]);	



const get_variables = (p) => pickBy(p, v =>  has(v, "range") && !has(v, "group"))  
const get_payoff = (p) => pickBy(p, v =>  v.group == "payoff" )  
const get_booleans = (p) => pickBy(p, v =>  isBoolean(v.default))  
const get_choices = (p) => pickBy(p, v =>  has(v, "choices"))  

const color_schemes = {
	may: {
		D:"red",
		DD:"red",
		C:"blue",
		CC:"blue",
		CD:"yellow",
		DC:"green" 
	},
	mine: {
		D:"rgb(77,25,77)",
		DD:"rgb(77,25,77)",
		C:"rgb(127,179,112)",
		CC:"rgb(127,179,112)",
		CD:"rgb(234,168,63)",
		DC:"rgb(126,201,227)"
	},
	mine2: {
		D:"black",
		DD:"black",
		C:"teal",
		CC:"teal",
		CD:"aqua",
		DC:"white"
	}
}

export {toArray,add_id_label,add_widget,get_variables,get_booleans,get_choices,get_payoff,color_schemes}

