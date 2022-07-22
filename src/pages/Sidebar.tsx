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
    items-center
    justify-between
    w-full
    bg-black
    h-16
    p-6
    
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

const Button = styled.button`
  ${tw`
    text-blue-500
    
    
    `}
`;


const NotesAddedContainer = styled.div`
  ${tw`
    flex
    justify-between
    bg-[#141414]
    h-20
    pl-5
    pr-3
    text-white
    items-center
    
    hover:bg-black
    
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

export default function Sidebar({ notes, addNotes }) {


  return (
    <>
      <SidebarContainer>
        <SidebarStyles>
          <NoteSidebarHeader>
            <H1>Notes</H1>
            <Button onClick={addNotes}>Add</Button>
          </NoteSidebarHeader>
          {notes.map(note => (
            <>
              <NotesAddedContainer>
                <NotesAddedStyles>
                  <H1>{note.title}</H1>

                  <DateContainer>{new Date(note.lastModified).toLocaleDateString("en-KR")}
                  </DateContainer>


                </NotesAddedStyles>
                <Dates>
                  <Delete>delete</Delete>
                  <TimeContainer>{new Date(note.lastModified).toLocaleTimeString("en-kr", {
                    hour: "numeric",
                    minute: "numeric"
                  })}
                  </TimeContainer>
                </Dates>
              </NotesAddedContainer>
            </>
          ))}
        </SidebarStyles>
      </SidebarContainer>
    </>
  );
}

