import LinkButton from "./LinkButton";
import Pill from "./Pill";
import profileImage from "../assets/profile.jpg";
import resumeLink from "../assets/resume-jeffrey-onuigbo.pdf";

function Header() {
    const techUsed = [
        "HTML/CSS",
        "JavaScript",
        "Python(Basic)",
        "ReactJS",
        "NodeJS",
        "ExpressJS",
        "Serverless Functions",
        "TailwindCSS",
        "Figma",
        "Adobe XD",
        "PhotoShop",
        "NoCode",
    ];
    const interests = [
        "Product Design",
        "Marketing",
        "Indie Hacking",
        "Writing",
        "3D Modelling & VFX",
    ];

    return (
        <div>
            <div className="flex flex-col gap-8 mt-20 md:mt-24">
                <div className="flex flex-col gap-4">
                    <p className="font-mono text-indigo-700">Hi, my name is</p>
                    <h1 className="text-4xl md:text-6xl font-bold">
                        Jeffrey Onuigbo
                    </h1>
                    <h2 className="text-4xl md:text-6xl font-bold text-slate-400">
                        I Design and Build Digital Experiences
                    </h2>
                </div>
                <p className="max-w-xl">
                    I am a UI/UX Designer and Web Developer obsessed about
                    designing, and building delightful user experiences that
                    drive the needle for tech driven businesses.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                    <LinkButton
                        target="_blank"
                        linkTo={resumeLink}
                        label="Grab my Resume"
                    />
                    <LinkButton
                        target="_blank"
                        linkTo="mailto:jeffreyon11@gmail.com"
                        label="Send me an Email"
                        style="outline"
                    />
                </div>
            </div>
            <div
                id="about"
                className="flex flex-col md:flex-row gap-8 md:gap-16 mt-32 md:pt-48 md:mt-48">
                <img
                    className=" md:w-80 md:h-96 max-w-md object-cover rounded-lg"
                    src={profileImage}
                    alt="Jeffrey Onuigbo"
                />
                <div className="mt-10 md:mt-0 flex flex-col gap-6">
                    <h3 className="font-bold text-3xl">About me</h3>
                    <p className="max-w-xl">
                        As a design developer, I can contribute to
                        cross-functional teams shipping profitable products that
                        scale, without losing context while collaborating. When
                        i'm not working, I play basketball and try various
                        random things that interest me.
                    </p>
                    <div>
                        <p className="font-semibold text-slate-600 uppercase tracking-wider text-sm">
                            Technologies and Tools I use
                        </p>
                        <div className="flex flex-wrap gap-3 mt-2">
                            {techUsed.map((tech, ii) => (
                                <Pill key={ii} label={tech} />
                            ))}
                        </div>
                    </div>
                    <div>
                        <p className="font-semibold text-slate-600 uppercase tracking-wider text-sm">
                            Interests and Experience
                        </p>
                        <div className="flex flex-wrap gap-3 mt-2">
                            {interests.map((interest, ii) => (
                                <Pill key={ii} label={interest} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
