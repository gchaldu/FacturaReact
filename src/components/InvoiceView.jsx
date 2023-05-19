import PropTypes from 'prop-types'

/* eslint-disable react/prop-types */
export const InvoiceView = ({name, id})=> {
    return (
        <>
            <ul className="list-group">
              <li className="list-group-item">Nro de factura: {id}</li>
              <li className="list-group-item">Empresa: {name}</li>
            </ul>
        </>
    )
}

InvoiceView.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired
}