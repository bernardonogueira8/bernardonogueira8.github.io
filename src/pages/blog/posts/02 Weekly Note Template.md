---
week: <% tp.date.now("ww", 0, tp.file.title, "gggg-[W]ww") %>
month: <% tp.date.now("YYYY - MM-MMMM", 0, tp.file.title, "YYYY--WW") %>
year: <% tp.date.now("YYYY", 0, tp.file.title, "gggg-[W]ww") %>
tags:
  - weekly_note
---
###### [↶ SEMANA ANTERIOR](%3C%25%20tp.date.now(%22gggg-W.md) ⁝ [SEMANA SEGUINTE ↷](%3C%25%20tp.date.now(%22gggg-W.md)
# 📅 Semana  <% tp.file.title %> 

## 📈 Revisão da Semana (O que rolou?)
### 💡 Principais Aprendizados
| File | O que aprendi na semana |
| ---- | ----------------------- |

### ✅ Tarefas Concluídas
> [!success] Produtividade
> ```tasks
> done done after <% tp.date.weekday("YYYY-MM-DD", -1, tp.file.title, "gggg-[W]ww") %> done before <% tp.date.weekday("YYYY-MM-DD", 7, tp.file.title, "gggg-[W]ww") %> short mode
> ```

---
### 📝 Notas Criadas/Editadas
- [Ambientes de Desenvolvimento](./Ambientes%20de%20Desenvolvimento.md)
- [API](./API.md)
- [AutoML](./AutoML.md)
- [Containers](./Containers.md)
- [Conventional Commits](./Conventional%20Commits.md)
- [Dataview](./Dataview.md)
- [Docker](./Docker.md)
- [FastAPI](./FastAPI.md)
- [hiperparâmetros](./hiperpar%C3%A2metros.md)
- [insights](./insights.md)
