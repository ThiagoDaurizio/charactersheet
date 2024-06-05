import React, { ReactNode } from 'react'

interface IProps {
  children: ReactNode
  set_isOpened: React.Dispatch<React.SetStateAction<boolean>>
}

const ModalBackground = ( {children, set_isOpened}:IProps ) => {
  return (
    <div className="fixed bg-slate-900/70 h-screen w-screen top-0 left-0 z-50 flex justify-center items-center">
      <div className="bg-slate-700 p-4 rounded-md w-[500px] max-w-[95vw] h-[540px] max-h-[600px] flex flex-col gap-4">
      <h2 className="font-bold border border-transparent border-b-amber-500 w-fit px-2 m-auto text-center">BACKGROUND</h2>
      <div  className="flex-1 overflow-y-scroll">
        {children}
      </div>
      <button
        className="self-end bg-amber-500 p-1 px-2 border border-slate-300 rounded-lg transition duration-300 hover:bg-amber-600"
        onClick={() => set_isOpened(false)}
      >
        Close
      </button>
      </div>
    </div>
  )
}

export default ModalBackground