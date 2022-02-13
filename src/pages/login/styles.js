import styled from "styled-components";

import { colors } from "../../util/colors";

export const BodyTopContainer = styled.div`
  background-color: ${colors.primary};
  min-height: 200px;
  color: ${colors.white};
  padding: 25px 48px;
  padding-bottom: 50px;
  padding-top: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ContainerLogo = styled.div`
  text-align: center;
  width: 100%;
  margin-bottom: 60px;
`;

export const ContainerFirstInfo = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  width: 100%;
  margin-bottom: 30px;
`;

export const LoginTitle = styled.label`
  font-weight: bold;
  color: ${colors.white};
  margin-bottom: 16px;
  font-size: 23px;
`;

export const Paragraph = styled.label`
  color: ${colors.backgroundSubTitle};
  font-size: 11px;
  line-height: 20px;
  text-align: justify;
`;

export const FormContainer = styled.div`
  width: 100%;
`;

export const Image = styled.img``;

export const ContainerInputField = styled.div`
  margin-bottom: ${({ marginBottom }) =>
    marginBottom ? `${marginBottom}px` : "initial"};
  width: 100%;
  margin-top: ${({ marginTop }) => (marginTop ? `${marginTop}px` : "initial")};
  text-align: ${({ textAlign }) => textAlign};
`;

export const FooterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const ForgetPassword = styled.a`
  color: ${colors.white};
  font-size: 11px;
`;

export const SocialsContainer = styled.div`
  margin-top: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SocialLink = styled.a`
  margin: 0px 10px;
`;

export const SocialImage = styled.img`
  width: 38px;
`;

export const CopyRightMenu = styled.div`
  margin-top: 40px;
  color: ${colors.backgroundSubTitle};
`;
