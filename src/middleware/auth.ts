import { Context } from '@models/server'
import _ from 'lodash'
import { Utils } from '@constants'

export const checkValidToken = (func: any): any => (
  ...args: any
): any => {
  const context: Context = args[2]
  if (
    _.isEmpty(context) ||
    false ===
      Utils.verifyAccessToken({ accessToken: context.accessToken })
  ) {
    return null
  }
  return func(...args)
}
