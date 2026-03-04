export const getValidationMsg = (t: (key: string) => string, msg?: string) =>
  msg ? t(msg) : undefined;
