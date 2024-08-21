import React from 'react';
import ProjectCard from './project-card';
import {
  Carousel,
  CarouselContent,
  CarouselDots,
  CarouselItem,
} from '../ui/carousel';

const Projects = () => {
  const projectData = [
    {
      title: 'Temporary Staffing',
      description: 'The wise man therefore always holds in these matters to...',
      imgSrc:
        'https://wp1.themevibrant.com/newwp/hiringhub/wp-content/uploads/2024/04/service-v1-1.jpg',
      icon: 'briefcase',
      iconBg: '#EFF8F7',
      iconColor: '#006D68',
      iconArrowColor: '#00A99D',
    },
    {
      title: 'Contract Staffing',
      description: 'Right to find fault with a man chooses these matters...',
      imgSrc:
        'https://wp1.themevibrant.com/newwp/hiringhub/wp-content/uploads/2024/04/service-v1-1.jpg',
      icon: 'file-alt',
      iconBg: '#EFF8F7',
      iconColor: '#006D68',
      iconArrowColor: '#00A99D',
    },
    {
      title: 'Project-Based Hiring',
      description:
        'Occasionally circumstances occur in these matters to this by the...',
      imgSrc:
        'https://wp1.themevibrant.com/newwp/hiringhub/wp-content/uploads/2024/04/service-v1-1.jpg',
      icon: 'laptop',
      iconBg: '#EFF8F7',
      iconColor: '#006D68',
      iconArrowColor: '#00A99D',
    },
    {
      title: ' Hiring',
      description:
        'Occasionally circumstances occur in these matters to this by the...',
      imgSrc:
        'https://wp1.themevibrant.com/newwp/hiringhub/wp-content/uploads/2024/04/service-v1-1.jpg',
      icon: 'laptop',
      iconBg: '#EFF8F7',
      iconColor: '#006D68',
      iconArrowColor: '#00A99D',
    },
    {
      title: 'New Hiring',
      description:
        'Occasionally circumstances occur in these matters to this by the...',
      imgSrc:
        'https://wp1.themevibrant.com/newwp/hiringhub/wp-content/uploads/2024/04/service-v1-1.jpg',
      icon: 'laptop',
      iconBg: '#EFF8F7',
      iconColor: '#006D68',
      iconArrowColor: '#00A99D',
    },
    {
      title: 'Test 1',
      description:
        'Occasionally circumstances occur in these matters to this by the...',
      imgSrc:
        'https://wp1.themevibrant.com/newwp/hiringhub/wp-content/uploads/2024/04/service-v1-1.jpg',
      icon: 'laptop',
      iconBg: '#EFF8F7',
      iconColor: '#006D68',
      iconArrowColor: '#00A99D',
    },
    {
      title: 'Test 2',
      description:
        'Occasionally circumstances occur in these matters to this by the...',
      imgSrc:
        'https://wp1.themevibrant.com/newwp/hiringhub/wp-content/uploads/2024/04/service-v1-1.jpg',
      icon: 'laptop',
      iconBg: '#EFF8F7',
      iconColor: '#006D68',
      iconArrowColor: '#00A99D',
    },
    {
      title: 'Test 3',
      description:
        'Occasionally circumstances occur in these matters to this by the...',
      imgSrc:
        'https://wp1.themevibrant.com/newwp/hiringhub/wp-content/uploads/2024/04/service-v1-1.jpg',
      icon: 'laptop',
      iconBg: '#EFF8F7',
      iconColor: '#006D68',
      iconArrowColor: '#00A99D',
    },
    {
      title: 'Test 4',
      description:
        'Occasionally circumstances occur in these matters to this by the...',
      imgSrc:
        'https://wp1.themevibrant.com/newwp/hiringhub/wp-content/uploads/2024/04/service-v1-1.jpg',
      icon: 'laptop',
      iconBg: '#EFF8F7',
      iconColor: '#006D68',
      iconArrowColor: '#00A99D',
    },
    {
      title: 'Test 5',
      description:
        'Occasionally circumstances occur in these matters to this by the...',
      imgSrc:
        'https://wp1.themevibrant.com/newwp/hiringhub/wp-content/uploads/2024/04/service-v1-1.jpg',
      icon: 'laptop',
      iconBg: '#EFF8F7',
      iconColor: '#006D68',
      iconArrowColor: '#00A99D',
    },
  ];

  return (
    <div className='bg-accent'>
      <div className='min-h-screen max-w-[1200px] mx-auto'>
        this is project
        <Carousel>
          <CarouselContent>
            {projectData.map((data, i) => (
              <CarouselItem key={i} className='md:basis-1/2 lg:basis-1/3 mb-10'>
                <ProjectCard key={i} project={data} />
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselDots />
        </Carousel>
      </div>
    </div>
  );
};

export default Projects;
