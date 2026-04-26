// Server component — renders Instagram's official embed blockquote.
// `InstagramScript` (mounted once per page) loads embed.js, which finds these
// blockquotes by class and replaces them with the real iframe player.
//
// Pre-process placeholder uses inline styles so it looks intentional even
// before embed.js runs. After processing, Instagram's iframe takes over.

type Props = {
  url: string;
  caption?: boolean;
};

export default function InstagramEmbed({ url, caption = false }: Props) {
  const dataAttrs: Record<string, string> = {
    "data-instgrm-permalink": url,
    "data-instgrm-version": "14",
  };
  if (caption) dataAttrs["data-instgrm-captioned"] = "";

  return (
    <blockquote
      className="instagram-media"
      {...dataAttrs}
      // Instagram mutates this DOM node after mount; tell React not to warn.
      suppressHydrationWarning
      style={{
        background: "#fff",
        border: 0,
        borderRadius: 12,
        boxShadow: "0 1px 2px rgba(0,0,0,0.06), 0 6px 18px rgba(0,0,0,0.08)",
        margin: "0 auto",
        maxWidth: 540,
        width: "100%",
        padding: 0,
        // Tall placeholder roughly matches a 9:16 reel so the page doesn't jump
        // when the iframe replaces the blockquote.
        minHeight: 540,
      }}
    >
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          minHeight: 540,
          padding: 24,
          textAlign: "center",
          color: "#1B2D5C",
          fontWeight: 600,
          textDecoration: "none",
        }}
      >
        View this Reel on Instagram
      </a>
    </blockquote>
  );
}
