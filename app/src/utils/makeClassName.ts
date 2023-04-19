export const makeClassName = (defaultName: string, className?: string) => {
  return defaultName + (className ? ` ${className}` : '')
}
