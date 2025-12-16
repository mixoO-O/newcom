import { Button } from '@nextui-org/react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section
      id='inicio'
      className='relative h-screen min-h-[600px] flex items-center overflow-hidden'
    >
      {/* Background */}
      <div className='absolute inset-0 z-0'>
        <img
          src='/assets/hero.png'
          alt='Adultos mayores jugando Newcom'
          className='w-full h-full object-cover animate-slow-zoom' // Applying basic CSS animation class if retained, or framer
        />
        <div className='absolute inset-0 bg-gradient-to-r from-white/95 via-white/70 to-white/20' />
      </div>

      <div className='container mx-auto px-6 relative z-10 max-w-7xl'>
        <div className='max-w-2xl'>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className='inline-block px-4 py-2 rounded-full bg-primary-100/80 backdrop-blur-md text-primary-600 font-semibold text-sm mb-6 border border-primary-200'
          >
            🚀 Deporte y Salud Integral
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className='text-5xl md:text-7xl font-extrabold text-gray-900 leading-tight mb-6 tracking-tight'
          >
            Más que un deporte,
            <br />
            <span className='bg-linear-to-r from-primary-500 to-warning-500 bg-clip-text text-transparent'>
              un estilo de vida
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className='text-xl text-gray-600 mb-8 max-w-lg'
          >
            El Newcom conecta, divierte y revitaliza. Descubre el vóleibol adaptado que está
            cambiando la forma de vivir la madurez.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className='flex gap-4'
          >
            <Button
              size='lg'
              color='primary'
              variant='shadow'
              href='#que-es'
              as='a'
              radius='full'
              className='font-semibold px-8'
            >
              Descubrir Más
            </Button>
            <Button
              size='lg'
              variant='bordered'
              href='#'
              as='a'
              radius='full'
              className='font-semibold border-gray-300 text-gray-800 bg-white/50 backdrop-blur-sm'
            >
              Ver Video
              <svg
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              >
                <polygon points='5 3 19 12 5 21 5 3'></polygon>
              </svg>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
