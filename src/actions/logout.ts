'use server'

import { signOut } from '@/auth'

export async function logOut () {
  return await signOut()
}
