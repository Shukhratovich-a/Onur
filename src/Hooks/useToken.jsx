import React from "react";
import { Context } from "../Context/Token";

const useToken = (setterOnly = false) => {
  const ctx = React.useContext(Context);

  return setterOnly ? [ctx.setState] : [ctx.state, ctx.setState];
};

export default useToken;
