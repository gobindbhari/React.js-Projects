import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useForm } from "react-hook-form";


function App() {
  const [count, setCount] = useState(0)

  const { register,
    handleSubmit,
    watch,
    formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);


  return (
    <>
      {/* <form className='flex flex-col border-blue-700' onSubmit={handleSubmit(onSubmit)}>
      <input type="username" {...register("username")} placeholder='Username'/>
      <input type="passward" {...register("passward")} placeholder='Passward' />
        
      <input type="submit" />
    </form> */}

      <div className="w-full h-[99vh] flex justify-center items-center bg-blue-200 ">
        <div className="flex flex-col w-fit h-auto bg-slate-100 rounded-md justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm ">

            <h2 className="mt-1 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign in to your account</h2>
          </div>

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
              <div>
                <label for="email" className="block text-sm font-medium leading-6 text-gray-900">Email address</label>
                <div className="mt-2">
                  <input  {...register("Email", { required:true })}  type="email" autocomplete="email"  className=" block w-full rounded-md border-0 px-2 py-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label for="password" className="block text-sm font-medium leading-6 text-gray-900">Password</label>
                  <div className="text-sm">
                    <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">Forgot password?</a>
                  </div>
                </div>
                <div className="mt-2">
                  <input  {...register("passward", {required:true, minLength:6, maxLength: 16 , message:"min-lemght is 6", maxLength: "max-lemght is 16"})}  type="password" autocomplete="current-password" className="block w-full rounded-md border-0 px-2 py-1  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" min />
                  {errors.username && <div className=''>  <erros className="usernamee"></erros></div>}
                </div>
              </div>

              <div>
                <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>
              </div>
            </form>

            <p className="mt-10 text-center text-sm text-gray-500">
              Not a member?
              <a href="#" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">Start a 14 day free trial</a>
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
