const getElementById = (id: string) => {
  const element = document.getElementById(id)

  if (!element) {
    throw new Error(`Element with id ${id} not found`)
  }

  return element
}

export const getDivById = (id: string) => getElementById(id) as HTMLDivElement

export const getInputById = (id: string) =>
  getElementById(id) as HTMLInputElement

export const getButtonById = (id: string) =>
  getElementById(id) as HTMLButtonElement

export const getTextareaById = (id: string) =>
  getElementById(id) as HTMLTextAreaElement
