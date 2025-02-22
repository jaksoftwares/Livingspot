"use client";

import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const faqs = [
  {
    category: "General",
    questions: [
      {
        question: "What is LivingSpot?",
        answer: "LivingSpot is a digital marketplace that connects students and residents with landlords near educational institutions, offering seamless house listings and tenant-landlord communication.",
      },
      {
        question: "Is LivingSpot free to use?",
        answer: "Yes! Browsing listings and connecting with landlords is free for tenants. Landlords have the option to choose premium listing plans for greater visibility.",
      },
      {
        question: "Which areas does LivingSpot cover?",
        answer: "Currently, we list properties near major learning institutions, including Nairobi, Thika, and other university towns in Kenya. We are expanding to more locations soon.",
      },
      {
        question: "How do I sign up?",
        answer: "Simply click on 'Sign Up', choose whether you are a tenant or landlord, and follow the registration steps. You'll need a valid email and phone number for verification.",
      },
      {
        question: "How do I reset my password?",
        answer: "Click on 'Forgot Password' on the login page and follow the instructions to reset your password via email.",
      },
    ],
  },
  {
    category: "For Tenants",
    questions: [
      {
        question: "How do I search for a house?",
        answer: "Use our search bar and filters to refine your search by location, price range, house type, and number of bedrooms.",
      },
      {
        question: "How do I contact a landlord?",
        answer: "Click on a listing, express interest, and use our in-app messaging system to chat with the property owner.",
      },
      {
        question: "Are the houses verified?",
        answer: "We strive to verify all property listings, but we encourage tenants to conduct their own due diligence before making payments.",
      },
      {
        question: "Can I schedule a house visit?",
        answer: "Yes, you can message the landlord and request a house visit at a convenient time.",
      },
      {
        question: "Do I need to pay a deposit before moving in?",
        answer: "Deposit policies vary by landlord. Always clarify the payment terms with the landlord before committing to a rental agreement.",
      },
    ],
  },
  {
    category: "For Landlords",
    questions: [
      {
        question: "How can I list my property?",
        answer: "Sign up as a landlord, navigate to 'List Property,' and provide property details, images, pricing, and any additional information.",
      },
      {
        question: "What types of properties can I list?",
        answer: "You can list apartments, studios, hostels, bedsitters, mansions, and bungalows.",
      },
      {
        question: "Can I edit or remove my listing?",
        answer: "Yes, you can update, pause, or remove your property listing anytime via your landlord dashboard.",
      },
      {
        question: "How do I know if someone is interested in my property?",
        answer: "You will receive notifications when a tenant expresses interest or sends a message about your listing.",
      },
      {
        question: "How do I respond to tenant inquiries?",
        answer: "You can reply directly using the in-app messaging feature on your landlord dashboard.",
      },
    ],
  },
  {
    category: "Payments & Security",
    questions: [
      {
        question: "Does LivingSpot handle rent payments?",
        answer: "Currently, LivingSpot facilitates communication between landlords and tenants. However, payment integrations for secure transactions may be introduced in the future.",
      },
      {
        question: "How do I avoid rental scams?",
        answer: "Always verify listings, meet landlords in person when possible, and never make payments before visiting the property. If something seems suspicious, report it to our support team.",
      },
      {
        question: "Is my data secure?",
        answer: "Yes! We prioritize data security and privacy. Your information is encrypted and never shared with third parties without consent.",
      },
      {
        question: "What should I do if I suspect a fraudulent listing?",
        answer: "Report any suspicious listings immediately via the 'Report' button on the property page or contact our support team.",
      },
      {
        question: "Can landlords remove a tenant unfairly?",
        answer: "Landlords must follow legal procedures for eviction. If you experience unfair treatment, seek legal advice or contact local authorities.",
      },
    ],
  },
  {
    category: "Technical & Account Issues",
    questions: [
      {
        question: "I forgot my password. How do I reset it?",
        answer: "Click 'Forgot Password' on the login page and follow the instructions to reset your password via email.",
      },
      {
        question: "How can I change my account details?",
        answer: "Go to your profile settings and update your personal information, including email, phone number, and profile picture.",
      },
      {
        question: "Why am I not receiving notifications?",
        answer: "Ensure that notifications are enabled on your device and that you've allowed LivingSpot to send updates via email or SMS.",
      },
      {
        question: "How do I delete my account?",
        answer: "If you want to permanently delete your account, go to your account settings and select 'Delete Account.' Note that this action is irreversible.",
      },
    ],
  },
  {
    category: "Legal & Policies",
    questions: [
      {
        question: "What are LivingSpot’s terms and conditions?",
        answer: "You can review our terms and conditions on the 'Legal' section of our website to understand the platform’s policies and guidelines.",
      },
      {
        question: "How do I report inappropriate content?",
        answer: "If you come across any misleading or inappropriate content, click the 'Report' button on the listing page or contact our support team.",
      },
      {
        question: "Does LivingSpot offer rental agreements?",
        answer: "Currently, we do not provide rental agreements. We recommend tenants and landlords draft agreements independently to ensure clarity on rental terms.",
      },
      {
        question: "What happens if a landlord refuses to return my deposit?",
        answer: "If you have fulfilled your rental terms and the landlord refuses to return your deposit, you may need to take legal action through the relevant authorities.",
      },
    ],
  },
];

const FAQPage = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 py-12 px-6 mt-16">
      <div className="max-w-5xl mx-auto">
        {/* Page Title */}
        <h1 className="text-4xl font-bold text-center mb-6">Frequently Asked Questions</h1>
        <p className="text-lg text-center text-gray-700 mb-10">
          Find answers to common questions about LivingSpot, housing, payments, security, and more.
        </p>

        {/* FAQ Sections */}
        {faqs.map((section, sectionIndex) => (
          <div key={sectionIndex} className="mb-10">
            <h2 className="text-2xl font-semibold text-red-500">{section.category}</h2>
            <div className="mt-4 space-y-4">
              {section.questions.map((faq, index) => {
                const isOpen = openIndex === sectionIndex * 100 + index;
                return (
                  <div key={index} className="bg-white p-5 rounded-lg shadow-md">
                    <button
                      className="w-full flex justify-between items-center text-lg font-medium focus:outline-none"
                      onClick={() => toggleFAQ(sectionIndex * 100 + index)}
                    >
                      {faq.question}
                      {isOpen ? <FaChevronUp className="text-red-500" /> : <FaChevronDown className="text-gray-600" />}
                    </button>
                    {isOpen && <p className="mt-3 text-gray-700">{faq.answer}</p>}
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQPage;
