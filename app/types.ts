export type HomeProps = {
  searchParams: {
    filter: string | undefined;
    page: string | undefined;
  };
};

export interface ProcessedProps {
  processedParams: {
    filter: string;
    page: number;
  };
  action: "ranking" | "search";
}

export interface Paging {
  previous: string | undefined;
  next: string | undefined;
}
