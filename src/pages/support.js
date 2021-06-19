import Head from "next/head"
import React from "react"
import Button from "../components/Button"
import Header from "../components/Header"

const Li = ({ children }) => (
  <li className="mt-2 text-xl font-medium">{children}</li>
)
const P = ({ children }) => <p className="ml-5 text-gray-700">{children}</p>

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
          <h1 className="text-3xl py-2 font-semibold">About Us</h1>
          <h3>
            We are a group of freelance developers creating useful tools and
            utilities.
          </h3>
          <h1 className="text-3xl py-2 font-semibold mt-8 mb-2">
            How to support our work?
          </h1>
          <ol className="list-inside list-decimal">
            <Li>Hire us</Li>
            <P>
              Email me at{" "}
              <a
                className="hover:text-primary text-primary-dark underline"
                href="mailto:atul7555@gmail.com"
              >
                atul7555@gmail.com
              </a>{" "}
              to hire any of us at 10-20$/hr as a full stack developer.
            </P>
            <Li>Contribute code</Li>
            <P>
              This website is opensource and we would love to see your
              contributions.
            </P>
            <Li>Donate us money</Li>
            <P>
              If you feel generous enough to donate money, it'll be very helpful
              for us to continue our projects. Donate at my{" "}
              <a
                className="hover:text-primary text-primary-dark underline"
                href="https://www.paypal.com/paypalme/avikki"
              >
                Paypal
              </a>
            </P>
          </ol>
        </div>
        <div className="flex-1 hidden md:flex">
          <img src="/undraw_pie_chart_6efe.svg" />
        </div>
      </main>
    </div>
  )
}
