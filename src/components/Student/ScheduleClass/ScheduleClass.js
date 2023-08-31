import { useRef, useState } from "react";
import Layout from "../../Layout/Layout";
import Modal from "../../Modal/Modal";

const ScheduleClass = () => {
  const [showModal, setShowModal] = useState(false);
  const [recurringOpt, setRecurringOpt] = useState('No repeat');

  const d = new Date();
  const month_names_short = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const arr = [];

  const currDay = d.getDate();
  let highlightDay = null;

  for (let i = 1; i <= 7; i++) {
    if (i !== 1) {
      d.setDate(d.getDate() + 1);
    }
    arr.push(`${d.getDate()} ${month_names_short[d.getMonth()]}`);
    if (currDay === d.getDate()) {
      highlightDay = "ms-1 bg-gray-600 rounded-full p-1";
    }
  }

  console.log('prabhas'+recurringOpt);
  const handleRecurringOption = (e) => {
    e.preventDefault();
    // let recurringOpt = recurringOptRef.current.value;

    // if (recurringOpt === "weekly") {
    //   setRecurrWeek(!recurrWeek);
    // }
  };

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
            <tr class="bg-slate-300 border-b border-blue-400 ">
              <td
                scope="row"
                class="px-6 py-4 font-medium text-black whitespace-nowrap dark:text-blue-100m "
              >
                <div className="flex flex-col">
                  <div>
                    <span className="font-bold">Course:</span>{" "}
                    <span className="ml-2">Math</span>
                  </div>
                  <div>
                    <span className="font-bold">Teacher:</span>{" "}
                    <span className="ml-1">Sam</span>
                  </div>
                  <div>
                    <span className="font-bold"> Chapter Name:</span>{" "}
                    <span className="ml-1">abc</span>
                  </div>
                  <div>
                    <span className="font-bold">Time Slot:</span>{" "}
                    <span className="ml-1"> 7.30 to 8.30</span>
                  </div>

                  <button
                    className="font-bold mt-2 rounded-full bg-indigo-700"
                    onClick={() => setShowModal(true)}
                  >
                    Join class
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <Modal showModal={showModal} closeModal={setShowModal}>
        <h2 className="border-b font-semibold">Schedule classe form</h2>
        <form className="m-1 p-1">
          <div className="ms-3">
            <label className="m-1">Please select recurring option:</label>
            <select
              className="dropdown focus:bg-slate-300"
              onChange={(e)=> setRecurringOpt(e.target.value)}
            >
              <option value="No repeat">No repeat</option>
              <option value="Weekly">Weekly</option>
            </select>
          </div>

          {recurringOpt === 'Weekly' && <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table class="w-full text-sm text-left text-blue-100 dark:text-blue-100 border-separate">
              <thead class="text-xs text-white uppercase bg-blue-600 dark:text-white">
                <tr>
                  <th scope="col" class="px-6 py-3">
                    <span>Mon</span>
                  </th>
                  <th scope="col" class="px-6 py-3  ">
                    <span>Tue</span>
                  </th>
                  <th scope="col" class="px-6 py-3">
                    <span>Wed</span>
                  </th>
                  <th scope="col" class="px-6 py-3">
                    <span>Thu</span>
                  </th>
                  <th scope="col" class="px-6 py-3">
                    <span>Fri</span>
                  </th>
                  <th scope="col" class="px-6 py-3">
                    <span>Sat</span>
                  </th>
                  <th scope="col" class="px-6 py-3">
                    <span>Sun</span>
                  </th>
                </tr>
              </thead>

              <tbody>
                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <td class="px-6 py-4">Active</td>
                  <td class="px-6 py-4">Active</td>
                  <td class="px-6 py-4"></td>
                  <td class="px-6 py-4">Active</td>
                  <td class="px-6 py-4">Active</td>
                  <td class="px-6 py-4">Active</td>
                  <td class="px-6 py-4">Active</td>
                </tr>
              </tbody>
            </table>
          </div>}

          <div className="flex justify-end m-1 mt-3">
            <button
              className=" bg-green-900 text-white font-medium p-1 w-20 rounded mr-2"
              onClick={handleRecurringOption}
            >
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
