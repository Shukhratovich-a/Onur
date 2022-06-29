import React from "react";

import { Context } from "../Context/Burger";

const useBurger = () => {
  const ctx = React.useContext(Context);

  return [ctx.state, ctx.setState];
};

export default useBurger;
