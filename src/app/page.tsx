import { createClient } from '@/utils/supabase/server'
import { redirect } from 'next/navigation'
import { signOut } from './auth/actions'
import ClientBookmarkList from '@/components/BookmarkList'
import AddBookmarkForm from '@/components/AddBookmarkForm'


export default async function Dashboard() {
  const supabase = await createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    return redirect('/login')
  }

  const { data: bookmarks } = await supabase
    .from('bookmarks')
    .select('*')
    .eq('user_id', user.id)
    .order('created_at', { ascending: true })

  return (
    <div className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <header className="flex items-center justify-between p-6 bg-gray-900/50 backdrop-blur-xl rounded-2xl border border-gray-800">
          <div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
              My Smart Bookmarks
            </h1>
            <p className="text-sm text-gray-400">{user.email}</p>
          </div>
          <form action={signOut}>
            <button className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-800 rounded-lg transition-colors">
              Sign Out
            </button>
          </form>
        </header>

        <main className="space-y-8">
          <AddBookmarkForm />

          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-200">Your Collection</h2>
            <ClientBookmarkList initialBookmarks={bookmarks || []} userId={user.id} />
          </div>
        </main>
      </div>
    </div>
  )
}

