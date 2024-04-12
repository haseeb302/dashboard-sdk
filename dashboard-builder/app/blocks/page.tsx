import { cell, dashboard, instantiate, npm, row } from "@/utils/codes";
import Link from "next/link";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDarkReasonable } from "react-syntax-highlighter/dist/esm/styles/hljs";

export default function page() {
  return (
    <div className="bg-gray-100 text-gray-800 font-sans leading-normal p-5">
      <header className="bg-blue-400 p-4 rounded-md">
        <div className="container mx-auto">
          <h1 className="text-white text-3xl font-bold">Blocks</h1>
        </div>
      </header>

      <div className="container mx-auto mt-8">
        <p className="mb-2">
          These blocks when used together can help build a dashboard UI to
          visualise charts.
        </p>
        <section className="mb-8" id="Dashboard">
          <h2 className="text-2xl font-semibold mb-4">Dashboard</h2>
          <p className="mb-2">Instantiate the Dashboard object.</p>
          <div className="p-2 mb-4">
            <SyntaxHighlighter
              className="rounded-lg"
              language="javascript"
              style={atomOneDarkReasonable}
            >
              {dashboard}
            </SyntaxHighlighter>
          </div>
          <p className="leading-8">
            <span className="bg-gray-800 rounded-md text-gray-300 py-1 px-2 mx-1">
              Dashboard
            </span>
            contains one or multiple rows, to visualise the content we need to
            provide rows to the dashboard object. The dashboard class can take
            row or array of rows as arguement for constructors like{" "}
            <span className="bg-gray-800 rounded-md text-gray-300 py-1 px-2 mx-1">
              new Dashboard([firstRow, secondRow]);{" "}
            </span>{" "}
            or you can add a row by using addRow method in Dashboard class like
            <span className="bg-gray-800 rounded-md text-gray-300 py-1 px-2 mx-1">
              dashboard.addRow(anotherRow)
            </span>
            . In the next step, we will see how we can create a row.
          </p>
        </section>

        <section className="mb-8" id="Row">
          <h2 className="text-2xl font-semibold mb-4">Row</h2>
          <p className="mb-2">Instantiate the Row object as follow</p>
          <div className="p-2 mb-4">
            <SyntaxHighlighter
              className="rounded-lg"
              language="javascript"
              style={atomOneDarkReasonable}
            >
              {row}
            </SyntaxHighlighter>
          </div>
          <p className="leading-8">
            Each
            <span className="bg-gray-800 rounded-md text-gray-300 py-1 px-2 mx-1">
              Row
            </span>
            contains a heading and one or multiple cells. You can use row
            constructor to add a heading and one or more cells like <br />
            <span className="bg-gray-800 rounded-md text-gray-300 py-1 px-2 mx-1">
              new Row("Heading", [firstCell, secondCell]);
            </span>
            or you can add a cell by using addCell method in Row class like
            <span className="bg-gray-800 rounded-md text-gray-300 py-1 px-2 mx-1">
              row.addCell(anotherCell)
            </span>
            . In the next step, we will see how we can create a row.
          </p>
        </section>

        <section className="mb-8" id="Cell">
          <h2 className="text-2xl font-semibold mb-4">Cell</h2>
          <p className="mb-2">Instantiate the Cell object as follows.</p>
          <div className="p-2 mb-4">
            <SyntaxHighlighter
              className="rounded-lg"
              language="javascript"
              style={atomOneDarkReasonable}
            >
              {cell}
            </SyntaxHighlighter>
          </div>
          <p className="leading-8">
            <span className="bg-gray-800 rounded-md text-gray-300 py-1 px-2 mx-1">
              Cell
            </span>
            takes two arguements, first arguement decides the{" "}
            <Link href={"/charts"} className="text-blue-600 underline">
              Chart
            </Link>{" "}
            view to be rendered and the second arguement is colspan which grows
            or shrinks the cell view based on colspan value.
            <span className="bg-gray-800 rounded-md text-gray-300 py-1 px-2 mx-1">
              new Cell(chartView, 6);
            </span>
            or you can add an empty cell like
            <span className="bg-gray-800 rounded-md text-gray-300 py-1 px-2 mx-1">
              new Cell(undefined);
            </span>{" "}
            with default colspan value to be 4.
          </p>
        </section>
      </div>
    </div>
  );
}
