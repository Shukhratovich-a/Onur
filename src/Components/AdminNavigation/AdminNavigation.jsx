import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

import styles from "./AdminNavigation.module.scss";

const AdminNavigate = () => {
  const navigate = useNavigate();

  return (
    <nav className={`${styles.nav}`}>
      <div className={`${styles.container} container`}>
        <ul className={`${styles.nav__list}`}>
          <li className={`${styles.nav__item}`}>
            <Button
              className={`${styles.nav__link}`}
              variant={"contained"}
              type={"button"}
              fullWidth
              onClick={() => navigate("/admin/partners")}
            >
              Partners
            </Button>
          </li>

          <li className={`${styles.nav__item}`}>
            <Button
              className={`${styles.nav__link}`}
              variant={"contained"}
              type={"button"}
              fullWidth
              onClick={() => navigate("/admin/users/waiting")}
            >
              Users
            </Button>
          </li>

          <li className={`${styles.nav__item}`}>
            <Button
              className={`${styles.nav__link}`}
              variant={"contained"}
              type={"button"}
              fullWidth
              onClick={() => navigate("/admin/about/en")}
            >
              About
            </Button>
          </li>

          <li className={`${styles.nav__item}`}>
            <Button
              className={`${styles.nav__link}`}
              variant={"contained"}
              type={"button"}
              fullWidth
              onClick={() => navigate("/admin/services")}
            >
              services
            </Button>
          </li>

          <li className={`${styles.nav__item}`}>
            <Button
              className={`${styles.nav__link}`}
              variant={"contained"}
              type={"button"}
              fullWidth
              onClick={() => navigate("/admin/posts")}
            >
              news
            </Button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default AdminNavigate;
