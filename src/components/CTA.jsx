import { Button } from '@nextui-org/react';
import { motion } from 'framer-motion';

export default function CTA() {
  return (
    <section id='contacto' className='py-24 bg-gray-900 text-white text-center'>
      <div className='container mx-auto px-6'>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className='text-4xl md:text-5xl font-bold mb-6'>¿Listo para sumarte?</h2>
          <p className='text-xl text-gray-300 mb-10 max-w-2xl mx-auto'>
            No importa tu experiencia previa, en el Newcom hay un lugar para vos.
          </p>
          <Button
            size='lg'
            color='primary'
            variant='shadow'
            href='#'
            as='a'
            radius='full'
            className='text-lg font-semibold px-12 py-8 h-auto'
          >
            Contactar ahora
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
