import Header from "../components/Header";
import UserList from "../components/UserList";

const ListPage = () => {
  return (
    <>
      <div>ListPage</div>
      <UserList />
      <Header
        tema="este es un tema"
        tituloS="KLJDLFKJASLFKJDALFKJASLFKJAS;FLKJHASFL;KASJHFASJLFHASDLKJFHASDKJF"
        fruta="Pera"
        subtitulo="Pagina de frutas"
      />
    </>
  );
};

export default ListPage;
