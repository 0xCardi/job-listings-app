export interface Job {
  id: string;
  slug: string;
  company: string;
  position: string;
  location: string;
  tags: string[];
  salary_min: number;
  salary_max: number;
  date: string;
}