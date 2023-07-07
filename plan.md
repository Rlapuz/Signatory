===== AUTOMATION SIGNATORY =====

[ ] - RBAC Implementation:

[ ] - 1. Define the roles: Focal, ProgChair, Cesu, Dean.
[ ] - 2. Create a database schema or data structure to store user roles and permissions.
[ ] - 3. Implement authentication and authorization mechanisms in the backend to enforce role-based access control.
[ ] - 4. Define different routes or API endpoints that are accessible based on user roles.
[ ] = 5. Protect routes or endpoints using middleware to validate user roles and permissions.

[ ] - File Approval Workflow:

[ ] - 1. Create a database schema or data structure to store information about uploaded files, including status, remarks, and signatories.
[ ] - 2. Implement file upload functionality using Filestack or any other file upload library.
[ ] - 3. When a member uploads a file, set its status as "Pending Approval" and notify the Focal.
[ ] - 4. The Focal can view the files and either approve or reject them, updating the status and adding remarks.
[ ] - 5. If approved, the file moves to the signing phase and is sent to the first signatory (ProgChair).
[ ] - 6. Notify the ProgChair about the pending signing task and provide necessary remarks.
[ ] - 7. Repeat the above step for each subsequent signatory (Cesu, Dean) until all signatories have signed the document.
[ ] - 8. If any signatory fails to sign within a specified timeframe, notify the Focal about non-compliance.

[ ] - Frontend Implementation:

[ ] - 1. Create login and registration pages using React and Next.js.
[ ] - 2. Implement a user authentication mechanism using JWT (JSON Web Tokens) or any other suitable method.
[ ] - 3. Upon successful login, store the user's token in local storage or cookies.
[ ] - 4. Create separate dashboards for each role (Focal, ProgChair, Cesu, Dean) with appropriate UI components.
[ ] - 5. Fetch and display files, notifications, and relevant information specific to each role in their respective dashboards.
[ ] - 6. Implement routing using Next.js to navigate between different pages and dashboards based on user roles.

[ ] - Backend Implementation:

[ ] - 1. Implement API endpoints for user authentication, file upload, file approval workflow, and notification handling.
[ ] - 2. Connect to MongoDB or any other suitable database to store user information, files, and document statuses.
[ ] - 3. Implement authentication middleware to validate JWT tokens and authorize access to protected routes based on user roles.
[ ] - 4. Write controllers and services to handle various API requests, including file upload, file approval, and notification handling.
[ ] - 5. Implement necessary business logic, such as sending notifications and updating file statuses.

[ ] - API Sign Docs Integration:
[ ] - 1.

[ ] - Tracking Signatory Progress:

[ ] - 1. Set up a database (e.g., MongoDB) to store information about documents and their signing status.
[ ] - 2. Design a document schema to store document details, signatory information, and status.
[ ] - 3. Update the signatory status in the database when they complete their signing process.
[ ] - 4. Implement mechanisms to track the progress of signatories by querying the database and calculating completion percentages.
[ ] - 5. Notify users and update their dashboards with the latest signing status and pending actions.
[ ] - 6. Handle non-compliant signatories by marking their status as "not signed" and notifying the appropriate parties.
