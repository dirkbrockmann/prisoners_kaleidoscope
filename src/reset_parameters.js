import parameters from "./parameters.js"
import * as ct from "./controls.js"
import {each} from "lodash-es"

export default (controls) => {
	
	each(ct.variables, x => x.widget.reset(controls,x.default) );
	each(ct.payoff, x => x.widget.reset(controls,x.default) );
	

}



