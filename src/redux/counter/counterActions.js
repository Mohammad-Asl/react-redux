import { INCREMENT } from './counterTypes'
import { DECREMENT } from './counterTypes'
import { RESET } from './counterTypes'

export const increment = () => {
    return {
      type: INCREMENT,
    };
  };
  
  export const decrement = () => {
    return {
      type: DECREMENT,
    };
  };
  
  export const reset = () => {
    return {
      type: RESET,
    };
  };