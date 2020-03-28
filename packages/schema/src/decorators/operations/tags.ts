import {decorateMethodsOf, DecoratorTypes, UnsupportedDecoratorType} from "@tsed/core";
import {JsonSchemaStoreFn} from "../common/jsonSchemaStoreFn";

/**
 * Add tags metadata on the decorated element.
 *
 * ## Examples
 * ### On method
 *
 * ```typescript
 * @Controller("/")
 * class MyController {
 *  @Tags("api")
 *  get() {}
 * }
 * ```
 *
 * @decorator
 * @method
 * @class
 * @param tags
 */
export function Tags(...tags: string[]) {
  return JsonSchemaStoreFn((store, args) => {
    switch (store.decoratorType) {
      case DecoratorTypes.METHOD:
        store.operation!.addTags(tags);
        break;
      case DecoratorTypes.CLASS:
        decorateMethodsOf(args[0], Tags(...tags));
        break;

      default:
        throw new UnsupportedDecoratorType(Tags, args);
    }
  });
}
