import React from 'react'
import '../Projects/Projects.css'
//import axios from 'axios'
import { useState, useEffect } from 'react'
//import Rectangle from './images/Rectangle.png'


function Projects() {

  const [projects, setProjects] = useState(null)


useEffect(() => {
  const fetchProjects = async () => {
    const response = await fetch('/api/project')
    const json = await response.json()

    if(response.ok){
      setProjects(json)
    }
  }
  
  fetchProjects()
},[])



  return (
    <>
      <div className='project-main'>

        <h1 className='project-title'>Projects</h1>

        <hr className='project-title-hr' />

        <div className='project-images'>

        {projects && projects.map((project) => (
          <div className='project-images-img' key={project._id}> 
           
           <img  src= {project.image} alt={project.title}/> 
           
           <p>{ project.description}</p>
           
          
          </div> 
          ))
           }
        </div>

      </div>
       
      
    </>
  )
}

export default Projects