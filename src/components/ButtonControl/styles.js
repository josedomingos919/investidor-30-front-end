import styled from "styled-components";
import { colors } from "../../util/colors";

export const Button = styled.div`
  background-color: ${colors.primary};
  color: ${colors.white};
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
`;

export const LabelText = styled.label`
  font-size: 13.5px;
`;

export const LabelIcon = styled.label`
  margin-right: 2px;
`;

export const Image = styled.img`
  margin-top: 5px;
`;

export const MainContainer = styled.div`
  padding: 0px 20px;
`;
