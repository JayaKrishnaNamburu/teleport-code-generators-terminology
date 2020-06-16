import { createProjectGenerator } from "@teleporthq/teleport-project-generator";
import { createProjectPacker } from "@teleporthq/teleport-project-packer";
import { createReactComponentGenerator } from "@teleporthq/teleport-component-generator-react";
import headConfigPlugin from "@teleporthq/teleport-plugin-jsx-head-config";
import { ReactStyleVariation } from "@teleporthq/teleport-types";
import { createComponentGenerator } from "@teleporthq/teleport-component-generator";
import { createStyleSheetPlugin } from "@teleporthq/teleport-plugin-css";
import SnowPackTemplate from "./project-template";
import Mapping from "./project-mapping";
import projectJSON from "../Validator/project";
import { log } from "../utils";

const createSnowpackReactProjectGenerator = () => {
  const reactComponentGenerator = createReactComponentGenerator(
    ReactStyleVariation.CSS
  );
  reactComponentGenerator.addMapping(Mapping);

  const reactPagesGenerator = createReactComponentGenerator(
    ReactStyleVariation.CSS
  );
  reactPagesGenerator.addMapping(Mapping);
  reactPagesGenerator.addPlugin(headConfigPlugin);

  const projectStyleSheetGenerator = createComponentGenerator();
  projectStyleSheetGenerator.addPlugin(createStyleSheetPlugin());

  const generator = createProjectGenerator({
    components: {
      generator: reactComponentGenerator,
      path: ["src", "components"]
    },
    pages: {
      generator: reactPagesGenerator,
      path: ["src", "views"]
    },
    projectStyleSheet: {
      generator: projectStyleSheetGenerator,
      path: ["src"]
    },
    static: {
      prefix: "",
      path: ["public"]
    }
  });
  return generator;
};

const packer = createProjectPacker();
packer.setTemplate(SnowPackTemplate);
packer.setGenerator(createSnowpackReactProjectGenerator());
// packer.setPublisher(createCodesandboxPublisher())

const run = async () => {
  const result = await packer.pack(projectJSON);
  log(JSON.stringify(result, null, 2));
  result.payload.files.forEach(file => {
    console.log(`\n ${file.name}.${file.fileType}`);
    console.log(file.content);
  });
};

run();
