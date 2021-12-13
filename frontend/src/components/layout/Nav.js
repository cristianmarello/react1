import "../../styles/components/layout/Nav.css";

const Nav = (props) => {
  return (
    <nav class="holder">
      <ul>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#servicios">Servicios</a>
        </li>
        <li>
          <a href="#galeria">Galeria</a>
        </li>
        <li>
          <a href="#">Acerca de</a>
        </li>
        <li>
          <a href="#">Contacto</a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
