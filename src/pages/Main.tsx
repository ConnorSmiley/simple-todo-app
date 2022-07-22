import React from "react";
import styled from "styled-components";
import tw from "twin.macro";


const MainContainer = styled.div`
  ${tw`
  bg-[#1a1a1a]
  w-full
  h-auto
    
    `}
`;

const MainStyle = styled.div`
  ${tw`
  flex
  flex-col
  p-6
    
    `}
`;


const Input = styled.input`
    ${tw`
    w-full
    h-10
    rounded-sm
    flex
    my-4
    pl-4
    text-sm
    
    placeholder:text-gray-500
    placeholder:text-sm
    placeholder:pl-10
    `}
`

const Title = styled.div`
    ${tw`
    h-10
    flex
    items-center
    text-white
    uppercase
    font-extrabold
    text-2xl
    
    
    `}
`

export default function Main() {

  return (
    <>
      <MainContainer>
        <MainStyle>
          <Title>Title here</Title>
          <Input
          placeholder="add here"


          />

        </MainStyle>
      </MainContainer>
    </>
  );
}
