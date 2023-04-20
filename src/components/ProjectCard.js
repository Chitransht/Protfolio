import React from 'react'
import "./ProjectCardStyle.css"
import proj from "../images/proj1.jpg"
import { NavLink } from 'react-router-dom'

const ProjectCard = () => {
  return (
    <div className='workcard'>
      <h1 className='project-header'>Projects</h1>
      <div className='project-container'>
      <div className='project-card'>
        <img src={proj} alt="image" />
        <h2 className='project-title'>Todo List</h2>
        <div className='pro-details' >
            <p>To-Do List project is an application specially built to keep track of errands or tasks that need to be done. This application will be like a task keeper where the user would be able to enter the tasks that they need to do. Once they are done with their tasks they can also remove them from the list.</p>
            <div className='pro-btn'>
                <NavLink to="https://63f0ff53464f7c283fe9fe3e--cool-mousse-e693e2.netlify.app/" className="btn">VIEW</NavLink>
                <NavLink to="" className="btn">SOURCE</NavLink>
            </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default ProjectCard
