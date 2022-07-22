import React from "react";
import styled from "styled-components";
import tw from "twin.macro";


const SidebarContainer = styled.div`
  ${tw`
  w-[25em]
  h-screen
  bg-[#141414]
  pt-12
  flex
  -mt-12
    
    `}
`;

const SidebarStyles = styled.div`
  ${tw`
  flex
  flex-col
  w-full

    `}
`;


const NoteSidebarHeader = styled.div`
  ${tw`
    flex
    flex-row
    items-center
    justify-between
    w-full
    bg-black
    h-16
    p-6
    
    `}
`;

const Button = styled.button`
  ${tw`
    text-blue-500
    
    `}
`;

const H1 = styled.h1`
  ${tw`
    text-white
    text-xl
    font-bold
    flex
    items-center
    
    hover:bg-[#141414]
    `}
`;


const NotesAddedContainer = styled.div`
  background-color: ${props => props.activeNote === props.id ? "#3f3f3f" : null};
  ${tw`
    flex
    w-full
    justify-between
    h-20
    pl-5
    pr-3
    text-white
    items-center
    
    hover:bg-black
    hover:cursor-pointer
    `}
`;

const NotesAddedStyles = styled.div`
  ${tw`
  flex
  flex-col
  space-y-2
  
    `}
`;

const Delete = styled.button`
  ${tw`
    text-red-500
    text-xs
    
    `}
`;


const Dates = styled.div`
  ${tw`
    flex
    flex-col
    space-y-3
    pt-2
    
    `}
`;

const DateContainer = styled.small`
  ${tw`
    text-xs
    flex
    
    `}
`;

const TimeContainer = styled.small`
  ${tw`
    text-xs
    flex
    
    `}
`;


export default function Sidebar({ notes, addNotes, deleteNote, setActiveNote, activeNote }) {

  return (
    <>
      <SidebarContainer>
        <SidebarStyles>
          <NoteSidebarHeader>
            <H1>Notes</H1>
            <Button onClick={addNotes}>Add</Button>
          </NoteSidebarHeader>

          {notes.map(note => (
            <NotesAddedContainer
              id={note.id}
              activeNote={activeNote}
              onClick={() => {
                setActiveNote(note.id);
              }}
              key={note.id}
            >
              <NotesAddedStyles>
                <H1>{note.title}</H1>

                <DateContainer>{new Date(note.lastModified).toLocaleDateString("en-KR")}
                </DateContainer>
              </NotesAddedStyles>
              <Dates>
                <Delete onClick={() => deleteNote(note.id)}>delete</Delete>
                <TimeContainer>{new Date(note.lastModified).toLocaleTimeString("en-kr", {
                  hour: "numeric",
                  minute: "numeric"
                })}
                </TimeContainer>
              </Dates>
            </NotesAddedContainer>
          ))}

        </SidebarStyles>
      </SidebarContainer>
    </>
  );
}
