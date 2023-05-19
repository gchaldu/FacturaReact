import { invoice } from "../data/invoice"


export const InvoiceService = () => {
    
    //UNA FORMA CLASICA DE CALCULAR
    /* let total=0;
    invoice.items.forEach((item)=>{
        total+=item.price*item.quantity;
    }) */
    
    //UNA FORMA DE CALCULAR CON LA LIBRERIA DE CALCULADORA
    const total = invoice.items
        .map(item=>item.price*item.quantity)
        .reduce((total,price)=>total+price,0)

    return {...invoice, total: total};
}