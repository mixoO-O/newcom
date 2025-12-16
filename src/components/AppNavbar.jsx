import { useState, useEffect } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link
} from "@nextui-org/react";
import { Home, Info, Star, Trophy, Menu, X } from "lucide-react";

export default function AppNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { name: "Inicio", href: "#inicio", icon: Home },
    { name: "¿Qué es?", href: "#que-es", icon: Info },
    { name: "Características", href: "#caracteristicas", icon: Star },
    { name: "Beneficios", href: "#beneficios", icon: Trophy },
  ];

  return (
    <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
      <Navbar
        onMenuOpenChange={setIsMenuOpen}
        isMenuOpen={isMenuOpen}
        className={`
          rounded-full border border-white/10
          bg-orange-400/20 backdrop-blur-xl
          shadow-lg shadow-black/20
          transition-all duration-300
          w-full max-w-7xl mx-auto
        `}
        classNames={{
          wrapper: "px-6 h-14 w-full max-w-full",
          item: "data-[active=true]:text-primary",
        }}
        height="3.5rem"
        maxWidth="full"
      >
        <NavbarContent>
          <NavbarBrand>
            <div className="flex items-center gap-2">
              <img
                src="/assets/logo.png"
                alt="Newcom Logo"
                className="h-12 w-auto object-contain rounded-full"
              />
              <p className="font-bold text-xl text-orange-500 tracking-tight">
                NEWCOM
              </p>
            </div>
          </NavbarBrand>
        </NavbarContent>

        {/* Desktop Menu */}
        <NavbarContent className="hidden sm:flex gap-1" justify="center">
          {menuItems.map((item, index) => (
            <NavbarItem key={item.name}>
              <Link
                href={item.href}
                className="text-gray-700 hover:text-black transition-colors px-3 py-1 flex items-center gap-2 text-sm font-medium"
              >
                <item.icon size={16} />
                {item.name}
              </Link>
            </NavbarItem>
          ))}
        </NavbarContent>

        <NavbarContent justify="end" className="gap-2">
          {/* Mobile Menu Toggle */}
          <NavbarMenuToggle
            className="sm:hidden text-gray-700"
            icon={isMenuOpen ? <X /> : <Menu />}
          />
        </NavbarContent>

        {/* Mobile Menu */}
        <NavbarMenu className="bg-white/90 backdrop-blur-xl pt-6 gap-4 rounded-2xl mt-2 mx-4 border border-white/20 shadow-xl z-40">
           {menuItems.map((item, index) => (
            <NavbarMenuItem key={`${item.name}-${index}`}>
              <Link
                color="foreground"
                className="w-full text-gray-800 text-lg flex items-center gap-4 py-2 font-medium"
                href={item.href}
                size="lg"
                onClick={() => setIsMenuOpen(false)}
              >
                <item.icon size={20} className="text-orange-500" />
                {item.name}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </Navbar>
    </div>
  );
}
