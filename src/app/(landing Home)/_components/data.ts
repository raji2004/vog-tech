import Image from "next/image"
import { title } from "process"
import React from "react"

export const heroCarouselImg = [
    {
        src: '/img/home/whatweprovide.svg',
        size: 300
    },
    {
        src: '/img/home/whatweprovide1.svg',
        size: 300
    },
    {
        src: '/img/home/whatweprovide2.svg',
        size: 300
    },

    {
        src: '/img/home/whatweprovide.svg',
        size: 300
    },
    {
        src: '/img/home/whatweprovide1.svg',
        size: 300
    },
    {
        src: '/img/home/whatweprovide2.svg',
        size: 300
    },

]
export const serviceIntroImg = [
    {
        src: '/img/home/serviceintro.svg',
        size: 200
    },

    {
        src: '/img/home/serviceintro2.svg',
        size: 200
    },

    {
        src: '/img/home/serviceintro3.svg',
        size: 200
    },
    {
        src: '/img/home/serviceintro4.svg',
        size: 200
    },
    {
        src: '/img/home/serviceintro.svg',
        size: 200
    },

]

type CardObj = {
    title: string;
    description: string;
    icon: string;
}


export const cardData: CardObj[] = [
    {
        title: 'Personalized Solutions',
        description: 'We understand that every business is unique. Our team takes the time to thoroughly understand your specific needs, challenges, and goals. We tailor our services to provide customized solutions that drive your business forward.',
        icon: '/icon/Idea.svg'
    },
    {
        title: 'Expert Guidance',
        description: `We understand that every business is unique. Our team takes the time to thoroughly understand your specific needs, 
        challenges, and goals. We tailor our services to provide customized solutions that drive your business forward. `,
        icon: '/icon/Guidance.svg'
    },
    {
        title: 'Proactive Risk Management',
        description: `We help you identify and mitigate potential risks before they become issues. Our proactive approach to risk
         management ensures that your business remains compliant and resilient in the face of uncertainties.`,
        icon: '/icon/Identify.svg'
    },
    {
        title: 'Transparent Communication',
        description: `We believe in open and clear communication. Throughout our engagement, 
        we keep you informed with regular updates and detailed reports. Our transparent processes build trust and ensure
         you are always aware of our progress and findings.`,
        icon: '/icon/Promotion.svg'
    },
    {
        title: 'Cutting-Edge Technology',
        description: `We are committed to continuous improvement and staying ahead of industry trends.
         Our methodologies and training programs are regularly updated to incorporate the latest best practices and regulatory 
         changes, ensuring you receive the best possible service.`,
        icon: '/icon/Touch.svg'
    },
    {
        title: 'Continuous Improvement',
        description: `We are committed to continuous improvement and staying ahead of industry trends.
         Our methodologies and training programs are regularly updated to incorporate the latest best practices and 
         regulatory changes, ensuring you receive the best possible service.`,
        icon: '/icon/Touch.svg'
    },
    {
        title: 'Collaborative Partnership',
        description: `We view our relationship with clients as a partnership. We work closely with your team, offering support,
         guidance, and expertise every step of the way. Your success is our priority, and we are dedicated to helping you achieve 
         your business objectives.`,
        icon: '/icon/Support.svg'
    },
    {
        title: 'Measurable Results',
        description: `Our approach is results-driven. We focus on delivering measurable improvements in compliance, efficiency,
         and financial performance. The tangible benefits we provide reflect our commitment to your business’s success.`,
        icon: '/icon/Graphic-design.svg'
    },
    {
        title: 'Unwavering Integrity',
        description: `Integrity is the cornerstone of our business. We adhere to the highest standards of ethics
         and professionalism, ensuring that our services are reliable, credible, and trustworthy.`,
        icon: '/icon/Graphic-design.svg'
    },
]

export const faqData = [
    {
        question: 'What services do you offer?',
        answer: `We offer a wide range of services to meet your business needs. Our services include business consulting, tax audit, assurance, and more.
            We tailor our services to provide customized solutions that drive your business forward.`,
    },
    {
        question: 'How do I get started?',
        answer: `Getting started is easy! Simply contact us to schedule a consultation. Our team will work with you to understand your specific needs, challenges, and goals.
            We will then develop a customized plan to address your unique requirements and help you achieve your business objectives.`,
    },
    {
        question: 'What industries do you specialize in?',
        answer: `We work with businesses across a wide range of industries, including manufacturing, retail, healthcare, technology, and more.
            Our team has the expertise and experience to provide specialized services tailored to your industry’s unique requirements.`,
    },
    {
        question: 'How can VOG Global help my business?',
        answer: `VOG Global can help your business by providing expert guidance, personalized solutions, and proactive risk management.
            Our team will work closely with you to identify and mitigate potential risks, improve compliance, and drive your business forward.`,
    },
]
export const teamData = [
    {
        image: '/img/home/meettheteam.svg',
        title: 'UDO, OKEY OKORO CPA, MNIM, M.Sc.(UK),PHD (USA), CNA, ACTI.',
        position: 'CEO, VOG Global',
        description: `Udo is a graduate of Economics from the University of Calabar,
         MSc in international finance and account from the University of Liverpool.
          PHD in finance from the Walden University, USA. 
          He is a practicing licenced member of the Association of National Accountants of Nigeria (ANAN), 
        a practicing licenced member of the Chartered Institute of Taxation of Nigeria (CITN) and a Fellow 
        of the Association of Chartered System Accountants (ACSA), USA.`
    },
    {
        image: '/img/home/meettheteam.svg',
        title: 'UDO, OKEY OKORO CPA, MNIM, M.Sc.(UK),PHD (USA), CNA, ACTI.',
        position: 'CEO, VOG Global',
        description: `Udo is a graduate of Economics from the University of Calabar,
         MSc in international finance and account from the University of Liverpool.
          PHD in finance from the Walden University, USA. 
          He is a practicing licenced member of the Association of National Accountants of Nigeria (ANAN), 
        a practicing licenced member of the Chartered Institute of Taxation of Nigeria (CITN) and a Fellow 
        of the Association of Chartered System Accountants (ACSA), USA.`
    },
    {
        image: '/img/home/meettheteam.svg',
        title: 'UDO, OKEY OKORO CPA, MNIM, M.Sc.(UK),PHD (USA), CNA, ACTI.',
        position: 'CEO, VOG Global',
        description: `Udo is a graduate of Economics from the University of Calabar,
         MSc in international finance and account from the University of Liverpool.
          PHD in finance from the Walden University, USA. 
          He is a practicing licenced member of the Association of National Accountants of Nigeria (ANAN), 
        a practicing licenced member of the Chartered Institute of Taxation of Nigeria (CITN) and a Fellow 
        of the Association of Chartered System Accountants (ACSA), USA.`
    }
]
export const reviews = [
    {
        image: "/img/home/review.svg",
        review: "VOG Global has been an invaluable partner for our company. Their expertise in tax auditing and business consulting has helped us streamline our operations and achieve significant cost savings. The team is professional, knowledgeable, and always available to provide guidance. We couldn't have asked for a better partner",
        rating: 3,
        name: "John Doe",
        reviewertitle: "CEO",
    },
    {
        image: "/img/home/review.svg",
        review: "VOG Global has been an invaluable partner for our company. Their expertise in tax auditing and business consulting has helped us streamline our operations and achieve significant cost savings. The team is professional, knowledgeable, and always available to provide guidance. We couldn't have asked for a better partner",
        rating: 5,
        name: "Jane Doe",
        reviewertitle: "COO",
    },
    {
        image: "/img/home/review.svg",
        review: "VOG Global has been an invaluable partner for our company. Their expertise in tax auditing and business consulting has helped us streamline our operations and achieve significant cost savings. The team is professional, knowledgeable, and always available to provide guidance. We couldn't have asked for a better partner",
        rating: 4,
        name: "Michael Smith",
        reviewertitle: "CTO",
    },
];