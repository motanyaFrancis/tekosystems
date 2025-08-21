// data/legalPagesContentData.ts
import { LegalPageContent } from "../lib/legalPagesContent";

export const legalPagesContentData: Record<string, LegalPageContent> = {
  helpCenter: {
    title: "Help Center",
    content: `
Welcome to the Help Center — your go-to resource for navigating Teko Systems Limited’s digital solutions. Whether you’re deploying new software, seeking technical support, or exploring our products and services, we’re here to guide you.

### 1. Getting Started

Create an account or sign in to access full features, including:

- Product documentation and user guides
- Access to updates, patches, and new releases
- Support ticket tracking and knowledge base articles

Browse our resource library or use the search tool to find solutions by product, industry, or challenge area.

### 2. Requesting Support

To request help:

1. Go to **Support Portal** in your dashboard
2. Select your product or service
3. Open a new support ticket with details of your issue

Our team will review and respond within the specified SLA. You can monitor progress in your dashboard.

### 3. Modifying or Upgrading Services

Need to adjust your service plan? You can:

- Upgrade or downgrade your subscription
- Add additional users or integrations
- Request a product demo for new features

Visit **My Services** > **Manage** to make changes, or contact your account manager.

### 4. Billing & Payments

We support bank transfers, mobile money (M-Pesa), and major credit cards. All transactions are secure and encrypted.

For billing inquiries, contact: **support@teko.africa**.

### 5. Security & Data Protection

Our systems are designed with enterprise-grade security. For urgent incidents (e.g., suspected breaches), contact our **24/7 support hotline** provided in your contract.

Visit our **Trust & Security** page for compliance details (ISO, GDPR, etc.).

### 6. Providing Feedback

We value your input! After resolving a ticket, you’ll be prompted to share feedback. Your insights help us continuously improve.

### 7. Need More Help?

Still stuck? Reach us via:

- **Email:** info@teko.africa  
- **Live Chat:** 9am – 6pm EAT  
- **Phone:** +254 700 000 000  

Thank you for trusting us as your digital transformation partner.
    `.trim(),
  },

  privacyPolicy: {
    title: "Privacy Policy",
    content: `
At Teko Systems Limited, your privacy is a top priority. We are committed to protecting your personal data while delivering innovative technology solutions. This Privacy Policy explains how we collect, use, and safeguard your information.

### 1. Information We Collect

We may collect:

- **Personal Information:** Name, email, phone, organization, and billing details
- **System & Usage Data:** Log files, device/browser information, IP addresses
- **Service Interactions:** Support tickets, chat logs, feature requests
- **Third-Party Data:** If you sign in via Google, Microsoft, or other services

### 2. How We Use Your Information

Your data is used to:

- Deliver and maintain our services
- Provide technical support and resolve issues
- Improve product performance and user experience
- Communicate service updates and offers (with your consent)
- Ensure security and comply with regulations

We **do not** sell your data to third parties.

### 3. Sharing Your Information

We may share data only when necessary:

- **Service Providers:** Payment processors, hosting providers, analytics tools
- **Legal Compliance:** When required by law or regulations
- **Business Transfers:** In case of mergers or acquisitions

### 4. Data Security

We implement:

- End-to-end encryption (HTTPS, TLS)  
- Encrypted storage for sensitive information  
- Access controls and staff security training  
- Regular vulnerability assessments  

### 5. Your Rights

Depending on your jurisdiction, you may:

- Access your personal data
- Request corrections or deletions
- Withdraw consent for communications
- Restrict or object to certain processing activities

To exercise your rights, email **privacy@teko.africa**.

### 6. Data Retention

We retain data only as long as necessary for business, compliance, and security purposes.

### 7. Cookies

We use cookies for:

- Authentication  
- Analytics  
- Improving website performance  

You can adjust preferences in your browser.

### 8. Contact Us

Questions? Reach us at:  

**Email:** info@teko.africa  
**Phone:** +254 700 000 000  
**Address:** Nairobi, Kenya
    `.trim(),
  },

  termsOfService: {
    title: "Terms of Service",
    content: `
These Terms of Service ("Terms") govern your use of Teko Systems Limited’s products and services. By using our solutions, you agree to these Terms.

### 1. Overview

We provide digital transformation tools and services for businesses, schools, churches, and civic organizations. Use of our services must comply with these Terms.

### 2. Account Responsibilities

- You must provide accurate information during registration  
- You are responsible for safeguarding your credentials  
- Accounts are for authorized users only  

### 3. Service and Payment

By purchasing or subscribing:

- You agree to pay applicable fees  
- Subscription renewals are automatic unless canceled  
- Refunds follow our refund policy  

### 4. Acceptable Use

You may not:

- Use services for unlawful purposes  
- Attempt unauthorized access or security breaches  
- Share, resell, or misuse software outside agreed terms  

### 5. Intellectual Property

All software, documentation, and branding are owned by Teko Systems Limited. You may not copy, modify, or redistribute without written consent.

### 6. Service Availability

While we aim for 99.9% uptime, maintenance or outages may occur. We are not liable for disruptions beyond our control.

### 7. Liability

We are not liable for:

- Indirect, incidental, or consequential damages  
- Loss of data beyond backup commitments  
- Failures caused by third-party services  

### 8. Termination

We may suspend or terminate accounts for violations of these Terms.

### 9. Updates to Terms

We may revise these Terms. Continued use after changes indicates acceptance.

### 10. Contact Us

**Email:** info@teko.africa  
**Phone:** +254 700 000 000  
**Address:** Nairobi, Kenya
    `.trim(),
  },

};
