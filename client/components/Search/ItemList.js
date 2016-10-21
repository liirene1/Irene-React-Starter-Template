import React, {PropTypes} from 'react';
import ItemListing from './ItemListing';

const ItemList = ({items}) => {
  return (
    <div class="row">
      {items.map(item =>
        <ItemListing key={item.id} item={item} />
      )}
    </div>
  );
};

ItemList.propTypes = {
  items: PropTypes.array.isRequired
};

export default ItemList;
