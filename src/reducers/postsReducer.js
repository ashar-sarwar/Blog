//bad
//return document.querySelector("input");
//bad
//return axios.get('/anything')
//good
//return state + action

//bad
//state[0]="Sam"
//state.pop()
//state.push()

//bad
//state.name="sam"
//state.age=33

export default (state = [], action) => {
  switch (action.type) {
    case "FETCH_POSTS":
      return action.payload;

    default:
      return state;
  }
};
