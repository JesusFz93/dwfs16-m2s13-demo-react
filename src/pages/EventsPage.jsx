const EventsPage = () => {
  const handleClick = () => {
    const frutas = ["banana", "sandia", "uva", "pera", "mango"];
    console.log(frutas);
  };
  return (
    <button className="btn btn-success" onClick={handleClick}>
      Imprime frutas
    </button>
  );
};

export default EventsPage;
