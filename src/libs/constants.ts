/**
 * Application constants
 */

export const APP_NAME = "Web UI";
export const APP_DESCRIPTION = "Next.js application";

// Common constants
export const PAGINATION = {
  DEFAULT_PAGE_SIZE: 10,
  MAX_PAGE_SIZE: 100,
} as const;

// Date formats
export const DATE_FORMATS = {
  SHORT: "dd/MM/yyyy",
  LONG: "dd MMMM yyyy",
  DATETIME: "dd/MM/yyyy HH:mm",
} as const;
