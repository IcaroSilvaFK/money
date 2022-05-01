import { useEffect } from "react";
import { useForm, FormProvider, SubmitHandler } from "react-hook-form";
import { MdOutlineAttachMoney, MdOutlineClose } from "react-icons/md";
import { toast } from "react-toastify";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/router";

import { useModal } from "../../store/modal.store";
import { useTypeTransaction } from "../../store/typeTransaction.store";
import { Buttons } from ".././Buttons";
import { Input } from "../Input";
import { api } from "../../configs/axios";
import { useTransaction } from "../../store/transaction.store";

import {
  ModalBackground,
  Container,
  Title,
  Row,
  CloseContainer,
} from "./styles";
import { NewTransactionSchema } from "../../schemas/newTransaction";

interface IFormProps {
  description: string;
  value: string;
}

export function Modal() {
  const router = useRouter();

  const { type, setTranscation } = useTypeTransaction();
  const props = useForm<IFormProps>({
    defaultValues: {
      description: "",
      value: "",
    },
    resolver: yupResolver(NewTransactionSchema),
  });

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

  const onSubmit: SubmitHandler<IFormProps> = async ({
    description,
    value,
  }) => {
    if (type) {
      const newTransaction = {
        description,
        value,
        type,
      };
      const response = await api.post("transactions", newTransaction);

      if (response.status === 201) {
        toast("Transação Criada com sucesso", {
          theme: "light",
          position: "top-center",
          draggable: true,
        });
        props.reset();
      }
      if (response.status > 400) {
        toast.error("Infelizmente tivemos problemas inesperados", {
          theme: "light",
          position: "top-center",
          draggable: true,
        });
      }
    }
  };

  return (
    <ModalBackground onClick={handleToogleModal}>
      <Container onClick={(e) => e.stopPropagation()}>
        <CloseContainer onClick={() => router.push("/")}>
          <MdOutlineClose size={20} />
        </CloseContainer>
        <Title>
          <h2>Nova transação</h2>
        </Title>
        <FormProvider {...props}>
          <form onSubmit={props.handleSubmit(onSubmit)}>
            <Input
              name="value"
              placeholder="Digie o Valor da transação"
              type="number"
              icon={<MdOutlineAttachMoney />}
            />
            <Row>
              <Buttons
                style="Secondary"
                text="Depósito"
                onClick={() => setTranscation("entry")}
              />
              <Buttons
                style="Therdiary"
                text="Retirada"
                onClick={() => setTranscation("whitdraw")}
              />
            </Row>
            <Input
              name="description"
              placeholder="Digite a descrição da transação"
              type="text"
            />
            <div className="containerButton">
              <button type="submit">Enviar </button>
            </div>
          </form>
        </FormProvider>
      </Container>
    </ModalBackground>
  );
}
