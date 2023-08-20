import { useState } from "react";
import Layout from "../Layout/Layout";
import Modal from "../Modal/Modal";

const ScheduleClass = () => {
  const [showModal, setShowModal] = useState(false);

  const d = new Date();
  const month_names_short = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  const arr = [];

  const currDay = d.getDate();
  let highlightDay = null;

  for (let i = 1; i <= 7; i++) {
    if(i!==1){
      d.setDate(d.getDate() + 1);
    }
    arr.push(`${d.getDate()} ${month_names_short[d.getMonth()]}`);
    if(currDay === d.getDate()){
      highlightDay = "ms-1 bg-gray-600 rounded-full p-1";
    }
  }

  return (
    <Layout>
      <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table class="w-full text-sm text-left text-blue-100 dark:text-blue-100 border-separate">
          <thead class="text-xs text-white uppercase bg-blue-600 dark:text-white">
            <tr>
              <th scope="col" class="px-6 py-3">
                <span>Mon</span>
                <span className={`px-2 ${highlightDay} `}>{arr[0]}</span>
              </th>
              <th scope="col" class="px-6 py-3  ">
                <span>Tue</span>

                <span className="px-2  ">{arr[1]}</span>
              </th>
              <th scope="col" class="px-6 py-3">
                <span>Wed</span>

                <span className="px-2  ">{arr[2]}</span>
              </th>
              <th scope="col" class="px-6 py-3">
                <span>Thu</span>

                <span className="px-2  ">{arr[3]}</span>
              </th>
              <th scope="col" class="px-6 py-3">
                <span>Fri</span>
                <span className="px-2  ">{arr[4]}</span>
              </th>
              <th scope="col" class="px-6 py-3">
                <span>Sat</span>

                <span className="px-2  ">{arr[5]}</span>
              </th>
              <th scope="col" class="px-6 py-3">
                <span>Sun</span>

                <span className="px-2  ">{arr[6]}</span>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr class="bg-blue-500 border-b border-blue-400 ">
              <td
                scope="row"
                class="px-6 py-4 font-medium text-blue-50 whitespace-nowrap dark:text-blue-100m  hover:bg-[#0d1930]"
                onClick={() => setShowModal(true)}
              >
                <a href="#" class="font-medium text-white">
                  {" "}
                  7.30 to 8.30
                </a>
              </td>
              <td
                scope="row"
                class="px-6 py-4 font-medium text-blue-50 whitespace-nowrap dark:text-blue-100m  hover:bg-[#0d1930]"
                onClick={() => setShowModal(true)}
              >
                <a href="#" class="font-medium text-white">
                  {" "}
                  7.30 to 8.30
                </a>
              </td>
              <td
                scope="row"
                class="px-6 py-4 font-medium text-blue-50 whitespace-nowrap dark:text-blue-100m  hover:bg-[#0d1930]"
                onClick={() => setShowModal(true)}
              >
                <a href="#" class="font-medium text-white">
                  {" "}
                  7.30 to 8.30
                </a>
              </td>
              <td
                scope="row"
                class="px-6 py-4 font-medium text-blue-50 whitespace-nowrap dark:text-blue-100m  hover:bg-[#0d1930]"
                onClick={() => setShowModal(true)}
              >
                <a href="#" class="font-medium text-white">
                  {" "}
                  7.30 to 8.30
                </a>
              </td>
              <td
                scope="row"
                class="px-6 py-4 font-medium text-blue-50 whitespace-nowrap dark:text-blue-100m  hover:bg-[#0d1930]"
                onClick={() => setShowModal(true)}
              >
                <a href="#" class="font-medium text-white">
                  {" "}
                  7.30 to 8.30
                </a>
              </td>
              <td
                scope="row"
                class="px-6 py-4 font-medium text-blue-50 whitespace-nowrap dark:text-blue-100m  hover:bg-[#0d1930]"
                onClick={() => setShowModal(true)}
              >
                <a href="#" class="font-medium text-white">
                  {" "}
                  7.30 to 8.30
                </a>
              </td>
              <td
                scope="row"
                class="px-6 py-4 font-medium text-blue-50 whitespace-nowrap dark:text-blue-100m  hover:bg-[#0d1930]"
                onClick={() => setShowModal(true)}
              >
                <a href="#" class="font-medium text-white">
                  {" "}
                  7.30 to 8.30
                </a>
              </td>
              {/* <td class="px-6 py-4">
                    <a href="#" class="font-medium text-white hover:underline">Edit</a>
                </td> */}
            </tr>
            <tr class="bg-blue-500 border-b border-blue-400 ">
              <td
                scope="row"
                class="px-6 py-4 font-medium text-blue-50 whitespace-nowrap dark:text-blue-100m  hover:bg-[#0d1930]"
                onClick={() => setShowModal(true)}
              >
                <a href="#" class="font-medium text-white">
                  {" "}
                  7.30 to 8.30
                </a>
              </td>
              <td
                scope="row"
                class="px-6 py-4 font-medium text-blue-50 whitespace-nowrap dark:text-blue-100m  hover:bg-[#0d1930]"
                onClick={() => setShowModal(true)}
              >
                <a href="#" class="font-medium text-white">
                  {" "}
                  7.30 to 8.30
                </a>
              </td>
              <td
                scope="row"
                class="px-6 py-4 font-medium text-blue-50 whitespace-nowrap dark:text-blue-100m  hover:bg-[#0d1930]"
                onClick={() => setShowModal(true)}
              >
                <a href="#" class="font-medium text-white">
                  {" "}
                  7.30 to 8.30
                </a>
              </td>
              <td
                scope="row"
                class="px-6 py-4 font-medium text-blue-50 whitespace-nowrap dark:text-blue-100m  hover:bg-[#0d1930]"
                onClick={() => setShowModal(true)}
              >
                <a href="#" class="font-medium text-white">
                  {" "}
                  7.30 to 8.30
                </a>
              </td>
              <td
                scope="row"
                class="px-6 py-4 font-medium text-blue-50 whitespace-nowrap dark:text-blue-100m  hover:bg-[#0d1930]"
                onClick={() => setShowModal(true)}
              >
                <a href="#" class="font-medium text-white">
                  {" "}
                  7.30 to 8.30
                </a>
              </td>
              <td
                scope="row"
                class="px-6 py-4 font-medium text-blue-50 whitespace-nowrap dark:text-blue-100m  hover:bg-[#0d1930]"
                onClick={() => setShowModal(true)}
              >
                <a href="#" class="font-medium text-white">
                  {" "}
                  7.30 to 8.30
                </a>
              </td>
              <td
                scope="row"
                class="px-6 py-4 font-medium text-blue-50 whitespace-nowrap dark:text-blue-100m  hover:bg-[#0d1930]"
                onClick={() => setShowModal(true)}
              >
                <a href="#" class="font-medium text-white">
                  {" "}
                  7.30 to 8.30
                </a>
              </td>
              {/* <td class="px-6 py-4">
                    <a href="#" class="font-medium text-white hover:underline">Edit</a>
                </td> */}
            </tr>
            <tr class="bg-blue-500 border-b border-blue-400 ">
              <td
                scope="row"
                class="px-6 py-4 font-medium text-blue-50 whitespace-nowrap dark:text-blue-100m  hover:bg-[#0d1930]"
                onClick={() => setShowModal(true)}
              >
                <a href="#" class="font-medium text-white">
                  {" "}
                  7.30 to 8.30
                </a>
              </td>
              <td
                scope="row"
                class="px-6 py-4 font-medium text-blue-50 whitespace-nowrap dark:text-blue-100m  hover:bg-[#0d1930]"
                onClick={() => setShowModal(true)}
              >
                <a href="#" class="font-medium text-white">
                  {" "}
                  7.30 to 8.30
                </a>
              </td>
              <td
                scope="row"
                class="px-6 py-4 font-medium text-blue-50 whitespace-nowrap dark:text-blue-100m  hover:bg-[#0d1930]"
                onClick={() => setShowModal(true)}
              >
                <a href="#" class="font-medium text-white">
                  {" "}
                  7.30 to 8.30
                </a>
              </td>
              <td
                scope="row"
                class="px-6 py-4 font-medium text-blue-50 whitespace-nowrap dark:text-blue-100m  hover:bg-[#0d1930]"
                onClick={() => setShowModal(true)}
              >
                <a href="#" class="font-medium text-white">
                  {" "}
                  7.30 to 8.30
                </a>
              </td>
              <td
                scope="row"
                class="px-6 py-4 font-medium text-blue-50 whitespace-nowrap dark:text-blue-100m  hover:bg-[#0d1930]"
                onClick={() => setShowModal(true)}
              >
                <a href="#" class="font-medium text-white">
                  {" "}
                  7.30 to 8.30
                </a>
              </td>
              <td
                scope="row"
                class="px-6 py-4 font-medium text-blue-50 whitespace-nowrap dark:text-blue-100m  hover:bg-[#0d1930]"
                onClick={() => setShowModal(true)}
              >
                <a href="#" class="font-medium text-white">
                  {" "}
                  7.30 to 8.30
                </a>
              </td>
              <td
                scope="row"
                class="px-6 py-4 font-medium text-blue-50 whitespace-nowrap dark:text-blue-100m  hover:bg-[#0d1930]"
                onClick={() => setShowModal(true)}
              >
                <a href="#" class="font-medium text-white">
                  {" "}
                  7.30 to 8.30
                </a>
              </td>
              {/* <td class="px-6 py-4">
                    <a href="#" class="font-medium text-white hover:underline">Edit</a>
                </td> */}
            </tr>
            <tr class="bg-blue-500 border-b border-blue-400 ">
              <td
                scope="row"
                class="px-6 py-4 font-medium text-blue-50 whitespace-nowrap dark:text-blue-100m  hover:bg-[#0d1930]"
                onClick={() => setShowModal(true)}
              >
                <a href="#" class="font-medium text-white">
                  {" "}
                  7.30 to 8.30
                </a>
              </td>
              <td
                scope="row"
                class="px-6 py-4 font-medium text-blue-50 whitespace-nowrap dark:text-blue-100m  hover:bg-[#0d1930]"
                onClick={() => setShowModal(true)}
              >
                <a href="#" class="font-medium text-white">
                  {" "}
                  7.30 to 8.30
                </a>
              </td>
              <td
                scope="row"
                class="px-6 py-4 font-medium text-blue-50 whitespace-nowrap dark:text-blue-100m  hover:bg-[#0d1930]"
                onClick={() => setShowModal(true)}
              >
                <a href="#" class="font-medium text-white">
                  {" "}
                  7.30 to 8.30
                </a>
              </td>
              <td
                scope="row"
                class="px-6 py-4 font-medium text-blue-50 whitespace-nowrap dark:text-blue-100m  hover:bg-[#0d1930]"
                onClick={() => setShowModal(true)}
              >
                <a href="#" class="font-medium text-white">
                  {" "}
                  7.30 to 8.30
                </a>
              </td>
              <td
                scope="row"
                class="px-6 py-4 font-medium text-blue-50 whitespace-nowrap dark:text-blue-100m  hover:bg-[#0d1930]"
                onClick={() => setShowModal(true)}
              >
                <a href="#" class="font-medium text-white">
                  {" "}
                  7.30 to 8.30
                </a>
              </td>
              <td
                scope="row"
                class="px-6 py-4 font-medium text-blue-50 whitespace-nowrap dark:text-blue-100m  hover:bg-[#0d1930]"
                onClick={() => setShowModal(true)}
              >
                <a href="#" class="font-medium text-white">
                  {" "}
                  7.30 to 8.30
                </a>
              </td>
              <td
                scope="row"
                class="px-6 py-4 font-medium text-blue-50 whitespace-nowrap dark:text-blue-100m  hover:bg-[#0d1930]"
                onClick={() => setShowModal(true)}
              >
                <a href="#" class="font-medium text-white">
                  {" "}
                  7.30 to 8.30
                </a>
              </td>
              {/* <td class="px-6 py-4">
                    <a href="#" class="font-medium text-white hover:underline">Edit</a>
                </td> */}
            </tr>
            <tr class="bg-blue-500 border-b border-blue-400 ">
              <td
                scope="row"
                class="px-6 py-4 font-medium text-blue-50 whitespace-nowrap dark:text-blue-100m  hover:bg-[#0d1930]"
                onClick={() => setShowModal(true)}
              >
                <a href="#" class="font-medium text-white">
                  {" "}
                  7.30 to 8.30
                </a>
              </td>
              <td
                scope="row"
                class="px-6 py-4 font-medium text-blue-50 whitespace-nowrap dark:text-blue-100m  hover:bg-[#0d1930]"
                onClick={() => setShowModal(true)}
              >
                <a href="#" class="font-medium text-white">
                  {" "}
                  7.30 to 8.30
                </a>
              </td>
              <td
                scope="row"
                class="px-6 py-4 font-medium text-blue-50 whitespace-nowrap dark:text-blue-100m  hover:bg-[#0d1930]"
                onClick={() => setShowModal(true)}
              >
                <a href="#" class="font-medium text-white">
                  {" "}
                  7.30 to 8.30
                </a>
              </td>
              <td
                scope="row"
                class="px-6 py-4 font-medium text-blue-50 whitespace-nowrap dark:text-blue-100m  hover:bg-[#0d1930]"
                onClick={() => setShowModal(true)}
              >
                <a href="#" class="font-medium text-white">
                  {" "}
                  7.30 to 8.30
                </a>
              </td>
              <td
                scope="row"
                class="px-6 py-4 font-medium text-blue-50 whitespace-nowrap dark:text-blue-100m  hover:bg-[#0d1930]"
                onClick={() => setShowModal(true)}
              >
                <a href="#" class="font-medium text-white">
                  {" "}
                  7.30 to 8.30
                </a>
              </td>
              <td
                scope="row"
                class="px-6 py-4 font-medium text-blue-50 whitespace-nowrap dark:text-blue-100m  hover:bg-[#0d1930]"
                onClick={() => setShowModal(true)}
              >
                <a href="#" class="font-medium text-white">
                  {" "}
                  7.30 to 8.30
                </a>
              </td>
              <td
                scope="row"
                class="px-6 py-4 font-medium text-blue-50 whitespace-nowrap dark:text-blue-100m  hover:bg-[#0d1930]"
                onClick={() => setShowModal(true)}
              >
                <a href="#" class="font-medium text-white">
                  {" "}
                  7.30 to 8.30
                </a>
              </td>
              {/* <td class="px-6 py-4">
                    <a href="#" class="font-medium text-white hover:underline">Edit</a>
                </td> */}
            </tr>
            <tr class="bg-blue-500 border-b border-blue-400 ">
              <td
                scope="row"
                class="px-6 py-4 font-medium text-blue-50 whitespace-nowrap dark:text-blue-100m  hover:bg-[#0d1930]"
                onClick={() => setShowModal(true)}
              >
                <a href="#" class="font-medium text-white">
                  {" "}
                  7.30 to 8.30
                </a>
              </td>
              <td
                scope="row"
                class="px-6 py-4 font-medium text-blue-50 whitespace-nowrap dark:text-blue-100m  hover:bg-[#0d1930]"
                onClick={() => setShowModal(true)}
              >
                <a href="#" class="font-medium text-white">
                  {" "}
                  7.30 to 8.30
                </a>
              </td>
              <td
                scope="row"
                class="px-6 py-4 font-medium text-blue-50 whitespace-nowrap dark:text-blue-100m  hover:bg-[#0d1930]"
                onClick={() => setShowModal(true)}
              >
                <a href="#" class="font-medium text-white">
                  {" "}
                  7.30 to 8.30
                </a>
              </td>
              <td
                scope="row"
                class="px-6 py-4 font-medium text-blue-50 whitespace-nowrap dark:text-blue-100m  hover:bg-[#0d1930]"
                onClick={() => setShowModal(true)}
              >
                <a href="#" class="font-medium text-white">
                  {" "}
                  7.30 to 8.30
                </a>
              </td>
              <td
                scope="row"
                class="px-6 py-4 font-medium text-blue-50 whitespace-nowrap dark:text-blue-100m  hover:bg-[#0d1930]"
                onClick={() => setShowModal(true)}
              >
                <a href="#" class="font-medium text-white">
                  {" "}
                  7.30 to 8.30
                </a>
              </td>
              <td
                scope="row"
                class="px-6 py-4 font-medium text-blue-50 whitespace-nowrap dark:text-blue-100m  hover:bg-[#0d1930]"
                onClick={() => setShowModal(true)}
              >
                <a href="#" class="font-medium text-white">
                  {" "}
                  7.30 to 8.30
                </a>
              </td>
              <td
                scope="row"
                class="px-6 py-4 font-medium text-blue-50 whitespace-nowrap dark:text-blue-100m  hover:bg-[#0d1930]"
                onClick={() => setShowModal(true)}
              >
                <a href="#" class="font-medium text-white">
                  {" "}
                  7.30 to 8.30
                </a>
              </td>
              {/* <td class="px-6 py-4">
                    <a href="#" class="font-medium text-white hover:underline">Edit</a>
                </td> */}
            </tr>
          </tbody>
        </table>
      </div>

      <Modal showModal={showModal} closeModal={setShowModal}>
        <h2 className="border-b font-semibold">Schedule classe form</h2>
        <form className="m-1 p-2">
          <div className="ms-3">
            <label>Batch</label>
            <input className="m-2 p-1" placeholder="Enter Batch" />
          </div>

          <div className="ms-3">
            <label>Course</label>
            <input className="m-2 p-1" placeholder="Enter Course name" />

            {/* <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ml-2" type="button">Dropdown button <svg class="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
  </svg></button> */}
            {/* <!-- Dropdown menu --> */}
            {/* <div id="dropdown" class="z-10 hidden bg-black divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
    <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
      <li>
        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
      </li>
      <li>
        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
      </li>
      <li>
        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
      </li>
      <li>
        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</a>
      </li>
    </ul>
</div> */}
          </div>

          <div className="flex justify-end m-1 mt-3">
            <button className=" bg-green-900 text-white font-medium p-1 w-20 rounded mr-2">
              Submit
            </button>
            <button
              className="bg-red-600 text-white font-medium p-1 w-20 rounded"
              onClick={() => setShowModal(false)}
            >
              Cancel
            </button>
          </div>
        </form>
      </Modal>
    </Layout>
  );
};

export default ScheduleClass;
