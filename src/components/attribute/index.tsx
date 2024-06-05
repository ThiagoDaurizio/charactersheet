import React from 'react'

interface IProps {
  label: string,
  value: number,
}

const CompAttributes = ( { label, value }:IProps ) => {

  const calculateValueMod = () => {
    const valueMod = Math.floor((value - 10) / 2)

    return valueMod
  }

  return (
    <div className='flex flex-col items-center justify-center bg-slate-800 w-16 h-16 relative border border-slate-400 rounded-3xl'>
      <p className='text-base text-amber-500 uppercase transform -translate-x-1'>{label}</p>
      <p>{value}</p>

      <div className='flex justify-center items-center bg-slate-800 w-8 h-8 absolute -right-4 top-1/2 transform -translate-y-1/2 rounded-full p-1 border border-slate-400'>
        <p className='text-xs'>
          {calculateValueMod() > 0 ? '+' : ''}
          {calculateValueMod() !== 0 ? calculateValueMod() : ''}
        </p>
      </div>
    </div>
  )
}

export default CompAttributes