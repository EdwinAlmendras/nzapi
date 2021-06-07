import { ResponseType, AxiosRequestConfig } from "axios";
import { PathLike } from "fs";

export type SSL = 0 | 1;

export interface Uplaod$Params {
  path?: PathLike,
  properties?: Schema$Properties,
  url?: string;
  options?: OptionsUplaod
}

export interface OptionsUplaod {
  hightWauerMark?: number;
  ssl?: SSL;
  key: Buffer;
}
export interface Params$GetData {
   nodeId: string;
   responseType?: AxiosRequestConfig["responseType"];
   options?: { ssl: SSL,
   config: AxiosRequestConfig }
  }
export interface Schema$File {
  nodeId?: string;
  name?: string;
  downlaodId?: string;
  createdTime?: number;
  type?: number;
  owner?: string;
  isDir?: boolean;
  thumbs?: string;
  size?: number | string;
  parent?: string;
  downloadId?: string;
  shareKey?: string;
  key?: Buffer;
  properties?: Schema$Properties
}

export interface Schema$Properties {
  name?: string;
  uid?: string;
  folderColorRgb?: string;
  mimeType?: string;
  label?: string;
  starred?: boolean;
  target?: {
    uid?: string;
    url?: string;
    account?: {
      email?: string;
      password?: string
    }
  }
  posterUrl?: string;
  stars?: string;
  videoMediaMetadata?: {
    width: number;
    heigth: number;
  },
  tags?: string[];
  girl?: {
    name?: string;
    studios?: string[]
  };
}
export interface Options$LoadMetadata {
  a: string; // Base64 encrypted attributes
  s: number;
  ts: number;
  t: string;
  u: string;
  k: string; // Base64 encryptrd key thats encrypted file
}


export interface Params$Get {
  nodeId?: string;
  name?: string;
  parent?: string;
  responseType?: ResponseType
  config?: AxiosRequestConfig
}
