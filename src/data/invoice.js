export const invoice = {
    id: 10,
    name: 'Componente PC',
    client:{
        name: 'Gabriel',
        lastname: 'Chaldu',
        address:{
            country: 'USA',
            city: 'Los angeles',
            number: 12,
            street: 'España'
        }
    },
    company:{
        name: 'Google',
        fiscalNumber: 123
    },
    items: [
        {id: 1, product:'Micro I7', price: 5, quantity:3},
        {id: 2, product:'Teclado', price: 2, quantity:2},
        {id: 3, product:'Monitor Asus', price: 10, quantity:1}
    ]
}