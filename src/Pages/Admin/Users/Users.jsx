import React from 'react'
import styles from "./Users.module.scss"
import {useParams} from "useParams"
import {navigate} from "useNavigate"

const Users = () => {
  const { partnerId } = useParams();
  const navigate = useNavigate();

  const [partner, setPartner] = React.useState({});
  const [products, setProducts] = React.useState([]);

  React.useEffect(() => {
    (async () => {
      const responce = await fetch(HOST + "/partners/" + partnerId);

      const data = await responce.json();

      if (data.status === 200) {
        setPartner(() => data.data);
        setProducts(() => data.data.products);
      }
    })();
  }, [partnerId]);
  console.log(partner);
  return (
    <div>

      <h1>Lorem ipsum</h1>
    </div>
  )
}
