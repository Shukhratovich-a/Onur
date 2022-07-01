import { Link } from "react-router-dom";

import useLocalization from "../../Hooks/useLocalization";

import LogoEn from "../Lib/Icons/LogoEn";
import LogoRu from "../Lib/Icons/LogoRu";

import styles from "./Footer.module.scss";

const Footer = () => {
  const [lang] = useLocalization(true);

  return (
    <footer className={styles.footer}>
      <div className="container">
        <Link className={"sdsd"} to={"/"}>
          {lang === "ru" ? (
            <LogoRu gradientDark={"#ffffff"} gradientLight={"#ffffff"} color={"#ffffff"} />
          ) : (
            <LogoEn gradientDark={"#ffffff"} gradientLight={"#ffffff"} color={"#ffffff"} />
          )}
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
