export const fieldClassName =
  "block h-13 w-full rounded-2xl border bg-white px-4 text-start text-base text-secondary outline-none transition duration-200 placeholder:text-start placeholder:text-secondary/45";

export const fieldErrorClassName =
  "border-red-500 focus:border-red-500 focus:ring-red-200";

export const fieldDefaultClassName =
  "border-secondary/15 focus:border-primary focus:ring-3 focus:ring-primary/35";

export function getFieldClassName(hasError: boolean) {
  return `${fieldClassName} ${
    hasError ? fieldErrorClassName : fieldDefaultClassName
  }`;
}
