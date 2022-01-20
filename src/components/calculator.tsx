import { Button } from "@geist-ui/core"
import { useWorker } from "@koale/useworker"
import { useEffect, useRef, useState } from "react"

import "./calculator.css"
import { events } from "../data/events"
import { useCalculatorContext } from "../data/calculator-context"

interface CalculatorProps {
  action: (maxNumber: number) => void
}

const Calculator: React.FC<CalculatorProps> = ({ children, action }) => {
  const { maxNumber, useWorkers } = useCalculatorContext()

  const [worker, { kill }] = useWorker(action)
  const [isRunning, setIsRunning] = useState(false)
  const [resultStatus, setResultStatus] = useState<string | null>(null)

  const resultTimeoutHandle = useRef<any>(null)

  useEffect(() => {
    const unlisten = events.on("calculateAll", runAction)
    return unlisten
  }, [useWorkers])

  const runAction = async () => {
    resultTimeoutHandle.current && clearTimeout(resultTimeoutHandle.current)
    kill()
    setResultStatus(null)
    const start = new Date()
    setIsRunning(true)
    if (useWorkers) {
      await worker(maxNumber)
    } else {
      action(maxNumber)
    }
    setIsRunning(false)
    const end = new Date()
    const time = Math.abs(end.getTime() - start.getTime())
    setResultStatus(`Finished in ${time}ms`)
    resultTimeoutHandle.current = setTimeout(() => {
      setResultStatus(null)
    }, 3000)
  }

  return (
    <div className="calculator">
      <Button loading={isRunning} type={resultStatus ? "success" : "default"} onClick={runAction}>
        {resultStatus ?? children}
      </Button>
    </div>
  )
}

export { Calculator }
