import type { LucideIcon } from "lucide-react";

export interface ShowcaseCard {
  key: string;
  imageSrc: string;
}

export interface WhyEvShareItem {
  key: string;
  icon: string;
}

export interface AppStep {
  key: string;
}

export interface FloatingAsset {
  src: string;
  className: string;
}

export interface AppProofPoint {
  key: string;
  icon: LucideIcon;
  labelKey: string;
  valueKey: string;
}
