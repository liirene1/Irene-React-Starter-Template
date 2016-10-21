import React from 'react';
import ResultsArea from './ResultsArea';

const Search = ({items}) => {
    return (
      <div>
        Items
        <ResultsArea items={items}/>
      </div>
    )
};

export default Search;
