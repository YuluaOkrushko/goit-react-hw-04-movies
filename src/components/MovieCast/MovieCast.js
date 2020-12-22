import React, {Component } from "react";
import tvApi from "../../services/tv-api";
import styles from "./MovieCast.module.css";


export default class MovieCast extends Component {
    state = {
        cast: []
    }

    componentDidMount() {
        const {movieId} = this.props.match.params;
        tvApi
        .getMovieCredits(movieId)
        .then((response) => {
            this.setState({cast: response.cast})
        })
        .catch((error) => console.log(error))

    }


    render(){
        const {cast} = this.state
        return(
            <div>
                <ul className={styles.cast}>
                    {cast && cast.map((item) => (
                        <li key={item.credit_id}
                            className={styles.castItem}>
                            <img src={item.profile_path ? "https://image.tmdb.org/t/p/original" +
                                      item.profile_path : "https://i.ibb.co/7NmPR1b/avatar.png"}
                                 alt={item.name}/>
                            <p>{item.name}</p>
                            <p>Character: {item.character}</p>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}