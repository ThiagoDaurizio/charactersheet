'use client'
import React, { useEffect, useState } from 'react'

type attribute = {
  label: string,
  value: number
}

interface IProps {
  label: string
  learned: boolean
  attributes: attribute[]
  attributeId: string
}

const CompSkills = ( { label, learned, attributes, attributeId }:IProps ) => {
  const [skillAttribute, set_skillAttribute] = useState<attribute>({} as attribute)

  useEffect(() => {
    const attributeToThisSkill = attributes.filter((item) => item.label === attributeId)[0]

    set_skillAttribute(attributeToThisSkill)
  }, [])

  const calculateValueMod = () => {
    const valueMod = Math.floor((skillAttribute?.value - 10) / 2)

    return valueMod
  }

  return (
    <div className="flex items-center justify-between w-[180px] relative">
      <span className={`block w-4 h-4 ${learned ? 'bg-green-500' : 'bg-slate-900'} border border-slate-400 rounded-full transform translate-x-2`}></span>
      <p className="bg-slate-800 text-xs p-4 flex-1 rounded-lg border border-slate-500">{label}</p>
      <div className="bg-slate-800 border border-slate-500 px-1 rounded-r-md justify-center items-center">
        <p className="text-xs uppercase text-center">{attributeId}</p>
        <p className="text-xs text-center text-amber-500">{calculateValueMod()}</p>
      </div>
    </div>
  )
}

export default CompSkills