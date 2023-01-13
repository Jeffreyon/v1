import LinkButton from "./LinkButton";
import resumeLink from "../assets/resume-jeffrey-onuigbo.pdf";
import LinkRegular from "./LinkRegular";
import { useState } from "react";

function Navbar() {
    const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

    const toggleNavLinks = () => {
        setIsMobileNavOpen(!isMobileNavOpen);
    };

    return (
        <div>
            <div className="py-3 px-6 sm:p-3 flex justify-between items-center max-w-6xl mx-auto">
                <div>
                    <p className=" font-mono font-semibold text-xl text-slate-900">
                        jeffreyon_
                    </p>
                </div>
                <div className="hidden md:block">
                    <NavLinks />
                </div>
                <div className="md:hidden">
                    <button onClick={toggleNavLinks}>
                        {isMobileNavOpen ? "Open" : "Close"}
                    </button>
                </div>
            </div>
            <div
                className={
                    "bg-slate-50 border-y p-5 md:hidden" +
                    (isMobileNavOpen ? " hidden" : "")
                }>
                <NavLinks />
            </div>
        </div>
    );
}

function NavLinks() {
    return (
        <div className="flex flex-col md:flex-row gap-5 md:items-center w-full md:w-auto ">
            <LinkRegular label="About" linkTo="#about" />
            <LinkRegular label="Projects" linkTo="#projects" />
            <LinkRegular label="Contact" linkTo="#contact" />
            <LinkButton
                label="Grab my Resume"
                linkTo={resumeLink}
                target="_blank"
                style="outline"
            />
        </div>
    );
}

export default Navbar;
