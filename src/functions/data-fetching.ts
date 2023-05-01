import { getDataResponse } from "../types/api-response";
import { BisCompanyDetails } from "../types/company";

const getDataByBusinessId = async (businessId: string) => {
  const data = await fetch(`https://avoindata.prh.fi/bis/v1/${businessId}`);
  const result: getDataResponse = await data.json();
  return result;
};

const getDataWithParameters = async (
  maxResults: number,
  resultFrom: number,
  streetAddressPostCode: string
) => {
  const data = await fetch(
    `https://avoindata.prh.fi/bis/v1?totalResults=false&maxResults=${maxResults}&resultsFrom=${resultFrom}&streetAddressPostCode=${streetAddressPostCode}`
  );
  const result: getDataResponse = await data.json();
  return result;
};

export const getCompanyDetails = async (
  maxResults: number,
  resultFrom: number,
  streetAddressPostCode: string
) => {
  const companiesByParameters = await getDataWithParameters(
    maxResults,
    resultFrom,
    streetAddressPostCode
  );

  const companiesIds = companiesByParameters.results.map(
    (company) => company.businessId
  );

  const companiesDetails: BisCompanyDetails[] = new Array();

  for (const id in companiesIds) {
    const companyData = await getDataByBusinessId(companiesIds[id]);
    companiesDetails.push(companyData.results[0]);
  }

  return companiesDetails;
};
