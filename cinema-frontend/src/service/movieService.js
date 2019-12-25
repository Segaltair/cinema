import http from "./httpService";
import {apiUrl} from "../config";

const apiEndpoint = apiUrl + "/movie";

export function getMovies() {
    return http.get(apiEndpoint);
}

function movieUrl(id) {
    return `${apiEndpoint}/${id}`;
}

export function getMovie(movieId) {
    return http.get(movieUrl(movieId));
}

export function saveMovie(movie) {
    if (movie.id) {
        const body = {...movie};
        delete body.id;
        return http.put(movieUrl(movie.id), body);
    }
    return http.post(apiEndpoint, movie);
}

export function deleteMovie(movieId) {
    return http.delete(movieUrl(movieId));
} 