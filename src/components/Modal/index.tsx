import { useEffect } from "react";
import { useForm, FormProvider, SubmitHandler } from "react-hook-form";
import { MdOutlineAttachMoney, MdOutlineClose } from "react-icons/md";

import { useModal } from "../../store/modal.store";
import { Buttons } from ".././Buttons";
import { Input } from "../Input";

import {
  ModalBackground,
  Container,
  Title,
  Form,
  Row,
  CloseContainer,
} from "./styles";

export function Modal() {
  const props = useForm();

  const { handleToogleModal, modalIsOpen } = useModal((state) => state);

  useEffect(
    () => {
      window.addEventListener("keydown", (e) => {
        switch (e.key) {
          case "Escape": {
            handleToogleModal();
            return;
          }
          default: {
            return;
          }
        }
      });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  if (modalIsOpen) {
    return (
      <ModalBackground onClick={handleToogleModal}>
        <Container onClick={(e) => e.stopPropagation()}>
          <CloseContainer onClick={handleToogleModal}>
            <MdOutlineClose size={20} />
          </CloseContainer>
          <Title>
            <h2>Nova transação</h2>
          </Title>
          <FormProvider {...props}>
            <Form>
              <Input
                name="value"
                placeholder="Digie o Valor da transação"
                type="number"
                icon={<MdOutlineAttachMoney />}
              />
              <Row>
                <Buttons style="Secondary" text="Depósito" />
                <Buttons style="Therdiary" text="Retirada" />
              </Row>
              <Input
                name="description"
                placeholder="Digite a descrição da transação"
                type="text"
              />
            </Form>
          </FormProvider>
          <div className="containerButton">
            <Buttons style="Primary" text="Salvar" />
          </div>
        </Container>
      </ModalBackground>
    );
  }

  return (
    <>
      <></>
    </>
  );
}
