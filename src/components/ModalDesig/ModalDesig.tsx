import { Modal } from "antd";
import { useState } from "react";

export default function ModalD() {
  const [modal, setModal] = useState<boolean>(false);

  const showModal = () => {
    setModal(true);
  };

  const fecharModal = () => {
    setModal(false);
  };
  return (
    <>
      <button onClick={showModal}>OpenModal</button>

      <Modal title="Atualizar dados do cliente" open={modal}>
        <form>
          <label>
            <span>Nome</span>
            <input type="text" />
          </label>

          <label>
            <span>Email</span>
            <input type="email" />
          </label>
        </form>
      </Modal>
    </>
  );
}
