import { useForm, FormProvider, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { MdDone } from "react-icons/md";
import { FaMoneyCheckAlt } from "react-icons/fa";
import { BsArrowLeftShort } from "react-icons/bs";
import { AiOutlineUser } from "react-icons/ai";
import { RiLockPasswordFill } from "react-icons/ri";
import Image from "next/image";
import Head from "next/head";
import { useRouter } from "next/router";

import { newAccountSchema } from "../../schemas/newAccount.schema";
import { Input } from "../../components/Input";

import {
  Container,
  Button,
  ContainerForm,
  ContainerImage,
  Buttonback,
} from "../../styles/CreateAccount.module";

interface IFormProps {
  name: string;
  username: string;
  password: string;
}

export default function CreateAccount() {
  const router = useRouter();
  const props = useForm<IFormProps>({
    defaultValues: {
      name: "",
      password: "",
      username: "",
    },
    resolver: yupResolver(newAccountSchema),
  });

  const onSubmit: SubmitHandler<IFormProps> = (data) => {};

  return (
    <>
      <Head>
        <title>Nova Conta</title>
      </Head>
      <Container>
        <Buttonback onClick={() => router.push("/")}>
          <BsArrowLeftShort size={20} />
        </Buttonback>
        <ContainerForm>
          <div className="containerForm__title">
            <div className="containerForm__svg">
              <FaMoneyCheckAlt size={20} />
            </div>
            <h2>Lorem ipsum</h2>
          </div>
          <FormProvider {...props}>
            <form onSubmit={props.handleSubmit(onSubmit)}>
              <Input
                name="name"
                placeholder="Digite seu nome"
                type="text"
                icon={<AiOutlineUser />}
              />
              <Input
                name="username"
                placeholder="Digite seu apelido"
                type="text"
                icon={<AiOutlineUser />}
              />
              <Input
                name="password"
                placeholder="Digite sua senha"
                type="password"
                icon={<RiLockPasswordFill />}
              />
              <Button>
                Criar conta <MdDone />
              </Button>
            </form>
          </FormProvider>
        </ContainerForm>
        <ContainerImage>
          <Image
            src="/assets/newaccount.png"
            alt="create account"
            width={560}
            height={560}
          />
        </ContainerImage>
      </Container>
    </>
  );
}
