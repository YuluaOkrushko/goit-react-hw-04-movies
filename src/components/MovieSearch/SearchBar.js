import React from 'react';
import PropTypes from "prop-types";
import styles from "./SearchBar.module.css";



const SearchBar = ({onSubmit}) => (
    <form onSubmit={onSubmit}>
        <fieldset className={styles.material}>
            <input
                type="text"
                autoComplete="off"
                autoFocus
                placeholder="Search movie..."
                name="movieInput"
                required/>
            <button type="submit"
                    className={styles.button}>Search</button>
            <hr></hr>
        </fieldset>
    </form>
);
export default SearchBar;

SearchBar.propTypes = {
    onSubmit: PropTypes.func.isRequired
}