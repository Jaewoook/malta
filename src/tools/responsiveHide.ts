import { breakpoints, breakpointNames } from "../theme";

export interface IProps {
  hide?: Array<Boolean>;
}

export function hiddenDown (breakpoint: string) {
  const breakpointIndex = breakpointNames.indexOf(breakpoint);
  const breakpointValue = (Number(breakpoints[breakpointIndex].match(/\d+/)[0]) - 1) + "px";
  const mediaQuery = "@media (max-width: " + breakpointValue + ") { \
    display: none; \
  }";

  return mediaQuery;
}

export function hiddenUp (breakpoint: string) {
  const breakpointIndex = breakpointNames.indexOf(breakpoint);
  const breakpointValue = breakpoints[breakpointIndex];
  const mediaQuery = "@media (min-width: " + breakpointValue + ") { \
    display: none; \
  }";

  return mediaQuery;
}