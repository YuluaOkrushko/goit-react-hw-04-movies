import React, {Component} from "react";
import MovieItem from "../../components/MovieItem/MovieItem";
import tvApi from '../../services/tv-api';
import styles from "./HomePage.module.css";



export default class HomePage extends Component {
    state = {
        movieList: [],
    }

    componentDidMount(){
        tvApi
        .getTrending()
        .then((movies) => {
            this.setState({
                movieList: movies.results
            })
        })
        .catch((error) => console.log(error))
    }

    render(){
        const {movieList} = this.state;
        return (
            <>
                <h1>Trending today</h1>
                <div className={styles.cardList}>
                    <MovieItem items={movieList}></MovieItem>
                </div>
            </>
        )
    }
}