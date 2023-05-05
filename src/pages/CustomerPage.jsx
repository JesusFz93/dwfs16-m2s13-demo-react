// import { useParams } from "react-router-dom";

// const CustomerPage = () => {
//   const { id } = useParams();

//   return (
//     <>
//       <h1>Customer Page</h1>
//       <h2>{id}</h2>
//     </>
//   );
// };

// export default CustomerPage;

import { useState } from "react";
import axios from "axios";
import Carga from "../components/Carga";
import { useParams } from "react-router-dom";

// const clientes = [
//   {
//     id: "64435f664291ff038465ee3b",
//     firstName: "Alberto",
//     lastName: "Gomez",
//   },
//   {
//     id: "6443608a4291ff038465ee70",
//     firstName: "ffdsfdsf",
//     lastName: "dsfsdf",
//   },
// ];

const CustomerPage = () => {
  const [customer, setCustomer] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  const handleGetCustomer = async () => {
    setLoading(true);
    const resp = await axios.get(
      `https://ucamp-api.onrender.com/api/v1/customers/${id}`
    );
    setCustomer(resp.data.data);
    setLoading(false);
  };

  return (
    <>
      {loading ? (
        <Carga />
      ) : (
        <button className="btn btn-info" onClick={handleGetCustomer}>
          Obtener informacion
        </button>
      )}
      {customer && (
        <div>
          <p>{customer.firstName}</p>
          <p>{customer.lastName}</p>
        </div>
      )}
    </>
  );
};

export default CustomerPage;
