import { Dashboard, Row, Cell, BarChart, PieChart } from "hsb-dashboard-sdk";

export default function Page() {
  const barChart = new BarChart(
    "1",
    "Barchart Title",
    ["field1", "field2"],
    ["groupBy1", "groupBy2"]
  );

  const pieChart = new PieChart("1", "Pie Chart Title", "field2", "groupBy1");

  const firstCell = new Cell(barChart, 6);
  const secondCell = new Cell(pieChart, 6);
  const emptyCell = new Cell(undefined);

  const firstRow = new Row("Heading 1", [firstCell, emptyCell]);
  const secondRow = new Row("Heading 2", [secondCell, emptyCell]);

  const dashboard = new Dashboard([firstRow, secondRow]);
  console.log(dashboard);
  return (
    <div className="p-5">
      <h2 className="text-2xl font-semibold mb-4">Preview</h2>
      <div className="border px-8 rounded-lg mb-5">
        {dashboard.rows.map((row, index) => (
          <div key={index} className="my-5">
            <h1 className="text-3xl font-extrabold">{row.heading}</h1>
            <hr />
            <div className="grid grid-cols-12 gap-3 mt-3">
              {row.cells.map((cell, index) => (
                <div
                  key={index}
                  className={
                    cell.colspan
                      ? `col-span-${cell.colspan} border p-5`
                      : `col-span-4 border p-5`
                  }
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
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Code</h2>
        <div className="p-4 border rounded bg-gray-800 text-white">
          <pre className="language-javascript">
            <code className="language-javascript">
              {`import { Dashboard, Row, Cell, BarChart, PieChart } from "hsb-dashboard-sdk";

export default function Page() {
const barChart = new BarChart(
    "1",
    "Barchart Title",
    ["field1", "field2"],
    ["groupBy1", "groupBy2"]
);

const pieChart = new PieChart("1", "Pie Chart Title", "field2", "groupBy1");

const firstCell = new Cell(barChart, 6);
const secondCell = new Cell(pieChart, 6);
const emptyCell = new Cell(undefined);

const firstRow = new Row("Heading 1", [firstCell, emptyCell]);
const secondRow = new Row("Heading 2", [secondCell, emptyCell]);

const dashboard = new Dashboard([firstRow, secondRow]);
console.log(dashboard);
return (
    <div className="p-5">
    {dashboard.rows.map((row, index) => (
        <div key={index} className="my-5">
        <h1 className="text-3xl">{row.heading}</h1>
        <hr />
        <div className="grid grid-cols-12 gap-3 mt-3">
            {row.cells.map((cell, index) => (
            <div
                key={index}
                className={
                cell.colspan
                    ? \`col-span-\${cell.colspan} border p-5\`
                    : \`col-span-4 border p-5\`
                }
            >
                <div>
                {cell.view?.title ? (
                    <h3 className="text-2xl">{cell.view?.title}</h3>
                ) : (
                    <h3 className="text-xl">Empty Cell</h3>
                )}
                </div>
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
);
}
`}
            </code>
          </pre>
        </div>
      </section>
    </div>
  );
}
