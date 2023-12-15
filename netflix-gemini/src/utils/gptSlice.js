import { createSlice } from "@reduxjs/toolkit"

const gptSlice = createSlice(
    {
        name: "gpt",
        initialState: {
            showGptSearch: false,
            movieResult: null,
            movienames: null

        },
        reducers: {
            toggleGptSearchView: (state, action) => {
                state.showGptSearch = !state.showGptSearch;

            },
            gptSearhResults: (state, action) => {
                const { movienames, movieResult } = action.payload
                state.movienames = movienames
                state.movieResult = movieResult
            }
        }


    }
)
export const { toggleGptSearchView, gptSearhResults } = gptSlice.actions;
export default gptSlice.reducer;