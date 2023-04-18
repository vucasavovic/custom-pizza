<template>
    <main class="view">
        <div class="disclaimer">
            <article>
                <h1 class="title">Attention</h1>
                <p class="body-copy">This is not a real production app. You can not order any product, nor be chargerd, and we will not  use any of your data in any way. This is a mockup app, for the pusrpose of promoting web development skills.</p>
                <Button @click="navigate('/pizza_customizer')" :active="true" theme="yellow" text="Continue"/>
            </article>
        </div>
    </main>
</template>

<script setup>
import Button from '../components/Button.vue';
import { useNavigator } from '@/composables/navigator';
 
 
const {navigate} = useNavigator();
 
 
</script>

<style lang="scss" scoped>
.disclaimer{
    background-color: rgba($color: black, $alpha: .90);
    position: absolute;
    z-index: 85;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;

    padding: 2.4rem;

    display: flex;
    justify-content: center;
    align-items: center;

    
    color: white;
    text-transform: uppercase;

    & article{
        max-width: 600px;
       
    }

    & .title{
        text-align: center;
        margin-bottom: 1rem;
    }

    & .body-copy{
        font-size: 14px;
    }

    & button{
        margin: 0 auto;
        margin-top: 2rem;
    }
}
</style>