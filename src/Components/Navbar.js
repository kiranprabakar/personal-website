import './Navbar.css'

function Navbar() {

    // const photo = require('../Images/hawaiiPic_Cropped.jpg');
    const headshot = require('../Images/headshot.jpg');

    return (
        <nav class="navbar background">
                <ul class="nav-list">
                    <div class="logo">
                        <img src={headshot} />
                    </div>
                    <li><a href="#Work Experience">Work Experience</a></li>
                    <li><a href="#Hobbies">Hobbies</a></li>
                    <li><a href="#Contact">Contact</a></li>
                </ul>
            </nav>
    )
}

export default Navbar;