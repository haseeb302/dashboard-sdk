import { barChart, pieChart } from "@/utils/codes";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDarkReasonable } from "react-syntax-highlighter/dist/esm/styles/hljs";

export default function page() {
  return (
    <div className="bg-gray-100 text-gray-800 font-sans leading-normal p-5">
      <header className="bg-blue-400 p-4 rounded-md">
        <div className="container mx-auto">
          <h1 className="text-white text-3xl font-bold">Charts</h1>
        </div>
      </header>

      <div className="container mx-auto mt-8">
        <p className="mb-2">
          Charts are used in cell objects to render the data and visualise it.
          The charts available in this SDK are{" "}
          <span className="bg-gray-800 rounded-md text-gray-300 py-1 px-2 mx-1">
            BarChart
          </span>
          and
          <span className="bg-gray-800 rounded-md text-gray-300 py-1 px-2 mx-1">
            PieChart
          </span>
          . See the explanation below to see how you can create and use them.
        </p>
        <section className="mb-8" id="BarChart">
          <h2 className="text-2xl font-semibold mb-4">Bar Chart</h2>
          <p className="mb-2">Instantiate the Bar Chart object.</p>
          <div className="p-2 mb-4">
            <SyntaxHighlighter
              className="rounded-lg"
              language="javascript"
              style={atomOneDarkReasonable}
            >
              {barChart}
            </SyntaxHighlighter>
          </div>
          <p className="leading-8">
            <span className="bg-gray-800 rounded-md text-gray-300 py-1 px-2 mx-1">
              BarChart
            </span>
            takes a unique ID and a title to show on the chart. This chart also
            takes in further arguements like an array of strings i.e
            metricFieldIDs and groupByFieldIDs.
          </p>
        </section>

        <section className="mb-8" id="PieChart">
          <h2 className="text-2xl font-semibold mb-4">Pie Chart</h2>
          <p className="mb-2">Instantiate the PieChart object.</p>
          <div className="p-2 mb-4">
            <SyntaxHighlighter
              className="rounded-lg"
              language="javascript"
              style={atomOneDarkReasonable}
            >
              {pieChart}
            </SyntaxHighlighter>
          </div>
          <p className="leading-8">
            <span className="bg-gray-800 rounded-md text-gray-300 py-1 px-2 mx-1">
              PieChart
            </span>
            takes a unique ID and a title to show on the chart. This chart also
            takes in further arguements like an array of strings i.e
            metricFieldIDs and groupByFieldIDs.
          </p>
        </section>
      </div>
    </div>
  );
}
