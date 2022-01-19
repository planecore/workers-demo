import "./calculator.css"
import { Button } from "@geist-ui/core"
import { useWorker } from "@koale/useworker"
import React, { useEffect, useRef, useState } from "react"
import { events } from "../data/events"

interface CalculatorProps {
  maxNumber: number
  action: (maxNumber: number) => number | number[]
}

const Calculator: React.FC<CalculatorProps> = ({ children, maxNumber, action }) => {
  const [worker, { status, kill }] = useWorker(action)
  const [resultStatus, setResultStatus] = useState<string | null>(null)
  const handle = useRef<any>(null)

  useEffect(() => {
    const unlisten = events.on("calculateAll", runWorker)
    return unlisten
  }, [])

  const runWorker = async () => {
    handle.current && clearTimeout(handle.current)
    kill()
    setResultStatus(null)
    const start = new Date()
    await worker(maxNumber)
    const end = new Date()
    const time = Math.abs(end.getTime() - start.getTime())
    setResultStatus(`Finished in ${time}ms`)
    handle.current = setTimeout(() => {
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
