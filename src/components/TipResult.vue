<template>
  <div class="calc-result">    
    <div class="calc-result__content">
      <div class="calc-result__tip-ammount-info">
        <p class="calc-result__tip-ammount-title">Tip Ammount</p>
        <span class="calc-result__tip-ammount-span">/ person</span>
      </div>
      <h2 type="number" class="calc-result__result">
        ${{ valuePrinted }}
      </h2>
    </div>
    <div class="calc-result__content">
      <div class="calc-result__tip-ammount-info">
        <p class="calc-result__tip-ammount-title">Total person</p>
        <span class="calc-result__tip-ammount-span">/ person</span>
      </div>
      <h2 type="number" class="calc-result__result">
        ${{ tipPerPerson }}
      </h2>
    </div>
    <button class="calc-result__reset-btn" @click="reset">Reset</button>
  </div>
</template>
<script setup lang="ts">
  import { watchEffect } from 'vue';
  import { ref } from 'vue';
  import { useStore } from 'vuex'

  const valuePrinted = ref<number>(0)
  const tipPerPerson = ref<number>(0)

  const store = useStore() 

  watchEffect(async () => { 
    const totalValue = await store.state.tipInfo
    valuePrinted.value = totalValue
  })

  watchEffect(async () => { 
    const totalTipPerPerson: number = await store.state.totalPerPerson
    tipPerPerson.value = totalTipPerPerson
  })

  const reset = () => {
    valuePrinted.value = 0
    tipPerPerson.value = 0 
  }
</script>