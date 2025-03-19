import React from 'react';
import { Box, Container, Typography } from '@mui/material';

const privacyPolicy = {
    lastUpdated: "March 2025",
    companyName: "Lambda Quantum",
    contactEmail: "support@lq-ltd.com", 
    website: "https://www.lq-ltd.com",

    introduction: `Welcome to Lambda Quantum! Your privacy is important to us. This Privacy Policy explains how we collect, use, store, and share your personal information when you use our services, including our AI API integration platform.

    By accessing or using Lambda Quantum's services, you agree to the terms outlined in this Privacy Policy. If you do not agree, please refrain from using our services.`,

    informationCollection: {
      section1: "1. Information We Collect",
      userProvided: {
        title: "1.1 Information You Provide",
        details: [
          "Account Information: When you register, we collect your name, email address, and other relevant details.",
          "Payment Information: If you make purchases, we collect billing details (processed securely through third-party payment providers).",
          "Communications: When you contact support, we collect any information you provide, including messages and attachments."
        ]
      },
      automaticCollection: {
        title: "1.2 Automatically Collected Information",
        details: [
          "Usage Data: Logs of API requests, timestamps, error reports, and system performance metrics.",
          "Device & Technical Information: IP address, browser type, operating system, and referring website.",
          "Cookies & Tracking Technologies: We use cookies and similar technologies to enhance your experience and analyze traffic (see Section 6 for details)."
        ]
      }
    },

    usageOfInformation: {
      section2: "2. How We Use Your Information", 
      purposes: [
        "To provide, maintain, and improve our AI API services.",
        "To process transactions and manage billing.",
        "To analyze service usage and optimize performance.",
        "To enhance security and prevent fraud.",
        "To communicate with you regarding updates, support, and service improvements.",
        "To comply with legal obligations and enforce our Terms of Service."
      ]
    },

    informationSharing: {
      section3: "3. Information Sharing & Disclosure",
      cases: [
        "Service Providers: We work with third-party providers (e.g., cloud hosting, payment processors) to support our infrastructure and operations.",
        "Legal Compliance: If required by law, we may disclose information to comply with legal processes, court orders, or government requests.",
        "Business Transfers: In the event of a merger, acquisition, or asset sale, your information may be transferred."
      ]
    },

    dataSecurity: {
      section4: "4. Data Security & Retention",
      description: `We implement industry-standard security measures to protect your data from unauthorized access, loss, or misuse. This includes encryption, access controls, and secure storage practices.

      Your data is securely stored on Digital Ocean servers located in Frankfurt, Germany.
      
      Your data is retained only as long as necessary for service functionality, legal compliance, and legitimate business purposes. Upon request, we will delete your data within 30 days, in accordance with applicable laws.`
    },

    userRights: {
      section5: "5. Your Rights & Choices",
      rights: [
        "Access & Correction: Request access to or correction of your personal data.",
        "Data Deletion: Request deletion of your personal information.",
        "Opt-Out of Marketing: Manage email communication preferences.", 
        "Restrict Processing: Object to certain types of data processing."
      ],
      contact: "To exercise these rights, contact us at support@lq-ltd.com."
    },

    cookiesPolicy: {
      section6: "6. Cookies & Tracking",
      usage: [
        "Remember your login sessions.",
        "Measure and analyze platform performance.",
        "Provide personalized content."
      ],
      settings: "You can adjust cookie settings via your browser preferences. Some browsers offer \"Do Not Track\" (DNT) settings, which we respect where applicable."
    },

    thirdPartyLinks: {
      section7: "7. Third-Party Links & Services",
      disclaimer: "Our platform may contain links to third-party websites or services, including AI API providers such as OpenAI, Qwen, or Claude. We do not control these third parties and are not responsible for their privacy practices. We encourage you to review their privacy policies before providing any personal information."
    },

    childrenPrivacy: {
      section8: "8. Children's Privacy",
      statement: "Lambda Quantum does not knowingly collect personal data from individuals under 16. If we learn that we have inadvertently collected such data, we will take steps to delete it immediately.\n\nIf you believe a child has provided us with personal information, please contact us at support@lq-ltd.com with the subject line \"Children's Privacy Request\" so we can remove the data."
    },

    policyUpdates: {
      section9: "9. Changes to This Privacy Policy",
      notice: "We may update this Privacy Policy periodically. Any significant changes will be communicated through:\n\nWebsite updates on https://www.lq-ltd.com\n\nWe encourage you to review this policy regularly."
    },

    contactUs: {
      section10: "10. Contact Us",
      email: "📩 Email: support@lq-ltd.com",
      website: "🌐 Website: https://www.lq-ltd.com",
      copyright: "© 2025 Lambda Quantum. All rights reserved."
    }
};

const PrivacyPolicy = () => {
  return (
    <Container maxWidth="md">
      <Box sx={{ padding: 4, backgroundColor: '#fff', borderRadius: 2, boxShadow: 1, my: 4 }}>
        <Typography variant="h4" gutterBottom sx={{ mb: 4 }}>
          Privacy Policy
        </Typography>
        
        <Typography variant="subtitle2" color="text.secondary" paragraph>
          Last Updated: {privacyPolicy.lastUpdated}
        </Typography>

        <Typography variant="body1" paragraph sx={{ whiteSpace: 'pre-line' }}>
          {privacyPolicy.introduction}
        </Typography>

        {/* Information Collection Section */}
        <Typography variant="h5" sx={{ mt: 4, mb: 2 }}>
          {privacyPolicy.informationCollection.section1}
        </Typography>
        
        <Typography variant="h6" sx={{ mt: 3, mb: 1 }}>
          {privacyPolicy.informationCollection.userProvided.title}
        </Typography>
        {privacyPolicy.informationCollection.userProvided.details.map((detail, index) => (
          <Typography key={index} variant="body1" paragraph>
            • {detail}
          </Typography>
        ))}

        <Typography variant="h6" sx={{ mt: 3, mb: 1 }}>
          {privacyPolicy.informationCollection.automaticCollection.title}
        </Typography>
        {privacyPolicy.informationCollection.automaticCollection.details.map((detail, index) => (
          <Typography key={index} variant="body1" paragraph>
            • {detail}
          </Typography>
        ))}

        {/* Usage of Information Section */}
        <Typography variant="h5" sx={{ mt: 4, mb: 2 }}>
          {privacyPolicy.usageOfInformation.section2}
        </Typography>
        {privacyPolicy.usageOfInformation.purposes.map((purpose, index) => (
          <Typography key={index} variant="body1" paragraph>
            • {purpose}
          </Typography>
        ))}

        {/* Information Sharing Section */}
        <Typography variant="h5" sx={{ mt: 4, mb: 2 }}>
          {privacyPolicy.informationSharing.section3}
        </Typography>
        {privacyPolicy.informationSharing.cases.map((item, index) => (
          <Typography key={index} variant="body1" paragraph>
            • {item}
          </Typography>
        ))}

        {/* Data Security Section */}
        <Typography variant="h5" sx={{ mt: 4, mb: 2 }}>
          {privacyPolicy.dataSecurity.section4}
        </Typography>
        <Typography variant="body1" paragraph sx={{ whiteSpace: 'pre-line' }}>
          {privacyPolicy.dataSecurity.description}
        </Typography>

        {/* User Rights Section */}
        <Typography variant="h5" sx={{ mt: 4, mb: 2 }}>
          {privacyPolicy.userRights.section5}
        </Typography>
        {privacyPolicy.userRights.rights.map((right, index) => (
          <Typography key={index} variant="body1" paragraph>
            • {right}
          </Typography>
        ))}
        <Typography variant="body1" paragraph>
          {privacyPolicy.userRights.contact}
        </Typography>

        {/* Cookies Policy Section */}
        <Typography variant="h5" sx={{ mt: 4, mb: 2 }}>
          {privacyPolicy.cookiesPolicy.section6}
        </Typography>
        {privacyPolicy.cookiesPolicy.usage.map((item, index) => (
          <Typography key={index} variant="body1" paragraph>
            • {item}
          </Typography>
        ))}
        <Typography variant="body1" paragraph>
          {privacyPolicy.cookiesPolicy.settings}
        </Typography>

        {/* Third Party Links Section */}
        <Typography variant="h5" sx={{ mt: 4, mb: 2 }}>
          {privacyPolicy.thirdPartyLinks.section7}
        </Typography>
        <Typography variant="body1" paragraph>
          {privacyPolicy.thirdPartyLinks.disclaimer}
        </Typography>

        {/* Children's Privacy Section */}
        <Typography variant="h5" sx={{ mt: 4, mb: 2 }}>
          {privacyPolicy.childrenPrivacy.section8}
        </Typography>
        <Typography variant="body1" paragraph sx={{ whiteSpace: 'pre-line' }}>
          {privacyPolicy.childrenPrivacy.statement}
        </Typography>

        {/* Policy Updates Section */}
        <Typography variant="h5" sx={{ mt: 4, mb: 2 }}>
          {privacyPolicy.policyUpdates.section9}
        </Typography>
        <Typography variant="body1" paragraph sx={{ whiteSpace: 'pre-line' }}>
          {privacyPolicy.policyUpdates.notice}
        </Typography>

        {/* Contact Section */}
        <Typography variant="h5" sx={{ mt: 4, mb: 2 }}>
          {privacyPolicy.contactUs.section10}
        </Typography>
        <Typography variant="body1" paragraph>
          {privacyPolicy.contactUs.email}
        </Typography>
        <Typography variant="body1" paragraph>
          {privacyPolicy.contactUs.website}
        </Typography>
        <Typography variant="body2" sx={{ mt: 4, textAlign: 'center' }}>
          {privacyPolicy.contactUs.copyright}
        </Typography>
      </Box>
    </Container>
  );
};

export default PrivacyPolicy;