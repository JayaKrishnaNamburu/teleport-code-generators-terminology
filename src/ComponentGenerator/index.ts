import { createReactComponentGenerator } from "@teleporthq/teleport-component-generator-react";
import componentJSON from "../Validator/component";
import { log } from "../utils";
const generator = createReactComponentGenerator();

generator
  .generateComponent(componentJSON)
  .then(res => {
    const { files } = res;
    const reactFile = files.find(file => file.fileType === "js");
    log(reactFile.content);
  })
  .catch(err => console.warn(err));
