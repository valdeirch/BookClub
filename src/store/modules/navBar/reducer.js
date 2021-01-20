import produce from "immer";

const INITIAL_STATE = {
  title: null,
  searchText: "",
};

export default function navbar(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case "@navbar/SET_TITLE": {
        draft.title = action.payload;
        break;
      }
      default:
    }
  });
}
