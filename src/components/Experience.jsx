import Reveal from './Reveal';

const experiences = [
  {
    title: "AWS Cloud Engineer",
    dateRange: "November 2025 - Present",
    company: "AfryScripta - WiNEST Research",
    location: "Kigali, Rwanda",
    descriptions: [
      "Served as the infrastructure administrator, optimizing AWS account security configurations, IAM roles, and resource utilization.",
      "Designed and deployed a serverless architecture using AWS AppSync, DynamoDB, S3, and Cognito, serving 500+ users with 99.9% availability and zero infrastructure management overhead.",
      "Automated infrastructure provisioning using AWS CDK and Amplify CI/CD pipelines with sandbox environments, enabling reproducible deployments across dev and production with zero-downtime releases.",
      "Engineered a secure IAM and Cognito-based RBAC system with pre-signed S3 uploads, group-based API authorization, and DynamoDB TTL-based session management, reducing unauthorized access surface by 100%."
    ],
  },
  {
    title: "Software Engineer",
    dateRange: "November 2024 - Present",
    company: "TMR International Hospital",
    location: "Uganda (Remote, Part-time)",
    descriptions: [
      "Designed and maintained Azure Pipelines CI/CD workflows to automate build, test, and distribution of 3 production healthcare apps (Patient, Doctor, Rider) to testers via automated delivery, reducing manual release overhead.",
      "Instrumented apps with Firebase Performance Monitoring and Crashlytics to track real-time performance metrics and crash reports, enabling data-driven fixes that contributed to a 12% reduction in app load times.",
      "Delivered cross-platform Flutter apps on Android and iOS serving 1,200+ active users, achieving a 90% user satisfaction rating based on app store reviews.",
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience">
      <h2 className="section-title">
        <span className="mono" style={{ fontSize: '1.2rem', color: 'var(--text-primary)' }}>02.</span> Experience
      </h2>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '3rem',
      }}>
        {experiences.map((exp, index) => (
          <Reveal
            key={index}
            delay={index * 0.1}
            style={{
              padding: '2rem',
              border: '1px solid var(--border)',
              borderRadius: '0.5rem',
              backgroundColor: 'var(--bg-primary)',
            }}
          >
            <h3 style={{ color: 'var(--text-primary)', fontSize: '1.3rem', marginBottom: '0.5rem' }}>
              {exp.title}
            </h3>
            <p className="mono" style={{ marginBottom: '0.25rem' }}>
              {exp.dateRange}
            </p>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', marginBottom: '1.5rem' }}>
              {exp.company} — {exp.location}
            </p>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {exp.descriptions.map((desc, i) => (
                <li
                  key={i}
                  style={{
                    color: 'var(--text-secondary)',
                    fontSize: '1rem',
                    marginBottom: '0.75rem',
                    paddingLeft: '1.25rem',
                    position: 'relative',
                  }}
                >
                  <span style={{
                    position: 'absolute',
                    left: 0,
                    color: 'var(--text-primary)',
                  }}>▹</span>
                  {desc}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </section>
  );
};

export default Experience;
