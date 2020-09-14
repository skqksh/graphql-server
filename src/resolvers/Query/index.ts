import user from './user'
import profile from './profile'
import post from './post'

export default {
  hello: (): string => 'Hello world~!',
  ...user,
  ...profile,
  ...post,
}
