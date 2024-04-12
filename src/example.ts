import { Dashboard, Row, Cell, BarChart, PieChart } from "./index";

const barChart = new BarChart(
  "1",
  "Barchart Title",
  ["field1", "field2"],
  ["groupBy1", "groupBy2"]
);

const pieChart = new PieChart("1", "Barchart Title", "field2", "groupBy1");

const firstCell = new Cell(barChart, 4);
const secondCell = new Cell(pieChart, 4);
const emptyCell = new Cell(undefined, 4);

const row = new Row("Heading 1", [firstCell, secondCell, emptyCell]);

const dashboard = new Dashboard([row]);
