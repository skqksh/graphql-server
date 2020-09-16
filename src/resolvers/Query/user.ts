import { AuthenticationError } from 'apollo-server-express'
import _ from 'lodash'

import { Utils, Errors } from '@constants'
import UserService from '@service/user'

type LoginInput = {
  email: string
  password: string
}

export default {
  login: async (
    parent: undefined,
    {
      data: { email, password },
    }: {
      data: LoginInput
    }
  ): Promise<string> => {
    const encPw = Utils.HashPassword({ password })

    const user = await UserService.userByEmail({ email })

    if (_.isEmpty(user)) {
      throw new AuthenticationError(Errors.CODE.WRONG_LOGIN_INPUT)
    }

    const wrongPassword = user?.password !== encPw

    if (wrongPassword) {
      throw new AuthenticationError(Errors.CODE.WRONG_LOGIN_INPUT)
    }

    return 'good'
  },
}
