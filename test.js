const cart = [
    { id: 1, name: "dell",qty:2,price:20000 },
    { id: 2, name: "hp",qty:1,price:30000 },
    { id: 3, name: "apple",qty:3,price:10000 },
]

const cartItem = {id:4,name:"samsung",qty:4,price:40000}
const index = cart.findIndex(item => item.id === cartItem.id)
if(index <=0){
    cart[index].qty += cartItem.qty
}
else{
    cart.push(cartItem)
}
console.log(cart)