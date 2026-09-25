import { useNavigate } from "react-router-dom"

function Dashboard() {

    const navigate = useNavigate()

    const handleLogout = () => {
        navigate("/")
    }
    return (

        <main className="min-h-screen bg-slate-950 px-6 py-8 text-white">

            <header className="mx-auto flex max-w-6xl items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold tracking-wide">  Sagaflow
                    </h1>
   <p className="text-sm text-slate-400"> Secure workspace</p>
                </div>
<button onClick={handleLogout} className="rounded-lg border border-slate-700 px-5 py-2 font-medium text-slate-200 transition hover:bg-slate-800">
                    Logout
                </button>
            </header>
            <section className="mx-auto mt-16 max-w-6xl">
                <div className="rounded-3xl border border-blue-500/20 bg-gradient-to-br from-blue-600/20 via-slate-900 to-purple-600/20 p-10 shadow-2xl">

                    <h2 className="text-4xl font-extrabold tracking-tight">  Welcome!   </h2>

                    <p className="mt-3 text-xl text-slate-300"> You have successfully logged in.</p>\
                    <p className="mt-2 text-slate-400"> Your secure workspace is ready to use.  </p>
                </div>
                <div className="mt-8 grid gap-5 md:grid-cols-2">

                    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 shadow-lg">

                        <p className="text-sm text-slate-400"> Account </p>
                        <h3 className="mt-2 text-xl font-bold">  Naveen </h3>

                        <p className="mt-1 text-sm text-slate-500"> Logged-in user  </p>

                    </div>

                    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 shadow-lg">
                        <p className="text-sm text-slate-400"> Authentication
                        </p>
                        <div className="mt-3 flex items-center gap-2">
                            <span className="h-3 w-3 rounded-full bg-green-400"></span>

                            <h3 className="font-bold text-green-400">Authenticated
                            </h3>

                        </div>

                        <p className="mt-2 text-sm text-slate-500">
                            Your session is active.
                        </p>

                    </div>

                </div>

            </section>

        </main>
    )
}

export default Dashboard