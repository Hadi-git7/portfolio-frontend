import React from 'react';
import '../Projects/Projects.css';
import axios from 'axios';
import { useState, useEffect } from 'react';




function Projects() {
  
  const [projects, setProjects] = useState([]);
  const [visible, setVisible] = useState(3);

  const showMoreItems = () => {
    setVisible((prevValue) => prevValue + 3);
  }

useEffect(() => {
  const fetchProjects = async () => {
    try{
      const response = await axios.get('/api/project');
      const result = await response.data;
      setProjects(result)
    }catch(err){
      console.log(err);
    }
  }
  fetchProjects();
},[])



  return (
    <>
      <div className='project-main'>

        <h1 className='project-title'>Projects</h1>

        <hr className='project-title-hr' />

        <div className='project-images'>

          {projects && projects.slice(0, visible).map((project) => (
          
          <div className='project-images-img' key={project._id}> 
           
           
            <img src= {project.image} alt={project.title} className='image'/>
            <div className='overlay'>
              {/**put in the decription section the link of website that you want to show  */}
            <a href={ project.description} target='_blank' rel='noreferrer' className='text'>{ project.description}</a>
            <span> {project.title}</span>
           <hr className='hr'/>
           </div>
           </div>
          ))
           }

        </div>
        
        
        <button onClick={showMoreItems}>Show More</button> 
       
      </div>
       

      
    </>
  )
}

export default Projects