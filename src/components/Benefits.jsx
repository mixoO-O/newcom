import { motion } from 'framer-motion';

const benefits = [
  {
    id: '01',
    title: 'Salud Física',
    desc: 'Mejora el equilibrio, la coordinación y la resistencia cardiovascular con bajo impacto articular.',
  },
  {
    id: '02',
    title: 'Bienestar Mental',
    desc: 'Mantiene la mente ágil mediante la estrategia de juego y la toma de decisiones rápidas.',
  },
  {
    id: '03',
    title: 'Vida Social',
    desc: 'Combate el aislamiento, crea nuevas amistades y fortalece el sentido de pertenencia a un grupo.',
  },
];

export default function Benefits() {
  return (
    <section id='beneficios' className='py-24 bg-white'>
      <div className='container mx-auto px-6 max-w-4xl'>
        <div className='text-center mb-16'>
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className='text-4xl font-bold text-gray-900 mb-4'
          >
            Beneficios Integrales
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className='text-xl text-gray-500'
          >
            Cuerpo sano, mente activa y corazón contento.
          </motion.p>
        </div>

        <div className='space-y-8'>
          {benefits.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className='flex flex-col md:flex-row gap-6 md:gap-10 p-8 rounded-2xl bg-white shadow-sm hover:shadow-md border border-gray-100 items-start md:items-center transition-shadow'
            >
              <div
                className='text-6xl font-black text-transparent bg-clip-text bg-linear-to-br from-gray-100 to-gray-200'
                style={{ WebkitTextStroke: '2px #ff6b6b' }}
              >
                {item.id}
              </div>
              <div>
                <h3 className='text-2xl font-bold text-primary-500 mb-2'>{item.title}</h3>
                <p className='text-gray-600 text-lg leading-relaxed'>{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
