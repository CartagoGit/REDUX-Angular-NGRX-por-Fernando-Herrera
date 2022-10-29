import { Project } from './projects.interface';
export interface ExternalLinks {
  email: string;
  github: string;
  portafolios: string;
  linkedin: string;
  certificatesGithub: string;

}

export interface Course {
  id: string | number;
  title: string;
  subtitle: string;
  link: string;
  linkCertificatePdf?: string;
  description?: string;
  isComplete(): boolean;
  projects: Project[];
  author?: Author;
  techs: Techs;
}

export interface Author {
  id: string | number;
  name: string;
  linkPage: string;
  linkUdemy?: string;
  twitter?: string;
  linkedin? : string;
  youtube?: string;
}

interface Techs {
  frontend?: Frontend;
  backend?: Backend;
}

interface Backend {
  framework?: FrameworkBack | FrameworkBack[];
  language: LanguageBack | LanguageBack;
  libreries?: Lib | Lib[];
  methodology?: Methodology | Methodology[];
}
interface Frontend {
  framework?: FrameworkFront | FrameworkFront[];
  language: LanguageFront | LanguageFront;
  libreries?: Lib | Lib[];
  methodology?: Methodology | Methodology[];
  tag: Tag | Tag[];
  style: Style | Style[];
}

export type FrameworkBack = 'Laravel' | 'Symfony' | 'Spring' | 'NodeJs';

export type FrameworkFront =
  | 'Angular'
  | 'ReactJs'
  | 'VueJs'
  | 'NextJs'
  | 'Unity'
  | 'iOnic'
  | 'ReactNative'
  | 'Xamarin';
export type LanguageBack =
  | 'JavaScript'
  | 'TypeScript'
  | 'Php'
  | 'Python'
  | 'Solidity'
  | 'Java';
export type LanguageFront = 'JavaScript' | 'TypeScript' | 'C#';

export type Tag = 'HTML';
export type Style = 'Css' | 'Scss' | 'Sass' | 'Less' | 'Bootstrap' | 'Tailwind';
export type Lib =
  | 'ExpressJS'
  | 'Mongoose'
  | 'OpenZeppelin'
  | 'MomentJs'
  | 'ViteJs'
  | 'NxJs'
  | 'RxJs'
  | 'NgRx'
  | 'Redux';

export type Methodology =
  | 'Scrum'
  | 'Kanban'
  | 'Extreme Programming - XP'
  | 'Modelo vista controlador (MVC)';
