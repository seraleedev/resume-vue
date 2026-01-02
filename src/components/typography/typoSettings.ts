export type TypoTypes = Extract<
  keyof HTMLElementTagNameMap,
  'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div' | 'a' | 'caption'
>

export interface TypographyProps {
  className?: string
  isMobile?: boolean
}

/**
 * 타이포그래피 타입에 따른 Tailwind CSS 클래스 문자열을 생성합니다.
 *
 * @param type - 타이포그래피 타입
 * @param isMobile - 모바일 여부
 * @param className - Tailwind CSS 클래스
 * @returns Tailwind CSS 클래스 문자열

 */
export const getTypoClasses = (type: TypoTypes, props?: TypographyProps) => {
  const baseClasses = ['text-black-333', props?.className]

  let typeClasses: string[] = []

  switch (type) {
    case 'h1':
      typeClasses = props?.isMobile
        ? ['text-[3rem]', 'leading-[4rem]', 'font-bold']
        : ['text-[6rem]', 'leading-[7.5rem]', 'font-bold']
      break
    case 'h2':
      typeClasses = ['text-[4rem]', 'leading-[5rem]', 'font-bold']
      break
    case 'h3':
      typeClasses = props?.isMobile
        ? ['text-[1.8rem]', 'leading-[2rem]', 'font-bold']
        : ['text-[2.4rem]', 'leading-[3rem]', 'font-bold']
      break
    case 'h4':
      typeClasses = ['text-[1.8rem]', 'leading-[2.6rem]', 'font-bold']
      break
    case 'h5':
      typeClasses = ['text-[1.6rem]', 'leading-[2.2rem]', 'font-bold']
      break
    case 'h6':
      typeClasses = ['text-[1.4rem]', 'leading-[2rem]', 'font-bold']
      break
    case 'p':
      typeClasses = props?.isMobile
        ? ['text-[1.4rem]', 'leading-[2rem]', 'font-normal']
        : ['text-[1.6rem]', 'leading-[2.4rem]', 'font-normal']
      break
    case 'a':
      typeClasses = ['text-[1.6rem]', 'leading-[2.4rem]', 'no-underline', 'cursor-pointer']
      break
    default:
      typeClasses = []
  }

  return [...typeClasses, ...baseClasses].filter(Boolean).join(' ')
}
