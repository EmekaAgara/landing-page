import React from "react";

const Hero = () => {
  return (
    <div className="overflow-hidden bg-[#202227] h-screen py-10 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <img
              src="./logo.svg"
              alt="Product screenshot"
              className="mb-7 md:mb-10 w-36"
            />

            <div className="lg:max-w-lg">
              {/* <h2 className="text-base font-semibold leading-7 text-indigo-600">
              Deploy faster
            </h2> */}
              <p className="mt-2 text-3xl font-semibold tracking-tight text-white sm:text-3xl">
                Welcome Back 👋
              </p>
              <p className="mt-3 text-md leading-8 text-[#8692A6]">
                We are happy to have you back
              </p>
              <div class=" pt-12 ">
                {/* <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Sign in to your account
              </h1> */}
                <form class="space-y-4 md:space-y-6" action="#">
                  <div>
                    <label
                      for="email"
                      class="block mb-2 text-sm font-medium text-[#8692A6]"
                    >
                      Full Name
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      class="bg-[#282A2F] border border-[#464b54] text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Enter Full Name"
                      required=""
                    />
                  </div>
                  <div>
                    <label
                      for="email"
                      class="block mb-2 text-sm font-medium text-[#8692A6]"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      class="bg-[#282A2F] border border-[#464b54] text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Enter Email address"
                      required=""
                    />
                  </div>
                  <div>
                    <label
                      for="password"
                      class="block mb-2 text-sm font-medium text-[#8692A6]"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      placeholder="Enter password"
                      class="bg-[#282A2F] border border-[#464b54] text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      required=""
                    />
                  </div>
                  <div class="flex items-center justify-between">
                    <div class="flex items-start">
                      <div class="flex items-center h-5">
                        <input
                          id="remember"
                          aria-describedby="remember"
                          type="checkbox"
                          class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                          required=""
                        />
                      </div>
                      <div class="ml-3 text-sm">
                        <label
                          for="remember"
                          class="text-gray-500 dark:text-gray-300"
                        >
                          I agree to terms and conditions
                        </label>
                      </div>
                    </div>
                    {/* <a
                    href="#"
                    class="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Forgot password?
                  </a> */}
                  </div>
                  <button
                    type="submit"
                    class="w-full text-white bg-[#5871EB] hover:bg-[#6078ef] focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-4 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                  >
                    Log in
                  </button>
                  <div>
                    {/* <p class="text-sm pb-5 text-center font-light text-gray-500 dark:text-gray-400">
                    or
                  </p> */}

                    <button
                      type="submit"
                      class="w-full  text-white items-center bg-black hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-4 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                    >
                      <div className="flex space-x-[25%]">
                        <img
                          src="./google.svg"
                          alt="Product screenshot"
                          className="w-[1.5rem] md:h-[1.5rem] max-w-none object-contain rounded-xl sm:w-[1.5rem] md:-ml-4 lg:-ml-0"
                          width={2432}
                          height={1442}
                        />
                        <p className="px">Continue With Google</p>
                      </div>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <img
            src="./image.png"
            alt="Product screenshot"
            className="w-[88rem] md:h-[50rem] max-w-none object-contain scale-100 hover:scale-105 transition rounded-xl sm:w-[57rem] md:-ml-4 lg:-ml-0 hidden lg:flex"
            width={2432}
            height={1442}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
