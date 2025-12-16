import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Button,
} from '@nextui-org/react';
import { useState } from 'react';

export default function AppNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { name: 'Inicio', href: '#inicio' },
    { name: '¿Qué es?', href: '#que-es' },
    { name: 'Características', href: '#caracteristicas' },
    { name: 'Beneficios', href: '#beneficios' },
  ];

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} isBordered maxWidth='xl' position='sticky'>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          className='sm:hidden'
        />
        <NavbarBrand>
          <div className='flex items-center gap-2'>
            <img src='/assets/logo.png' alt='Newcom Logo' className='h-12 w-auto object-contain' />
            <p className='font-bold text-2xl bg-linear-to-r from-primary-500 to-warning-500 bg-clip-text text-transparent hidden sm:block'>
              Newcom
            </p>
          </div>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className='hidden sm:flex gap-4' justify='center'>
        {menuItems.map((item, index) => (
          <NavbarItem key={index}>
            <Link
              color='foreground'
              href={item.href}
              className='hover:text-primary transition-colors'
            >
              {item.name}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarContent justify='end'>
        <NavbarItem>
          <Button as={Link} color='primary' href='#contacto' variant='shadow' radius='full'>
            Únete
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item.name}-${index}`}>
            <Link
              color='foreground'
              className='w-full'
              href={item.href}
              size='lg'
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
