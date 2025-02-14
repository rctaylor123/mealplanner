'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

import { createClient } from '@/src/utils/supabase/server';

import { createFamily } from '@/src/actions/family-actions';
import { getProfile, updateProfile } from '@/src/actions/profile-action';
import { Profile } from '@/src/db/schema';

export async function login(email: string, password: string) {
  const supabase = await createClient();

  const creds = {
    email: email,
    password: password
  };

  const { data, error } = await supabase.auth.signInWithPassword(creds);

  if (error || data.user == null) {
    redirect('/error');
  }

  await checkFamily(data.user.id);

  revalidatePath('/', 'layout');
  redirect('/');
}

export async function signup(
  firstName: string,
  lastName: string,
  email: string,
  password: string
) {
  const supabase = await createClient();

  const newuser = {
    email: email,
    password: password,
    options: {
      data: {
        first_name: firstName,
        last_name: lastName
      }
    }
  };

  const { data, error } = await supabase.auth.signUp(newuser);

  if (error || data.user == null) {
    redirect('/error');
  }

  await checkFamily(data.user.id);

  revalidatePath('/', 'layout');
  redirect('/');
}

export async function logout() {
  const supabase = await createClient();
  const { error } = await supabase.auth.signOut();

  if (error) {
    redirect('/error');
  }

  revalidatePath('/login', 'layout');
  redirect('/login');
}

async function checkFamily(userId: string) {
  const profile: Profile | undefined = await getProfile(userId);

  if (profile && profile.familyId == null) {
    const result = await createFamily({ name: profile.lastName });
    profile.familyId = result[0].id;
    await updateProfile(profile);
  }
}
