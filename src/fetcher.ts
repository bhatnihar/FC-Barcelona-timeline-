// fetcher.ts
export interface EventData {
  year: number;
  title: string;
  description: string;
  image?: string; // optional
}

export function getEvents(): EventData[] {
  return [
    {
      year: 1899,
      title: "Club Founded",
      description: "FC Barcelona was founded by Joan Gamper.",
      image: "images/founded.jpg"
    },
    {
      year: 1992,
      title: "First Champions League",
      description: "Barcelona won their first European Cup at Wembley.",
      image: "images/1992.jpg"
    }
  ];
}
