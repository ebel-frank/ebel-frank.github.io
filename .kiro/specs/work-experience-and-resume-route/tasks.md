# Implementation Plan: Work Experience and Resume Route

## Overview

This plan implements client-side routing with react-router-dom, a Work Experience section on the homepage, a dedicated `/resume` route with inline PDF viewing, and navigation updates. Tasks are ordered to establish routing infrastructure first, then build new components, and finally wire everything together.

## Tasks

- [x] 1. Install react-router-dom and set up routing infrastructure
  - [x] 1.1 Install react-router-dom and configure BrowserRouter in main.jsx
    - Run `npm install react-router-dom` to add the production dependency
    - Modify `src/main.jsx` to import `BrowserRouter`, `Routes`, `Route`, and `Navigate` from react-router-dom
    - Wrap the App component with `BrowserRouter` and define routes: `/` renders `<App />`, `/resume` renders `<ResumePage />`, `*` renders `<Navigate to="/" replace />`
    - Import the ResumePage component (to be created in a later task)
    - _Requirements: 2.1, 2.2, 2.3, 2.4, 2.6_

  - [x] 1.2 Create public/404.html for gh-pages SPA fallback
    - Create `public/404.html` with a script that redirects to `index.html` while preserving the original path as a query parameter
    - This enables direct URL access to `/resume` on GitHub Pages
    - _Requirements: 2.5_

- [x] 2. Implement the Experience component
  - [x] 2.1 Create src/components/Experience.jsx with work experience data and rendering
    - Create `src/components/Experience.jsx` component
    - Define the `experiences` array with two entries:
      1. AWS Cloud Engineer | Nov 2025 - Present | AfryScripta - WiNEST Research, Kigali, Rwanda (4 bullet descriptions)
      2. Software Engineer | Nov 2024 - Present | TMR International Hospital, Uganda (Remote, Part-time) (3 bullet descriptions)
    - Render a `<section id="experience">` with the section title "02. Experience" using `section-title` class and `mono` span
    - Render each entry with: job title in `--text-primary`, date range in `mono` class, company name, location in `--text-secondary`
    - Render bullet descriptions as an unordered list prefixed with "▹" character
    - Use inline styles and CSS variables (`--text-primary`, `--text-secondary`, `--border`, `--bg-primary`) only — no external CSS
    - Ensure responsive stacking at ≤768px viewport using CSS grid with minmax or media query
    - _Requirements: 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 1.7_

  - [ ]* 2.2 Write unit tests for Experience component
    - Test that section renders with id="experience"
    - Test that section title shows "02. Experience" with correct classes
    - Test that each entry displays title, date, company, location
    - Test that bullet descriptions use "▹" prefix
    - _Requirements: 1.2, 1.3, 1.4, 1.6_

- [x] 3. Implement the ResumePage component
  - [x] 3.1 Create src/components/ResumePage.jsx with PDF viewer and fallback logic
    - Create `src/components/ResumePage.jsx` component
    - Import the Header component and render it at the top
    - Add a back-to-home navigation link (using react-router-dom `Link` to `/`) positioned above the PDF viewer
    - Render the resume PDF in an `<iframe>` with `width: 100%` and height filling remaining viewport (min-height 500px)
    - Implement loading state: show a loading indicator while PDF loads
    - Implement 5-second timeout: if iframe `onLoad` doesn't fire within 5 seconds, show a direct download link as fallback
    - On successful `onLoad`, clear the timeout and hide the loading indicator
    - _Requirements: 3.1, 3.2, 3.3, 3.4, 3.5_

  - [ ]* 3.2 Write unit tests for ResumePage component
    - Test that PDF viewer iframe exists with correct source
    - Test that back-to-home link is present and navigates to `/`
    - Test that loading indicator displays initially
    - Test that fallback download link appears after timeout
    - _Requirements: 3.1, 3.2, 3.3, 3.4, 3.5_

- [x] 4. Checkpoint - Verify core components
  - Ensure all tests pass, ask the user if questions arise.

- [x] 5. Update navigation and section numbering
  - [x] 5.1 Update Header.jsx with Experience and Resume nav links and route-aware behavior
    - Import `useLocation` and `Link` from react-router-dom
    - Add "Experience" and "Resume" to the nav items in order: About, Experience, Projects, Contact, Resume
    - Use `useLocation()` to detect the current route
    - On homepage (`/`): section links use `#about`, `#experience`, `#projects`, `#contact` as href
    - On `/resume` route: section links use `/#about`, `/#experience`, `/#projects`, `/#contact`
    - "Resume" link uses `<Link to="/resume">` (router-based navigation)
    - Maintain existing `mono` class, uppercase, 0.1em letter-spacing, 0.8rem font-size styling
    - _Requirements: 4.1, 4.2, 4.3, 4.4, 4.6_

  - [x] 5.2 Update App.jsx to include Experience component between About and Projects
    - Import the `Experience` component
    - Add `<Experience />` between `<About />` and `<Projects />` in the JSX
    - _Requirements: 1.1_

  - [x] 5.3 Update Projects.jsx section number from "02." to "03."
    - Change the section title span from "02." to "03."
    - _Requirements: 1.1_

  - [x] 5.4 Update Resume.jsx to use router Link and update section number
    - Import `Link` from react-router-dom
    - Replace the `<a href={resumePdf} target="_blank">` with `<Link to="/resume">` 
    - Update the section number from "03." to "04." if the Resume section remains on the homepage
    - _Requirements: 4.5_

  - [ ]* 5.5 Write unit tests for Header navigation updates
    - Test nav links render in correct order: About, Experience, Projects, Contact, Resume
    - Test that Experience link uses `#experience` href on homepage
    - Test that Resume link uses router Link to `/resume`
    - Test that section links use `/#section` format on `/resume` route
    - _Requirements: 4.1, 4.2, 4.3, 4.4_

- [ ] 6. Integration testing and routing verification
  - [ ]* 6.1 Write property test for catch-all route redirect
    - **Property 1: Catch-all route redirects to homepage**
    - Use `fast-check` to generate arbitrary URL path strings that do not match `/` or `/resume`
    - Assert that navigating to any such path results in redirect to `/`
    - Minimum 100 iterations
    - **Validates: Requirements 2.4**

  - [ ]* 6.2 Write integration tests for navigation flow
    - Test full navigation: homepage → `/resume` → back to homepage
    - Test that homepage renders all sections in order (Hero, About, Experience, Projects, Contact)
    - _Requirements: 2.2, 3.3, 4.3_

- [x] 7. Final checkpoint - Ensure all tests pass
  - Ensure all tests pass, ask the user if questions arise.

## Notes

- Tasks marked with `*` are optional and can be skipped for faster MVP
- Each task references specific requirements for traceability
- Checkpoints ensure incremental validation
- Property tests validate universal correctness properties (catch-all route behavior)
- Unit tests validate specific examples and edge cases
- The project uses React 19 + Vite 7; react-router-dom ^7.6.0 is compatible
- Work experience bullet descriptions should use the actual resume content provided by the user

## Task Dependency Graph

```json
{
  "waves": [
    { "id": 0, "tasks": ["1.1", "1.2"] },
    { "id": 1, "tasks": ["2.1", "3.1"] },
    { "id": 2, "tasks": ["2.2", "3.2", "5.1", "5.2", "5.3", "5.4"] },
    { "id": 3, "tasks": ["5.5", "6.1", "6.2"] }
  ]
}
```
