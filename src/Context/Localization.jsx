import React from "react";

const Context = React.createContext(null);

const Provider = ({ children }) => {
  const [language, setLanguage] = React.useState(
    window.localStorage.getItem("onur-language") || "en"
  );

  React.useEffect(() => {
    if (language) {
      window.localStorage.setItem("onur-language", language);
    } else {
      window.localStorage.removeItem("onur-language");
    }
  }, [language]);

  return <Context.Provider value={{ language, setLanguage }}>{children}</Context.Provider>;
};

export { Context, Provider };
