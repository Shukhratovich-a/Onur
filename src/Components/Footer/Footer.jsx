import { Link } from "react-router-dom";

import useLocalization from "../../Hooks/useLocalization";

import LogoEn from "../Lib/Icons/LogoEn";
import LogoRu from "../Lib/Icons/LogoRu";

const Footer = () => {
  const [lang, setLang] = useLocalization(true);

  return (
    <footer className="footer">
      <div className="container">
        <Link className={"sdsd"} to={"/"}>
          {lang === "ru" ? <LogoRu /> : <LogoEn />}
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
