import React from "react";

import { Context } from "../Context/Localization";
import Localization from "../Localization/Localization";

const useLocalization = (langOnly = false) => {
  const ctx = React.useContext(Context);

  return langOnly ? [ctx.language, ctx.setLanguage] : Localization[ctx.language];
};

export default useLocalization;
