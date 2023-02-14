import parameters from "./parameters.js"
import * as ct from "./controls.js"
import {each} from "lodash-es"

export default (controls) => {
	each(ct.variables(parameters), x => x.widget.reset(controls,x.default) );
	each(ct.booleans(parameters), x => x.widget.reset(controls,x.default) );
	each(ct.choices(parameters), x => x.widget.reset(controls,x.default)  );
	parameters.number_of_particles.widget.update();
}


