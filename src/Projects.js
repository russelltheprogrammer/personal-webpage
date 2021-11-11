const Projects = () => {
    return ( 

        <div id="projects">
            <h2>Russell's Projects</h2>
            <div id="project-grid">
                {/* Picture of Dorian Grey */}
                <a  href="https://codepen.io/rundownx2020/pen/MWyaQBa"
                target="_blank"
                rel="noreferrer noopener"
                className="project-tile"
                >
                <img src="https://readmorebookclub.files.wordpress.com/2018/05/dorian-gray.jpg?w=656&lt;h=300&lt;crop=1" alt="Picture of Dorian Gray" />
                <p>The Picture of Dorian Gray -Tribute Page
                </p>
                </a>
                {/* Whiskey Survey */}
                <a  href="https://codepen.io/rundownx2020/pen/ZEWWxBQ"
                target="_blank"
                rel="noreferrer noopener"
                className="project-tile">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQNeFuhZAeqZfAnBDnWQM0CGxa4Y_rfRP4CHg&lt;usqp=CAU" alt="Whiskey Survey"/>
                <p>Favorite Whiskey -Survey Project
                </p>
                </a>
                {/* Classic N64 Games Product Landing Page */}
                <a  href="https://codepen.io/rundownx2020/pen/wvGojpL"
                target="_blank"
                rel="noreferrer noopener"
                className="project-tile">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRzgVnopGmi8w-Re0yzil2Y_tR0jAB3MeYztA&lt;usqp=CAU" alt="Classic N64 Games"/>
                <p>Classic N64 Games -Project Landing Page
                </p>
                </a>
            </div>
        </div>
    
     );
}
 
export default Projects;