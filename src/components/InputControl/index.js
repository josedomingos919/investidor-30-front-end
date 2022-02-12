import {
  Icon,
  Input,
  Image,
  MainContainer,
  IconContainer,
  InputContainer,
} from "./style";

export const InputControl = ({
  icon,
  iconName = "",
  type = "text",
  ...restProps
}) => {
  return (
    <MainContainer>
      <IconContainer>
        {icon ? <Image src={icon} /> : <Icon className={iconName} />}
      </IconContainer>
      <InputContainer>
        <Input type={type} {...restProps} />
      </InputContainer>
    </MainContainer>
  );
};
