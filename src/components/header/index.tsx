import React from "react";

import * as S from './style'


export function Header(){
    return (
        <S.HeaderContainer>
            <S.TitleContainer>
                <S.Title>MKS</S.Title>
                <S.SubTitle>Sistemas</S.SubTitle>
            </S.TitleContainer>
            <S.Button>
                <S.IconButton />    
                <S.CounterShop>0</S.CounterShop>
            </S.Button>
        </S.HeaderContainer>
    )
}