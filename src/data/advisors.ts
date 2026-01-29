import type { Advisor } from '../types/advisor';

// Academic advisors images
import michaelImg from '../imgs/advisors-page/academic advisors/michael.png';
import sylviaImg from '../imgs/advisors-page/academic advisors/sylvia.png';

// Advisory board images
import nicholasImg from '../imgs/advisors-page/advisory board/nicholas.png';
import gertImg from '../imgs/advisors-page/advisory board/gert.png';
import xiaolongImg from '../imgs/advisors-page/advisory board/xiaolong.png';

export const academicAdvisors: Advisor[] = [
  { name: 'Michael Yip', department: 'ECE Department', image: michaelImg },
  { name: 'Sylvia Herbert', department: 'MAE Department', image: sylviaImg },
];

export const advisoryBoard: Advisor[] = [
  {
    name: 'Nicholas Gravish',
    department: 'MAE Department',
    image: nicholasImg,
  },
  {
    name: 'Gert Cauwenberghs',
    department: 'BENG Department',
    image: gertImg,
  },
  {
    name: 'Xiaolong Wang',
    department: 'ECE Department',
    image: xiaolongImg,
  },
];
