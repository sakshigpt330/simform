import * as DataHelper from  '../metaComponents';

export function filter(key) {
  switch (key) {
    case "HP":
      return DataHelper.HP;
    case "DELL":
      return DataHelper.DELL;
    case "LENEVO":
      return DataHelper.LENEVO;
    case "1 GB":
      return DataHelper.GB1;
    case "3 GB":
      return DataHelper.GB3;
    case "32 GB":
      return DataHelper.GB32;
    case "8 GB":
      return DataHelper.GB8;
    case "6 GB":
      return DataHelper.GB6;
    case "2 GB":
      return DataHelper.GB2;
    case "4 GB":
      return DataHelper.GB4;
    default:
      return DataHelper.ALL

  }
}
