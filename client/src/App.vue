 <template>

  <Warning/> 

  <div :class="['transition',{active:masterStore.transitionVisible}]">
    <img src="/images/pizza_loader.gif" alt="Brand logo">
  </div>
  <Header/>
  <MobileMenu/>
  <RouterView />
  <Footer/>
 
</template>

<script setup>
import { useMasterStore } from '@/stores/master.js'
import { RouterLink, useRoute } from 'vue-router'
import Header from './components/Header.vue';
 
import Footer from './components/Footer.vue';
import MobileMenu from './components/Menu.vue';
import Warning from './components/Warning.vue';
 
const route = useRoute();

 

const masterStore = useMasterStore();
 

</script>

<style lang="scss" scoped>
 .transition{
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: white;
  pointer-events: none;
  opacity: 0;
  transition: all .3s ease-in-out;

  display: flex;
  justify-content: center;
  align-items: center;
  &.active{
    pointer-events: all;
    opacity: 1;
  }

  >img{
    height: 60px;
  }
 }
</style>
