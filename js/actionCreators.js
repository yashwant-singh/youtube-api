import { SET_SEARCH_TERM, ADD_OMDB_DATA } from './actions'
import axios from 'axios'

export function setSearchTerm (searchTerm) {
  return { type: SET_SEARCH_TERM, searchTerm }
}

export function addOMDBData (imdbID, omdbData) {
  return { type: ADD_OMDB_DATA, imdbID, omdbData }
}

export function getOMDBDetails (imdbID) {
  return function (dispatch, getState) {
    axios.get(`https://api.themoviedb.org/3/find/${imdbID}?api_key=db971c94a628dcda7871231a08fdede6&language=en-US&external_source=imdb_id`)
      .then((response) => {
        dispatch(addOMDBData(imdbID, response.data.tv_results[0]))
      })
      .catch((error) => console.error('axios error', error))
  }
}
