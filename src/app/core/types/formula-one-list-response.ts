export interface FormulaOneListResponse {
  MRData: {
    xmlns: string;
    series: string;
    url: string;
    limit: string;
    offset: string;
    total: string;
    [key: string]: any;
  };
}
