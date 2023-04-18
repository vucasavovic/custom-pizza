<template>
     <button class="text-button">
        <span v-if="props.icon"><img :src="`/public/images/icons/${props.icon}.svg`" alt=""></span>
        <p>{{ props.text }}</p> 
     </button>
</template>

<script setup>
 const props = defineProps({ 
    text:String,
    icon:String
})
</script>

<style lang="scss" scoped>
.text-button{
    height: fit-content;
    display: flex;
    align-items: center; 
    gap: 0.25rem;
    line-height: 0.84;
    font-weight: inherit; 
  
    font-weight: 500;
    padding: 0.2rem;
}
</style>