
import { Link } from 'react-router-dom';
import { Search, User } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { 
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger
} from "@/components/ui/navigation-menu"
import { Button } from './ui/button';

const Navbar = () => {
  const pipeTypes = [
    { name: "Dinamarqueses", path: "/cachimbos/dinamarqueses" },
    { name: "Franceses", path: "/cachimbos/franceses" },
    { name: "Holandeses", path: "/cachimbos/holandeses" },
    { name: "Ingleses", path: "/cachimbos/ingleses" },
    { name: "Irlandeses", path: "/cachimbos/irlandeses" },
    { name: "Italianos", path: "/cachimbos/italianos" },
    { name: "Norte-americanos", path: "/cachimbos/norte-americanos" },
    { name: "Outros Países", path: "/cachimbos/outros" }
  ];

  const accessories = [
    { name: "Tampers", path: "/acessorios/tampers" },
    { name: "Diversos", path: "/acessorios/diversos" }
  ];

  const restorationMaterials = [
    { name: "Polimento", path: "/restauracao/polimento" },
    { name: "Diversos", path: "/restauracao/diversos" }
  ];

  const tobaccoTypes = [
    { name: "Aromáticos", path: "/tabacos/aromaticos" },
    { name: "Misturas Inglesas", path: "/tabacos/misturas-inglesas" },
    { name: "Orientais", path: "/tabacos/orientais" },
    { name: "Diversos", path: "/tabacos/diversos" }
  ];

  return (
    <header className="bg-wood text-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-2">
        <div className="flex justify-between items-center mb-2">
          {/* Logo */}
          <Link to="/home" className="flex items-center gap-2">
            <img src="https://i.ibb.co/WpB3SyxF/LOGO-PRINCIPAL.png" alt="Logo" className="h-12 w-auto" />
            <h1 className="text-3xl md:text-4xl font-serif font-semibold text-white hidden sm:block">
              Cachimbos & Tabacos
            </h1>
          </Link>

          {/* Search and Admin */}
          <div className="flex items-center gap-3">
            <div className="relative">
              <Input
                type="text"
                placeholder="Buscar..."
                className="w-32 md:w-64 h-9 pr-8 rounded-full bg-white/10 border-white/20 text-white placeholder:text-white/60"
              />
              <Search className="absolute right-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-white/60" />
            </div>
            
            <Link to="/admin" className="text-white hover:text-tobacco transition-colors duration-200">
              <Button variant="ghost" size="icon" className="rounded-full hover:bg-white/10">
                <User size={20} />
                <span className="sr-only">Admin</span>
              </Button>
            </Link>
          </div>
        </div>

        {/* Navigation Menu */}
        <NavigationMenu className="justify-start max-w-full overflow-x-auto">
          <NavigationMenuList className="flex space-x-1">
            {/* Home Link */}
            <NavigationMenuItem>
              <Link 
                to="/home" 
                className="flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-white/10 hover:text-white"
              >
                Home
              </Link>
            </NavigationMenuItem>
            
            {/* Cachimbos Dropdown */}
            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-transparent hover:bg-white/10 hover:text-white data-[state=open]:bg-white/10">
                Cachimbos
              </NavigationMenuTrigger>
              <NavigationMenuContent className="min-w-[200px] bg-wood/95 backdrop-blur-sm border border-white/10">
                <ul className="grid w-full gap-1 p-2">
                  {pipeTypes.map(type => (
                    <li key={type.path}>
                      <Link 
                        to={type.path} 
                        className="block w-full rounded-md p-2 hover:bg-white/10 transition-colors"
                      >
                        {type.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            
            {/* Acessórios Dropdown */}
            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-transparent hover:bg-white/10 hover:text-white data-[state=open]:bg-white/10">
                Acessórios
              </NavigationMenuTrigger>
              <NavigationMenuContent className="min-w-[200px] bg-wood/95 backdrop-blur-sm border border-white/10">
                <ul className="grid w-full gap-1 p-2">
                  {accessories.map(item => (
                    <li key={item.path}>
                      <Link 
                        to={item.path} 
                        className="block w-full rounded-md p-2 hover:bg-white/10 transition-colors"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            
            {/* Materiais para Restauração Dropdown */}
            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-transparent hover:bg-white/10 hover:text-white data-[state=open]:bg-white/10">
                Materiais para Restauração
              </NavigationMenuTrigger>
              <NavigationMenuContent className="min-w-[200px] bg-wood/95 backdrop-blur-sm border border-white/10">
                <ul className="grid w-full gap-1 p-2">
                  {restorationMaterials.map(item => (
                    <li key={item.path}>
                      <Link 
                        to={item.path} 
                        className="block w-full rounded-md p-2 hover:bg-white/10 transition-colors"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            
            {/* Tabacos Dropdown */}
            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-transparent hover:bg-white/10 hover:text-white data-[state=open]:bg-white/10">
                Tabacos
              </NavigationMenuTrigger>
              <NavigationMenuContent className="min-w-[200px] bg-wood/95 backdrop-blur-sm border border-white/10">
                <ul className="grid w-full gap-1 p-2">
                  {tobaccoTypes.map(item => (
                    <li key={item.path}>
                      <Link 
                        to={item.path} 
                        className="block w-full rounded-md p-2 hover:bg-white/10 transition-colors"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </header>
  );
};

export default Navbar;
