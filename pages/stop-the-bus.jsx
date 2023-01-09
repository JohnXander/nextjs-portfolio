import Image from 'next/image';
import React from 'react';
import stopTheBusImg from '../public/assets/projects/stop-the-bus.png';
import stopTheBusAccount from '../public/assets/projects/stop-the-bus-account.png';
import stopTheBusAdd from '../public/assets/projects/stop-the-bus-add.png';
import stopTheBusAlphabetical from '../public/assets/projects/stop-the-bus-alphabetical.png';
import stopTheBusCards from '../public/assets/projects/stop-the-bus-cards.png';
import stopTheBusDelete from '../public/assets/projects/stop-the-bus-delete.png';
import stopTheBusGame from '../public/assets/projects/stop-the-bus-game.png';
import stopTheBusGames from '../public/assets/projects/stop-the-bus-games.png';
import stopTheBusRow from '../public/assets/projects/stop-the-bus-row.png';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';

const stopTheBus = () => {
  return (
    <div className='w-full'>
      <div className='w-screen h-[50vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10' />
        <Image
          className='absolute z-1'
          layout='fill'
          objectFit='cover'
          src={stopTheBusImg}
          alt='/'
        />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2'>Stop the Bus</h2>
          <h3>An app version of the popular TEFL classroom game.</h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
        <div className='col-span-4'>
          <p>Project</p>
          <h2>Overview</h2>
          <a
            href='https://github.com/JohnXander/stop-the-bus-client'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 my-4 mr-8'>Front End Code</button>
          </a>
          <a
            href='https://github.com/JohnXander/stop-the-bus-server'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 my-4 mr-8'>Back End Code</button>
          </a>
          <p className='pt-2'>
            This was my final project at Boolean UK Coding Academy and I wanted to the project to
            encompass all of the technologies we had learnt during the course. <em>Stop the Bus</em> is 
            a TEFL classroom game commonly played on a whiteboard. I used to play it with my students 
            all the time in my previous career as an English Language Teacher. The app was built with 
            language schools in mind, the intention is for teachers to project it onto their whiteboard 
            during a class.
          </p>
          <div className='flex gap-4'>
            <Image
              className='object-contain'
              width={400}
              height={300}
              src={stopTheBusGames}
              alt="signup"
            />
            <Image
              className='object-contain'
              width={400}
              height={300}
              src={stopTheBusAccount}
              alt="login"
            />
          </div>
          <p>
            The teacher has a list of games that they have created. They can mark a game as done, edit the name
            of it or delete it. These are full-stack CRUD operations which will manipulate the data 
            in the PostgreSQL database. On clicking a game, they will be navigated to the individual game page.
            The teacher can also hover over their profile picture to see their profile information or sign out. 
          </p>
          <div className='flex gap-4'>
            <Image
              className='object-contain'
              width={400}
              height={300}
              src={stopTheBusGame}
              alt="stats"
            />
            <Image
              className='object-contain'
              width={400}
              height={300}
              src={stopTheBusCards}
              alt="advice"
            />
          </div>
          <p>
            The teacher can reveal additional information about each answer in a row by clicking the visibility icon.
            The teacher can also navigate to a cards page to view and manage all the cards in that teacher&apos;s
            database across all games. 
          </p>
          <div className='flex gap-4'>
            <Image
              className='object-contain'
              width={400}
              height={300}
              src={stopTheBusRow}
              alt="stats"
            />
            <Image
              className='object-contain'
              width={400}
              height={300}
              src={stopTheBusAdd}
              alt="advice"
            />
          </div>
          <p>
            The rules of the game is that the teacher will present a letter and then a team of students will give
            three answers for that letter. The teacher can add their answers to the row and give their team a point. 
            Only answers that have been added to the database in card format will show an image.
          </p>
          <div className='flex gap-4'>
            <Image
              className='object-contain'
              width={400}
              height={300}
              src={stopTheBusAlphabetical}
              alt="stats"
            />
            <Image
              className='object-contain'
              width={400}
              height={300}
              src={stopTheBusDelete}
              alt="advice"
            />
          </div>
          <p>
            The list of cards can be sorted alphabetically or by the amount of time they have existed in
            the database. When the teacher clicks on the bin icon, they will be prompted with
            a <em>Click to Delete</em> option to verify their decision before it is permanently deleted 
            from the database. 
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

export default stopTheBus;
