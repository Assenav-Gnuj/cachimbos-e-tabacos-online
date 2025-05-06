
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { toast } from '@/components/ui/sonner';

// Opções para os selects
const stemOptions = ['acrylic', 'vulcanite', 'cumberland'];
const filterOptions = ['no', '6mm', '9mm', 'balsa'];
const textureOptions = ['smooth', 'rusticated', 'sandblasted', 'corn cob'];
const conditionOptions = ['estate', 'new'];
const restorationOptions = ['Level 1', 'Level 2', 'Level 3', 'Level 4', 'Level 5'];

// Dados de exemplo para marcas e países
const brandOptions = ['Peterson', 'Dunhill', 'Savinelli', 'Stanwell', 'Chacom', 'Vauen'];
const countryOptions = ['Dinamarca', 'França', 'Holanda', 'Inglaterra', 'Irlanda', 'Itália', 'Estados Unidos', 'Alemanha'];

interface PipeFormProps {
  pipeId?: number;
  onSave?: (pipeData: any) => void;
}

const PipeForm: React.FC<PipeFormProps> = ({ pipeId, onSave }) => {
  // Estado para armazenar dados do formulário
  const [formData, setFormData] = useState({
    name: '',
    brand: '',
    stem: stemOptions[0],
    filter: filterOptions[0],
    shape: '',
    texture: textureOptions[0],
    condition: conditionOptions[0],
    restoration: restorationOptions[0],
    country: '',
    observations: '',
    images: [null, null, null, null, null]
  });
  
  // Estado para imagens temporárias (URLs)
  const [imageUrls, setImageUrls] = useState(Array(5).fill('/placeholder.svg'));
  
  // Carregar dados existentes se estamos editando
  useEffect(() => {
    if (pipeId) {
      // Simulação de carregamento de dados do cachimbo para edição
      // Em uma implementação real, isso seria uma chamada de API
      console.log(`Carregando dados do cachimbo ${pipeId}`);
      
      // Dados de exemplo
      if (pipeId === 1) {
        setFormData({
          name: "Classic Billiard",
          brand: "Peterson",
          stem: "vulcanite",
          filter: "9mm",
          shape: "Billiard",
          texture: "smooth",
          condition: "estate",
          restoration: "Level 2",
          country: "Irlanda",
          observations: "Cachimbo adquirido em leilão no ano de 2019.",
          images: [null, null, null, null, null]
        });
        
        setImageUrls(Array(5).fill('/placeholder.svg'));
      }
    }
  }, [pipeId]);
  
  // Handlers para os campos do formulário
  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };
  
  // Handler para upload de imagem
  const handleImageChange = (index: number, e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    
    // Atualizar o array de imagens
    const newImages = [...formData.images];
    newImages[index] = file;
    setFormData(prev => ({ ...prev, images: newImages }));
    
    // Criar URL temporária para preview
    const newImageUrls = [...imageUrls];
    newImageUrls[index] = URL.createObjectURL(file);
    setImageUrls(newImageUrls);
  };
  
  // Enviar formulário
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Dados do formulário:', formData);
    
    // Simular envio bem-sucedido
    setTimeout(() => {
      toast.success(`Cachimbo ${pipeId ? 'atualizado' : 'adicionado'} com sucesso!`);
      if (onSave) onSave(formData);
    }, 1000);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="bg-white p-6 rounded-lg shadow-sm border border-border">
        <h3 className="text-xl font-serif font-semibold text-wood mb-4">
          {pipeId ? 'Editar Cachimbo' : 'Adicionar Novo Cachimbo'}
        </h3>
        
        {/* Seção de imagens */}
        <div className="mb-6">
          <Label className="block mb-2">Imagens (5 no máximo)</Label>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {imageUrls.map((url, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="w-full aspect-square bg-gray-100 relative mb-2 rounded overflow-hidden">
                  <img 
                    src={url} 
                    alt={`Imagem ${index + 1}`} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <Input
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleImageChange(index, e)}
                  className="text-sm w-full"
                />
              </div>
            ))}
          </div>
        </div>
        
        {/* Informações básicas */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div>
            <Label htmlFor="name" className="block mb-2">Nome do Cachimbo</Label>
            <Input
              id="name"
              value={formData.name}
              onChange={(e) => handleInputChange('name', e.target.value)}
              required
              className="w-full"
            />
          </div>
          
          <div>
            <Label htmlFor="brand" className="block mb-2">Marca</Label>
            <div className="flex space-x-2">
              <Select 
                value={formData.brand} 
                onValueChange={(value) => handleInputChange('brand', value)}
              >
                <SelectTrigger className="flex-grow">
                  <SelectValue placeholder="Selecione a marca" />
                </SelectTrigger>
                <SelectContent>
                  {brandOptions.map(brand => (
                    <SelectItem key={brand} value={brand}>{brand}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Button type="button" variant="outline" className="shrink-0">
                + Nova
              </Button>
            </div>
          </div>
        </div>
        
        {/* Características */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          {/* Stem */}
          <div>
            <Label htmlFor="stem" className="block mb-2">Stem (Piteira)</Label>
            <Select 
              value={formData.stem} 
              onValueChange={(value) => handleInputChange('stem', value)}
            >
              <SelectTrigger>
                <SelectValue placeholder="Selecione o tipo de piteira" />
              </SelectTrigger>
              <SelectContent>
                {stemOptions.map(option => (
                  <SelectItem key={option} value={option}>{option}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          
          {/* Filter */}
          <div>
            <Label htmlFor="filter" className="block mb-2">Filter (Filtro)</Label>
            <Select 
              value={formData.filter} 
              onValueChange={(value) => handleInputChange('filter', value)}
            >
              <SelectTrigger>
                <SelectValue placeholder="Selecione o tipo de filtro" />
              </SelectTrigger>
              <SelectContent>
                {filterOptions.map(option => (
                  <SelectItem key={option} value={option}>{option}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          
          {/* Shape */}
          <div>
            <Label htmlFor="shape" className="block mb-2">Shape (Forma)</Label>
            <Input
              id="shape"
              value={formData.shape}
              onChange={(e) => handleInputChange('shape', e.target.value)}
              className="w-full"
            />
          </div>
          
          {/* Texture */}
          <div>
            <Label htmlFor="texture" className="block mb-2">Texture (Textura)</Label>
            <Select 
              value={formData.texture} 
              onValueChange={(value) => handleInputChange('texture', value)}
            >
              <SelectTrigger>
                <SelectValue placeholder="Selecione a textura" />
              </SelectTrigger>
              <SelectContent>
                {textureOptions.map(option => (
                  <SelectItem key={option} value={option}>{option}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          
          {/* Condition */}
          <div>
            <Label htmlFor="condition" className="block mb-2">Condition (Condição)</Label>
            <Select 
              value={formData.condition} 
              onValueChange={(value) => handleInputChange('condition', value)}
            >
              <SelectTrigger>
                <SelectValue placeholder="Selecione a condição" />
              </SelectTrigger>
              <SelectContent>
                {conditionOptions.map(option => (
                  <SelectItem key={option} value={option}>{option}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          
          {/* Restoration Level */}
          <div>
            <Label htmlFor="restoration" className="block mb-2">Level of Restoration</Label>
            <Select 
              value={formData.restoration} 
              onValueChange={(value) => handleInputChange('restoration', value)}
            >
              <SelectTrigger>
                <SelectValue placeholder="Selecione o nível" />
              </SelectTrigger>
              <SelectContent>
                {restorationOptions.map(option => (
                  <SelectItem key={option} value={option}>{option}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          
          {/* Country */}
          <div>
            <Label htmlFor="country" className="block mb-2">Country (País)</Label>
            <div className="flex space-x-2">
              <Select 
                value={formData.country} 
                onValueChange={(value) => handleInputChange('country', value)}
              >
                <SelectTrigger className="flex-grow">
                  <SelectValue placeholder="Selecione o país" />
                </SelectTrigger>
                <SelectContent>
                  {countryOptions.map(country => (
                    <SelectItem key={country} value={country}>{country}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Button type="button" variant="outline" className="shrink-0">
                + Novo
              </Button>
            </div>
          </div>
        </div>
        
        {/* Observations */}
        <div>
          <Label htmlFor="observations" className="block mb-2">Observações</Label>
          <Textarea
            id="observations"
            value={formData.observations}
            onChange={(e) => handleInputChange('observations', e.target.value)}
            rows={5}
            className="w-full"
          />
        </div>
      </div>
      
      <div className="flex justify-end space-x-4">
        <Button type="button" variant="outline">
          Cancelar
        </Button>
        <Button type="submit" className="bg-velvet hover:bg-velvet-light">
          {pipeId ? 'Salvar Alterações' : 'Adicionar Cachimbo'}
        </Button>
      </div>
    </form>
  );
};

export default PipeForm;
