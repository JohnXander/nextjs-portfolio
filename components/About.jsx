import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AboutImg from '../public/assets/about.jpg';

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <p className='uppercase text-xl tracking-widest text-[#5651e5]'>
            About
          </p>
          <h2 className='py-4'>Who I Am</h2>
          <p className='py-2 text-gray-600'>
            I specialise in building mobile responsive full-stack applications
            using the PERN Stack (PostgreSQL, Express.js, React.js, Node.js). I’m
            passionate about learning new technologies and understand there is
            more than one way to accomplish a task. Though I am most proficient
            in building full-stack applications using the PERN Stack and, more
            recently (the stack that I’m currently learning), the T3 Stack (TypeScript,
            Next.js, TailwindCSS, Prisma, tRPC), I am a quick learner and can
            pick up new tech stacks as needed. I believe that being a great
            developer is not using one specific language, but choosing the
            best tool for the job.
          </p>
          <p className='py-2 text-gray-600'>
            I started web developement in late 2021, getting creative with some Vanilla
            JavaScript projects that inspired me. Since then, I completed a 6-month coding
            bootcamp in 2022 where I  developed a strong understanding of fundamental CS concepts
            like Object Oriented Programming, REST, and Test Driven Development which then led to 
            some self-taught experience building software with more modern techniques like using
            tRPC with NextJS.
          </p>
          <Link href='/#projects'>
            <p className='py-2 text-gray-600 underline cursor-pointer'>
              Check out some of my latest projects.
            </p>
          </Link>
        </div>
        <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
          <Image src={AboutImg} className='rounded-xl' alt='/' />
        </div>
      </div>
    </div>
  );
};

export default About;
