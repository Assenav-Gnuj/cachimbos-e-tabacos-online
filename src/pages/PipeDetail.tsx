
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import CommentForm from '@/components/CommentForm';
import CommentList from '@/components/CommentList';

// Tipos para os dados do cachimbo
interface PipeImage {
  id: number;
  url: string;
  alt: string;
}

interface Pipe {
  id: number;
  name: string;
  brand: string;
  stem: 'acrylic' | 'vulcanite' | 'cumberland';
  filter: 'no' | '6mm' | '9mm' | 'balsa';
  shape: string;
  texture: 'smooth' | 'rusticated' | 'sandblasted' | 'corn cob';
  condition: 'estate' | 'new';
  restoration: 'Level 1' | 'Level 2' | 'Level 3' | 'Level 4' | 'Level 5';
  country: string;
  observations: string;
  images: PipeImage[];
}

// Dados de exemplo para um cachimbo
const samplePipe: Pipe = {
  id: 1,
  name: "Classic Billiard",
  brand: "Peterson",
  stem: "vulcanite",
  filter: "9mm",
  shape: "Billiard",
  texture: "smooth",
  condition: "estate",
  restoration: "Level 2",
  country: "Irlanda",
  observations: "Cachimbo adquirido em leilão no ano de 2019. Apresenta marcas de uso condizentes com a idade, mas foi restaurado com cuidado para manter suas características originais. Excelente fumada, especialmente com misturas inglesas.",
  images: [
    { id: 1, url: "/placeholder.svg", alt: "Vista frontal" },
    { id: 2, url: "/placeholder.svg", alt: "Vista lateral" },
    { id: 3, url: "/placeholder.svg", alt: "Detalhe da haste" },
    { id: 4, url: "/placeholder.svg", alt: "Câmara de combustão" },
    { id: 5, url: "/placeholder.svg", alt: "Marca do fabricante" }
  ]
};

const PipeDetail = () => {
  const { categoryId, pipeId } = useParams<{ categoryId: string; pipeId: string }>();
  const [currentPipe] = useState<Pipe>(samplePipe);
  const [selectedImage, setSelectedImage] = useState<number>(0);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        {/* Galeria de imagens e informações principais */}
        <div className="flex flex-col lg:flex-row">
          {/* Galeria de imagens */}
          <div className="lg:w-1/2 p-6 bg-cream-DEFAULT">
            <div className="h-80 md:h-[500px] flex items-center justify-center mb-4 bg-white rounded shadow overflow-hidden">
              <img 
                src={currentPipe.images[selectedImage]?.url || "/placeholder.svg"} 
                alt={currentPipe.images[selectedImage]?.alt || currentPipe.name} 
                className="h-full w-full object-contain"
              />
            </div>
            <div className="grid grid-cols-5 gap-2">
              {currentPipe.images.map((image, index) => (
                <button 
                  key={image.id}
                  onClick={() => setSelectedImage(index)}
                  className={`h-16 w-16 md:h-20 md:w-20 rounded overflow-hidden border-2 ${
                    selectedImage === index ? 'border-velvet' : 'border-transparent'
                  }`}
                >
                  <img 
                    src={image.url} 
                    alt={image.alt} 
                    className="h-full w-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Informações do cachimbo */}
          <div className="lg:w-1/2 p-6">
            <h1 className="text-3xl font-serif font-semibold text-wood mb-2">{currentPipe.name}</h1>
            <div className="flex items-center mb-4 space-x-2">
              <span className="bg-tobacco-dark text-white text-xs px-2 py-1 rounded">{currentPipe.brand}</span>
              <span className="bg-wood-light text-white text-xs px-2 py-1 rounded">{currentPipe.country}</span>
            </div>
            
            <Tabs defaultValue="details" className="mt-6">
              <TabsList className="grid w-full grid-cols-2 mb-4">
                <TabsTrigger value="details">Detalhes</TabsTrigger>
                <TabsTrigger value="observations">Observações</TabsTrigger>
              </TabsList>
              
              <TabsContent value="details">
                <dl className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <dt className="text-sm font-medium text-muted-foreground">Stem (Piteira)</dt>
                    <dd className="text-sm font-medium">{currentPipe.stem}</dd>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <dt className="text-sm font-medium text-muted-foreground">Filter (Filtro)</dt>
                    <dd className="text-sm font-medium">{currentPipe.filter}</dd>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <dt className="text-sm font-medium text-muted-foreground">Shape (Forma)</dt>
                    <dd className="text-sm font-medium">{currentPipe.shape}</dd>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <dt className="text-sm font-medium text-muted-foreground">Texture (Textura)</dt>
                    <dd className="text-sm font-medium">{currentPipe.texture}</dd>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <dt className="text-sm font-medium text-muted-foreground">Condition (Condição)</dt>
                    <dd className="text-sm font-medium">{currentPipe.condition}</dd>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <dt className="text-sm font-medium text-muted-foreground">Restoration (Restauração)</dt>
                    <dd className="text-sm font-medium">{currentPipe.restoration}</dd>
                  </div>
                </dl>
              </TabsContent>
              
              <TabsContent value="observations">
                <div className="bg-cream-DEFAULT p-4 rounded">
                  <p className="text-wood-light whitespace-pre-line">{currentPipe.observations}</p>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
        
        {/* Seção de comentários */}
        <div className="p-6 border-t">
          <div className="max-w-3xl mx-auto">
            <CommentList />
            <div className="mt-8">
              <CommentForm pipeId={currentPipe.id} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PipeDetail;
