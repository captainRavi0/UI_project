import React from 'react'
import Section1 from './components/Section1/Section1'
import Section2 from './components/Section2/Section2'
const App = () => {
   
  const users = [
    {
    img:'https://plus.unsplash.com/premium_photo-1661769159995-f3af0089875f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d29ya2luZyUyMHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D',
    intro:'',
    tag:'Satisfied'
    },
    { 
    img:'https://images.unsplash.com/photo-1730717649068-1f46bbc45399?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE4fHx8ZW58MHx8fHx8',   
    intro:'',
    tag:'Underserved'
  },
   {
    img:'https://plus.unsplash.com/premium_photo-1661512572022-09bd87878182?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE1NHx8fGVufDB8fHx8fA%3D%3D',
    intro:'',
    tag:'Underbanked'
    },
   {
    img:'https://plus.unsplash.com/premium_photo-1661542999973-3496f144d9f1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE2Mnx8fGVufDB8fHx8fA%3D%3D',
    intro:'',
    tag:'Undercare'
    },
   {
    img:'https://plus.unsplash.com/premium_photo-1661665318707-d681aa75e137?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE2NXx8fGVufDB8fHx8fA%3D%3D',
    intro:'',
    tag:'Undercare'
    }

  ]
  return (
    <div >
      <Section1 users={users} />
      <Section2/>
      
    </div>
  )
}

export default App
