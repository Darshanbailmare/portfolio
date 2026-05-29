document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const navLinkItems = document.querySelectorAll('.nav-links a');

    // Toggle menu on hamburger click
    hamburger.addEventListener('click', function () {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    // Close menu on nav link click (mobile UX)
    navLinkItems.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });
});


const webProjects = [
    {
        title: "StudyHub",
        description: "A web application where student can make a list notes and can chat with study bot.",
        technologies: ["ReactJS", "Tailwind CSS", "NodeJS", "Express", "JWT", "MongoDB", "API"],
        image: "https://ik.imagekit.io/tpcpce/Screenshot%202026-05-29%20205751.png", // path to your project thumbnail
        link: "https://studyhub-1-ofa0.onrender.com",
        github: "https://github.com/ashishhumane/StudyHub.git",
    },
    {
        title: "AI Resume Analyzer",
        description: "An AI-powered platform that analyzes resumes against job descriptions, providing ATS scores, job-match percentages, missing skills, and personalized improvement suggestions using Gemini AI.",
        technologies: ["ReactJS", "Tailwind CSS", "NodeJS", "ExpressJS", "MongoDB", "JWT", "Google OAuth 2.0", "Gemini AI"],
        image: "https://ik.imagekit.io/tpcpce/Screenshot%202026-05-29%20205728.png",
        link: "https://resume-analyser-client-xi.vercel.app",
        github: "https://github.com/ashishhumane/ResumeAnalyser.git"
    },
    {
    title: "Aptitude Portal",
    description: "A scalable aptitude testing platform used by 500+ students for conducting online tests, managing student records, and processing results. Built with a microservices architecture, automated deployments, and cloud-based infrastructure.",
    technologies: ["Node.js", "Express.js", "MongoDB", "Docker", "AWS EC2", "GitHub Actions", "Amazon SES"],
    image: "https://ik.imagekit.io/tpcpce/Screenshot%202026-05-29%20205751.png",
    link: "https://tpc-aptitude-frontend-pi.vercel.app",
    github: "https://github.com/ashishhumane/tpc-aptitude-frontend.git",
}
];


const androidProjects = [

];



grid = document.querySelector('.projects-grid')
console.log(grid);

function rendorProjects(type, color) {
    // grid.textContent = ''
    color.style.backgroundColor = "#0e050f";

    type.forEach(project => {
        color.style.backgroundColor = "#341948";
        projectCard = document.createElement('div')
        projectCard.className = "project-card"

        projectImage = document.createElement('div')
        projectImage.className = 'project-image'

        imageplaceholder = document.createElement('div')
        imageplaceholder.className = 'image-placeholder'

        img = document.createElement('img')
        img.src = project.image

        // imageplaceholder.appendChild(img)
        projectImage.appendChild(imageplaceholder.appendChild(img))

        projectInfo = document.createElement('div')
        projectInfo.className = 'project-info'

        projectHeading = document.createElement('h3')
        projectHeading.textContent = project.title
        projDiscription = document.createElement('p')


        projDiscription.textContent = project.description
        projectTags = document.createElement('div')
        projectTags.className = 'project-tags'


        project.technologies.forEach(element => {
            span = document.createElement('span')
            span.textContent = element;
            projectTags.appendChild(span)
        });
        projectLinks = document.createElement('div')
        projectLinks.className = 'project-links';
        link1 = document.createElement('a')
        link1.className = "btn small-btn"
        link2 = document.createElement('a')
        link2.className = "btn small-btn secondary-btn"

        link1.textContent = 'view project'
        link2.textContent = 'source code'

        link1.href = project.link
        link2.href = project.github

        projectLinks.appendChild(link1)
        projectLinks.appendChild(link2)

        grid.appendChild(projectCard)
        projectCard.appendChild(projectImage)
        projectCard.appendChild(projectInfo)
        projectInfo.appendChild(projectHeading)
        projectInfo.appendChild(projDiscription)
        projectInfo.appendChild(projectTags)
        projectInfo.appendChild(projectLinks)
    })
}


const webbtn = document.querySelectorAll('.filter-btn')
console.log(webbtn);

webbtn.forEach(element => {
    element.addEventListener('click', () => {
        // document.getElementById("#web").click();
        grid.textContent = ''
        webbtn.forEach(btn => {
            btn.style.backgroundColor = ""; // or use original color if needed
        });

        if (element.id === "web") {
            rendorProjects(webProjects, element)

        } else if (element.id === "mobile") {
            rendorProjects(androidProjects, element)

        } else if (element.id === "all") {
            rendorProjects(webProjects, element)
            rendorProjects(androidProjects, element)
        } else {
            grid.textContent = 'no projects available'
        }
    })
})

document.getElementById("web").click();





