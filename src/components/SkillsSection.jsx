import { skills, iconMap } from '@/data';
import { useState } from 'react';

export const SkillsSection = () => {

    const [activeCategory, setActiveCategory] = useState('all')

    return (
        <section id='skills' className='py-24 px-4 relative bg-secondary/30'>
            <div className='container mx-auto max-w-5xl'>
                <h2 className='text-3xl md:text-4xl font-bold mb-12 text-center'>
                    My <span className='text-primary'> Skills</span>
                </h2>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                    {
                        skills.map((skill, key) => (
                            <div key={ key } className='bg-card p-6 rounded-lg shadow-xs card-hover'>
                                <div className='mb-4 flex flex-col items-center gap-4'>
                                    { iconMap[skill.icon] }
                                    <h3 className='font-semibold text-lg'>{ skill.name }</h3>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

