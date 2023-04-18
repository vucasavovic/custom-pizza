 <template>

  <BasicLayout>
    <template v-slot:header>

    </template>
    <template v-slot:body>
      <section class="banner">
        <span>
          <article>
            <img class="title z2" src="/images/custom_pizza.svg" alt="">
            <p class="body-copy z2">Make a creative pizza with your favourite ingredients!</p>
            <Button  @click="navigate('/disclaimer')" :active="true" theme="yellow" text="Order now"/>
          </article>
        </span>
        <span>
          <img src="/images/banners/pizza_1.png" alt="Pizza">
        </span>
      </section>
    </template>
    <template v-slot:footer>
      
    </template>
  </BasicLayout>
 
</template>

<script setup>
import BasicLayout from '../components/BasicLayout.vue';
import {useNavigator} from '@/composables/navigator'
import Button from '../components/Button.vue';
 
const {navigate} = useNavigator();
 
</script>
 
<style lang="scss" scoped>
.banner{
  background-color: $green;
  border-radius: 6px;
   
  display: flex;
  overflow: hidden;
  color: white;
  gap: 1rem;

  >:nth-child(1){
    padding:2rem;
    flex: 0.6;

  }

  >:nth-child(2){
    position: relative;
    flex: 0.4;
       
    >img{
      position: absolute;
      left:100%;
      top: 50%;
      transform: translate(-48%,-50%);
      height: 100%;
      max-height: 300px;
    }
  }
 
  & article{
    display: flex;
    flex-direction: column;
    gap: 1rem;

    & .title{
      position: relative;
      width:min-content;
      max-height: 160px;
      height: 100%;
    }

    >.body-copy{
      position: relative;
      max-width: 500px;
    }
 
    >.button,button{
      margin-top: 1rem;
    }
  }
  
}
.z2{
  z-index: 2;
}
</style>