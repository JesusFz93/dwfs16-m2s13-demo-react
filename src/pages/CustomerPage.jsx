import { useParams } from "react-router-dom";

const CustomerPage = () => {
  const { id } = useParams();

  return (
    <>
      <h1>Customer Page</h1>
      <h2>{id}</h2>
    </>
  );
};

export default CustomerPage;
