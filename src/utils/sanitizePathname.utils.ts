/**
 *
 * @param pathname string retrieved from Astro.url.pathname or window.location.pathname
 * @returns `pathname` without the trailing '/' character, except for the root path '/'
 */
export function sanitizePathname(pathname: string) {
  if (pathname.length > 1) return pathname.slice(0, -1);
  return pathname;
}
