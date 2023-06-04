import { createAlova } from "alova";
import GlobalFetch from "alova/GlobalFetch";
import ReactHook from "alova/react";

export const alovaInstance = createAlova({
  baseURL: "http://example.com",
  statesHook: ReactHook,
  requestAdapter: GlobalFetch(),
  responsed: (response) => response.json(),
});

export const readData = () => alovaInstance.Get(`/coreData`);

