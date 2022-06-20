export type Company = {
  seo: string;
  name: string;
  summary: string;
  founded: number;
  employees: number;
  headquarters: {
    adress: string;
    city: string;
    state: string;
  };
};
