import React, { useEffect, useState } from "react"
import { toast } from 'react-toastify';
import { SyncOutlined } from "@ant-design/icons"
import axios from "axios"
import { Link, useNavigate } from "react-router-dom";


export const SignUp = () => {
    const navigate = useNavigate()
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        if (localStorage.getItem("token")) {
            return navigate("/")
        }
    }, [])
    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)
        try {
            await axios.post("http://localhost:9998/register", {
                firstName,
                lastName,
                email,
                password
            })

            toast.success("Registration Successful . pls login ")
            setLoading(false)
            navigate("/signIn");

        } catch (err) {
            toast.error(err.response.data)
            setLoading(false)
        }

    }


    return (
        <div className="w-full flex justify-center ">
            <div className="w-[50%] mt-20">
                <form onSubmit={(e) => handleSubmit(e)}>
                    <div className="mb-6">
                        <label htmlFor="firstName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"> FirstName</label>
                        <input type="text" placeholder="Firstname" id="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="lastName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"> LastName</label>
                        <input type="text" placeholder="LastName" id="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
                        <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="email@gmail.com" required />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your password</label>
                        <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
                    </div>

                    {/* <div className="flex items-start mb-6">
                        <div className="flex items-center h-5">
                            <input id="terms" aria-describedby="terms" type="checkbox" className="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required />
                        </div>
                        <div className="ml-3 text-sm">
                            <label htmlFor="terms" className="font-medium text-gray-900 dark:text-gray-300">I agree with the <a href="#" className="text-blue-600 hover:underline dark:text-blue-500">terms and conditions</a></label>
                        </div>
                    </div> */}
                    <button
                        type="submit"
                        disabled={!lastName || !firstName || !email || !password || loading}
                        className="text-white bg-blue-700 w-[200px] hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        {loading ? <SyncOutlined spin /> : "Register new account"}
                    </button>
                </form>
                <p className="text-center p-3">
                    Already registered?
                    <Link to="/signIn">
                        Login
                    </Link>
                </p>
            </div>

        </div>
    )
}

