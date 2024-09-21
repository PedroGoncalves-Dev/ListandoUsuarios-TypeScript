import styles from "./clientes.module.css";
import { Usuario } from "../../interfaces/usuarios";

const Clientes = () => {
  return (
    <section>
      <div className={styles.clientes}>
        <h2>Lista de clientes Ativos</h2>

        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Nome</th>
              <th>CPF</th>
              <th>Email</th>
              <th>Data nascimento</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>sd</td>
              <td>fdfd</td>
              <td>sdfsfsdf</td>
              <td>sdfsdfs</td>
              <td>sdfsdfs</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Clientes;
