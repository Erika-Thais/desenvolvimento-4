import { defineConfig } from 'vite';

export default defineConfig({
  // Garante que o diretório base seja o atual
  base: './',
  
  // Aponta sua pasta de imagens
  publicDir: 'public', 

  build: {
    minify: 'esbuild',
    outDir: 'dist',
    emptyOutDir: true, // Limpa os 61,2 MB fantasmas antes de recriar
    
    rollupOptions: {
      input: {
        // Obriga o compilador a iniciar APENAS pelo index.html
        main: 'index.html'
      },
      // Bloqueia e impede explicitamente o empacotamento da node_modules no resultado final
      external: [/^node_modules\//],
    }
  }
});
