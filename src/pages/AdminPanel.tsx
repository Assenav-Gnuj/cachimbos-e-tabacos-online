
import { useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';

const AdminPanel = () => {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState(
    location.pathname.includes('/admin/pipes') ? 'pipes' :
    location.pathname.includes('/admin/accessories') ? 'accessories' :
    location.pathname.includes('/admin/restoration') ? 'restoration' :
    location.pathname.includes('/admin/tobacco') ? 'tobacco' :
    'pipes'
  );

  const handleTabChange = (value: string) => {
    setActiveTab(value);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="border-b border-border">
          <div className="p-6">
            <h1 className="text-3xl font-serif font-semibold text-wood">Painel Administrativo</h1>
            <p className="text-muted-foreground mt-2">
              Gerencie sua coleção de cachimbos, tabacos e acessórios.
            </p>
          </div>
          
          <Tabs value={activeTab} onValueChange={handleTabChange} className="px-6">
            <TabsList className="grid grid-cols-4">
              <TabsTrigger value="pipes" asChild>
                <Link to="/admin/pipes">Cachimbos</Link>
              </TabsTrigger>
              <TabsTrigger value="accessories" asChild>
                <Link to="/admin/accessories">Acessórios</Link>
              </TabsTrigger>
              <TabsTrigger value="restoration" asChild>
                <Link to="/admin/restoration">Material de Restauração</Link>
              </TabsTrigger>
              <TabsTrigger value="tobacco" asChild>
                <Link to="/admin/tobacco">Tabacos</Link>
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
        
        <div className="p-6">
          {/* O conteúdo específico será renderizado aqui pelo React Router */}
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
