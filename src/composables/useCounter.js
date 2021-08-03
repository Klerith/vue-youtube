import { ref } from 'vue'


const useCounter = ( initValue = 10 ) => {

    const counter = ref( initValue )

    return {
      counter,

      decrement: () => counter.value--,
      increment: () => counter.value++,
      incrementBy: ( value ) => counter.value += value,
    }

}


export default useCounter

