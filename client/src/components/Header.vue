<template>
    <header class="header">
        <div @click="navigate('/')" class="brand"><img src="/images/logo.svg" alt=""></div>
        <button @click="masterStore.displayMobileMenu" type="button" class="burger">
            <span></span>
            <span></span>
            <span></span>
        </button>
    </header>
</template>

<script setup>
import {useNavigator} from '@/composables/navigator'
import { useMasterStore } from '@/stores/master.js'
const masterStore = useMasterStore();
 
 const {navigate} = useNavigator();

</script>

<style lang="scss" scoped>
.header{
   position: fixed;
   z-index: 90;
   top: 0;
   padding: 0 $page-padding;
   height: $header-height;
   width: 100%;
   max-width: $app-max-width;
   margin: 0 auto;
  
   

   display: flex;
   justify-content: space-between;
   align-items: center;

   background-color: white;
 
}

.brand{
    width: 120px;
    >img{
        width: 100%;
    }
}

.burger{
    position: relative;
    width: 20px;
    height: 14px;
    >*{
        position: absolute;
        left: 0;
        height: 2px;
        background-color: black;
        width: 100%;
    }

    >:nth-child(1){
        top: 0;
    }

    >:nth-child(2){
        top: 50%;
        transform: translateY(-50%);
    }

    >:nth-child(3){
        top: 100%;
        transform: translateY(-100%);
    }
}
</style>