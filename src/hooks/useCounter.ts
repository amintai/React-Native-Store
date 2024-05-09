import { useState } from "react";

const useCounter = () => {

  type CounterProps = {
    count: number,
    isAlertVisible: boolean
  };

  const [{ count, isAlertVisible }, setState] = useState<CounterProps>({
    count: 0,
    isAlertVisible: false
  });

  const handleOnClick = (type: String): void => {
    switch (type) {
      case 'plus':
        setState((state) => ({
          ...state,
          count: count + 1
        }));
        break;
      case 'minus':
        if (count === 0) {
          setState((state) => ({
            ...state,
            isAlertVisible: true
          }));
        } else {
          setState((state) => ({
            ...state,
            count: count - 1
          }));
        }
        break;
    };
  };

  const handleDismissDialog = () => {
    setState((state) => ({
      ...state,
      isAlertVisible: false
    }));
  }
  return [{ count, isAlertVisible }, { handleOnClick, handleDismissDialog }] as const
}

export default useCounter;