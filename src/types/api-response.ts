import { BisCompanyDetails } from "./company";

export type getDataResponse = {
  type: string;
  version: string;
  totalResults: number;
  resultsFrom: number;
  previousResultsUri: string | null;
  nextResultsUri: string | null;
  exceptionNoticeUri: string | null;
  results: BisCompanyDetails[];
};
