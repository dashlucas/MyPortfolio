# Engineering & Production Standards

Este repositório e os projetos nele documentados seguem diretrizes rigorosas de engenharia de software, versionamento para jogos e fluxos ágeis acelerados por IA.

---

## 1. Controle de Versão & Convenções de Commit

Seguimos a especificação [Conventional Commits](https://www.conventionalcommits.org/):

- `feat:` Nova funcionalidade ou mecânica interativa.
- `fix:` Correção de bug ou falha de renderização/lógica.
- `perf:` Otimizações de desempenho (RenderDoc, draw calls, LODs, shaders).
- `refactor:` Refatoração de código Blueprints/C++ ou reestruturação de assets sem alteração de comportamento.
- `chore:` Tarefas de manutenção, atualização de dependências e configuração de build.
- `docs:` Atualizações em documentação ou README.

### Formato Padrão:
```bash
<type>(<scope>): <short description in imperative mood>

# Exemplo:
perf(rendering): reduce overdraw and draw calls on standalone VR headset
feat(networking): implement server replication for multiplayer pawn movement
```

---

## 2. Fluxo de Pull Requests (PR) & Code Review

Antes de realizar merge em branches principais (`main` ou `develop`):
1. **Branching Strategy**: Uso de `feature/<nome-da-feature>` ou `fix/<nome-do-bug>`.
2. **Auto-Revisão & Validação Local**:
   - Compilação limpa sem warnings impeditivos.
   - Teste em viewport e build standalone/packaged (quando aplicável).
3. **Checklist de PR**:
   - [ ] Descrição clara das mudanças e motivação.
   - [ ] Impacto em desempenho / orçamento de framerate verificado.
   - [ ] Sem assets soltos ou redirecionadores não corrigidos (Unreal fix redirectors).
   - [ ] Revisão de pares (Peer Review) aprovada.

---

## 3. Gestão Ágil de Tarefas

Operamos com ciclos rápidos de iteração utilizando **ClickUp** / **Jira** / **Azure Boards**:
- **WBS (Work Breakdown Structure)**: Quebra de grandes épicos em tarefas técnicas menores e estimáveis.
- **Kanban & Sprints Semanais**: Foco em entregáveis funcionais e validação constante com stakeholders.
- **Retrospectivas e Melhoria Contínua**: Ajuste contínuo da cadência da equipe.

---

## 4. Agentic AI & Modern Production Workflows

Integração de ferramentas modernas de IA Agêntica (Google Antigravity, MCPs, LLMs) para:
- Automação de scaffolding de código e materiais.
- Aceleração de testes exploratórios e scripts de automação.
- Revisão de padrões de código e documentação técnica em tempo real.
- **Direção e Discernimento Humano**: A IA atua como multiplicadora de força; arquitetura, critérios de qualidade e validações finais são sempre de responsabilidade do engenheiro.
