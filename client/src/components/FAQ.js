// FAQ.js
import React, { useState } from 'react';
import './FAQ.css'; // Link to your CSS file

const FAQ = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const faqs = [
    {
      question: "What is redSpy?",
      answer: "redSpy is a comprehensive monitoring app designed to help users keep track of various activities on mobile devices, providing peace of mind regarding safety and privacy."
  },
  {
      question: "How does redSpy work?",
      answer: "redSpy operates by utilizing advanced monitoring technology to provide access to features such as text message monitoring, GPS tracking, call logs, and more. Once installed on the target device, users can access the data through a secure control panel."
  },
  {
      question: "Is redSpy legal to use?",
      answer: "The legality of using monitoring apps varies by jurisdiction. It is important to ensure that you comply with local laws regarding monitoring and privacy. Always obtain consent from the device owner before monitoring their activities."
  },
  {
      question: "Can I monitor social media activity?",
      answer: "Yes, redSpy allows you to monitor various social media platforms, including Instagram, Snapchat, Facebook Messenger, and more, providing insights into user interactions and content shared."
  },
  {
      question: "How can I access my monitoring data?",
      answer: "You can access all your monitoring data through the redSpy control panel, which can be accessed via a web browser or mobile app. Simply log in with your credentials to view the data."
  },
  {
      question: "What happens if I change my device?",
      answer: "If you change your device, you will need to uninstall redSpy from the old device and install it on the new one. Ensure you follow the setup instructions for the new device."
  },
  {
      question: "Is there a trial version available?",
      answer: "Yes, redSpy offers a trial version for new users to explore its features. You can sign up for the trial on our website to test the app before committing to a subscription."
  },
  {
      question: "How often is the data updated?",
      answer: "Data is updated in real-time or at regular intervals, depending on the feature. Most monitoring activities, like GPS tracking and messaging, provide updates almost instantly."
  },
  {
      question: "Can I use redSpy on multiple devices?",
      answer: "Yes, you can monitor multiple devices with a single account. However, each device will require a separate installation of the app."
  },
  {
      question: "Do I need to root or jailbreak the device?",
      answer: "No, redSpy does not require rooting or jailbreaking the device for most of its features. However, some advanced features may require additional permissions."
  },
  {
      question: "What should I do if I forget my password?",
      answer: "If you forget your password, you can use the 'Forgot Password?' link on the login page to reset it. Follow the instructions sent to your registered email to create a new password."
  },
  {
      question: "Can I see deleted messages or data?",
      answer: "redSpy may allow access to some deleted messages, depending on the specific feature and the device's operating system. However, there is no guarantee that all deleted data can be recovered."
  },
  {
      question: "How do I contact customer support?",
      answer: "You can contact customer support through the help section in your control panel, or you can email us directly at support@redspy.com. Our team is available 24/7 to assist you."
  },
  ];

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="faq-section">
      <h2 style={{ color: 'white' }}>Frequently Asked Questions</h2>
      <div className="faq-grid">
        {faqs.map((faq, index) => (
          <div key={index} className="faq-card" onClick={() => toggleExpand(index)}>
            <div className="faq-question">
              <span className="plus-sign">{expandedIndex === index ? '-' : '+'}</span>
              <span>{faq.question}</span>
            </div>
            {expandedIndex === index && (
              <div className="faq-answer">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
