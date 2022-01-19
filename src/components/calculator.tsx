import "./calculator.css"
import { Button } from "@geist-ui/core"
import { useWorker } from "@koale/useworker"
import React, { useState } from "react"

interface CalculatorProps {
  maxNumber: number
  action: (maxNumber: number) => number | number[]
}

const Calculator: React.FC<CalculatorProps> = ({ children, maxNumber, action }) => {
  const [worker, { status }] = useWorker(action)
  const [resultStatus, setResultStatus] = useState<string | null>(null)

  const runWorker = async () => {
    setResultStatus(null)
    const start = new Date()
    await worker(maxNumber)
    const end = new Date()
    const time = Math.abs(end.getTime() - start.getTime())
    setResultStatus(`Finished in ${time}ms`)
    setTimeout(() => {
      setResultStatus(null)
    }, 3000)
  }

  return (
    <div className="calculator">
      <Button
        loading={status === "RUNNING"}
        type={resultStatus ? "success" : "default"}
        onClick={runWorker}
      >
        {resultStatus ?? children}
      </Button>
    </div>
  )
}

export { Calculator }
