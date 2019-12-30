import {httpPost, httpGet, httpDelete, httpPut} from "./httpService";
import {apiUrl} from "../config";

const apiEndpoint = apiUrl + "/movie";

export function getMovies() {
    return httpGet(apiEndpoint);
}

function movieUrl(id) {
    return `${apiEndpoint}/${id}`;
}

export function getMovie(movieId) {
    return httpGet(movieUrl(movieId));
}

export function saveMovie(movie) {
    if (movie.id) {
        const body = {...movie};
        delete body.id;
        return httpPut(movieUrl(movie.id), body);
    }
    return httpPost(apiEndpoint, movie);
}

export function deleteMovie(movieId) {
    return httpDelete(movieUrl(movieId));
} 