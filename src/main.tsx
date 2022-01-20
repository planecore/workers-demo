import React from "react"
import ReactDOM from "react-dom"
import { CssBaseline, GeistProvider } from "@geist-ui/core"

import "./index.css"
import { App } from "./App"
import { CalculatorContextProvider } from "./data/calculator-context"

ReactDOM.render(
  <React.StrictMode>
    <GeistProvider>
      <CssBaseline />
      <CalculatorContextProvider>
        <App />
      </CalculatorContextProvider>
    </GeistProvider>
  </React.StrictMode>,
  document.getElementById("root")
)
