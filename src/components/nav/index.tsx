import React from 'react'

interface IProps {
  menu: number
  set_menu: React.Dispatch<React.SetStateAction<number>>
  label: string
  activeId: number
}

const CompNav = ( { menu, set_menu, label, activeId }:IProps ) => {
  return (
    <button 
      className={`p-1 px-4 rounded-md transition duration-300 uppercase ${menu === activeId ? 'text-amber-500' : 'text-slate-200'} ${menu === activeId ? 'underline' : ''} underline-offset-4 hover:text-amber-500`}
      onClick={() => set_menu(activeId)}
    >
      {label}
    </button>
  )
}

export default CompNav