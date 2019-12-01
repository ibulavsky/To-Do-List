let ADD_WISHLIST = 'wishesListsAPP/ListsReducer/ADD_WISHLIST';
let DELETE_WISHLIST = 'wishesListsAPP/ListsReducer/DELETE_WISHLIST';
let ADD_WISH = 'wishesListsAPP/ListsReducer/ADD_WISH';


let initialState = {
    wishesLists: [{
        name: 'List',
        id: 1,
        wishes: [{title: 'Wish', priority: 2, status: 'complete'},]
    }],
};

const listsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_WISHLIST:
            return {
                ...state,
                wishesLists: [...state.wishesLists, action.newWishesList],
            };
        case DELETE_WISHLIST:
            return {
                ...state,
                wishesLists: state.wishesLists.filter(wl => {
                    if (wl.id !== action.wishesListId) {
                        return true
                    } else {
                        return false
                    }
                })
            };
        case ADD_WISH:
            return {
                ...state,
                wishesLists: state.wishesLists.map(l => {
                    if (l.id === action.listId) {
                        return {
                            ...l, wishes: [action.newWish, ...l.wishes]
                        }
                    } else {
                        return l
                    }
                }),
            };
        default:
            return state;
    }
};

export default listsReducer

export const addWishesList = newWishesList => ({type: ADD_WISHLIST, newWishesList})
export const deleteWishesList = wishesListId => ({type: DELETE_WISHLIST, wishesListId})
export const addWish = (newWish, listId) => ({type: ADD_WISH, newWish, listId})
