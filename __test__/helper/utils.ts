export const log = ({ msg }: { msg?: any }): void => {
  if (typeof msg === 'object') {
    msg = JSON.stringify(msg)
  }
  // eslint-disable-next-line no-console
  console.log(msg)
}

export const getUniqueValue = (): number => {
  return new Date().getTime()
}
