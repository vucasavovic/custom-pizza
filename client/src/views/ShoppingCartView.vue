<template>
    <main class="view summary-view">

        <section class="products">

            <div v-for="(product,index) in customerOrder.allProducts" :key="index"  class="pizza">
                <header>
                    <h2 class="title">Pizza {{index+1}}</h2>
                    <p class="remove" @click="customerOrder.deletePizza(product)">remove</p>
                </header>
             

                <div class="details">
                    <p>Size {{product.size}}</p>
                    <p>Slices {{product.cuts}}</p>
                </div>
             

                <div class="ingredients">
                    <div v-for="(ingredVal,ingredI) in product.ingredients" :key="ingredI" class="ingredient">
                        <p class="title">{{ ingredVal.name }}</p>
                        <p class="price">{{ ingredVal.price }} $</p>
                    </div>
                </div>

                <footer class="price">
                    <p>Final price</p>
                    <p>{{product.price()}}$</p>
                </footer>
            </div>
 
        </section>

        <section v-if="!noProducts" class="total">
        <p>For payment</p>
        <p>{{ customerOrder.total() }}$</p>
       </section>

       <Button   @click="navigate('/pizza_customizer')" :active="true" theme="green" text="Add pizza"/>
 
        <section v-if="!noProducts" class="navigation">  
            <Button  @click="navigate('/payment')" :active="true" theme="yellow" text="To payment"/>
        </section>

    </main>
</template>

<script setup>
import { useCustomerOrderStore } from '../stores/order';
import Button from '../components/Button.vue';
import { computed } from '@vue/reactivity';
import { useNavigator } from '../composables/navigator'; 

const {navigate} = useNavigator();
const customerOrder = useCustomerOrderStore(); 

const noProducts = computed(()=>{
    return customerOrder.allProducts.length==0
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
 
    >.details{
        display: flex;
        gap: 1rem;
      
    }

    >.price{
        display: flex;
        justify-content: flex-end;
        gap: 0.4rem;
        >:nth-child(2){
            font-weight: 600;
            font-size: 1.2rem;
        }
    }

    >.options{
        display: flex;
        gap: 1rem;
        justify-content: space-between;

        >:first-child{
            color: $green;
        }
        >:last-child{
            color: $red;
        }
    }

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

.total{
    background-color: $black-4pct;
  
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
    padding: 1rem;

    >:nth-child(2){
        font-weight: 600;
        font-size: 1.6rem;
    }
}

 
 
</style>