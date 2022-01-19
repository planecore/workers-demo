import "./App.css"
import { useState } from "react"
import { Text } from "@geist-ui/core"
import { Calculator } from "./components/calculator"
import { squareRoot, squared, multiply, randomizeAndSort } from "./data/calculations"

function App() {
  const [maxNumber, setMaxNumber] = useState(20000000)

  return (
    <div className="app">
      <Text h1>Welcome to my amazing demo!</Text>
      <div>
        <Calculator maxNumber={maxNumber} action={squareRoot}>
          Square root of all numbers until {maxNumber}
        </Calculator>
        <Calculator maxNumber={maxNumber} action={squared}>
          Square of all numbers until {maxNumber}
        </Calculator>
        <Calculator maxNumber={maxNumber} action={multiply}>
          Multiply of all numbers until {maxNumber}
        </Calculator>
        <Calculator maxNumber={maxNumber / 100} action={randomizeAndSort}>
          Randomize and sort all numbers until {maxNumber / 20}
        </Calculator>
      </div>
    </div>
  )
}

export default App
