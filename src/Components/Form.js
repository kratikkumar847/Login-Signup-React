import * as React from 'react'
import { Link } from 'react-router-dom'
import Signup from './Signup'

const Form = () => {
  return (
    <div className="flex w-full h-screen">
      <div className="w-full flex items-center justify-center">
        <div className="bg-white px-10 py-20 rounded-3xl border-2 border-gray">
          <h1 className="text-5xl font-semibold">Welcome Back</h1>
          <p className="font-medium text-lg text-gray-500 mt-4">
            Welcome Back! Please Enter Your details
          </p>
          <div className="mt-8">
            <div>
              <label className="text-lg font-medium" htmlFor="">
                Number
              </label>
              <input
                className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
                type="text"
                placeholder="Enter Your Number"
              />
            </div>
            <div>
              <label className="text-lg font-medium" htmlFor="">
                Password
              </label>
              <input
                className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
                type="password"
                placeholder="Enter Your Password"
              />
            </div>
            <div className="mt-8 flex flex-col gap-y-4">
              <button className="py-3 rounded-xl bg-violet-500 text-white text-lg font-bold">
                Sign in
              </button>
            </div>
            <div className="flex mt-8 ml-8 text-lg">
              <h3>Don't have account </h3>
              <button className="font-medium text-base text-violet ml-6">
                <Link to="/Signup" >Signup</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Form