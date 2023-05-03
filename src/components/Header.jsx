import PropTypes from "prop-types";
// Ejemplo: https://hygraph.com/blog/react-proptypes

const Header = (props) => {
  return (
    <>
      <div>Header</div>
      <p>Estas en la pagina {props.titulo}</p>
      <p>{props.tema}</p>
      <p>Tu fruta favorita es: {props.fruta}</p>
      <div>{props.subtitulo}</div>
    </>
  );
};

Header.propTypes = {
  titulo: PropTypes.string,
  tema: PropTypes.string,
  fruta: PropTypes.string,
  subtitulo: PropTypes.string,
};

export default Header;
