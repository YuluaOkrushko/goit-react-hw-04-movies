class Movie
{
    constructor(){
        this.apiKey = "d03d3d4ae9f019a0305baebc2f8d8178";
        this.baseApiUrl = "https://api.themoviedb.org/3/";
    }

    getTrending() {
        const url = `${this.baseApiUrl}trending/movie/day`;
        return this.sendRequest(url)
    }

    search(query) {
        const url = `${this.baseApiUrl}search/movie`;
        const params = {
            query: query
        };
        return this.sendRequest(url ,params)
    }

    getMovieDetails(movieId)
    {
        const url = `${this.baseApiUrl}movie/${movieId}`;
        return this.sendRequest(url)
    }

    getMovieCredits(movieId)
    {
        const url = `${this.baseApiUrl}movie/${movieId}/credits`;
        return this.sendRequest(url)
    }

    getMovieReviews(movieId)
    {
        const url = `${this.baseApiUrl}movie/${movieId}/reviews`;
        return this.sendRequest(url)
    }

    sendRequest(url, params = {}) {
        params.api_key = this.apiKey;
        params = new URLSearchParams(params).toString();
        return fetch (`${url}?${params}`).then(res => res.json())
        // .then(entries => entries.map(entry => entry.show));
    }
}
const tvApi = new Movie();
export default tvApi;
