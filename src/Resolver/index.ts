import { Resolver, HTMLMapping } from "@teleporthq/teleport-uidl-resolver";
import { Parser } from "@teleporthq/teleport-uidl-validator";

import componentJSON from "../Validator/component";
import { log } from "../utils";

const resolver = new Resolver();
const uidl = Parser.parseComponentJSON(componentJSON);
const result = resolver.resolveUIDL(uidl, {});

log(JSON.stringify(result.node.content.referencedStyles, null, 2));
// log(JSON.stringify(HTMLMapping, null, 2));
