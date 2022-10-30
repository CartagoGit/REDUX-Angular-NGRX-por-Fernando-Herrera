import { ITechs } from "./techs.interface";

export interface IAuthor {
  id: string | number;
  name: string;
  image?: string;
  links?: ILinks;
  techs?: ITechs;
}

interface ILinks {
  personal?: string;
  udemy?: string;
  twitter?: string;
  linkedin?: string;
  youtube?: string;
  instagram?: string;
  tiktok?: string;
  others?: string[];
}
