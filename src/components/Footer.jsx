import LinkButton from "./LinkButton";
import IconLink from "./IconLink";
import resumeLink from "../assets/resume-jeffrey-onuigbo.pdf";

function Footer() {
    return (
        <div id="contact" className="mt-48 md:pt-48 md:mt-48 mb-16">
            <div className="text-center">
                <h1 className="text-4xl md:text-6xl font-bold mt-2">
                    Let's work together
                </h1>
                <p className="mt-6 max-w-lg mx-auto">
                    I’m currently open to new work opportunities and
                    collaborations. If you think I am a good fit for a role or
                    job, please reach out to me. Thanks
                </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 justify-center mt-10">
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
            <div className="mt-24">
                <div className="max-w-lg mx-auto">
                    <p className="text-center text-slate-500">
                        Also, you can connect with me via any of these platforms
                    </p>
                    <div className="mt-4 flex gap-4 justify-center">
                        <IconLink
                            linkTo="https://github.com/jeffreyon"
                            icon="mingcute:github-line"
                        />
                        <IconLink
                            linkTo="https://twitter.com/jeffreyon_"
                            icon="mdi:twitter"
                        />
                        <IconLink
                            linkTo="https://www.linkedin.com/in/jeffreyon/"
                            icon="mdi:linkedin"
                        />
                        <IconLink
                            linkTo="https://medium.com/@jeffreyon"
                            icon="carbon:logo-medium"
                        />
                        <IconLink
                            linkTo="https://dribbble.com/jeffreyon"
                            icon="mingcute:dribbble-line"
                        />
                    </div>
                </div>
            </div>
            <div className="mt-36 flex justify-center">
                <a
                    href="#"
                    className="text-center text-sm hover:text-indigo-600 transition-colors delay-75">
                    Designed and Built by Jeffrey Onuigbo
                </a>
            </div>
        </div>
    );
}

export default Footer;
