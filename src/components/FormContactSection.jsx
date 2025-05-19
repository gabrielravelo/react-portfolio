import { cn } from '@/lib/utils';
import { useToast } from '@/hooks/use-toast';
import { useState } from 'react';
import { useForm } from '@/hooks/use-form';
import { SendIcon } from 'lucide-react';

const initialForm = {
    name: '',
    email: '',
    message: '',
};

export const FormContactSection = () => {

    const { VITE_EMAIL_SERVICE_ID, VITE_EMAIL_TEMPLATE_ID } = import.meta.env;
    const { toast } = useToast();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const { name, email, message, onInputChange, onResetForm } = useForm(initialForm);
    const [errors, setErrors] = useState({});

    const validate = () => {
        const newErrors = {};
        if (!name.trim()) newErrors.name = "Name is required";
        if (!email.trim()) newErrors.email = "Email is required";
        else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) newErrors.email = "Invalid email address";
        if (!message.trim()) newErrors.message = "Message is required";
        return newErrors;
    };

    const onHandleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        setErrors(validationErrors);
        if (Object.keys(validationErrors).length > 0) return;
        
        setIsSubmitting(true);
        
        let templateParams = {
            name: name,
            title: 'Contact form submission - Portfolio',
            message: message,
            email: email,
        }
        
        emailjs.send(VITE_EMAIL_SERVICE_ID, VITE_EMAIL_TEMPLATE_ID, templateParams).then(
            () => {
                toast({
                    title: 'Message sent!',
                    description: "Thank you for your message. I'll get back to you soon.",  
                });
                setIsSubmitting(false);
                onResetForm();
            },
            (err) => {
                console.log(err);
                toast({
                    title: 'Error',
                    description: "There was an error sending your message. Please try again later.",
                });
                setIsSubmitting(false);
                onResetForm();
            }
        )
    }

    return (
        <form className="space-y-6 text-left" onSubmit={ onHandleSubmit }>
            <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">Your Name</label>
                <input 
                    name="name" 
                    id="name" 
                    type="text"
                    className={ cn(
                        "w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary",
                        errors.name && "border-red-500 focus:ring-red-500 text-red-600"
                    )}
                    placeholder="Gabriel Ravelo..." 
                    value={ name }
                    onChange={ onInputChange }
                />
                {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
            </div>
            
            <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">Your Email</label>
                <input 
                    name="email" 
                    id="email" 
                    type="email"
                    className={ cn(
                        "w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary",
                        errors.email && "border-red-500 focus:ring-red-500 text-red-600"
                    )}
                    placeholder="example@email.com"
                    value={ email } 
                    onChange={ onInputChange }
                />
                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
            </div>
            
            <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">Your Message</label>
                <textarea 
                    name="message" 
                    id="message" 
                    className={ cn(
                        "w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary",
                        errors.message && "border-red-500 focus:ring-red-500 text-red-600"
                    )}
                    placeholder="Hello, I'd like to talk about..." 
                    value={ message }
                    onChange={ onInputChange }
                />
                {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
            </div>

            <button
                disabled={ isSubmitting }
                type="submit"
                className={cn(
                    "cosmic-button w-full flex items-center justify-center gap-2",
                    
                )}
            >
                { isSubmitting ? 'Sending...' : 'Send Message' }
                <SendIcon size={15} />
            </button>
        </form>
    )
}
