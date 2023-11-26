"use client"

import React, { useState } from 'react';

export default function Home() {
  const [bgPosition, setBgPosition] = useState('0px 0px');
  const nandleMousMove = (evt: React.MouseEvent<HTMLButtonElement>): void =>  {
    setBgPosition(`${(window.innerWidth - evt.pageX) * 0.03}px ${(window.innerWidth - evt.pageY) * 0.03}px`);
  }
  return (
    <main onMouseMove={nandleMousMove} style={{'backgroundPosition' : bgPosition}} className="bg-[#FFE6E6] flex min-h-screen flex-col items-end p-24 bg-pink-paws">
      <p className="animate-slide font-lilita font text-8xl">MU</p>
    </main>
  )
}
