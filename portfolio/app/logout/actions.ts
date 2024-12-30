'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

import { createClient } from '@/lib/server'

export async function logout() {
  const supabase = await createClient()

 
 const { error } = await supabase.auth.signOut()

  if (error) {
    console.log(error)
    redirect('/Auth/Error')
  }
  
 console.log('logged out')
  revalidatePath('/', 'layout')
  redirect('/')
}