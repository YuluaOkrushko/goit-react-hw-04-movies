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

    componentDidMount()
    {
        const search = localStorage.getItem("searchValue");
        if(search)
        {
            document.querySelector("[name=movieInput]").value = search;
            this.movieSearch(search);
        }
    }

    makeRequest = (inputValue) => {
        tvApi
        .search(inputValue)
        .then((response) => {
            this.setState(() => ({
                movieList: [...response.results]
            }))
        }).catch((error) => console.log(error))
    }

    movieSearch = (search)=>
    {
        this.setState((prevState) => {
            if (prevState.inputValue !== search) {
                return {
                    movieList: [],
                    inputValue: search
                }
            }
        })
        localStorage.setItem("searchValue", search);
        this.makeRequest(search);
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const search = e.target.movieInput.value;
        this.movieSearch(search);
    }

    render() {
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