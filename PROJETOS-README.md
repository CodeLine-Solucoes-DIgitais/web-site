# Como Adicionar Imagens Reais dos Projetos

## 📁 Estrutura de Pastas
```
public/
  images/
    projects/
      ├── projeto1.jpg
      ├── projeto2.png
      ├── projeto3.webp
      └── ...
```

## 🖼️ Formato das Imagens
- **Dimensões recomendadas**: 400x300 pixels
- **Formatos aceitos**: .jpg, .png, .webp, .svg
- **Tamanho máximo**: 500KB por imagem para melhor performance

## ✏️ Como Substituir as Imagens

1. **Coloque suas imagens** na pasta `public/images/projects/`

2. **Edite o arquivo** `src/components/Portfolio.tsx`

3. **Encontre o array `projects`** e substitua as propriedades `image`:

```tsx
{
  id: 1,
  title: "Seu Projeto",
  category: "Sistema Web",
  description: "Descrição do seu projeto...",
  image: "/images/projects/seu-projeto.jpg", // ← Substitua aqui
  technologies: ["React", "Node.js"],
  link: "#"
}
```

## 📝 Personalizando os Projetos

Para cada projeto, você pode editar:

- **title**: Nome do projeto
- **category**: "Sistema Web", "Site", ou "Automação IA"
- **description**: Breve descrição do projeto
- **image**: Caminho para a imagem
- **technologies**: Array com as tecnologias usadas
- **link**: URL para o projeto (se disponível online)

## 🎨 Dicas de Design

- Use imagens com boa qualidade e resolução
- Mantenha proporção 4:3 (400x300)
- Prefira screenshots dos projetos em funcionamento
- Use imagens com boa iluminação e contraste

## 🔄 Como Atualizar

Após fazer as alterações:

1. Salve os arquivos
2. O servidor de desenvolvimento atualizará automaticamente
3. Para produção, execute: `npm run build`

## 📱 Responsividade

As imagens se adaptam automaticamente a diferentes tamanhos de tela:
- Desktop: 3 colunas
- Tablet: 2 colunas  
- Mobile: 1 coluna
