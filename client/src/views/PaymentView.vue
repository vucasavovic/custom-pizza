<template>
    <BasicLayout>
        <template v-slot:header> 
            <h1>Payment</h1>
        </template>

        <template v-slot:body>
            <form action="">
                <input type="text" name="name" id="" placeholder="Name">
                <input type="text" name="phone" id="" placeholder="Phone">
                <input type="text" name="address" id="" placeholder="Address">
                <textarea name="" id=""  placeholder="Notes for driver"></textarea>
            </form>
        </template>


        <template v-slot:footer>
            <Button text="Submit" theme="yellow" :active="true" /> 
        </template>

    </BasicLayout>
  
       
 
    
</template>

<script setup>
import BasicLayout from '../components/BasicLayout.vue';
import Button from '../components/Button.vue';
</script>

<style lang="scss" scoped>

form{
    display: flex;
    flex-direction: column;
    gap: 1rem;
}


input,textarea{
    width: 100%;
    padding: 8px 1rem;
    border: 1px solid grey;
    font-size: inherit;
    font-family: inherit;
    color: grey;
    &:focus{
        outline: none;
    }
   
}
</style>