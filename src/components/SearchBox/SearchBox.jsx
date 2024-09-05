import { useId } from "react";

import css from "./SearchBox.module.css";
import { useDispatch, useSelector } from "react-redux";
import { changeFilter, selectNameFilter } from "../../redux/filtersSlice.js";

const SearchBox = () => {
  const searchId = useId();

  const value = useSelector(selectNameFilter);

  const dispatch = useDispatch();

  const handleDelete = (value) => dispatch(changeFilter(value));

  return (
    <div className={css.searchContainer}>
      <label className={css.searchLabel} htmlFor={searchId}>
        Find contacts by name
      </label>
      <input
        onChange={(e) => handleDelete(e.target.value)}
        className={css.searchInput}
        id={searchId}
        value={value}
      />
    </div>
  );
};

export default SearchBox;
