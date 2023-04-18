<template>
    <main class="view-template">
        <section v-if="headerHasChildren" ref="header" class="header">
            <slot name="header"></slot>
        </section>
        <section class="body">
            <slot name="body"></slot>
        </section>
        <section class="footer">
            <slot name="footer"></slot>
        </section>
    </main>
</template>

<script   setup>
import { computed } from '@vue/reactivity';
import { ref } from 'vue';
 
const header = ref(null);

const headerHasChildren = computed(()=>{
   return  header.value?.children.length > 0 ? true : false;
})

 
</script>

<style lang="scss" scoped>
.view-template{
    padding: 0 $page-padding;
    padding-top:calc($header-height + 4vh);
   display: flex;
   flex-direction: column;
   min-height: 100vh;
}

.header{
    padding: 2rem 0; 
}

.footer{
    padding : 3rem  0;
    display: flex;
    flex-direction: column;
    gap:1rem;
    margin-top: auto;
     
}
</style>