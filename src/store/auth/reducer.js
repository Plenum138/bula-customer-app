const initialState = {
    token: null,
    userId: null,
    didTryAutoLogin: false,
    schools: [],
  };

  export default (state = initialState, action) => {
        if(action.type=='login'){
            console.log('data login here')
        }
        return state;
    }
  