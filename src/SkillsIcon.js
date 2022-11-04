import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRegistered, faKeyboard, faM, faN, faServer } from '@fortawesome/free-solid-svg-icons';
import { faHtml5, faCss3, faJs, faReact, faBootstrap, faSass, faGithub, faNpm } from '@fortawesome/free-brands-svg-icons';

const SkillsIcon = ({props}) => {

    switch(props){
         case "JavaScript":
             return <div><FontAwesomeIcon icon={faJs} /></div>
         case "TypeScript":
               return <div><FontAwesomeIcon icon={faKeyboard} /></div>
          case "React.js":
               return  <div><FontAwesomeIcon icon={faReact} /></div>
          case "Redux":
               return  <div><FontAwesomeIcon icon={faRegistered} /></div>
          case "HTML5":
               return  <div><FontAwesomeIcon icon={faHtml5} /></div>
          case "CSS3":
               return  <div><FontAwesomeIcon icon={faCss3} /></div>
          case "Bootstrap":
               return  <div><FontAwesomeIcon icon={faBootstrap} /></div>
          case "Material UI":
               return  <div><FontAwesomeIcon icon={faM} /></div>
          case "Sass":
               return  <div><FontAwesomeIcon icon={faSass} /></div>
          case "Next.js":
               return <div><FontAwesomeIcon icon={faN} /></div>
          case "Git/GitHub":
                return  <div><FontAwesomeIcon icon={faGithub} /></div>
          case "Heroku":
               return  <div><FontAwesomeIcon icon={faServer} /></div>
          case "NPM":
               return <div><FontAwesomeIcon icon={faNpm} /></div>
         default:
             return <div></div>
        }
   }
 
export default SkillsIcon;