import { useBreakpoints } from '@vueuse/core'

export const useResponsive = () => {
  const breakpoints = useBreakpoints({ mobile: 0, desktop: 1024 })

  const isMobile = breakpoints.smaller('desktop')
  const isDesktop = breakpoints.greaterOrEqual('desktop')

  return { isMobile, isDesktop }
}
