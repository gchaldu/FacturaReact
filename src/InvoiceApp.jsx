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
  const [priceValue, setPriceValue] = useState(0);
  const [quantityValue, setQuantityValue] = useState(0);

  const [items, setItems] = useState (itemsInicial);


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
                  setItems([...items, { product: productValue, price: priceValue, quantity: quantityValue }])
                }} >
                  <input type="text" name="product" placeholder="Producto" className="form-control mx-2 my-2" onChange={ event =>{
                    setProductValue(event.target.value);
                  }}/>
                  <input type="text" name="price" placeholder="Precio" className="form-control mx-2 my-2" onChange={ event =>{
                    setPriceValue(parseInt(event.target.value))
                  }}/>
                  <input type="text" name="quantity" placeholder="Cantidad" className="form-control mx-2 my-2" onChange={ event =>{
                    setQuantityValue(parseInt(event.target.value))
                  }}/>
                  <button type="submit" className="btn btn-primary">Agregar Producto</button>
                </form>
          </div>
        </div>
      </div>
    </>
  );
};
