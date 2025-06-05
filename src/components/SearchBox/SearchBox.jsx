

// import React from 'react';
// import styles from './SearchBox.module.css';

// const SearchBox = ({ value, onChange }) => {
//   return (
//     <div className={styles.box}>
//       <label htmlFor="search" className={styles.label}>Find contacts by name</label>
//       <input
//         id="search"
//         className={styles.input}
//         type="text"
//         value={value}
//         onChange={(e) => onChange(e.target.value)}
//       />
//     </div>
//   );
// };

// export default SearchBox;

import React from 'react';
import styles from './SearchBox.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from '../../redux/filtersSlice';

const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filters.name);

  return (
    <div className={styles.box}>
      <label htmlFor="search" className={styles.label}>Find contacts by name</label>
      <input
        id="search"
        className={styles.input}
        type="text"
        value={filter}
        onChange={(e) => dispatch(changeFilter(e.target.value))}
      />
    </div>
  );
};

export default SearchBox;