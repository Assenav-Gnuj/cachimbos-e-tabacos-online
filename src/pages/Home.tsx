
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <section className="max-w-4xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 bg-cream p-6">
            <h2 className="text-3xl font-serif font-semibold text-wood mb-4">Bem-vindo à Coleção de Cachimbos & Tabacos</h2>
            <p className="mb-4 text-wood-light">
              Este é um espaço dedicado à paixão por cachimbos e tabacos, onde cada peça conta uma história e carrega consigo tradições de diferentes países.
            </p>
            <p className="mb-4 text-wood-light">
              Explore nossa coleção de peças raras e clássicas, organizadas por país de origem, marca e características únicas.
            </p>
            <p className="mb-4 text-wood-light">
              Seja você um colecionador veterano ou um entusiasta iniciante, esperamos que encontre inspiração e conhecimento em nosso acervo.
            </p>
            <div className="mt-6 space-x-4">
              <Link to="/cachimbos/dinamarqueses" className="btn-primary">Explorar Cachimbos</Link>
              <Link to="/tabacos/aromaticos" className="btn-secondary">Descobrir Tabacos</Link>
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="h-full bg-velvet flex items-center justify-center p-6">
              <img 
                src="/placeholder.svg" 
                alt="Coleção de Cachimbos" 
                className="max-h-80 object-contain rounded shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mt-12 max-w-4xl mx-auto">
        <h3 className="text-2xl font-serif font-semibold text-wood mb-6 text-center">Destaques da Coleção</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="card-pipe">
            <img src="/placeholder.svg" alt="Cachimbo Destaque" className="w-full h-48 object-cover" />
            <div className="p-4">
              <h4 className="font-serif text-lg font-semibold">Dunhill Shell Briar</h4>
              <p className="text-sm text-muted-foreground">Inglês • Smooth • 1960</p>
              <Link to="/cachimbos/ingleses/1" className="text-sm text-velvet hover:text-velvet-light mt-2 inline-block">
                Ver detalhes →
              </Link>
            </div>
          </div>

          {/* Card 2 */}
          <div className="card-pipe">
            <img src="/placeholder.svg" alt="Cachimbo Destaque" className="w-full h-48 object-cover" />
            <div className="p-4">
              <h4 className="font-serif text-lg font-semibold">Peterson Sistema Standard</h4>
              <p className="text-sm text-muted-foreground">Irlandês • Rusticated • 1980</p>
              <Link to="/cachimbos/irlandeses/1" className="text-sm text-velvet hover:text-velvet-light mt-2 inline-block">
                Ver detalhes →
              </Link>
            </div>
          </div>

          {/* Card 3 */}
          <div className="card-pipe">
            <img src="/placeholder.svg" alt="Cachimbo Destaque" className="w-full h-48 object-cover" />
            <div className="p-4">
              <h4 className="font-serif text-lg font-semibold">Savinelli Roma</h4>
              <p className="text-sm text-muted-foreground">Italiano • Rusticated • 2005</p>
              <Link to="/cachimbos/italianos/1" className="text-sm text-velvet hover:text-velvet-light mt-2 inline-block">
                Ver detalhes →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
