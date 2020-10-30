export enum Route {
  HOME = "/",
  DOCS = "/docs",
  EVENTS = "/events",
  PRIVACY_POLICY = "/privacy-policy",
  AUP = "/acceptable-use-policy",
  COOKIE_POLICY = "/cookie-policy",
  DISCLAIMER = "/disclaimer",
  TAC = "/terms-and-conditions",
}

export const eventUrl = (slug: string) => `/events/${slug}`;
export const docUrl = (slug: string) => `/docs/${slug}`;
export const withHost = (route: string) =>
  `https://raini.dev${route.startsWith("/") ? route : `/${route}`}`;

export const youTubeEmbedUrl = (videoId: string) => `https://youtube.com/embed/${videoId}`;

export const youTubeThumbnailUrl = (videoId: string) =>
  `https://i3.ytimg.com/vi/${videoId}/maxresdefault.jpg`;

export enum ExternalRoute {
  TWITTER = "https://twitter.com/raini_dev",
  YOUTUBE = "https://www.youtube.com/channel/UCjnOaUBA1EbI_SMh93a7NFg?view_as=subscriber",
  GITHUB = "https://github.com/raini-dev/raini",
  DISCORD = "https://discord.gg/dJCv4C8",
}
