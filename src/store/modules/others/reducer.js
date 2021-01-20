import produce from "immer";

const INITIAL_STATE = {
  loading: true,
};

export default function navbar(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case "@others/SET_LOADING": {
        draft.loading = action.payload;
        break;
      }
      default:
    }
  });
}
