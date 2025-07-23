import { FaEnvelope, FaUser } from "react-icons/fa";

const SignUp = () =>{
  return(
   <div className ="flex justify-center mt-30">
    <div className="bg-[#D2E6E4] w-[85vh] h-[80vh] rounded">
    <div className="flex flex-col">
      <div className="flex justify-center text-[#FD905E] font-bold mt-15 text-[4vh]">
         <label>
            Create Account
         </label>
      </div>
      <form>
        <div className="flex justify-center mt-10">
         <div className="space-y-6">
            <div className="flex flex-col">
            <div className="flex flex-row gap-2">
               <label className="font-semibold text-gray-800 text-md">Firstname</label>
               <FaUser size={16} className="mt-0.5"/>
            </div>
            <input className="bg-gray-100 p-2 w-[70vh] mt-1 rounded-lg border border-gray-300" type="text" placeholder="Enter your firstname"/>
            </div>

            <div className="flex flex-col">
            <div className="flex flex-row gap-2">
               <label className="font-semibold text-gray-800 text-md">Surname</label>
               <FaUser size={16} className="mt-0.5"/>
            </div>
            <input className="bg-gray-100 p-2 w-[70vh] mt-1 rounded-lg border border-gray-300" type="text" placeholder="Enter your Surname"/>
            </div>
              <div className="flex flex-col">
            <div className="flex flex-row gap-2">
               <label className="font-semibold text-gray-800 text-md">Email Address</label>
               <FaEnvelope size={16} className="mt-1"/>
            </div>
            <input className="bg-gray-100 p-2 w-[70vh] mt-1 rounded-lg border border-gray-300" type="email" placeholder="Enter_your_email@gmail.com"/>
            </div>
        </div>

        </div>
      </form>
    </div>
    </div>
   </div>
  )
}
export default SignUp;