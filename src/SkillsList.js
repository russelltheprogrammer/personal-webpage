import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRegistered } from '@fortawesome/free-solid-svg-icons';
import { faHtml5, faCss3, faJs, faReact, faBootstrap, faSass, faGithub } from '@fortawesome/free-brands-svg-icons';

const SkillsItem = ({props}) => {

    if(props){
     return ( 
        <div>
            <div className="skills-item">
                <FontAwesomeIcon icon={faHtml5} />&nbsp;HTML5&nbsp;&nbsp;&nbsp;
                <FontAwesomeIcon icon={faCss3} />&nbsp;CSS3&nbsp;&nbsp;&nbsp;
                <FontAwesomeIcon icon={faJs} />&nbsp;JavaScript (ES6)
            </div>
            <div className="skills-item">
                <FontAwesomeIcon icon={faReact} />&nbsp;ReactJS&nbsp;&nbsp;&nbsp;
                <FontAwesomeIcon icon={faBootstrap} />&nbsp;Bootstrap&nbsp;&nbsp;&nbsp;
                <FontAwesomeIcon icon={faSass} />&nbsp;SASS
            </div>
            <div className="skills-item">
                <FontAwesomeIcon icon={faGithub} />&nbsp;GIT/GITHUB&nbsp;&nbsp;&nbsp;
                <FontAwesomeIcon icon={faRegistered} />&nbsp;REDUX
            </div>
        </div>
     );
    }

    else{
        return (
            <div>
            <div className="skills-item">
                <FontAwesomeIcon icon={faHtml5} />&nbsp;HTML5
            </div>
            <div className="skills-item">
                <FontAwesomeIcon icon={faCss3} />&nbsp;CSS3
            </div>
            <div className="skills-item">
                <FontAwesomeIcon icon={faJs} />&nbsp;JavaScript (ES6)
            </div>
            <div className="skills-item">
                <FontAwesomeIcon icon={faReact} />&nbsp;ReactJS
            </div>
            <div className="skills-item">
                <FontAwesomeIcon icon={faBootstrap} />&nbsp;Bootstrap
            </div>
            <div className="skills-item">
                <FontAwesomeIcon icon={faSass} />&nbsp;SASS
            </div>
            <div className="skills-item">
                <FontAwesomeIcon icon={faGithub} />&nbsp;GIT/GITHUB
            </div>
            <div className="skills-item">
                <FontAwesomeIcon icon={faRegistered} />&nbsp;REDUX
            </div>
            </div>
        )
    }
}
 
export default SkillsItem;