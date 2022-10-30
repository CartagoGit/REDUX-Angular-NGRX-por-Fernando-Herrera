import { IAuthor } from './author.interface';
import { IProject } from './projects.interface';
import { ITechs } from './techs.interface';

export interface ICourse {
  id: string | number;
  title: string;
  subtitle: string;
  link: string;
  github?: string;
  linkCertificatePdf?: string;
  description?: string;
  isComplete(): boolean;
  projects: IProject[];
  author?: IAuthor;
  techs: ITechs;
}
