import PropTypes from 'prop-types'

// eslint-disable-next-line react/prop-types
export const ClientView = ({client}) => {

  // eslint-disable-next-line react/prop-types
  const { name, lastname, address: {country, city, number, street} } = client;
  // eslint-disable-next-line react/prop-types
  return (
    <>
      <h3>Datos del Cliente</h3>
      <ul className="list-group">
        <li className="list-group-item active">
          {`${lastname} ${name}`}{" "}
        </li>
        <li className="list-group-item">Pais: {country}</li>
        <li className="list-group-item">Ciudad: {city}</li>
        <li className="list-group-item">Calle: {street}</li>
        <li className="list-group-item">Nro: {number}</li>
      </ul>
    </>
  );
};


ClientView.propTypes = {
  client: PropTypes.object.isRequired,
}