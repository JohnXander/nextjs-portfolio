import Image from 'next/image';
import React from 'react';
import healWheelImg from '../public/assets/projects/heal-wheel.png';
import healWheelSignup from '../public/assets/projects/heal-wheel-signup.png';
import healWheelLogin from '../public/assets/projects/heal-wheel-login.png';
import healWheelStats from '../public/assets/projects/heal-wheel-stats.png';
import healWheelPrompt from '../public/assets/projects/heal-wheel-prompt.png';
import healWheelAdvice from '../public/assets/projects/heal-wheel-advice.png';
import healWheelModal from '../public/assets/projects/heal-wheel-modal.png';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';

const healWheel = () => {
  return (
    <div className='w-full'>
      <div className='w-screen h-[50vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10' />
        <Image
          className='absolute z-1'
          layout='fill'
          objectFit='cover'
          src={healWheelImg}
          alt='/'
        />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2'>Heal Wheel</h2>
          <h3 className='text-gray-500 mb-1'>Dec 2022</h3>
          <h3>An app that offers a 360 degree view of your current life situation.</h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
        <div className='col-span-4'>
          <p>Project</p>
          <h2>Overview</h2>
          <a
            href='https://github.com/JohnXander/heal-wheel'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 my-4 mr-8'>Code</button>
          </a>
          <a
            href='https://heal-wheel.vercel.app/'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 my-4'>Demo</button>
          </a>
          <p>
            Prototype project built for a friend who works as a life coach. This was a great opportunity
            to continue learning T3 Stack technologies.
          </p>
          <div className='flex gap-4 py-4'>
            <Image
              className='object-cover'
              width={300}
              height={300}
              src={healWheelSignup}
              alt="signup"
            />
            <Image
              className='object-cover'
              width={300}
              height={300}
              src={healWheelLogin}
              alt="login"
            />
          </div>
          <p>
            Very basic sign-up and login components - making the website look beautiful was not my primary goal
            for this project. When I continue developing Heal Wheel in future, I plan to authenticate the login 
            credentials with Next-Auth, as well as adding some error-handling functions to the sign-in process.
          </p>
          <div className='flex gap-4 py-4'>
            <Image
              className='object-cover'
              width={300}
              height={300}
              src={healWheelStats}
              alt="stats"
            />
            <Image
              className='object-cover'
              width={300}
              height={300}
              src={healWheelPrompt}
              alt="advice"
            />
          </div>
          <p>
            The wheel consists of 4 life categories, each of which have 5 levels (default level: 1). The levels 
            you select will not be stored in the database until you press the <em>Save Stats</em> button.
            If you attempt to navigate to the <em>Advice</em> component without first saving the stats, a modal
            will appear and prompt you to do so.
          </p>
          <div className='flex gap-4 py-4'>
            <Image
              className='object-cover'
              width={300}
              height={300}
              src={healWheelAdvice}
              alt="stats"
            />
            <Image
              className='object-cover'
              width={300}
              height={300}
              src={healWheelModal}
              alt="advice"
            />
          </div>
          <p>
            The levels in the advice boxes will now correspond with the wheel as this data is being fetched 
            with a tRPC function. On clicking a <em>See Advice</em> button, a modal will appear with the corresponding
            advice. My friend hasn&apos;t yet finished writing their advice data, so for now, the information in the 
            database is simply <em>Mind advice 1</em>, <em>Mind advice 2</em> etc.
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

export default healWheel;
