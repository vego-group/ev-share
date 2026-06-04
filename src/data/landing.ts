import { MapPinned, QrCode, Store } from "lucide-react";
import { AppProofPoint, AppStep, FloatingAsset, ShowcaseCard } from "@/interfaces";

export const showcaseCards: ShowcaseCard[] = [
  {
    key: "bike",
    imageSrc: "/images/bike.jpg",
  },
  {
    key: "scooter",
    imageSrc: "/images/scooter.jpg",
  },
  {
    key: "car",
    imageSrc: "/images/car.jpg",
  },
];

export const whyEvShareItems = [
  { key: "item1", icon: "/images/icon-1.svg" },
  { key: "item2", icon: "/images/icon-2.svg" },
  { key: "item3", icon: "/images/icon-3.svg" },
  { key: "item4", icon: "/images/icon-4.svg" },
];

export const appSteps: AppStep[] = [
  { key: "step1" },
  { key: "step2" },
  { key: "step3" },
  { key: "step4" },
];

export const floatingAssets: FloatingAsset[] = [
  { src: "/images/car.jpg", className: "-start-8 top-28" },
  { src: "/images/scooter.jpg", className: "-end-10 top-36" },
  { src: "/images/bike.jpg", className: "start-1/2 -translate-x-1/2 bottom-8" },
];

export const appProofPoints: AppProofPoint[] = [
  {
    key: "map",
    icon: MapPinned,
    labelKey: "proof.mapLabel",
    valueKey: "proof.mapValue",
  },
  {
    key: "scan",
    icon: QrCode,
    labelKey: "proof.scanLabel",
    valueKey: "proof.scanValue",
  },
  {
    key: "merchant",
    icon: Store,
    labelKey: "proof.merchantLabel",
    valueKey: "proof.merchantValue",
  },
];
