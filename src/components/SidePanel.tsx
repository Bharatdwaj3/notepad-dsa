import AddSharpIcon from '@mui/icons-material/AddSharp';
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import InboxSharpIcon from '@mui/icons-material/InboxSharp';
import EventSharpIcon from '@mui/icons-material/EventSharp';
import ChecklistSharpIcon from '@mui/icons-material/ChecklistSharp';
import GroupSharpIcon from '@mui/icons-material/GroupSharp';


const SidePanel = () => {
  return (
    <>
      <div className="bg-amber-600 w-96 h-full relative">
        <div className="bg-slate-800 w-96 h-full  absolute">
          <div className="flex flex-col">

            <div className="bg-linear-to-b from-cyan-500 to-blue-500 h-40 w-full mb-4 relative">
              <div className=" size-40 left-0 absolute border rounded-full">
                <img src="src\assets\cat.png" className="size-full object-cover overflow-hidden" alt="Bruh!!!" />
              </div>
              <div className="  h-full w-2/3 right-0 absolute flex flex-col">
                <div className="h-1/3 w-full top-0 absolute">
                  <h3 className="font-medium font-serif ml-40 mt-8 italic">Premium</h3>
                </div>
                <div className=" h-2/3 w-full bottom-0 absolute">
                  <h3 className='ml-10 font-medium font-sans non-italic text-2xl'>Rudra Shayan</h3>
                </div>
              </div>
            </div>



            <div className="h-32 w-full mb-4 relative">
              <div className="h-full w-1/3  absolute left-0">
                <AddSharpIcon fontSize="medium" className='mt-12 ml-20'/>
              </div>
              <div id="f_blk" className=" h-full w-2/3  absolute right-0">
                <h3 className="mt-12 border-b-4  italic font-thin font-mono text-xl">Add Task</h3>
              </div>
            </div>
            
            <div className="h-32 w-full mb-4 relative">
              <div className="h-full w-1/3  absolute left-0">
                 <SearchSharpIcon fontSize="medium" className='mt-12 ml-20'/>
              </div>
              <div id="f_blk"  className= "h-full w-2/3  absolute right-0">
                <h3 className="mt-12 border-b-4  italic font-thin font-mono text-xl">Search</h3>
              </div>
            </div>
            
            <div className="h-32 w-full mb-4 relative">
              <div className="h-full w-1/3  absolute left-0">
                 <InboxSharpIcon fontSize="medium" className='mt-12 ml-20'/>
              </div>
              <div id="f_blk" className=" h-full w-2/3  absolute right-0">
                <h3 className="mt-12 border-b-4  italic font-thin font-mono text-xl">Inbox</h3></div>
            </div>
            
            <div className="h-32 w-full mb-4 relative">
              <div className="h-full w-1/3  absolute left-0">
                 <EventSharpIcon fontSize="medium" className='mt-12 ml-20'/>
              </div>
              <div id="f_blk" className=" h-full w-2/3  absolute right-0">
                <h3 className="mt-12 border-b-4  italic font-thin font-mono text-xl">Upcoming</h3>
              </div>
            </div>

            <div className="h-32 w-full mb-4 relative">
              <div className="h-full w-1/3  absolute left-0">
                 <ChecklistSharpIcon fontSize="medium" className='mt-12 ml-20'/>
              </div>
              <div id="f_blk" className=" h-full w-2/3  absolute right-0">
                <h3 className="mt-12 border-b-4  italic font-thin font-mono text-xl">Labels</h3>
              </div>
            </div>

            <div className="bg-linear-to-r from-cyan-500 to-blue-500 h-32 w-full mb-4 relative">
              <h3 className='italic font-extrabold font-mono text-2xl ml-4 mt-12 border-b-4 '>My Projects</h3>
            </div>
 


            <div className="h-32 w-full mb-4 relative">
              <div className="h-full w-1/3  absolute left-0">
                 <ChecklistSharpIcon fontSize="medium" className='mt-12 ml-20'/>
              </div>
              <div id="f_blk" className=" h-full w-2/3  absolute right-0">
                <h3 className="mt-12 border-b-4  italic font-thin font-mono text-xl">Fitness</h3>
              </div>
            </div>

              <div className="0 h-32 w-full mb-4 relative">
              <div className="h-full w-1/3  absolute left-0">
                 <ChecklistSharpIcon fontSize="medium" className='mt-12 ml-20'/>
              </div>
              <div id="f_blk" className=" h-full w-2/3  absolute right-0">
                <h3 className="mt-12 border-b-4  italic font-thin font-mono text-xl">Groceries</h3>
              </div>
            </div>


            <div className="h-32 w-full mb-4 relative">
              <div className="h-full w-1/3  absolute left-0">
                 <ChecklistSharpIcon fontSize="medium" className='mt-12 ml-20'/>
              </div>
              <div id="f_blk" className=" h-full w-2/3  absolute right-0">
                <h3 className="mt-12 border-b-4 italic font-thin font-mono text-xl">Appointments</h3>
              </div>
            </div>

            
             <div className="bg-linear-to-r from-cyan-500 to-blue-500 h-32 w-full mb-4 relative">
              <h3 className='italic font-extrabold font-mono text-2xl ml-4 mt-12 border-b-4 '>Team</h3>
            </div>

            <div className="h-32 w-full mb-4 relative">
              <div className="h-full w-1/3  absolute left-0">
                 <GroupSharpIcon fontSize="medium" className='mt-12 ml-20'/>
              </div>
              <div id="f_blk" className=" h-full w-2/3  absolute right-0">
                <h3 className="mt-12 border-b-4  italic font-thin font-mono text-xl">Team Brand</h3>
              </div>
            </div>

            <div className="h-32 w-full mb-4 relative">
              <div className="h-full w-1/3  absolute left-0">
                 <GroupSharpIcon fontSize="medium" className='mt-12 ml-20'/>
              </div>
              <div id="f_blk" className=" h-full w-2/3  absolute right-0">
                <h3 className="mt-12 border-b-4  italic font-thin font-mono text-xl">Website Update</h3>
              </div>
            </div>

            <div className="h-32 w-full mb-4 relative">
              <div className="h-full w-1/3  absolute left-0">
                 <GroupSharpIcon fontSize="medium" className='mt-12 ml-20'/>
              </div>
              <div id="f_blk" className=" h-full w-2/3  absolute right-0">
                <h3 className="mt-12 border-b-4  italic font-thin font-mono text-xl">Meeting Agenda</h3>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </>
  )
}

export default SidePanel