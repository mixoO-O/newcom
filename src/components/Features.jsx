import { Card, CardBody } from '@nextui-org/react';
import { motion } from 'framer-motion';

const features = [
  {
    icon: '🏐',
    title: 'Adaptación del Voleibol',
    desc: 'Misma cancha, misma red, pero reglas pensadas para cuidar tu cuerpo sin perder la emoción.',
  },
  {
    icon: '👐',
    title: 'Atrapar y Lanzar',
    desc: 'La técnica principal evita golpes bruscos. Se atrapa con dos manos y se lanza buscando el punto.',
  },
  {
    icon: '👥',
    title: 'Equipos Mixtos',
    desc: 'Fomenta la integración total jugando en equipos de 6 integrantes, hombres y mujeres juntos.',
  },
  {
    icon: '❤️',
    title: 'Para +50, +60, +70',
    desc: 'Categorías adaptadas para que todos tengan su lugar y compitan con pares de su edad.',
  },
];

export default function Features() {
  return (
    <section id='caracteristicas' className='py-24 bg-gray-50'>
      <div className='container mx-auto px-6 max-w-7xl'>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className='text-4xl font-bold text-center text-gray-900 mb-16'
        >
          Características Clave
        </motion.h2>

        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className='h-full hover:-translate-y-2 transition-transform duration-300 border-b-4 border-transparent hover:border-primary-500 shadow-lg hover:shadow-xl'>
                <CardBody className='p-8 text-center items-center'>
                  <div className='text-5xl mb-6'>{feature.icon}</div>
                  <h3 className='text-xl font-bold mb-4 text-gray-900'>{feature.title}</h3>
                  <p className='text-gray-600 leading-relaxed'>{feature.desc}</p>
                </CardBody>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
