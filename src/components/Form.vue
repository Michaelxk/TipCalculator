<template>
  <form class="form">
    <label class="form__label" for="form__inputCalc">Bill</label>
    <input class="form__inputCalc" type="number" 
        v-model="amount" placeholder="$" required />
    <label class="form__label" for="selectTip">Select Tip %</label>
    <div class="button-group">
      <button class="button-calc" type="button" v-for="(percent, index) in buttons" 
          :key="index" @click="percentSelected(percent)">
        {{ percent }} %
      </button>
    </div>
    <div class="label-group">
      <label class="form__label" for="peopleNum">Number of People</label>
      <label class="errorMessage form__label" 
         v-if="errorPeopleNum">Can't be 0 </label>
    </div>  
    <input class="form__inputCalc" type="number" 
        v-model="peopleCount" placeholder="$" @change="peopleCountHandler" 
        id="peopleNum" 
        required 
      />
  </form>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import { useStore } from 'vuex'

  const buttons = ref<number[]>([ 5, 10, 15, 25, 40, 50])
  const peopleCount = ref<number>(0)
  const amount = ref<number>(0)
  const errorPeopleNum = ref<boolean>(false)

  const store = useStore()


  const percentSelected = (percent: number) => {
    if(amount.value === 0) {
     alert('Enter an amount')
    } 
    store.commit('PERSENT_SELECTED', {
       amount: amount.value,
       percent,
    })  
  }

  const peopleCountHandler = () => {
    store.commit('PERSENT_PER_PERSON', peopleCount.value )
  }

</script>