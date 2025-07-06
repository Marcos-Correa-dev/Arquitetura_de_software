import { MovieItem } from "../components/movieItem/MovieItem";
import { useMovies } from "../hooks/useMovies";
import styles from "./movies.module.css";

export function Movies() {
    const movies = useMovies(); //hook feito aqui

    return (
        <section className={styles.moviesCOntainer}>
            <h1>Filmes populares</h1>


            <div className={styles.movieList}>
                {movies.map((movie) => (
                    <MovieItem key={movie.id} movie={movie} />
                ))}
            </div>
        </section>
    );
}