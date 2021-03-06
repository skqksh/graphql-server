import { AuthenticationError } from 'apollo-server-express'
import _ from 'lodash'

import { Utils, Errors } from '@constants'
import UserService from '@service/user'
import { User, UserCreateInput } from '@models/api'

export default {
  signUp: async (
    parent: undefined,
    { data: { name, email, password } }: { data: UserCreateInput }
  ): Promise<User> => {
    const encPw = Utils.hashPassword({ password })
    const user = await UserService.userByEmail({ email })

    if (_.some(user)) {
      throw new AuthenticationError(Errors.CODE.EXIST_DUPLICATE_EMAIL)
    }
    return await UserService.createUser({
      data: { name, email, password: encPw },
    })
  },
}
