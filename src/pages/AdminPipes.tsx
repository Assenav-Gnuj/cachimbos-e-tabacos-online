
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Input } from '@/components/ui/input';
import { Search, Plus, Edit, Trash } from 'lucide-react';

// Tipo para os dados da tabela de cachimbos
interface PipeTableItem {
  id: number;
  name: string;
  brand: string;
  country: string;
  shape: string;
  texture: string;
}

// Dados de exemplo para a tabela
const samplePipes: PipeTableItem[] = [
  { id: 1, name: "Billiard Classic", brand: "Peterson", country: "Irlanda", shape: "Billiard", texture: "smooth" },
  { id: 2, name: "Dublin Deluxe", brand: "Savinelli", country: "Itália", shape: "Dublin", texture: "sandblasted" },
  { id: 3, name: "Bent Bulldog", brand: "Dunhill", country: "Inglaterra", shape: "Bulldog", texture: "smooth" },
  { id: 4, name: "Apple Classic", brand: "Stanwell", country: "Dinamarca", shape: "Apple", texture: "rusticated" },
  { id: 5, name: "Churchwarden", brand: "Vauen", country: "Alemanha", shape: "Churchwarden", texture: "smooth" },
  { id: 6, name: "Poker Standard", brand: "Chacom", country: "França", shape: "Poker", texture: "rusticated" }
];

const AdminPipes = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [pipes, setPipes] = useState<PipeTableItem[]>(samplePipes);
  const navigate = useNavigate();
  
  // Filtrar cachimbos com base no termo de busca
  const filteredPipes = pipes.filter((pipe) => 
    pipe.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    pipe.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
    pipe.country.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  // Deletar cachimbo
  const handleDelete = (id: number) => {
    if (confirm("Tem certeza que deseja excluir este cachimbo?")) {
      setPipes(prev => prev.filter(pipe => pipe.id !== id));
    }
  };

  return (
    <div>
      <div className="flex flex-col md:flex-row justify-between items-center mb-8">
        <h2 className="text-2xl font-serif font-semibold text-wood mb-4 md:mb-0">
          Gerenciar Cachimbos
        </h2>
        
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
      
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-12">ID</TableHead>
              <TableHead>Nome</TableHead>
              <TableHead>Marca</TableHead>
              <TableHead>País</TableHead>
              <TableHead>Forma</TableHead>
              <TableHead>Textura</TableHead>
              <TableHead className="text-right">Ações</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredPipes.map((pipe) => (
              <TableRow key={pipe.id}>
                <TableCell>{pipe.id}</TableCell>
                <TableCell>{pipe.name}</TableCell>
                <TableCell>{pipe.brand}</TableCell>
                <TableCell>{pipe.country}</TableCell>
                <TableCell>{pipe.shape}</TableCell>
                <TableCell>{pipe.texture}</TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end space-x-2">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => navigate(`/admin/pipes/edit/${pipe.id}`)}
                    >
                      <Edit size={16} />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleDelete(pipe.id)}
                    >
                      <Trash size={16} />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
            
            {filteredPipes.length === 0 && (
              <TableRow>
                <TableCell colSpan={7} className="text-center py-6">
                  Nenhum cachimbo encontrado. <Link to="/admin/pipes/new" className="text-velvet hover:underline">Adicione um novo cachimbo</Link>.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default AdminPipes;
