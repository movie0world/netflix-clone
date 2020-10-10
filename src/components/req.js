
const API_KEY='31f399a5832aad9ea80cb7d95efc95d6'
const urls={
    trending:`/trending/all/week?api_key=${API_KEY}&language=en-US`,
    NetflixOriginal:`/discover/tv?api_key=${API_KEY}&with_network=213`,
    TopRated:`/discover/movie?api_key=${API_KEY}`,
    ActionMovies:`/discover/movie?api_key=${API_KEY}&with_genres=28`,
    ComedyMovies:`/discover/movie?api_key=${API_KEY}&with_genres=35`,
    HorrorMovies:`/discover/movie?api_key=${API_KEY}&with_genres=27`,
    RomanceMovies:`/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    DocumentariesMovies:`/discover/movie?api_key=${API_KEY}&with_genres=99`,
} 

export default urls