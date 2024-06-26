import React from 'react'
import { details} from '../Utils/expenseData';
import ExpenseCard from '../components/ExpenseCard';
function Home() {
    
  return (
    <div className='relative my-autop-5 rounded-lg shadow min-h-96 w-4/5 mt-10' >
    <div>
        <h3 className='text-black self-center font-medium px-10px'>Expenses</h3>
    </div>
    <hr className='opacity-25 mb-4'/>
    <div className="layout-container__expenses" >
        <ul className='pl-0 space-y-4 '>
        {details.map((data)=>{
            return(
                <ExpenseCard details={data}/>
            )
        })}
        </ul>
        <button className='bg-gray-800 p-1 rounded-full m-5'><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#fff"><path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z"/></svg></button>
        </div>
    </div>
  )
}

export default Home
