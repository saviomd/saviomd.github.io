export type AnchorTarget = "_blank" | "_parent" | "_self" | "_top";

export interface GaEvent {
  action: string;
  label?: string;
  value?: number;
}
