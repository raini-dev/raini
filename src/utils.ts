import Switch from "@raini/switch";

export const isString = (x: unknown): x is string => typeof x == "string";
export const isNovice = (x: string): boolean => x.toLowerCase() === "novice";
export const isElementary = (x: string): boolean => x.toLowerCase() === "elementary";
export const isIntermediate = (x: string): boolean => x.toLowerCase() === "intermediate";
export const isAdvanced = (x: string): boolean => x.toLowerCase() === "advanced";

export const maybeStringToString = <T, K extends keyof T = keyof T>(
  key: K,
  defaultValue?: T[K],
) => (ctx: T) => ({
  [key]: Switch(ctx[key])
    .case(isString, (x: any) => (x ? x : defaultValue ?? ""))
    .default(() => "")(ctx[key]),
});

export const maybeStringToArray = <T, K extends keyof T = keyof T>(key: K) => (ctx: T) => ({
  [key]: Switch(ctx[key])
    .case(Array.isArray, (x: any): string[] => x)
    .case(isString, (x: any): string[] => x.split(/,\s*/))
    .default(() => [] as string[])(ctx[key]),
});

export const stringToDifficulty = <T, K extends keyof T = keyof T>(key: K) => (ctx: T) => ({
  [key]: Switch(ctx[key] as any)
    .case(isNovice, "novice")
    .case(isElementary, "elementary")
    .case(isIntermediate, "intermediate")
    .case(isAdvanced, "advanced")
    .default("n/a"),
});
