import './Navbar.css'

function Navbar() {

    // const photo = require('../Images/hawaiiPic_Cropped.jpg');
    const headshot = require('../Images/headshot.jpg');

    return (
        <nav class="navbar-background">
                <ul class="nav-list">
                    <div class="logo">
                        <a href="/"><img src={headshot} /></a>
                    </div>
                    <li><a href="/WorkExperience">Work Experience</a></li>
                    <li><a href="/Projects">Projects</a></li>
                    <li><a href="/Hobbies">Hobbies</a></li>
                </ul>
            </nav>
    )
}

export default Navbar;