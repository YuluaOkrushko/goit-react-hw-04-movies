import React, { lazy, Suspense } from 'react';
import { Switch, Route, Redirect} from 'react-router-dom';
import Navbar from "./components/Navigation/Navigation";
import routes from "./routes"

const HomePage = lazy(() =>
import("./Pages/HomePage/HomePage" /*webpackChunkName: "home-page"*/))
const MovieSearch = lazy(() =>
import("./components/MovieSearch/MovieSearch" /*webpackChunkName: "movieSearch-page"*/))
const MovieDetailPage = lazy(() =>
import("./Pages/MovieDetailPage/MovieDetailPage" /*webpackChunkName: "movieDetails-page"*/))

const App = () => {
    return(
        <>
            <Navbar></Navbar>
            <Suspense fallback={<h3>Loading...</h3>}>
                <Switch>
                    <Route path={routes.home} exact component={HomePage}/>
                    <Route path={routes.movies} exact component={MovieSearch}/>
                    <Route path={routes.movieId} component={MovieDetailPage}/>
                    <Redirect to={routes.home} />
                </Switch>
            </Suspense>
        </>
    )
}

export default App;