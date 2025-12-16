export default function Footer() {
  return (
    <footer className='py-12 bg-gray-950 text-white border-t border-gray-900'>
      <div className='container mx-auto px-6 flex flex-col items-center gap-8'>
        <div className='text-2xl font-extrabold bg-linear-to-r from-primary-500 to-warning-500 bg-clip-text text-transparent'>
          Newcom
        </div>

        <div className='flex gap-8 text-gray-400'>
          <a href='#' className='hover:text-primary-400 transition-colors'>
            Reglamento
          </a>
          <a href='#' className='hover:text-primary-400 transition-colors'>
            Torneos
          </a>
          <a href='#' className='hover:text-primary-400 transition-colors'>
            Contacto
          </a>
        </div>

        <p className='text-sm text-gray-600 mt-4'>© 2024 Newcom. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}
