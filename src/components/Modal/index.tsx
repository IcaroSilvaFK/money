import Head from "next/head";

import { useForm, FormProvider, SubmitHandler } from "react-hook-form";
import { MdOutlineAttachMoney, MdOutlineClose } from "react-icons/md";
import { toast } from "react-toastify";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/router";

import { useTypeTransaction } from "../../store/typeTransaction.store";
import { Buttons } from ".././Buttons";
import { Input } from "../Input";
import { api } from "../../configs/axios";

import {
  ModalBackground,
  Container,
  Title,
  Row,
  CloseContainer,
} from "./styles";
import { NewTransactionSchema } from "../../schemas/newTransaction";

interface IFormProps {
  title: string;
  value: string;
  description: string;
}

export function Modal() {
  const router = useRouter();

  const { type, setTranscation } = useTypeTransaction();
  const props = useForm<IFormProps>({
    defaultValues: {
      title: "",
      value: "",
      description: "",
    },
    resolver: yupResolver(NewTransactionSchema),
  });

  const onSubmit: SubmitHandler<IFormProps> = async ({
    description,
    title,
    value,
  }) => {
    if (type) {
      const newTransaction = {
        title,
        value,
        type,
        description,
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
    <>
      <Head>
        <title>Seila</title>
      </Head>
      <ModalBackground onClick={() => router.push("/")}>
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
                name="title"
                placeholder="Digite a titulo da transação"
                type="text"
              />
              <textarea
                {...props.register("description")}
                id=""
                cols={65}
                rows={10}
                placeholder="Digite aqui uma descrição"
              ></textarea>
              <div className="containerButton">
                <button type="submit">Enviar </button>
              </div>
            </form>
          </FormProvider>
        </Container>
      </ModalBackground>
    </>
  );
}
