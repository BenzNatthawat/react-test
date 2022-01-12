import { useState } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import { checkLogin } from './function'

const Index: NextPage = () => {
  const [signIn, setSignIn] = useState({
    username: '',
    password: ''
  })

  const handleParam = (e: any) => {
    const name = e.target.name;
    const value = e.target.value;
    setSignIn((prevState) => ({
      ...prevState,
      [name]: value
    }))
  }

  const onSubmit = () => {
    const { username, password } = signIn
    checkLogin(username, password)
  }

  return (
    <div>
      <Head>
        <title>Testing Sign In</title>
        <meta name="description" content="Testing Login" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='grid place-items-center h-screen bg-slate-100'>

        <div className="mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col w-2/4 content-center">
          <h1 className='text-4xl text-blue-500 mb-5'>
            Testing Account Sign In
          </h1>
          <div className="mb-4">
            <label className="block text-grey-darker text-sm font-bold mb-2" htmlFor="username">
              Username
            </label>
            <input name='username' className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="username" type="text" placeholder="Username" />
          </div>
          <div className="mb-4">
            <label className="block text-grey-darker text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input name='password' className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3" id="password" type="password" placeholder="******************" />
          </div>
          <div className="flex items-center justify-between">
            <button onClick={onSubmit} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
              Sign In
            </button>
          </div>
        </div>

      </main>
    </div>
  )
}

export default Index
