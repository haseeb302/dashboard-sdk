import {
  DashboardType,
  CellType,
  RowType,
  BarChartType,
  PieChartType,
} from "./utils/interfaces";

class Dashboard implements DashboardType {
  rows: Row[];

  constructor(row: Row[]) {
    this.rows.push(...row);
  }

  // save() {
  //   return JSON.stringify(this.dashboard);
  // }

  // load(data: string) {
  //   this.dashboard = JSON.parse(data);
  // }

  addRow(row: Row) {
    this.rows.push(row);
  }

  display() {}

  // Cell(rowIdx: number, view: ChartTypes) {
  //   const newCol: CellType = { view: view, colspan: 4 };
  //   this.dashboard.rows[rowIdx].cells.push(newCol);
  // }

  // validation() {}
}

class Cell implements CellType {
  colspan: number | string;
  view: BarChartType | PieChartType;

  constructor(
    view?: BarChartType | PieChartType,
    colspan: number | string = 4
  ) {
    this.colspan = colspan;
    if (view) {
      this.view = view;
    }
  }
}

class Row implements RowType {
  heading: string;
  cells: CellType[];

  constructor(heading: string, cells: CellType[]) {
    this.heading = heading;
    this.cells = cells;
  }
}

class BarChart implements BarChartType {
  id: string;
  title: string;
  metricFields: string[];
  groupByFields: string[];

  constructor(
    id: string,
    title: string,
    metricFields: string[],
    groupByFields: string[]
  ) {
    this.id = id;
    this.title = title;
    this.metricFields = metricFields;
    this.groupByFields = groupByFields;
  }
}

class PieChart implements PieChartType {
  id: string;
  title: string;
  metricField: string;
  groupByFieldId: string;

  constructor(
    id: string,
    title: string,
    metricField: string,
    groupByFieldId: string
  ) {
    this.id = id;
    this.title = title;
    this.metricField = metricField;
    this.groupByFieldId = groupByFieldId;
  }
}

export { Dashboard, Row, Cell, BarChart, PieChart };
