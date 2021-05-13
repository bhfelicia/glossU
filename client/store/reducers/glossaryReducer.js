import {
  LOAD_GLOSSARY,
  LOAD_GLOSSARIES,
  ADD_GLOSSARY,
  UPDATE_GLOSSARY,
  DELETE_GLOSSARY,
} from "../actions";

const initialState = {
  glossaries: [],
  selectedGlossary: {},
};

const glossaryReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_GLOSSARY:
      return { ...state, selectedGlossary: action.glossary };
    case LOAD_GLOSSARIES:
      return { ...state, glossaries: action.glossaries };
    case ADD_GLOSSARY:
      return { ...state, glossaries: [...state.glossaries, action.glossary] };
    case UPDATE_GLOSSARY:
      const withoutEdited = state.glossaries.filter(
        (glossary) => glossary.id !== action.glossary.id
      );
      return { ...state, glossaries: [...withoutEdited, action.glossary] };
    case DELETE_GLOSSARY:
      const withoutDeleted = state.glossaries.filter(
        (glossary) => glossary.id !== action.glossary.id
      );
      return { ...state, glossaries: withoutDeleted };
    default:
      return state;
  }
};

export default glossaryReducer;
