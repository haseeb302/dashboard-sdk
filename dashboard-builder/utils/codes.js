export const instantiate = `const barChart = new BarChart(
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
`;

export const npm = `npm i hsb-dashboard-sdk`;

export const importAll = `import { Dashboard, Row, Cell, BarChart, PieChart, WorldMap } from 'dashboard-sdk';`;

export const dashboard = `import { Dashboard } from 'dashboard-sdk';

const dashboard = new Dashboard();
`;

export const row = `import { Row } from 'dashboard-sdk';

const row = new Row();
`;

export const cell = `import { Cell } from 'dashboard-sdk';

const Cell = new Cell();
`;

export const barChart = `import { BarChart } from 'dashboard-sdk';

const barChart = new BarChart();
`;

export const pieChart = `import { PieChart } from 'dashboard-sdk';

const pieChart = new PieChart();
`;

export const example = `import { Dashboard, Row, Cell, BarChart, PieChart } from "hsb-dashboard-sdk";

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
`;

export const types = `
interface Cell {
    colspan: number | string;
    view?: BarChart | PieChart;
}
  
interface Row {
   heading: string;
   cells: Cell[];
}
  
interface Dashboard {
   rows: Row[];
}
  
type BarChart = {
    id: string;
    title: string;
    metricFields: string[];
    groupByFields: string[];
};
  
type PieChart = {
    id: string;
    title: string;
    metricField: string;
    groupByFieldId: string;
};
`;
