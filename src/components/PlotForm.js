import React, { useState, useEffect } from "react"
import Button from "../components/Button"
import PieChartForm from "./PieChartForm"
import LineChartForm from "./LineChartForm"
import BarChartForm from "./BarChartForm"

const H2 = (props) => {
  const { className, ...rest } = props
  return (
    <h2 className={`text-3xl py-3 font-semibold ${className}`} {...rest}>
      {props.children}
    </h2>
  )
}

export { H2 }

const loadTableMeta = async (tableId) => {
  if (!tableId) throw 0
  const r = await fetch(
    process.env.NODE_ENV === "development"
      ? `http://localhost:3000/api/table-description/${tableId}`
      : `https://unnplot.vercel.app/api/table-description/${tableId}`
  )
  return await r.json()
}

const PlotForm = () => {
  const [tableUrl, setTableUrl] = useState("")
  const [urlColor, setUrlColor] = useState("border-gray-300")
  const [tableId, setTableId] = useState("")
  const [tableMeta, setTableMeta] = useState(null)
  const [plotType, setPlotType] = useState(null)
  const handlePlotTypeChange = (e) => setPlotType(e.target.value)
  useEffect(() => {
    loadTableMeta(tableId).then((meta) => setTableMeta(meta))
  }, [tableId])
  const handleTableUrlChange = (e) => {
    const value = e.target.value
    setTableUrl(value)
    let table_id = value.match(/notion.so\/(\w+)/)
    if (table_id) {
      table_id = table_id[1]
      setUrlColor("border-green-300")
      setTableId(table_id)
    } else {
      setUrlColor("border-red-300")
    }
  }
  return (
    <div
      id="plotFormSection"
      className="flex items-start flex-col min-h-screen"
    >
      <H2>Connect your notion table</H2>
      <ol className="list-decimal list-inside text-gray-600">
        <li>Make your notion table public</li>
        <li>
          Copy and paste notion url below it looks something like
          https://www.notion.so/9fbddb475fb449c7af754f059c4ca6e3
        </li>
      </ol>
      <input
        value={tableUrl}
        onChange={handleTableUrlChange}
        className={`w-full text-center py-3 mt-6 border-2 mt-4 ${urlColor}`}
        placeholder="https://www.notion.so/50c64b8a8b97459cae7e6a6fd04f1269"
      />
      {/* <Button style={{ width: "200px", marginTop: "10px" }}>Load Table</Button> */}
      <H2 className="">Select Plot type</H2>
      <select
        value={plotType}
        onChange={handlePlotTypeChange}
        className="border-2 rounded border-solid border-gray-300 px-6 py-3"
      >
        <option disabled selected value>
          -- select an option --
        </option>
        <option value="pie">Pie Chart</option>
        <option value="line">Line Graph</option>
        <option value="bar">Bar Graph</option>
      </select>

      {plotType === "pie" && (
        <PieChartForm meta={tableMeta} tableId={tableId} />
      )}
      {plotType === "line" && (
        <LineChartForm meta={tableMeta} tableId={tableId} />
      )}
      {plotType === "bar" && (
        <BarChartForm meta={tableMeta} tableId={tableId} />
      )}
    </div>
  )
}

export default PlotForm
