import {getSpec, OperationPath} from "@tsed/schema";
import {expect} from "chai";
import {Tags} from "./tags";

describe("Tags", () => {
  it("should store metadata (method)", () => {
    class MyController {
      @OperationPath("POST", "/")
      @Tags("api")
      get() {}
    }

    expect(getSpec(MyController)).to.deep.eq({
      definitions: {},
      paths: {
        "/": {
          post: {
            operationId: "myControllerGet",
            parameters: [],
            responses: {
              "200": {
                description: ""
              }
            },
            tags: ["api"]
          }
        }
      }
    });
  });
  it("should store metadata (class)", () => {
    @Tags("api")
    class MyController {
      @OperationPath("GET", "/")
      get() {}

      @OperationPath("POST", "/")
      @Tags("allow")
      post() {}
    }

    expect(getSpec(MyController)).to.deep.eq({
      definitions: {},
      paths: {
        "/": {
          get: {
            operationId: "myControllerGet",
            parameters: [],
            responses: {
              "200": {
                description: ""
              }
            },
            tags: ["api"]
          },
          post: {
            operationId: "myControllerPost",
            parameters: [],
            responses: {
              "200": {
                description: ""
              }
            },
            tags: ["allow", "api"]
          }
        }
      }
    });
  });
  it("should throw error for unsupported usage", () => {
    class Test {
      test() {}
    }

    let actualError: any;
    try {
      Tags("tags")(Test.prototype, "test", 0);
    } catch (er) {
      actualError = er;
    }

    expect(actualError.message).to.deep.eq("Tags cannot be used as parameter decorator on Test.test.[0]");
  });
});
