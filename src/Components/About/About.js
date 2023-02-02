import React, {useState,useEffect} from 'react';
import '../About/About.css';
import Axios from 'axios';


function About() {
  const [about, setAbout] = useState([])
  const Request = async () => {
    try {
      const response = await  Axios.get('http://localhost:5000/api/about')
      const res = await response.data;
      console.log(res)
      setAbout(res)
    }catch(err){
      console.log(err)
    }
  }
  useEffect(() =>{
    Request()
  },[]);


  return (
    <>
    <div className='About-main' id='about'>
      <div className='About-content'>
          <div className='About-image'><img src={`http://localhost:5000/${about[0]?.image}`} /></div>

          <div className='About-text'>
          <h1 className='About-h1'>About</h1>
          <img className='hide-show' src={`http://localhost:5000/${about[0]?.image}`} />
          <div className='wrep'>
            <h3 className='About-h3'>{about[0]?.title}</h3>
            <p className='About-p'>{about[0]?.text}</p>
          </div>
          </div>
      </div>
    </div>
    </>
  )
}

export default About