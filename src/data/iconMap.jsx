
import { FaCss3, FaHtml5, FaJs, FaLaravel, FaNode, FaReact } from 'react-icons/fa';
import { RiTailwindCssFill } from 'react-icons/ri';
import { SiExpress, SiGit, SiMongodb, SiPostgresql, SiTypescript } from 'react-icons/si';

export const iconMap = {
    html: <FaHtml5 className='text-5xl text-orange-500' />,
    js: <FaJs className='text-5xl text-yellow-500' />,
    css: <FaCss3 className='text-5xl text-blue-500' />,
    react: <FaReact className='text-5xl text-blue-500' />,
    ts: <SiTypescript className='text-5xl text-blue-500' />,
    tailwind: <RiTailwindCssFill className='text-5xl text-sky-500' />,
    node: <FaNode className='text-5xl text-green-500' />,
    express: <SiExpress className='text-5xl text-gray-500' />,
    laravel: <FaLaravel className='text-5xl text-red-500' />,
    mongodb: <SiMongodb className='text-5xl text-green-500' />,
    postgresql: <SiPostgresql className='text-5xl text-blue-500' />,
    git: <SiGit className='text-5xl text-orange-500' />,
}

