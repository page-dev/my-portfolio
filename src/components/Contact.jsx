import React from 'react';
import { Facebook, Instagram, Twitter, Github, Dribbble } from 'lucide-react';

export function Contact() {
  return (
    <footer className="border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-8">
            <span className="text-sm text-gray-600 dark:text-gray-400">
              Paul Julius D. Labrador
            </span>
            <div className="flex gap-6">
              <a href="https://github.com/page-dev" className="text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200">
                Github
              </a>
              <a href="mailto:pauljulius8709@gmail.com" className="text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200">
                Email me!
              </a>
            </div>
          </div>
          
          <div className="flex gap-4">
            <a href="https://www.facebook.com/pauljulius.labrador" className="text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-300 transition-colors">
              <Facebook className="w-4 h-4" />
            </a>
            <a href="https://github.com/page-dev" className="text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-300 transition-colors">
              <Github className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Contact;