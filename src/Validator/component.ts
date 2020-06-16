export default {
  name: "PersonSpotlight",
  propDefinitions: {
    name: {
      type: "string",
      defaultValue: "John Doe"
    },
    url: {
      type: "string",
      defaultValue: "http://lorempixel.com/150/150/"
    },
    flag: {
      type: "string",
      defaultValue: "🇷🇴"
    },
    link: {
      type: "string",
      defaultValue: "https://twitter.com/teleportHQio"
    },
    displayLink: {
      type: "string",
      defaultValue: "@teleportHQ"
    },
    bio: {
      type: "string",
      defaultValue:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    additationalProp: {
      type: "string",
      defaultValue: "This is just some additation prop, which is never used"
    }
  },
  node: {
    type: "element",
    content: {
      elementType: "container",
      referencedStyles: {
        "5ed0cb9ff4fd989551c4edc0": {
          id: "5ed0cb9ff4fd989551c4edc0",
          type: "style-map",
          content: {
            mapType: "inlined",
            conditions: [
              {
                conditionType: "screen-size",
                maxWidth: 767
              }
            ],
            styles: {
              "flex-wrap": "wrap"
            }
          }
        },
        "5ed0cb9ff4fd989551c4edc1": {
          id: "5ed0cb9ff4fd989551c4edc1",
          type: "style-map",
          content: {
            mapType: "inlined",
            conditions: [
              {
                conditionType: "screen-size",
                maxWidth: 991
              }
            ],
            styles: {
              "flex-wrap": "wrap"
            }
          }
        }
      },
      style: {
        width: "300px",
        border: "1px solid #ccc",
        padding: "10px",
        margin: "5px"
      },
      children: [
        {
          type: "element",
          content: {
            elementType: "image",
            attrs: {
              url: "$props.url"
            },
            style: {
              display: "block",
              margin: "auto",
              "border-radius": "100%"
            }
          }
        },
        {
          type: "element",
          content: {
            elementType: "textblock",
            style: {
              "font-size": "22px",
              "font-weight": "900",
              margin: "0",
              "text-align": "center"
            },
            children: [
              {
                type: "element",
                content: {
                  elementType: "text",
                  style: {
                    "margin-right": "7px",
                    "font-size": "28px",
                    "vertical-align": "middle"
                  },
                  children: [
                    {
                      type: "dynamic",
                      content: {
                        referenceType: "prop",
                        id: "flag"
                      }
                    }
                  ]
                }
              },
              {
                type: "dynamic",
                content: {
                  referenceType: "prop",
                  id: "name"
                }
              }
            ]
          }
        },
        {
          type: "element",
          content: {
            elementType: "textblock",
            style: {
              fontSize: "16px",
              margin: "0",
              "text-align": "center"
            },
            children: [
              {
                type: "element",
                content: {
                  elementType: "link",
                  style: {
                    "text-decoration": "none",
                    color: "#822cec"
                  },
                  attrs: {
                    url: {
                      type: "dynamic",
                      content: {
                        referenceType: "prop",
                        id: "link"
                      }
                    }
                  },
                  children: ["$props.displayLink"]
                }
              }
            ]
          }
        },
        {
          type: "element",
          content: {
            elementType: "textblock",
            children: [
              {
                type: "dynamic",
                content: {
                  referenceType: "prop",
                  id: "bio"
                }
              }
            ]
          }
        }
      ]
    }
  }
};
