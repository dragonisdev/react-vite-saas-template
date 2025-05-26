import React from 'react';
import { GithubIcon, TwitterIcon, LinkedinIcon } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-muted py-16 mt-auto">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center mb-6">
              <svg className="w-8 h-8 mr-2" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 2L2 9L16 16L30 9L16 2Z" fill="#8250FF" />
                <path d="M2 16L16 23L30 16" stroke="#8250FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M2 23L16 30L30 23" stroke="#8250FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span className="text-xl font-bold">Deployify</span>
            </div>
            <p className="text-white/60 text-sm mb-6">
              The modern deployment platform for your next project.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white/60 hover:text-white transition-colors" aria-label="Twitter">
                <TwitterIcon size={20} />
              </a>
              <a href="#" className="text-white/60 hover:text-white transition-colors" aria-label="GitHub">
                <GithubIcon size={20} />
              </a>
              <a href="#" className="text-white/60 hover:text-white transition-colors" aria-label="LinkedIn">
                <LinkedinIcon size={20} />
              </a>
            </div>
          </div>

          <div className="col-span-1">
            <h3 className="font-semibold mb-4">Platform</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-white/60 hover:text-white transition-colors text-sm">Features</a></li>
              <li><a href="#" className="text-white/60 hover:text-white transition-colors text-sm">Pricing</a></li>
              <li><a href="#" className="text-white/60 hover:text-white transition-colors text-sm">Integrations</a></li>
              <li><a href="#" className="text-white/60 hover:text-white transition-colors text-sm">Enterprise</a></li>
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-white/60 hover:text-white transition-colors text-sm">Documentation</a></li>
              <li><a href="#" className="text-white/60 hover:text-white transition-colors text-sm">Guides</a></li>
              <li><a href="#" className="text-white/60 hover:text-white transition-colors text-sm">Blog</a></li>
              <li><a href="#" className="text-white/60 hover:text-white transition-colors text-sm">Status</a></li>
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-white/60 hover:text-white transition-colors text-sm">About</a></li>
              <li><a href="#" className="text-white/60 hover:text-white transition-colors text-sm">Careers</a></li>
              <li><a href="#" className="text-white/60 hover:text-white transition-colors text-sm">Contact</a></li>
              <li><a href="#" className="text-white/60 hover:text-white transition-colors text-sm">Legal</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row md:items-center md:justify-between text-sm text-white/60">
          <p>© 2025 Deployify. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};