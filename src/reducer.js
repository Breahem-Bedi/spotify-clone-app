
export const intialState = {
    user: null,
    playlists: [],
    spotify: null,
    discover_weekly: null,
    top_artists: null,
    playing: false,
    item: null,
    //token: "BQAkrar2f3xwBKfw53Gll-u402Licw-p7bZerZC-vg8d2GXzCf__oXqcf3ZHsI_fCks9KO9bni4fQwI0zkpzgBySf1qnA_kOx6ZaW57d7bf43JY5fj-BjXBWVE9_Jv1JN5rhGipxe7T4PG4iCUf6ATeiCS-5rcjLtzf3fS_pIpZTiBcs",
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'SET_USER':
            return {
                ...state, 
                user: action.user,
            }
        case 'SET_TOKEN':
            return {
                ...state, 
                token: action.token,
            }
        case 'SET_PLAYLISTS':
            return {
                ...state, 
                playlists: action.playlists,
            }
        case "SET_PLAYING":
            return {
                ...state,
                playing: action.playing,
            };
        case "SET_SPOTIFY":
            return {
                ...state,
                spotify: action.spotify,
            };
        case "SET_ITEM":
            return {
                ...state,
                item: action.item,
            };
        case 'SET_DISCOVER_WEEKLY':
            return {
                ...state, 
                discover_weekly: action.discover_weekly,
            }
        case "SET_TOP_ARTISTS":
            return {
                ...state,
                top_artists: action.top_artists,
            };            
        default:
            return state;
    }
}

export default reducer;

