"use client"
import React from "react"

export default function Home(){
  React.useEffect(() => {

    function Redirect() {
      if(window !== undefined){
        if(window.location.pathname != "/Login" && localStorage.getItem('token') === null &&windows !== undefined){
          window.location.href = "/Login"
      }}
    }
    Redirect()
    },[])
    return(<></>)
}