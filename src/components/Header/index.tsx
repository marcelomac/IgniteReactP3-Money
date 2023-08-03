import { HeaderContainer, HeaderContent, NewTransactionButton } from "./styles";
import * as Dialog from "@radix-ui/react-dialog";

import logoImg from "../../assets/logo.svg";
import { NewTransactionModal } from "../NewTransactionModal";

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logoImg} alt="" />

        <Dialog.Root>
          {/* asChild: não cria novo botão, mas utiliza o elemento dentro da tag como
              o trigger do modal:*/}
          <Dialog.Trigger asChild>
          <NewTransactionButton>Nova transação</NewTransactionButton>
          </Dialog.Trigger>

           <NewTransactionModal />
        </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  );
}
