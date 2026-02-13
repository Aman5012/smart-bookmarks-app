import GoogleSignInButton from '@/components/GoogleSignInButton'

export default function LoginPage() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-950 text-white">
            <div className="w-full max-w-md p-8 space-y-8 bg-gray-900/50 backdrop-blur-xl rounded-2xl border border-gray-800 shadow-2xl">
                <div className="text-center">
                    <h2 className="mt-6 text-3xl font-bold tracking-tight bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
                        Smart Bookmarks
                    </h2>
                    <p className="mt-2 text-sm text-gray-400">
                        Sign in to manage your bookmarks across all devices.
                    </p>
                </div>
                <div className="mt-8 space-y-6">
                    <GoogleSignInButton className="w-full bg-white text-gray-900 hover:bg-gray-100" />
                </div>
            </div>
        </div>
    )
}
