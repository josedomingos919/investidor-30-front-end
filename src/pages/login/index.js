import {
  Image,
  ContainerLogo,
  BodyTopContainer,
  ContainerFirstInfo,
  LoginTitle,
  Paragraph,
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
      </BodyTopContainer>
    </>
  );
};
