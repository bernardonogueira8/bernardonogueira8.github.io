---
layout: /src/layouts/ProjectLayout.astro
title: "California Housing ML: Predição de Preços de Imóveis"
pubDate: 2025-10-06
description: "Análise preditiva de preços de casas na Califórnia usando aprendizado de máquina."
languages:
    ["python", "scikit_learn", "pandas", "numpy", "matplotlib", "seaborn"]
image:
    url: "/images/projects/California_Housing-Prices.png"
    alt: "Visualização de dados e predição de preços de casas na Califórnia."
---

**California Housing ML** é um projeto de **regressão** que utiliza técnicas de **Aprendizado de Máquina (Machine Learning)** para prever o **valor mediano das casas** em distritos da Califórnia, com base em dados do censo de 1990.

O projeto explora e compara o desempenho de múltiplos modelos de regressão para identificar a melhor solução preditiva.

---

## 💡 Tecnologias e Repositório

Aqui estão as ferramentas e bibliotecas utilizadas neste projeto de regressão, com o link para o código completo.

### ⚙️ Tecnologias Principais

-   **Linguagem:** Python
-   **Machine Learning:** scikit-learn
-   **Processamento de Dados:** Pandas & NumPy
-   **Visualização:** Matplotlib & Seaborn

### 🌐 Repositório do Código

O código completo do projeto está disponível em:

👉 **[View project on GitHub](https://github.com/bernardonogueira8/California_Housing-Prices)**

## 🎯 Objetivo e Modelo Vencedor

O projeto demonstra a aplicação de _Machine Learning_ na **predição de preços imobiliários**.

### Desempenho

Após a comparação, o **Random Forest Regressor** foi selecionado como o modelo de melhor desempenho:

-   **R² Médio:** **0.8068** (explicando cerca de 80% da variância do preço).
-   **RMSE Médio:** **$50,726.74**

---

## ⚙️ Funcionalidades e Pipeline

O projeto implementa um pipeline de _Machine Learning_ robusto, desde a exploração de dados até a comparação final dos modelos.

-   **Pré-processamento e Exploração de Dados** com **Pandas** e **NumPy**.
-   **Visualização de Dados** para _insights_ geográficos e de correlação.
-   **Treinamento de Múltiplos Modelos** de regressão.
-   **Avaliação de Desempenho** via **RMSE** e **R²**.
-   **Comparação de Modelos** para seleção da solução mais precisa.

---

## 📊 Resultados Detalhados dos Modelos

A tabela abaixo mostra o desempenho comparativo dos modelos avaliados.

| Modelo                      | RMSE médio    | RMSE std   | R2 médio     | R2 std       |
| :-------------------------- | :------------ | :--------- | :----------- | :----------- |
| **Random Forest Regressor** | **50,726.74** | **632.69** | **0.806819** | **0.005218** |
| Ridge                       | 68,844.91     | 455.56     | 0.644220     | 0.005797     |
| Linear Regression           | 68,847.69     | 460.81     | 0.644191     | 0.005831     |
| Bayesian Ridge              | 68,850.85     | 453.96     | 0.644159     | 0.005754     |
| Elastic Net                 | 76,780.62     | 470.39     | 0.557521     | 0.002349     |
| SVR                         | 118,565.72    | 977.10     | -0.055104    | 0.006184     |

---

## 📖 Variáveis do Dataset

O _dataset_ utiliza dados do censo de 1990 com as seguintes variáveis (features) para a predição do valor alvo:

| Variável             | Tradução                    | Descrição                                                         |
| :------------------- | :-------------------------- | :---------------------------------------------------------------- |
| longitude            | Longitude                   | Medida de quão a oeste está uma casa.                             |
| latitude             | Latitude                    | Medida de quão ao norte está uma casa.                            |
| housingMedianAge     | Idade Mediana das Casas     | Idade mediana das casas em um quarteirão.                         |
| totalRooms           | Total de Cômodos            | Número total de cômodos em um quarteirão.                         |
| totalBedrooms        | Total de Quartos            | Número total de quartos em um quarteirão.                         |
| population           | População                   | Número total de pessoas residentes em um quarteirão.              |
| households           | Domicílios                  | Número total de domicílios em um quarteirão.                      |
| medianIncome         | Renda Mediana               | Renda mediana dos domicílios (em dezenas de milhares de dólares). |
| **medianHouseValue** | **Valor Mediano das Casas** | **Variável alvo (target)** a ser prevista (em dólares).           |
| oceanProximity       | Proximidade do Oceano       | Localização da casa em relação ao oceano/mar.                     |

🚀 _Desenvolvido por bernardonogueira8 usando Python e Scikit-learn._
