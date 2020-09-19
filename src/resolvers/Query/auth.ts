import { AuthenticationError } from 'apollo-server-express'

import { Utils, Errors } from '@constants'
import UserService from '@service/user'
import { checkValidToken } from '@middleware/auth'
import { Context } from '@models/server'
import { User } from '@models/api'

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
    const encPw = Utils.hashPassword({ password })

    const user = await UserService.userByEmail({ email })

    if (!user) {
      throw new AuthenticationError(Errors.CODE.WRONG_LOGIN_INPUT)
    }

    const wrongPassword = user?.password !== encPw

    if (wrongPassword) {
      throw new AuthenticationError(Errors.CODE.WRONG_LOGIN_INPUT)
    }

    return Utils.signAccessToken({ user })
  },
  loginByAccessToken: checkValidToken(
    async (
      _: undefined,
      __: any,
      context: Context
    ): Promise<User | undefined> => {
      return Utils.getUserByAccessToken({
        accessToken: context.accessToken,
      })
    }
  ),
}
