# Requirements Document

## Introduction

This feature adds a Work Experience section to the portfolio homepage and introduces client-side routing to serve the resume PDF inline at a dedicated `/resume` route. The portfolio currently operates as a single-page application without a routing library. This feature requires installing a router (react-router-dom), adding a new homepage section displaying professional work history, and creating a full-page resume viewer that renders the PDF directly in the browser.

## Glossary

- **Portfolio_App**: The React 19 + Vite 7 single-page portfolio application
- **Homepage**: The main landing page containing all portfolio sections (Hero, About, Projects, Contact)
- **Work_Experience_Section**: A new section on the Homepage displaying professional work history entries
- **Experience_Entry**: A single work experience item containing job title, date range, company name, location, and bullet-point descriptions
- **Resume_Route**: A dedicated page at `{base_url}/resume` that displays the resume PDF inline
- **Router**: The react-router-dom client-side routing library used to manage navigation between pages
- **Header**: The fixed navigation bar at the top of the application
- **PDF_Viewer**: The embedded element that renders the resume PDF file directly in the browser

## Requirements

### Requirement 1: Work Experience Section Display

**User Story:** As a visitor, I want to see a Work Experience section on the homepage, so that I can review the portfolio owner's professional history without navigating away.

#### Acceptance Criteria

1. THE Portfolio_App SHALL display a Work_Experience_Section on the Homepage rendered in the DOM after the About section and before the Projects section.
2. THE Work_Experience_Section SHALL use the numbered section title format "02. Experience" using the section-title CSS class and mono span consistent with other sections.
3. THE Work_Experience_Section SHALL display each Experience_Entry with the job title rendered in --text-primary color, employment date range in mono class, company name, and location in --text-secondary color.
4. THE Work_Experience_Section SHALL display bullet-point descriptions for each Experience_Entry as an unordered list with each item prefixed by the "▹" character, consistent with the About section skill list pattern.
5. THE Work_Experience_Section SHALL use inline styles and CSS variables (--text-primary, --text-secondary, --border, --bg-primary) with no external CSS files or CSS modules introduced.
6. THE Work_Experience_Section SHALL have the HTML id attribute set to "experience" to support anchor-based navigation from the Header.
7. WHEN the viewport width is 768px or less, THE Work_Experience_Section SHALL stack Experience_Entry elements vertically in a single-column layout using a CSS media query or responsive grid with minmax.

### Requirement 2: Client-Side Routing Setup

**User Story:** As a developer, I want client-side routing installed in the portfolio, so that the application can serve multiple pages while maintaining SPA behavior.

#### Acceptance Criteria

1. THE Portfolio_App SHALL install react-router-dom as a production dependency and use BrowserRouter (or HashRouter for gh-pages compatibility) to manage client-side routing between the Homepage and the Resume_Route.
2. THE Router SHALL render the Homepage component containing all existing sections (Hero, About, Work_Experience_Section, Projects, Contact) at the root path `/`.
3. THE Router SHALL render the Resume_Route component at the path `/resume`.
4. WHEN a user navigates to any path not matching `/` or `/resume`, THE Router SHALL redirect the user to the Homepage at `/`.
5. THE Portfolio_App SHALL include a `404.html` file in the public directory that redirects to `index.html` to support client-side routing on gh-pages when users directly access non-root URLs.
6. THE Router configuration SHALL be defined in `src/main.jsx` wrapping the App component, keeping route definitions centralized in a single file.

### Requirement 3: Resume Route with Inline PDF Display

**User Story:** As a visitor, I want to view the resume PDF directly in the browser at a dedicated URL, so that I can read the full resume without downloading it.

#### Acceptance Criteria

1. WHEN a user navigates to `{base_url}/resume`, THE Resume_Route SHALL display the resume PDF file inline using an embedded PDF_Viewer element (iframe or object element rendering the PDF).
2. THE PDF_Viewer SHALL occupy 100% of the viewport width and the remaining viewport height below the navigation element, with a minimum height of 500px.
3. THE Resume_Route SHALL include a visible navigation link labeled with text indicating return to the Homepage, positioned above the PDF_Viewer, that navigates the user to `{base_url}/`.
4. IF the PDF fails to render inline within 5 seconds or the browser does not support the embedded PDF element, THEN THE Resume_Route SHALL display a direct download link to the resume PDF file as a fallback, with link text indicating the user can download the resume.
5. WHILE the PDF_Viewer is loading, THE Resume_Route SHALL display a loading indicator visible to the user until the PDF content is rendered or the fallback is triggered.

### Requirement 4: Navigation Updates

**User Story:** As a visitor, I want navigation links to the Work Experience section and the Resume page, so that I can easily access both from anywhere on the site.

#### Acceptance Criteria

1. THE Header SHALL display navigation links in the following order: About, Experience, Projects, Contact, Resume.
2. THE Header navigation link labeled "Experience" SHALL use an anchor href `#experience` that smooth-scrolls to the Work_Experience_Section on the Homepage.
3. THE Header navigation link labeled "Resume" SHALL use a router-based navigation (Link or anchor) that navigates to the `/resume` route.
4. WHEN the user is on the Resume_Route, THE Header navigation links for Homepage sections (About, Experience, Projects, Contact) SHALL navigate to `/#about`, `/#experience`, `/#projects`, and `/#contact` respectively, returning the user to the Homepage and scrolling to the corresponding section.
5. THE existing Resume component on the Homepage SHALL replace its external PDF link with a router Link component that navigates to `/resume`.
6. THE Header navigation links SHALL maintain the existing mono class styling with uppercase text, 0.1em letter-spacing, and 0.8rem font-size.
