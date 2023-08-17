![](./../capa_readme_luelencavalheiro.gif)

# Exerc.13 - CubosAcademy - Julho/23

## Verificando disjuntores

Precisamos verificar em uma caixa de disjuntores quais estão ligados.

A caixa de disjuntores é representada por um array onde, cada item do array é um disjuntor. Nesse array o índice do item é a identificação do disjuntor (começando em 0) e o valor do item, um `boolean`, é a indicação se o disjuntor está ligado ou não. Imprima no console a posição **apenas dois disjuntores que estão ligados**.

#### Exemplo:

Tendo o array de 8 disjuntores a seguir:

```javascript
const disjuntores = [false, false, true, false, false, true, false, false];

// seu codigo aqui
```

Escreva o código que imprimirá no console:

```
2
5
```

---
## ✅ O Que Eu Aprendi Aqui 👇

Para resolver esse exercício, usei o loop FOR para percorrer todo  array. Dentro do loop, criei uma condicional que verificava se o valor naquela posição era VERDADEIRO ou FALSO. Em caso positivo, usei o método PUSH para adicionar a um novo array aquele valor e um outro PUSH para adicionar a um outro array a posição. Por fim, fiz condicionais para descobir quantos disjuntores estavam ligados e a partir disso, usei template string para exibir mensagens personalizadas acompanhadas da posição de cada disjuntor.

## ✅ Skills Dominadas 👩‍💻

- comandos GIT para criar e clonar repositórios
- interpretação e solução de problemas usando Javascript
- manipulação de arrays
- uso de operadores de comparação
- uso do loop for
- uso de condicionais
- template string
- exibição de resultado após manipulação de dados
