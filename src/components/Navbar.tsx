
import { Link } from 'react-router-dom';
import { Search } from 'lucide-react';

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
    <header className="bg-wood text-cream-DEFAULT shadow-md">
      <div className="container mx-auto px-4 py-3">
        <h1 className="text-3xl md:text-4xl font-serif font-semibold text-center py-4">Cachimbos & Tabacos</h1>
        
        <nav className="flex flex-col md:flex-row justify-center items-center space-y-2 md:space-y-0 md:space-x-1">
          <div className="relative group px-4 py-2">
            <Link to="/home" className="font-medium hover:text-tobacco transition-colors duration-200">Home</Link>
          </div>
          
          {/* Cachimbos Dropdown */}
          <div className="relative dropdown px-4 py-2">
            <span className="font-medium cursor-pointer hover:text-tobacco transition-colors duration-200">Cachimbos</span>
            <div className="dropdown-menu w-48 bg-white shadow-lg rounded-md py-1 mt-2">
              {pipeTypes.map((type) => (
                <Link 
                  key={type.path} 
                  to={type.path} 
                  className="block px-4 py-2 text-wood hover:bg-cream hover:text-velvet transition-colors duration-200"
                >
                  {type.name}
                </Link>
              ))}
            </div>
          </div>
          
          {/* Acessórios Dropdown */}
          <div className="relative dropdown px-4 py-2">
            <span className="font-medium cursor-pointer hover:text-tobacco transition-colors duration-200">Acessórios</span>
            <div className="dropdown-menu w-40 bg-white shadow-lg rounded-md py-1 mt-2">
              {accessories.map((item) => (
                <Link 
                  key={item.path} 
                  to={item.path} 
                  className="block px-4 py-2 text-wood hover:bg-cream hover:text-velvet transition-colors duration-200"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
          
          {/* Materiais para Restauração Dropdown */}
          <div className="relative dropdown px-4 py-2">
            <span className="font-medium cursor-pointer hover:text-tobacco transition-colors duration-200">Materiais para Restauração</span>
            <div className="dropdown-menu w-40 bg-white shadow-lg rounded-md py-1 mt-2">
              {restorationMaterials.map((item) => (
                <Link 
                  key={item.path} 
                  to={item.path} 
                  className="block px-4 py-2 text-wood hover:bg-cream hover:text-velvet transition-colors duration-200"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
          
          {/* Tabacos Dropdown */}
          <div className="relative dropdown px-4 py-2">
            <span className="font-medium cursor-pointer hover:text-tobacco transition-colors duration-200">Tabacos</span>
            <div className="dropdown-menu w-44 bg-white shadow-lg rounded-md py-1 mt-2">
              {tobaccoTypes.map((item) => (
                <Link 
                  key={item.path} 
                  to={item.path} 
                  className="block px-4 py-2 text-wood hover:bg-cream hover:text-velvet transition-colors duration-200"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
          
          {/* Search Button */}
          <div className="px-4 py-2">
            <button className="hover:text-tobacco transition-colors duration-200">
              <Search size={20} />
            </button>
          </div>
          
          {/* Admin Link */}
          <div className="px-4 py-2">
            <Link to="/admin" className="font-medium hover:text-tobacco transition-colors duration-200">Admin</Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
