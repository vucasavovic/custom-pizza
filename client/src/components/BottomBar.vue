<template>
    <div class="bottom-bar">
            <span>
                 
            </span>
            <span>
                <TextButton icon="cart" text="Cart"/>
            </span>
            <span>
                
            </span>
    </div>
</template>

<script setup>
import TextButton from './TextButton.vue';
</script>

<style lang="scss" scoped>
.bottom-bar{
    position: fixed;
    left: 0;
    top: 100vh;
    transform: translateY(-100%);
    width: 100%;
    max-width: $app-max-width;
    margin: 0 auto;
    min-height: 60px;
    padding: 1rem;
    @include global-padd;
    background-color: $green;

    color: white;
    display: flex;
    align-items: center;

    >*{
        flex: 1;
        display: flex;
    }
    >:nth-child(2){
        justify-content: center;
    }
    >:last-child{
        justify-content: flex-end;
    
    }
}


</style>