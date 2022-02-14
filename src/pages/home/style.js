import styled from "styled-components";
import { colors } from "../../util/colors";

export const MainContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  min-height: 200px;
`;

export const Header = styled.div`
  background-color: ${colors.primary};
  padding: 30px 0px;
  width: 100%;
  padding-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 269px;
`;

export const ImageContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
  background: ${colors.opacityPrimary};
  width: 101px;
  border-radius: 15px;
  padding: 10px;
`;

export const Image = styled.img`
  border-radius: 64px;
  width: 64px;
  height: 64px;
`;

export const ContainerUserName = styled.div``;

export const LabelUserName = styled.label`
  font-size: 14px;
  text-transform: capitalize;
  color: ${colors.white};
`;

export const LevelContainer = styled.div`
  margin-top: 10px;
  color: ${colors.backgroundSubTitle};
`;

export const LabelLevel = styled.label`
  text-transform: uppercase;
`;

export const ContainerCardOptions = styled.div`
  height: 128px;
  margin-top: -64px;
  padding: 20px 20px;
  display: flex;
  flex-direction: row;
  overflow-x: auto;

  > div:last-child {
    margin-right: 0px;
  }
  ::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
`;

export const CardOptions = styled.div`
  height: 100%;
  max-width: 190px;
  min-width: 190px;
  width: 190px;
  padding: 12px;
  background-color: ${colors.white};
  border-radius: 10px;
  margin-right: 20px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
`;

export const CardOptionsIconContainer = styled.div`
  margin-bottom: 10px;
  padding: 3px;
  background-color: ${colors.lightPrimary};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  width: 40px;
`;
export const CardOptionsIcon = styled.img`
  width: 28px;
`;
export const CardOptionsLabelContainer = styled.div``;
export const CardOptionsLabel = styled.label`
  color: ${colors.cardTitle};
  text-transform: uppercase;
`;
