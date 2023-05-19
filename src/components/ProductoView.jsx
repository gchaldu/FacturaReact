import { RowItem } from './RowItem';
import PropTypes from 'prop-types'

/* eslint-disable react/prop-types */
export const ProductoView = ({items}) => {
  return (
    <>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Producto</th>
            <th>Precio</th>
            <th>Cantidad</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => {
            
            return (
              // eslint-disable-next-line react/jsx-key
              <RowItem key={ item.id }item={item} />
            );
          })}
        </tbody>
      </table>
    </>
  );
};

ProductoView.propTypes = {
  items: PropTypes.array.isRequired,
}