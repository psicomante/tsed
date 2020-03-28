import * as SwaggerParser from "@apidevtools/swagger-parser";
import {CollectionOf, GenericOf, Generics, getJsonSchema, Property, Returns, SpecTypes} from "@tsed/schema";
import {expect} from "chai";
import {unlinkSync, writeJsonSync} from "fs-extra";
import {Consumes, In, Min, Name, OperationPath, Required} from "../decorators";
import {getSpec} from "./getSpec";

const validate = async (spec: any, version = SpecTypes.SWAGGER) => {
  const file = __dirname + "/spec.json";
  spec = {
    ...spec
  };
  try {
    if (version === SpecTypes.OPENAPI) {
      spec.openapi = "3.0.1";
    } else {
      spec.swagger = "2.0";
    }

    spec.info = {
      title: "Title",
      description: "Description",
      termsOfService: "termsOfService",
      contact: {
        email: "apiteam@swagger.io"
      },
      license: {
        name: "Apache 2.0",
        url: "http://www.apache.org/licenses/LICENSE-2.0.html"
      },
      version: "1.0.0"
    };

    writeJsonSync(file, spec, {encoding: "utf8"});
    await SwaggerParser.validate(file);
    unlinkSync(file);

    return true;
  } catch (er) {
    console.error(er);
    // unlinkSync(file);

    return er;
  }
};

describe("getSpec()", () => {
  describe("In", () => {
    describe("Path", () => {
      it("should declare all schema correctly (path - swagger2)", async () => {
        // WHEN
        class Controller {
          @OperationPath("GET", "/")
          method(@In("path") @Name("basic") basic: string) {
          }
        }

        // THEN
        const spec = getSpec(Controller, {
          spec: SpecTypes.SWAGGER
        });
        expect(await validate(spec)).to.eq(true);
      });
      it("should declare all schema correctly (path optional - swagger2)", async () => {
        // WHEN
        class Controller {
          @OperationPath("GET", "/:id?")
          method(@In("path") @Name("id") id: string) {
          }
        }

        // THEN
        const spec = getSpec(Controller, {spec: SpecTypes.SWAGGER});

        expect(await validate(spec)).to.eq(true);
        expect(spec).to.deep.equal({
          definitions: {},
          paths: {
            "/": {
              get: {
                operationId: "controllerMethod",
                parameters: [],
                responses: {
                  "200": {
                    description: ""
                  }
                }
              }
            },
            "/{id}": {
              get: {
                operationId: "controllerMethodById",
                parameters: [
                  {
                    in: "path",
                    name: "id",
                    required: true,
                    type: "string"
                  }
                ],
                responses: {
                  "200": {
                    description: ""
                  }
                }
              }
            }
          }
        });
      });
      it("should declare all schema correctly with expression", async () => {
        // WHEN
        class Controller {
          @OperationPath("GET", "/:id?")
          method(@In("path") id: string) {
          }
        }

        // THEN
        const spec = getSpec(Controller, {spec: SpecTypes.SWAGGER});

        expect(await validate(spec)).to.eq(true);
        expect(spec).to.deep.equal({
          definitions: {},
          paths: {
            "/": {
              get: {
                operationId: "controllerMethod",
                parameters: [],
                responses: {
                  "200": {
                    description: ""
                  }
                }
              }
            },
            "/{id}": {
              get: {
                operationId: "controllerMethodById",
                parameters: [
                  {
                    in: "path",
                    name: "id",
                    required: true,
                    type: "string"
                  }
                ],
                responses: {
                  "200": {
                    description: ""
                  }
                }
              }
            }
          }
        });
      });
    });
    describe("Query", () => {
      it("should declare all schema correctly (query - swagger2)", async () => {
        // WHEN
        class Controller {
          @OperationPath("GET", "/:id")
          method(@In("query") @Name("basic") basic: string) {
          }
        }

        // THEN
        const spec = getSpec(Controller, {spec: SpecTypes.SWAGGER});

        expect(spec).to.deep.equal({
          definitions: {},
          paths: {
            "/{id}": {
              get: {
                operationId: "controllerMethod",
                parameters: [
                  {
                    in: "path",
                    name: "id",
                    required: true,
                    type: "string"
                  },
                  {
                    in: "query",
                    name: "basic",
                    required: false,
                    type: "string"
                  }
                ],
                responses: {
                  "200": {
                    description: ""
                  }
                }
              }
            }
          }
        });
      });
    });
    describe("Body", () => {
      it("should declare all schema correctly (model - swagger2)", async () => {
        class MyModel {
          @Property()
          prop: string;
        }

        class Controller {
          @Consumes("application/json")
          @OperationPath("POST", "/")
          method(@In("body") @Required() num: MyModel) {
          }
        }

        // THEN
        const spec = getSpec(Controller, {spec: SpecTypes.SWAGGER});

        expect(spec).to.deep.equal({
          definitions: {
            MyModel: {
              type: "object",
              properties: {
                prop: {
                  type: "string"
                }
              }
            }
          },
          paths: {
            "/": {
              post: {
                operationId: "controllerMethod",
                consumes: ["application/json"],
                parameters: [
                  {
                    in: "body",
                    name: "body",
                    required: true,
                    schema: {
                      $ref: "#/definitions/MyModel"
                    }
                  }
                ],
                responses: {
                  "200": {
                    description: ""
                  }
                }
              }
            }
          }
        });
      });
      it("should declare all schema correctly (model - openapi3)", async () => {
        class MyModel {
          @Property()
          prop: string;
        }

        class Controller {
          @Consumes("application/json")
          @OperationPath("POST", "/")
          method(@In("body") @Required() num: MyModel) {
          }
        }

        // THEN
        const spec = getSpec(Controller, {spec: SpecTypes.OPENAPI});

        expect(spec).to.deep.equal({
          components: {
            schemas: {
              MyModel: {
                properties: {
                  prop: {
                    type: "string"
                  }
                },
                type: "object"
              }
            }
          },
          paths: {
            "/": {
              post: {
                operationId: "controllerMethod",
                parameters: [],
                requestBody: {
                  content: {
                    "application/json": {
                      schema: {
                        $ref: "#/components/schemas/MyModel"
                      }
                    }
                  },
                  required: true
                },
                responses: {
                  "200": {
                    description: ""
                  }
                }
              }
            }
          }
        });
      });
      it("should declare all schema correctly (models - swagger2)", async () => {
        class MyModel {
          @Property()
          prop: string;
        }

        class MyModel2 {
          @Property()
          prop2: string;
        }

        class Controller {
          @Consumes("application/json")
          @OperationPath("POST", "/")
          method(@In("body") @Required() model: MyModel,
                 @In("body") @Required() model2: MyModel2) {
          }
        }

        // THEN
        const spec = getSpec(Controller, {spec: SpecTypes.SWAGGER});

        expect(spec).to.deep.equal({
          "definitions": {
            "MyModel": {
              "properties": {
                "prop": {
                  "type": "string"
                }
              },
              "type": "object"
            },
            "MyModel2": {
              "properties": {
                "prop2": {
                  "type": "string"
                }
              },
              "type": "object"
            }
          },
          "paths": {
            "/": {
              "post": {
                "consumes": [
                  "application/json"
                ],
                "operationId": "controllerMethod",
                "parameters": [
                  {
                    "in": "body",
                    "name": "body",
                    "required": true,
                    "schema": {
                      allOf: [
                        {
                          "$ref": "#/definitions/MyModel"
                        },
                        {
                          "$ref": "#/definitions/MyModel2"
                        }
                      ],
                      "type": "object"
                    }
                  }
                ],
                "responses": {
                  "200": {
                    "description": ""
                  }
                }
              }
            }
          }
        });
      });
      it("should declare all schema correctly (model - with name - openapi3)", async () => {
        class MyModel {
          @Property()
          prop: string;
        }

        class Controller {
          @Consumes("application/json")
          @OperationPath("POST", "/")
          method(@In("body") @Name("model") @Required() model: MyModel) {
          }
        }

        // THEN
        const spec = getSpec(Controller, {spec: SpecTypes.OPENAPI});

        expect(spec).to.deep.equal({
          components: {
            schemas: {
              MyModel: {
                properties: {
                  prop: {
                    type: "string"
                  }
                },
                type: "object"
              }
            }
          },
          paths: {
            "/": {
              post: {
                operationId: "controllerMethod",
                parameters: [],
                requestBody: {
                  content: {
                    "application/json": {
                      schema: {
                        type: "object",
                        properties: {
                          model: {
                            $ref: "#/components/schemas/MyModel"
                          }
                        },
                        required: [
                          "model"
                        ]
                      }
                    }
                  },
                  required: true
                },
                responses: {
                  "200": {
                    description: ""
                  }
                }
              }
            }
          }
        });
      });
      it("should declare all schema correctly (model - with name - swagger2)", async () => {
        class MyModel {
          @Property()
          prop: string;
        }

        class Controller {
          @Consumes("application/json")
          @OperationPath("POST", "/")
          method(@In("body") @Name("model") @Required() model: MyModel) {
          }
        }

        // THEN
        const spec = getSpec(Controller, {spec: SpecTypes.SWAGGER});

        expect(spec).to.deep.equal({
          "definitions": {
            "MyModel": {
              "properties": {
                "prop": {
                  "type": "string"
                }
              },
              "type": "object"
            }
          },
          "paths": {
            "/": {
              "post": {
                "consumes": [
                  "application/json"
                ],
                "operationId": "controllerMethod",
                "parameters": [
                  {
                    "in": "body",
                    "name": "body",
                    "required": true,
                    "schema": {
                      "properties": {
                        "model": {
                          "$ref": "#/definitions/MyModel"
                        }
                      },
                      "required": [
                        "model"
                      ],
                      "type": "object"
                    }
                  }
                ],
                "responses": {
                  "200": {
                    "description": ""
                  }
                }
              }
            }
          }
        });
      });
      it("should declare all schema correctly (models - names - swagger2)", async () => {
        class MyModel {
          @Property()
          prop: string;
        }

        class MyModel2 {
          @Property()
          prop2: string;
        }

        class Controller {
          @Consumes("application/json")
          @OperationPath("POST", "/")
          method(@In("body") @Name("model1") @Required() model: MyModel,
                 @In("body") @Name("model2") @Required() model2: MyModel2) {
          }
        }

        // THEN
        const spec = getSpec(Controller, {spec: SpecTypes.SWAGGER});

        expect(spec).to.deep.equal({
          "definitions": {
            "MyModel": {
              "properties": {
                "prop": {
                  "type": "string"
                }
              },
              "type": "object"
            },
            "MyModel2": {
              "properties": {
                "prop2": {
                  "type": "string"
                }
              },
              "type": "object"
            }
          },
          "paths": {
            "/": {
              "post": {
                "consumes": [
                  "application/json"
                ],
                "operationId": "controllerMethod",
                "parameters": [
                  {
                    "in": "body",
                    "name": "body",
                    "required": true,
                    "schema": {
                      "properties": {
                        "model1": {
                          "$ref": "#/definitions/MyModel"
                        },
                        "model2": {
                          "$ref": "#/definitions/MyModel2"
                        }
                      },
                      "required": [
                        "model1",
                        "model2"
                      ],
                      "type": "object"
                    }
                  }
                ],
                "responses": {
                  "200": {
                    "description": ""
                  }
                }
              }
            }
          }
        });
      });
      it("should declare all schema correctly (model - with deep name - openapi3)", async () => {
        class MyModel {
          @Property()
          prop: string;
        }

        class Controller {
          @Consumes("application/json")
          @OperationPath("POST", "/")
          method(@In("body") @Name("deep.model") @Required() model: MyModel) {
          }
        }

        // THEN
        const spec = getSpec(Controller, {spec: SpecTypes.OPENAPI});

        expect(spec).to.deep.equal({
          components: {
            schemas: {
              MyModel: {
                properties: {
                  prop: {
                    type: "string"
                  }
                },
                type: "object"
              }
            }
          },
          paths: {
            "/": {
              post: {
                operationId: "controllerMethod",
                parameters: [],
                requestBody: {
                  content: {
                    "application/json": {
                      schema: {
                        type: "object",
                        properties: {
                          deep: {
                            type: "object",
                            properties: {
                              model: {
                                $ref: "#/components/schemas/MyModel"
                              }
                            },
                            required: ["model"]
                          }
                        },
                        required: ["deep"]
                      }
                    }
                  },
                  required: true
                },
                responses: {
                  "200": {
                    description: ""
                  }
                }
              }
            }
          }
        });
      });
      it("should declare all schema correctly (model - with deep name - swagger2)", async () => {
        class MyModel {
          @Property()
          prop: string;
        }

        class Controller {
          @Consumes("application/json")
          @OperationPath("POST", "/")
          method(@In("body") @Name("deep.model") @Required() model: MyModel) {
          }
        }

        // THEN
        const spec = getSpec(Controller, {spec: SpecTypes.SWAGGER});

        expect(spec).to.deep.equal({
          "definitions": {
            "MyModel": {
              "properties": {
                "prop": {
                  "type": "string"
                }
              },
              "type": "object"
            }
          },
          "paths": {
            "/": {
              "post": {
                "consumes": [
                  "application/json"
                ],
                "operationId": "controllerMethod",
                "parameters": [
                  {
                    "in": "body",
                    "name": "body",
                    "required": true,
                    "schema": {
                      "properties": {
                        "deep": {
                          "properties": {
                            "model": {
                              "$ref": "#/definitions/MyModel"
                            }
                          },
                          "required": [
                            "model"
                          ],
                          "type": "object"
                        }
                      },
                      "required": [
                        "deep"
                      ],
                      "type": "object"
                    }
                  }
                ],
                "responses": {
                  "200": {
                    "description": ""
                  }
                }
              }
            }
          }
        });
      });
      it("should declare all schema correctly (Array - model - swagger2)", async () => {
        // WHEN
        class Product {
          @Property()
          title: string;
        }

        class Controller {
          @OperationPath("POST", "/")
          async method(@In("body") @CollectionOf(Product) products: Product[]) {
            return null;
          }
        }

        // THEN
        const spec = getSpec(Controller, {spec: SpecTypes.SWAGGER});

        expect(spec).to.deep.equal({
          definitions: {
            Product: {
              properties: {
                title: {
                  type: "string"
                }
              },
              type: "object"
            }
          },
          paths: {
            "/": {
              post: {
                operationId: "controllerMethod",
                parameters: [
                  {
                    in: "body",
                    name: "body",
                    required: false,
                    schema: {
                      type: "array",
                      items: {
                        $ref: "#/definitions/Product"
                      }
                    }
                  }
                ],
                responses: {
                  "200": {
                    description: ""
                  }
                }
              }
            }
          }
        });
      });
      it("should declare all schema correctly (Map - model - swagger2)", async () => {
        // WHEN
        class Product {
          @Property()
          title: string;
        }

        class Controller {
          @OperationPath("POST", "/")
          async method(@In("body") @CollectionOf(Product) products: Map<string, Product>) {
            return null;
          }
        }

        // THEN
        const spec = getSpec(Controller, {spec: SpecTypes.SWAGGER});

        expect(spec).to.deep.equal({
          definitions: {
            Product: {
              properties: {
                title: {
                  type: "string"
                }
              },
              type: "object"
            }
          },
          paths: {
            "/": {
              post: {
                operationId: "controllerMethod",
                parameters: [
                  {
                    in: "body",
                    name: "body",
                    required: false,
                    schema: {
                      additionalProperties: {
                        $ref: "#/definitions/Product"
                      },
                      type: "object"
                    }
                  }
                ],
                responses: {
                  "200": {
                    description: ""
                  }
                }
              }
            }
          }
        });
      });
      it("should declare all schema correctly (inline - swagger2)", async () => {
        class Controller {
          @Consumes("application/json")
          @OperationPath("POST", "/")
          method(@In("body") @Required() @Name("num") @Min(0) num: number,
                 @In("body") @Required() @Name("test") @Min(0) num2: number) {
          }
        }

        // THEN
        const spec = getSpec(Controller, {spec: SpecTypes.SWAGGER});

        expect(spec).to.deep.equal({
          definitions: {},
          paths: {
            "/": {
              post: {
                consumes: ["application/json"],
                operationId: "controllerMethod",
                parameters: [
                  {
                    in: "body",
                    name: "body",
                    required: true,
                    schema: {
                      properties: {
                        num: {
                          minimum: 0,
                          type: "number"
                        },
                        test: {
                          minimum: 0,
                          type: "number"
                        }
                      },
                      required: ["num", "test"],
                      type: "object"
                    }
                  }
                ],
                responses: {
                  "200": {
                    description: ""
                  }
                }
              }
            }
          }
        });
      });
      it("should declare all schema correctly (Array - inline - swagger2)", async () => {
        class Controller {
          @Consumes("application/json")
          @OperationPath("POST", "/")
          method(
            @In("body") @Required() @Name("num") @CollectionOf(Number) @Min(0) num: number[],
            @In("body") @Required() @Name("test") @Min(0) num2: number
          ) {
          }
        }

        // THEN
        const spec = getSpec(Controller, {spec: SpecTypes.SWAGGER});
        expect(await validate(spec)).to.eq(true);
        expect(spec).to.deep.equal({
          definitions: {},
          paths: {
            "/": {
              post: {
                consumes: ["application/json"],
                operationId: "controllerMethod",
                parameters: [
                  {
                    in: "body",
                    name: "body",
                    required: true,
                    schema: {
                      properties: {
                        num: {
                          type: "array",
                          items: {
                            minimum: 0,
                            type: "number"
                          }
                        },
                        test: {
                          minimum: 0,
                          type: "number"
                        }
                      },
                      required: ["num", "test"],
                      type: "object"
                    }
                  }
                ],
                responses: {
                  "200": {
                    description: ""
                  }
                }
              }
            }
          }
        });
      });
      it("should declare all schema correctly (inline - openapi3)", async () => {
        class Controller {
          @Consumes("application/json")
          @OperationPath("POST", "/")
          method(
            @In("body") @Required() @Name("num") @CollectionOf(Number) @Min(0) num: number[],
            @In("body") @Required() @Name("test") @Min(0) num2: number
          ) {
          }
        }

        // THEN
        const spec = getSpec(Controller, {spec: SpecTypes.OPENAPI});
        expect(await validate(spec, SpecTypes.OPENAPI)).to.eq(true);
        expect(spec).to.deep.equal({
          components: {
            schemas: {}
          },
          paths: {
            "/": {
              post: {
                operationId: "controllerMethod",
                parameters: [],
                requestBody: {
                  content: {
                    "application/json": {
                      schema: {
                        properties: {
                          num: {
                            items: {
                              minimum: 0,
                              type: "number"
                            },
                            type: "array"
                          },
                          test: {
                            minimum: 0,
                            type: "number"
                          }
                        },
                        required: ["num", "test"],
                        type: "object"
                      }
                    }
                  },
                  required: true
                },
                responses: {
                  "200": {
                    description: ""
                  }
                }
              }
            }
          }
        });
      });
      it("should declare all schema correctly (generics - openapi3)", () => {
        // WHEN
        @Generics("T")
        class Submission<T> {
          @Property()
          _id: string;

          @Property("T")
          data: T;
        }

        class Product {
          @Property()
          title: string;
        }

        class Article {
          @Property()
          id: string;
        }

        class Controller1 {
          @OperationPath("POST", "/")
          async method(@In("body") @GenericOf(Product) submission: Submission<Product>) {
            return null;
          }
        }

        class Controller2 {
          @OperationPath("POST", "/")
          async method(@In("body") @GenericOf(Article) submission: Submission<Article>) {
            return null;
          }
        }

        // THEN
        const spec1 = getSpec(Controller1, {spec: SpecTypes.SWAGGER});
        const spec2 = getSpec(Controller2, {spec: SpecTypes.SWAGGER});

        expect(spec1).to.deep.equal({
          definitions: {
            Product: {
              properties: {
                title: {
                  type: "string"
                }
              },
              type: "object"
            },
            Submission: {
              properties: {
                _id: {
                  type: "string"
                },
                data: {
                  $ref: "#/definitions/Product"
                }
              },
              type: "object"
            }
          },
          paths: {
            "/": {
              post: {
                operationId: "controller1Method",
                parameters: [
                  {
                    in: "body",
                    name: "body",
                    required: false,
                    schema: {
                      $ref: "#/definitions/Submission"
                    }
                  }
                ],
                responses: {
                  "200": {
                    description: ""
                  }
                }
              }
            }
          }
        });
        expect(spec2).to.deep.equal({
          definitions: {
            Article: {
              properties: {
                id: {
                  type: "string"
                }
              },
              type: "object"
            },
            Submission: {
              properties: {
                _id: {
                  type: "string"
                },
                data: {
                  $ref: "#/definitions/Article"
                }
              },
              type: "object"
            }
          },
          paths: {
            "/": {
              post: {
                operationId: "controller2Method",
                parameters: [
                  {
                    in: "body",
                    name: "body",
                    required: false,
                    schema: {
                      $ref: "#/definitions/Submission"
                    }
                  }
                ],
                responses: {
                  "200": {
                    description: ""
                  }
                }
              }
            }
          }
        });
      });
    });
  });

  describe("Response", () => {
    it("should declare all schema correctly (swagger2)", async () => {
      // WHEN
      class Controller {
        @OperationPath("POST", "/")
        @(Returns(200, String).Description("description"))
        method() {
        }
      }

      // THEN
      const spec = getSpec(Controller, {spec: SpecTypes.SWAGGER});

      expect(spec).to.deep.equal({
        definitions: {},
        paths: {
          "/": {
            post: {
              operationId: "controllerMethod",
              parameters: [],
              responses: {
                "200": {
                  description: "description",
                  schema: {
                    type: "string"
                  }
                }
              }
            }
          }
        }
      });
    });
    it("should declare all schema correctly (openapi3)", async () => {
      // WHEN
      class Controller {
        @OperationPath("POST", "/")
        @(Returns(200, String).Description("description"))
        method() {
        }
      }

      // THEN
      const spec = getSpec(Controller, {spec: SpecTypes.OPENAPI});

      expect(spec).to.deep.equal({
        components: {
          schemas: {}
        },
        paths: {
          "/": {
            post: {
              operationId: "controllerMethod",
              parameters: [],
              responses: {
                "200": {
                  content: {
                    "*/*": {
                      schema: {
                        type: "string"
                      }
                    }
                  },
                  description: "description"
                }
              }
            }
          }
        }
      });
    });
    it("should declare an Array of string (swagger2)", async () => {
      // WHEN
      class Controller {
        @OperationPath("POST", "/")
        @(Returns(200, Array)
          .Of(String)
          .Description("description"))
        method() {
        }
      }

      // THEN
      const spec = getSpec(Controller, {spec: SpecTypes.SWAGGER});

      expect(spec).to.deep.equal({
        definitions: {},
        paths: {
          "/": {
            post: {
              operationId: "controllerMethod",
              parameters: [],
              produces: ["text/json"],
              responses: {
                "200": {
                  description: "description",
                  schema: {
                    items: {
                      type: "string"
                    },
                    type: "array"
                  }
                }
              }
            }
          }
        }
      });
    });
    it("should declare an Array of string (openapi3)", async () => {
      // WHEN
      class Controller {
        @OperationPath("POST", "/")
        @(Returns(200, Array)
          .Of(String)
          .Description("description"))
        method() {
        }
      }

      // THEN
      const spec = getSpec(Controller, {spec: SpecTypes.OPENAPI});

      expect(spec).to.deep.equal({
        components: {
          schemas: {}
        },
        paths: {
          "/": {
            post: {
              operationId: "controllerMethod",
              parameters: [],
              responses: {
                "200": {
                  content: {
                    "text/json": {
                      schema: {
                        items: {
                          type: "string"
                        },
                        type: "array"
                      }
                    }
                  },
                  description: "description"
                }
              }
            }
          }
        }
      });
    });
    it("should declare an Generic of Model (swagger2)", async () => {
      // WHEN
      @Generics("T")
      class Pagination<T> {
        @CollectionOf("T")
        data: T[];

        @Property()
        totalCount: number;
      }

      class Product {
        @Property()
        title: string;
      }

      class Controller {
        @OperationPath("POST", "/")
        @(Returns(200, Pagination)
          .Of(Product)
          .Description("description"))
        async method(): Promise<Pagination<Product> | null> {
          return null;
        }
      }

      // THEN
      const spec = getSpec(Controller, {spec: SpecTypes.SWAGGER});

      expect(spec).to.deep.equal({
        definitions: {
          Product: {
            properties: {
              title: {
                type: "string"
              }
            },
            type: "object"
          }
        },
        paths: {
          "/": {
            post: {
              operationId: "controllerMethod",
              parameters: [],
              produces: ["text/json"],
              responses: {
                "200": {
                  description: "description",
                  schema: {
                    properties: {
                      data: {
                        items: {
                          $ref: "#/definitions/Product"
                        },
                        type: "array"
                      },
                      totalCount: {
                        type: "number"
                      }
                    },
                    type: "object"
                  }
                }
              }
            }
          }
        }
      });
    });
    it("should declare an Generic of Model (openspec3)", async () => {
      // WHEN
      @Generics("T")
      class Pagination<T> {
        @CollectionOf("T")
        data: T[];

        @Property()
        totalCount: number;
      }

      @Generics("T")
      class Submission<T> {
        @Property()
        _id: string;

        @Property("T")
        data: T;
      }

      class Product {
        @Property()
        title: string;
      }

      class Controller {
        @OperationPath("POST", "/")
        @(Returns(200, Pagination)
          .Of(Submission)
          .Nested(Product)
          .Description("description"))
        async method(): Promise<Pagination<Submission<Product>> | null> {
          return null;
        }
      }

      expect(getJsonSchema(Pagination)).to.deep.eq({
        properties: {
          data: {
            items: {
              $ref: "T"
            },
            type: "array"
          },
          totalCount: {
            type: "number"
          }
        },
        type: "object"
      });

      // THEN
      const spec = getSpec(Controller, {spec: SpecTypes.OPENAPI});

      expect(spec).to.deep.equal({
        components: {
          schemas: {
            Product: {
              properties: {
                title: {
                  type: "string"
                }
              },
              type: "object"
            }
          }
        },
        paths: {
          "/": {
            post: {
              operationId: "controllerMethod",
              parameters: [],
              responses: {
                "200": {
                  content: {
                    "text/json": {
                      schema: {
                        properties: {
                          data: {
                            items: {
                              properties: {
                                data: {
                                  $ref: "#/components/schemas/Product"
                                },
                                _id: {
                                  type: "string"
                                }
                              },
                              type: "object"
                            },
                            type: "array"
                          },
                          totalCount: {
                            type: "number"
                          }
                        },
                        type: "object"
                      }
                    }
                  },
                  description: "description"
                }
              }
            }
          }
        }
      });
    });
    it("should declare a nested Generics of Model (swagger2)", () => {
      // WHEN
      @Generics("T")
      class Pagination<T> {
        @CollectionOf("T")
        data: string;

        @Property()
        totalCount: number;
      }

      @Generics("T")
      class Submission<T> {
        @Property()
        _id: string;

        @Property("T")
        data: T;
      }

      class Product {
        @Property()
        title: string;
      }

      class Article {
        @Property()
        id: string;
      }

      class Controller {
        @OperationPath("POST", "/")
        @(Returns(200, Pagination)
          .Of(Submission)
          .Nested(Product)
          .Description("description"))
        method(): Pagination<Submission<Product>> | null {
          return null;
        }
      }

      class Controller2 {
        @OperationPath("POST", "/")
        @(Returns(200, Pagination)
          .Of(Submission)
          .Nested(Article)
          .Description("description"))
        method(): Pagination<Submission<Article>> | null {
          return null;
        }
      }

      // THEN
      const spec2 = getSpec(Controller2, {spec: SpecTypes.SWAGGER});
      const spec = getSpec(Controller, {spec: SpecTypes.SWAGGER});

      expect(spec).to.deep.equal({
        definitions: {
          Product: {
            properties: {
              title: {
                type: "string"
              }
            },
            type: "object"
          }
        },
        paths: {
          "/": {
            post: {
              operationId: "controllerMethod",
              parameters: [],
              produces: ["text/json"],
              responses: {
                "200": {
                  description: "description",
                  schema: {
                    properties: {
                      data: {
                        properties: {
                          _id: {
                            type: "string"
                          },
                          data: {
                            $ref: "#/definitions/Product"
                          }
                        },
                        type: "object"
                      },
                      totalCount: {
                        type: "number"
                      }
                    },
                    type: "object"
                  }
                }
              }
            }
          }
        }
      });
      expect(spec2).to.deep.equal({
        definitions: {
          Article: {
            properties: {
              id: {
                type: "string"
              }
            },
            type: "object"
          }
        },
        paths: {
          "/": {
            post: {
              operationId: "controller2Method",
              parameters: [],
              produces: ["text/json"],
              responses: {
                "200": {
                  description: "description",
                  schema: {
                    properties: {
                      data: {
                        properties: {
                          _id: {
                            type: "string"
                          },
                          data: {
                            $ref: "#/definitions/Article"
                          }
                        },
                        type: "object"
                      },
                      totalCount: {
                        type: "number"
                      }
                    },
                    type: "object"
                  }
                }
              }
            }
          }
        }
      });
    });
    it("should declare a nested Generics of Model (openspec3)", async () => {
      // WHEN
      @Generics("T")
      class Pagination<T> {
        @CollectionOf("T")
        data: T[];

        @Property()
        totalCount: number;
      }

      @Generics("T")
      class Submission<T> {
        @Property()
        _id: string;

        @Property("T")
        data: T;
      }

      class Product {
        @Property()
        title: string;
      }

      class Controller {
        @OperationPath("POST", "/")
        @(Returns(200, Pagination)
          .Of(Submission)
          .Nested(Product)
          .Description("description"))
        async method(): Promise<Pagination<Submission<Product>> | null> {
          return null;
        }
      }

      // THEN
      const spec = getSpec(Controller, {spec: SpecTypes.OPENAPI});

      expect(spec).to.deep.equal({
        components: {
          schemas: {
            Product: {
              properties: {
                title: {
                  type: "string"
                }
              },
              type: "object"
            }
          }
        },
        paths: {
          "/": {
            post: {
              operationId: "controllerMethod",
              parameters: [],
              responses: {
                "200": {
                  content: {
                    "text/json": {
                      schema: {
                        properties: {
                          data: {
                            items: {
                              type: "object",
                              properties: {
                                _id: {
                                  type: "string"
                                },
                                data: {
                                  $ref: "#/components/schemas/Product"
                                }
                              }
                            },
                            type: "array"
                          },
                          totalCount: {
                            type: "number"
                          }
                        },
                        type: "object"
                      }
                    }
                  },
                  description: "description"
                }
              }
            }
          }
        }
      });
    });
  });
});
