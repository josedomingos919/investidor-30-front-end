import { Button, LabelText, LabelIcon, Image, MainContainer } from "./styles";

export const ButtonControl = ({ icon, label = "", ...restProps }) => {
  return (
    <MainContainer>
      <Button {...restProps}>
        <LabelIcon>
          <Image src={icon} />
        </LabelIcon>
        <LabelText>{label}</LabelText>
      </Button>
    </MainContainer>
  );
};
