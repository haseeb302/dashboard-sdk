import { types } from "@/utils/codes";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDarkReasonable } from "react-syntax-highlighter/dist/esm/styles/hljs";

export default function page() {
  return (
    <div className="bg-gray-100 text-gray-800 font-sans leading-normal p-5">
      <header className="bg-blue-400 p-4 rounded-md">
        <div className="container mx-auto">
          <h1 className="text-white text-3xl font-bold">Types</h1>
        </div>
      </header>

      <div className="container mx-auto mt-8">
        <section className="mb-8" id="BarChart">
          <h2 className="text-2xl font-semibold mb-4">All Types Available</h2>
          <div className="p-2 mb-4">
            <SyntaxHighlighter
              className="rounded-lg"
              language="typescript"
              style={atomOneDarkReasonable}
            >
              {types}
            </SyntaxHighlighter>
          </div>
        </section>
      </div>
    </div>
  );
}
