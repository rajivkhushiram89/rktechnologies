import React from 'react'
import { List } from 'semantic-ui-react'
import { ProjectItem } from '../ProjectsItem'


const Project1Video = () => (
  <Embed id='x4BJbGYPbVA' placeholder='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmgXA_CAgMrddxU8dl6DSmOfW6rOsfq30JEdLuOGxyF_HGZaDLsw' source='youtube' />
)
const ProjectList = ({
  projects
}) =>
  <List divided relaxed>
    {projects.map(project =>
      <ProjectItem
        key={project.objectID}
        project={project}
       
      >
        <ProjectItemHeader project={project} />
      </ProjectItem>
    )}
  </List>

const ProjectItemHeader = ({ project }) =>
<Header  as='h3' style={{ fontSize: '2em' }}>
<center>{project.title}</center>
</Header>
<Project1Video /><br/>
<React.Fragment>
<p style={{  fontSize: '1.33em' }}>
{project.content}. </p>
<ol style={{ fontSize: '1.33em' }}>
<li >{project.feature1} </li>
<li>{project.feature2}</li>
<li> {project.feature3}</li>
<li> {project.feature4} </li>
</ol>

<div style={{float:'right'}}>
<Link2 to={project.route}> 
<Button size='large'><i className='sign-in icon' />
Go to Site 
</Button></Link2></div></React.Fragment>

export default ProjectList
