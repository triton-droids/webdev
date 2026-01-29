import { TeamMember } from '../types/team';

// Alumni Executive images
import deeptaImg from '../imgs/alumni-page/executives/deepta.png';
import udayImg from '../imgs/alumni-page/executives/uday.png';

// Alumni Team Lead images
import jakeImg from '../imgs/alumni-page/team leads/jake.png';
import gabrielImg from '../imgs/alumni-page/team leads/gabriel.png';
import madhavImg from '../imgs/alumni-page/team leads/madhav.png';
import natashaImg from '../imgs/alumni-page/team leads/natasha.png';
import harrisonImg from '../imgs/alumni-page/team leads/harrison.png';
import sankalpImg from '../imgs/alumni-page/team leads/sankalp.png';

export interface AlumniMember extends TeamMember {
  academicYear: string;
}

export const alumniMembers: AlumniMember[] = [
  // Executives
  {
    id: 'alumni-1',
    name: 'Deepta Bharadwaj',
    role: 'VP ENGINEERING',
    category: 'executive',
    academicYear: '2024-25 AY',
    image: deeptaImg,
  },
  {
    id: 'alumni-2',
    name: 'Uday Singla',
    role: 'VP OPERATIONS',
    category: 'executive',
    academicYear: '2024-25 AY',
    image: udayImg,
  },

  // Team Leads
  {
    id: 'alumni-3',
    name: 'Jake Norbie',
    role: 'SOFTWARE LEAD',
    category: 'team-lead',
    academicYear: '2024-25 AY',
    image: jakeImg,
  },
  {
    id: 'alumni-4',
    name: 'Gabriel Bortoni',
    role: 'CONTROLS LEAD',
    category: 'team-lead',
    academicYear: '2024-25 AY',
    image: gabrielImg,
  },
  {
    id: 'alumni-5',
    name: 'Madhav Baghla',
    role: 'MARKETING LEAD',
    category: 'team-lead',
    academicYear: '2024-25 AY',
    image: madhavImg,
  },
  {
    id: 'alumni-6',
    name: 'Natasha Dhanrajani',
    role: 'FINANCE LEAD',
    category: 'team-lead',
    academicYear: '2024-25 AY',
    image: natashaImg,
  },
  {
    id: 'alumni-7',
    name: 'Harrison Trinh',
    role: 'ROBOTHON 1.0 CHAIR',
    category: 'team-lead',
    academicYear: '2024-25 AY',
    image: harrisonImg,
  },
  {
    id: 'alumni-8',
    name: 'Sankalp K.',
    role: 'PROJECT MANAGER',
    category: 'team-lead',
    academicYear: '2024-25 AY',
    image: sankalpImg,
  },
];
