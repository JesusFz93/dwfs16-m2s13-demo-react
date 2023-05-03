import Table from "../components/Table";

const AboutPage = () => {
  const enviarSaludo = () => {
    console.log("Hola Ucampers");
  };

  const frutas = ["mango", "pera", "uva"];

  const imprimeFrutas = () => {
    console.log(frutas);
  };

  return (
    <>
      <div>AboutPage</div>
      <div>
        <button
          type="button"
          className="btn btn-primary"
          onClick={enviarSaludo}
        >
          Primary
        </button>
        <button
          type="button"
          className="btn btn-secondary"
          onClick={imprimeFrutas}
        >
          Imprime frutas
        </button>
        <button type="button" className="btn btn-success">
          Success
        </button>
        <button type="button" className="btn btn-danger">
          Danger
        </button>
        <button type="button" className="btn btn-warning">
          Warning
        </button>
        <button type="button" className="btn btn-info">
          Info
        </button>
        <button type="button" className="btn btn-light">
          Light
        </button>
        <button type="button" className="btn btn-dark">
          Dark
        </button>
        <button type="button" className="btn btn-link">
          Link
        </button>
      </div>
      <Table />
    </>
  );
};

export default AboutPage;
