import { getCompanyDetails } from "./functions/data-fetching";

const main = async () => {
  const data = await getCompanyDetails(1, 2, "00100");
  console.log(data);
};

main();
