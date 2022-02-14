import {
  Header,
  MainContainer,
  Image,
  ImageContainer,
  ContainerUserName,
  LabelUserName,
  LevelContainer,
  LabelLevel,
  ContainerCardOptions,
  CardOptions,
  CardOptionsIconContainer,
  CardOptionsLabelContainer,
  CardOptionsLabel,
  CardOptionsIcon,
} from "./style";
import { images } from "./util";

export const Home = () => {
  return (
    <MainContainer>
      <Header>
        <ImageContainer>
          <Image src="https://www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png" />
        </ImageContainer>

        <ContainerUserName>
          <LabelUserName>José Ndonge</LabelUserName>
        </ContainerUserName>

        <LevelContainer>
          <LabelLevel>Agente ( ID: 7393 )</LabelLevel>
        </LevelContainer>
      </Header>

      <ContainerCardOptions>
        <CardOptions>
          <CardOptionsIconContainer>
            <CardOptionsIcon src={images.Investor} />
          </CardOptionsIconContainer>
          <CardOptionsLabelContainer>
            <CardOptionsLabel>INVESTIDORES</CardOptionsLabel>
          </CardOptionsLabelContainer>
        </CardOptions>

        <CardOptions>
          <CardOptionsIconContainer>
            <CardOptionsIcon src={images.Product} />
          </CardOptionsIconContainer>
          <CardOptionsLabelContainer>
            <CardOptionsLabel>Produtos</CardOptionsLabel>
          </CardOptionsLabelContainer>
        </CardOptions>

        <CardOptions>
          <CardOptionsIconContainer>
            <CardOptionsIcon src={images.Group} />
          </CardOptionsIconContainer>
          <CardOptionsLabelContainer>
            <CardOptionsLabel>Agentes</CardOptionsLabel>
          </CardOptionsLabelContainer>
        </CardOptions>
      </ContainerCardOptions>
    </MainContainer>
  );
};
