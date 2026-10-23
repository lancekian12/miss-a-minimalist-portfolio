export const person = {
  name: "Anna Lurene Sendaydiego",
  short: "Anna Sendaydiego",
  postNominals: "CPA, CIA",
  role: "Finance Executive",
  email: "annalurene_3411@yahoo.com",
  location: "Philippines",
  description:
    "CPA and Certified Internal Auditor with about 20 years in financial leadership, controllership, FP&A, tax, internal audit and multi-entity governance. Corporate Division Director at RareJob Philippines.",
};

export const about = [
  "I'm a CPA and Certified Internal Auditor with about 20 years across controllership, FP&A, tax, internal audit and multi-entity governance.",
  "At RareJob Philippines I grew through seven appointments, from Finance Department Head to director of the Corporate and Lesson Management Divisions. I run finance for the group's Philippine companies and report to leadership in Japan.",
];

export const facts = [
  { label: "Current", value: "Corporate Division Director, RareJob Philippines" },
  { label: "Experience", value: "~20 years · Philippines, Japan, Kenya" },
  { label: "Licenses", value: "CPA (2006) · CIA (2010)" },
  { label: "Education", value: "BS Accountancy, Saint Louis University" },
];

export const impact = [
  { value: "67%", label: "Smaller lesson operations team (33 to 11), service kept steady" },
  { value: "7.04%", label: "Lower average lesson cost, down to ₱70.65" },
  { value: "99.45%", label: "Lesson stability during the transition" },
  { value: "0", label: "Material regulatory violations across managed subsidiaries" },
];

export type Role = {
  dates: string;
  title: string;
  org: string;
  summary?: string;
};

export const experience: Role[] = [
  {
    dates: "2023 — Now",
    title: "Lesson Management Division Director",
    org: "RareJob Philippines",
    summary:
      "Runs division budgets and lesson operations. Cut headcount 67% and average lesson cost 7.04% with automation, while cancellations fell from about 5% to 1.6%.",
  },
  {
    dates: "2020 — Now",
    title: "Corporate Division Director",
    org: "RareJob Philippines",
    summary:
      "Leads finance, budgeting, reporting, payroll, tax and internal controls. No material regulatory violations and minimal audit adjustments across the group.",
  },
  {
    dates: "2017 — 2020",
    title: "Admin & Finance Department Senior Manager / Manager",
    org: "RareJob Philippines",
    summary:
      "Ran finance and administration together and handled BIR audits for several group companies.",
  },
  {
    dates: "2016 — 2017",
    title: "Finance Department Manager / Assistant Manager",
    org: "RareJob Philippines",
    summary:
      "Set up central finance for new and acquired subsidiaries and closed BIR audit cases.",
  },
  {
    dates: "2013 — 2016",
    title: "Finance Department Head",
    org: "RareJob Philippines",
    summary:
      "Introduced the company's budgeting system and supported the parent company's Tokyo Stock Exchange listing.",
  },
];

export const earlier: Role[] = [
  { dates: "2012", title: "Finance Controller", org: "Trident Insurance, Nairobi" },
  { dates: "2010 — 2012", title: "Group Internal Auditor", org: "Premier Group, Nairobi" },
  { dates: "2008 — 2010", title: "Director / Audit Supervisor", org: "IA Report and Consulting (RSM), Makati" },
  { dates: "2007 — 2008", title: "Accounting and Finance Officer", org: "Glenmark Philippines, Pasig" },
  { dates: "2006 — 2007", title: "Senior Auditor / Tax Associate", org: "Alas, Oplas & Co., CPAs, Makati" },
];

export const skills = [
  "FP&A",
  "Budgeting & Forecasting",
  "Cash Flow",
  "Group Reporting",
  "Controllership",
  "Tax & BIR Audits",
  "Statutory Compliance",
  "Internal Controls",
  "External Audit",
  "Cost Optimization",
  "Shared Services",
  "Team Leadership",
];

export const credentials = [
  { title: "Certified Public Accountant", issuer: "Philippines", year: "2006" },
  { title: "Certified Internal Auditor", issuer: "The Institute of Internal Auditors", year: "2010" },
  { title: "BS Accountancy", issuer: "Saint Louis University, Baguio", year: "2005" },
  { title: "Member", issuer: "PICPA · Institute of Internal Auditors", year: "" },
];

export const resumes = [
  { label: "Résumé (short)", href: "/resume/Anna-Sendaydiego-Resume-Short.docx", meta: "DOCX · 29 KB" },
  { label: "Résumé (full)", href: "/resume/Anna-Sendaydiego-Resume-Long.docx", meta: "DOCX · 95 KB" },
];

export const navLinks = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];
