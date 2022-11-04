export interface IGaEvent {
  action: string;
  label?: string;
  value?: string;
}

export interface ILink {
  id: string;
  name: string;
  url: string;
}

export interface IProject {
  description: string;
  icon: string;
  name: string;
  tags: string[];
  url: string;
}

export interface ISection {
  id: string;
  name: string;
}

export type AnchorTargetType = "_blank" | "_parent" | "_self" | "_top";
