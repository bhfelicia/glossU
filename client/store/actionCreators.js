import {
  LOAD_GLOSSARIES,
  LOAD_GLOSSARY,
  LOAD_USER,
  ADD_USER,
  LOAD_WORDS,
  ADD_GLOSSARY,
  DELETE_GLOSSARY,
  ADD_WORD,
  UPDATE_GLOSSARY,
  UPDATE_WORD,
  DELETE_WORD,
  LOAD_DEFS,
  LOAD_WORD,
} from "./actions";

export const loadGlossaries = (glossaries) => ({
  type: LOAD_GLOSSARIES,
  glossaries,
});

export const loadGlossary = (glossary) => ({
  type: LOAD_GLOSSARY,
  glossary,
});

export const loadUser = (user) => ({
  type: LOAD_USER,
  user,
});
export const addUser = (user) => ({
  type: ADD_USER,
  user,
});

export const loadWords = (words) => ({
  type: LOAD_WORDS,
  words,
});

export const loadWord = (word) => ({
  type: LOAD_WORD,
  word,
});

export const loadDefs = (defs) => ({
  type: LOAD_DEFS,
  defs,
});

export const addGlossary = (glossary) => ({
  type: ADD_GLOSSARY,
  glossary,
});

export const deleteGlossary = (glossary) => ({
  type: DELETE_GLOSSARY,
  glossary,
});

export const addWord = (word) => ({
  type: ADD_WORD,
  word,
});

export const updateGlossary = (glossary) => ({
  type: UPDATE_GLOSSARY,
  glossary,
});

export const updateWord = (word) => ({
  type: UPDATE_WORD,
  word,
});

export const deleteWord = (word) => ({
  type: DELETE_WORD,
  word,
});
