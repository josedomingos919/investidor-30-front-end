import styled from "styled-components";
import { colors } from "../../util/colors";

export const Input = styled.input`
  font-size: 12.5px;
  background-color: transparent;
  color: ${colors.white};
  height: 35px;
  padding-bottom: 10px;

  ::placeholder {
    color: ${colors.backgroundSubTitle};
  }
`;

export const InputContainer = styled.div`
  flex: 1;
`;

export const MainContainer = styled.div`
  border-bottom: 2px solid ${colors.backgroundSubTitle};
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;

  :hover {
    transition: 0.4s;
    border-color: ${colors.white};
  }
`;

export const IconContainer = styled.div`
  width: 24px;
  margin-right: 20px;
`;

export const Icon = styled.i``;

export const Image = styled.img``;
