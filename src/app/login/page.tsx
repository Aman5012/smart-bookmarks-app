import GoogleSignInButton from '@/components/GoogleSignInButton'

export default function LoginPage() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-white transition-colors duration-300">
            <div className="w-full max-w-md p-8 space-y-8 bg-white/50 dark:bg-gray-900/50 backdrop-blur-xl rounded-2xl border border-gray-200 dark:border-gray-800 shadow-2xl">
                <div className="text-center">
                    <h2 className="mt-6 text-3xl font-bold tracking-tight bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-emerald-400 bg-clip-text text-transparent">
                        Smart Bookmarks
                    </h2>
                    <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                        Sign in to manage your bookmarks across all devices.
                    </p>
                </div>
                <div className="mt-8 space-y-6">
                    <GoogleSignInButton className="w-full bg-white dark:bg-white text-gray-900 hover:bg-gray-50 dark:hover:bg-gray-100 border border-gray-200 dark:border-transparent" />
                </div>
            </div>
        </div>
    )
}
