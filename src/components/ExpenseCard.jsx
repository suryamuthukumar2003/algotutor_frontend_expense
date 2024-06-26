import React from 'react'

function ExpenseCard({details}) {
    const monthNames = [
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
  return (
    
        
          <li className="flex py-3 px-4 bg-gray-300 mb-20px rounded-md  shadow-md justify-between">
            <div className="flex justify-between space-x-7">
              <div className="flex flex-col items-center bg-white px-4 rounded-lg shadow-lg">
                <div className="month">
                  {monthNames[new Date(details.date).getMonth()]}
                </div>
                <div className="day">{new Date(details.date).getDate()}</div>
              </div>
              <div className="flex items-center space-x-6">
                <h3 className="title">{details.title}</h3>
                <div className='flex space-x-2 text-green-600 px-2 rounded-full items-center'>

                <span className={`${details.type===1 ? "text-red-500":"text-green-600"}`}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z" />
</svg>
</span>
                <span className={`text-sm font-semibold ${details.type===1 ? "text-red-500":"text-green-600"}`}>
                  {details.type === 1 ? "Credit" : "Debit"}
                </span>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-6">
              <div className="pill">${details.currency}</div>
              <button className="flex items-center border border-green-700 p-1 rounded-lg shadow-xl bg-green-700 text-white space-x-1">
                <span ><svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
  <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
</svg>
</span>
                <span className="material-icons edit">Edit</span>
              </button>
              <button className="flex items-center border border-red-700 text-white bg-red-700 p-1 rounded-lg shadow-lg space-x-1">
                <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
  <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
</svg>
</span>
                <span className="material-icons delete">Delete</span>
              </button>
            </div>
          </li>
        

  )
}

export default ExpenseCard;
