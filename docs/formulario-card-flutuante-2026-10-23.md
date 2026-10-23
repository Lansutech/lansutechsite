# Formulário em card flutuante — 23/10/2026

## Pedido

Dar ao formulário um fundo mais destacado para a escrita, com aparência de card flutuante, conforme a área indicada na captura do usuário.

## Código alterado

Somente `src/index.css`, além do manifesto `dist/index.html` gerado pelo build:

- Novos tokens `--form-surface`, `--form-card-border` e `--form-card-shadow` para adaptar o painel a cada tema.
- Modo claro: fundo branco sobre a página `#eaf3f3`, borda discreta e sombra difusa.
- Modo escuro: fundo `#111e26`, borda clara sutil e sombra escura, destacando o painel do fundo geral.
- `.contact-form`: espaçamento interno, cantos de 28 px e sombra sem translação. `align-self: start` mantém a altura do card vinculada ao conteúdo.
- Ajustes de padding em 1100, 760 e 480 px; cantos de 24 px no mobile.
- Botão limitado à largura interna do painel, sem largura mínima fixa. No mobile ele ocupa a largura disponível, evitando overflow após adicionar padding ao card.

```css
.contact-form {
  min-width: 0;
  align-self: start;
  padding: 32px;
  border: 1px solid var(--form-card-border);
  border-radius: 28px;
  background: var(--form-surface);
  box-shadow: var(--form-card-shadow);
}
```

Os campos lineares, labels, foco, validação, mensagens de estado, gradiente do botão e envio existentes continuam vigentes. Não foram adicionadas caixas em cada campo, animação de elevação, dependências ou mudanças no conteúdo.

As cinco notas de contexto do Obsidian foram consultadas. A leitura do Graphify já está autorizada nesta sequência; esta alteração de apresentação não modifica arquitetura ou dependências.

## Verificação

Build de produção e conferência estática dos estilos responsivos. Sem nova validação visual ou envio de formulário, respeitando a orientação anterior do usuário. Notas humanas dos dois cofres atualizadas com esta evidência. Sem commit ou publicação.
