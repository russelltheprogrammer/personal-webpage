import React from "react";
import Navbar from "./Navbar";
import WelcomeSection from "./WelcomeSection";


const Home = () => {

    return (
        <div>
            <Navbar />
            <WelcomeSection />

            <section id="projects">
                <h2>Russell's Projects</h2>
                <div id="project-grid">
                    {/* Picture of Dorian Grey */}
                    <a  href="https://codepen.io/rundownx2020/pen/MWyaQBa"
                    target="_blank"
                    className="project-tile"
                    >
                    <img src="https://readmorebookclub.files.wordpress.com/2018/05/dorian-gray.jpg?w=656&lt;h=300&lt;crop=1" alt="Picture of Dorian Gray" />
                    <p>The Picture of Dorian Gray -Tribute Page
                    </p>
                    </a>
                    {/* Whiskey Survey */}
                    <a  href="https://codepen.io/rundownx2020/pen/ZEWWxBQ"
                    target="_blank"
                    className="project-tile">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQNeFuhZAeqZfAnBDnWQM0CGxa4Y_rfRP4CHg&lt;usqp=CAU" alt="Whiskey Survey"/>
                    <p>Favorite Whiskey -Survey Project
                    </p>
                    </a>
                    {/* Classic N64 Games Product Landing Page */}
                    <a  href="https://codepen.io/rundownx2020/pen/wvGojpL"
                    target="_blank"
                    className="project-tile">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRzgVnopGmi8w-Re0yzil2Y_tR0jAB3MeYztA&lt;usqp=CAU" alt="Classic N64 Games"/>
                    <p>Classic N64 Games -Project Landing Page
                    </p>
                    </a>
                </div>
            </section>

            <section id="contact">
                <h3>Contact Information</h3>
                    <div id="contact-grid">
                        <a  href="https://forum.freecodecamp.org/u/rundownx3/summary"
                        target="_blank"
                        className="contact-item"
                        id="profile-link"
                        >
                        <p>FCC Profile
                        </p>
                        </a>
                        <a  href="https://github.com/russelltheprogrammer"
                        target="_blank"
                        className="contact-item"
                        id="profile-link"
                        >
                        <p>GitHub Profile
                        </p>
                        </a>
                        <a  href="mailto: russelltheprogrammer@gmail.com"
                        target="_blank"
                        className="contact-item"
                        id="profile-link"
                        >
                        <p>Send me an e-mail
                        </p>
                        </a>
                    <a  href="tel:+1234567890"
                        target="_blank"
                        className="contact-item"
                        id="profile-link"
                        >
                        <p>Call me maybe (Not a real phone number)
                        </p>
                        </a>
                    </div>
            </section>

            {/* Footer Information */}
            <div id="footer">Coded by 
                <a 
                target="_blank"
                href="https://forum.freecodecamp.org/u/rundownx3">
                Rundownx3</a> (An aspiring programmer) for FCC curriculum.
            </div>
        </div>
    )
}

export default Home;