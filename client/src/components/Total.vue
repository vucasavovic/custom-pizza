<template>
    <div class="total">
        <div>
            <p class="label">Pretax</p>
            <p>{{props.netAmount + props.currency}}</p>
        </div>
        <div>
            <p class="label">Tax</p>
            <p>{{tax + props.currency}}</p>
        </div>
        <div class="final">
            <p class="label">Total</p>
            <p>{{ roundFl(props.netAmount + tax,2) + props.currency}}</p>
        </div>
    </div>
</template>

<script setup>
import { useMath } from '@/composables/math'
import { computed } from '@vue/reactivity';
 
 const props = defineProps({ 
    currency:String,
    netAmount:Number,
    taxRate:{default:0.2,type:Number}
})

const {roundFl} = useMath();
const tax = computed(()=>{
    return roundFl(props.netAmount * props.taxRate,2);
})
</script>

<style lang="scss" scoped>
.total{
    padding: 1rem;
    display: flex;
    flex-direction: column;
    
    background-color: $black-4pct;
    border-radius: $main-radius;

    >*{
        display: flex;
        justify-content: space-between;
        width: 100%;
        padding: 0.5rem 0;
    }

    >.final{
        margin-top: 0.2rem;
        font-weight: 700;
        font-size: 1.2rem;
        border-top: $border;
    }
}
</style>