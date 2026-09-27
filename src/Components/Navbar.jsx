import React from 'react'
import { memo } from 'react'

const Navbar = ({talent,gettalent}) => {
    console.log("page is rendering")
  return (
    <div>
      Hello I am yasir {talent}
      <button onClick={() => {gettalent()}} > {gettalent()} </button>
    </div>
  )
}

export default memo(Navbar)
