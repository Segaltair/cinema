import http from "./httpService";

// const apiEndpoint = 

export function getMovies() {
    return http.get("http://localhost:8080/movie");
}

export function deleteMovie(movieId) {
    return http.delete();
}