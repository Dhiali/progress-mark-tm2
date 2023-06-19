
let allOrder = [];

makeOrder = () => {

    let orderTotal = 0;

    let model = document.getElementById("model").value
    let proportion = document.getElementById("proportion").value
    let bread = document.getElementById("bread").value
    let quantity = +document.getElementById("quantity").value
    let topping = document.getElementById("topping").value
    let sauce = document.getElementById("sauce").value
    let drinks = document.getElementById("drinks").value;

    if(proportion === "Large"){
        orderTotal = orderTotal + 10;
    } else if(proportion === "Medium"){
        orderTotal = orderTotal + 20;
    } else if(proportion === "Small"){
        orderTotal = orderTotal + 17;
    }
    
    if(bread === "sourdough"){
        orderTotal = orderTotal + 10;
    } else if(bread === "Brioche Bread"){
        orderTotal = orderTotal + 20;
    } else if(bread === "Rye Bread"){
        orderTotal = orderTotal + 17;
    }


    
    if(topping === "Cheese"){
        orderTotal = orderTotal + 1,5;
    } else if(topping === "pepperoni"){
        orderTotal = orderTotal + 2;
    } else if(topping === "mushrooms"){
        orderTotal = orderTotal + 15;
    }else if(topping === "olives"){
        orderTotal = orderTotal + 5;
    }else if(topping === "beef"){
        orderTotal = orderTotal + 20;
    }else if(topping === "chicken"){
        orderTotal = orderTotal + 17;
    }else if(topping === "anchovies"){
        orderTotal = orderTotal + 15;
    }else if(topping === "lettuce"){
        orderTotal = orderTotal + 2;
    }else if(topping === "tomato"){
        orderTotal = orderTotal + 7,5;
    }else if(topping === "fish"){
        orderTotal = orderTotal + 1,7;
    }else if(topping === "pickle"){
        orderTotal = orderTotal + 29;
    }else if(topping === "ham"){
        orderTotal = orderTotal + 75;
    }else if(topping === "bacon"){
        orderTotal = orderTotal + 15;
    }else if(topping === "pineapple"){
        orderTotal = orderTotal + 2;
    }else if(topping === "feta"){
        orderTotal = orderTotal + 75;
    }else if(topping === "salami"){
        orderTotal = orderTotal + 1,5;
    }else if(topping === "cucumber"){
        orderTotal = orderTotal + 2;
    }else if(topping === "carrot"){
        orderTotal = orderTotal + 1,75;
    }else if(topping === "chilli"){
        orderTotal = orderTotal + 1,5;
    }else if(topping === "potato"){
        orderTotal = orderTotal + 2;
    }else if(topping === "fries"){
        orderTotal = orderTotal + 5;
    }
    

    if(sauce === "Ranch"){
        orderTotal = orderTotal + 10;
    } else if(sauce === "Sweet onion"){
        orderTotal = orderTotal + 20;
    } else if(sauce === "Honey mustard"){
        orderTotal = orderTotal + 17;
    }else if(sauce === "BBQ"){
        orderTotal = orderTotal + 19;
    } else if(sauce === "Buffalo Sauce"){
        orderTotal = orderTotal + 80;
    }else if(sauce === "Mayo"){
        orderTotal = orderTotal + 18;
    } 


    if(drinks === "Coke"){
        orderTotal = orderTotal + 40;
    } else if(drinks === "Cream soda"){
        orderTotal = orderTotal + 20;
    } else if(drinks === "Sprite"){
        orderTotal = orderTotal + 47;
    }else if(drinks === "Iron brew"){
        orderTotal = orderTotal + 29;
    } else if(drinks === "Lemonade"){
        orderTotal = orderTotal + 80;
    }else if(drinks === "Water"){
        orderTotal = orderTotal + 18;
    } 






    if( quantity>= 1){

        allOrder.push({
            orderBread: bread,
            orderModel:model,
            orderQuantity:quantity,
            orderTopping:topping,
            orderSauce:sauce,
            orderProportion:proportion,
            orderDrinks:drinks,
            orderPrice:orderTotal
        });


        
    } else {
        alert("Information is missing");
    }
       
console.log(allOrder)
    document.getElementById("OrderForm").reset();
    document.getElementById("realTimeCost").innerHTML="R0.00"

}

realTimeCost = () => {

    realTimePrice = 0;

    let proportion = document.getElementById("proportion").value
    let bread = document.getElementById("bread").value
    let topping = document.getElementById("topping").value
    let sauce = document.getElementById("sauce").value
    let drinks = document.getElementById("drinks").value;

    if(proportion === "Large"){
        realTimePrice = realTimePrice + 10;
    } else if(proportion === "Medium"){
        realTimePrice = realTimePrice + 20;
    } else if(proportion === "Small"){
        realTimePrice = realTimePrice + 17;
    }

    if(bread === "sourdough"){
        realTimePrice = realTimePrice + 10;
    } else if(bread === "Brioche Bread"){
        realTimePrice = realTimePrice + 20;
    } else if(bread === "Rye Bread"){
        realTimePrice =realTimePrice + 17;
    }

          
    if(topping === "Cheese"){
        realTimePrice = realTimePrice + 1,5;
    } else if(topping === "pepperoni"){
        realTimePrice = realTimePrice + 2;
    } else if(topping === "mushrooms"){
        realTimePrice = realTimePrice + 15;
    }else if(topping === "olives"){
        realTimePrice = realTimePrice + 5;
    }else if(topping === "beef"){
        realTimePrice = realTimePrice + 20;
    }else if(topping === "chicken"){
        realTimePrice = realTimePrice + 17;
    }else if(topping === "anchovies"){
        realTimePrice = realTimePrice+ 15;
    }else if(topping === "lettuce"){
        realTimePrice = realTimePrice + 2;
    }else if(topping === "tomato"){
        realTimePrice = realTimePrice + 7,5;
    }else if(topping === "fish"){
        realTimePrice = realTimePrice + 1,7;
    }else if(topping === "pickle"){
        realTimePrice = realTimePrice + 29;
    }else if(topping === "ham"){
        realTimePrice =realTimePrice + 75;
    }else if(topping === "bacon"){
        realTimePrice = realTimePrice + 15;
    }else if(topping === "pineapple"){
        realTimePrice = realTimePrice+ 2;
    }else if(topping === "feta"){
        realTimePrice = realTimePrice + 75;
    }else if(topping === "salami"){
        realTimePrice = realTimePrice + 1,5;
    }else if(topping === "cucumber"){
        realTimePrice =realTimePrice+ 2;
    }else if(topping === "carrot"){
        realTimePrice = realTimePrice + 1,75;
    }else if(topping === "chilli"){
        realTimePrice = realTimePrice + 1,5;
    }else if(topping === "potato"){
        realTimePrice =realTimePrice + 2;
    }else if(topping === "fries"){
        realTimePrice = realTimePrice + 5;
    }
    

    if(sauce === "Ranch"){
        realTimePrice = realTimePrice + 10;
    } else if(sauce === "Sweet onion"){
        realTimePrice = realTimePrice + 20;
    } else if(sauce === "Honey mustard"){
        realTimePrice = realTimePrice + 17;
    }else if(sauce === "BBQ"){
        realTimePrice = realTimePrice + 19;
    } else if(sauce === "Buffalo Sauce"){
        realTimePrice =realTimePrice + 80;
    }else if(sauce === "Mayo"){
        realTimePrice = realTimePrice+ 18;
    } 


    if(drinks === "Coke"){
        realTimePrice = realTimePrice + 40;
    } else if(drinks === "Cream soda"){
        realTimePrice = realTimePrice + 20;
    } else if(drinks === "Sprite"){
        realTimePrice = realTimePrice + 47;
    }else if(drinks === "Iron brew"){
        realTimePrice = realTimePrice + 29;
    } else if(drinks === "Lemonade"){
        realTimePrice = realTimePrice + 80;
    }else if(drinks === "Water"){
        realTimePrice = realTimePrice + 18;
    } 

    document.getElementById("realTimeCost").innerHTML = "R" + realTimePrice + ".00";

}
    
displayOrder= () => {

    let area = document.getElementById("out");
    let total = document.getElementById("orderTotal");
    
    area.innerHTML= "";
    
    let overallTotal = 0;

    for( let i=0; i< allOrder.length; i++) {
        let name = allOrder[i].orderModel;
        let size = allOrder[i].orderProportion;
        let base =allOrder[i].orderBread ;
        let toppings = allOrder[i].orderTopping;
        let sauce =allOrder[i].orderSauce ;
        let quantity= allOrder[i].orderQuantity;
        let price = allOrder[i].orderPrice;
        let drinks = allOrder[i].orderDrinks;


    
        overallTotal += price;
    
                area.innerHTML += `
                
                <div class="card" style="width: 200px;">
                <img src="../assets/card8.jpg" class="card-img-top">
          
                <div class="card-body">
                    <h5 class="card-title">${name}</h5>
                 </div>
          <ul class="list-group list-group-flush">
           <li class="list-group-item"><p class="card-text"><strong>Base:</strong>${base}</p></li>
           <li class="list-group-item"><p class="card-text"><strong>Size:</strong> ${size}</p></li>
           <li class="list-group-item"> <p class="card-text"><strong>Toppings:</strong>${toppings}</p></li>
           <li class="list-group-item"><p class="card-text"><strong>Sauce:</strong>${sauce}</p></li>
           <li class="list-group-item"><p class="card-text"><strong>Quantity:</strong> ${quantity}</p></li>
           <li class="list-group-item"> <p class="card-text"><strong>Drinks:</strong>${drinks}</p></li>
           <li class="list-group-item"> <p class="card-text"><strong>Cost:</strong>R${price}.00</p></li>
          </ul>
          
          </div>
                  `
                  
    
        total.innerHTML="R" + overallTotal + ".00"
    
    }
    
    
    }

    checkOut = () => {
        let data = JSON.stringify(allOrder)
        localStorage.setItem('food',data)
        window.location.href="checkout.html";
    }
    




