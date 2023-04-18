<template>
    <BasicLayout>
        <template v-slot:header> 
            <h1>Payment</h1>
        </template>

        <template v-slot:body>
            <form action="">
                <input class="input" type="text" id="" placeholder="Name" v-model="user.name">
                <input class="input" type="text"  id="" placeholder="Delivery address" v-model="user.address">
                <input class="input" type="text"  id="" placeholder="Contact phone" v-model="user.phone">
                <textarea class="input" name="" id=""  placeholder="Notes for driver" v-model="user.notes"></textarea>

                <p>Payment card details</p>

                <div class="payment-card-input">
                    <input  class="input  span-full" autocomplete="off"  type="text" id="" placeholder="xxxx xxxx xxxx xxxx" v-model="paymentCard.num">
                    <div class="expiration-date-input">
                        <input autocomplete="off" maxlength="2"  type="text"  placeholder="mm" v-model="paymentCard.expiryDate.month">
                        /
                        <input autocomplete="off" maxlength="2"  type="text" placeholder="yy" v-model="paymentCard.expiryDate.year">
                    </div>
                    <input class="input" autocomplete="off" maxlength="3"  type="text"  id="" placeholder="ccv" v-model="paymentCard.ccv">
                </div>
            </form>
        </template>


        <template v-slot:footer>
            <Total currency="$" :netAmount="customerOrder.total()"/>
            <Button text="Pay" theme="yellow" :active="true" /> 
        </template>

    </BasicLayout>
  
       
 
    
</template>

<script setup>
import { ref } from 'vue';
import Total from '../components/Total.vue';
import BasicLayout from '../components/BasicLayout.vue';
import Button from '../components/Button.vue';
import { useCustomerOrderStore } from '../stores/order';
const customerOrder = useCustomerOrderStore(); 


const user = ref({
    name:'',
    phone:'',
    address:'',
    notes:''
});

const paymentCard  = ref({
   number:'',
   expiryDate:{month:0,year:0},
   ccv:''
})
 

</script>

<style lang="scss" scoped>

form{
    display: flex;
    flex-direction: column;
    gap: 1rem;
}


.input{
   
    padding: 8px 1rem;
    border: 1px solid grey;
    color: grey;
    &:focus{
        outline: none;
    }
}

.payment-card-input{
    border: 1px solid grey;
    border-radius: $main-radius;
    overflow: hidden;
    display:grid;
    grid-template-columns: 1fr 1fr;
        
     >.span-full{
        grid-column: 1 / span 2;
     }
     & input,.input{
        border-radius: 0;
        border: 0;
     }

     >:first-child{
        border-bottom: 1px solid grey !important;
     }
}

.expiration-date-input{
    border-right: 1px solid grey;
    color: grey;
    display:flex;
    gap: 0.2rem;
    align-items: center;
  
    padding:8px 16px;
  

    >*{
        width: 60px;
    }
}
</style>