import { defineStore } from 'pinia'
import { Pizza, Ingredient,PizzaSize} from '../composables/objects';
import { ref, computed } from 'vue'

export const useCustomerOrderStore = defineStore('customet order', () => {

      
     let allProducts = ref([]);
     let currentPizza = ref(new Pizza())

     const total = function(){
         let tot = 0;
         allProducts.value.forEach(product => {
               tot +=  product.price();
         });
         return tot;
     }

     const deletePizza = function(pizza){
        allProducts.value = allProducts.value.filter(p=>p!=pizza);
     }

     const savePizza = function(){
         if(currentPizza.value.cuts == PizzaSize.Unselected || currentPizza.value.size == PizzaSize.Unselected){
            return;
         }
         if(currentPizza.value.ingredients.length==0){
            return;
         }
  
         currentPizza.value.name = "Pizza " + (allProducts.value.length + 1);
         allProducts.value.push(currentPizza.value);
         currentPizza.value = new Pizza();
         return true;
     }
    
     const selectIngredient = function(ingredient){
        if(currentPizza.value.ingredients.filter(i=>i.id == ingredient.id).length>0){
            currentPizza.value.ingredients = currentPizza.value.ingredients.filter(i=>i.id!=ingredient.id);
        }else{
            currentPizza.value.ingredients.push(ingredient);
        }
     }
     
     const numOfCuts = function(pizzaCuts){
        currentPizza.value.cuts= pizzaCuts;
     }

     const setPizzaSize = function(size){
        currentPizza.value.size = size;
     }
     
    

     return {allProducts,currentPizza, total,savePizza, deletePizza, selectIngredient,savePizza,setPizzaSize,numOfCuts}
})



 
 