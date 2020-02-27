import React from 'react';

import './search-box.styles.css';

//functional compnent gets props and generates html
export const SearchBox = ({placeholder, handleChange}) => (
    <input 
        className='search'
        type='search' 
        placeholder={placeholder}
        onChange={handleChange}
    />
)