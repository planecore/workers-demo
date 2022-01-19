import React from "react"
import ReactDOM from "react-dom"
import { CssBaseline, GeistProvider } from "@geist-ui/core"

import "./index.css"
import App from "./App"

ReactDOM.render(
  <React.StrictMode>
    <GeistProvider>
      <CssBaseline />
      <App />
    </GeistProvider>
  </React.StrictMode>,
  document.getElementById("root")
)
