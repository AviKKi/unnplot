import React from "react"
import { useRouter } from "next/router"
import { Pie, Bar } from "react-chartjs-2"
import { getStaticProps, getStaticPaths } from "../../../utils"

const options = {
  scales: {
    yAxes: [],
  },
}

function buildPieData(data, groupBy, valueField) {
  console.log(groupBy, valueField)
  if (!data) return
  const labels = []
  const values = {}
  for (const row of data) {
    console.log(values)
    if (labels.indexOf(row.fields[groupBy]) == -1) {
      labels.push(row.fields[groupBy])
      values[row.fields[groupBy]] = 0
    }
    const value = parseFloat(row.fields[valueField])
    if (value) values[row.fields[groupBy]] += value
  }
  return {
    labels,
    data: labels.map((l) => values[l]),
  }
}

const Chart = ({ tableData }) => {
  const router = useRouter()
  console.log(router)
  const pieData = buildPieData(
    tableData,
    router?.query?.groupBy,
    router?.query?.valueField
  )
  const data = {
    labels: pieData?.labels,
    datasets: [
      {
        label: "Expenses",
        data: pieData?.data,
        backgroundColor: [
          "rgba(255, 99, 132, 0.6)",
          "rgba(54, 162, 235, 0.6)",
          "rgba(255, 206, 86, 0.6)",
          "rgba(75, 192, 192, 0.6)",
          "rgba(153, 102, 255, 0.6)",
          "rgba(255, 159, 64, 0.6)",
        ],
      },
    ],
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
      <div className="">{tableData && <Bar data={data} />}</div>
    </div>
  )
}

export { getStaticProps, getStaticPaths }

export default Chart
