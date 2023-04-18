<template>
    <div :class="['warning-modal',currentTheme,{active:active}]">
        {{ currentMessage }}
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { useWarningStore } from '../stores/warning';
import { storeToRefs } from 'pinia';
 


const warningStore= useWarningStore();
const {currentMessage,currentTheme,active} = storeToRefs(warningStore)
 
</script>

<style lang="scss" scoped>
.warning-modal{
    position: fixed;
    z-index: 100;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    padding:1rem;
    width: 100%;
    max-width: 400px;
    top: $header-height;
    color: black;
    text-align: center;
    opacity: 0;
    pointer-events: none;
    transition: all .2s ease-in-out;
    &.active{
        opacity: 1;
    }
     
    &.warning{
        background-color: $red;
        color: white;
    }
    &.success{
        background-color: $green;
        color: white;
    }
    &.default{
        background-color: $black-4pct;
        color: black;
    }
}
</style>