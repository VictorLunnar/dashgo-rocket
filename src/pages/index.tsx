import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
// import Input from "../components/Form/input";
import {useForm} from "react-hook-form"
import { Flex, Button, Stack, FormLabel, FormControl } from "@chakra-ui/react";
import { Input } from "../components/Form/Input";
import { SubmitHandler } from "react-hook-form/dist/types";



const inter = Inter({ subsets: ["latin"] });

type SignInFormData = { 
  email: string,
  passowrd: string,
}

export default function SignIn() {
  const { register, handleSubmit, formState } = useForm() 
  const { errors } = formState

  const handleSignIn: SubmitHandler<SignInFormData>= async (values) => {
    await new Promise(resolve => setTimeout(resolve,2000))
    console.log(values)

  }

  return (
    <Flex w="100vw" h="100vh" align="center" justify="center">
      <Flex
        as="form"
        width="100%"
        maxWidth={360}
        bg="gray.800"
        p="8"
        borderRadius={8}
        flexDir="column"
        onSubmit={handleSubmit(handleSignIn)}
      >
        <Stack spacing="4">
          <Input name="email" type="email" label="E-mail" {...register('email ')}></Input>;
          <Input name="password" type="password" label="Senha" {...register('password')}></Input>
        </Stack>
        <Button type="submit" mt="6" colorScheme="pink" size="lg" isLoading={formState.isSubmitting}>
          ENTRAR
        </Button>
      </Flex>
    </Flex>
  );
}
