import { useState } from "react";
import { useForm, FormProvider, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { AiOutlineUser, AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { RiLockPasswordFill, RiSendPlaneFill } from "react-icons/ri";
import { FaMoneyCheckAlt } from "react-icons/fa";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import { loginSchema } from "../schemas/login.schema";
import { Input } from "../components/Input";

import {
  Button,
  Container,
  Row,
  ContainerForm,
  ContainerImage,
} from "../styles/Login.module";

interface IFormProps {
  name: string;
  password: string;
}

export default function Login() {
  const [inputType, setInputType] = useState("password");

  const props = useForm<IFormProps>({
    defaultValues: {
      name: "",
      password: "",
    },
    resolver: yupResolver(loginSchema),
  });

  const onSubmit: SubmitHandler<IFormProps> = (data) => {
    props.reset();
  };

  return (
    <>
      <Head>
        <title>Login</title>
      </Head>
      <Container>
        <ContainerForm>
          <div className="containerForm__title">
            <div className="title__svg">
              <FaMoneyCheckAlt size={25} />
            </div>
            <h2>Lorem ipsum</h2>
          </div>
          <FormProvider {...props}>
            <form onSubmit={props.handleSubmit(onSubmit)}>
              <Input
                name="name"
                placeholder="Digite aqui seu username"
                type="text"
                icon={<AiOutlineUser />}
              />
              <Row>
                <Input
                  name="password"
                  placeholder="Digite aqui sua senha"
                  type={inputType}
                  icon={<RiLockPasswordFill />}
                />
                {inputType === "password" ? (
                  <AiFillEye onClick={() => setInputType("text")} size={15} />
                ) : (
                  <AiFillEyeInvisible
                    onClick={() => setInputType("password")}
                    size={15}
                  />
                )}
              </Row>

              <Button>
                Entrar <RiSendPlaneFill />
              </Button>
            </form>
          </FormProvider>
          <Link href="/createAccount">
            <a>
              Não possui conta? <span>clique aqui</span>
            </a>
          </Link>
        </ContainerForm>
        <ContainerImage>
          <Image
            src="/assets/manageMoney.png"
            alt="My Money"
            width={560}
            height={560}
          />
        </ContainerImage>
      </Container>
    </>
  );
}
