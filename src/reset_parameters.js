import parameters from "./parameters.js"
import * as ct from "./controls.js"
import {each} from "lodash-es"

export default (controls) => {
	
	each(ct.variables, x => x.widget.reset(controls,x.default) );
	each(ct.payoff, x => x.widget.reset(
		controls,
		parameters.all_parameters.widget.value() ? x.alt_default : x.default,
		parameters.all_parameters.widget.value() ? x.alt_range : x.range
	));

}

const reset_payoff = (controls) => {
	each(ct.payoff, x => x.widget.reset(
		controls,
		parameters.all_parameters.widget.value() ? x.alt_default : x.default,
		parameters.all_parameters.widget.value() ? x.alt_range : x.range
	));
}

export {reset_payoff}

