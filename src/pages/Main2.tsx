import React, { useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import addIcon from "@/images/AddSign.svg";
import circle2 from "@/images/circle2.svg";

const Main2Container = styled.div`
  ${tw`
    bg-[#1a1a1a]
  w-full
  h-auto
    
    `}
`;

const Main2Style = styled.div`
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
  text-lg
  flex
  items-center
  pl-4
  text-blue-500
    
    `}
`;

const Circle2 = styled(circle2)`
  ${tw`
    text-blue-500
    fill-current
    flex
    h-5
    w-6
    mr-4
    
    `}
`;


export interface IMain2Props {

}

const Main2: React.FunctionComponent<IMain2Props> = ({ activeNote, onUpdateNote, notes, setNotes }) => {
  const [mainNote, setMainNote] = useState([]);
  const [textContent, setTextContent] = useState([]);
  const [fieldValue, setFieldValue] = useState(true);

  const addMainNotes = () => {
    const newMainNotes = {
      content: textContent
    };
    setMainNote([newMainNotes, ...mainNote]);
  };

  const onEditField = (key, value) => {
    onUpdateNote({
      ...activeNote,
      [key]: value,
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
    setTextContent(e.target.value);
  };

  const AddMainNotesLogic = () => {
    addMainNotes()
  };

  console.log(notes);

  return (
    <>

      <Main2Container>
        <Main2Style>
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
              <Add
                onClick={AddMainNotesLogic}
              />
              <Input
                placeholder="Add Task"
                value={notes.body}
                name="content"
                id={notes.id}
                onChange={handleChangeContent}
                onClick={handleSelectAll}
              />
            </InputStyles>
          </InputContainer>

          <div>
            {notes.map(content =>
                <AddNote key={content.id}>
                  <Circle2 />
                  {content.body}
                </AddNote> )}
          </div>

        </Main2Style>
      </Main2Container>
    </>
  );
};

export default Main2;
