# Amarelo original no claro e botão de tema fixo — 23/10/2026

## Pedido

Retomar o amarelo original e o padrão das linhas no modo claro. Manter o símbolo de troca de tema acompanhando toda a rolagem no canto superior direito.

## Código alterado

- `src/index.css`: `--route-color` do claro volta a `#f7cb35`, igual ao escuro. O `&` da abertura e o indicador ativo do carrossel usam o mesmo amarelo original. Geometria, espessura, conexões e máscaras de fade do SVG permanecem iguais.
- `.theme-toggle`: passa a `position: fixed`, 22 px do topo e 24 px da direita no desktop; até 760 px, 16 px em ambas as bordas. Fundo acompanha o tema, com borda e sombra discreta para continuar visível sobre outras seções.
- `.theme-control`: reserva 44 × 44 px no fluxo do cabeçalho, mesmo com o botão fixo. Evita que as demais ações usem o espaço do controle.
- `src/components/Header.tsx`: reserva do tema fica depois do menu. No mobile, o menu fica à esquerda do botão fixo, evitando que os dois ocupem o mesmo canto.
- `dist/index.html`: atualizado pelo build de produção.

```css
.theme-toggle {
  position: fixed;
  top: 22px;
  right: 24px;
}

@media (max-width: 760px) {
  .theme-toggle { top: 16px; right: 16px; }
}
```

Por preferência do usuário, as linhas decorativas claras deixam de usar o dourado de contraste adotado na etapa anterior. Links textuais e foco continuam com o tom mais escuro para leitura; o destaque gráfico volta ao amarelo da identidade visual.

Os hovers sem deslocamento, a inversão de contato, os gradientes, a preferência de tema salva e os logotipos por modo continuam vigentes. Sem alteração de dependências, commit ou publicação.

## Verificação

TypeScript, build e conferência estática da cor/posicionamento e da ordem dos controles. Nenhuma nova validação visual de navegador foi realizada, conforme orientação anterior. Notas dos dois cofres atualizadas com esta evidência.
