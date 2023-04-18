<template>
    <button :class="['ingredient-button',{active:props.active}]">
       <p class="title">{{ props.text }}</p>
       <p>{{props.price}}$</p>
    </button>
</template>

<script setup>
 const props = defineProps({ 
    text:String,
    price:Number,
    active:Boolean
})
</script>

<style lang="scss" scoped>
.ingredient-button{
    width: 100%;
    margin: 0 auto;
    border-radius: $main-radius;
    background-color: $black-4pct;
    padding: 0.4rem 0;

    display: flex;
    align-items: center;
    justify-content: space-between;

    transition: all .12s ease-in-out;
    padding: 0.5rem 1rem;

    &.active{
        
        background-color: $green;
        color: white;
         
    }
    >.title{
        text-transform: uppercase;
        font-weight: 600;
        font-size: .875rem;
        
    }
}
</style>