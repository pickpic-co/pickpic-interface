export const showProductSearchReducer = (state = false , action ) => {
    switch(action.type)
    {
        case 'SHOW_PRODUCT_SEARCH_COMPONENT':
            return !state
        default:
            return state
    }
}

//export default showProductSearchReducer