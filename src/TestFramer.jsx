import React, { useState } from 'react'
import {motion, spring} from 'framer-motion'
const TestFramer = () => {
  const [open,setOpen]=useState(false)

  const variants={
    active:(i)=>({opacity:1, x:100,
      transition:{staggerChildren:0.2,delay: i*0.3} //delaying each item animation with their index 
      // transition:{type:'spring',stiffness:2000, damping:100}
    }),
    inactive:{opacity:0},
  }
  const items=[
    "item1",
    "item2",
    "item3",
    "item4"
  ];
  return (
    <div className='course'>
   {/* <motion.div className='box' 
  //  initial={{opacity:0.5, scale:0.5}}
//    animate={{opacity:1, scale:1, x:200, y:100}} 
  //  whileHover={{opacity:1,scale:2}}
  //  whileInView={} for when in view 
   variants={variants}
   animate={open?"active":"inactive"}
  >

    </motion.div> */}
    <motion.ul initial="inactive" animate="active" variants={variants}>
      {items.map((item,i)=>(
        <motion.li variants={variants} key={item} custom={i}>{item}</motion.li>
      ))}
    </motion.ul>
    {/* <button onClick={()=>setOpen(prev=>!prev)}>Click</button> */}
    </div>
 
  )
}

export default TestFramer