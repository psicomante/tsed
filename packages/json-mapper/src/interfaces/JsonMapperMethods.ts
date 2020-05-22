import {Type} from "@tsed/core";

export interface JsonMapperCtx<T = any, C = any> {
  collectionType: Type<C> | undefined;
  type: Type<T> | T;
  next: IJsonMapperNext;
}

export interface IJsonMapperNext {
  (obj: any): any;
}

export interface JsonMapperMethods {
  /**
   *
   * @param obj
   * @param {IJsonMapperNext} ctx
   * @returns {any}
   */
  deserialize(obj: any, ctx: JsonMapperCtx): any;

  /**
   *
   * @param obj
   * @param ctx
   * @returns {any}
   */
  serialize(obj: any, ctx: JsonMapperCtx<any>): any;
}
