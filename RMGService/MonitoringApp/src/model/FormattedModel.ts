export interface ModelResult {
  vendor: string;
  successCount: number;
  failedCount: number;
}

export interface StatusResult {
  vendor: string;
  count: number;
}

export interface BarChartModel {
  key: String;
  color: String;
  values: StatusResult[];
}
