
import React from 'react';
import {
    Card,
    Row,
    Col,
    Icon,
    CardTitle } from 'react-materialize';


function projectObject(title, description, link, image ) {
    this.title = title;
    this.description = description;
    this.link = link;
    this.image = image;
}



let Project1 = new projectObject("Django Craigslist Viewer",
    "CraigsList Viewer - Built using Python, Django & Materialize",
    "https://sleepy-hamlet-64046.herokuapp.com/",
    "https://github.com/LeonStevens122/React-Profile/blob/master/public/craigsList.jpg?raw=true");


let Project2 = new projectObject("Webstore built with HTML, CSS & JS",
    "Webstore Built using vanilla JavaScript, with some animations",
    "https://github.com/LeonStevens122/HyperionDev-Full-Stack-WebDev-Bootcamp.git",
    "https://raw.githubusercontent.com/LeonStevens122/Personal-Website/master/data/webstore.jpg");


let Project3 = new projectObject("React Weather App",
    "Weather App, built using React.JS",
    "https://github.com/LeonStevens122/React-Weather-App.git",
    "https://raw.githubusercontent.com/LeonStevens122/React-Weather-App/master/public/screenshot.jpg");


let Project4 = new projectObject("Tetris Game using React & TypeScript",
    "Tetris Game - built using React & TypeScript",
    "https://secret-island-56752.herokuapp.com/",
    "https://upload.wikimedia.org/wikipedia/commons/7/7c/Emacs_Tetris_vector_based_detail.svg");


let Project5 = new projectObject("Wikipedia Viewer",
    "Wikipedia Viewer",
    "https://codepen.io/LeonStevens122/pen/oqRNGq",
    "https://assets.codepen.io/1691929/internal/screenshots/pens/oqRNGq.default.png?format=auto&height=720&quality=75&v=1&version=1523994210&width=1280");


let Project6 = new projectObject("iTunes Search App",
    "iTunes Search App - Built with React",
    "https://itunes-api-task21.herokuapp.com/",
    "https://store-images.s-microsoft.com/image/apps.17190.14127333176902609.89767926-caf9-4d6c-b8d6-1b7212c2aa8a.d65253a8-93d9-4f23-90ce-72103b1af6ea?mode=scale&q=90&h=1080&w=1920");

let projectList = [Project1, Project2, Project3, Project4, Project5, Project6]

class Projects extends React.Component

{
    render() {
        return (
            <div >
                <h2 >PORTFOLIO</h2>
                <Row>

            {/* loop through list of projects to create cards */}
                    
                {projectList.map((currentProject, index) => {
                              
                        return (
                            <Col m={3} s={6} >
                            <Card className="projectStyle"
                                actions={[
                                    <a key="1" href={currentProject.link}>{currentProject.title}</a>
                                ]}
                                closeIcon={<Icon>close</Icon>}
                                header={<CardTitle image={currentProject.image}></CardTitle>}
                                    revealIcon={<Icon>more_vert</Icon>}
                                >{currentProject.description}</Card>
                            </Col> )
                            })}
                </Row>
            </div>
        )
    }
}
export default Projects;

