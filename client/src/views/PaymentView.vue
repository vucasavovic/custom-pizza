<template>
    <BasicLayout>
        <template v-slot:header> 
            <h1>Payment</h1>
        </template>

        <template v-slot:body>
            <form action="">
                 <Input label="Name" :validate="{type:'name',message:'Firstname or nickname, no special chatracters or space'}" v-model="user.name"/>
                 <Input label="Mobile phone" :validate="{type:'phone',message:'Firstname or nickname, no special chatracters or space'}" v-model="user.phone"/>
                 <Input label="Delivery address" :validate="{type:'address',message:'Firstname or nickname, no special chatracters or space'}" v-model="user.address"/>
                 <Input type="textarea" :validate="{type:'text',message:'Firstname or nickname, no special chatracters or space'}" label="Driver instructions" v-model="user.notes"/>
 
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
            <Button @click="submitForm()" text="Pay" theme="yellow" :active="true" /> 
        </template>

    </BasicLayout>
  
       
 
    
</template>

<script setup>
 
import { ref } from 'vue';
import { useCustomerOrderStore } from '../stores/order';

import Input from '../components/Input.vue';
import Button from '../components/Button.vue';
import Total from '../components/Total.vue';
import BasicLayout from '../components/BasicLayout.vue';

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

 
const submitForm = function(){
    console.log('submitting')
}
 

</script>

<style lang="scss" scoped>

form{
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
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