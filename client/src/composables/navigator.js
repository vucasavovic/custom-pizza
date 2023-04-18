import { computed, ref } from 'vue';
import { useRouter } from 'vue-router';
import { useMasterStore } from '../stores/master';
 
export function useNavigator() {
    const masterStore = useMasterStore();
    const router = useRouter();
    
    const navigate =  function(to){
        if(masterStore.mobileMenuVisible){
          masterStore.hideMobileMenu();
        }
        router.push(to)
    }

  return {
    navigate
  };
}