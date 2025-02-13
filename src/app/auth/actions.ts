'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

import { createClient } from '@/src/utils/supabase/server'

import { getProfile } from '@/src/actions/profile-action'
import { Profile } from '@/src/db/schema'


export async function login(email: string, password: string) {
  const supabase = await createClient()

  const data = {
    email: email,
    password: password
  }

  const { error } = await supabase.auth.signInWithPassword(data)
  const { data: { user } } = await supabase.auth.getUser()

  if (error || user == null) {
    redirect('/error')
  }


  await getProfile(user.id).then(d => {
    const profile: Profile = d[0];

    if (profile.familyId == null) {
      revalidatePath('/settings/family', 'layout')
      redirect('/settings/family')
    } else {
      revalidatePath('/dashboard', 'layout')
      redirect('/dashboard')
    }
  });

}

export async function signup(firstName: string, lastName: string, email: string, password: string) {
  const supabase = await createClient()

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const data = {
    email: email,
    password: password,
    options: {
      data: {
        first_name: firstName,
        last_name: lastName
      }
    }
  }

  const { error } = await supabase.auth.signUp(data)

  if (error) {
    redirect('/error')
  }

  revalidatePath('/dashboard', 'layout')
  redirect('/dashboard')
}

export async function logout() {
  const supabase = await createClient()
  const { error } = await supabase.auth.signOut()

  if (error) {
    redirect('/error')
  }

  revalidatePath('/login', 'layout')
  redirect('/login')
}