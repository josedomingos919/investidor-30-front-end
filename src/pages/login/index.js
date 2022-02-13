import { InputControl, ButtonControl } from "../../components";
import {
  Image,
  ContainerLogo,
  BodyTopContainer,
  ContainerFirstInfo,
  LoginTitle,
  Paragraph,
  FormContainer,
  ContainerInputField,
  FooterContainer,
  ForgetPassword,
  SocialsContainer,
  SocialLink,
  SocialImage,
  CopyRightMenu,
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

          <ContainerInputField textAlign="right">
            <ForgetPassword href="teste/">Esqueci a senha!</ForgetPassword>
          </ContainerInputField>
        </FormContainer>
      </BodyTopContainer>

      <FooterContainer>
        <ContainerInputField marginTop={25} marginBottom={20}>
          <ButtonControl label="Entrar" icon={images.Enter} />
        </ContainerInputField>

        <SocialsContainer>
          <SocialLink>
            <SocialImage src={images.Facebook} />
          </SocialLink>
          <SocialLink>
            <SocialImage src={images.Google} />
          </SocialLink>
          <SocialLink>
            <SocialImage src={images.Linkedin} />
          </SocialLink>
        </SocialsContainer>

        <CopyRightMenu>copy@right{new Date().getFullYear()}</CopyRightMenu>
      </FooterContainer>
    </>
  );
};
