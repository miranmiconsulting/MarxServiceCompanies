// Single source of truth for the Recent Work reels.
// Used by both the homepage (preview) and the /gallery page (full grid).
// To add a new reel, append to this array — both pages update automatically.

export type Reel = {
  url: string;
  caption: string;
};

export const recentWork: Reel[] = [
  {
    url: "https://www.instagram.com/reel/CkIp1YCA2yW/",
    caption: "Fresh gutters on an older home",
  },
  {
    url: "https://www.instagram.com/reel/C-BGK6RSV1x/",
    caption: "Seamless gutter installation",
  },
  {
    url: "https://www.instagram.com/reel/DBrkuH6S68S/",
    caption: "Gutter cleaning and maintenance",
  },
];
