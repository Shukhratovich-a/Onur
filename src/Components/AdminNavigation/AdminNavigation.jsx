import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

import styles from "./AdminNavigate.module.scss";

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
              onClick={() => navigate("/admin/users")}
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
              onClick={() => navigate("/admin/admins")}
            >
              Admins
            </Button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default AdminNavigate;