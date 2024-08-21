import Image from 'next/image';
import React from 'react';

const ProjectCard = ({ project }) => {
  return (
    <div>
      <div className='w-[350px] bg-white rounded-lg shadow-lg overflow-hidden'>
        <div className='p-6'>
          <div className='flex items-center'>
            <div className='flex-shrink-0'>
              <div className='relative w-12 h-12 bg-[#EFF8F7] rounded-full flex items-center justify-center'>
                <i className='fas fa-briefcase text-[#006D68] text-2xl'></i>
                <i className='fas fa-arrow-up text-[#00A99D] absolute bottom-1 right-1 text-xs'></i>
              </div>
            </div>
            <h2 className='ml-4 text-xl font-medium text-[#2C3E50]'>
              {project.title}
            </h2>
          </div>
          <div className='mt-4'>
            <Image
              src={project.imgSrc}
              alt='Hourglass'
              width='0'
              height='0'
              unoptimized
              className='w-full h-[200px] object-cover rounded-lg'
            />
          </div>
          <p className='mt-4 text-sm text-[#7B8A8A]'>{project.description}</p>
        </div>
        <div className='bg-[#E3F3F1] px-6 py-4'>
          <a
            href='#'
            className='text-[#006D68] font-medium text-sm flex items-center'
          >
            EXPLORE MORE
            <i className='fas fa-chevron-right ml-2 text-sm'></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
