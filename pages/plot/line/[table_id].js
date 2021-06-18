import React from "react"
import { useRouter } from "next/router"
import { Line } from "react-chartjs-2"
import { getStaticProps, getStaticPaths } from "../../../utils"

const options = {
  scales: {
    yAxes: [],
  },
}

function buildLineData(data, labelField, valueFields) {
  console.log(labelField, valueFields)
  if (!data || !labelField || !valueFields) return
  const labels = data.map((d) => d.fields[labelField])
  const values = []
  for (const valueField of valueFields.split(",")) {
    values.push(data.map((d) => d.fields[valueField]))
  }

  return {
    labels,
    data: values,
  }
}

const Chart = ({ tableData }) => {
  const router = useRouter()
  console.log(router)
  const pieData = buildLineData(
    tableData,
    router?.query?.labelField,
    router?.query?.valueFields
  )
  const dataset = pieData?.data.map((d) => ({
    label: "Expenses",
    backgroundColor: [
      "rgba(255, 99, 132, 0.6)",
      "rgba(54, 162, 235, 0.6)",
      "rgba(255, 206, 86, 0.6)",
      "rgba(75, 192, 192, 0.6)",
      "rgba(153, 102, 255, 0.6)",
      "rgba(255, 159, 64, 0.6)",
    ],
    data: d,
  }))
  const data = {
    labels: pieData?.labels,
    datasets: dataset,
  }
  return (
    <div className="relative w-96 h-full">
      <a
        href="/"
        className="absolute right-0 -bottom-7 shadow-md rounded-sm px-3 py-1 hover:shadow-xl hover:scale-125 duration-300 bg-white"
      >
        {" "}
        powered by UnnPlot
      </a>
      <div className="">{tableData && <Line data={data} />}</div>
    </div>
  )
}

export { getStaticProps, getStaticPaths }

export default Chart
