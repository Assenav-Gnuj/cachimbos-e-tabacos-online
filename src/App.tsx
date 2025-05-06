
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Index from "./pages/Index";
import Home from "./pages/Home";
import PipeList from "./pages/PipeList";
import PipeDetail from "./pages/PipeDetail";
import AdminPanel from "./pages/AdminPanel";
import AdminPipes from "./pages/AdminPipes";
import AdminPipeForm from "./pages/AdminPipeForm";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="/index" element={<Home />} />
          <Route path="/home" element={<Home />} />
          
          {/* Rotas para cachimbos */}
          <Route path="/cachimbos/:categoryId" element={<PipeList />} />
          <Route path="/cachimbos/:categoryId/:pipeId" element={<PipeDetail />} />
          
          {/* Rotas para acessórios */}
          <Route path="/acessorios/:categoryId" element={<div className="container mx-auto px-4 py-8">Lista de Acessórios em desenvolvimento</div>} />
          
          {/* Rotas para materiais de restauração */}
          <Route path="/restauracao/:categoryId" element={<div className="container mx-auto px-4 py-8">Lista de Materiais de Restauração em desenvolvimento</div>} />
          
          {/* Rotas para tabacos */}
          <Route path="/tabacos/:categoryId" element={<div className="container mx-auto px-4 py-8">Lista de Tabacos em desenvolvimento</div>} />
          
          {/* Rotas administrativas */}
          <Route path="/admin" element={<AdminPanel />}>
            <Route index element={<Navigate to="/admin/pipes" replace />} />
            <Route path="pipes" element={<AdminPipes />} />
            <Route path="pipes/new" element={<AdminPipeForm />} />
            <Route path="pipes/edit/:pipeId" element={<AdminPipeForm />} />
            <Route path="accessories" element={<div>Gerenciamento de Acessórios em desenvolvimento</div>} />
            <Route path="restoration" element={<div>Gerenciamento de Materiais de Restauração em desenvolvimento</div>} />
            <Route path="tobacco" element={<div>Gerenciamento de Tabacos em desenvolvimento</div>} />
          </Route>
          
          {/* Rota de página não encontrada */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
