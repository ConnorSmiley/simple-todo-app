import React, { useState, useEffect } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { nanoid } from "@reduxjs/toolkit";
import addIcon from "images/AddSign.svg";

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
    h-12
    rounded-sm
    flex
    my-4
    pl-1
    text-lg
    bg-[#141414]
    text-white
    focus:outline-none
    items-center
    
    placeholder:text-gray-500
    placeholder:text-base
    placeholder:pl-1
    `}
`;

const Title = styled.input`
  ${tw`
    h-14
    flex
    items-center
    text-white
    font-semibold
    text-2xl
    text-white
    mb-4
    pl-3
    rounded-md
    focus:outline-none
    bg-[#141414]

    
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
`;

const Add = styled(addIcon)`
  ${tw`
    h-4
    w-10
    text-white
    fill-current
    mx-2
    
    hover:cursor-pointer
    
    `}
`;

const InputContainer = styled.div`
  ${tw`
  flex
  bg-[#141414]
  h-14
  rounded-md
  items-center
  pb-1
  mb-6
    
    `}
`;

const InputStyles = styled.div`
  ${tw`
  w-full
  flex
  items-center
    
    `}
`;

const AddNote = styled.div`
  ${tw`
  h-14
  w-full
  mt-2
  rounded-md
  bg-[#141414]
  text-white
  text-xl
    
    `}
`;


export default function Main({ activeNote, onUpdateNote }) {
  const [mainNote, setMainNote] = useState([]);
  const [textContent, useTextContent] = useState([]);

  const addMainNotes = () => {
    const newMainNotes = {
      id: nanoid(),
      content: textContent,
    };
    setMainNote([newMainNotes, ...mainNote]);
  };

    console.log(mainNote)

  const onEditField = (key, value) => {
    onUpdateNote({
      ...activeNote,
      [key]: value,
      body: "",
      lastModified: Date.now()
    });
  };

  if (!activeNote) {
    return <NoNote>Add a Note</NoNote>;
  }

  const handleSelectAll = (e) => {
    e.target.select();
  };

  const handleChangeTitle = (e) => {
    onEditField("title", e.target.value);
  };

  const handleChangeContent = (e) => {
    useTextContent(e.target.value)
  }

  return (
    <>
      <MainContainer>
        <MainStyle>
          <Title
            input="text"
            value={activeNote.title}
            onChange={handleChangeTitle}
            name="title"
            id="title"
            onClick={handleSelectAll}
          />

          <InputContainer>
            <InputStyles>

              <Add onClick={addMainNotes} />

              <Input
                placeholder="Add Task"
                value={mainNote.content}
                name="content"
                id="content"
                onChange={handleChangeContent}
                onClick={
                  handleSelectAll
                }
              />
            </InputStyles>
          </InputContainer>

          {mainNote.map(note => (
            <AddNote key={note.id}>{note.content}</AddNote>
          ))}

        </MainStyle>
      </MainContainer>
    </>
  );
}
