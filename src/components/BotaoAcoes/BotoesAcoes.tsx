import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";

import styles from "./BotoesAcoes.module.css";

interface BotoesAcoesProps {
  onUpdate: () => void;
}

const BotoesAcoes: React.FC<BotoesAcoesProps> = ({ onUpdate }) => {
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button className={styles.acoes}>Ações</button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className={styles.menuContent}>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem className={styles.item} onClick={onUpdate}>
              Atualizar
            </DropdownMenuItem>

            <DropdownMenuItem className={styles.item}>
              <span>Inativar</span>
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};

export default BotoesAcoes;
