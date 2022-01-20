import { createContext, useContext, useState } from "react"

const calculatorDefaults = {
  maxNumber: 100000000,
  useWorkers: false,
  setMaxNumber: (value: number) => {},
  setUseWorkers: (value: boolean) => {},
}

const CalculatorContext = createContext(calculatorDefaults)

const CalculatorContextProvider: React.FC = ({ children }) => {
  const [maxNumber, setMaxNumber] = useState(calculatorDefaults.maxNumber)
  const [useWorkers, setUseWorkers] = useState(calculatorDefaults.useWorkers)

  const value = {
    maxNumber,
    useWorkers,
    setMaxNumber,
    setUseWorkers,
  }

  return <CalculatorContext.Provider value={value}>{children}</CalculatorContext.Provider>
}

const useCalculatorContext = () => useContext(CalculatorContext)

export { CalculatorContextProvider, useCalculatorContext }
