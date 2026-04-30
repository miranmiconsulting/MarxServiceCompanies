// Maps a service slug to its Lucide icon. Functional icons only — no emoji.
// Trust & Authority pattern: clear, consistent symbology across the grid.

import {
  Home,
  ShieldCheck,
  LayoutGrid,
  Wrench,
  Droplets,
  AppWindow,
  Sun,
  type LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  install: Home,
  helmet: ShieldCheck,
  screens: LayoutGrid,
  repair: Wrench,
  cleaning: Droplets,
  windows: AppWindow,
  solar: Sun,
};

type Props = {
  slug: string;
  className?: string;
  size?: number;
};

export default function ServiceIcon({ slug, className = "", size = 22 }: Props) {
  const Icon = iconMap[slug] ?? Home;
  return <Icon size={size} strokeWidth={2} className={className} aria-hidden="true" />;
}
