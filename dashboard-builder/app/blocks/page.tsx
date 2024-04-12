import { cell, dashboard, instantiate, npm, row } from "@/utils/codes";
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
          <p className="mb-2">Instantiate the Dashboard class.</p>
          <div className="p-2 mb-4">
            <SyntaxHighlighter
              className="rounded-lg"
              language="javascript"
              style={atomOneDarkReasonable}
            >
              {dashboard}
            </SyntaxHighlighter>
          </div>
          <p className="mb-2">
            Dashboard contains rows so initially to see the content we need to
            provide rows to the dashboard object.
          </p>
        </section>

        <section className="mb-8" id="Row">
          <h2 className="text-2xl font-semibold mb-4">Row</h2>
          <p className="mb-2">Instantiate the Dashboard class.</p>
          <div className="p-2 mb-4">
            <SyntaxHighlighter
              className="rounded-lg"
              language="javascript"
              style={atomOneDarkReasonable}
            >
              {row}
            </SyntaxHighlighter>
          </div>
          <p className="mb-2">
            Dashboard contains rows so initially to see the content we need to
            provide rows to the dashboard object.
          </p>
        </section>

        <section className="mb-8" id="Cell">
          <h2 className="text-2xl font-semibold mb-4">Cell</h2>
          <p className="mb-2">Instantiate the Dashboard class.</p>
          <div className="p-2 mb-4">
            <SyntaxHighlighter
              className="rounded-lg"
              language="javascript"
              style={atomOneDarkReasonable}
            >
              {cell}
            </SyntaxHighlighter>
          </div>
          <p className="mb-2">
            Dashboard contains rows so initially to see the content we need to
            provide rows to the dashboard object.
          </p>
        </section>
      </div>
    </div>
  );
}
