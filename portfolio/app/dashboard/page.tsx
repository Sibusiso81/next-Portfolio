import React from 'react'
import { redirect } from 'next/navigation'
import { createClient } from '@/lib/server'
import { logout } from '../logout/actions'
async function page() {
  const supabase = await createClient()
  const { data, error } = await supabase.auth.getUser()
  if (error || !data.user.email || data.user.email !== 'zulusibusiso81@gmail.com') {
    redirect('/Auth/Signup')
  }

  return (
    <div>{data.user.email}
    <button className='bg-white p-2' onClick={logout}>Logout</button>
    </div>
  )
}

export default page