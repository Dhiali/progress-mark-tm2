displayCheck = () => {

let data = JSON.parse(localStorage.getItem('order'));
let items = document.getElementById('checkoutOrder');

let totalArea= document.getElementById('totalOut');

let checkTotal=0;
for(let i=0;i < data.length; i++){
        let name = data[i].orderModel;
        let proportion = data[i].orderProportion;
        let base =data[i].orderBread ;
        let toppings = data[i].orderTopping;
        let sauce =data[i].orderSauce ;
        let quantity= data[i].orderQuantity;
        let price = data[i].orderPrice;
        let drinks = data[i].orderDrinks;

checkTotal +=price;

items.innerHTML +=`

<div class="orderLine">
    <p><strong>Name:</strong>${name}</p>
    <p><strong>Proportion:</strong>${proportion}</p>
    <p><strong>Bread:</strong>${base}</p>
    <p><strong>Toppings:</strong>${toppings}</p>
    <p><strong>Sauce:</strong>${sauce}</p>
    <p><strong>quantity:</strong>${quantity}</p>
    <p><strong>drinks:</strong>${drinks}</p>
    <p><strong>Price:</strong>R${price}.00</p>
</div>


`

totalArea.innerHTML = "R" + checkTotal + ".00";

}






}


resetReturn = () => {
    localStorage.removeItem('order');
    window.location.href = '../index.html'
}



discount = () => {
    const promoCodeInput = document.getElementById("promoCodeInput");
    const applyButton = document.getElementById("applyButton");
    
    
    applyButton.addEventListener("click", function() {
      
      const promoCode = promoCodeInput.value;
    
      
      if (promoCode === "DEE") {
        console.log("Promo code applied successfully!");
      } else {
        console.log("Invalid promo code!");
    
      }
    });
}
