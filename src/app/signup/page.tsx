
export default function Signup() {
  return(
    <div className="flex flex-col items-center justify-center overflow-hidden">

      <div className="flex-1 flex flex-col justify-center mt-7">
        <h1 className="text-purple-600 text-5xl font-bold">KOMO</h1>
      </div>

      <div className="max-w-md bg-white rounded-lg shadow-lg px-8 py-4 flex flex-col mt-8">
        <h2 className="text-gray-700 text-2xl text-center font-semibold mb-1">Create an account</h2>
        <p className="text-gray-600 text-sm text-center mb-4">It's quick and easy.</p>
        <form className="space-y-4">
          {/* First Name and Last Name */}
          <div className="flex space-x-2">
            <input
              type="text"
              placeholder="First name"
              className="w-1/2 border border-gray-300 p-2 rounded focus:outline-none focus:ring-1 focus:ring-purple-500"
            />
            <input
              type="text"
              placeholder="Last name"
              className="w-1/2 border border-gray-300 p-2 rounded focus:outline-none focus:ring-1 focus:ring-purple-500"
            />
          </div>

          {/* Email or Phone */}
          <input
            type="text"
            placeholder="Mobile number or email"
            className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-1 focus:ring-purple-500"
          />

          {/* Password */}
          <input
            type="password"
            placeholder="New password"
            className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-1 focus:ring-purple-500"
          />

          {/* Birthday */}
          <div>
            <label className="block text-gray-600 text-sm font-medium mb-2">
              Birthday
            </label>
            <div className="flex space-x-2">
              <select className="w-1/3 border border-gray-300 p-2 rounded focus:outline-none focus:ring-1 focus:ring-purple-500">
                <option>Day</option>
                {/* Add more days */}
                <option>1</option>
                <option>2</option>
              </select>
              <select className="w-1/3 border border-gray-300 p-2 rounded focus:outline-none focus:ring-1 focus:ring-purple-500">
                <option>Month</option>
                <option>January</option>
                <option>February</option>
              </select>
              <select className="w-1/3 border border-gray-300 p-2 rounded focus:outline-none focus:ring-1 focus:ring-purple-500">
                <option>Year</option>
                <option>2000</option>
                <option>2001</option>
              </select>
            </div>
          </div>

          {/* Gender */}
          <div>
            <label className="block text-gray-600 text-sm font-medium mb-2">
              Gender
            </label>
            <div className="flex space-x-4">
              <label className="flex items-center space-x-2">
                <input type="radio" name="gender" className="h-3 w-3 text-purple-600 focus:ring-purple-600"/>
                <span className="text-gray-600">Male</span>
              </label>
              <label className="flex items-center space-x-2">
                <input type="radio" name="gender" className="h-3 w-3 text-purple-600 focus:ring-purple-600"/>
                <span className="text-gray-600">Female</span>
              </label>
            </div>
          </div>

          {/* Sign Up Button */}
          <button type="submit" className="w-full bg-purple-600 text-white font-medium py-2 rounded hover:bg-purple-700 transition">Sign Up</button>
        </form>

        <p className="text-sm text-gray-500 mt-4">
          By clicking Sign Up, you agree to our Terms, Privacy Policy and
          Cookies Policy.
        </p>

        <p className="text-center mt-4">
          <a
            href="/login"
            className="text-purple-600 font-medium"
          >
            Already have an account?
          </a>
        </p>
      </div>
    </div>
  )
}