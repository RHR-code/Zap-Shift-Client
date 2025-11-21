import React from "react";

const FAQ = () => {
  const faqs = [
    {
      id: 1,
      question: "How does this posture corrector work?",
      answer:
        "A posture corrector works by providing support and gentle alignment to your shoulders, back, and spine. It helps you maintain a natural upright posture throughout the day, reduces slouching, and trains your muscles to develop healthy posture habits over time.",
    },
    {
      id: 2,
      question: "Is it suitable for all ages and body types?",
      answer:
        "Yes, the posture corrector is designed to fit a wide range of body types and ages. With adjustable straps and a flexible design, it comfortably adapts to different shapes, ensuring proper support without restricting movement.",
    },
    {
      id: 3,
      question: "Does it really help with back pain and posture improvement?",
      answer:
        "Absolutely. Consistent use can relieve back, neck, and shoulder discomfort caused by poor posture. By gently aligning your spine and reducing muscle strain, it supports long-term posture improvement and promotes a healthier sitting and standing habit.",
    },
    {
      id: 4,
      question: "Does it have smart features like vibration alerts?",
      answer:
        "Some advanced versions of the posture corrector include smart sensors and vibration alerts. These features gently remind you to straighten up whenever you start slouching, helping you build better posture awareness over time.",
    },
    {
      id: 5,
      question: "How will I be notified when the product is back in stock?",
      answer:
        "You can sign up for restock notifications using your email or phone number. Once the product is available again, you will receive an instant alert so you can place your order right away.",
    },
  ];

  return (
    <div>
      <div>
        <h2 className="font-extrabold text-secondary text-3xl pb-4 text-center mb-5">
          Frequently Asked Question (FAQ)
        </h2>
        <p className="text-center max-w-[832px] mx-auto pb-20">
          Enhance posture, mobility, and well-being effortlessly with Posture
          Pro. Achieve proper alignment, reduce pain, and strengthen your body
          with ease!
        </p>
      </div>
      <div className="space-y-5">
        {faqs.map((faq) => (
          <div
            key={faq.id}
            className="collapse collapse-arrow bg-base-100 border border-base-300"
          >
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title font-semibold">{faq.question}</div>
            <div className="collapse-content text-sm">{faq.answer}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
