"use client";

import user_image from './user-image1.jpg';
import code_icon from './code-icon.png';
import code_icon_dark from './code-icon-dark.png';
import edu_icon from './edu-icon.png';
import edu_icon_dark from './edu-icon-dark.png';
import project_icon from './project-icon.png';
import project_icon_dark from './project-icon-dark.png';
import vscode from './vscode.png';
import firebase from './firebase.png';
import figma from './figma.png';
import git from './git.png';
import mongodb from './mongodb.png';
import right_arrow_white from './right-arrow-white.png';
import logo from './logo.png';
import logo_dark from './logo_dark.png';
import mail_icon from './mail_icon.png';
import mail_icon_dark from './mail_icon_dark.png';
import profile_img from './profile-img.png';
import download_icon from './download-icon.png';
import hand_icon from './hand-icon.png';
import header_bg_color from './header-bg-color.png';
import moon_icon from './moon_icon.png';
import sun_icon from './sun_icon.png';
import arrow_icon from './arrow-icon.png';
import arrow_icon_dark from './arrow-icon-dark.png';
import menu_black from './menu-black.png';
import menu_white from './menu-white.png';
import close_black from './close-black.png';
import close_white from './close-white.png';
import web_icon from './web-icon.png';
import mobile_icon from './mobile-icon.png';
import ui_icon from './ui-icon.png';
import graphics_icon from './graphics-icon.png';
import right_arrow from './right-arrow.png';
import send_icon from './send-icon.png';
import right_arrow_bold from './right-arrow-bold.png';
import right_arrow_bold_dark from './right-arrow-bold-dark.png';
import wordpress from './wordpress.png';

export const assets = {
    user_image,
    code_icon,
    code_icon_dark,
    edu_icon,
    edu_icon_dark,
    project_icon,
    project_icon_dark,
    vscode,
    firebase,
    figma,
    git,
    mongodb,
    right_arrow_white,
    logo,
    logo_dark,
    mail_icon,
    mail_icon_dark,
    profile_img,
    download_icon,
    hand_icon,
    header_bg_color,
    moon_icon,
    sun_icon,
    arrow_icon,
    arrow_icon_dark,
    menu_black,
    menu_white,
    close_black,
    close_white,
    web_icon,
    mobile_icon,
    ui_icon,
    graphics_icon,
    right_arrow,
    send_icon,
    right_arrow_bold,
    right_arrow_bold_dark,
    wordpress
};

export const workData = [
    {
        title: 'AI Resume Analyzer',
        description: 'Web Application',
        bgImage: '/work-1.jpg',
        techStack: ['Next.js', 'TypeScript', 'Tailwind', 'React'],
        backTitle: 'AI Resume Analyzer',
        backDescription: 'An intelligent web application that analyzes resumes using AI technology. Built with Next.js and TypeScript, it provides detailed feedback and suggestions for resume improvement.',
        liveLink: 'https://resume-analyzer.sahalkv.xyz/',
        githubLink: 'https://github.com/iamsahal77/resume-analyzer'
    },
    {
        title: 'Ecommerce ',
        description: 'Web Application',
        bgImage: '/work-3.jpg',
        techStack: ['MongoDB', 'Express.js', 'React', 'Node.js'],
        backTitle: 'Ecommerce Platform',
        backDescription: 'A full-stack ecommerce platform built with the MERN stack. Features user authentication, product catalog, and payment integration.',
        liveLink: 'https://ecommerce.sahalkv.xyz/',
        githubLink: 'https://github.com/iamsahal77/forever-ecommerce'
    },
    {
        title: 'Personal AI Assistant',
        description: 'Whatsapp Chatbot',
        bgImage: '/work-2.jpg',
        techStack: ['Node.js', 'WhatsApp API', 'OpenAI', 'MongoDB'],
        backTitle: 'AI Assistant',
        backDescription: 'An intelligent WhatsApp chatbot powered by AI. Features natural language processing and automated customer support capabilities.',
        liveLink: '#',
        githubLink: '#'
    },
    {
        title: 'Food Delivery App',
        description: 'Mobile App',
        bgImage: '/work-4.jpg',
        techStack: ['React Native', 'Firebase', 'Redux', 'Google Maps'],
        backTitle: 'Food Delivery App',
        backDescription: 'A comprehensive food delivery mobile application built with React Native. Features restaurant browsing, real-time order tracking, GPS navigation, and payment processing.',
        liveLink: '#',
        githubLink: '#'
    },
]

export const serviceData = [
    { icon: assets.web_icon, title: 'Web design', description: 'Web development is the process of building, programming...', link: '' },
    { icon: assets.mobile_icon, title: 'Mobile app', description: 'Mobile app development involves creating software for mobile devices...', link: '' },
    { icon: assets.ui_icon, title: 'UI/UX design', description: 'UI/UX design focuses on creating a seamless user experience...', link: '' },
    { icon: assets.graphics_icon, title: 'Graphics design', description: 'Creative design solutions to enhance visual communication...', link: '' },
]

export const infoList = [
    { icon: assets.code_icon, iconDark: assets.code_icon_dark, title: 'Languages', description: 'HTML, CSS, JavaScript React Js, Next Js' },
    { icon: assets.edu_icon, iconDark: assets.edu_icon_dark, title: 'Education', description: 'Bachelor of Computer Application' },
    { icon: assets.project_icon, iconDark: assets.project_icon_dark, title: 'Projects', description: 'Built more than 5 projects' }
];

export const toolsData = [
    assets.vscode, assets.firebase, assets.mongodb, assets.figma, assets.git, assets.wordpress
];