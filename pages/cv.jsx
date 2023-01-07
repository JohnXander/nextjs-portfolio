import React from 'react';
import Head from 'next/head';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const resume = () => {
  return (
    <>
      <Head>
        <title>John | CV</title>
        <meta
          name='description'
          content='I’m a front-end web developer specializing in building (and occasionally designing) exceptional digital experiences.'
        />
        <link rel='icon' href='/fav.png' />
      </Head>

      <div className='max-w-[940px] mx-auto p-2 pt-[120px]'>
        <h2 className='text-center'>CV</h2>
        <div className='bg-[#d0d4d6] my-4 p-4 w-full flex justify-between items-center'>
          <h2 className='text-center'>John Bloxam</h2>
          <div className='flex'>
            <a
              href='https://www.linkedin.com/in/john-bloxam-210207250/'
              target='_blank'
              rel='noreferrer'
            >
              <FaLinkedinIn size={20} style={{ marginRight: '1rem' }} />
            </a>
            <a
              href='https://github.com/JohnXander'
              target='_blank'
              rel='noreferrer'
            >
              <FaGithub size={20} style={{ marginRight: '1rem' }} />
            </a>
          </div>
        </div>
        <div className='text-center py-4 text-xl font-bold uppercase tracking-wider'>
          <div className='hidden sm:block'>
            <p>
              Full-Stack Web Development{' '}
              <span className='px-1'>|</span> Complex Problem Solving
            </p>
          </div>
          <div className='block sm:hidden'>
            <p>Proven Leadership</p>
            <p className='py-2'>Web Development</p>
            <p>Complex Problem Solving</p>
          </div>
        </div>
        <p>
        Passionate Full Stack Developer with experience in developing full stack web applications.
        Skilled at writing clear, concise code that is easy to maintain and troubleshoot. 
        Experienced in working with both small and large teams across multiple projects. 
        Able to work independently in remote locations or in office environments as needed by the company.
        </p>

        {/* Skills */}
        <div className='text-center py-4'>
          <h5 className='text-center underline text-[18px] py-2'>Skills</h5>
          <p className='py-2'>
            <span className='font-bold'>Technical Skills</span>
            <span className='px-2'>|</span>Full-Stack Web Developer
            <span className='px-2'>|</span> HTML
            <span className='px-2'>|</span>CSS
            <span className='px-2'>|</span>JavaScript
            <span className='px-2'>|</span>TypeScript
            <span className='px-2'>|</span>React
            <span className='px-2'>|</span>Next JS
            <span className='px-2'>|</span>Express JS
            <span className='px-2'>|</span>Node JS
            <span className='px-2'>|</span> RESTAPI
            <span className='px-2'>|</span> tRPC
            <span className='px-2'>|</span>Prisma
            <span className='px-2'>|</span>PostgreSQL
            <span className='px-2'>|</span>Vercel
            <span className='px-2'>|</span>Tailwind
            <span className='px-2'>|</span> Bootstrap
            <span className='px-2'>|</span> Material UI
            <span className='px-2'>|</span> Sass
          </p>
        </div>

        <h5 className='text-center underline text-[18px] py-4'>
          Professional Experience
        </h5>
        {/* Experience */}
        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold italic'>
            BOOLEAN UK CODING ACADEMY - 6 MONTHS
            </span>
            <span className='px-2'>|</span>London, UK
          </p>
          <p className='py-1 italic'>Full-Stack Web Development (Apr - Oct 2022)</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
              Learnt how to build Full-Stack Web Applications and RESTful APIs using
              languages and frameworks including JavaScript, ReactJS, Material UI,
              ExpressJS, NodeJS etc.
            </li>
            <li>
              Became proficient with relational databases such as PostgreSQL and ORMs
              such as Prisma.
            </li>
            <li>
              Gained a strong understanding of fundamental CS concepts like Object-Oriented Programming and REST.
            </li>
            <li>
              Learnt Test Driven Development using testing frameworks such as Jest and
              Jasmine.
            </li>
            <li>
              Gained the necessary skills to bring strong git workflow practices and
              experience using agile methodologies to build software in a collaborative
              environment.
            </li>
          </ul>
        </div>

        {/*  */}
        <h5 className='text-center underline text-[18px] py-4'>
          Other Professional Experience
        </h5>
      
        {/* Experience */}
        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold'>MULTIPLE ORGANIZATIONS</span>
            <span className='px-2'>|</span>Worldwide
          </p>
          <p className='py-1 italic'>English Language Instructor (2014 – 2022)</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
              8-year career as a full-time English Language Instructor working for various companies in various locations,
              including British Council & International House.
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default resume;
