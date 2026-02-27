import ss1 from "../assets/img/Picture1.jpg"
import ss2 from "../assets/img/Picture2.jpg"
import ss3 from "../assets/img/Picture3.jpg"
import rzn1 from "../assets/img/rzn1.png"
import rzn2 from "../assets/img/rzn2.png"
import rzn3 from "../assets/img/rzn3.png"
import web1 from "../assets/img/web1.png"
import web2 from "../assets/img/web2.png"
import web3 from "../assets/img/web3.png"

const projects = [
  {
    id: "web-porto",
    title: "Web Portofolio",
    description:
      "A responsive personal portfolio showcasing projects, skills, and contact info, built with React and Tailwind.",
    summary:"",
    technology:[
        "React", 
        "Tailwind", 
        "Vite"
    ],
    images: [
     web1,
     web2,
     web3
    ],
  },
  {
    id: "smartschiz",
    title: "SmartSchiz",
    description:
      "Mobile app that monitors mental health patterns and provides analytics.",
    summary:"This Android application is designed to monitor users' heart rate and stress levels in real-time, triggering alarms when abnormal values are detected. It integrates with Firestore for secure data storage and user connectivity, allowing users to send and accept connection requests via email. Connected users can view each other’s alarm data, including heart rate, stress levels, timestamps, and location links.",
    technology:[
        "Android", 
        "Java", 
        "Google Maps API",
        "Firebase Cloud Storage",
        "Firebase Cloud Messaging",
        "Smartband",
        "GadgetBridge"
    ],
    images: [
      ss1,
      ss2,
      ss3,
    ],
  },
  {
    id: "razuna",
    title: "Razuna Alliance",
    description:
      "Simple Crud Website for Academic Purposes.",
    summary:"",
    technology:[
        "React", 
        "Tailwind", 
        "Vite"
    ],
    images: [
      rzn1,
      rzn2,
      rzn3
    ],
  },
  ];

export default projects;