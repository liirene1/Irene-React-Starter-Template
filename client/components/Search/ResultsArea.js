import React from 'react';
import ItemList from './ItemList';

const ResultsArea = ({items}) => {
    return (
      <div>
        <ItemList items={items} />
      </div>
    )
}

export default ResultsArea;
