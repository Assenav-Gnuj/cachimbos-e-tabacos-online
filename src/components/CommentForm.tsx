
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from '@/components/ui/sonner';

interface CommentFormProps {
  pipeId?: number;
}

const CommentForm: React.FC<CommentFormProps> = ({ pipeId }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [comment, setComment] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulação de envio de comentário
    setTimeout(() => {
      console.log({
        pipeId,
        name,
        email,
        phone,
        comment,
        date: new Date().toISOString()
      });
      
      toast.success('Comentário enviado com sucesso!');
      
      // Limpar formulário
      setName('');
      setEmail('');
      setPhone('');
      setComment('');
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div className="bg-cream p-6 rounded-lg shadow-sm">
      <h3 className="text-xl font-serif font-semibold text-wood mb-4">Deixe seu comentário</h3>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-wood mb-1">
              Nome *
            </label>
            <Input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-wood mb-1">
              Email *
            </label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full"
            />
          </div>
        </div>
        
        <div className="mb-4">
          <label htmlFor="phone" className="block text-sm font-medium text-wood mb-1">
            Telefone (opcional)
          </label>
          <Input
            id="phone"
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full"
          />
        </div>
        
        <div className="mb-4">
          <label htmlFor="comment" className="block text-sm font-medium text-wood mb-1">
            Comentário *
          </label>
          <Textarea
            id="comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            required
            rows={4}
            className="w-full"
          />
        </div>
        
        <Button 
          type="submit" 
          variant="default"
          className="bg-velvet hover:bg-velvet-light"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Enviando...' : 'Enviar Comentário'}
        </Button>
      </form>
    </div>
  );
};

export default CommentForm;
