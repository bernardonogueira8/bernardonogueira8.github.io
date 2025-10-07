---
layout: /src/layouts/ProjectLayout.astro
title: "Saúde Fetal: Análise e Classificação de Cardiotocografias"
pubDate: 2025-10-06
description: "Análise de cardiotocografias para monitoramento fetal usando aprendizado de máquina (Machine Learning) e Deep Learning."
languages: ["python", "tensorflow", "pandas", "scikit_learn", "mlflow"]
image:
    url: "/images/projects/fetal_health.png"
    alt: "Visualização de cardiotocografia e análise de dados."
---

O projeto **"O problema do sofrimento fetal e o exame de cardiotocografia"** utiliza **Aprendizado de Máquina (Machine Learning)** para fornecer suporte à prevenção da mortalidade infantil e materna. O objetivo principal é a **análise automatizada** de Cardiotocografias (CTGs), um exame simples e de baixo custo, para identificar sinais de risco fetal.

---

## 💡 Tecnologias e Repositório

Este repositório apresenta um exemplo de uma rede neural profunda com mais de uma camada para um problema de classificação.

### ⚙️ Tecnologias Utilizadas

-   **Linguagem:** Python
-   **Deep Learning:** TensorFlow / Keras
-   **Processamento de Dados:** Pandas e NumPy
-   **Machine Learning:** scikit-learn
-   **Visualização:** Matplotlib
-   **Gerenciamento de Experimentos:** MLflow

👉 **[Acesse o Projeto Completo no GitHub](https://github.com/bernardonogueira8/Sofrimento-Fetal-e-o-Exame-da-Cardiotocografia)**

---

## 🎯 Objetivo e Solução

O projeto visa fornecer uma **análise automatizada e precisa de CTGs**, ajudando profissionais de saúde a identificar sinais de risco fetal e a tomar decisões informadas de maneira rápida e confiável.

### Classificação do Risco Fetal

Utilizamos técnicas de **Deep Learning** para classificar os registros da CTG em três categorias:

1.  **Normal:** Indica que o trabalho de parto está ocorrendo normalmente.
2.  **Suspeito:** O bebê apresenta sinais de risco e requer atenção especial.
3.  **Patológico (Sofrimento Fetal):** Risco elevado. O parto deve ser rapidamente encaminhado, geralmente para cesariana.

---

## ⚙️ Fluxo de Trabalho e Funcionalidades

O projeto implementa um **pipeline completo** que transforma os dados do exame em uma classificação preditiva.

### Etapas do Pipeline

1.  **Coleta e Pré-processamento** de dados de CTG.
2.  **Extração de Features Relevantes** (Características):
    -   Frequência cardíaca.
    -   Movimentos fetais.
    -   Contrações uterinas.
    -   Acelerações e desacelerações.
3.  **Treinamento do Modelo de Classificação** utilizando **TensorFlow/Keras**.

### 🧩 Funcionalidades Chave

-   **Leitura e Pré-processamento** de dados de CTG.
-   **Extração de features** relevantes para classificação fetal.
-   Implementação de um **Modelo de Classificação** com Deep Learning (rede neural em **TensorFlow/Keras**).
-   **Registro de experimentos** e controle de versão de modelos usando **MLflow**.
