import React from "react";

import { Context } from "../Context/ContactModal";

const useContactModal = () => {
  const ctx = React.useContext(Context);

  return [ctx.state, ctx.setState];
};

export default useContactModal;
