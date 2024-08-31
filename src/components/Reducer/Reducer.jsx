
const inistialstate = {
    message: '',
    loading: false,
    data: null,
    error: null
}

const reducer = (state = inistialstate, action) => {
    switch (action.type) {
        case 'Fetch_Start':
            return {
                ...state, loading: true
            }
            break;

        case 'Fetch_success':
            return {
                ...state,
                loading: false,
                data: action.payload
            }
            break;
        case 'Insert_success':
            return {
                ...state,
                loading: false,
            }
            break;
        case 'Fetch_err':
            return {
                ...state,
                loading: false,
                data: action.payload
            }
            break;

        default:
            return { state }
            break;
    }
}

export default reducer