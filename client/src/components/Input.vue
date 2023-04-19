<template>
    <div class="input">
        <label>{{ props.label}}</label>
        
        <div class="input-container">
            <img :class="{active:!valid}" src="/images/icons/attention.svg" alt="User attention icon">
            <input v-if="props.type==='text'" type="text" :placeholder="props.placeholder" :value="props.modelValue" @input="updateModel($event)">
            <textarea  v-else  :value="props.modelValue" @input="updateModel($event)"></textarea>
        </div>
        

    </div>
</template>

<script setup>
import {useValidator} from '@/composables/validator'
import { ref } from 'vue';

const emit = defineEmits(['update:modelValue'])
const {validate} = useValidator();
const valid = ref(true);
 
const props = defineProps({ 
    name:String,
    validate:{type:Object,required:true},
    type:{type:String,default:'text'},
    label:String,
    placeholder:String,
    modelValue:String,Number
})
 
const updateModel = function(event){
    if(event.target.value!=''){
        valid.value = validate(event.target.value,props.validate.type);
    }else{
        valid.value = true;
    }
    
    emit('update:modelValue',event.target.value)
}
 
</script>

<style lang="scss" scoped>
.input{
    display: flex;
    flex-direction: column;
 
    >label{
        font-weight: 600;
        font-size: 0.875rem;
        margin-bottom: 0.3rem;
        margin-left: 0.3rem;
        display: flex;
        justify-content: space-between;
    }
    & input,textarea{
        width: 100%;
        padding:10px 1rem;
        border: 1px solid grey;
        color: grey;
        &:focus{
            outline: none;
        }
    }

    >.input-container{
        position: relative;
        >img{
            display: none;
            position: absolute;
            width: 16px;
            height: 16px;
            right: 0.4rem;
            top: 0.4rem;

            &.active{
                display: block;
            }
            
        }
    }
}
 
textarea{
    resize: vertical;
    min-height: 200px;
    max-height: 300px;
}

</style>