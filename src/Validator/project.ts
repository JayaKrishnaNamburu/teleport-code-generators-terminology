export default {
  name: "teleportProject",
  globals: {
    settings: {
      language: "en",
      title: "Show-off for a few capabilities"
    },
    assets: [
      {
        type: "font",
        path: "https://fonts.googleapis.com/css?family=Roboto"
      },
      {
        type: "style",
        content:
          "body{font-family: 'Roboto', sans-serif; color: #2c3e50; -webkit-font-smoothing: antialiased; font-size: 16px;} a{color:inherit; text-decoration: none}"
      },
      {
        type: "icon",
        path: "/playground_assets/favicon-32x32.png",
        options: {
          iconType: "image/png",
          iconSizes: "32x32"
        }
      }
    ],
    meta: [],
    manifest: {
      icons: [
        {
          src: "/playground_assets/icons-192.png",
          type: "image/png",
          sizes: "192x192"
        },
        {
          src: "/playground_assets/icons-512.png",
          type: "image/png",
          sizes: "512x512"
        }
      ],
      theme_color: "#822CEC",
      background_color: "#822CEC"
    }
  },
  root: {
    name: "App",
    styleSetDefinitions: {
      "5ed0d05baa77d97673711820": {
        id: "5ed0d05baa77d97673711820",
        name: "primaryButton",
        type: "reusable-project-style-map",
        content: {
          background: "blue",
          width: "auto",
          color: "#fff",
          border: "1px solid #fff"
        }
      },
      "5ed0d4923de727e93cb4efa2": {
        id: "5ed0d4923de727e93cb4efa2",
        name: "secondaryButton",
        type: "reusable-project-style-map",
        content: {
          background: "red",
          width: "auto",
          color: "#fff",
          border: "1px solid #fff"
        }
      }
    },
    stateDefinitions: {
      route: {
        type: "string",
        defaultValue: "home",
        values: [
          {
            value: "home",
            pageOptions: {
              navLink: "/",
              componentName: "Home"
            },
            seo: {
              title: "Home Screen"
            }
          },
          {
            value: "team",
            seo: {
              title: "About Screen",
              metaTags: [
                { name: "description", content: "What is this about?" },
                { name: "keywords", content: "prea bun, prea ca la tara" },
                {
                  name: "viewport",
                  content: "width=device-width, initial-scale=1.0"
                },
                { property: "og:title", content: "What is this about?" },
                { property: "og:url", content: "/playground_assets/asdasd.png" }
              ],
              assets: [{ type: "canonical", path: "https://teleporthq.io" }]
            }
          },
          {
            value: "contact-us",
            pageOptions: {
              navLink: "/about-us-custom-link",
              componentName: "ContactPage"
            },
            seo: {
              assets: [{ type: "canonical", path: "https://teleporthq.io" }]
            }
          }
        ]
      }
    },
    node: {
      type: "element",
      content: {
        elementType: "Router",
        children: [
          {
            type: "conditional",
            content: {
              node: {
                type: "element",
                content: {
                  elementType: "container",
                  children: [
                    {
                      type: "element",
                      content: {
                        elementType: "container",
                        semanticType: "Navbar",
                        dependency: {
                          type: "local"
                        }
                      }
                    },
                    {
                      type: "element",
                      content: {
                        elementType: "main",
                        style: {
                          width: "960px",
                          "text-align": "center"
                        },
                        children: [
                          {
                            type: "element",
                            content: {
                              elementType: "image",
                              attrs: {
                                url: "http://lorempixel.com/960/200/",
                                alt: "Main banner on the home page"
                              }
                            }
                          },
                          {
                            type: "element",
                            content: {
                              style: {
                                margin: "30px auto"
                              },
                              elementType: "heading1",
                              children: [
                                "Welcome to the teleportHQ sample website!"
                              ]
                            }
                          },
                          {
                            type: "element",
                            content: {
                              elementType: "textblock",
                              style: {
                                color: "#6a8bad",
                                fontSize: "26px",
                                maxWidth: "560px",
                                margin: "30px auto",
                                "text-align": "center"
                              },
                              children: [
                                "Building the infrastructure for the next generation of web and mobile interfaces"
                              ]
                            }
                          },
                          {
                            type: "element",
                            content: {
                              elementType: "textblock",
                              children: [
                                {
                                  type: "element",
                                  content: {
                                    elementType: "text",
                                    style: {
                                      color: "white",
                                      backgroundColor: "#822cec",
                                      padding: "12px 24px",
                                      borderRadius: "4px",
                                      margin: "auto",
                                      "text-decoration": "none"
                                    },
                                    abilities: {
                                      link: {
                                        type: "section",
                                        content: {
                                          id: "test"
                                        }
                                      }
                                    },
                                    children: ["Get Started →"]
                                  }
                                }
                              ]
                            }
                          },
                          {
                            type: "element",
                            content: {
                              elementType: "container",
                              name: "columns",
                              referencedStyles: {
                                "5ed0cb9ff4fd989551c4edc0": {
                                  id: "5ed0cb9ff4fd989551c4edc0",
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
                                display: "flex",
                                "justify-content": "space-between",
                                "margin-top": "50px",
                                "border-top": "1px solid #ccc"
                              },
                              children: [
                                {
                                  type: "element",
                                  content: {
                                    elementType: "container",
                                    referencedStyles: {
                                      "5ed0cc78c15bf36607fceff5": {
                                        id: "5ed0cc78c15bf36607fceff5",
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
                                            flex: "inherit"
                                          }
                                        }
                                      }
                                    },
                                    style: {
                                      flex: "1"
                                    },
                                    children: [
                                      {
                                        type: "element",
                                        content: {
                                          elementType: "heading2",
                                          children: ["Platform Independent"]
                                        }
                                      },
                                      {
                                        type: "element",
                                        content: {
                                          elementType: "textblock",
                                          children: [
                                            "Using the same UI representation, you can build modern Web & Mobile applications."
                                          ]
                                        }
                                      }
                                    ]
                                  }
                                },
                                {
                                  type: "element",
                                  content: {
                                    elementType: "container",
                                    referencedStyles: {
                                      "5ed0cd2ef0ece67901cc8f20": {
                                        id: "5ed0cd2ef0ece67901cc8f20",
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
                                            flex: "inherit"
                                          }
                                        }
                                      }
                                    },
                                    style: {
                                      flex: "1"
                                    },
                                    children: [
                                      {
                                        type: "element",
                                        content: {
                                          elementType: "heading2",
                                          children: ["Plugable Architecture"]
                                        }
                                      },
                                      {
                                        type: "element",
                                        content: {
                                          elementType: "textblock",
                                          children: [
                                            "Our plugin system allows you to customize your exported code to the last detail."
                                          ]
                                        }
                                      }
                                    ]
                                  }
                                },
                                {
                                  type: "element",
                                  content: {
                                    elementType: "container",
                                    referencedStyles: {
                                      "5ed0cd26bd7301de692957bf": {
                                        id: "5ed0cd26bd7301de692957bf",
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
                                            flex: "inherit"
                                          }
                                        }
                                      }
                                    },
                                    style: {
                                      flex: "1"
                                    },
                                    children: [
                                      {
                                        type: "element",
                                        content: {
                                          elementType: "heading2",
                                          children: ["An Open Community"]
                                        }
                                      },
                                      {
                                        type: "element",
                                        content: {
                                          elementType: "textblock",
                                          children: [
                                            "We open-sourced our entire ecosystem and we invite everyone to contribute to it!"
                                          ]
                                        }
                                      }
                                    ]
                                  }
                                }
                              ]
                            }
                          },
                          {
                            type: "element",
                            content: {
                              elementType: "container",
                              style: {
                                width: "100%",
                                marginTop: 15,
                                marginBottom: 15,
                                "line-height": 1.5
                              },
                              children: [
                                "We introcuded some new features to make your use your style sets defined once and use across the pages.",
                                "Here are some of them, shown below as examples"
                              ]
                            }
                          },
                          {
                            type: "element",
                            content: {
                              elementType: "button",
                              style: {
                                "font-size": "16px",
                                padding: "12px 24px",
                                "border-radius": "6px"
                              },
                              referencedStyles: {
                                "5ed0d3daf36df4da926078ee": {
                                  id: "5ed0d3daf36df4da926078ee",
                                  type: "style-map",
                                  content: {
                                    mapType: "project-referenced",
                                    referenceId: "5ed0d05baa77d97673711820"
                                  }
                                }
                              },
                              children: ["Primary Button"]
                            }
                          },
                          {
                            type: "element",
                            content: {
                              elementType: "button",
                              style: {
                                "font-size": "16px",
                                padding: "12px 24px",
                                "border-radius": "6px"
                              },
                              referencedStyles: {
                                "5ed0d3daf36df4da926078ee": {
                                  id: "5ed0d3daf36df4da926078ee",
                                  type: "style-map",
                                  content: {
                                    mapType: "project-referenced",
                                    referenceId: "5ed0d4923de727e93cb4efa2"
                                  }
                                }
                              },
                              children: ["Secondary Button"]
                            }
                          }
                        ]
                      }
                    }
                  ]
                }
              },
              value: "home",
              reference: {
                type: "dynamic",
                content: {
                  referenceType: "state",
                  id: "route"
                }
              }
            }
          },
          {
            type: "conditional",
            content: {
              node: {
                type: "element",
                content: {
                  elementType: "container",
                  children: [
                    {
                      type: "element",
                      content: {
                        elementType: "component",
                        semanticType: "Navbar",
                        dependency: {
                          type: "local"
                        }
                      }
                    },
                    {
                      type: "element",
                      content: {
                        elementType: "component",
                        semanticType: "PersonList",
                        dependency: {
                          type: "local"
                        }
                      }
                    }
                  ]
                }
              },
              value: "team",
              reference: {
                type: "dynamic",
                content: {
                  referenceType: "state",
                  id: "route"
                }
              }
            }
          },
          {
            type: "conditional",
            content: {
              node: {
                type: "element",
                content: {
                  elementType: "container",
                  children: [
                    {
                      type: "element",
                      content: {
                        elementType: "component",
                        semanticType: "Navbar",
                        dependency: {
                          type: "local"
                        }
                      }
                    },
                    {
                      type: "element",
                      content: {
                        elementType: "component",
                        semanticType: "ContactForm",
                        dependency: {
                          type: "local"
                        }
                      }
                    }
                  ]
                }
              },
              value: "contact-us",
              reference: {
                type: "dynamic",
                content: {
                  referenceType: "state",
                  id: "route"
                }
              }
            }
          }
        ]
      }
    }
  },
  components: {
    Navbar: {
      name: "Navbar",
      node: {
        type: "element",
        content: {
          elementType: "nav",
          style: {
            "border-bottom": {
              type: "static",
              content: "1px solid rgba(0,0,0,0.25)"
            }
          },
          children: [
            {
              type: "element",
              content: {
                elementType: "ul",
                name: "list-container",
                style: {
                  "list-style": "none",
                  margin: "0px",
                  padding: "0px",
                  display: "flex",
                  "font-size": "18px"
                },
                children: [
                  {
                    type: "element",
                    content: {
                      elementType: "li",
                      name: "home-link",
                      referencedStyles: {
                        "5ecf9f48c169f22eb26ce91d": {
                          id: "5ecf9f48c169f22eb26ce91d",
                          type: "style-map",
                          content: {
                            mapType: "inlined",
                            conditions: [
                              {
                                conditionType: "element-state",
                                content: "hover"
                              }
                            ],
                            styles: {
                              color: { type: "static", content: "red" },
                              "border-bottom": "3px solid red",
                              "padding-bottom": "7px"
                            }
                          }
                        }
                      },
                      style: {
                        padding: "10px 20px",
                        transition: "all .15s ease-in-out",
                        cursor: "pointer"
                      },
                      children: [
                        {
                          type: "element",
                          content: {
                            elementType: "text",
                            abilities: {
                              link: {
                                type: "navlink",
                                content: {
                                  routeName: "home"
                                }
                              }
                            },
                            children: ["Home"]
                          }
                        }
                      ]
                    }
                  },
                  {
                    type: "element",
                    content: {
                      name: "team-link",
                      elementType: "li",
                      referencedStyles: {
                        "5ecfa07284d8848f05ef9c2d": {
                          id: "5ecfa07284d8848f05ef9c2d",
                          type: "style-map",
                          content: {
                            mapType: "inlined",
                            conditions: [
                              {
                                conditionType: "element-state",
                                content: "hover"
                              }
                            ],
                            styles: {
                              color: { type: "static", content: "red" },
                              "border-bottom": "3px solid red",
                              "padding-bottom": "7px"
                            }
                          }
                        }
                      },
                      style: {
                        padding: "10px 20px",
                        transition: "all .15s ease-in-out",
                        cursor: "pointer"
                      },
                      children: [
                        {
                          type: "element",
                          content: {
                            elementType: "text",
                            abilities: {
                              link: {
                                type: "navlink",
                                content: {
                                  routeName: "team"
                                }
                              }
                            },
                            children: ["Team"]
                          }
                        }
                      ]
                    }
                  },
                  {
                    type: "element",
                    content: {
                      elementType: "li",
                      name: "contact-link",
                      referencedStyles: {
                        "5ecfa0d2f9f29ada8482ff03": {
                          id: "5ecfa0d2f9f29ada8482ff03",
                          type: "style-map",
                          content: {
                            mapType: "inlined",
                            conditions: [
                              {
                                conditionType: "element-state",
                                content: "hover"
                              }
                            ],
                            styles: {
                              color: { type: "static", content: "red" },
                              "border-bottom": "3px solid red",
                              "padding-bottom": "7px"
                            }
                          }
                        }
                      },
                      style: {
                        padding: "10px 20px",
                        transition: "all .15s ease-in-out",
                        cursor: "pointer"
                      },
                      children: [
                        {
                          type: "element",
                          content: {
                            elementType: "text",
                            abilities: {
                              link: {
                                type: "navlink",
                                content: {
                                  routeName: "contact-us"
                                }
                              }
                            },
                            children: ["Contact Us"]
                          }
                        }
                      ]
                    }
                  }
                ]
              }
            }
          ]
        }
      }
    },
    PersonSpotlight: {
      name: "PersonSpotlight",
      propDefinitions: {
        name: {
          type: "string",
          defaultValue: "John Doe"
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
        }
      },
      node: {
        type: "element",
        content: {
          elementType: "container",
          style: {
            width: "300px",
            border: "1px solid #ccc",
            padding: "10px",
            margin: "5px",
            color: "inherit"
          },
          children: [
            {
              type: "element",
              content: {
                elementType: "image",
                abilities: {
                  link: {
                    type: "url",
                    content: {
                      url: "$props.link",
                      newTab: true
                    }
                  }
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
                      elementType: "text",
                      style: {
                        "text-decoration": "none",
                        color: "#822cec"
                      },
                      abilities: {
                        link: {
                          type: "mail",
                          content: {
                            mail: "mail@teleporthq.io",
                            body: "Hello! is it me you're looking for?"
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
    },
    PersonList: {
      name: "PersonList",
      node: {
        type: "element",
        content: {
          elementType: "container",
          name: "wrapper",
          style: {
            display: "flex",
            "flex-wrap": "wrap",
            padding: "5px"
          },
          children: [
            {
              type: "repeat",
              content: {
                node: {
                  type: "element",
                  content: {
                    elementType: "component",
                    semanticType: "PersonSpotlight",
                    dependency: {
                      type: "local",
                      path: "./person-spotlight"
                    },
                    attrs: {
                      name: "$local.person.name",
                      flag: "$local.person.flag",
                      displayLink: "$local.person.displayLink",
                      url: "$local.person.url"
                    }
                  }
                },
                dataSource: {
                  type: "static",
                  content: [
                    {
                      name: "Alice",
                      flag: "🇩🇪",
                      displayLink: "@alicecodes",
                      url: "https://picsum.photos/150?v=alice"
                    },
                    {
                      name: "Bob",
                      displayLink: "@bobthebest",
                      url: "https://picsum.photos/150?v=bob"
                    },
                    {
                      name: "Carol",
                      flag: "🇨🇱",
                      displayLink: "@oh.carol",
                      url: "https://picsum.photos/150?v=carol"
                    }
                  ]
                },
                meta: {
                  iteratorName: "person",
                  useIndex: true
                }
              }
            }
          ]
        }
      }
    },
    ContactForm: {
      name: "ContactForm",
      node: {
        type: "element",
        content: {
          elementType: "form",
          attrs: {
            type: "get",
            url: "/"
          },
          style: {
            margin: "20px",
            "font-size": "18px"
          },
          children: [
            {
              type: "element",
              content: {
                elementType: "image",
                name: "form-banner",
                attrs: {
                  url: "/playground_assets/some-banner.png"
                }
              }
            },
            {
              type: "element",
              content: {
                elementType: "container",
                name: "name-group",
                style: {
                  "margin-bottom": "10px"
                },
                children: [
                  {
                    type: "element",
                    content: {
                      elementType: "label",
                      attrs: {
                        for: "name"
                      },
                      style: {
                        "vertical-align": "middle",
                        display: "inline-block",
                        width: "100px"
                      },
                      children: ["Name:"]
                    }
                  },
                  {
                    type: "element",
                    content: {
                      elementType: "textinput",
                      style: {
                        padding: "5px",
                        fontSize: "16px"
                      },
                      attrs: {
                        id: "name",
                        name: "name"
                      }
                    }
                  }
                ]
              }
            },
            {
              type: "element",
              content: {
                elementType: "container",
                name: "email-group",
                style: {
                  "margin-bottom": "10px"
                },
                children: [
                  {
                    type: "element",
                    content: {
                      elementType: "label",
                      attrs: {
                        for: "email"
                      },
                      style: {
                        "vertical-align": "middle",
                        display: "inline-block",
                        width: "100px"
                      },
                      children: ["Email:"]
                    }
                  },
                  {
                    type: "element",
                    content: {
                      elementType: "textinput",
                      style: {
                        padding: "5px",
                        fontSize: "16px"
                      },
                      attrs: {
                        type: "email",
                        id: "email",
                        name: "email"
                      }
                    }
                  }
                ]
              }
            },
            {
              type: "element",
              content: {
                elementType: "container",
                name: "message-group",
                style: {
                  "margin-bottom": "10px"
                },
                children: [
                  {
                    type: "element",
                    content: {
                      name: "message-label",
                      elementType: "label",
                      attrs: {
                        for: "message"
                      },
                      style: {
                        "vertical-align": "top",
                        display: "inline-block",
                        width: "100px",
                        marginTop: "5px"
                      },
                      children: ["Message:"]
                    }
                  },
                  {
                    type: "element",
                    content: {
                      elementType: "textarea",
                      style: {
                        padding: "5px",
                        fontSize: "16px",
                        "border-color": "#ccc"
                      },
                      attrs: {
                        rows: 8,
                        cols: 30,
                        id: "message",
                        name: "message"
                      }
                    }
                  }
                ]
              }
            },
            {
              type: "element",
              content: {
                elementType: "button",
                referencedStyles: {
                  "5ecfa1233b8e50f60ea2b64d": {
                    id: "5ecfa1233b8e50f60ea2b64d",
                    type: "style-map",
                    content: {
                      mapType: "inlined",
                      conditions: [
                        { conditionType: "element-state", content: "hover" }
                      ],
                      styles: {
                        "background-color": "green",
                        color: "white"
                      }
                    }
                  }
                },
                style: {
                  "font-size": "18px",
                  padding: "5px 10px",
                  "background-color": "white",
                  color: "green",
                  marginLeft: "100px",
                  border: "1px solid grey",
                  transition: "all .35s ease-out",
                  "border-radius": "3px",
                  cursor: "pointer"
                },
                children: ["Send"]
              }
            }
          ]
        }
      }
    },
    ExpandableArea: {
      name: "ExpandableArea",
      propDefinitions: {
        header: {
          type: "string",
          defaultValue: "This whole area is clickable!"
        },
        expandableHeight: {
          type: "string",
          defaultValue: "100px"
        }
      },
      stateDefinitions: {
        isExpanded: {
          type: "boolean",
          defaultValue: false
        }
      },
      node: {
        type: "element",
        content: {
          elementType: "container",
          style: {
            "border-bottom": "1px solid #ccc"
          },
          children: [
            {
              type: "element",
              content: {
                elementType: "container",
                name: "clickable-area",
                style: {
                  cursor: "pointer",
                  padding: "10px 0"
                },
                events: {
                  click: [
                    {
                      type: "stateChange",
                      modifies: "isExpanded",
                      newState: "$toggle"
                    }
                  ]
                },
                children: [
                  {
                    type: "element",
                    content: {
                      elementType: "text",
                      style: {
                        "font-size": "20px",
                        "font-weight": "600",
                        "line-height": "1.5"
                      },
                      children: [
                        {
                          type: "dynamic",
                          content: {
                            referenceType: "prop",
                            id: "header"
                          }
                        }
                      ]
                    }
                  },
                  {
                    type: "element",
                    content: {
                      elementType: "text",
                      style: {
                        float: "right",
                        "margin-top": "4px",
                        "line-height": "1.5"
                      },
                      name: "button",
                      children: [
                        {
                          type: "element",
                          content: {
                            elementType: "svg",
                            attrs: {
                              width: "15",
                              height: "15",
                              viewBox: "0 0 15 15",
                              fill: "none"
                            },
                            children: [
                              {
                                type: "element",
                                content: {
                                  elementType: "line",
                                  attrs: {
                                    x1: "15",
                                    y1: "7.5",
                                    x2: "0",
                                    y2: "7.5",
                                    stroke: "#000"
                                  }
                                }
                              },
                              {
                                type: "conditional",
                                content: {
                                  node: {
                                    type: "element",
                                    content: {
                                      elementType: "line",
                                      attrs: {
                                        x1: "7.5",
                                        y1: "0",
                                        x2: "7.5",
                                        y2: "15",
                                        stroke: "#000"
                                      }
                                    }
                                  },
                                  reference: {
                                    type: "dynamic",
                                    content: {
                                      referenceType: "state",
                                      id: "isExpanded"
                                    }
                                  },
                                  value: false
                                }
                              }
                            ]
                          }
                        }
                      ]
                    }
                  }
                ]
              }
            },
            {
              type: "element",
              content: {
                elementType: "container",
                name: "collapsible-area",
                attrs: {
                  "data-is-expanded": "$state.isExpanded"
                },
                style: {
                  height: "0",
                  overflow: "hidden",
                  transition: "height .2s ease-out"
                },
                children: [
                  {
                    type: "slot",
                    content: {}
                  }
                ]
              }
            }
          ]
        }
      }
    }
  }
};
