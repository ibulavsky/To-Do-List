let ADD_WISHLIST = 'wishesListsAPP/addListsReducer/ADD_WISHLIST';


let initialState = {
    wishesLists: [],
};

const addListsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_WISHLIST:
            return {
                ...state,
                wishesLists: [...state.wishesLists, action.newWishesList],
            };
        default:
            return state;
    }
};

export default addListsReducer

export const addWishesList = newWishesList => ({type: ADD_WISHLIST, newWishesList})
