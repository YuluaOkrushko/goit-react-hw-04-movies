import React, {Component} from "react";
import MovieItem from "../MovieItem/MovieItem";
import SearchBar from "./SearchBar";
import styles from "./MovieSearch.module.css";
import tvApi from "../../services/tv-api"



export default class MovieSearch extends Component {
    state = {
        inputValue: "",
        movieList: []
    }

    makeRequest = (inputValue) => {
        tvApi
        .search(inputValue)
        .then((response) => {
            this.setState(({movieList}) => ({
                movieList: [...movieList,...response.results]
            }))
        }).catch((error) => console.log(error))
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const search = e.target.movieInput.value;
        this.setState((prevState) => {
            if (prevState.inputValue !== search) {
                return {
                    movieList: [],
                    inputValue: search
                }
            }
        })
        this.makeRequest(search);
    }

    render(){
        const {movieList} = this.state;
        return(
            <>
                <SearchBar onSubmit={this.handleSubmit}></SearchBar>
                    <ul className={styles.cardList}>
                        <MovieItem items={movieList}></MovieItem>
                    </ul>
            </>
        )
    }
}