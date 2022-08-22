export interface Counters {
  files: number;
  lines: number;
  percentage: number;
}

export interface Stats {
  total: Counters;
  loved: Counters;
  unloved: Counters;
  owners: { owner: string, counters: Counters }[];
}
