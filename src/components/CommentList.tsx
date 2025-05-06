
import { useState } from 'react';
import { formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale';

interface Comment {
  id: number;
  name: string;
  date: string;
  content: string;
}

interface CommentListProps {
  comments?: Comment[];
}

// Dados de exemplo para comentários
const sampleComments: Comment[] = [
  {
    id: 1,
    name: "João Silva",
    date: "2023-05-10T14:48:00.000Z",
    content: "Excelente cachimbo! Estou interessado em mais informações sobre a origem dele."
  },
  {
    id: 2,
    name: "Maria Oliveira",
    date: "2023-05-09T10:30:00.000Z",
    content: "Tenho um modelo parecido, mas com acabamento diferente. Gostaria de comparar os dois algum dia."
  },
  {
    id: 3,
    name: "Carlos Mendes",
    date: "2023-05-07T16:20:00.000Z",
    content: "O sistema de filtro deste modelo é muito eficiente. Recomendo para quem está começando na coleção."
  }
];

const CommentList: React.FC<CommentListProps> = ({ comments = sampleComments }) => {
  return (
    <div className="space-y-4">
      <h3 className="text-xl font-serif font-semibold text-wood mb-2">
        Comentários ({comments.length})
      </h3>
      
      {comments.length > 0 ? (
        comments.map((comment) => (
          <div key={comment.id} className="bg-white p-4 rounded shadow-sm border border-border">
            <div className="flex justify-between items-center mb-2">
              <h4 className="font-medium text-wood">{comment.name}</h4>
              <span className="text-sm text-muted-foreground">
                {formatDistanceToNow(new Date(comment.date), { addSuffix: true, locale: ptBR })}
              </span>
            </div>
            <p className="text-wood-light">{comment.content}</p>
          </div>
        ))
      ) : (
        <p className="text-muted-foreground italic">Seja o primeiro a comentar.</p>
      )}
    </div>
  );
};

export default CommentList;
