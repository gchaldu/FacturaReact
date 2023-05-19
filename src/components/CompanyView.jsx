import PropTypes from 'prop-types'
/* eslint-disable react/prop-types */
export const CompanyView = ({nameCompany, fiscalNumber}) => {
  return (
    <>
      <h3>Datos de la Empresa</h3>
      <ul className="list-group">
        <li className="list-group-item active">{nameCompany}</li>
        <li className="list-group-item">Nro Fiscal: {fiscalNumber}</li>
      </ul>
    </>
  );
};

CompanyView.propTypes = {
  nameCompany: PropTypes.string.isRequired,
  fiscalNumber: PropTypes.number.isRequired,
}