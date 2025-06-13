import React from 'react'

function Team() {
  return (
    <main className="">
    <section className="p-[35px] bg-[#f6f6f6] mb-5">
      <nav className="text-[16px] container">
        <a href="/" className="hover:underline"> Home </a> /
        <a href ="/team" className="hover:underline"> Team </a>
      </nav>
    </section>
      <section className="py-8 px-6 text-center">
        <h1 className="text-[40px] font-bold mb-2">Creative Team</h1>
        <p className="text-[#121212CC]">Follow our team</p>
      </section>
    </main>
  )
}

export default Team