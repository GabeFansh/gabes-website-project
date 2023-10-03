import ImageStorage from "@/components/ImageStorage";
import Menu from "@/components/Menu";

const About = () => {
    return (
        <>
            <ImageStorage />
            <div className="about-bio">
                <h1>Gabriel Fanshteyn</h1>
                <p>
                    I am a student at <strong><span className="pace-uni">PACE UNIVERSTY</span></strong> studying
                    computer science hoping to specialize in Software Engineering
                    as my future career. My skills include knowledge of Java, Python,
                    HTML, CSS and Javascript with vanilla and React.
                </p>
                <p>
                    In school, I am a member of the BergCyberSec Cybersecurity Club.
                    I am president, and one of the founding members, of Anime and Manga Space, the Pace University Anime
                    and Manga club, aimed to give new students a safe place on campus to make friends and have fun.
                    I was also the Technical Aid and Advisor for the Pforzimer Honors College Honors Advisory Board, which
                    focused on making events for the honors students to get them more involved with campus. I also working on
                    the Honors Herald, the blog that is made by the Honors Advisory Board.
                </p>
            </div>
            
        </>
    );
};
export default About;