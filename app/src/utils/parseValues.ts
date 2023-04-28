export const parseValues = <T>(form: HTMLFormElement): T => {
  const elements = form.elements as HTMLFormControlsCollection

  const values: any = {}
  for (let i = 0; i < elements.length; i++) {
    const input = elements.item(i) as HTMLInputElement
    if (input && input.name) values[input.name] = input.value
  }

  return values as T
}
