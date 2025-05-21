import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/head'
import { Cards } from './components/card'


function App() {
  const information = [{
    img: "./Practica1/public/img/photo1.png",
    name: "Bill Mahoney",
    text: "PRODUCT OWNER",
  }, {
    img: "./Practica1/public/img/photo2.png",
    name: "Saba Cabrera",
    text: "ART DIRECTOR",
  }, {
    img: "./Practica1/public/img/photo3.png",
    name: "Shae le",
    text: "TEACH LEAD",
  }, {
    img: "./Practica1/public/img/photo4.png",
    name: "Skylah Lu",
    text: "UX DESIGNER",
  }, {
    img: "./Practica1/public/img/photo5.png",
    name: "Grif Richards",
    text: "DEVELOPER",
  }, {
    img: "./Practica1/public/img/photo6.png",
    name: "Stan Jhon",
    text: "DEVELOPER",
  }
  ]

  return (
    <>
      <Header />
      <br />
      <main className='flex flex-col sm:justify-center sm:items-center'>
        <section className='grid grid-cols-2 sm:grid-cols-3 place-items-center sm:w-3/4 lg:w-7/8 sm:h-screen lg:place-items-center'>
          {
            information.map((element, index) => (
              <div className="max-sm:[&:nth-child(2n)]:mt-5 w-34 h-[188px] sm:[&:nth-child(3n+2)]:mt-10 lg:w-60 lg:h-80" key={index} >
                <Cards
                  img={element.img}
                  name={element.name}
                  text={element.text}
                />
              </div>
            ))
          }
        </section >
      </main >
    </>
  )
}

export default App
