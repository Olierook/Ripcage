
export const initialState = {
  isDesktop: false
};



export const reducer = (state, action) => {
  switch (action.type) {
  case "TEST": {

    return {
      ...initialState
    };
  }
  default:
    return {
      ...initialState, ...action
    };
  }
};

