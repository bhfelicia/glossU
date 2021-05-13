import {
  LOAD_WORD,
  LOAD_WORDS,
  ADD_WORD,
  UPDATE_WORD,
  DELETE_WORD,
  LOAD_DEFS,
} from "../actions";

const initialState = {
  words: [],
  selectedWord: {},
  defs: [],
};

const wordReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_WORD:
      return { ...state, selectedWord: action.word };
    case LOAD_WORDS:
      return { ...state, words: action.words };
    case LOAD_DEFS:
      return { ...state, defs: action.defs };
    case ADD_WORD:
      return { ...state, words: [...state.words, action.word] };
    case UPDATE_WORD:
      const withoutEdited = state.words.filter(
        (word) => word.id !== action.word.id
      );
      return { ...state, words: [...withoutEdited, action.word] };
    case DELETE_WORD:
      const withoutDeleted = state.words.filter(
        (word) => word.id !== action.word.id
      );
      return { ...state, words: withoutDeleted };
    default:
      return state;
  }
};

export default wordReducer;
