import Image from 'next/image';
import React from 'react';
import geoQuixHomepage from '../public/assets/projects/geoquixHomepage.png';
import geoQuixQuiz from '../public/assets/projects/geoquixQuiz.png';
import geoQuixLeaderboard from '../public/assets/projects/geoquixLeaderboard.png';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';

const geoQuix = () => {
  return (
    <div className='w-full'>
      <div className='w-screen h-[50vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10' />
        <Image
          className='absolute z-1'
          layout='fill'
          objectFit='cover'
          src={geoQuixHomepage}
          alt='/'
        />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2'>GeoQuix</h2>
          <h3>Travel the world through geography, one quiz at a time.</h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
        <div className='col-span-4'>
          <p>Project</p>
          <h2>Overview</h2>
          <a
            href='https://github.com/JohnXander/geoquix'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 my-4 mr-8'>Code</button>
          </a>
          <a
            href='https://geoquix.vercel.app/'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 my-4'>Demo</button>
          </a>
          <p className='mt-2'>
            GeoQuix is a geography quiz app that lets you test your knowledge on different countries around the world.
            You can challenge yourself by playing solo or against friends to see who can get the highest score.
            With fun and engaging quizzes, GeoQuix makes learning about geography an enjoyable experience.
          </p>
          <div className='flex gap-4'>
            <Image
              className='object-contain'
              width={600}
              height={400}
              src={geoQuixHomepage}
              alt="homepage"
            />
          </div>
          <p>
            Choose from 5 different categories and enter a quiz. You will have 100 seconds to complete as many
            multiple-choice questions as you can. All data is fetched from the REST Countries API:&nbsp;
            <a
              href="https://restcountries.com/"
              className='underline'>
              https://restcountries.com
            </a>
          </p>
          <div className='flex gap-4'>
            <Image
              className='object-contain'
              width={600}
              height={400}
              src={geoQuixQuiz}
              alt="quiz"
            />
          </div>
          <p>
            You can then save your score to the PostgreSQL database. The data in the leaderboard is retrieved with
            Prisma and tRPC. You can sort the data by category, score or accuracy. 
          </p>
          <div className='flex gap-4 py-4'>
            <Image
              className='object-contain'
              width={600}
              height={400}
              src={geoQuixLeaderboard}
              alt="leaderboard"
            />
          </div>
          <p>
            Enjoy the full experience at:&nbsp;
            <a
              href="https://geoquix.vercel.app"
              className='underline'>
              https://geoquix.vercel.app
            </a>
          </p>
        </div>
        <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4 h-fit'>
          <div className='p-2'>
            <p className='text-center font-bold pb-2'>Technologies</p>
            <div className='grid grid-cols-3 md:grid-cols-1'>
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

export default geoQuix;
