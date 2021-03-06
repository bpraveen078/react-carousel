import { TaskConstants } from "../constants";
const initialState = {
  imageData: [
    {
      id: 1,
      url:
        "https://cmeimg-a.akamaihd.net/640/clsd/getty/c64f76dc20c246ca88ee180fe4b4b781",
      name: ""
    },
    {
      id: 2,
      url:
        "https://lh3.googleusercontent.com/oxPeODS2m6rYIVbhcQChRtOWEYeGDwbeeeB1cDU2o_WYAVPU61VIgx-_6BAh5gSL8Sw=h900",
      name: ""
    },
    {
      id: 3,
      url:
        "https://i0.wp.com/www.universodegatos.com/wp-content/uploads/2017/04/fivfelv7.jpg?resize=582%2C328",
      name: ""
    },
    {
      id: 4,
      url:
        "https://i.pinimg.com/736x/07/c3/45/07c345d0eca11d0bc97c894751ba1b46.jpg",
      name: ""
    },
    {
      id: 5,
      url:
        "https://ehealthforum.com/health/images/avatars/11699147425707699031013.jpeg",
      name: ""
    }
  ]
};

export function TaskReducer(state = initialState, action) {
  switch (action.type) {
    case TaskConstants.UPDATE_NAME_START:
      debugger;
      const imageArray = state.imageData.forEach(o => {
        if (o.id === action.model.id) {
          o.name = action.model.name;
        }
      });
      return {
        ...state,
        loading: true
      };

    default:
      return state;
  }
}
