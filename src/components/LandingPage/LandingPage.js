import Link from "next/link";
import React from "react";

const LandingPage = () => {
  return (
    <div>
      <div className="bg-gray-400 w-100 h-80">
        {/* <h1 className="p-20 ms-50"> Sam Classes</h1> */}
      </div>

      <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mt-10 m-5">
        <a href="#">
          <img
            class="rounded-t-lg"
            src="https://www.onlinesamclasses.in/static/Assets/courselog/images/courses/physics-2nd-pu-2024.jpg"
            alt=""
          />
        </a>

        <div class="p-5">
          <a href="#" className="flex justify-between ">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Physics
            </h5>
            <h3 class="mb-2 text-1xl font-bold tracking-tight text-gray-900 dark:text-white">
            ₹ 1000
            </h3>
          </a>
         
          <a
            href="#"
            class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Know more
            <svg
              class="w-3.5 h-3.5 ml-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
