import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

function App() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")

    const navigate = useNavigate()

    const handleSubmit = async (event) => {
        event.preventDefault()
        setError("")

        if (email.trim() === "") {
            setError("Please enter your email")
            return
        }

        if (!email.includes("@")) {
            setError("Please enter a valid email address")
            return
        }
        if (password.trim() === "") {
            setError("Please enter your password")
            return
        }

        if (password.length < 6) {
            setError("Password must be at least 6 characters")
            return
        }

        try {
            const response = await axios.post(
                "http://localhost:4000/login",
                {
                    email: email,
                    password: password
                }
            )

            console.log(response.data)

            if (response.data.success) {
                navigate("/dashboard")
            }

        } catch (error) {
            console.log(error.response?.data)

            setError(
                error.response?.data?.message ||
                "Something went wrong"
            )
        }
    }

    return (
        <main className="min-h-screen bg-slate-950 flex items-center justify-center p-6">

            <section className="w-full max-w-md rounded-2xl bg-white p-8 shadow-2xl">

                <h1 className="text-center text-3xl font-bold text-slate-900">
                    Welcome to Workspace!
                </h1>

                <p className="mt-2 text-center text-slate-500">
                    Sign in to your account
                </p>

                {error && (
                    <p className="mt-6 rounded-lg bg-red-100 p-3 text-center font-medium text-red-600">
                        {error}
                    </p>
                )}

                <form
                    className="mt-8"
                    onSubmit={handleSubmit}
                >

                    <div>
                        <label className="mb-2 block font-medium text-slate-700">
                            Email
                        </label>

                        <input
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(event) =>
                                setEmail(event.target.value)
                            }
                            className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                        />
                    </div>

                    <div className="mt-5">
                        <label className="mb-2 block font-medium text-slate-700">
                            Password
                        </label>

                        <input
                            type="password"
                            placeholder="Enter your password"
                            value={password}
                            onChange={(event) =>
                                setPassword(event.target.value)
                            }
                            className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                        />
                    </div>

                    <button
                        type="submit"
                        className="mt-6 w-full rounded-lg bg-blue-600 px-4 py-3 font-semibold text-white transition hover:bg-blue-700"
                    >
                        Sign In
                    </button>

                </form>

            </section>

        </main>
    )
}

export default App