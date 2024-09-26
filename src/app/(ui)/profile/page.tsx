import { redirect } from 'next/navigation';
import { user } from '@/data/user';

export default function Page() {
  // Server-side redirection using Next.js 13's `redirect` function
  redirect('/' + user.slug);
  
  // Return null or a simple placeholder as the user will be redirected
  return null;
}
