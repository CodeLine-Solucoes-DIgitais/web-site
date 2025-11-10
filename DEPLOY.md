# 🚀 Deploy no GitHub Pages

Este documento explica como o projeto está configurado para deploy automático no GitHub Pages.

## 📋 Pré-requisitos

O projeto já está configurado e pronto para o GitHub Pages. Você só precisa:

1. **Repositório no GitHub**: O código deve estar em um repositório público no GitHub
2. **Configuração do GitHub Pages**: Habilitada nas configurações do repositório

## ⚙️ Configuração Automática

### 1. Workflow do GitHub Actions

O arquivo `.github/workflows/github-pages.yml` contém toda a configuração necessária para:

- ✅ Executar build automaticamente
- ✅ Fazer deploy a cada push na branch `main`
- ✅ Configurar as permissões necessárias
- ✅ Servir os arquivos do diretório `dist/`

### 2. Configuração do Vite

O arquivo `vite.config.ts` está configurado com:

```typescript
export default defineConfig({
  plugins: [react()],
  base: "/web-site/",  // Nome do repositório
});
```

## 🔧 Como Habilitar o GitHub Pages

### No GitHub (Configuração única):

1. Acesse o repositório no GitHub
2. Vá em **Settings** (Configurações)
3. No menu lateral, clique em **Pages**
4. Em **Source**, selecione:
   - 📁 **Source**: `GitHub Actions`
5. Salve as configurações

### Deploy Automático:

Após a configuração, **todo push na branch `main`** vai:

1. 🔄 Executar o workflow automaticamente
2. 📦 Fazer build do projeto
3. 🚀 Publicar no GitHub Pages
4. ✅ Site estará disponível em: `https://codeline-solucoes-digitais.github.io/web-site/`

## 📊 Monitoramento

### Verificar Status do Deploy:

1. Acesse a aba **Actions** no GitHub
2. Veja o status dos workflows
3. Clique em um workflow para ver detalhes
4. Em caso de erro, os logs estarão disponíveis

### URL do Site:

```
https://codeline-solucoes-digitais.github.io/web-site/
```

## 🛠️ Comandos Úteis

### Testar Build Localmente:

```bash
# Fazer build
npm run build

# Testar build localmente
npm run preview
```

### Build Manual (se necessário):

```bash
# Limpar cache e fazer build
rm -rf dist node_modules
npm install
npm run build
```

## 🔍 Solução de Problemas

### Problemas Comuns:

1. **Build falha**:
   - Verifique se todas as dependências estão instaladas
   - Execute `npm run build` localmente para ver erros

2. **Site não carrega corretamente**:
   - Verifique se a `base` no `vite.config.ts` está correta
   - Deve ser `/nome-do-repositorio/`

3. **Imagens/assets não carregam**:
   - Certifique-se de que estão no diretório `public/`
   - Use caminhos relativos na aplicação

4. **Workflow falha**:
   - Verifique a aba **Actions** no GitHub
   - Veja os logs para identificar o erro específico

## ✨ Recursos Habilitados

- ✅ Deploy automático
- ✅ HTTPS gratuito
- ✅ CDN global do GitHub
- ✅ Versionamento automático
- ✅ Rollback fácil via Git
- ✅ Status de build visível

---

**Pronto!** 🎉 O site está configurado para deploy automático no GitHub Pages.
