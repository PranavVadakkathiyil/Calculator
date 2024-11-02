import React, { useState } from 'react'

const App = () => {
  const [value, setvalue] = useState('')
  return (
    
    <>
    <div>
      <form action="" className=' w-[100%] h-[100vh] flex items-center justify-center flex-col bg-slate-800'>
        <div className=' rounded-[1rem] bg-slate-400'>
        <div className='p-4 '>
          <input type="text" value={value} className=' w-[20rem] h-[5rem] text-right text-[3rem] pr-2 rounded-xl bg-black text-white' placeholder='0' />
        </div>
        <div className='p-4'>
        <div className='w-full '>
          <input type="button" value="AC" className=' bg-gray-600 border border-black w-[5rem] h-[5rem] text-[2rem] hover:bg-slate-500 ' onClick={e=>setvalue('')} />
          <input type="button" value="DE" className=' bg-gray-600 border border-black w-[5rem] h-[5rem] text-[2rem] hover:bg-slate-500  ' onClick={e=>setvalue(value.slice(0,-1))} />
          <input type="button" value="." className=' bg-gray-600 border border-black w-[5rem] h-[5rem] text-[2rem] hover:bg-slate-500' onClick={e=>setvalue(value + e.target.value)}/>
          <input type="button" value="/" className=' bg-gray-600 border border-black w-[5rem] h-[5rem] text-[2rem] hover:bg-slate-500' onClick={e=>setvalue(value + e.target.value)}/>
        </div>
        <div>
          <input type="button" value="7" className=' bg-gray-600 border border-black w-[5rem] h-[5rem] text-[2rem] hover:bg-slate-500' onClick={e=>setvalue(value + e.target.value)} />
          <input type="button" value="8" className=' bg-gray-600 border border-black w-[5rem] h-[5rem] text-[2rem] hover:bg-slate-500' onClick={e=>setvalue(value + e.target.value)}/>
          <input type="button" value="9" className=' bg-gray-600 border border-black w-[5rem] h-[5rem] text-[2rem] hover:bg-slate-500' onClick={e=>setvalue(value + e.target.value)}/>
          <input type="button" value="*" className=' bg-gray-600 border border-black w-[5rem] h-[5rem] text-[2rem] hover:bg-slate-500' onClick={e=>setvalue(value + e.target.value)}/>
        </div>
        <div>
          <input type="button" value="4" className=' bg-gray-600 border border-black w-[5rem] h-[5rem] text-[2rem] hover:bg-slate-500' onClick={e=>setvalue(value + e.target.value)}/>
          <input type="button" value="5" className=' bg-gray-600 border border-black w-[5rem] h-[5rem] text-[2rem] hover:bg-slate-500' onClick={e=>setvalue(value + e.target.value)}/>
          <input type="button" value="6" className=' bg-gray-600 border border-black w-[5rem] h-[5rem] text-[2rem] hover:bg-slate-500' onClick={e=>setvalue(value + e.target.value)}/>
          <input type="button" value="+" className=' bg-gray-600 border border-black w-[5rem] h-[5rem] text-[2rem] hover:bg-slate-500' onClick={e=>setvalue(value + e.target.value)}/>
        </div>
        <div>
          <input type="button" value="1" className=' bg-gray-600 border border-black w-[5rem] h-[5rem] text-[2rem] hover:bg-slate-500' onClick={e=>setvalue(value + e.target.value)}/>
          <input type="button" value="2" className=' bg-gray-600 border border-black w-[5rem] h-[5rem] text-[2rem] hover:bg-slate-500' onClick={e=>setvalue(value + e.target.value)}/>
          <input type="button" value="3" className=' bg-gray-600 border border-black w-[5rem] h-[5rem] text-[2rem] hover:bg-slate-500' onClick={e=>setvalue(value + e.target.value)}/>
          <input type="button" value="-" className=' bg-gray-600 border border-black w-[5rem] h-[5rem] text-[2rem] hover:bg-slate-500 ' onClick={e=>setvalue(value + e.target.value)}/>
        </div>
        <div>
          <input type="button" value="=" className=' bg-gray-600 border border-black w-[20rem] h-[5rem] text-[2rem] hover:bg-slate-500' onClick={e=>setvalue(eval(value))}/>
          
        </div>
        </div>
        </div>
      </form>
    </div>
    
    
    </>
  )
}

export default App