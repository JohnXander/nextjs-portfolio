import healWheelImg from '../public/assets/projects/heal-wheel.png';
import kubudImg from '../public/assets/projects/kubud.png'
import stopTheBusImg from '../public/assets/projects/stop-the-bus.png'
import cohortManagerImg from '../public/assets/projects/cohort-manager.png'
import ProjectItem from './ProjectItem';

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
          Projects
        </p>
        <h2 className='py-4'>What I&apos;ve Built Recently</h2>
        <div className='grid md:grid-cols-2 gap-8'>
          <ProjectItem
            title='GeoQuix'
            backgroundImg={healWheelImg}
            projectUrl='/geoquix'
            tech='TypeScript, Next.js, Tailwind, Prisma, tRPC, Vercel'
          />
          <ProjectItem
            title='Kubud'
            backgroundImg={kubudImg}
            projectUrl='/kubud'
            tech='TypeScript, Next.js, Tailwind, Prisma, tRPC, PostgreSQL'

          />
          <ProjectItem
            title='Stop the Bus'
            backgroundImg={stopTheBusImg}
            projectUrl='/stop-the-bus'
            tech='JavaScript, React.js, Express.js, Node.js, Prisma, PostgreSQL'

          />
          <ProjectItem
            title='Cohort Manager'
            backgroundImg={cohortManagerImg}
            projectUrl='/cohort-manager'
            tech='JavaScript, React.js, Express.js, Node.js, Prisma, PostgreSQL'
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
