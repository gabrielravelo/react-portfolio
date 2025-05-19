import { Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from 'lucide-react';
import { FormContactSection } from '@/components';

export const ContactSection = () => {

    return (
        <section id="contact" className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-2-5xl">
                <h2 className="text-3xl md:4xl font-bold mb-4 text-center"> Get In <span className="text-primary"> Touch</span></h2>

                <p className="text-center text-muted foreground mb-12 max-w-2xl mx-auto">
                    Have a project in mind or want to collaborate? Feel fre to reach out,
                    I'm always open to discussign new opportunities.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="space-y-8">
                        <h3 className="text-2xl font-semibold mb-6"> Contact Information </h3>

                        <div className="space-y-6 justify-center">
                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Mail className="h-6 w-6 text-primary" />
                                </div>

                                <div>
                                    <h4 className="font-medium text-left"> Email </h4>
                                    <a href="mailto:ravelogabriel2@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                                        ravelogabriel2@gmail.com
                                    </a>
                                </div>
                            </div>
                            
                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Phone className="h-6 w-6 text-primary" />
                                </div>

                                <div>
                                    <h4 className="font-medium text-left"> Phone </h4>
                                    <a href="tel:+584128008473" className="text-muted-foreground hover:text-primary transition-colors">
                                        +58 412 800-8473
                                    </a>
                                </div>
                            </div>
                            
                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <MapPin className="h-6 w-6 text-primary" />
                                </div>

                                <div>
                                    <h4 className="font-medium text-left"> Location </h4>
                                    <a className="text-muted-foreground hover:text-primary transition-colors">
                                        Caracas, Venezuela
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="pt-8">
                            <h4 className="font-medium mb-4"> Connect With Me </h4>
                            <div className="flex space-x-4 justify-center">
                                <a href="https://www.linkedin.com/in/gabrielravelo/" target="_blank">
                                    <Linkedin />
                                </a>
                                <a href="https://x.com/gabo_ravelo" target="_blank">
                                    <Twitter />
                                </a>
                                <a href="https://www.instagram.com/gabo.ravelo/" target="_blank">
                                    <Instagram />
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="bg-card p-8 rounded-lg shadow-xs">
                        <h3 className="text-2xl font-semibold mb-6"> Send a Message </h3>

                        <FormContactSection />
                    </div>
                </div>
            </div>
        </section>
    )
}

