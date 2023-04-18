<template>
    <button :class="['radio-button',{active:props.active}]">
        <img v-if="props.icon" :src="`/public/images/icons/${props.icon}.svg`" :alt="props.text">
        <span v-else>{{ props.text }}</span>
    </button>
</template>

<script setup>
    const props = defineProps({ 
        text:String,
        icon:String,
        active:Boolean
    })
</script>

<style lang="scss" scoped>
.radio-button{
 position: relative;
 width: 74px;
 height: 74px;
 text-align: center;
 background-color: $black-4pct;

 border-radius: 100px;
 transition: all .12s ease-in-out;
    &.active{
        background-color: $green;
        color: white;
    }

    >img{
        margin: 0 auto;
    }
}
</style>