import Nav from "@/components/Nav";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-gray-100 text-gray-800 font-sans leading-normal p-5">
      <header className="bg-blue-500 p-4">
        <div className="container mx-auto">
          <h1 className="text-white text-3xl font-semibold">
            Dashboard SDK Documentation
          </h1>
        </div>
      </header>

      <div className="container mx-auto mt-8">
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
          <p className="mb-2">
            Welcome to the documentation for our Dashboard SDK. This SDK allows
            you to build interactive dashboards easily.
          </p>
          <p>Below are the key features and guidelines for using the SDK.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Features</h2>
          <ul className="list-disc ml-6">
            <li className="mb-2">
              Serialize and deserialize the dashboard to and from JSON.
            </li>
            <li className="mb-2">Add new rows to a dashboard.</li>
            <li className="mb-2">
              Add headings in-between each row on the dashboard.
            </li>
            <li className="mb-2">
              Add cells with various views such as Bar Chart, Pie Chart, and
              World Map.
            </li>
            <li className="mb-2">
              Configurable theming for the UI components.
            </li>
            <li className="mb-2">
              Validation checks for attributes to ensure data integrity.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Usage</h2>
          <p className="mb-2">To use the Dashboard SDK, follow these steps:</p>
          <ol className="list-decimal ml-6">
            <li className="mb-2">Install the SDK package via npm or yarn.</li>
            <li className="mb-2">
              Import the necessary classes into your project.
            </li>
            <li className="mb-2">
              Instantiate the classes and utilize the SDK methods as per your
              requirements.
            </li>
          </ol>
        </section>

        <section>
          <div className="rounded-lg p-4 mb-4 ">
            <pre className="language-javascript">
              <code className="language-javascript">
                const greeting = 'Hello, world!'; console.log(greeting);
              </code>
            </pre>
          </div>

          <div className="rounded-lg p-4 mb-4">
            <pre>
              <code className="language-html">
                &lt;div class="container"&gt; &lt;p&gt;This is a
                paragraph.&lt;/p&gt; &lt;/div&gt;
              </code>
            </pre>
          </div>

          <div className="rounded-lg p-4 mb-4">
            <pre>
              <code className="language-css">{`.container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
}`}</code>
            </pre>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Example</h2>
          <div className="p-4 rounded">
            <pre className="language-javascript">
              <code className="language-javascript">{`import { Dashboard, Row, Cell, BarChart, PieChart, WorldMap } from 'dashboard-sdk';

// Initialize the dashboard
const dashboard = new Dashboard();

// Add rows and cells with views
const row1 = new Row();
row1.addCell(new Cell(new BarChart()));
row1.addCell(new Cell(new PieChart()));

const row2 = new Row();
row2.addCell(new Cell(new WorldMap()));

dashboard.addRow(row1);
dashboard.addRow(row2);

// Serialize the dashboard to JSON
const serializedDashboard = JSON.stringify(dashboard);

// Deserialize the dashboard from JSON
const deserializedDashboard = JSON.parse(serializedDashboard);

console.log(deserializedDashboard);`}</code>
            </pre>
          </div>
        </section>
      </div>

      <footer className="bg-gray-800 text-white text-center py-4">
        <p>&copy; 2023 Your Company. All rights reserved.</p>
      </footer>
    </div>
  );
}
