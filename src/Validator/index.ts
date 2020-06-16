/*
  Validator for @teleporthq/teleport-uidl-validator
*/
import { Validator } from "@teleporthq/teleport-uidl-validator";
import componentJSON from "./component";
import componentContent from "./component-content";
import { log } from "../utils";

const validator = new Validator();

// Component Validator
const result = validator.validateComponentSchema(componentJSON);
log(JSON.stringify(result, null, 2));

// Component Content Validator
// https://repl.teleporthq.io/?uidlLink=ay4layb0lxcyefevl3223

const contentValidation = validator.validateComponentContent(componentContent);
log(JSON.stringify(contentValidation, null, 2));
