import axios from "axios";
import {
  loadGlossaries,
  loadGlossary,
  loadUser,
  addUser,
  loadWords,
  loadWord,
  addGlossary,
  deleteGlossary,
  loadDefs,
  addWord,
  updateGlossary,
  updateWord,
  deleteWord,
} from "./actionCreators";

const fetchGlossaries = () => {
  return async (dispatch) => {
    const { data: glossaries } = await axios.get("/api/glossaries");
    dispatch(loadGlossaries(glossaries));
  };
};

const fetchGlossary = (glossaryId) => {
  return async (dispatch) => {
    const { data: glossary } = await axios.get(`/api/glossaries/${glossaryId}`);
    dispatch(loadGlossary(glossary));
  };
};

const createGlossary = (newGlossary, history) => {
  return async (dispatch) => {
    // const headerToken = {
    //   headers: { authorization: window.localStorage.getItem("token") },
    // };
    const { data: glossary } = await axios.post(`/api/glossaries`, newGlossary);
    dispatch(addGlossary(glossary));
    history.push("/glossaries");
  };
};

const destroyGlossary = (glossary) => {
  return async (dispatch) => {
    // const headerToken = {
    //   headers: { authorization: window.localStorage.getItem("token") },
    // };
    await axios.delete(`/api/glossaries/${glossary.id}`);
    dispatch(deleteGlossary(glossary));
  };
};

const editGlossary = (glossary, history) => {
  return async (dispatch) => {
    // const headerToken = {
    //   headers: { authorization: window.localStorage.getItem("token") },
    // };
    const { data: updatedGlossary } = await axios.put(
      `/api/glossaries/${glossary.id}`,
      glossary
      // headerToken
    );
    dispatch(updateGlossary(updatedGlossary));
    history.push(`/glossaries/`);
  };
};
const fetchWords = () => {
  return async (dispatch) => {
    const { data: words } = await axios.get("/api/words");
    dispatch(loadWords(words));
  };
};

const fetchWord = (wordId) => {
  return async (dispatch) => {
    const { data: word } = await axios.get(`/api/words/${wordId}`);
    dispatch(loadWord(word));
  };
};

const createWord = (newWord, definition, glossaryId) => {
  return async (dispatch) => {
    // const headerToken = {
    //   headers: { authorization: window.localStorage.getItem("token") },
    // };
    const { data: word } = await axios.post(`/api/words`, {
      newWord,
      definition,
      glossaryId,
    });
    dispatch(addWord(word));
  };
};

const fetchDefs = (word) => {
  return async (dispatch) => {
    const { data: defs } = await axios.get(`/api/words/${word}`);
    dispatch(loadDefs(defs));
  };
};

const destroyWord = (word) => {
  return async (dispatch) => {
    // const headerToken = {
    //   headers: { authorization: window.localStorage.getItem("token") },
    // };
    await axios.delete(`/api/words/${word.id}`);
    dispatch(deleteWord(word));
  };
};

const editWord = (word, history) => {
  return async (dispatch) => {
    // const headerToken = {
    //   headers: { authorization: window.localStorage.getItem("token") },
    // };
    const { data: updatedWord } = await axios.put(
      `/api/words/${word.id}`,
      word
      // headerToken
    );
    dispatch(updateWord(updatedWord));
    history.push(`/words/`);
  };
};

export {
  fetchGlossaries,
  fetchGlossary,
  createGlossary,
  destroyGlossary,
  editGlossary,
  fetchWords,
  fetchWord,
  createWord,
  destroyWord,
  editWord,
  fetchDefs,
};
