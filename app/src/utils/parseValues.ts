export const parseValues = <T>(form: HTMLFormElement): T => {
  const elements = form.elements as HTMLFormControlsCollection

  const values: any = {}
  for (let i = 0; i < elements.length; i++) {
    const input = elements.item(i) as HTMLInputElement
    if (input && input.name) {
      values[input.name] = input.value
      continue
    }

    const text = elements.item(i) as HTMLTextAreaElement
    if (text && text.name) {
      values[text.name] = text.value
      continue
    }

    const select = elements.item(i) as HTMLSelectElement
    if (select && select.name) {
      values[select.name] = select.value
      continue
    }
  }

  return values as T
}
