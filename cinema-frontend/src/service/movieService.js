import http from "./httpService";
import {apiUrl} from "../config";

const apiEndpoint = apiUrl + "/movie";

export function getMovies() {
    return http.get(apiEndpoint);
}

export function deleteMovie(movieId) {
    return http.delete(apiEndpoint + "/" + movieId);
} 