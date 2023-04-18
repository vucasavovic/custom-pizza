import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
 
export const useMasterStore = defineStore('master', () => {
  const currency = "$";
  const availableIngredients = [
    {id:1,name:'Tomato sauce',type:'Sauce',price:0.2},
    {id:2,name:'Cheddar',type:'Cheese',price:1},
    {id:3,name:'American cheese',type:'Cheese',price:1},
    {id:4,name:'Gorgonzola',type:'Cheese',price:2},
    {id:5,name:'Parmiggiano',type:'Cheese',price:2},
    {id:6,name:'Pecorino',type:'Cheese',price:3},
    {id:7,name:'Mocarella',type:'Cheese',price:2},
    {id:8,name:'Pepperoni',type:'Meat',price:1.2},
    {id:9,name:'Ground beef',type:'Meat',price:2},
    {id:10,name:'Ground Pork',type:'Meat',price:1.6},
    {id:11,name:'Bratwurst',type:'Meat',price:1.2},
    {id:12,name:'Prsciutto',type:'Meat',price:3},
    {id:13,name:'Egg',type:'Meat',price:0.4},
    {id:14,name:'Mushrooms',type:'Veggies',price:0.5},
    {id:15,name:'Green pepper',type:'Veggies',price:0.4},
    {id:16,name:'Red pepper',type:'Veggies',price:0.5},
    {id:17,name:'Basil',type:'Veggies',price:0.3},
    {id:18,name:'Tomato',type:'Veggies',price:0.5},
    {id:19,name:'Zuchinni',type:'Veggies',price:0.5},
    {id:20,name:'Corn',type:'Veggies',price:0.3},  
 ]
 
 
  const mobileMenuVisible = ref(false);

  const displayMobileMenu = function(){
    mobileMenuVisible.value = true;
  }
  const hideMobileMenu = function(){
    mobileMenuVisible.value = false;
  }
 
  return {availableIngredients, mobileMenuVisible,displayMobileMenu,hideMobileMenu}
})
