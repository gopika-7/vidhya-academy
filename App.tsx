import React, { useState } from 'react';
import type { Course, Feature, Testimonial } from './types';
import {
  BookOpenIcon,
  AcademicCapIcon,
  GlobeAltIcon,
  SparklesIcon,
  ClockIcon,
  Bars3Icon,
  XMarkIcon,
  CodeBracketIcon,
  VideoCameraIcon,
  WhatsappIcon,
} from './components/Icons';

const courses: Course[] = [
    { title: 'English', description: 'Master language skills from basics to advanced levels.', icon: BookOpenIcon },
    { title: 'Tamil', description: 'Explore the richness of Tamil literature and grammar.', icon: BookOpenIcon },
    { title: 'Hindi', description: 'Learn the national language with our structured curriculum.', icon: BookOpenIcon },
    { title: 'Maths', description: 'Build strong analytical and problem-solving skills.', icon: SparklesIcon },
    { title: 'Science', description: 'Discover the wonders of physics, chemistry, and biology.', icon: GlobeAltIcon },
    { title: 'Social Studies', description: 'Understand history, geography, and civics.', icon: GlobeAltIcon },
    { title: '11th & 12th Stds', description: 'Specialized coaching for higher secondary students.', icon: AcademicCapIcon },
    { title: 'Coding & AI', description: 'Learn to code and explore the future of artificial intelligence.', icon: CodeBracketIcon },
];

const features: Feature[] = [
    {
        title: 'Expert Tutors',
        description: 'Learn from experienced educators who are passionate about teaching and student success.',
        icon: AcademicCapIcon,
    },
    {
        title: 'Global Reach',
        description: 'We connect with students from all corners of the world, creating a diverse learning community.',
        icon: GlobeAltIcon,
    },
    {
        title: 'Flexible Scheduling',
        description: 'Our online classes are scheduled to accommodate different time zones and student needs.',
        icon: ClockIcon,
    },
    {
        title: 'Interactive Zoom Classes',
        description: 'Engage in real-time learning with our tutors through live, face-to-face Zoom sessions.',
        icon: VideoCameraIcon,
    },
];

const testimonials: Testimonial[] = [
    {
        quote: 'The personalized attention I received at Vidhya Academy helped me excel in my exams. The teachers are fantastic!',
        author: 'David Chen',
        location: 'Toronto, Canada',
        avatar: `https://i.pravatar.cc/150?u=davidchen`,
    },
    {
        quote: 'I love how I can learn my subjects from the comfort of my home. The online platform is user-friendly and very effective.',
        author: 'Fatima Al-Sayed',
        location: 'Dubai, UAE',
        avatar: `https://i.pravatar.cc/150?u=fatimaalsayed`,
    },
];

const App: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const whatsappNumber = '918508862976';
    const whatsappLink = `https://wa.me/${whatsappNumber}`;

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        const href = e.currentTarget.getAttribute('href');
        if (href && href.startsWith('#')) {
            e.preventDefault();
            const element = document.querySelector(href);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
            setIsMenuOpen(false); // Close mobile menu on click
        }
    };

    return (
        <div className="bg-gray-50 min-h-screen text-gray-800">
            {/* Header */}
            <header className="bg-white shadow-sm sticky top-0 z-50">
                <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
                    <a href="#" className="text-2xl font-bold text-indigo-600">
                        Vidhya Academy
                    </a>
                    <div className="hidden md:flex space-x-6 items-center">
                        <a href="#courses" onClick={handleNavClick} className="text-gray-600 hover:text-indigo-600">Courses</a>
                        <a href="#why-us" onClick={handleNavClick} className="text-gray-600 hover:text-indigo-600">Why Us</a>
                        <a href="#testimonials" onClick={handleNavClick} className="text-gray-600 hover:text-indigo-600">Testimonials</a>
                        <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700">
                            Contact Us
                        </a>
                    </div>
                    <div className="md:hidden">
                        <button onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
                            {isMenuOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
                        </button>
                    </div>
                </nav>
                {isMenuOpen && (
                    <div className="md:hidden bg-white py-4">
                        <a href="#courses" onClick={handleNavClick} className="block px-6 py-2 text-gray-600 hover:bg-indigo-50">Courses</a>
                        <a href="#why-us" onClick={handleNavClick} className="block px-6 py-2 text-gray-600 hover:bg-indigo-50">Why Us</a>
                        <a href="#testimonials" onClick={handleNavClick} className="block px-6 py-2 text-gray-600 hover:bg-indigo-50">Testimonials</a>
                        <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="block mx-6 my-2 bg-indigo-600 text-white text-center px-4 py-2 rounded-md hover:bg-indigo-700">
                            Contact Us
                        </a>
                    </div>
                )}
            </header>

            <main>
                {/* Hero Section */}
                <section className="bg-white py-20">
                    <div className="container mx-auto px-6 text-center">
                        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight">
                            Global Learning, <span className="text-indigo-600">Personalized for You.</span>
                        </h1>
                        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                            Vidhya Academy offers world-class education to students everywhere. Join us to unlock your true potential.
                        </p>
                        <div className="mt-8">
                            <a href="#courses" onClick={handleNavClick} className="bg-indigo-600 text-white px-8 py-3 rounded-full font-semibold text-lg hover:bg-indigo-700 transition duration-300">
                                Explore Our Courses
                            </a>
                        </div>
                    </div>
                </section>

                {/* Courses Section */}
                <section id="courses" className="py-20">
                    <div className="container mx-auto px-6">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold">Subjects We Offer</h2>
                            <p className="text-gray-600 mt-2">Comprehensive curriculum for a wide range of subjects.</p>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                            {courses.map((course) => (
                                <div key={course.title} className="bg-white p-6 rounded-lg shadow-md flex items-start space-x-4">
                                    <div className="bg-indigo-100 p-3 rounded-full">
                                        <course.icon className="h-6 w-6 text-indigo-600" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold mb-1">{course.title}</h3>
                                        <p className="text-gray-600">{course.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
                
                {/* Why Vidhya Academy Section */}
                <section id="why-us" className="py-20 bg-white">
                    <div className="container mx-auto px-6">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div className="order-2 lg:order-1">
                                <h2 className="text-3xl font-bold mb-4">Why Vidhya Academy?</h2>
                                <p className="text-gray-600 mb-8">We provide a supportive and engaging learning environment that caters to individual student needs, ensuring academic excellence and personal growth.</p>
                                <div className="space-y-6">
                                    {features.map((feature) => (
                                        <div key={feature.title} className="flex items-start">
                                            <div className="flex-shrink-0 bg-indigo-100 p-3 rounded-full mr-4">
                                                <feature.icon className="h-6 w-6 text-indigo-600" />
                                            </div>
                                            <div>
                                                <h3 className="text-xl font-semibold">{feature.title}</h3>
                                                <p className="text-gray-600">{feature.description}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                             <div className="order-1 lg:order-2">
                                <img
                                    src="https://images.pexels.com/photos/4145190/pexels-photo-4145190.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                    alt="A student learning online with Vidhya Academy"
                                    className="rounded-lg shadow-2xl w-full h-auto object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Testimonials Section */}
                <section id="testimonials" className="py-20">
                    <div className="container mx-auto px-6">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold">What Our Students Say</h2>
                        </div>
                        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                            {testimonials.map((testimonial) => (
                                <figure key={testimonial.author} className="bg-white p-8 rounded-lg shadow-md">
                                    <blockquote className="text-lg text-gray-700 italic border-l-4 border-indigo-500 pl-4">
                                        "{testimonial.quote}"
                                    </blockquote>
                                    <figcaption className="mt-6 flex items-center">
                                        <img className="h-12 w-12 rounded-full object-cover" src={testimonial.avatar} alt={testimonial.author} />
                                        <div className="ml-4">
                                            <div className="font-semibold">{testimonial.author}</div>
                                            <div className="text-gray-500 text-sm">{testimonial.location}</div>
                                        </div>
                                    </figcaption>
                                </figure>
                            ))}
                        </div>
                    </div>
                </section>
            </main>

            {/* Footer */}
            <footer className="bg-gray-800 text-white">
                <div className="container mx-auto px-6 py-8 text-center">
                    <h3 className="text-2xl font-bold">Vidhya Academy</h3>
                    <p className="mt-2">Your global partner in education.</p>
                    <div className="mt-4 space-y-2">
                        <p>Email: <a href="mailto:gopika27gwen@gmail.com" className="text-indigo-300 hover:underline">gopika27gwen@gmail.com</a></p>
                        <p>Contact: <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="text-indigo-300 hover:underline">+91 8508862976 (WhatsApp only)</a></p>
                    </div>
                    <p className="text-gray-400 mt-6">&copy; {new Date().getFullYear()} Vidhya Academy. All rights reserved.</p>
                </div>
            </footer>
            
            {/* Floating WhatsApp Button */}
             <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition duration-300 flex items-center space-x-2"
                aria-label="Chat with us on WhatsApp"
            >
                <WhatsappIcon className="h-8 w-8" />
                 <span className="font-medium hidden sm:inline">Chat with us</span>
            </a>
        </div>
    );
};

export default App;