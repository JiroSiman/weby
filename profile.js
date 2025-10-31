const members = [
    {
        id: 1,
        name: "Jhon Mark M. Unico",
        title: "Fullstack Developer",
        image: "https://image2url.com/images/1761730868346-39d450ed-0398-4587-a08f-dc9ead766d66.png",
        description: "Jhon Mark is a versatile fullstack developer with expertise in both frontend and backend technologies. He specializes in creating scalable web applications and has a passion for clean code architecture. With years of experience in modern web development, he brings innovative solutions to complex problems.",
        skills: ["JavaScript", "React", "Node.js", "Python", "MongoDB", "Express.js", "Git", "REST APIs"]
    },
    {
        id: 2,
        name: "Mark Droeid Mendoza",
        title: "UX Designer",
        image: "https://image2url.com/images/1761746020311-2f6e967e-b58f-4fdf-b334-2241967cdadf.jpg",
        description: "Mark is a creative UX designer dedicated to enhancing user satisfaction through intuitive design and seamless user experiences. He believes in human-centered design and creates interfaces that are both beautiful and functional.",
        skills: ["User Research", "Wireframing", "Prototyping", "UI/UX Design", "Figma", "User Testing", "Design Systems"]
    },
    {
        id: 3,
        name: "Jiro Calvin S. Siman",
        title: "Full Stack Developer",
        image: "https://image2url.com/images/1761747582635-a513dfcb-4175-40c0-88e5-504d49e9b77a.png",
        description: "Jiro is a proficient full stack developer skilled in building robust web applications using modern technologies. His attention to detail and problem-solving skills make him an invaluable asset to any development team.",
        skills: ["HTML/CSS", "JavaScript", "React", "Express.js", "MySQL", "TypeScript", "Git", "Agile Development"]
    },
    {
        id: 4,
        name: "Chyzza Malou B. Edulza",
        title: "UI Designer",
        image: "https://image2url.com/images/1761747916515-6901bf32-3346-414b-b82b-6e8c17fd7bf3.png",
        description: "Chyzza is a skilled UI designer focused on creating engaging and user-friendly digital experiences. She combines aesthetics with functionality to deliver designs that users love to interact with.",
        skills: ["Figma", "Adobe XD", "UI Design", "Prototyping", "Visual Design", "Design Thinking", "User Interface"]
    },
    {
        id: 5,
        name: "Pauleen P. Pusta",
        title: "UI Designer",
        image: "https://randomuser.me/api/portraits/men/3.jpg",
        description: "Pauleen is a talented UI designer with a keen eye for aesthetics and usability. Her designs are not only visually appealing but also highly intuitive and user-friendly.",
        skills: ["Visual Design", "User Interface", "Design Systems", "Adobe Creative Suite", "Prototyping", "Brand Identity"]
    },
    {
        id: 6,
        name: "Ahr-Jhay R. Pahiculay",
        title: "UI Designer",
        image: "https://image2url.com/images/1761749364454-299fe20e-0827-4a07-a846-863aef0fc628.png",
        description: "Ahr-Jhay is a creative UI designer dedicated to crafting visually appealing and user-centric designs. He believes that great design should solve problems while delighting users.",
        skills: ["UI/UX Design", "Adobe Creative Suite", "Design Thinking", "Wireframing", "Visual Design", "User Research"]
    },
    {
        id: 7,
        name: "Ghinger Kaye B. Reyes",
        title: "Creative Director",
        image: "https://image2url.com/images/1761752008711-dc865335-f9f5-4ca6-8d1f-c6cde239a675.jpg",
        description: "Ghinger leads creative direction and ensures brand consistency across all projects. With a strategic mindset and creative vision, she guides the team toward exceptional design outcomes.",
        skills: ["Creative Strategy", "Brand Management", "Team Leadership", "Art Direction", "Project Management", "Client Relations"]
    },
    {
        id: 8,
        name: "Janeah E. Angeles",
        title: "Project Manager",
        image: "https://image2url.com/images/1761752977587-04f86ab3-507f-4a1e-85ee-a752e67cdf09.png",
        description: "Janeah manages project timelines and coordinates between teams to ensure successful delivery. Her organizational skills and attention to detail keep projects on track and teams aligned.",
        skills: ["Project Management", "Agile Methodology", "Team Coordination", "Risk Management", "Communication", "Scrum Master"]
    },
    {
        id: 9,
        name: "Robert Taylor",
        title: "Security Specialist",
        image: "https://randomuser.me/api/portraits/men/5.jpg",
        description: "Robert focuses on application security and conducts security audits to protect our systems. His expertise ensures that our applications meet the highest security standards.",
        skills: ["Cybersecurity", "Penetration Testing", "Security Protocols", "Risk Assessment", "Network Security", "Vulnerability Management"]
    },
    {
        id: 10,
        name: "Kiel Vincent F. Bunso",
        title: "Frontend Developer",
        image: "https://image2url.com/images/1761752626707-b30ca279-edc8-4ad7-a9db-f48759252a0d.png",
        description: "Kiel specializes in creating responsive and interactive user interfaces with modern web technologies. His clean code and attention to performance make applications fast and reliable.",
        skills: ["React", "Vue.js", "CSS3", "TypeScript", "Responsive Design", "Web Performance", "JavaScript ES6+"]
    },
    {
        id: 11,
        name: "Thomas Anderson",
        title: "Backend Developer",
        image: "https://randomuser.me/api/portraits/men/6.jpg",
        description: "Thomas builds robust backend systems and APIs that power our applications. His expertise in server architecture and database design ensures scalable and reliable systems.",
        skills: ["Node.js", "Python", "PostgreSQL", "REST APIs", "Database Design", "System Architecture", "Docker"]
    },
    {
        id: 12,
        name: "Emily Zhang",
        title: "UI Designer",
        image: "https://randomuser.me/api/portraits/women/6.jpg",
        description: "Emily designs intuitive and engaging user interfaces that enhance user experience. Her user-centered approach ensures that designs are both beautiful and functional.",
        skills: ["UI Design", "User Research", "Prototyping", "Figma", "Interaction Design", "Design Systems", "Usability Testing"]
    }
];

function getQueryParameter(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

function loadProfile() {
    const memberId = parseInt(getQueryParameter('id'));
    console.log('Looking for member ID:', memberId);
    
    const member = members.find(m => m.id === memberId);
    
    if (!member) {
        console.log('Member not found, redirecting...');
        window.location.href = 'member.html';
        return;
    }

    console.log('Member found:', member.name);
    
    const container = document.getElementById('profile-container');
    container.innerHTML = `
        <div class="profile-layout">
            <!-- Left Column - Profile Image & Basic Info -->
            <div class="profile-sidebar" data-aos="fade-right">
                <div class="profile-image-section">
                    <div class="profile-img-container">
                        <img src="${member.image}" alt="${member.name}" class="profile-img">
                        <div class="profile-overlay"></div>
                    </div>
                    <div class="profile-badge">CICS Member</div>
                </div>
                
                <div class="basic-info">
                    <h1 class="profile-name">${member.name}</h1>
                    <h2 class="profile-title">${member.title}</h2>
                    
                    <div class="contact-info">
                        <h3 class="section-title">Contact</h3>
                        <div class="contact-item">
                            <span class="contact-icon">📧</span>
                            <span>${member.name.toLowerCase().replace(/\s+/g, '.')}@woahwers.com</span>
                        </div>
                        <div class="contact-item">
                            <span class="contact-icon">💼</span>
                            <span>WOAHWERS Team</span>
                        </div>
                        <div class="contact-item">
                            <span class="contact-icon">🏢</span>
                            <span>CICS Department</span>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Right Column - Detailed Information -->
            <div class="profile-main" data-aos="fade-left" data-aos-delay="200">
                <div class="profile-section">
                    <h3 class="section-title">About Me</h3>
                    <p class="profile-description">${member.description}</p>
                </div>
                
                <div class="profile-section" data-aos="fade-up" data-aos-delay="400">
                    <h3 class="section-title">Skills & Expertise</h3>
                    <div class="skills-container">
                        ${member.skills.map(skill => `
                            <span class="skill-tag">${skill}</span>
                        `).join('')}
                    </div>
                </div>
                
                <div class="profile-section" data-aos="fade-up" data-aos-delay="600">
                    <h3 class="section-title">Team Contribution</h3>
                    <div class="contribution-grid">
                        <div class="contribution-item">
                            <div class="contribution-icon">🚀</div>
                            <div class="contribution-content">
                                <h4>Project Delivery</h4>
                                <p>Actively contributes to team projects and ensures timely delivery of high-quality work.</p>
                            </div>
                        </div>
                        <div class="contribution-item">
                            <div class="contribution-icon">🤝</div>
                            <div class="contribution-content">
                                <h4>Team Collaboration</h4>
                                <p>Works effectively with team members to achieve common goals and objectives.</p>
                            </div>
                        </div>
                        <div class="contribution-item">
                            <div class="contribution-icon">💡</div>
                            <div class="contribution-content">
                                <h4>Innovation</h4>
                                <p>Brings creative ideas and solutions to enhance project outcomes and team processes.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    // Update page title
    document.title = `${member.name} - WOAHWERS`;
}

// Load profile when page loads
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded, initializing profile...');
    loadProfile();
});