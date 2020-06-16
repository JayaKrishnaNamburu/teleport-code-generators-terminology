import { Parser } from "@teleporthq/teleport-uidl-validator";
import componentJSON from "../Validator/component";
import { log } from "../utils";

const result = Parser.parseComponentJSON(componentJSON);
log(JSON.stringify(result, null, 2));
