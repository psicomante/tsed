import {JsonSchema} from "../domain";

export interface JsonHeader extends JsonParameterBase {}

export interface JsonExternalDocumentationObject {
  description?: string;
  url: string;
}

export interface JsonSecurityRequirementObject {
  [key: string]: string[];
}

export interface JsonParameterBase {
  description?: string;
  required?: boolean;
  deprecated?: boolean;
  allowEmptyValue?: boolean;
  style?: string;
  explode?: boolean;
  allowReserved?: boolean;
  schema?: JsonSchema;
  example?: any;
  examples?: {
    [name: string]: JsonExample;
  };
  content?: {
    [media: string]: JsonMediaType;
  };
}

export interface JsonExample {
  summary?: string;
  description?: string;
  value?: any;
  externalValue?: string;
}

export interface JsonEncoding {
  contentType?: string;
  headers?: {
    [header: string]: JsonHeader;
  };
  style?: string;
  explode?: boolean;
  allowReserved?: boolean;
}

export interface JsonMediaType {
  schema?: JsonSchema;
  example?: any;
  examples?: {
    [media: string]: JsonExample;
  };
  encoding?: {[media: string]: JsonEncoding};
}
