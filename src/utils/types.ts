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

interface WorldMap {
  id: string;
  title: string;
  metrics: string[];
  countryCodeField: string;
}

export type {
  Dashboard as DashboardType,
  Row as RowType,
  Cell as CellType,
  BarChart as BarChartType,
  PieChart as PieChartType,
  WorldMap as WorldMapType,
  // ChartTypes,
};
