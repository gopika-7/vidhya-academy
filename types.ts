
import type React from 'react';

export interface Course {
  title: string;
  description: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
}

export interface Feature {
  title: string;
  description: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
}

export interface Testimonial {
  quote: string;
  author: string;
  location: string;
  avatar: string;
}

export interface Stat {
    value: string;
    label: string;
}
