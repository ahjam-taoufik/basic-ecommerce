import { useRouter } from 'next/router'
import React from 'react'

const Name = () => {
    const {query:{name}}=useRouter()
    console.log(name);
  return (
    <div>welcome {name}</div>
  )
}

export default Name