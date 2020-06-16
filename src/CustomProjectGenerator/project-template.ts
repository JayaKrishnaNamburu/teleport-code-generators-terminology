export default {
  name: "teleport-project-snowpack-react",
  files: [
    {
      name: "package",
      content: `
{
  "name": "@teleporthq/teleport-project-snowpack-react",
  "version": "1.1.4",
  "license": "MIT",
  "scripts": {
    "start": "snowpack dev",
    "build": "snowpack build",
    "test": "jest"
  },
  "dependencies": {
    "react": "^16.13.0",
    "react-dom": "^16.13.0"
  },
  "devDependencies": {
    "@snowpack/app-scripts-react": "^1.1.4",
    "@testing-library/jest-dom": "^5.5.0",
    "@testing-library/react": "^10.0.3",
    "jest": "^25.4.0",
    "prettier": "^2.0.0",
    "snowpack": "^2.2.0"
  }
}`,
      fileType: "json"
    },
    {
      name: "snowpack.config",
      fileType: "json",
      content: `
{
  "extends": "@snowpack/app-scripts-react",
  "scripts": {},
  "plugins": []
}
`
    },
    {
      name: "jest.setup",
      fileType: "js",
      content: `
import "@testing-library/jest-dom/extend-expect";
`
    },
    {
      name: `jest.config`,
      fileType: "js",
      content: `
module.exports = {
  ...require("@snowpack/app-scripts-react/jest.config.js")(),
};
`
    },
    {
      name: "babel.config",
      fileType: "json",
      content: `
{
  "extends": "@snowpack/app-scripts-react/babel.config.json"
}
`
    },
    {
      name: ".prettierrc",
      fileType: "",
      content: `
{
  "singleQuote": true,
  "trailingComma": "all"
}
`
    }
  ],
  subFolders: []
};
