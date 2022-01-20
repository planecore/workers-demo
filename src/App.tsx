import { Button, Input, Loading, Text, Toggle } from "@geist-ui/core"

import "./App.css"
import { events } from "./data/events"
import { Calculator } from "./components/calculator"
import { useCalculatorContext } from "./data/calculator-context"
import { squareRoot, squared, multiply } from "./data/calculations"

const App = () => {
  const { maxNumber, setMaxNumber, useWorkers, setUseWorkers } = useCalculatorContext()

  return (
    <div className="app">
      <Text h1>Welcome to my amazing demo!</Text>
      <Input
        label="Max Number"
        placeholder="Enter Max Number"
        htmlType="number"
        value={`${maxNumber}`}
        onChange={(e) => setMaxNumber(Number(e.target.value))}
      />
      <div className="calculators">
        <Calculator action={squareRoot}>
          Square root of all numbers until {Number(maxNumber).toLocaleString()}
        </Calculator>
        <Calculator action={squared}>
          Square of all numbers until {Number(maxNumber).toLocaleString()}
        </Calculator>
        <Calculator action={multiply}>
          Multiply of all numbers until {Number(maxNumber).toLocaleString()}
        </Calculator>
        <Button type="warning" onClick={() => events.emit("calculateAll")}>
          Calculate All
        </Button>
      </div>
      <div className="use-workers-toggle">
        <Toggle checked={useWorkers} onChange={(e) => setUseWorkers(e.target.checked)} />
        <label>Use Workers</label>
      </div>
    </div>
  )
}

export { App }
