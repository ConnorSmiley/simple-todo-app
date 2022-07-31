import { nanoid } from "@reduxjs/toolkit";

export const notesList = [{
  id: nanoid(),
  title: "Untitled Note",
  body: "",
  lastModified: Date.now()
}]
