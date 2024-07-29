import React from 'react'

export default function Header() {
  return (
    <header className="relative w-full pt-[104px]">
    <div className="relative w-[78%] mx-auto flex items-center justify-between">
      <div className="flex items-center gap-[50px]">
        <span className="text-[#25A4AD] text-[22px] leading-normal capitalize">
          {' '}
          PAYER{' '}
        </span>
        <ul className="flex items-center gap-[50px]">
          <li className="text-[#313131] text-lg leading-normal capitalize cursor-pointer">
            ACCUEIL
          </li>
          <li className="text-[#313131] text-lg leading-normal capitalize cursor-pointer">
            A PROPOS
          </li>
          <li className="text-[#313131] text-lg leading-normal capitalize cursor-pointer">
            SERVICES
          </li>
          <li className="text-[#313131] text-lg leading-normal capitalize cursor-pointer">
            CONTACT
          </li>
        </ul>
      </div>
      <div className="flex items-center gap-7">
        <button className="text-[#313131] text-lg leading-normal cursor-pointer">
          Se connecter
        </button>
        <button className="border shadow-cta border-[#25A4AD] w-[152px] h-[58px] text-center text-[#25A4AD] text-lg leading-normal">
          S'inscrire
        </button>
      </div>
    </div>
    <div className="w-[130.066px] h-[130.066px] border vorder-solid border-[#25A4AD] absolute top-0 -left-[110px] bg-transparent -rotate-[19.523deg]"></div>
    <img
      src="/assets/right-top-shape.png"
      className="absolute top-0 right-0"
    />
    <img
      src="/assets/orange-shape.png"
      className="absolute bottom-[-49px] left-[38%] overflow-auto"
    />
  </header>
  )
}
