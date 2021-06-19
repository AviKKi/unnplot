import Head from "next/head"
import React from "react"
import Button from "../components/Button"
import PlotForm from "../components/PlotForm"
import Header from "../components/Header"

export default function Home() {
  return (
    <div className="flex flex-col items-center w-screen text-gray-800">
      <Head>
        <title>UnnPlot - Plot graphs with your notion table</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="min-h-screen px-6 md:px-0 w-screen md:w-2/3 flex items-center">
        <div className="flex flex-col justify-start flex-1">
          <h1 className="text-3xl md:text-6xl py-2 font-semibold">
            Embed graphs in your Notion docs
          </h1>
          <h3>Notion tables to beautiful diagrams.</h3>
          <div className="w-max flex items-end mt-4">
            <a href="#plotFormSection">
              <Button>Create a Chart</Button>
            </a>
          </div>
        </div>
        <div className="flex-1">
          <img src="/undraw_pie_chart_6efe.svg" />
        </div>
      </main>
      <PlotForm />
    </div>
  )
}
