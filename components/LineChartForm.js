import { useState } from "react"

import { H2 } from "./PlotForm"
import Button from "./Button"

const groupByFiels = ["select", "text"]

function useInputState(initialState) {
  const [state, setState] = useState(initialState)
  const handleChange = (e) => setState(e.target.value)
  return [state, handleChange]
}

const LineChartForm = ({ meta, tableId }) => {
  const [groupBy, setGroupBy] = useInputState()
  const [valueField, setValueField] = useInputState()
  const [iframeUrl, setIframeUrl] = useState("")
  const handleChartGenerate = () => {
    if (!groupBy || !valueField) return
    setIframeUrl(
      `https://unnplot.vercel.app/plot/line/9fbddb475fb449c7af754f059c4ca6e3?labelField=${groupBy}&valueFields=${valueField}`
    )
  }
  if (!meta || !tableId) return <></>
  return (
    <>
      <H2>Customize your Line Chart</H2>
      <p className="text-lg">Groupby</p>
      <p className="text-gray-600">
        All rows with same value in this column will be added together; only
        'Select' and 'Text' are supported right now.
      </p>
      <select
        value={groupBy}
        onChange={setGroupBy}
        className="border-2 rounded border-solid border-gray-300 px-6 py-3"
      >
        <option disabled selected value>
          -- select an option --
        </option>
        {meta
          .filter((m) => groupByFiels.indexOf(m.type) != -1)
          .map((m, i) => (
            <option key={`${m.name}:${i}`} value={m.name}>
              {m.name}
            </option>
          ))}
      </select>
      <p className="text-lg mt-3">Value Column</p>
      <p className="text-gray-600">Column with the numerical value</p>
      <select
        value={valueField}
        onChange={setValueField}
        className="border-2 rounded border-solid border-gray-300 px-6 py-3"
      >
        <option disabled selected value>
          -- select an option --
        </option>
        {meta
          .filter((m) => m.type == "number")
          .map((m, i) => (
            <option key={`${m.name}:${i}`} value={m.name}>
              {m.name}
            </option>
          ))}
      </select>
      <div className="mt-3">
        <Button onClick={handleChartGenerate}>Generate Line Chart</Button>
      </div>
      {iframeUrl && (
        <>
          <p className="text-gray-600 mt-3">
            Use this url to embed a plot in your notion docs <br />
          </p>
          <span className="cursor-pointer bg-blue-100 p-2 rounded my-2">
            {iframeUrl}
          </span>
        </>
      )}
      <div className="flex w-full mt-10 justify-center">
        <iframe width="400px" height="400px" src={iframeUrl}></iframe>
      </div>
    </>
  )
}

export default LineChartForm
