import Image from 'next/image';
import React from 'react';
import cohortManagerImg from '../public/assets/projects/cohort-manager.png';
import cohortManagerAccount from '../public/assets/projects/cohort-manager-account.png';
import cohortManagerLike from '../public/assets/projects/cohort-manager-like.png';
import cohortManagerLogin from '../public/assets/projects/cohort-manager-login.png';
import cohortManagerPrivate from '../public/assets/projects/cohort-manager-private.png';
import cohortManagerProfile from '../public/assets/projects/cohort-manager-profile.png';
import cohortManagerSpecial from '../public/assets/projects/cohort-manager-special.png';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';

const cohortManager = () => {
  return (
    <div className='w-full'>
      <div className='w-screen h-[50vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10' />
        <Image
          className='absolute z-1'
          layout='fill'
          objectFit='cover'
          src={cohortManagerImg}
          alt='/'
        />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2'>Cohort Manager</h2>
          <h3>Final team development project at Boolean UK Coding Academy.</h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
        <div className='col-span-4'>
          <p>Project</p>
          <h2>Overview</h2>
          <a
            href='https://github.com/JohnXander/team-dev-client-c6'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 my-4 mr-8'>Front End Code</button>
          </a>
          <a
            href='https://github.com/JohnXander/team-dev-server-c6'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 my-4 mr-8'>Back End Code</button>
          </a>
          <a
            href='https://cohortmanager.netlify.app/'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 my-4'>Demo</button>
          </a>
          <p className='pt-2'>
            This was the main team project at Boolean UK Coding Academy. Working on this project really exposed me
            to relevant aspects of the industry, such as using Kanban Boards and working in an Agile / Scrum
            environment. The app took 1 month to build and our cohort was split into small teams of 3 or 4 people. 
          </p>
          <div className='flex gap-4'>
            <Image
              className='object-contain'
              width={400}
              height={300}
              src={cohortManagerLogin}
              alt="signup"
            />
            <Image
              className='object-contain'
              width={400}
              height={300}
              src={cohortManagerSpecial}
              alt="login"
            />
          </div>
          <p>
            The login process is guarded by back end authentication, including JWT tokens and password hashing with
            bCrypt. On the front end, if a user&apos;s post qualifies as <em>Post of the Week</em> it is featured
            at the top of the post feed with a special box shadow (see pic above). 
          </p>
          <div className='flex gap-4'>
            <Image
              className='object-contain'
              width={400}
              height={300}
              src={cohortManagerProfile}
              alt="stats"
            />
            <Image
              className='object-contain'
              width={400}
              height={300}
              src={cohortManagerAccount}
              alt="advice"
            />
          </div>
          <p>
            The website has different experiences based on the user&apos;s role. In the examples above, 
            the user is logged in as a student. However, teachers and admins can also create accounts and will
            have access to additional features (such as managing the cohorts and students) due to their special role.
          </p>
          <div className='flex gap-4'>
            <Image
              className='object-contain'
              width={400}
              height={300}
              src={cohortManagerLike}
              alt="stats"
            />
            <Image
              className='object-contain'
              width={400}
              height={300}
              src={cohortManagerPrivate}
              alt="advice"
            />
          </div>
          <p>
            Users can like and comment on a post in the same way as a social media site like <em>Facebook</em>. Posts 
            can also be set to private, in which case they will appear blurred (as shown in the example above).
          </p>

        </div>
        <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4 h-fit'>
          <div className='p-2'>
            <p className='text-center font-bold pb-2'>Technologies</p>
            <div className='grid grid-cols-3 md:grid-cols-1'>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> JavaScript
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> React
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Material UI
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Express.js
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Node.js
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Prisma
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> PostgreSQL
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

export default cohortManager;
