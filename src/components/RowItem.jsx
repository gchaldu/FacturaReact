/* eslint-disable react/prop-types */
export const RowItem = ({item}) => {
  const { product, price, quantity} = item;
  return (
    <>
      <tr>
        <td>{product}</td>
        <td>{price}</td>
        <td>{quantity}</td>
      </tr>
    </>
  );
};
