import { useState } from "react"

const Signup = () => {


    // const [name, setName] = useState('');
    // const [number, setNumber] = useState('');
    // const [password, setPassword] = useState('');

    const HandleSubmit = (e) =>{
        e.preventDefault();
        
        const obj = {
          name: e.target.name.value,
          number: e.target.number.value,
          password: e.target.password.value,
          userID : e.target.UserID.value
        }

        console.log(obj);
    }


  return (
    <div className="flex w-full h-screen">
      <div className="w-full flex items-center justify-center">
        <div className="bg-white px-10 py-20 rounded-3xl border-2 border-gray">
          <h1 className="text-5xl font-semibold">Welcome Back</h1>
          <p className="font-medium text-lg text-gray-500 mt-4">
            Welcome Back! Please Enter Your details
          </p>
          <form onSubmit={HandleSubmit}>
            <div className="mt-8">
              <div>
                <label className="text-lg font-medium" htmlFor="">
                  Name
                </label>
                <input
                  className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
                  type="text"
                  placeholder="Enter Your Name"
                //   value={name}
                  name="name"
                //   onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div>
                <label className="text-lg font-medium" htmlFor="">
                  Number
                </label>
                <input
                  className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
                  type="text"
                  placeholder="Enter Your Number"
                //   value={number}
                  name="number"
                //   onChange={(e) => setNumber(e.target.number)}
                />
              </div>
              <div>
                <label className="text-lg font-medium" htmlFor="">
                  UserID
                </label>
                <input
                  className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
                  type="text"
                  placeholder="Enter UserID"
                  name="UserID"
                //   value={password}
                //   onChange={(e) => setPassword(e.target.password)}
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
                  name="password"
                //   value={password}
                //   onChange={(e) => setPassword(e.target.password)}
                />
              </div>
              <div className="mt-8 flex flex-col gap-y-4">
                <button className="py-3 rounded-xl bg-violet-500 text-white text-lg font-bold">
                  Sign Up
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
export default Signup