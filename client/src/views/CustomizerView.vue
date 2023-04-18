<template>

    <BasicLayout>
        <template v-slot:header>
                 
        </template>
        <template v-slot:body>

            
            <div class="section size-section ">
                <h3 class="title">Size</h3>

                <div class="body button-row">
                    <RadioButton :active="customerOrder.currentPizza.size == PizzaSize.SixInches" @click="customerOrder.setPizzaSize(PizzaSize.SixInches)" text="6in"/>
                    <RadioButton :active="customerOrder.currentPizza.size == PizzaSize.EightInches" @click="customerOrder.setPizzaSize(PizzaSize.EightInches)" text="8in"/>
                    <RadioButton :active="customerOrder.currentPizza.size == PizzaSize.TwelweInches" @click="customerOrder.setPizzaSize(PizzaSize.TwelweInches)" text="12in"/>
                </div>
                 
            </div>

            <div class="section  cuts-section">
                <h3 class="title">Slices</h3>
                 
                <div class="body button-row">
                    <RadioButton @click="customerOrder.numOfCuts(PizzaCuts.Four)" :active="customerOrder.currentPizza.cuts == PizzaCuts.Four" icon="4_cuts" text="Pizza 4 cuts"/>
                    <RadioButton @click="customerOrder.numOfCuts(PizzaCuts.Six)" :active="customerOrder.currentPizza.cuts == PizzaCuts.Six" icon="6_cuts" text="Pizza 6 cuts"/>
                    <RadioButton @click="customerOrder.numOfCuts(PizzaCuts.Eight)" :active="customerOrder.currentPizza.cuts == PizzaCuts.Eight" icon="8_cuts" text="Pizza 8 cuts"/>
                </div>
            </div>

            <div class="section">
                <h3 class="title">Sauce</h3>
                 <div class="body button-col">
                   <IngredientButton @click="customerOrder.selectIngredient(ingredient)" v-for="ingredient in sauces" :key="ingredient.id" :active="selectedIngredient(ingredient.id)" :text="ingredient.name" :price="ingredient.price" /> 
                 </div>
            </div>

            <div class="section">
                <h3 class="title">Cheeses</h3>
                 <div class="body button-col">
                    <IngredientButton @click="customerOrder.selectIngredient(ingredient)" v-for="ingredient in cheese" :key="ingredient.id" :active="selectedIngredient(ingredient.id)" :text="ingredient.name" :price="ingredient.price" /> 
                 </div>
            </div>

            <div class="section">
                <h3 class="title">Meats</h3>
                 <div class="body button-col">
                    <IngredientButton @click="customerOrder.selectIngredient(ingredient)" v-for="ingredient in meats" :key="ingredient.id" :active="selectedIngredient(ingredient.id)" :text="ingredient.name" :price="ingredient.price" /> 
                 </div>
            </div>

            <div class="section">
                <h3 class="title">Veggies</h3>
                 <div class="body button-col">
                    <IngredientButton @click="customerOrder.selectIngredient(ingredient)" v-for="ingredient in veggies" :key="ingredient.id" :active="selectedIngredient(ingredient.id)" :text="ingredient.name" :price="ingredient.price" /> 
                 </div>
            </div>
        </template>
        <template v-slot:footer>
            <Button @click="onFinishCustomizing" :active="true" theme="yellow" text="Next"/>
        </template>
    </BasicLayout>
 
</template>

<script setup>
import { useNavigator } from '@/composables/navigator';
import { PizzaSize, PizzaCuts, Pizza } from '../composables/objects';
import { useMasterStore } from '../stores/master';
import { useCustomerOrderStore } from '../stores/order';
import { useWarningStore } from '../stores/warning';
import { computed, onMounted } from 'vue';
import { isArray } from '@vue/shared';

import BasicLayout from '../components/BasicLayout.vue';
import Button from '../components/Button.vue';
import RadioButton from '../components/RadioButton.vue';
import IngredientButton from '@/components/IngredientButton.vue'


const {navigate} = useNavigator();
const customerOrder = useCustomerOrderStore();
const masterStore = useMasterStore();
const warningStore = useWarningStore();

const orderComplete = computed(()=>{
    let completed = true;
    Object.values(customerOrder.currentPizza).forEach(val => {
         if(val=="" || val==0){
            console.log('0 val')
            completed = false;
         }else if(isArray(val) && val.length<3){
            console.log('not enough ingredients')
            completed = false;
         }
        
    });

    return completed;
})

const onFinishCustomizing = function(){
    if(customerOrder.savePizza()){
         navigate('/cart')
    }else{
        warningStore.display('Pick a size, number of slices and at least one ingredient!','warning',2.5)
    }
}

const sauces = computed(()=>{
    return masterStore.availableIngredients.filter(i=>i.type == "Sauce")
})

const cheese = computed(()=>{
    return masterStore.availableIngredients.filter(i=>i.type == "Cheese")
})

const meats = computed(()=>{
    return masterStore.availableIngredients.filter(i=>i.type == "Meat")
})

const veggies = computed(()=>{
    return masterStore.availableIngredients.filter(i=>i.type == "Veggies")
})
 
const selectedIngredient = function(id){
    return customerOrder.currentPizza.ingredients.filter(ingredient=>ingredient.id==id).length>0
}

onMounted(()=>{
    customerOrder.currentPizza = new Pizza();
})

</script>

<style lang="scss" scoped>
 
.section{
    width: 100%;
    margin: 0 auto;
    >.title{
        text-align: center;
        text-transform: uppercase;
        font-size: 1.4rem;
    }
    >.body{
        margin-top:2rem;
    }

    &:nth-of-type(n+2){
        margin-top: 3rem;
    }
}
.button-row{
    display: flex;
    justify-content: center;
    gap: 1.4rem;
}
.button-col{
    display: flex;
    flex-direction: column;
    gap: 0.3rem;
}
input{
    width: 100%;
    padding: 1rem;
    border-bottom: 1px solid $black-4pct;
    font-size: inherit;
    font-family: inherit;
    text-align: center;
    &:focus{
        outline: none;
    }
}
</style>