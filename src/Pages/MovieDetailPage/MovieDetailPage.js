import React, {Component, lazy, Suspense} from "react";
import {NavLink, Route, Switch} from "react-router-dom";
import styles from "./MovieDetailPage.module.css";
import tvApi from "../../services/tv-api";
import routes from "../../routes"

const MovieCast = lazy(() =>
import ("../../components/MovieCast/MovieCast" /* webpackChunkName: "movieCast-page"*/))

const MovieReview = lazy(() =>
import ("../../components/MoviesReview/MovieReview" /* webpackChunkName: "movieReview-page"*/))

export default class MovieDetailPage extends Component{
    state = {
        id: null,
        poster_path: null,
        vote_average: null,
        title: null,
        overview: null,
        genres: null,
    }

     componentDidMount() {
         const {movieId} = this.props.match.params;

         tvApi
         .getMovieDetails(movieId)
         .then((response) => {
            this.setState(
            {
                     id: response.id,
                     poster_path: response.poster_path,
                     title: response.title,
                     overview: response.overview,
                     genres: response.genres,
                     vote_average: response.vote_average
            })
         })
         .catch((error) => console.log(error))
     }

    handleGoBack = () => {
        const {location, history} = this.props;
        history.push(location?.state?.from || "/")
    }

    render(){
        const {
            id,
            poster_path,
            vote_average,
            title,
            overview,
            genres
        } = this.state
        return(
            <div>
                <div className={styles.container}>
                    <button type="button"
                            onClick={this.handleGoBack}
                            className={styles.button}>
                        Go Back
                    </button> {id && (
                        <>
                            <img src={`https://image.tmdb.org/t/p/w400/${poster_path}`}
                             alt=""/>
                             <div className={styles.description}>
                                 <h1>{title}</h1>
                                 <p>User Score: {vote_average * 10}%</p>
                                 <h2>Overview</h2>
                                 <p>{overview}</p>
                                 <h3>Genres</h3>
                                 <p>{genres.map((genre) => `${genre.name} `)}</p>
                             </div>
                        </>
                    )}
                </div>
                <div className={styles.additional}>
                    <span>Additional information</span>
                    <div className={styles.nav}>
                        <ul>
                            <li>
                                <NavLink to={{pathname: `/movies/${id}/cast`}}
                                         className={styles.link}
                                         activeClassName={styles.active}>Cast</NavLink>
                            </li>
                            <li>
                                <NavLink to={{pathname: `/movies/${id}/reviews`}}
                                         className={styles.link}
                                         activeClassName={styles.active}>Reviews</NavLink>
                            </li>
                        </ul>
                    </div>
                    <Suspense fallback={<h3>Loading...</h3>}>
                        <Switch>
                            <Route path={routes.movieCast} component={MovieCast}/>
                            <Route path={routes.movieReview} component={MovieReview}></Route>
                        </Switch>
                    </Suspense>
                </div>
            </div>
        )
    }
}