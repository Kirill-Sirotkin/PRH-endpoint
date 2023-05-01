export type BisCompanyDetails = {
  names: BisCompanyName[];
  auxiliaryNames?: BisCompanyName[];
  addresses?: BisAddress[];
  companyForms?: BisCompanyForm[];
  liquidations?: BisCompanyLiquidation[];
  businessLines?: BisCompanyBusinessLine[];
  languages?: BisCompanyLanguage[];
  registeredOffices?: BisCompanyRegisteredOffice[];
  contactDetails?: BisCompanyContactDetail[];
  registeredEntries?: BisCompanyRegisteredEntry[];
  businessIdChanges?: BisCompanyBusinessIdChange[];
  businessId: string;
  registrationDate: string;
  companyForm?: string;
  detailsUri?: string;
  name: string;
};

export type BisCompanyName = {
  source?: number;
  order: number;
  version: number;
  registrationDate: string;
  endDate?: string;
  name: string;
  language?: string;
};

export type BisAddress = {
  source?: number;
  version: number;
  registrationDate: string;
  endDate?: string;
  careOf?: string;
  street?: string;
  postCode?: string;
  city?: string;
  language?: string;
  type: number;
  country?: string;
};

export type BisCompanyForm = {
  source?: number;
  version: number;
  registrationDate: string;
  endDate?: string;
  name: string;
  language?: string;
  type: number;
};

export type BisCompanyLiquidation = {
  source?: number;
  version: number;
  registrationDate: string;
  endDate?: string;
  name: string;
  language?: string;
  type: number;
};

export type BisCompanyBusinessLine = {
  source?: number;
  order: number;
  version: number;
  registrationDate: string;
  endDate?: string;
  name: string;
  language?: string;
};

export type BisCompanyLanguage = {
  source?: number;
  version: number;
  registrationDate: string;
  endDate?: string;
  name: string;
  language?: string;
};

export type BisCompanyRegisteredOffice = {
  source?: number;
  order: number;
  version: number;
  registrationDate: string;
  endDate?: string;
  name: string;
  language?: string;
};

export type BisCompanyContactDetail = {
  source?: number;
  version: number;
  registrationDate: string;
  endDate?: string;
  language?: string;
  value: string;
  type: string;
};

export type BisCompanyRegisteredEntry = {
  description: string;
  status: number;
  registrationDate: string;
  endDate?: string;
  register: number;
  language?: string;
  authority: number;
};

export type BisCompanyBusinessIdChange = {
  source?: number;
  description: string;
  reason: string;
  changeDate?: string;
  change: number;
  oldBusinessId: string;
  newBusinessId: string;
  language?: string;
};
