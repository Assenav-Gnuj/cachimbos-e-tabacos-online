
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import PipeForm from '@/components/PipeForm';

const AdminPipeForm = () => {
  const { pipeId } = useParams<{ pipeId: string }>();
  const navigate = useNavigate();
  
  const isEditMode = pipeId !== 'new';
  
  // Handler para salvar o cachimbo
  const handleSave = (data: any) => {
    console.log('Salvando dados:', data);
    
    // Em uma aplicação real, aqui faríamos uma chamada de API
    // para salvar os dados no backend
    
    // Navegar de volta para a listagem após salvar
    navigate('/admin/pipes');
  };
  
  return (
    <div>
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-2xl font-serif font-semibold text-wood">
          {isEditMode ? 'Editar Cachimbo' : 'Adicionar Novo Cachimbo'}
        </h2>
        
        <Button 
          variant="outline" 
          onClick={() => navigate('/admin/pipes')}
        >
          Voltar para Lista
        </Button>
      </div>
      
      <PipeForm 
        pipeId={isEditMode ? parseInt(pipeId) : undefined} 
        onSave={handleSave} 
      />
    </div>
  );
};

export default AdminPipeForm;
