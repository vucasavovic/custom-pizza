<template>
    <button :class="['button',props.theme,{active:props.active}]">{{ props.text }}</button>
</template>

<script setup>
import { computed } from '@vue/reactivity';

const props = defineProps({ 
    text:String,
    theme:{type:String,default:'lightgrey'},
    active:Boolean,
})
 
</script>

<style lang="scss">
.button{
    padding: 0.625rem 2rem;
    background-color: $yellow;
    color: black;
    text-align: center;
 
    font-weight: 700;
    font-size: 18px;
    opacity: .4;
    pointer-events: none;

    &.active{
        opacity: 1;
        pointer-events: all;
    }
}
</style>