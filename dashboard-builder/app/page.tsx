import { instantiate } from "../utils/codes";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDarkReasonable } from "react-syntax-highlighter/dist/esm/styles/hljs";

export default function Home() {
  return (
    <div className="bg-gray-100 text-gray-800 font-sans leading-normal p-5">
      <header className="bg-blue-400 p-4 rounded-md">
        <div className="container mx-auto">
          <h1 className="text-white text-3xl font-bold">
            Dashboard SDK Documentation
          </h1>
        </div>
      </header>

      <div className="container mx-auto mt-8">
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
          <p className="mb-2">
            Welcome to the documentation for our Dashboard SDK. This SDK allows
            you to build a layout for your dashboard UI and choose from
            available chart options to explore your data in fun way.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">Main Features</h2>
          <p className="mb-3">
            Some of the main features of this SDK includes:
          </p>
          <ul className="list-disc ml-6">
            <li className="mb-2">
              Serialize and deserialize the dashboard to and from JSON.
            </li>
            <li className="mb-2">Add new rows to a dashboard.</li>
            <li className="mb-2">
              Add headings in-between each row on the dashboard.
            </li>
            <li className="mb-2">
              Add cells with available views such as Bar Chart, Pie Chart.
            </li>
            <li className="mb-2">Configurable layout for the UI components.</li>
            <li className="mb-2">
              Validation checks for attributes to ensure data integrity.
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}
