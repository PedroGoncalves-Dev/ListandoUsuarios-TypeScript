import { Link } from "react-router-dom";

const DashBoard = () => {
  return (
    <section>
      <h1>Home</h1>
      <Link to="/clientes">Clientes</Link>
    </section>
  );
};
export default DashBoard;
