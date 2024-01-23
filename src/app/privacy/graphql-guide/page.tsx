import HeadingParagraph from "@/components/banners/HeadingParagraph";
import React from "react";

type Props = object;

const page = (props: Props) => {
  return (
    <div>
      <HeadingParagraph
        heading="Privacy Policy For renoGPTz"
        paragraph="This privacy policy sets out how our website uses and protects any 
        information that you give us when you use our websites"
      />
      <HeadingParagraph
        heading="Privacy Policy for GraphQL Guide"
        paragraph="Welcome to GraphQL Guide, a custom GPT service offered by RenoCrypt through the OpenAI chatbot platform. Your privacy is of paramount importance to us. This Privacy Policy outlines our practices regarding the collection, use, and disclosure of information for users of the GraphQL Guide service.

1. Information We Do Not Collect
At GraphQL Guide, we are committed to protecting your privacy. We do not collect any Personally Identifiable Information (PII) from our users. Our service is designed to provide assistance without the need for personal data.

2. Information Collected by OpenAI
While RenoCrypt does not collect personal information, users should be aware that interacting with GraphQL Guide via the OpenAI platform may be subject to OpenAI's data collection practices. We advise users to review OpenAI's privacy policy for more details on their data handling procedures.

3. Use of Non-Personal Information
We may collect non-personal, anonymized data such as usage statistics and query types. This information is used solely for the purpose of improving the service and understanding user interaction trends. It cannot be used to identify individual users.

4. Data Security
RenoCrypt is committed to ensuring the security of our users' information. Although we do not collect personal data, we take reasonable measures to protect the integrity of our service and prevent unauthorized access to any stored information.

5. Changes to Our Privacy Policy
RenoCrypt reserves the right to modify this Privacy Policy at any time. Any changes will be effective immediately upon posting the revised policy on this page. We encourage users to frequently review this policy to stay informed about how we are protecting the information we collect.

6. Third-Party Links
GraphQL Guide may contain links to third-party websites. These external sites are not operated by us, and therefore, we strongly advise you to review the Privacy Policy of these websites. We have no control over, and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services.

7. Children's Privacy
Our service does not address anyone under the age of 13. We do not knowingly collect personal identifiable information from children under 13. In the case we discover that a child under 13 has provided us with personal information, we immediately delete this from our servers.

8. Your Consent
By using GraphQL Guide, you hereby consent to our Privacy Policy and agree to its terms.

9. Contact Us
If you have any questions or suggestions about our Privacy Policy, do not hesitate to contact us at [Insert Contact Information]."
      />
    </div>
  );
};

export default page;
