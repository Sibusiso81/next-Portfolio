
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
   <section className='w-screen h-screen flex flex-col '>
    <nav className='flex-row justify-items-end p-2'>
   <div className='flex-row'>
    <p>Welcome Back {data.user.email}</p>
    <button onClick={logout} className='bg-neutral-900/95  p-2 rounded-md'>Logout</button>
   </div>
    </nav>
   </section>
  )
}

export default page