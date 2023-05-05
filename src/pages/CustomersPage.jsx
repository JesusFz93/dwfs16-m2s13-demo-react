import { useState } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import Carga from "../components/Carga";

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

const clientes = [];

const CustomersPage = () => {
  const [customers, setCustomers] = useState(clientes);
  const [loading, setLoading] = useState(false);

  const handleGetCustomers = async () => {
    setLoading(true);
    const resp = await axios.get(
      "https://ucamp-api.onrender.com/api/v1/customers"
    );
    setCustomers(resp.data.data);
    setLoading(false);
  };

  return (
    <>
      {loading ? (
        <Carga />
      ) : (
        <button className="btn btn-info" onClick={handleGetCustomers}>
          Obtener clientes
        </button>
      )}
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Options</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer) => (
            <tr key={customer.id}>
              <th scope="row">{customer.id}</th>
              <td>{customer.firstName}</td>
              <td>{customer.lastName}</td>
              <td>
                <NavLink
                  className="btn btn-info"
                  to={`/customers/${customer.id}`}
                >
                  Ver mas
                </NavLink>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default CustomersPage;
