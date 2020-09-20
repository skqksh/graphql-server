import auth from './auth'
import profile from './profile'
import post from './post'

export default {
  hello: (): string => 'Hello world~!',
  ...auth,
  ...profile,
  ...post,
}
