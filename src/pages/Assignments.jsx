import { useState } from "react";
import { FaChevronDown, FaRegImage } from "react-icons/fa6";
import { CiCircleRemove } from "react-icons/ci";

const assignments = [
    {
        id:1,
        name:'Biology Assignment',
        date:'  October 15, 2024',
        form:'Form 4'
    },
    {
        id:2,
        name:'Chemistry Assignment',
        date:'October 10, 2024',
        form:'Form 3'
    },
    {
        id:3,
        name:'Kiswahili Assignment',
        date:'September 12, 2024',
        form:'Form 2'
    },
    {
        id:4,
        name:'English Assignment',
        date:'September 15, 2024',
        form:'Form 1'
    },
]

function Assignments() {
    const [file, setFile] = useState('');
    const [filePreview, setFilePreview] = useState(null);

    function handleFileUpload(e){
        setFile(e.target.files)
        setFilePreview(URL.createObjectURL(e.target.files[0]))
      }
  return (
    <div className='p-4 lg:p-20'>
        <div className='border rounded-md min-h-[200px] p-10 flex flex-col justify-between items-center '>
                        <input className="hidden" type="file" id="file" onChange={handleFileUpload}/>
                        <label htmlFor="file" className="flex items-center gap-4 cursor-pointer">
                        <FaRegImage fontSize={40}/>
                            Upload Assignment
                        </label>
                        {filePreview !== null && 
                        <div className="my-4 relative">
                            <img src={filePreview} alt="Preview" className='rounded-md object-cover size-[100px]' /> 
                            <span className="absolute -top-2 -right-6 size-6" onClick={() => setFilePreview(null)}><CiCircleRemove color="red" fontSize={24}/></span>
                        </div>
                        }
                        <button type="button" className="border border-black p-2 rounded-md w-fit">Upload</button>
        </div>
        <div>
            <p className='flex justify-between items-center my-6'>
                <span>Previously uploaded assignments</span>
                <span className="flex gap-2 items-center">All <FaChevronDown fontSize={14}/> </span>
            </p>
            <div className="md:px-4">
                {assignments.map((assignment) => (
                    <div key={assignment.id} className='flex border rounded-md items-center justify-between mb-4 p-6 hover:bg-slate-100 cursor-pointer'>
                        <p>{assignment.name} / {assignment.form}</p>
                        <p>{assignment.date}</p>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Assignments