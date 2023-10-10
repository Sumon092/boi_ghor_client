export interface IBook {
  headers: { 'Content-Type': string; Authorization: string; };
  _id?: string;
  title?: string;
  author?: string;
  publication_date?: string  ;
  rating?: string;
  reviews?: string;
  genre?: string;
}
