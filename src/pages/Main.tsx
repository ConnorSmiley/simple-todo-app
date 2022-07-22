import React, {useState} from "react";
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
`;

const Title = styled.input`
  ${tw`
    h-10
    flex
    items-center
    text-white
    uppercase
    font-extrabold
    text-2xl
    text-black
    
    `}
`;

const NoNote = styled.div`
    ${tw`
    w-full
    h-auto
    bg-[#1a1a1a]
    text-[#3a3a3a]
    font-extrabold
    uppercase
    p-7
    text-8xl
    items-center
    flex
    justify-center
    
    `}
`


export default function Main({ activeNote, onUpdateNote }) {
  const [mainNote, setMainNote] = useState([])

  const onEditField = (key, value) => {
    onUpdateNote({
      ...activeNote,
      [key]:value,
      body: "",
      lastModified: Date.now()
    });
  };

  if (!activeNote) {
    return <NoNote>Add a Note</NoNote>
  }

  return (
    <>
      <MainContainer>
        <MainStyle>
          <Title
            input="text"
            value={activeNote.title}
            onChange={(e) => onEditField("title", e.target.value)}
            name="title"
            id="title"
          />
          <Input
            placeholder="add here"
            onChange={(e) => onEditField("content", e.target.value)}

          />

        </MainStyle>
      </MainContainer>
    </>
  );
}
