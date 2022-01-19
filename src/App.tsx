import "./App.css"
import { useState } from "react"
import { events } from "./data/events"
import { Button, Input, Text } from "@geist-ui/core"
import { Calculator } from "./components/calculator"
import { squareRoot, squared, multiply, randomizeAndSort } from "./data/calculations"

function App() {
  const [maxNumber, setMaxNumber] = useState(10000000)

  return (
    <div className="app">
      <Text h1>Welcome to my amazing demo!</Text>
      <>
        <Input
          label="Max Number"
          placeholder="Enter Max Number"
          htmlType="number"
          value={`${maxNumber}`}
          onChange={(e) => setMaxNumber(Number(e.target.value))}
        />
      </>
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
        <Button type="warning" onClick={() => events.emit("calculateAll")}>
          Calculate All
        </Button>
      </div>
    </div>
  )
}

export default App
