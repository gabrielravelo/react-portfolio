import { useEffect, useRef, useState } from 'react';
import { ArrowLeftIcon, ArrowRightIcon, ExternalLink, Github } from 'lucide-react';
import { useWindowSize } from '@/hooks/use-window-size';

export const Carousel = ({ items }) => {
    const [current, setCurrent] = useState(0);
    const [direction, setDirection] = useState(0); // -1 for left, 1 for right
    const [isAnimating, setIsAnimating] = useState(false);
    const total = items.length;
    const width = useWindowSize();
    const timeoutRef = useRef();

    const getVisible = () => {
        if (width < 768) return 1;
        if (width < 1024) return 2;
        return 3;
    };
    const visible = getVisible();

    const getWindow = () => {
        if (total <= visible) {
            const arr = [];
            for (let i = 0; i < visible; i++) {
                arr.push(items[i % total]);
            }
            return arr;
        }
        const arr = [];
        for (let i = 0; i < visible; i++) {
            arr.push(items[(current - Math.floor(visible / 2) + i + total) % total]);
        }
        return arr;
    };

    // Only show arrows if there are more items than visible
    const showArrows = total > visible;

    // For left arrow: hide if at the first possible position
    const atStart = current === 0;
    // For right arrow: hide if at the last possible position
    const atEnd = current === total - 1;

    const prev = () => {
        if (isAnimating) return;
        setDirection(-1);
        setIsAnimating(true);
        timeoutRef.current = setTimeout(() => {
            setCurrent((prev) => (prev === 0 ? 0 : prev - 1));
            setIsAnimating(false);
        }, 300);
    };

    const next = () => {
        if (isAnimating) return;
        setDirection(1);
        setIsAnimating(true);
        timeoutRef.current = setTimeout(() => {
            setCurrent((prev) => (prev === total - 1 ? 0 : prev + 1));
            setIsAnimating(false);
        }, 300);
    };

    const windowItems = getWindow();

    useEffect(() => {
        if (total <= visible) return;
        const interval = setInterval(() => {
            setDirection(1);
            setIsAnimating(true);
            timeoutRef.current = setTimeout(() => {
                setCurrent((prev) => (prev === total - 1 ? 0 : prev + 1));
                setIsAnimating(false);
            }, 300);
        }, 3000);
        return () => {
            clearInterval(interval);
            clearTimeout(timeoutRef.current);
        };
    }, [total, visible, current]);

    useEffect(() => {
        return () => clearTimeout(timeoutRef.current);
    }, []);

    const getAnimationClass = (idx) => {
        if (!isAnimating) return '';
        if (direction === 1) {
            // Slide left
            return 'animate-slide-left';
        } else if (direction === -1) {
            // Slide right
            return 'animate-slide-right';
        }
        return '';
    };

    return (
        <div className="relative flex items-center justify-center">
            {showArrows && !atStart && (
                <button
                    onClick={prev}
                    className="absolute left-0 z-10 p-2 bg-background rounded-full shadow hover:bg-primary/20 transition"
                    aria-label="Previous"
                >
                    <ArrowLeftIcon size={24} />
                </button>
            )}

            <div className="flex gap-6 w-full max-w-3xl justify-center overflow-hidden">
                {windowItems.map((item, idx) => (
                    <div
                        key={item.title + idx}
                        className={`group bg-card rounded-lg overflow-hidden shadow-xs card-hover transition-all duration-300 w-[300px] ${getAnimationClass(idx)}`}
                        style={{ minWidth: 0, flex: '0 0 300px' }}
                    >
                        <div className="h-48 overflow-hidden">
                            <img
                                src={item.image}
                                alt={item.title}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                        </div>
                        <div className="p-6">
                            <div className="flex flex-wrap gap-2 mb-4">
                                {item.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                            <h3 className="text-xl font-semibold mb-1">{item.title}</h3>
                            <p className="text-muted-foreground text-sm mb-4">{item.description}</p>
                            <div className="flex justify-between items-center">
                                <div className="flex space-x-3">
                                    <a
                                        href={item.demoUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                    >
                                        <ExternalLink size={20} />
                                    </a>
                                    <a
                                        href={item.githubUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                    >
                                        <Github size={20} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {showArrows && !atEnd && (
                <button
                    onClick={next}
                    className="absolute right-0 z-10 p-2 bg-background rounded-full shadow hover:bg-primary/20 transition"
                    aria-label="Next"
                >
                    <ArrowRightIcon size={24} />
                </button>
            )}
        </div>
    );
};