import React from "react";

import * as S from "./style";

interface CardProps {
  title: string;
  price: string;
  description: string;
  src: string;
}

export const Card: React.FC<CardProps> = ({
  description,
  price,
  src,
  title,
}) => {
  return (
    <S.CardContainer>
      <S.ProductImage src={src} />
      <S.TitleWrapper>
        <S.Title>{title}</S.Title>
        <S.Price>
          <S.PriceText>{price}</S.PriceText>
        </S.Price>
      </S.TitleWrapper>
      <S.Description>{description}</S.Description>
      <S.Button>
        <S.IconButton />
        <S.TextButton>COMPRAR</S.TextButton>
      </S.Button>
    </S.CardContainer>
  );
};
