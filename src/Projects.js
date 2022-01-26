const Projects = () => {

const flexItems = [ "Flex Item 1", "Flex Item 2", "Flex Item 3", "Flex Item 4" ];

    return ( 
        <div id="projects">
            <div className="projects-header-container">
                <h2 className="projects-header">Russell's Projects</h2>
            </div>
                <div className="container-fluid" style={{ width: '80%' }}>
                    <div className="d-flex flex-row justify-content-center align-items-center flex-wrap">
                        
                    {flexItems.map((item, index) => (
                        <div key={index} className="col-4 text-center">{item}</div>  
                    ))}

                    </div>
                </div>
        </div>
     );
}
 
export default Projects;


/* <div id="project-grid">
//Picture of Dorian Grey
<a  href="https://codepen.io/rundownx2020/pen/MWyaQBa"
target="_blank"
rel="noreferrer noopener"
className="project-tile"
>
<img src="https://readmorebookclub.files.wordpress.com/2018/05/dorian-gray.jpg?w=656&lt;h=300&lt;crop=1" alt="Picture of Dorian Gray" />
<p>The Picture of Dorian Gray -Tribute Page
</p>
</a>
Whiskey Survey
<a  href="https://codepen.io/rundownx2020/pen/ZEWWxBQ"
target="_blank"
rel="noreferrer noopener"
className="project-tile">
<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQNeFuhZAeqZfAnBDnWQM0CGxa4Y_rfRP4CHg&lt;usqp=CAU" alt="Whiskey Survey"/>
<p>Favorite Whiskey -Survey Project
</p>
</a>
// Classic N64 Games Product Landing Page
<a  href="https://codepen.io/rundownx2020/pen/wvGojpL"
target="_blank"
rel="noreferrer noopener"
className="project-tile">
<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRzgVnopGmi8w-Re0yzil2Y_tR0jAB3MeYztA&lt;usqp=CAU" alt="Classic N64 Games"/>
<p>Classic N64 Games -Project Landing Page
</p>
</a>
</div> */