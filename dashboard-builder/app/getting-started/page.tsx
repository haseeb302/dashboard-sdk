import { importAll, instantiate, npm } from "@/utils/codes";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDarkReasonable } from "react-syntax-highlighter/dist/esm/styles/hljs";

export default function page() {
  return (
    <div className="bg-gray-100 text-gray-800 font-sans leading-normal p-5">
      <header className="bg-blue-400 p-4 rounded-md">
        <div className="container mx-auto">
          <h1 className="text-white text-3xl font-bold">Getting Started</h1>
        </div>
      </header>

      <div className="container mx-auto mt-8">
        <p className="mb-2">
          To use the HSB Dashboard SDK, follow these steps:
        </p>
        <section className="mb-8" id="Installation">
          <h2 className="text-2xl font-semibold mb-4">Installation</h2>
          <p className="mb-2">Install the SDK package via npm</p>
          <div className="p-2 mb-4">
            <SyntaxHighlighter
              className="rounded-lg"
              language="bash"
              style={atomOneDarkReasonable}
            >
              {npm}
            </SyntaxHighlighter>
          </div>
        </section>

        <section className="mb-8" id="Usage">
          <h2 className="text-2xl font-semibold mb-4">Usage</h2>
          <ol className="list-decimal ml-6">
            <li className="mb-2">
              Import the necessary classes into your project.
            </li>
            <div className="p-2 mb-4">
              <SyntaxHighlighter
                className="rounded-lg"
                language="javascript"
                style={atomOneDarkReasonable}
              >
                {importAll}
              </SyntaxHighlighter>
            </div>
            <li className="mb-2">
              Instantiate the classes and utilize the SDK methods as per your
              requirements.
            </li>
            <SyntaxHighlighter
              className="rounded-lg"
              language="javascript"
              style={atomOneDarkReasonable}
            >
              {instantiate}
            </SyntaxHighlighter>
          </ol>
        </section>
      </div>
    </div>
  );
}
