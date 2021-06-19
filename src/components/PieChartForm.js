import { useState } from "react"

import { H2 } from "./PlotForm"
import Button from "./Button"
import UrlDisplay from "./UrlDisplay"
const groupByFiels = ["select", "text"]

function useInputState (initialState) {
  const [state, setState] = useState(initialState)
  const handleChange = e => setState(e.target.value)
  return [state, handleChange]
}

const PieChartForm = ({ meta, tableId }) => {
  const [groupBy, setGroupBy] = useInputState()
  const [valueField, setValueField] = useInputState()
  const [iframeUrl, setIframeUrl] = useState("")
  const handleChartGenerate = () => {
    if (!groupBy || !valueField) return
    setIframeUrl(
      `https://unnplot.vercel.app/plot/pie/9fbddb475fb449c7af754f059c4ca6e3?groupBy=${groupBy}&valueField=${valueField}`
    )
  }
  if (!meta || !tableId) return <></>
  return (
    <>
      <H2>Customize your Pie Chart</H2>
      <p className='text-lg'>Groupby</p>
      <p className='text-gray-600'>
        All rows with same value in this column will be added together; only
        'Select' and 'Text' are supported right now.
      </p>
      <select
        value={groupBy}
        onChange={setGroupBy}
        className='border-2 rounded border-solid border-gray-300 px-6 py-3'
      >
        <option disabled selected value>
          -- select an option --
        </option>
        {meta
          .filter(m => groupByFiels.indexOf(m.type) != -1)
          .map((m, i) => (
            <option key={`${m.name}:${i}`} value={m.name}>
              {m.name}
            </option>
          ))}
      </select>
      <p className='text-lg mt-3'>Value Column</p>
      <p className='text-gray-600'>Column with the numerical value</p>
      <select
        value={valueField}
        onChange={setValueField}
        className='border-2 rounded border-solid border-gray-300 px-6 py-3'
      >
        <option disabled selected value>
          -- select an option --
        </option>
        {meta
          .filter(m => m.type == "number")
          .map((m, i) => (
            <option key={`${m.name}:${i}`} value={m.name}>
              {m.name}
            </option>
          ))}
      </select>
      <div className='mt-3'>
        <Button onClick={handleChartGenerate}>Generate Pie Chart</Button>
      </div>
      {iframeUrl && <UrlDisplay url={iframeUrl} />}
      <div className='flex w-full mt-10 justify-center'>
        <iframe width='400px' height='400px' src={iframeUrl}></iframe>
      </div>
    </>
  )
}

export default PieChartForm
