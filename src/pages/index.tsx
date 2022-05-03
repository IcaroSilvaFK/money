import { useState } from "react";
import { useForm, FormProvider, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { AiOutlineUser, AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { RiLockPasswordFill, RiSendPlaneFill } from "react-icons/ri";
import { FaMoneyCheckAlt } from "react-icons/fa";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { setCookie } from "nookies";

import { loginSchema } from "../schemas/login.schema";
import { Input } from "../components/Input";

import {
  Button,
  Container,
  Row,
  ContainerForm,
  ContainerImage,
} from "../styles/Login.module";
import { api } from "../configs/axios";
import { toast } from "react-toastify";

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

  const onSubmit: SubmitHandler<IFormProps> = async (data) => {
    try {
      const response = await api.post("/");

      setCookie(null, "token", response.data.token, { maxAge: 60 * 60 * 24 });
    } catch (e) {
      toast.error("Infelizmente tivemos um erro");
    }

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
