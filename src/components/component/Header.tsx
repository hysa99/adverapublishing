'use client'

import { Contact } from '@/components/component/contact';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Link from "next/link";
import * as React from 'react';
import { JSX, SVGProps } from "react";




const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 700,
    height: 400,
    justifycontent:'center',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
  };

const ServicePage = '/services';
const AboutPage = '/about'; // Example path
const ContactPage = '/contact'; // Example path



export function Header() {
    const [open, setOpen] = React.useState(false);
  
    const handleOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };
  
  
    return (
      <div className="flex flex-col">
        <header className="flex items-center px-4 py-4">
          <Link href="/" className="flex items-center justify-center" prefetch={false}>
            <MountainIcon className="h-6 w-6" />
            <span className="font-bold text-xl">Advera Publishing</span>
          </Link>
          <nav className="ml-auto flex gap-4 sm:gap-6">
            <Link href={ServicePage} className="text-sm font-medium hover:underline underline-offset-4">
              Services
            </Link>
            <Link href={AboutPage} className="text-sm font-medium hover:underline underline-offset-4">
              About
            </Link>
            <Link onClick={handleOpen} href="#" className="text-sm font-medium hover:underline underline-offset-4">
              Contact
            </Link>
          </nav>
          <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="parent-modal-title"
          aria-describedby="parent-modal-description"
        >
          <Box sx={{ ...style, width: 1000, height: 700}}>
            <Contact/>
          </Box>
        </Modal>
        </header>
    </div>
  )
}


function MountainIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
      </svg>
    )
  }

  

export { Modal };

