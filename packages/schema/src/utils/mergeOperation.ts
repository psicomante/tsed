import {JsonOperation} from "@tsed/schema";
import {concatParameters} from "./concatParameters";
import {getJsonPathParameters} from "./getJsonPathParameters";

export function mergeOperation(obj: any, operation: JsonOperation, {rootPath, operationId, path, method}: any) {
  return getJsonPathParameters(rootPath, path).reduce((obj, {path, parameters}) => {
    parameters = concatParameters(parameters, operation);
    path = !!path ? path : "/";

    obj.paths[path] = {
      ...obj.paths[path],
      [method.toLowerCase()]: {
        operationId: operation.operationId || operationId(path),
        ...operation,
        parameters
      }
    };

    return obj;
  }, obj);
}
