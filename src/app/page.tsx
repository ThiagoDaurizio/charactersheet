'use client'
import CompAttributes from "@/components/attribute";
import CompText from "@/components/text";



import dataJson from "../data/charData.json"
import { useState } from "react";
import CompImageSlider from "@/components/imageSlider";
import CompSkills from "@/components/skills";
import CompNav from "@/components/nav";
import ModalBackground from "@/components/modalBackground";

export default function Home() {
  const [data, set_data] = useState(dataJson)
  const [characterSheet, set_characterSheet] = useState(2)

  const [modalBackgroundIsOpened, set_modalBackgroundIsOpened] = useState<boolean>(false)



  console.log(data)



  return (
    <main className="flex flex-col gap-2 max-w-[1060px] m-auto">
      <div className="flex flex-wrap gap-1">
        <CompText label={'name'} text={'Faldon Wolfclaw'} />
        <CompText label={'classe'} text={'Ranger'} />
        <CompText label={'race'} text={'Half-Elf'} />
        <CompText label={'level'} text={1} />
      </div>

      <div className="flex justify-center gap-10">
        <CompNav menu={characterSheet} set_menu={set_characterSheet} label={'Stats'} activeId={1}/>
        <CompNav menu={characterSheet} set_menu={set_characterSheet} label={'Infos'} activeId={2}/>
      </div>

      {characterSheet === 1 &&(
        <div className="flex gap-6">
          <div className="flex flex-col gap-1">
            {data.attributes.map((item) => {
              return <CompAttributes label={item.label} value={item.value} />
            })}
          </div>

          <div className="grid grid-cols-3 gap-3">
            {data.skills.map((item) => {
              return <CompSkills label={item.label} learned={item.learned} attributeId={item.attributeId} attributes={data.attributes} />
            })}
          </div>
        </div>
      )}

      {characterSheet === 2 &&(
        <div className="flex gap-4">
          <div className="flex flex-col gap-4">
            <div className="flex flex-wrap gap-1">
              <CompText label={data.background.aligment.label} text={data.background.aligment.body} />
              <CompText label={data.background.past.label} text={data.background.past.body} />
              <CompText label={data.background.languages.label} text={data.background.languages.body} />
            </div>

            <div className="flex flex-col gap-1">
              <CompText label={data.background.lore.label} text={data.background.lore.body} />
              <button 
                className="self-end mr-3 text-xs text-amber-600 font-semibold transition duration-500 hover:text-amber-400"
                onClick={() => set_modalBackgroundIsOpened(true)}
              >
                See more...
              </button>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {data.background.traits.map((item) => {
                return <CompText label={item.label} text={item.body} />
              })}
            </div>
          </div>

          <CompImageSlider />
        </div>
      )}

      {modalBackgroundIsOpened &&(
        <ModalBackground set_isOpened={set_modalBackgroundIsOpened}>
          <div className="flex flex-col gap-2">
            {data.background.lore.bodyFull.map((item) => {
              return <p className="text-xs">{item}</p>
            })}
          </div>
        </ModalBackground>
      )}
    </main>
  )
}
