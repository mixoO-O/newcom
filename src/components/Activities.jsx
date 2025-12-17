import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Button,
} from "@nextui-org/react";
import { motion } from "framer-motion";
import { Calendar, ArrowRight } from "lucide-react";

export default function Activities() {
  const activities = [
    {
      id: 1,
      title: "Torneo Nacional 2024",
      date: "15 Diciembre, 2024",
      image:
        "https://images.unsplash.com/photo-1571008887538-b36bb32f4571?q=80&w=2670&auto=format&fit=crop",
      description:
        "Nuestro equipo +60 logró el primer puesto en el torneo nacional disputado en Córdoba.",
    },
    {
      id: 2,
      title: "Clínica de Newcom",
      date: "20 Noviembre, 2024",
      image:
        "https://images.unsplash.com/photo-1526232761682-d26e03ac148e?q=80&w=2629&auto=format&fit=crop",
      description:
        "Jornada de capacitación para nuevos árbitros y entrenadores de la región.",
    },
    {
      id: 3,
      title: "Nuevo Equipamiento",
      date: "10 Noviembre, 2024",
      image:
        "https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?q=80&w=2614&auto=format&fit=crop",
      description:
        "Renovamos todo nuestro material deportivo gracias al apoyo de nuestros sponsors.",
    },
  ];

  return (
    <section
      className="py-20 bg-gray-50 relative overflow-hidden"
      id="actividades"
    >
      <div className="absolute top-0 right-0 w-1/3 h-full bg-linear-to-l from-orange-100/50 to-transparent pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-linear-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent">
            Nuestras Actividades
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Mantente al día con las últimas noticias, torneos y eventos de
            nuestro equipo.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activities.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full hover:scale-105 transition-transform duration-300">
                <CardHeader className="absolute z-10 top-1 flex-col items-start!">
                  <div className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-md shadow-sm border border-white/20 flex items-center gap-2">
                    <Calendar size={14} className="text-orange-500" />
                    <p className="text-tiny text-orange-600 font-bold uppercase">
                      {item.date}
                    </p>
                  </div>
                </CardHeader>
                <Image
                  removeWrapper
                  alt={item.title}
                  className="z-0 w-full h-64 object-cover"
                  src={item.image}
                />
                <CardBody className="p-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">{item.description}</p>
                </CardBody>
                <CardFooter className="px-6 pb-6 pt-0">
                  <Button
                    variant="light"
                    color="warning"
                    className="pl-0 gap-2 font-semibold group"
                  >
                    Leer más
                    <ArrowRight
                      size={16}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
