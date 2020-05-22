import {registerJsonTypeMapper} from "../domain/JsonMapperTypesContainer";

/**
 * Register a new JsonMapper Type
 * @param types
 * @constructor
 */
export function JsonMapper(...types: any[]): ClassDecorator {
  return target => {
    types.forEach(type => {
      registerJsonTypeMapper(type, target as any);
    });
  };
}
