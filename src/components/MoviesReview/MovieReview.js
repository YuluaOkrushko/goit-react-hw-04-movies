import React, {Component } from "react";
import tvApi from "../../services/tv-api";
import styles from "./MovieReview.module.css";


export default class MovieReview extends Component{
    state = {
        reviews: []
    }

    componentDidMount(){
        const {movieId} = this.props.match.params;

        tvApi
        .getMovieReviews(movieId)
        .then((response) => {
            this.setState({
                reviews: response.results
            })
        })
        .catch((error) => console.log(error))
    }


    render(){
        const {reviews} = this.state;
        return(
            <div className={styles.review}>
                {!reviews || reviews.length === 0 ? (
                    <p>We don't have any reviews for this movie</p>
                ) : (
                    <ul>{reviews.map(({id, author, content}) => (
                        <li key={id}>
                            <p className={styles.author}>{author} :</p>
                            <p>{content}</p>
                        </li>
                    ))}</ul>
                )}
            </div>
        )
    }
}