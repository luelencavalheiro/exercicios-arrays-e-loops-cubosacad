![](./../capa_readme_luelencavalheiro.gif)

# Exerc.12 - CubosAcademy - Julho/23

## Fila do banco

Neste exercício iremos controlar a fila de um banco que tem um limite de pessoas que podem ficar do lado de dentro. Portanto, **enquanto** houver pessoas do lado de fora, e do lado de dentro ainda não tenha atingido o limite permitido, deveremos permitir a entrada.

Para isso, teremos dois arrays, um para controlar a fila do lado de dentro do banco e outro para controlar a fila do lado de fora. Estes serão arrays de strings onde cada elemento é o nome da pessoa que está na fila. Nossos arrays serão chamados de **filaDeDentro** e **filaDeFora**.

O limite de elementos para a **filaDeDentro** deverá ser **5 pessoas**.

Enquanto houver elementos na **filaDeFora** e espaços disponíveis dentro do limite na **filaDeDentro**, deveremos passar o primeiro elemento da **filaDeFora** para a última posição da **filaDeDentro**.

Ao final, imprima todos os elementos da **filaDeDentro** e em seguida imprima todos os elementos da **filaDeFora**

#### Exemplo 1:

Suponha que existam 3 pessoas na fila de dentro e 4 pessoas na fila de fora:

```javascript
const filaDeDentro = ["Jose", "Maria", "Joao"];
const filaDeFora = ["Joana", "Roberta", "Marcos", "Felipe"];

// seu codigo aqui
```

Escreve um código que verifique quantas pessoas tem a **filaDeDentro**. Caso o limite de pessoas ainda não tenha sido alcançado ( **5 pessoas**), a primeira pessoa da **filaDeFora** deverá ser inserida no final da **filaDeDentro** até que o limite seja alcançado.

Após a manipulação dos arrays, ambos devem ser mostrados na tela.

No exemplo dado acima, o que deve ser impresso no console ao final do programa é:

```
[ 'Jose', 'Maria', 'Joao', 'Joana', 'Roberta' ]
[ 'Marcos', 'Felipe' ]
```

## ✅ O Que Eu Aprendi Aqui 👇

Para resolver esse exercício, usei o loop WHILE. Dentro, estabeleci as condições: se o tamanho da fila for menor que 5 e a variável I que faz a contagem da posição do array for menor que o tamanho do array. Então, se for verdade essa condição, usando os métodos PUSH e SHIFT adicionei uma pessoa na fila de dentro e a removi da fila de fora.

## ✅ Skills Dominadas 👩‍💻

- comandos GIT para criar e clonar repositórios
- interpretação e solução de problemas usando Javascript
- criação de variáveis
- declaração de arrays
- manipulação de arrays
- uso de operadores de comparação
- uso do loop while
- uso do método push (para adicionar um elemento ao final do array)
- uso do método shift (para remover o primeiro elemento de um array)
- exibição de resultado após manipulação de dados