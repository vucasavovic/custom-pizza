import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
 
export const useWarningStore = defineStore('warning', () => {
  

    const currentTheme = ref('success')
    const currentMessage = ref('');
    const active = ref(false);
    


    const display = function(message,theme,duration){
        currentTheme.value = theme;
        currentMessage.value = message;
        active.value = true;

        setTimeout(()=>{
            active.value = false
        },duration * 1000)
    }
   
  
  return {currentTheme,currentMessage,active,display }
})
