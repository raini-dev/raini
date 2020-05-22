export enum Route {
  HOME = "/",
  DOCS = "/docs",
  EVENTS = "/events",
}

export const EventURL = (slug: string) => `/events/${slug}`;
export const DocURL = (slug: string) => `/docs/${slug}`;

export const YouTubeEmbedURL = (videoId: string) => `https://youtube.com/embed/${videoId}`;

export const YouTubeThumbnailURL = (videoId: string) =>
  `https://i3.ytimg.com/vi/${videoId}/maxresdefault.jpg`;

export enum ExternalRoute {
  TWITTER = "https://twitter.com/raini_dev",
  YOUTUBE = "https://www.youtube.com/channel/UCjnOaUBA1EbI_SMh93a7NFg?view_as=subscriber",
  GITHUB = "https://github.com/raini-dev/raini",
}
