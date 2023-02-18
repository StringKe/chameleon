import { array, boolean, object, optional, string } from 'superstruct';

export type AssetItem = {
  id?: string;
  type?: 'CSS' | 'JS';
  src: string;
};

export type AssetPackage = {
  id?: string;
  package: string;
  // window.[globalName]
  globalName: string;
  assets: AssetItem[];
};

export type LibMetaType = {
  // unique
  package: string;
  version: string;
  exportName: string;
  destructuring?: boolean;
  // some library need to import css file
  css?: string;
  subName?: string;
  main?: string;
};

export const LibMetaTypeDescribe = object({
  package: string(),
  version: string(),
  exportName: string(),
  destructuring: optional(boolean()),
  subName: optional(string()),
  main: optional(string()),
});

export type ThirdLibType = LibMetaType[];
export const ThirdLibTypeDescribe = array(LibMetaTypeDescribe);

export type MaterialAssetPackage = {
  name: string;
  material: AssetPackage;
  component: AssetPackage;
  version?: string;
};
