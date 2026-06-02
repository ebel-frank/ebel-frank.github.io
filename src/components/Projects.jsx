import React, { useState } from 'react';
import intlTranslateImg from '../assets/intl_translate.png';
import forrtLogo from '../assets/forrt_logo.png';
import architectureImg from '../assets/scalable_microservice.webp';
import gfwrapImg from '../assets/gfwrap.png';
import tmrGoldenImg from '../assets/tmrgolden.png';
import etlImg from '../assets/etl.png';
import twitterImg from '../assets/twitter_web_service.png';
import scaleInImg from '../assets/scale_in.jpg';
import scaleOutImg from '../assets/scale_out.jpg';
import metricsImg from '../assets/metrics.jpg';
import nycModelImg from '../assets/nyc_model.png';

const projects = [
    {
        title: "Cloud Native Web Service (In Progress)",
        description: "Developed a distributed ETL pipeline using Spark and Databricks on GCP Dataproc. Exported processed data into AWS EBS and mounted it as a PersistentVolume to a pod in a Kubernetes cluster. currently optimizing for cost and performance.",
        fullDescription: "Developed a distributed ETL pipeline using Spark and Databricks on GCP Dataproc, optimized based on cost and performance benchmarks. Exported processed data into an AWS EBS volume and mounted the data as a PersistentVolume to a pod running inside a Kubernetes cluster — enabling cross-cloud data portability and persistent storage for stateful workloads.",
        features: [
            "Distributed ETL pipeline with Spark & Databricks on GCP Dataproc",
            "Cost and performance optimization across compute tiers",
            "Cross-cloud data export from GCP to AWS EBS",
            "PersistentVolume/PVC configuration for stateful Kubernetes pods",
        ],
        tech: ["Spark", "Databricks", "GCP", "AWS EBS", "Kubernetes"],
        link: "#",
        category: "CLOUD",
        image: etlImg,
        extraImages: [twitterImg],
        cover: true,
        hasModal: true
    },
    {
        title: "Scalable Microservices Architecture",
        description: "Developed and deployed real-time and scalable web services using the microservices pattern.",
        fullDescription: "Developed and deployed real-time and scalable web services using the microservices pattern. Leveraged Helm for Kubernetes application packaging, Docker for containerization, and managed images across GAR and ACR. Implemented NginX Ingress for GCP, configured HPA for automatic scaling and fault tolerance, and utilized Azure Front Door for global routing. Integrated Redis Pub/Sub for real-time chat synchronization.",
        features: [
            "Microservices architecture with real-time scalability",
            "Helm charts for controlled Kubernetes deployments",
            "Multi-cloud image management (GAR & ACR)",
            "Automated scaling with Horizontal Pod Autoscaler (HPA)",
            "Global traffic routing via Azure Front Door",
            "Real-time messaging using Redis Pub/Sub"
        ],
        tech: ["Kubernetes", "Docker", "Helm", "GCP", "Azure", "Redis", "Nginx"],
        link: "#",
        category: "CLOUD",
        cover: true,
        image: architectureImg,
        hasModal: true
    },
    {
        title: "Intelligent Fare Prediction & Voice Assistant",
        description: "Built a production-grade ride fare prediction and voice-enabled AI assistant on GCP with automated ML workflows, REST serving, and real-time recommendations.",
        fullDescription: "Architected and deployed a production-grade ride fare prediction platform on GCP, engineering geospatial and time-based features to train an XGBoost model via containerized Cloud Run Jobs with automated hyperparameter optimization. Served the model through Vertex AI with a REST prediction layer on Google App Engine, achieving sub-6 RMSE on live fare data. Integrated a voice-enabled AI assistant using Speech-to-Text, Text-to-Speech, and NLP APIs, backed by a RAG pipeline (Vertex AI + Llama 3.1) and an agentic workflow (LangGraph + Gemini) to handle real-time ride queries and location-aware recommendations across the city.",
        features: [
            "Feature-engineered geospatial and time-series data for fare modeling",
            "Automated hyperparameter tuning with containerized Cloud Run Jobs",
            "Production REST serving through Vertex AI and App Engine",
            "Voice assistant powered by Speech-to-Text, Text-to-Speech, and NLP APIs",
            "RAG pipeline with Vertex AI + Llama 3.1 and agentic workflows via LangGraph + Gemini"
        ],
        tech: ["GCP", "XGBoost", "Vertex AI", "Cloud Run", "App Engine", "Speech-to-Text", "Text-to-Speech", "RAG", "LangGraph", "Gemini"],
        link: "#",
        category: "AI on Cloud",
        cover: false,
        image: nycModelImg,
        hasModal: true
    },
    {
        title: "MSB Elastic Cloud Infrastructure",
        description: "Provisioned a fully elastic AWS infrastructure using Terraform, including ELB and Auto Scaling Groups, enabling dynamic resource allocation based on workload demand.",
        fullDescription: "Provisioned a fully elastic AWS infrastructure using Terraform, including Elastic Load Balancer (ELB) and Auto Scaling Groups (ASG), enabling dynamic resource allocation based on real-time workload demand. Analyzed traffic and workload patterns to define elasticity policies that balanced performance SLAs against budget constraints, significantly reducing over-provisioning costs.",
        features: [
            "Infrastructure as Code with Terraform for full reproducibility",
            "Elastic Load Balancer (ELB) for traffic distribution",
            "Auto Scaling Groups for dynamic compute allocation",
            "Workload-driven elasticity policies balancing SLAs and cost",
            "Reduction in over-provisioning through data-driven capacity planning",
        ],
        tech: ["Terraform", "AWS", "ELB", "Auto Scaling", "IaC"],
        link: "#",
        category: "CLOUD",
        image: metricsImg,
        extraImages: [scaleInImg, scaleOutImg],
        cover: true,
        hasModal: true
    },
    {
        title: "PetClinic Infrastructure",
        description: "Deployed the PetClinic application on a 3-node Kubernetes cluster with full lifecycle management, Nagios Core monitoring, and Ansible Vault for secrets management.",
        fullDescription: "Deployed the PetClinic application on a 3-node Kubernetes cluster with full lifecycle management including rolling updates and health checks. Integrated Nagios Core for infrastructure monitoring across all nodes and implemented Ansible Vault for secrets management, significantly improving the deployment security posture.",
        features: [
            "3-node Kubernetes cluster with rolling update strategy",
            "Health checks and liveness/readiness probe configuration",
            "Nagios Core integration for node-level infrastructure monitoring",
            "Ansible Vault for encrypted secrets management",
            "Improved security posture across the deployment lifecycle",
        ],
        tech: ["Kubernetes", "Ansible", "Nagios", "Ansible Vault", "Linux"],
        link: "#",
        category: "CLOUD",
        cover: true,
        hasModal: true
    },
    {
        title: "TMR Golden Living",
        description: "Architected, developed and published cross-platform telemedicine application built with Flutter, currently serving 1000+ users, leveraging RESTful APIs for secure data exchange.",
        tech: ["Flutter", "RESTful APIs", "HealthTech"],
        link: "https://tmrgoldenliving.org/",
        category: "MOBILE",
        image: tmrGoldenImg,
        cover: false
    },
    {
        title: "gfwrap",
        description: "Built an image compression utility for Linux systems using C language. Implemented Huffman coding algorithm and optimized for memory efficiency and processing speed.",
        tech: ["C", "Linux", "Algorithms"],
        link: "https://github.com/ebel-frank/compression_utility",
        category: "SYSTEMS",
        image: gfwrapImg,
        cover: true
    },
    {
        title: "FReD Replication Extractor",
        description: "Developed a replication extractor for processing replication studies using LLMs and text matching algorithms to identify original studies and classify replication outcomes.",
        tech: ["LLMs", "Python", "NLP"],
        link: "https://github.com/forrtproject/fred_repl_extractor",
        category: "OPEN SOURCE",
        image: forrtLogo,
        cover: false
    },
    {
        title: "Flutter Intl Translate",
        description: "Built and open-sourced JSON/ARB translation tool for Flutter internationalization workflows, adopted by over 170+ developers on VS Code.",
        tech: ["TypeScript", "VS Code Extension", "Automation"],
        link: "https://marketplace.visualstudio.com/items?itemName=ebelfrank.intl-translate",
        category: "OPEN SOURCE",
        image: intlTranslateImg,
        cover: true
    }
];

const ProjectModal = ({ project, onClose }) => {
    if (!project) return null;

    return (
        <div style={{
            position: 'fixed',
            inset: 0,
            zIndex: 1000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '2rem',
            backgroundColor: 'rgba(0, 0, 0, 0.85)',
            backdropFilter: 'blur(8px)',
            animation: 'fadeIn 0.3s ease-out'
        }} onClick={onClose}>
            <div style={{
                backgroundColor: 'var(--bg-secondary)',
                border: '1px solid var(--border)',
                width: '100%',
                maxWidth: '900px',
                maxHeight: '90vh',
                overflowY: 'auto',
                position: 'relative',
                borderRadius: '8px',
                padding: '2rem'
            }} onClick={e => e.stopPropagation()}>
                <button
                    onClick={onClose}
                    style={{
                        position: 'absolute',
                        top: '1.5rem',
                        right: '1.5rem',
                        background: 'none',
                        border: 'none',
                        color: 'var(--text-primary)',
                        fontSize: '1.5rem',
                        cursor: 'pointer',
                        zIndex: 10
                    }}
                >
                    &times;
                </button>

                <div style={{ marginBottom: '2rem' }}>
                    <div style={{
                        backgroundColor: 'var(--bg-primary)',
                        aspectRatio: '16/9',
                        border: '1px solid var(--border)',
                        marginBottom: '2rem',
                        overflow: 'hidden',
                        borderRadius: '4px'
                    }}>
                        {project.image ? (
                            <img src={project.image} alt={project.title} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                        ) : (
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }} className="mono">
                                [ PROJECT VISUAL ]
                            </div>
                        )}
                    </div>

                    {project.extraImages && project.extraImages.map((img, idx) => (
                        <div key={idx} style={{
                            backgroundColor: 'var(--bg-primary)',
                            aspectRatio: '16/9',
                            border: '1px solid var(--border)',
                            marginBottom: '2rem',
                            overflow: 'hidden',
                            borderRadius: '4px'
                        }}>
                            <img src={img} alt={`${project.title} additional ${idx + 1}`} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                        </div>
                    ))}

                    <div className="mono" style={{ color: 'var(--text-secondary)', fontSize: '0.8rem', marginBottom: '0.5rem' }}>{project.category}</div>
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', fontFamily: 'var(--font-heading)' }}>{project.title}</h2>

                    <p style={{ color: 'var(--text-primary)', marginBottom: '2rem', lineHeight: 1.8, fontSize: '1.1rem' }}>
                        {project.fullDescription || project.description}
                    </p>

                    {project.features && (
                        <div style={{ marginBottom: '2rem' }}>
                            <h4 style={{ marginBottom: '1rem', color: 'var(--text-primary)' }}>Key Features</h4>
                            <ul style={{ paddingLeft: '1.2rem', color: 'var(--text-secondary)' }}>
                                {project.features.map((feature, i) => (
                                    <li key={i} style={{ marginBottom: '0.5rem' }}>{feature}</li>
                                ))}
                            </ul>
                        </div>
                    )}

                    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
                        {project.tech.map(t => (
                            <span key={t} className="mono" style={{
                                fontSize: '0.75rem',
                                padding: '0.4rem 0.8rem',
                                background: 'rgba(255,255,255,0.05)',
                                border: '1px solid var(--border)',
                                borderRadius: '4px'
                            }}>{t}</span>
                        ))}
                    </div>

                    {project.link !== "#" && (
                        <div style={{ display: 'flex', gap: '2rem' }}>
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mono"
                                style={{
                                    fontSize: '0.9rem',
                                    padding: '0.8rem 1.5rem',
                                    background: 'var(--text-primary)',
                                    color: 'var(--bg-primary)',
                                    fontWeight: 'bold',
                                    borderRadius: '4px'
                                }}
                            >
                                Visit Project ↗
                            </a>
                        </div>
                    )}
                </div>
            </div>
            <style>
                {`
                    @keyframes fadeIn {
                        from { opacity: 0; transform: scale(0.98); }
                        to { opacity: 1; transform: scale(1); }
                    }
                `}
            </style>
        </div>
    );
};

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    return (
        <section id="projects">
            <h2 className="section-title">
                <span className="mono" style={{ fontSize: '1.2rem', color: 'var(--text-primary)' }}>03.</span> Projects
            </h2>

            <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '6rem'
            }}>
                {projects.map((proj, idx) => (
                    <div key={idx} className="project-card">
                        <div style={{
                            backgroundColor: 'var(--bg-secondary)',
                            aspectRatio: '16/9',
                            border: '1px solid var(--border)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '0.8rem',
                            color: 'var(--text-secondary)',
                            overflow: 'hidden'
                        }} className="mono">
                            {proj.image ? (
                                <img src={proj.image} alt={proj.title} style={{ width: '100%', height: '100%', objectFit: proj.cover ? 'cover' : 'contain' }} />
                            ) : (
                                '[ PROJECT VISUAL ]'
                            )}
                        </div>

                        <div>
                            <div className="mono" style={{ color: 'var(--text-secondary)', fontSize: '0.7rem', marginBottom: '0.5rem' }}>{proj.category}</div>
                            <h3 style={{ fontSize: '1.75rem', marginBottom: '1.5rem' }}>{proj.title}</h3>
                            <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', lineHeight: 1.7 }}>
                                {proj.description}
                            </p>
                            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
                                {proj.tech.map(t => (
                                    <span key={t} className="mono" style={{
                                        fontSize: '0.75rem',
                                        color: 'var(--text-primary)',
                                        padding: '0.2rem 0.6rem',
                                        background: 'rgba(255, 255, 255, 0.05)',
                                        border: '1px solid var(--border)',
                                        borderRadius: '4px'
                                    }}>{t}</span>
                                ))}
                            </div>
                            {proj.hasModal ? (
                                <button
                                    onClick={() => setSelectedProject(proj)}
                                    className="mono"
                                    style={{
                                        fontSize: '0.8rem',
                                        textDecoration: 'underline',
                                        background: 'none',
                                        border: 'none',
                                        color: 'inherit',
                                        cursor: 'pointer',
                                        padding: 0
                                    }}
                                >
                                    View Project Details ↗
                                </button>
                            ) : (
                                <a href={proj.link} className="mono" style={{ fontSize: '0.8rem', textDecoration: 'underline' }}>
                                    View Project ↗
                                </a>
                            )}
                        </div>
                    </div>
                ))}
            </div>

            {selectedProject && (
                <ProjectModal
                    project={selectedProject}
                    onClose={() => setSelectedProject(null)}
                />
            )}
        </section>
    );
};

export default Projects;
