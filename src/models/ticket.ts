export interface Ticket {
  title?: string;
  description?: string;
  date?: Date;
  student?: string;
  major: Major;
}

export enum Major {
  SI = 'SI',
  GE = 'GE',
  GB = 'GB'
}
