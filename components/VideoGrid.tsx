import Link from "next/link";

type Tile = { title: string; href?: string };

const defaultTiles: Tile[] = [
  { title: "Gutter Helmet® install · Stone Oak" },
  { title: '6" seamless gutters · Boerne' },
  { title: "Full gutter cleaning · Alamo Heights" },
  { title: "Solar panel cleaning · Helotes" },
  { title: "Window cleaning · Schertz" },
  { title: "Gutter repair · New Braunfels" },
];

export default function VideoGrid({ tiles = defaultTiles }: { tiles?: Tile[] }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {tiles.map((t) => (
        <PlaceholderCard key={t.title} {...t} />
      ))}
    </div>
  );
}

function PlaceholderCard({ title, href }: Tile) {
  const inner = (
    <div className="grid h-full place-items-center rounded-card border border-neutral-100 bg-neutral-100 p-5 text-center text-sm text-neutral-600 [aspect-ratio:9/16]">
      <div>
        <div className="mx-auto mb-2 grid h-14 w-14 place-items-center rounded-full bg-accent text-xl text-white">
          ▶
        </div>
        <div className="font-semibold text-neutral-700">{title}</div>
        <div className="mt-1 text-xs text-neutral-500">
          Replace with Instagram embed
        </div>
      </div>
    </div>
  );
  return href ? <Link href={href}>{inner}</Link> : inner;
}
