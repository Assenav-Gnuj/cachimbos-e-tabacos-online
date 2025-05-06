
import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, Plus } from 'lucide-react';

// Tipo para os dados do cachimbo na lista
interface PipeListItem {
  id: number;
  name: string;
  brand: string;
  shape: string;
  texture: string;
  condition: string;
  country: string;
  thumbnail: string;
}

// Mapeamento de categorias em português
const categoryMap: Record<string, string> = {
  'dinamarqueses': 'Dinamarqueses',
  'franceses': 'Franceses',
  'holandeses': 'Holandeses',
  'ingleses': 'Ingleses',
  'irlandeses': 'Irlandeses',
  'italianos': 'Italianos',
  'norte-americanos': 'Norte-Americanos',
  'outros': 'Outros Países'
};

// Dados de exemplo para a listagem
const samplePipes: PipeListItem[] = [
  {
    id: 1,
    name: "Billiard Classic",
    brand: "Peterson",
    shape: "Billiard",
    texture: "smooth",
    condition: "estate",
    country: "Irlanda",
    thumbnail: "/placeholder.svg"
  },
  {
    id: 2,
    name: "Dublin Deluxe",
    brand: "Savinelli",
    shape: "Dublin",
    texture: "sandblasted",
    condition: "new",
    country: "Itália",
    thumbnail: "/placeholder.svg"
  },
  {
    id: 3,
    name: "Bent Bulldog",
    brand: "Dunhill",
    shape: "Bulldog",
    texture: "smooth",
    condition: "estate",
    country: "Inglaterra",
    thumbnail: "/placeholder.svg"
  },
  {
    id: 4,
    name: "Apple Classic",
    brand: "Stanwell",
    shape: "Apple",
    texture: "rusticated",
    condition: "estate",
    country: "Dinamarca",
    thumbnail: "/placeholder.svg"
  },
  {
    id: 5,
    name: "Churchwarden",
    brand: "Vauen",
    shape: "Churchwarden",
    texture: "smooth",
    condition: "new",
    country: "Alemanha",
    thumbnail: "/placeholder.svg"
  },
  {
    id: 6,
    name: "Poker Standard",
    brand: "Chacom",
    shape: "Poker",
    texture: "rusticated",
    condition: "estate",
    country: "França",
    thumbnail: "/placeholder.svg"
  }
];

const PipeList = () => {
  const { categoryId } = useParams<{ categoryId: string }>();
  const [searchTerm, setSearchTerm] = useState('');
  const [pipes, setPipes] = useState<PipeListItem[]>(samplePipes);

  // Filtrar cachimbos com base na categoria e termo de busca
  const filteredPipes = pipes.filter((pipe) => {
    const matchesCategory = categoryId === 'outros' 
      ? !['Dinamarca', 'França', 'Holanda', 'Inglaterra', 'Irlanda', 'Itália', 'Estados Unidos'].includes(pipe.country)
      : categoryMap[categoryId || ''] === pipe.country;
      
    const matchesSearch = searchTerm === '' || 
      pipe.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
      pipe.brand.toLowerCase().includes(searchTerm.toLowerCase());
    
    return matchesSearch;
  });

  // Se não temos uma categoria definida, mostrar todos
  const displayPipes = categoryId ? filteredPipes : pipes;

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Cabeçalho e barra de busca */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-8">
        <h1 className="text-3xl font-serif font-semibold text-wood mb-4 md:mb-0">
          Cachimbos {categoryId ? categoryMap[categoryId] : ''}
        </h1>
        
        <div className="flex space-x-4 w-full md:w-auto">
          <div className="relative w-full md:w-64">
            <Input 
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Buscar cachimbos..."
              className="pl-10"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          </div>
          
          <Button variant="default" className="bg-velvet hover:bg-velvet-light">
            <Link to="/admin/pipes/new" className="flex items-center">
              <Plus size={16} className="mr-2" />
              Novo
            </Link>
          </Button>
        </div>
      </div>

      {/* Grade de cachimbos */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {displayPipes.map(pipe => (
          <Link to={`/cachimbos/${categoryId || 'todos'}/${pipe.id}`} key={pipe.id} className="card-pipe">
            <div className="aspect-square overflow-hidden">
              <img 
                src={pipe.thumbnail} 
                alt={pipe.name} 
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div className="p-4">
              <h3 className="font-serif text-lg font-semibold text-wood">{pipe.name}</h3>
              <p className="text-sm text-muted-foreground">{pipe.brand}</p>
              <div className="flex flex-wrap gap-2 mt-2">
                <span className="text-xs bg-cream-dark text-wood-light px-2 py-1 rounded-full">
                  {pipe.shape}
                </span>
                <span className="text-xs bg-cream-dark text-wood-light px-2 py-1 rounded-full">
                  {pipe.texture}
                </span>
                <span className="text-xs bg-cream-dark text-wood-light px-2 py-1 rounded-full">
                  {pipe.condition}
                </span>
              </div>
            </div>
          </Link>
        ))}
        
        {displayPipes.length === 0 && (
          <div className="col-span-full text-center py-12">
            <p className="text-muted-foreground">Nenhum cachimbo encontrado com os critérios selecionados.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PipeList;
