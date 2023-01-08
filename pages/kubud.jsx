import Image from 'next/image';
import React from 'react';
import kubudImg from '../public/assets/projects/kubud.png';
import kubudSignup from '../public/assets/projects/kubud-signup.png';
import kubudAccount from '../public/assets/projects/kubud-account.png';
import kubudEmpty from '../public/assets/projects/kubud-empty.png';
import kubudFull from '../public/assets/projects/kubud-full.png';
import kubudMatches from '../public/assets/projects/kubud-matches.png';
import kubudMeal from '../public/assets/projects/kubud-meal.png';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';

const kubud = () => {
  return (
    <div className='w-full'>
      <div className='w-screen h-[50vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10' />
        <Image
          className='absolute z-1'
          layout='fill'
          objectFit='cover'
          src={kubudImg}
          alt='/'
        />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2'>Kubud</h2>
          <h3 className='text-gray-500 mb-1'>Dec 2022</h3>
          <h3>An app that generates recipes based on the ingredients you have in your cupboard.</h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
        <div className='col-span-4'>
          <p>Project</p>
          <h2>Overview</h2>
          <a
            href='https://github.com/JohnXander/kubud'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 my-4 mr-8'>Code</button>
          </a>
          <a
            href='https://kubud-johnxander.vercel.app/'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 my-4'>Demo</button>
          </a>
          <p>
            This was an idea I had wanted to run with during my 6-month coding bootcamp but hadn&apos;t found the time.
            I enjoy cooking new recipes but sometimes there isn&apos;t time to go to the shop and I wanted an app that
            could generate appropriate suggestions. I used this project as my first opportunity to learn T3 stack 
            technologies. 
          </p>
          <div className='flex gap-4 py-4'>
            <Image
              className='object-contain'
              width={400}
              height={300}
              src={kubudSignup}
              alt="signup"
            />
            <Image
              className='object-contain'
              width={400}
              height={300}
              src={kubudAccount}
              alt="login"
            />
          </div>
          <p>
            Basic login component - making a beautiful website wasn&apos;t the primary objective of this project.
            This was my first time using tRPC with Prisma to manipulate data in a PostgreSQL database. The icons
            were sourced from <em>Font Awesome</em>.
          </p>
          <div className='flex gap-4 py-4'>
            <Image
              className='object-contain'
              width={400}
              height={300}
              src={kubudEmpty}
              alt="stats"
            />
            <Image
              className='object-contain'
              width={400}
              height={300}
              src={kubudFull}
              alt="advice"
            />
          </div>
          <p>
            All meals and ingredients are fetched from <em>TheMealDB</em> api and introduced upon generation of the 
            Prisma seed. The user can search for available ingredients and store it in their cupboard (and the database).
          </p>
          <div className='flex gap-4 py-4'>
            <Image
              className='object-contain'
              width={400}
              height={300}
              src={kubudMatches}
              alt="stats"
            />
            <Image
              className='object-contain'
              width={400}
              height={300}
              src={kubudMeal}
              alt="advice"
            />
          </div>
          <p>
            Based on the ingredients in the user&apos;s cupboard, meals with matching ingredients will be suggested. 
            Clicking on a meal will take the user to an individual meal page. From there, the user has access to a
            YouTube video, showing the user how to cook the recipe.
          </p>

        </div>
        <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4 h-fit'>
          <div className='p-2'>
            <p className='text-center font-bold pb-2'>Technologies</p>
            <div className='grid grid-cols-3 md:grid-cols-1 '>
            <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> TypeScript
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Next.js
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Tailwind
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Prisma
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> tRPC
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> PostgreSQL
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Vercel
              </p>
            </div>
          </div>
        </div>
        <Link href='/#projects'>
          <p className='underline cursor-pointer'>Back</p>
        </Link>
      </div>
    </div>
  );
};

export default kubud;
