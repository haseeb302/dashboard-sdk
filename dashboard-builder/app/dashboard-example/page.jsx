import { example } from "@/utils/codes";
import { Dashboard, Row, Cell, BarChart, PieChart } from "hsb-dashboard-sdk";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDarkReasonable } from "react-syntax-highlighter/dist/esm/styles/hljs";

export default function Page() {
  const barChart = new BarChart(
    "1",
    "Barchart Title",
    ["field1", "field2"],
    ["groupBy1", "groupBy2"]
  );

  const pieChart = new PieChart("1", "Pie Chart Title", "field2", "groupBy1");

  const firstCell = new Cell(barChart, 6);
  const secondCell = new Cell(pieChart, 8);
  const emptyCell = new Cell(undefined);

  const firstRow = new Row("Heading 1", [firstCell, emptyCell]);
  const secondRow = new Row("Heading 2", [secondCell, emptyCell]);

  const dashboard = new Dashboard([firstRow, secondRow]);
  console.log(dashboard);

  const addedRow = new Row("Heading 3", [emptyCell]);
  dashboard.addRow(addedRow);

  console.log(dashboard);

  const setColSpan = (col) => {
    switch (col) {
      case 3:
        return "col-span-3";
      case 4:
        return "col-span-4";
      case 6:
        return "col-span-6";
      case 8:
        return "col-span-8";
      case 12:
        return "col-span-12";
      default:
        return "col-span-4";
    }
  };

  return (
    <div className="p-5">
      <header className="bg-blue-400 p-4 rounded-md mb-3">
        <div className="container mx-auto">
          <h1 className="text-white text-3xl font-bold">Example</h1>
        </div>
      </header>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold my-2">Code</h2>
        <p className="mb-2">
          The below code is the full example of how to use this SDK with a React
          component.
        </p>
        <div className="p-2 mb-2">
          {/* <pre> */}
          <SyntaxHighlighter
            className="rounded-lg"
            language="javascript"
            style={atomOneDarkReasonable}
          >
            {example}
          </SyntaxHighlighter>
          {/* </pre> */}
        </div>
      </section>

      <h2 className="text-2xl font-semibold mb-4">Preview</h2>
      <div className="border px-8 rounded-lg mb-5">
        {dashboard.rows.map((row, index) => (
          <div key={index} className="my-5">
            <h1 className="text-3xl font-extrabold">{row.heading}</h1>
            <hr />
            <div className="grid grid-cols-12 gap-3 mt-3">
              {row.cells?.map((cell, index) => (
                <div
                  key={index}
                  className={`${setColSpan(cell.colspan)} border p-5`}
                >
                  <div>
                    {cell.view?.title ? (
                      <h3 className="text-2xl font-semibold">
                        {cell.view?.title}
                      </h3>
                    ) : (
                      <h3 className="text-xl font-semibold">Empty Cell</h3>
                    )}
                  </div>
                  <p className="text-sm">(span = {cell?.colspan})</p>
                  <p>{cell.view?.groupByFields}</p>
                  <p>{cell.view?.metricFields}</p>
                  <p>{cell.view?.groupByFieldId}</p>
                  <p>{cell.view?.metricField}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
