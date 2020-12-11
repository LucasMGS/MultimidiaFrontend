const API_KEY = "9eb1f5bdb47232292bbb5ab00e816231";

const requests = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en=US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies: `/trending/all/week?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies: `/trending/all/week?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies: `/trending/all/week?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies: `/trending/all/week?api_key=${API_KEY}&with_genres=1074`,
    fetchDocumentaries: `/trending/all/week?api_key=${API_KEY}&with_genres=99`,
}

export default requests;