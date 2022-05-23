import { FAQCategories } from "../../src/components/ComponentIndex";

export default {
  title: "Molecules/FAQ Categories",
  component: FAQCategories,
};

export const Main = {
  args: {
    categories: [
      {
          "title": "SIS and AdDU Emails",
          "description": "Lorem",
          "icon": "emailOutline",
          "route": "/help_portal/SISAndAdDUEmails"
      },
      {
          "title": "AdDU Online Learning Environment",
          "description": "ipsum",
          "icon": "webIcon",
          "route": "/help_portal/AdDUOnlineLearningEnvironment"
      },
      {
          "title": "AdDU GSuite Accounts and Email Responses",
          "description": "sit",
          "icon": "googleIcon",
          "route": "/help_portal/AdDUEmail"
      },
      {
          "title": "Enrollment and Registration",
          "description": "dolor",
          "icon": "schoolOutline",
          "route": "/help_portal/EnrollmentAndRegistration"
      },
      {
          "title": "Scholarship",
          "description": "amit",
          "icon": "idCardH",
          "route": "/help_portal/Scholarship"
      }
    ]
  },
};
