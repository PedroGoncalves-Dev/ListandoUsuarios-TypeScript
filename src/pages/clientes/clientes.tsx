import styles from "./clientes.module.css";
import { Usuario } from "../../interfaces/usuarios";
import { useQuery, useQueryClient } from "@tanstack/react-query";

import { Button } from "@/components/ui/button";

import api from "../../axios/baseUrl";
import { useEffect } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";

// interface ResApi {
//   sucesso: boolean;
//   mensagem: string;
//   dados: Usuario[];
// }

const Clientes: React.FC = () => {
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
                    {" "}
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <button className={styles.acoes}>Ações</button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent className={styles.menuContent}>
                        <DropdownMenuSeparator />
                        <DropdownMenuGroup>
                          <DropdownMenuItem className={styles.item}>
                            <span>Editar</span>
                          </DropdownMenuItem>

                          <DropdownMenuItem className={styles.item}>
                            <span>Inativar</span>
                          </DropdownMenuItem>
                        </DropdownMenuGroup>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Clientes;
