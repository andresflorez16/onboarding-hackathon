import { onAuthUser } from '../firebase/client'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

export const USER_STATES = {
  'NOT_LOGGED': null,
  'NOT_KNOWN': undefined
}

export default function useUser() {
  const [user, setUser] = useState(USER_STATES.NOT_KNOWN)

  const router = useRouter()

  useEffect(() => {
    onAuthUser(setUser)
  }, [])

  useEffect(() => {
    if (router.asPath === '/cuenta' || router.asPath === '/cuenta/ahorros' || router.asPath === '/cuenta/corriente' || router.asPath === '/cuenta/planes/') {
      user === USER_STATES.NOT_LOGGED && router.push('/')
    }
  }, [user])

  return user
}
