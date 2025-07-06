import axios from "axios";

export const moviesApis = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
    headers: {
        Authorization: `Bearer  eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkODlkY2RiZTQ3YzI0MzUxZTExZTViZWU5MWIzNmRhYiIsIm5iZiI6MTc0NDU4MDIyMi41NzQwMDAxLCJzdWIiOiI2N2ZjMmU3ZTdjMjlhZTViYzNkOTFhMzAiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.k-3MeNtJQ5c7iPxg1irJTR4d0OirjR6qD1BsRb9WnIk`
    }
})