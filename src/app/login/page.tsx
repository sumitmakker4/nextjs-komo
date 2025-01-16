
export default function Login() {
  return(
    <div className="flex flex-col items-center justify-center overflow-hidden">

      <div className="flex-1 flex flex-col justify-center mt-7">
        <h1 className="text-purple-600 text-5xl font-bold">KOMO</h1>
      </div>

      <div className="max-w-sm w-full bg-white rounded-lg shadow-lg px-8 py-4 flex flex-col mt-8">
        <h2 className="text-gray-700 text-2xl text-center font-semibold mb-4">Login</h2>
        <form className="space-y-4">
          {/* First Name and Last Name */}
          <div className="flex flex-col space-y-4">
            <input
              type="text"
              placeholder="Email"
              className="border border-gray-300 p-2 rounded focus:outline-none focus:ring-1 focus:ring-purple-500"
            />
            <input
              type="text"
              placeholder="Password"
              className="border border-gray-300 p-2 rounded focus:outline-none focus:ring-1 focus:ring-purple-500"
            />
          </div>

          {/* Sign Up Button */}
          <button type="submit" className="w-full bg-purple-600 text-white font-bold text-lg py-2 rounded hover:bg-purple-700 transition">Login</button>
        </form>

        <p className="text-center mt-4">
          <a href="/forgottenpassword" className="text-purple-600 font-medium">Forgotten Password?</a>
        </p>

        <a href="/signup" className="w-fit bg-green-600 text-white font-bold text-md py-2 px-3 rounded hover:bg-green-700 transition mt-4 mx-auto">Create new account</a>

        
      </div>
    </div>
  )
}