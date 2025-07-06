import { useEffect, useState } from "react";
import { getMovie, getPopularMovies } from "../services/movies.service";

export function useMovies() {
    const [movies, setMovies] = useState([]);

    useEffect (() => {
        getPopularMovies().then(({ data }) => {
            setMovies(data.results)
        })
    }, [])

    return movies;
}//hooks personalidados servem para extrair lógica que 
//depende da localização de estado de componente

export function useMovie(movieId) {
    const [movie, setMovie] = useState([]);

    useEffect (() => {
        getMovie(movieId).then(({ data }) => {
            setMovie(data)
        })
    }, [movieId])

    return movie;
}



