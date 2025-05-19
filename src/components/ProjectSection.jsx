import { projects } from '@/data';
import { ArrowRightIcon } from 'lucide-react';
import { Carousel } from '@/components/ui/Carousel';


export const ProjectSection = () => {
    return (
        <section id="projects" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    Featured <span className="text-primary"> Projects </span>
                </h2>

                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Here are some of my recent projects. Each project was 
                    carefully crafted with attention to detail, 
                    perfoormance, and user experience.
                </p>
                
                <Carousel items={projects} />

                <div className='text-center mt-12'>
                    <a href="https://github.com/gabrielravelo/" target='_blank' className='cosmic-button w-fit flex items-center mx-auto gap-2'>
                        Check my Github <ArrowRightIcon size={16} />
                    </a>
                </div>
            </div>
        </section>
    )
}
