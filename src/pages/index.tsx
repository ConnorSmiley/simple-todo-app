import { NextPage } from "next";
import React, { useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import Sidebar from "@/pages/Sidebar";
import Navbar from "@/components/Navbar";
import Main from "@/pages/Main";
import { nanoid } from "@reduxjs/toolkit";

const HomeContainer = styled.div`
  ${tw`
    w-full
     h-full
     flex
     flex-col
    `}
`;

const HomeStyles = styled.div`
  ${tw`
  flex
  flex-col
 
    `}
`;

const MainContainer = styled.div`
  ${tw`
  flex
  flex-row
    
    `}
`;

const IndexPage: NextPage = () => {
  const [notes, setNotes] = useState([]);
  const [activeNote, setActiveNote] = useState(false);


  const addNotes = () => {
    const newNotes = {
      id: nanoid(),
      title: "Untitled Note",
      body: "",
      lastModified: Date.now(),
    };
    setNotes([newNotes, ...notes])
  };

  const deleteNote = (idToDelete) => {
    setNotes(notes.filter((note)=> note.id !== idToDelete))
  }

  return (
    <>
      <HomeContainer>
        <HomeStyles>
          <Navbar />
        </HomeStyles>
        <MainContainer>
          <Sidebar
            notes={notes}
            addNotes={addNotes}
            deleteNote={deleteNote}
            activeNote={activeNote}
            setActiveNote={setActiveNote}
          />
          <Main />
        </MainContainer>
      </HomeContainer>
    </>
  );
};

export default IndexPage;
