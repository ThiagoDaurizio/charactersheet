import React from 'react'

interface IProps {
  label?: string
  text: string | number
}

const CompText = ( { label, text }:IProps ) => {
  return (
    <p className='bg-slate-800 p-1 px-4 border border-slate-500 flex flex-col rounded-2xl w-fit'>
      <span className='text-amber-500 text-xs capitalize'>{label}</span>
      <span className='px-2'>{text}</span>
    </p>
  )
}

export default CompText