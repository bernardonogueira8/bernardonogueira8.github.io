---
full-date: <% tp.file.title %>
week: <% tp.date.now("YYYY-[W]ww", 0, tp.file.title, "YYYY-MM-DD") %>
month: <% tp.date.now("YYYY - MM-MMMM", 0, tp.file.title, "YYYY-MM-DD") %>
year: <% tp.date.now("YYYY", 0, tp.file.title, "YYYY-MM-DD") %>
tags:
  - daily_note
  - dashboard
---
###### [↶ ONTEM](%3C%25%20tp.date.now(%22YYYY-MM-DD%22,%20-1,%20tp.file.title,%20%22YYYY-MM-DD%22)%20%25%3E.md) ⁝ [AMANHÃ ↷](%3C%25%20tp.date.now(%22YYYY-MM-DD%22,%201,%20tp.file.title,%20%22YYYY-MM-DD%22)%20%25%3E.md)
# 📅 <% tp.date.now("dddd -  MMMM Do YYYY", 0, tp.file.title, "(📅) YYYY-MM-DD") %>
## 🧠 Aprendizados e Atividades
> [!abstract] Resumo do dia
## 📢 Reuniões do Dia

## Gestão de Tarefas 🚀
> [!todo] **Para Hoje 📊**
> ```tasks  
> not done
>due on <% tp.date.now("YYYY-MM-DD", 0, tp.file.title, "YYYY-MM-DD") %>
>sort by priority descending
>short mode
> ```

> [!warning] **Atrasadas (Pendentes) 🚨**
> ```tasks
> not done
>due before <% tp.date.now("YYYY-MM-DD", 0, tp.file.title, "YYYY-MM-DD") %>
short mode
> ```

> [!success] *Concluídos Hoje*
> ```tasks
>done date is <% tp.date.now("YYYY-MM-DD", 0, tp.file.title, "YYYY-MM-DD") %>
>hide task count
>```

>[!example] **Tarefas Criadas Hoje 🐸**

## 📝 Notas Criadas Hoje
`