===== AUTOMATION SIGNATORY =====

The automation-signatory web app is a document management system that streamlines the process of document approval and signing. The system includes role-based access control (RBAC) with four distinct roles: Focal, ProgChair, Cesu, and Dean. Members of the system can upload, add, delete, update, and view files using the user-friendly UI powered by Filestack. Upon file upload, the Focal, who has comprehensive access rights, is automatically notified with pending approval remarks. The Focal can review the files, either accepting or rejecting them. If approved, the files are marked for signing, and the system automatically sends them to the relevant members for signing using the API Sign Docs integration. The signing process follows a hierarchical order, starting with the ProgChair, followed by the Cesu, and finally the Dean. Each signatory receives notifications with appropriate remarks indicating the pending signing task. After all signatories have signed the document, it is sent back to the Focal for final review and approval. In case any member fails to sign the files, the system detects the non-compliance and notifies the Focal accordingly. The web app also provides a separate upload functionality for backup files, which are visible to members for viewing and downloading. The system keeps track of the signatory progress, allowing users to monitor the status of document signing. Notifications are sent to users' dashboards and email accounts to keep them informed about pending tasks and updates. Overall, the automation-signatory web app simplifies the document approval and signing process, enhancing efficiency and collaboration within the organization.

=================================

Tech Stack I'm using

- React (library of javascript)
- Next js (Frameworks of React)
- Node js
- MongoDB (Database no sql)
- Filestack (API for storing files)
- Tailwind (CSS frameworks)

=================================

This is a Capstone Project.
