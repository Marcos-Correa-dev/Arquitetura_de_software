import { moviesApis } from "../config/http";

export function getPopularMovies() {
    return moviesApis.get("movie/popular")
}

export function getMovie(moveId) {
    return moviesApis.get(`movie/${moveId}`) // utiliza o a crase para fazer uma interpolação de strings
}