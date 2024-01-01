"use client"
import {useState, useEffect} from "react";
import axios from "axios";
import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/Footer";
import { Separator } from "@/components/ui/separator";
import AOS from "aos";
import "aos/dist/aos.css";
import { BiBrain, BiLogoJavascript, BiLogoMongodb, BiLogoReact, BiLogoYoutube, BiSolidSchool } from "react-icons/bi";
import { FaFreeCodeCamp, FaNode, FaNodeJs, FaTools } from "react-icons/fa";
import { IoBuildOutline } from "react-icons/io5";
import { TbBrandNextjs } from "react-icons/tb";
import { GiHammerNails } from "react-icons/gi";


export default function RoadmapPage() {


    const roadmapData = [
        {
            number: '01',
            title: 'Basics of Programming',
            description: 'Learn the basics of programming & how computers work',
            resources: [
                {
                    title: 'Basics',
                    link: 'https://youtu.be/zOjov-2OZ0E?si=7Y_LnQZ_mj10SfhG',
                    icon: <BiLogoYoutube className="text-red-500"/>
                },
                {
                    title: 'cs50',
                    link: 'https://www.edx.org/learn/computer-science/harvard-university-cs50-s-introduction-to-computer-science?utm_source=google&utm_campaign=19315581336&utm_medium=cpc&utm_term=cs50&hsa_acc=7245054034&hsa_cam=19315581336&hsa_grp=144242542723&hsa_ad=642052609431&hsa_src=g&hsa_tgt=kwd-296840910&hsa_kw=cs50&hsa_mt=e&hsa_net=adwords&hsa_ver=3&gad_source=1&gclid=CjwKCAiA9dGqBhAqEiwAmRpTC1knf9hYdaVMlE5mOdfTYfbbCW1kFNlkMka0vZ0XDe-kCGTsRW3HMRoCq9wQAvD_BwE',
                    icon: <BiSolidSchool className="text-blue-600"/>
                }
            ]           
        },
        {
            number: '02',
            title: 'HTML & CSS',
            description: 'It is time to learn the basics of web development using the building blocks of the web (HTML & CSS).',
            resources: [
                {
                    title: 'FCC',
                    link: 'https://www.freecodecamp.org/learn/2022/responsive-web-design/',
                    icon: <FaFreeCodeCamp className="text-green-800"/>
                },
                {
                    title: 'Git',
                    link: 'https://youtu.be/RGOj5yH7evk?si=I-fu026AFLILSRbS',
                    icon: <BiLogoYoutube className="text-red-500"/>
                },
                {
                    title: 'Project',
                    link: 'https://youtu.be/p0bGHP-PXD4?si=s08EKVPT3caNgzxN/',
                    icon: <IoBuildOutline className="text-purple-500"/>
                }
            ]

        },
        {
            number: '03',
            title: 'JavaScript | Data Structures',
            description: 'It is time to get functional! Learn JavaScript & how to use it to make your websites interactive.',
            resources: [
                {
                    title: 'FCC',
                    link: 'https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/',
                    icon: <FaFreeCodeCamp className="text-green-800"/>
                },
                {
                    title: 'JavaScript',
                    link: 'https://youtu.be/PkZNo7MFNFg?si=iYfLsiYjPP2h7DN5',
                    icon: <BiLogoJavascript className="text-yellow-400" />
                },
                {
                    title: 'Project',
                    link: 'https://youtu.be/RGOj5yH7evk?si=I-fu026AFLILSRbS',
                    icon: <IoBuildOutline className="text-purple-500"/>
                },
            ]

        },
        {
            number: '04',
            title: 'Frameworks',
            description: 'Learn how to use JavaScript frameworks to build better & faster websites.',
            resources: [
                {
                    title: 'React',
                    link: 'https://fullstackopen.com/en/',
                    icon: <BiLogoReact className="text-cyan-500" />
                },
                {
                    title: 'React Project',
                    link: "https://youtu.be/b9eMGE7QtTk?si=HPCbJHJaBkGZq3OS",
                    icon: <IoBuildOutline className="text-purple-500"/>
                },
                {
                    title: 'Next',
                    link: 'https://www.youtube.com/watch?v=wm5gMKuwSYk',
                    icon: <TbBrandNextjs className="text-black"/>
                },
                {
                    title: 'Next Project',
                    link: "https://youtu.be/pUNSHPyVryU?si=pyuPmFD1qQVUcSs-",
                    icon: <GiHammerNails className="text-purple-500"/>
                },
               
            ]
        },
        {
            number: '05',
            title: 'Backend | APIs',
            description: 'Make your websites dynamic by learning how to build servers, user profiles, APIs & more.',
            resources: [
                
                {
                    title: 'MongoDB',
                    link: 'https://youtu.be/ofme2o29ngU?si=tN6vQG1kF_dlnd2h',
                    icon: <BiLogoMongodb className="text-green-500" />
                },
                {
                    title: 'Node',
                    link: 'https://youtu.be/SccSCuHhOw0?si=8WinLJlJl0bpF-DA',
                    icon: <FaNode className="text-green-600" />
                },
                {
                    title: 'MongoDB, Node, Express',
                    link: 'https://www.freecodecamp.org/learn/back-end-development-and-apis/',
                    icon: <FaFreeCodeCamp className="text-green-800"/>
                },
                {
                    title: 'Youtube',
                    link: 'https://youtu.be/Agw0LdW9xB4?si=3EUsRTSNq8-C3Z0w',
                    icon: <BiLogoYoutube className="text-red-500"/>
                },
                
                
            ]
        },
        {
            number: '06',
            title: 'Full Stack Development',
            description: 'Learn how to connect the frontend & backend by creating functioning full stack applications!',
            resources: [
                {
                    title: 'MERN',
                    link: 'https://youtu.be/7CqJlxBYj-M?si=aUct4yVHR92-6GUf',
                    image: 'free.webp'
                },
                {
                    title: 'MERN Project',
                    link: "https://youtu.be/0osXx2oJu44?si=jAgisHX-nI-TXNLw",
                    image: 'mern.webp'
                    
                },
                {
                    title: 'MERN Stack Project',
                    link: 'https://youtu.be/-42K44A1oMA?si=AQ6Tbf-1mfM20Qgb',
                    image: 'tools.png'
                }
                
            ]

        },
        {
            number: '07',
            title: 'Finishing Touches',
            description: 'Learn how software design, github, & other software principles work.',
            resources: [
                {
                    title: 'Software Design',
                    link: 'https://youtu.be/FLtqAi7WNBY?si=ZD843HSGgKlc9iBN',
                    image: 'youtube.png'
                },
                {
                    title: 'software',
                    link: 'https://youtu.be/tv-_1er1mWI?si=ouX4gv8L3HHEXEqR',
                    image: 'youtube.png'
                },
                {
                    title: 'Github',
                    link: 'https://youtu.be/RGOj5yH7evk?si=I-fu026AFLILSRbS',
                    image: 'git.png'
                }
            ]
        },
        {
            number: '08',
            title: 'Interview Prep',
            description: 'Learn how to prepare for interviews & get a job as a developer!',
            resources: [
                {
                    title: 'motivation',
                    link: 'https://youtu.be/Xg9ihH15Uto?si=NlXIMxIob79_9kh1',
                    image: 'youtube.png',
                },
                {
                    title: 'Mock Interview',
                    link: 'https://youtu.be/1qw5ITr3k9E?si=DjqosIoiCZkP50xi',
                    image: 'free.webp',
                },
                {
                    title: 'Interview Prep',
                    link: 'https://youtu.be/5uhmS8nzxM4?si=LhHymrGRN3qPez_R',
                    image: 'resume.jpeg',
                }
            ]
        }

    ]
    
    useEffect(() => {
        AOS.init({
          disable: "phone",
          duration: 500,
          easing: "ease-out-cubic",
        });
      }, []);

    return (
        <div className="mt-6">
            <h1 className="text-5xl text-center font-extrabold" data-aos='fade-right'>Roadmap</h1>
            <p data-aos='fade-right' className="text-xl text-center font-semibold text-slate-400">Full roadmap to being a web developer</p>

            
            <div className='flex items-center justify-center' data-aos='fade-right'>
                <Separator className='w-20 h-2 rounded bg-slate-200 mt-3'/>
            </div>

            <div data-aos='fade-left'>
            {/* Map through roadmap data */}
            {roadmapData.map((item, index) => (
                <div key={index} className="mt-8 space-y-6 max-w-xl mx-auto rounded p-5  shadow-2xl shadow-black hover:shadow-violet-500 hover:duration-700">
                    <div className="flex justify-between ">
                        <h1 className="text-4xl font-extrabold">{item.title}</h1>
                        <p className="font-semibold text-4xl md: text-md">{item.number}</p>  
                    </div>

                    <p className="text-center font-semibold text-slate-300 text-lg">{item.description}</p>

                    <div className="flex justify-center space-x-8">
                        {item.resources.map((resource, resIndex) => (
                            <Link key={resIndex} href={resource.link}>
                                
                                    <p className="text-5xl bg-slate-200 shadow-xl shadow-black hover:scale-105 transition-transform duration-500 h-[70px] w-[70px] flex justify-center items-center rounded">{resource.icon}</p>
                                
                            </Link>
                        ))}
                    </div>
                </div>
            ))}
  
            </div>
            <Footer />
        </div>
    )
}