import React from "react";
import {NavLink} from "react-router-dom";
import PropTypes from 'prop-types';
import styles from "./MovieItem.module.css"

const MovieItem = ({ items }) => (
    <>
      {items.map((item) => (
        <div
          key={item.id}
          style={
            item.backdrop_path
              ? {
                  backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`,
                }
              : {
                  backgroundImage:
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSAUmka06uFKW8BxmZXi8uH_N1euTnUnTWmhQ&usqp=CAU",
                }
          }
          className={styles.movieCard}>
          <NavLink to={{ pathname: `/movies/${item.id}` }}>
            <div className={styles.movieCardOverlay}></div>
            <div className={styles.movieCardContent}>
              <div className={styles.movieCardHeader}>
                <h2 className={styles.movieCardTitle}>{item.title}</h2>
              </div>
            </div>
          </NavLink>
        </div>
      ))}
    </>
  );
  export default MovieItem;

  MovieItem.propTypes = {
    items: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        backdrop_path: PropTypes.string,
        title: PropTypes.string.isRequired
      })
    )
  }