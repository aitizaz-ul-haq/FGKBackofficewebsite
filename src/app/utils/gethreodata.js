import subpagedata from "../data/subpagedata/subpagedata.json";

export const getHeroData = (pageId) => {
  return subpagedata.find((item) => item.id === pageId);
};
