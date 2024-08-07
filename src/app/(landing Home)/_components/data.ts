import Image from "next/image"
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
        icon: '/icon/idea.svg'
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
