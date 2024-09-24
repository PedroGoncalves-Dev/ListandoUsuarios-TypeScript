import styles from "./clientes.module.css";
import { Usuario } from "../../interfaces/usuarios";
import { useQuery, useQueryClient } from "@tanstack/react-query";

import api from "../../axios/baseUrl";
import { useEffect, useState } from "react";
import BotoesAcoes from "@/components/BotaoAcoes/BotoesAcoes";
import { ModalAtt } from "@/components/ModalAtualizar/ModalAtt";
import ModalD from "@/components/ModalDesig/ModalDesig";

// interface ResApi {
//   sucesso: boolean;
//   mensagem: string;
//   dados: Usuario[];
// }

const Clientes: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const fetchUser = async (): Promise<Usuario[]> => {
    const { data } = await api.get<{
      sucesso: boolean;
      mensagem: string;
      dados: Usuario[];
    }>("/usuarios");
    return data.dados;
  };

  const { data, error, isLoading } = useQuery<Usuario[], Error>({
    queryKey: ["user"],
    queryFn: fetchUser,
    // refetchInterval: 3000,
    refetchOnWindowFocus: true,
  });

  useEffect(() => {}, []);

  if (error) return <p>Erro: {error.message}</p>;

  return (
    <section>
      <div className={styles.clientes}>
        <h2>Lista de clientes Ativos</h2>

        <table>
          <caption>Clientes cadastrados no sistema</caption>
          <thead>
            <tr>
              <th>Id</th>
              <th>Nome</th>
              <th>CPF</th>
              <th>Email</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {isLoading && <p>carrregando</p>}

            {data &&
              data.map((usu: Usuario) => (
                <tr key={usu.id_usu}>
                  <td>{usu.id_usu}</td>
                  <td>{usu.nome_usu}</td>
                  <td>{usu.cpf ?? "nao fornecido"}</td>
                  <td>{usu.email ?? "nao fornecido"}</td>
                  <td>
                    <BotoesAcoes onUpdate={() => setModalOpen(true)} />
                  </td>
                </tr>
              ))}
          </tbody>
        </table>

        <ModalAtt isOpen={modalOpen} onClose={() => setModalOpen(false)} />
      </div>
    </section>
  );
};

export default Clientes;
