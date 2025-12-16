import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id='que-es' className='py-24 bg-white relative overflow-hidden'>
      <div className='container mx-auto px-6 max-w-7xl flex flex-col md:flex-row gap-12 items-center'>
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className='flex-1'
        >
          <h2 className='text-4xl md:text-5xl font-bold text-gray-900 mb-6'>¿Qué es el Newcom?</h2>
          <p className='text-lg text-gray-600 mb-6 leading-relaxed'>
            El Newcom es una variante del vóleibol diseñada específicamente para{' '}
            <strong className='text-primary-500'>personas mayores</strong>. Se originó en 1895 en
            Estados Unidos y ha resurgido con fuerza como una herramienta para el envejecimiento
            activo.
          </p>
          <p className='text-lg text-gray-600 mb-8 leading-relaxed'>
            A diferencia del vóleibol tradicional, en el Newcom
            <strong className='text-primary-500'>
              {' '}
              la pelota no se golpea, se atrapa y se lanza
            </strong>
            . Esto reduce el impacto físico y permite un juego más estratégico y pausado, ideal para
            disfrutar en equipo.
          </p>
          <div className='bg-primary-50 border-l-4 border-primary-500 p-6 italic text-gray-700 rounded-r-xl'>
            &quot;El deporte que nos devolvió las ganas de jugar y compartir.&quot;
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className='flex-1 w-full flex justify-center'
        >
          {/* Abstract shape representation */}
          <div className='relative w-80 h-80 md:w-96 md:h-96'>
            <div className='absolute top-0 right-0 w-64 h-64 bg-secondary-200 rounded-full opacity-50 blur-3xl'></div>
            <div className='absolute bottom-0 left-0 w-64 h-64 bg-primary-200 rounded-full opacity-50 blur-3xl'></div>
            <div className='relative z-10 w-full h-full bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-2xl border border-gray-100 flex items-center justify-center overflow-hidden'>
              <div className='w-48 h-48 bg-linear-to-tr from-primary-400 to-warning-400 rounded-full opacity-80 animate-pulse'></div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
