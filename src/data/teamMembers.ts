import { TeamMember } from '../types/team';

// Executive images
import abhinavSwarupImg from '../imgs/executives/abhinav.png';
import darinImg from '../imgs/executives/darin.png';
import jenniferImg from '../imgs/executives/jennifer.png';

// Team lead images
import helenaImg from '../imgs/team leads/helena.png';
import arnavImg from '../imgs/team leads/arnav.png';
import danielImg from '../imgs/team leads/daniel.png';
import bryceImg from '../imgs/team leads/bryce.png';
import roxanaImg from '../imgs/team leads/roxana.png';
import martinaImg from '../imgs/team leads/martina.png';
import sylvieImg from '../imgs/team leads/sylvie.png';
import aadiImg from '../imgs/team leads/aadi.png';
import arjunImg from '../imgs/team leads/arjun.png';

export const teamMembers: TeamMember[] = [
  // Executive Board
  {
    id: '1',
    name: 'Abhinav Swarup',
    role: 'President',
    category: 'executive',
    major: 'Computer Science',
    year: 'Senior',
    bio: 'Blurb here',
    email: 'johndoe@ucsd.edu',
    image: abhinavSwarupImg,
  },
  {
    id: '2',
    name: 'Darin Djapri',
    role: 'VP ENGINEERING',
    category: 'executive',
    major: 'Mechanical Engineering',
    year: 'Senior',
    bio: "I'm a senior majoring in Computer Science with a passion for robot learning and generalization. I currently work as a research assistant at the Hao Su Lab @ UCSD, where I dabble a bit in reinforcement learning and co-design (optimization of hardware and software simultaneously). I've worked with many different morphologies of robots spanning from UAVs, hexapods, autonomous cars, arms, and humanoids. In my free time you'll catch me playing the piano or trying to teach a robot to play the piano.",
    email: 'janesmith@ucsd.edu',
    image: darinImg,
  },
  {
    id: '3',
    name: 'Jennifer Pan',
    role: 'VP OPERATIONS',
    category: 'executive',
    major: 'Electrical Engineering',
    year: 'Junior',
    bio: "Hello! I'm a second year electrical engineering and business analytics student passionate about semiconductor design (specifically at the ASIC level) as well as engineering education. At Triton Droids, you can catch me leading our operations sub-teams as well as tinkering in project work in the electrical team! Outside of workdays, you can find me tutoring in the library, learning Japanese, exploring new trolley stations, perfecting my matcha recipe, or sunset chasing.",
    email: 'mikejohnson@ucsd.edu',
    image: jenniferImg,
  },

  // Team Leads
  {
    id: '4',
    name: 'Helena Phamová',
    role: 'PROJECT MANAGER',
    category: 'team-lead',
    major: 'Computer Science',
    year: 'Junior',
    bio: '',
    email: 'alexchen@ucsd.edu',
    image: helenaImg,
  },
  {
    id: '5',
    name: 'Arnav Pandit',
    role: 'PROJECT DEV. OFFICER',
    category: 'team-lead',
    major: 'Mechanical Engineering',
    year: 'Senior',
    bio: '',
    email: 'emmadavis@ucsd.edu',
    image: arnavImg,
  },
  {
    id: '6',
    name: 'Daniel Sanei',
    role: 'SOFTWARE LEAD',
    category: 'team-lead',
    major: 'Electrical Engineering',
    year: 'Junior',
    bio: '',
    email: 'ryanlee@ucsd.edu',
    image: danielImg,
  },
  {
    id: '7',
    name: 'Bryce Hackel',
    role: 'ELECTRICAL LEAD',
    category: 'team-lead',
    major: 'Cognitive Science',
    year: 'Senior',
    bio: '',
    email: 'oliviamartinez@ucsd.edu',
    image: bryceImg,
  },
  {
    id: '8',
    name: 'Roxana Nevarez',
    role: 'MECHANICAL LEAD',
    category: 'team-lead',
    major: 'Cognitive Science',
    year: 'Senior',
    bio: '',
    email: 'oliviamartinez@ucsd.edu',
    image: roxanaImg,
  },
  {
    id: '9',
    name: 'Martina Danieli',
    role: 'MECHANICAL LEAD',
    category: 'team-lead',
    major: 'Cognitive Science',
    year: 'Senior',
    bio: '',
    email: 'oliviamartinez@ucsd.edu',
    image: martinaImg,
  },
  {
    id: '10',
    name: 'Sylvie Tran',
    role: 'DESIGN LEAD',
    category: 'team-lead',
    major: 'Cognitive Science',
    year: 'Senior',
    bio: '',
    email: 'oliviamartinez@ucsd.edu',
    image: sylvieImg,
  },
  {
    id: '11',
    name: 'Aadi Khanuja',
    role: 'MARKETING LEAD',
    category: 'team-lead',
    major: 'Cognitive Science',
    year: 'Senior',
    bio: '',
    email: 'oliviamartinez@ucsd.edu',
    image: aadiImg,
  },
  {
    id: '12',
    name: 'Arjun Vad',
    role: 'BUSINESS LEAD',
    category: 'team-lead',
    major: 'Cognitive Science',
    year: 'Senior',
    bio: '',
    email: 'oliviamartinez@ucsd.edu',
    image: arjunImg,
  },
];
