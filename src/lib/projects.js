import resume_generator_image from "../assets/resume-generator.png";

const projects = [
    {
        projectType: "Experimental",
        title: "Resume Generator",
        description:
            "Built a form based resume generator to quickly create resumes when applying to work. You can use this application to create a resume for yourself quickly, it is built using DocxTemplater and Webpack.",
        repoLink: "https://github.com/Jeffreyon/cv-generator",
        liveLink: "http://resume-generator.surge.sh/",
        tags: ["HTML/CSS", "JavaScript", "Webpack", "DocxTemplater"],
        caseStudyLink:
            "https://jeffreyon.hashnode.dev/i-built-a-web-based-resume-generator-using-docxtemplater",
        imageUrl: resume_generator_image,
    },
    {
        projectType: "Experimental",
        title: "Keybase",
        description:
            "I built an accommodation booking platform for my finals project taking inspiration from AirBnB and Uniplaces. It was built using NodeJS & ExpressJS server rendering with Handlebars. It also handles payments with a Paystack integration",
        repoLink: "https://github.com/Jeffreyon/final-year-project",
        liveLink: "https://server-au3c.onrender.com/",
        tags: [
            "HTML/CSS",
            "JavaScript",
            "NodeJS & ExpressJS",
            "Handlebars",
            "TailwindCSS",
        ],
        imageUrl: resume_generator_image,
    },
];

export default projects;
