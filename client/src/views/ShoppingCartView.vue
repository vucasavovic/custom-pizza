<template>

    <BasicLayout>
        <template v-slot:header>

        </template>
        <template v-slot:body>
            <section class="products">

            <div v-for="(product,index) in customerOrder.allProducts" :key="index"  class="pizza">
                <header>
                    <h2 class="title">Pizza {{index+1}}</h2>
                    <TextButton @click="customerOrder.deletePizza(product)" text="Remove" theme="red" /> 
                </header>


            <div class="details">
                <p><span class="label">Size</span><span>{{product.size}}in</span> </p>
                <p><span class="label">Cuts</span><span>{{product.cuts}}pcs.</span> </p>
            </div>


            <div class="ingredients">
                <div v-for="(ingredVal,ingredI) in product.ingredients" :key="ingredI" class="ingredient">
                <p class="title">{{ ingredVal.name }}</p>
                <p class="price">{{ ingredVal.price }} $</p>
                </div>
            </div>

            <footer class="price">
                <p class="label">Pizza cost </p>
                <p>{{product.price()}}$</p>
                </footer>
            </div>

            </section>

            <section class="more">
                <div v-if="!hasProducts" class="no-products">
                    <h3 class="title">No products in cart</h3>
                    <p>Add some fenomenal products then return here.</p>
                </div>

                <Button   @click="navigate('/pizza_customizer')" :active="true" theme="green" text="Add pizza"/>
            </section>
 
        </template>
        <template v-slot:footer>
            <Total currency="$" :netAmount="customerOrder.total()"/>
            <Button  @click="navigate('/payment')" :active="hasProducts" theme="yellow" text="To payment"/>
        </template>
    </BasicLayout>
 
    
</template>

<script setup>
import BasicLayout from '../components/BasicLayout.vue';
import Total from '../components/Total.vue';
import { useCustomerOrderStore } from '../stores/order';
import Button from '../components/Button.vue';
import TextButton from '../components/TextButton.vue';
import { computed } from '@vue/reactivity';
import { useNavigator } from '../composables/navigator'; 

const {navigate} = useNavigator();
const customerOrder = useCustomerOrderStore(); 

const hasProducts = computed(()=>{
    return customerOrder.allProducts.length>0
})
 
</script>
 
<style lang="scss" scoped>

.summary-view{
    display: flex;
    flex-direction: column;
    gap: 1rem;
}
.products{
    display: flex;
    flex-direction: column;
    gap: 1rem;
}
.pizza{
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    border-bottom: 1px solid $black-4pct;
    
    padding-bottom: 1rem;
    >header,footer{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    
    >.price{
        display: flex;
        justify-content: space-between;
        
        >:nth-child(2){
            font-weight: 600;
            font-size: 1.2rem;
        }
    }
 
}
 
.pizza .details{
    display: flex;
    gap: 1rem;
    >*{
        >:nth-child(2){
            margin-left: 0.4rem;
            font-weight: 700;
        }
    }
}

.ingredients{
    padding: 1rem 0;
    border-top:$border;
    border-bottom: $border;
    display: flex;
    flex-direction: column;
    gap: 0.2rem;
}

.pizza>.header>.title{
    text-transform: uppercase;
    font-weight: 700;
}

.pizza>.header>.remove{
    color: $red;
}

.ingredient{
    display: flex;
    justify-content: space-between;
}
 
.no-products{
    text-align: center;
    padding: 2rem 0;
    padding-top: 0;
    >.title{
        text-transform: uppercase;
        font-size: 1.6rem;
        margin-bottom: 0.4rem;
    }
}
 
  
</style>