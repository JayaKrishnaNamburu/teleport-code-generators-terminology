import { createProjectPacker } from "@teleporthq/teleport-project-packer";
import {
  createNextProjectGenerator,
  NextTemplate
} from "@teleporthq/teleport-project-generator-next";
// import { createCodesandboxPublisher } from "@teleporthq/teleport-publisher-codesandbox";
import projectJSON from "../Validator/project";
import { log } from "../utils";

const packer = createProjectPacker();
packer.setTemplate(NextTemplate);
packer.setGenerator(createNextProjectGenerator());
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
