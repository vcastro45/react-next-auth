'use server'

import { signIn } from '@/auth'

export async function logIn () {
  return await signIn('github')
}
