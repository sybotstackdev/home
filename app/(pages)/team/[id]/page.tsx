"use client"
import React from 'react'
import Container from '../../../components/container/Container'
import Image from 'next/image'
import { Linkedin, Mail, Globe, ArrowLeft, MapPin, Award, Briefcase, BookOpen, Users, Calendar, Star, Code, Zap } from 'lucide-react'
import Link from 'next/link'
import { motion } from 'framer-motion'

// Team data - in a real app, this would come from an API or database
const teamData = [
    {
        id: "yash-kumar",
        name: "Yash Kumar",
        position: "Chief Executive Officer",
        image: "/images/managers/yash.webp",
        bio: "Yash is a seasoned full-stack developer and business leader with 15+ years of experience in scaling tech ventures and leading digital strategy.",
        linkedin: "https://linkedin.com/in/yash-kumar",
        email: "yash@sybotstack.com",
        website: "https://sybotstack.com",
        location: "Mumbai, India",
        experience: "15+ years",
        education: "B.Tech in Computer Science, IIT Bombay",
        expertise: ["Business Strategy", "Full-Stack Development", "Team Leadership", "Product Vision", "Digital Transformation"],
        achievements: [
            "Led 3 successful tech startups to acquisition",
            "Managed teams of 100+ developers",
            "Reduced operational costs by 40%",
            "Increased client satisfaction to 98%"
        ],
        currentProjects: [
            "Enterprise Digital Transformation",
            "AI-Powered Analytics Platform",
            "Cloud Migration Strategy"
        ],
        certifications: [
            "AWS Solutions Architect",
            "Google Cloud Professional",
            "PMP Certified",
            "Scrum Master"
        ],
        languages: ["English", "Hindi", "Spanish"],
        hobbies: ["Reading Tech Books", "Playing Chess", "Traveling", "Mentoring Startups"],
        skills: ["JavaScript", "React", "Node.js", "Python", "AWS", "Docker", "Kubernetes"],
        contributions: ["Open Source Projects", "Tech Community Leadership", "Startup Mentoring", "Industry Speaking"]
    },
    {
        id: "shubham-sharma",
        name: "Shubham Sharma",
        position: "Chief Technology Officer",
        image: "/images/managers/shubham.png",
        bio: "Shubham is a full-stack engineer and cloud expert who leads the company's technical vision, infrastructure, and product innovation.",
        linkedin: "https://linkedin.com/in/shubham-sharma",
        email: "shubham@sybotstack.com",
        website: "https://sybotstack.com",
        location: "Delhi, India",
        experience: "12+ years",
        education: "M.Tech in Software Engineering, IIT Delhi",
        expertise: ["Cloud Architecture", "DevOps", "System Design", "Technical Leadership", "Innovation"],
        achievements: [
            "Architected 50+ scalable systems",
            "Reduced deployment time by 80%",
            "Implemented CI/CD pipelines",
            "Led cloud migration for 20+ enterprises"
        ],
        currentProjects: [
            "Microservices Architecture",
            "DevOps Automation",
            "Security Infrastructure"
        ],
        certifications: [
            "Kubernetes Administrator",
            "Docker Certified Associate",
            "Azure Solutions Architect",
            "Terraform Associate"
        ],
        languages: ["English", "Hindi", "German"],
        hobbies: ["Open Source Contribution", "Tech Blogging", "Hiking", "Photography"],
        skills: ["Python", "Go", "Kubernetes", "Docker", "AWS", "Azure", "Terraform"],
        contributions: ["Kubernetes Community", "DevOps Best Practices", "Cloud Architecture", "Technical Writing"]
    },
    {
        id: "vivek-kaler",
        name: "Vivek Kaler",
        position: "Full Stack Developer",
        image: "/images/managers/yash.webp",
        bio: "Vivek is a skilled full-stack developer with expertise in building modern web applications using cutting-edge technologies and best practices.",
        linkedin: "https://linkedin.com/in/vivek-kaler",
        email: "vivek@sybotstack.com",
        website: "https://sybotstack.com",
        location: "Chandigarh, India",
        experience: "8+ years",
        education: "B.Tech in Computer Science, PEC University",
        expertise: ["Full Stack Development", "Frontend Development", "Backend Development", "Web Applications", "API Development"],
        achievements: [
            "Built 50+ responsive web applications",
            "Improved application performance by 60%",
            "Implemented modern UI/UX designs",
            "Reduced development time by 45%"
        ],
        currentProjects: [
            "E-commerce Platform Development",
            "Real-time Chat Application",
            "Dashboard Analytics System"
        ],
        certifications: [
            "React Developer Certification",
            "Node.js Developer",
            "MongoDB Developer",
            "AWS Developer Associate"
        ],
        languages: ["English", "Punjabi", "Hindi"],
        hobbies: ["Web Development", "UI/UX Design", "Open Source Projects", "Tech Blogging"],
        skills: ["JavaScript", "React", "Next.js", "Node.js", "Tailwind CSS", "HTML", "CSS", "MongoDB", "Express.js"],
        contributions: ["Open Source Projects", "Web Development Community", "Code Reviews", "Technical Blogging"]
    },
    {
        id: "shubham-chanouria",
        name: "Shubham Chanouria",
        position: "Full Stack Developer",
        image: "/images/managers/yash.webp",
        bio: "Shubham is a full-stack developer with deep knowledge of modern web technologies and cloud-native development practices.",
        linkedin: "https://linkedin.com/in/shubham-chanouria",
        email: "shubham.chanouria@sybotstack.com",
        website: "https://sybotstack.com",
        location: "Jaipur, India",
        experience: "9+ years",
        education: "B.Tech in Information Technology, MNIT Jaipur",
        expertise: ["Full Stack Development", "Frontend Development", "Backend Development", "Web Applications", "Cloud Integration"],
        achievements: [
            "Developed 60+ responsive web applications",
            "Improved application performance by 70%",
            "Implemented modern UI/UX designs",
            "Led development of 15+ enterprise applications"
        ],
        currentProjects: [
            "Enterprise Web Application",
            "Real-time Dashboard System",
            "Mobile-First Web Platform"
        ],
        certifications: [
            "React Developer Certification",
            "Node.js Developer",
            "MongoDB Developer",
            "AWS Developer Associate"
        ],
        languages: ["English", "Rajasthani", "Hindi"],
        hobbies: ["Web Development", "UI/UX Design", "Open Source Projects", "Tech Conferences"],
        skills: ["JavaScript", "React", "Next.js", "Node.js", "Tailwind CSS", "HTML", "CSS", "MongoDB", "Express.js", "AWS"],
        contributions: ["Open Source Projects", "Web Development Community", "Code Reviews", "Technical Speaking"]
    },
    {
        id: "rajesh-kumar",
        name: "Rajesh Kumar",
        position: "Security Specialist",
        image: "/images/managers/yash.webp",
        bio: "Rajesh is a cybersecurity expert specializing in threat detection, incident response, and security architecture design.",
        linkedin: "https://linkedin.com/in/rajesh-kumar",
        email: "rajesh.kumar@sybotstack.com",
        website: "https://sybotstack.com",
        location: "Patna, India",
        experience: "10+ years",
        education: "M.Tech in Cybersecurity, NIT Patna",
        expertise: ["Cybersecurity", "Threat Intelligence", "Incident Response", "Security Architecture", "Compliance"],
        achievements: [
            "Prevented 150+ security breaches",
            "Implemented zero-trust security model",
            "Led 25+ security audits",
            "Reduced security incidents by 85%"
        ],
        currentProjects: [
            "Zero-Trust Security Implementation",
            "Threat Intelligence Platform",
            "Security Operations Center"
        ],
        certifications: [
            "Certified Information Systems Security Professional",
            "Certified Ethical Hacker",
            "GIAC Security Expert",
            "ISO 27001 Lead Auditor"
        ],
        languages: ["English", "Bhojpuri", "Hindi"],
        hobbies: ["Penetration Testing", "Security Research", "Threat Hunting", "Security Conferences"],
        skills: ["SIEM", "EDR", "Firewall", "VPN", "IDS/IPS", "WAF", "Vulnerability Assessment"],
        contributions: ["Security Research", "Threat Intelligence Sharing", "Security Community", "Bug Bounty Programs"]
    },
    {
        id: "abhaya-bhatia",
        name: "Abhaya Bhatia",
        position: "SEO Expert",
        image: "/images/managers/yash.webp",
        bio: "Abhaya is a digital marketing specialist with expertise in search engine optimization, content strategy, and driving organic traffic growth for businesses.",
        linkedin: "https://linkedin.com/in/abhaya-bhatia",
        email: "abhaya@sybotstack.com",
        website: "https://sybotstack.com",
        location: "Mumbai, India",
        experience: "6+ years",
        education: "MBA in Digital Marketing, NMIMS Mumbai",
        expertise: ["Search Engine Optimization", "Content Strategy", "Digital Marketing", "Analytics", "Keyword Research"],
        achievements: [
            "Increased organic traffic by 300% for 25+ clients",
            "Achieved #1 rankings for 150+ competitive keywords",
            "Improved conversion rates by 45% through SEO optimization",
            "Led successful SEO campaigns for Fortune 500 companies"
        ],
        currentProjects: [
            "E-commerce SEO Strategy",
            "Local SEO Optimization",
            "Content Marketing Campaigns"
        ],
        certifications: [
            "Google Analytics Individual Qualification",
            "Google Ads Search Certification",
            "HubSpot SEO Certification",
            "SEMrush SEO Toolkit"
        ],
        languages: ["English", "Hindi", "Marathi"],
        hobbies: ["Digital Marketing Trends", "Content Creation", "SEO Research", "Industry Conferences"],
        skills: ["SEO", "Google Analytics", "Google Search Console", "SEMrush", "Ahrefs", "Content Strategy", "Technical SEO"],
        contributions: ["SEO Community", "Digital Marketing Blog", "Industry Speaking", "Mentoring"]
    },
    {
        id: "tushar-kapoor",
        name: "Tushar Kapoor",
        position: "Full Stack Developer",
        image: "/images/managers/yash.webp",
        bio: "Tushar is a passionate full-stack developer with expertise in building scalable web applications and implementing modern development practices.",
        linkedin: "https://linkedin.com/in/tushar-kapoor",
        email: "tushar@sybotstack.com",
        website: "https://sybotstack.com",
        location: "Delhi, India",
        experience: "7+ years",
        education: "B.Tech in Computer Science, DTU Delhi",
        expertise: ["Full Stack Development", "Web Applications", "Database Design", "API Development", "Performance Optimization"],
        achievements: [
            "Built 40+ production-ready web applications",
            "Improved application performance by 65%",
            "Implemented microservices architecture",
            "Reduced bug reports by 70% through testing"
        ],
        currentProjects: [
            "E-learning Platform Development",
            "Real-time Collaboration Tools",
            "Mobile-Responsive Web Apps"
        ],
        certifications: [
            "React Developer Certification",
            "Node.js Developer",
            "MongoDB Developer",
            "AWS Developer Associate"
        ],
        languages: ["English", "Hindi", "Punjabi"],
        hobbies: ["Web Development", "Open Source Projects", "Tech Blogging", "Coding Challenges"],
        skills: ["JavaScript", "React", "Next.js", "Node.js", "Tailwind CSS", "HTML", "CSS", "MongoDB", "Express.js", "PostgreSQL"],
        contributions: ["Open Source Projects", "Web Development Community", "Code Reviews", "Technical Blogging"]
    },
    {
        id: "sahil-kumar",
        name: "Sahil Kumar",
        position: "DevOps Engineer",
        image: "/images/managers/yash.webp",
        bio: "Sahil is a DevOps engineer passionate about automation, continuous integration, and building scalable infrastructure solutions.",
        linkedin: "https://linkedin.com/in/sahil-kumar",
        email: "sahil@sybotstack.com",
        website: "https://sybotstack.com",
        location: "Indore, India",
        experience: "7+ years",
        education: "B.Tech in Computer Science, IIT Indore",
        expertise: ["DevOps", "CI/CD", "Infrastructure as Code", "Monitoring", "Automation"],
        achievements: [
            "Automated 250+ deployment processes",
            "Reduced deployment time by 95%",
            "Implemented GitOps practices",
            "Achieved 99.99% uptime"
        ],
        currentProjects: [
            "GitOps Implementation",
            "Infrastructure Automation",
            "Monitoring & Observability"
        ],
        certifications: [
            "Docker Certified Associate",
            "Kubernetes Administrator",
            "Terraform Associate",
            "Jenkins Engineer"
        ],
        languages: ["English", "Malvi", "Hindi"],
        hobbies: ["Infrastructure Automation", "Open Source Contribution", "DevOps Tools", "System Monitoring"],
        skills: ["Docker", "Kubernetes", "Jenkins", "Terraform", "Prometheus", "Grafana", "GitLab CI"],
        contributions: ["DevOps Community", "Open Source Tools", "Automation Scripts", "Best Practices Sharing"]
    },
    {
        id: "rajesh-kumar",
        name: "Rajesh Kumar",
        position: "Security Specialist",
        image: "/images/managers/yash.webp",
        bio: "Rajesh is a cybersecurity expert specializing in threat detection, incident response, and security architecture design.",
        linkedin: "https://linkedin.com/in/rajesh-kumar",
        email: "rajesh.kumar@sybotstack.com",
        website: "https://sybotstack.com",
        location: "Patna, India",
        experience: "10+ years",
        education: "M.Tech in Cybersecurity, NIT Patna",
        expertise: ["Cybersecurity", "Threat Intelligence", "Incident Response", "Security Architecture", "Compliance"],
        achievements: [
            "Prevented 150+ security breaches",
            "Implemented zero-trust security model",
            "Led 25+ security audits",
            "Reduced security incidents by 85%"
        ],
        currentProjects: [
            "Zero-Trust Security Implementation",
            "Threat Intelligence Platform",
            "Security Operations Center"
        ],
        certifications: [
            "Certified Information Systems Security Professional",
            "Certified Ethical Hacker",
            "GIAC Security Expert",
            "ISO 27001 Lead Auditor"
        ],
        languages: ["English", "Bhojpuri", "Hindi"],
        hobbies: ["Penetration Testing", "Security Research", "Threat Hunting", "Security Conferences"],
        skills: ["SIEM", "EDR", "Firewall", "VPN", "IDS/IPS", "WAF", "Vulnerability Assessment"],
        contributions: ["Security Research", "Threat Intelligence Sharing", "Security Community", "Bug Bounty Programs"]
    },
    {
        id: "yash-gupta",
        name: "Yash Gupta",
        position: "IT Strategy Consultant",
        image: "/images/managers/yash.webp",
        bio: "Yash is a strategic IT consultant helping organizations align technology with business objectives and drive digital transformation.",
        linkedin: "https://linkedin.com/in/yash-gupta",
        email: "yash.gupta@sybotstack.com",
        website: "https://sybotstack.com",
        location: "Lucknow, India",
        experience: "12+ years",
        education: "MBA in Technology Management, IIM Lucknow",
        expertise: ["IT Strategy", "Digital Transformation", "Business Process Optimization", "Technology Roadmapping", "Change Management"],
        achievements: [
            "Led 30+ digital transformation projects",
            "Generated $60M+ in cost savings",
            "Improved operational efficiency by 70%",
            "Advised 120+ C-level executives"
        ],
        currentProjects: [
            "Digital Transformation Strategy",
            "Technology Roadmap Development",
            "Business Process Optimization"
        ],
        certifications: [
            "Project Management Professional",
            "ITIL Expert",
            "TOGAF Certified",
            "Change Management Professional"
        ],
        languages: ["English", "Awadhi", "Hindi"],
        hobbies: ["Strategic Planning", "Business Analysis", "Technology Trends", "Executive Coaching"],
        skills: ["Strategic Planning", "Business Analysis", "Process Optimization", "Change Management", "Technology Assessment"],
        contributions: ["IT Strategy Community", "Digital Transformation Blog", "Executive Mentoring", "Industry Speaking"]
    },
    {
        id: "priya-patel",
        name: "Priya Patel",
        position: "Senior Software Engineer",
        image: "/images/managers/yash.webp",
        bio: "Priya is a passionate software engineer specializing in frontend development and user experience design with 8+ years of experience.",
        linkedin: "https://linkedin.com/in/priya-patel",
        email: "priya@sybotstack.com",
        website: "https://sybotstack.com",
        location: "Bangalore, India",
        experience: "8+ years",
        education: "B.Tech in Information Technology, BITS Pilani",
        expertise: ["Frontend Development", "UI/UX Design", "React Ecosystem", "Performance Optimization", "Accessibility"],
        achievements: [
            "Built 20+ responsive web applications",
            "Improved page load speed by 60%",
            "Implemented accessibility standards",
            "Mentored 15+ junior developers"
        ],
        currentProjects: [
            "E-commerce Platform Redesign",
            "Mobile App Development",
            "Performance Optimization"
        ],
        certifications: [
            "Google UX Design",
            "React Developer",
            "Web Accessibility",
            "Performance Optimization"
        ],
        languages: ["English", "Hindi", "Gujarati"],
        hobbies: ["UI/UX Design", "Sketching", "Reading Design Books", "Travel Photography"],
        skills: ["React", "TypeScript", "Next.js", "CSS3", "Figma", "Adobe XD", "Webpack"],
        contributions: ["Design System Development", "Frontend Community", "Code Reviews", "Technical Blogging"]
    },
    {
        id: "amit-singh",
        name: "Amit Singh",
        position: "Data Scientist",
        image: "/images/managers/yash.webp",
        bio: "Amit is a data scientist with expertise in machine learning, statistical analysis, and building predictive models for business intelligence.",
        linkedin: "https://linkedin.com/in/amit-singh",
        email: "amit@sybotstack.com",
        website: "https://sybotstack.com",
        location: "Pune, India",
        experience: "6+ years",
        education: "M.Tech in Data Science, IIT Madras",
        expertise: ["Machine Learning", "Statistical Analysis", "Data Visualization", "Predictive Modeling", "Big Data"],
        achievements: [
            "Developed 15+ ML models with 95%+ accuracy",
            "Reduced data processing time by 80%",
            "Implemented real-time analytics dashboards",
            "Led data-driven decision making initiatives"
        ],
        currentProjects: [
            "AI-Powered Analytics Platform",
            "Predictive Maintenance System",
            "Customer Behavior Analysis"
        ],
        certifications: [
            "Google Data Analytics Professional",
            "IBM Data Science Professional",
            "Microsoft Azure Data Scientist",
            "TensorFlow Developer"
        ],
        languages: ["English", "Marathi", "Hindi"],
        hobbies: ["Machine Learning Research", "Data Visualization", "Statistical Modeling", "Tech Conferences"],
        skills: ["Python", "R", "TensorFlow", "PyTorch", "SQL", "Tableau", "Apache Spark"],
        contributions: ["Data Science Community", "Open Source ML Projects", "Technical Blogging", "Research Papers"]
    },
    {
        id: "neha-verma",
        name: "Neha Verma",
        position: "Product Manager",
        image: "/images/managers/yash.webp",
        bio: "Neha is a strategic product manager with a strong technical background and experience in leading cross-functional teams to deliver successful products.",
        linkedin: "https://linkedin.com/in/neha-verma",
        email: "neha@sybotstack.com",
        website: "https://sybotstack.com",
        location: "Gurgaon, India",
        experience: "9+ years",
        education: "MBA in Technology Management, IIM Bangalore",
        expertise: ["Product Strategy", "User Research", "Agile Development", "Market Analysis", "Stakeholder Management"],
        achievements: [
            "Launched 8+ successful products",
            "Increased user engagement by 120%",
            "Reduced time-to-market by 40%",
            "Led teams of 25+ developers and designers"
        ],
        currentProjects: [
            "Enterprise SaaS Platform",
            "Mobile App Ecosystem",
            "AI-Powered Product Suite"
        ],
        certifications: [
            "Certified Scrum Product Owner",
            "Google Product Management",
            "Agile Project Management",
            "User Experience Design"
        ],
        languages: ["English", "Hindi", "Punjabi"],
        hobbies: ["Product Strategy", "User Research", "Market Analysis", "Team Leadership"],
        skills: ["Product Strategy", "User Research", "Agile", "JIRA", "Figma", "Analytics", "A/B Testing"],
        contributions: ["Product Management Community", "Product Strategy Blog", "Mentoring PMs", "Industry Speaking"]
    }
];

interface TeamDetailPageProps {
    params: {
        id: string
    }
}

const TeamDetailPage = ({ params }: TeamDetailPageProps) => {
    const teamMember = teamData.find(m => m.id === params.id)

    if (!teamMember) {
        return (
            <div className="bg-[#0C182A] min-h-screen flex items-center justify-center">
                <Container>
                    <div className="text-center">
                        <h1 className="text-white text-4xl font-bold mb-4">Team Member Not Found</h1>
                        <p className="text-gray-300 text-lg mb-8">The team member you're looking for doesn't exist.</p>
                        <Link href="/" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors">
                            Go Home
                        </Link>
                    </div>
                </Container>
            </div>
        )
    }

    return (
        <div className="bg-[#0C182A] min-h-screen py-16">
            <Container>
                {/* Back Button */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mb-8"
                >
                    <Link
                        href="/"
                        className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
                    >
                        <ArrowLeft className="w-5 h-5 mr-2" />
                        Back to Home
                    </Link>
                </motion.div>

                {/* Header Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-12"
                >
                    <div className="bg-[#051023] rounded-2xl p-8 md:p-12 border border-blue-500/20">
                        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
                            {/* Profile Image */}
                            <div className="relative">
                                <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-blue-500/30">
                                    <Image
                                        src={teamMember.image}
                                        alt={teamMember.name}
                                        width={160}
                                        height={160}
                                        className="object-cover w-full h-full"
                                    />
                                </div>
                            </div>

                            {/* Profile Info */}
                            <div className="text-center md:text-left">
                                <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                                    {teamMember.name}
                                </h1>
                                <p className="text-blue-400 font-semibold text-xl md:text-2xl mb-4">
                                    {teamMember.position}
                                </p>
                                <p className="text-gray-300 text-lg mb-6 max-w-2xl">
                                    {teamMember.bio}
                                </p>

                                {/* Quick Stats */}
                                <div className="flex flex-wrap justify-center md:justify-start gap-6 text-sm">
                                    <div className="flex items-center text-gray-300">
                                        <MapPin className="w-4 h-4 mr-2" />
                                        <span>{teamMember.location}</span>
                                    </div>
                                    <div className="flex items-center text-gray-300">
                                        <Briefcase className="w-4 h-4 mr-2" />
                                        <span>{teamMember.experience}</span>
                                    </div>
                                    <div className="flex items-center text-gray-300">
                                        <BookOpen className="w-4 h-4 mr-2" />
                                        <span>{teamMember.education}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Main Content */}
                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Left Column - Contact & Quick Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="lg:col-span-1 space-y-6"
                    >
                        {/* Contact Section */}
                        <div className="bg-[#051023] rounded-xl p-6 border border-blue-500/20">
                            <h3 className="text-white text-xl font-bold mb-4">Contact Information</h3>
                            <div className="space-y-4">
                                <a
                                    href={`mailto:${teamMember.email}`}
                                    className="flex items-center text-gray-300 hover:text-blue-400 transition-colors"
                                >
                                    <Mail className="w-5 h-5 mr-3" />
                                    <span>{teamMember.email}</span>
                                </a>
                                <a
                                    href={teamMember.linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center text-gray-300 hover:text-blue-400 transition-colors"
                                >
                                    <Linkedin className="w-5 h-5 mr-3" />
                                    <span>LinkedIn Profile</span>
                                </a>
                                <a
                                    href={teamMember.website}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center text-gray-300 hover:text-blue-400 transition-colors"
                                >
                                    <Globe className="w-5 h-5 mr-3" />
                                    <span>Website</span>
                                </a>
                            </div>
                        </div>

                        {/* Languages & Hobbies */}
                        <div className="bg-[#051023] rounded-xl p-6 border border-blue-500/20">
                            <h3 className="text-white text-xl font-bold mb-4">Languages & Hobbies</h3>
                            <div className="space-y-4">
                                <div>
                                    <h4 className="text-blue-400 font-semibold mb-2">Languages</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {teamMember.languages.map((lang, index) => (
                                            <span
                                                key={index}
                                                className="bg-blue-600/20 text-blue-300 px-3 py-1 rounded-full text-sm border border-blue-500/30"
                                            >
                                                {lang}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                <div>
                                    <h4 className="text-blue-400 font-semibold mb-2">Hobbies</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {teamMember.hobbies.map((hobby, index) => (
                                            <span
                                                key={index}
                                                className="bg-gray-600/20 text-gray-300 px-3 py-1 rounded-full text-sm border border-gray-500/30"
                                            >
                                                {hobby}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Skills */}
                        <div className="bg-[#051023] rounded-xl p-6 border border-blue-500/20">
                            <h3 className="text-white text-xl font-bold mb-4 flex items-center">
                                <Code className="w-5 h-5 mr-2 text-blue-400" />
                                Technical Skills
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {teamMember.skills.map((skill, index) => (
                                    <span
                                        key={index}
                                        className="bg-green-600/20 text-green-300 px-3 py-1 rounded-full text-sm border border-green-500/30"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Column - Detailed Information */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="lg:col-span-2 space-y-6"
                    >
                        {/* Expertise */}
                        <div className="bg-[#051023] rounded-xl p-6 md:p-8 border border-blue-500/20">
                            <h3 className="text-white text-2xl font-bold mb-6 flex items-center">
                                <Award className="w-6 h-6 mr-3 text-blue-400" />
                                Areas of Expertise
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                {teamMember.expertise.map((skill, index) => (
                                    <div key={index} className="flex items-center text-gray-300">
                                        <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                                        <span>{skill}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Achievements */}
                        <div className="bg-[#051023] rounded-xl p-6 md:p-8 border border-blue-500/20">
                            <h3 className="text-white text-2xl font-bold mb-6 flex items-center">
                                <Star className="w-6 h-6 mr-3 text-yellow-400" />
                                Key Achievements
                            </h3>
                            <div className="space-y-4">
                                {teamMember.achievements.map((achievement, index) => (
                                    <div key={index} className="flex items-start">
                                        <div className="w-2 h-2 bg-green-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                                        <p className="text-gray-300">{achievement}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Current Projects */}
                        <div className="bg-[#051023] rounded-xl p-6 md:p-8 border border-blue-500/20">
                            <h3 className="text-white text-2xl font-bold mb-6 flex items-center">
                                <Briefcase className="w-6 h-6 mr-3 text-blue-400" />
                                Current Projects
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {teamMember.currentProjects.map((project, index) => (
                                    <div key={index} className="bg-[#121837] rounded-lg p-4 border border-blue-500/20">
                                        <h4 className="text-white font-semibold mb-2">{project}</h4>
                                        <div className="w-full bg-gray-700 rounded-full h-2">
                                            <div className="bg-blue-600 h-2 rounded-full" style={{ width: `${Math.random() * 40 + 60}%` }}></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Certifications */}
                        <div className="bg-[#051023] rounded-xl p-6 md:p-8 border border-blue-500/20">
                            <h3 className="text-white text-2xl font-bold mb-6 flex items-center">
                                <Award className="w-6 h-6 mr-3 text-blue-400" />
                                Certifications
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                {teamMember.certifications.map((cert, index) => (
                                    <div key={index} className="flex items-center text-gray-300">
                                        <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                                        <span>{cert}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Community Contributions */}
                        <div className="bg-[#051023] rounded-xl p-6 md:p-8 border border-blue-500/20">
                            <h3 className="text-white text-2xl font-bold mb-6 flex items-center">
                                <Users className="w-6 h-6 mr-3 text-blue-400" />
                                Community Contributions
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                {teamMember.contributions.map((contribution, index) => (
                                    <div key={index} className="flex items-center text-gray-300">
                                        <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                                        <span>{contribution}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Call to Action */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="text-center mt-16"
                >
                    <div className="bg-[#051023] rounded-xl p-8 border border-blue-500/20">
                        <h3 className="text-white text-2xl font-bold mb-4">
                            Ready to Join Our Team?
                        </h3>
                        <p className="text-gray-300 text-lg mb-6 max-w-2xl mx-auto">
                            We're always looking for talented individuals to join our team. Let's discuss how you can contribute to our mission.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="/contact"
                                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors"
                            >
                                Get in Touch
                            </Link>
                            <Link
                                href="/"
                                className="bg-[#121837] hover:bg-[#051023] text-white font-semibold py-3 px-8 rounded-lg transition-colors border border-blue-500/30"
                            >
                                Meet the Full Team
                            </Link>
                        </div>
                    </div>
                </motion.div>
            </Container>
        </div>
    )
}

export default TeamDetailPage
