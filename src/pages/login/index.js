import { InputControl } from "../../components";
import {
  Image,
  ContainerLogo,
  BodyTopContainer,
  ContainerFirstInfo,
  LoginTitle,
  Paragraph,
  FormContainer,
  ContainerInputField,
} from "./styles";

import { images } from "./util";

export const Login = () => {
  return (
    <>
      <BodyTopContainer>
        <ContainerLogo>
          <Image src={images.Logo} />
        </ContainerLogo>

        <ContainerFirstInfo>
          <LoginTitle>Login</LoginTitle>
          <Paragraph>
            Área reservada para clientes especiais! se ainda não possui uma
            conta, solicite o seu agente!
          </Paragraph>
        </ContainerFirstInfo>

        <FormContainer>
          <ContainerInputField marginBottom={20}>
            <InputControl icon={images.User} placeholder="Nome de usuário" />
          </ContainerInputField>

          <ContainerInputField marginBottom={20}>
            <InputControl
              icon={images.Password}
              placeholder="Senha"
              type="password"
            />
          </ContainerInputField>
        </FormContainer>
      </BodyTopContainer>
    </>
  );
};
