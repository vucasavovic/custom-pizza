<template>
    <div :class="['mobile-menu',{display:mobileMenuVisible}]">
        <header>
            <TextButton  @click="masterStore.hideMobileMenu" icon="arrow" text="Back" />
            <RouterLink to="">Login</RouterLink>
        </header>
            <section class="body">
                <nav class="nav">
                    <RouterLink to=""  @click="navigate('/')">Home</RouterLink>
                    <RouterLink to=""  @click="navigate('/cart')">Cart</RouterLink>
                    <RouterLink to=""  @click="navigate('/pizza_customizer')">Customizer</RouterLink>
                    <RouterLink to="">FAQ</RouterLink>
                </nav>
            </section>
        <footer>
            <RouterLink to="">Disclaimer</RouterLink>
        </footer>
    </div>
</template>

<script setup>
import { useNavigator } from '@/composables/navigator';

import TextButton from './TextButton.vue';

import { storeToRefs } from 'pinia';
import { useMasterStore } from '@/stores/master.js'

const {navigate} = useNavigator();
const masterStore = useMasterStore();
const {mobileMenuVisible} = storeToRefs(masterStore);
 
</script>
 
<style lang="scss" scoped>
.mobile-menu{
    position: fixed;
    z-index: 95;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    color: white;
    transform: translateX(100%);
 
    background-color: $green;

    display: flex;
    flex-direction: column;

    transition: all .3s ease-in-out;
    &.display{
        transform: translateX(0);
    }

    >header{
        padding: 1rem $page-padding;
        height: 60px;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    >.body{
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0 $page-padding;
    }

    >footer{
        text-align: center;
        padding: 1.5rem $page-padding;
    }
}

.nav{
    display: flex;
    flex-direction: column;
    gap: 1rem;
    text-align: center;
    font-size: 2rem;
    font-weight: 600;
}
</style>