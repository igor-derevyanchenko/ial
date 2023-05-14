export type HomeProps = {
  searchParams: {
    filter: string | undefined;
    page: string | undefined;
  };
};

export type ProcessedProps = {
  searchParams: {
    filter: string;
    page: number;
  };
};
