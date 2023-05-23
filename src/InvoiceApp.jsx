/* eslint-disable no-unused-vars */
import { InvoiceService } from "./services/InvoiceService";

import {InvoiceView} from "./components/InvoiceView";
import {ClientView} from "./components/ClientView";
import {CompanyView} from "./components/CompanyView";
import {ProductoView} from "./components/ProductoView"
import {TotalView} from "./components/TotalView"
import { useState } from "react";

export const InvoiceApp = () => {
  const { id, name, client, company, items: itemsInicial, total } = InvoiceService();
  const { name: nameCompany, fiscalNumber } = company;

  const [productValue, setProductValue] = useState('');
  const [priceValue, setPriceValue] = useState('');
  const [quantityValue, setQuantityValue] = useState('');

  const [items, setItems] = useState (itemsInicial);

  const limpiarHtml = () =>
  {
    setProductValue('');
    setPriceValue('');
    setQuantityValue('');
  }

  return (
    <>
      <div className="container">
        <div className="card my-3">
          <div className="card-header">Detalle Factura</div>
          <div className="card-body">
            <InvoiceView id={id} name={name} />
            <div className="row my-3">
              <div className="col">
                  <ClientView client={client}/>
              </div>
              <div className="col">
                    <CompanyView 
                        nameCompany={nameCompany}
                        fiscalNumber={fiscalNumber}
                    />
              </div>
            </div>
            <h4>Productos</h4>
                <ProductoView 
                    items={items}
                />
                <TotalView total={total}/>
                <form className="w-50" onSubmit={event=>{
                  event.preventDefault();
                  setItems([...items, { id: 4, product: productValue, price: parseInt(priceValue,10), quantity: quantityValue }])
                  limpiarHtml();
                }} >
                  <input type="text" name="product" placeholder="Producto" value={productValue} className="form-control mx-2 my-2" onChange={ event =>{
                    setProductValue(event.target.value);
                  }}/>
                  <input type="text" name="price" placeholder="Precio" value={priceValue} className="form-control mx-2 my-2" onChange={ event =>{
                    setPriceValue(event.target.value);
                  }}/>
                  <input type="text" name="quantity" placeholder="Cantidad" value={quantityValue} className="form-control mx-2 my-2" onChange={ event =>{
                    setQuantityValue(event.target.value);
                  }}/>
                  <button type="submit" className="btn btn-primary">Agregar Producto</button>
                </form>
          </div>
        </div>
      </div>
    </>
  );
};
