export interface Usuario {
  id_usu: number;
  nome_usu: string;
  email: string;
  id_time?: number | null;
  senha_usu?: string | null;
  cpf: string | null;
  ativo_usu?: number;
}
