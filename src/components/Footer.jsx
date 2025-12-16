export default function Footer() {
  return (
    <footer className='py-12 bg-gray-950 text-white border-t border-gray-900'>
      <div className='container mx-auto px-6 flex flex-col items-center gap-8'>
        <div className="flex items-center gap-2">
          <img
            src="/assets/logo.png"
            alt="Newcom Logo"
            className="h-10 w-auto object-contain rounded-full"
          />
          <p className='text-2xl font-extrabold text-orange-500 tracking-tight'>
            NEWCOM
          </p>
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

        <div className='flex flex-col items-center gap-2 mt-4'>
          <p className='text-sm text-gray-600'>© 2025 Newcom. Todos los derechos reservados.</p>
          <a
            href='https://www.disnasty.com/'
            target='_blank'
            rel='noopener noreferrer'
            className='text-xs text-gray-700 hover:text-primary-500 transition-colors'
          >
            Creado por Disnasty
          </a>
        </div>
      </div>
    </footer>
  );
}
