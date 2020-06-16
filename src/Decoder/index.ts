import { staticValueDecoder } from "@teleporthq/teleport-uidl-validator/dist/cjs/decoders/utils";
import { log } from "../utils";

const staticUIDLNode = {
  type: "static",
  content: "Hello World"
};

const result = staticValueDecoder.run(staticUIDLNode);
log(JSON.stringify(result, null, 2));
