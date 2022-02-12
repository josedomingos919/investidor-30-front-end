import styled from "styled-components";

import { colors } from "../../util/colors";

export const BodyTopContainer = styled.div`
  background-color: ${colors.primary};
  min-height: 200px;
  color: ${colors.white};
  padding: 25px 67px;
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
  line-height: 0.98rem;
  text-align: justify;
`;

export const Image = styled.img``;
