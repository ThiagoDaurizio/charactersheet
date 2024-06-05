'use client'

import React, { useState } from 'react'
import { HiChevronRight as ArrowToRight, HiChevronLeft  as ArrowToLeft } from "react-icons/hi2";

const CompImageSlider = () => {
  const [charImage, set_charImage] = useState(1)

  const maxImageSlade = 3

  const handleImageSwap = (order: boolean) => {
    if(order && charImage < maxImageSlade) {
      set_charImage(charImage + 1)
    }

    if(order && charImage == maxImageSlade) {
      set_charImage(1)
    }

    if(!order && charImage > 1) {
      set_charImage(charImage - 1)
    }

    if(!order && charImage === 1) {
      set_charImage(maxImageSlade)
    }
  }

  return (
    <div className="w-[250px] h-[350px] flex-shrink-0 overflow-hidden relative border border-slate-400 rounded-lg bg-slate-400">
              <img src={`/character_${charImage}.png`} className="object-cover w-full h-full transform -translate-y-5"/>

              <div className="absolute z-10 bottom-6 flex justify-center gap-8 w-full">
                <button 
                  onClick={() => handleImageSwap(false)} 
                  type={'button'}
                  className="text-4xl"
                >
                    <ArrowToLeft />
                </button>
                <button 
                  onClick={() => handleImageSwap(true)} 
                  type={'button'}
                  className="text-4xl"
                >
                  <ArrowToRight />
                </button>
              </div>
          </div>
  )
}

export default CompImageSlider