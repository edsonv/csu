## CSU (Conversor Simple de Unidades)
CSU es un proyecto para el [Curso de Fundamentos de Javascript](https://platzi.com/js) de [Platzi](https://platzi.com)

## Descripción del módulo
El módulo CSU admite una entrada numérica que represente la unidad conocida y la convierte a la unidad desconocida.

## Instalación
```
npm install @edsonv/csu
```

## Uso
La llamada a la función debe hacerse ingresando los tres parámetros, donde magnitud es de tipo float, y, entrada y salida son de tipo string. Además los últimos dos parámetros corresponden a la abreviación de las unidades según el estándar del SI.
```
const test = require('@edsonv/csu')

console.log(test.convertir(25,'lb','kg'))
```

## Créditos
- [Edson J Vargas](https://edsonvargas.com.ve)

## Licencia

[MIT](https://opensource.org/licenses/MIT)

## Referencias
[Convenciones lexicográficas](https://en.wikipedia.org/wiki/International_System_of_Units#Lexicographic_conventions) en inglés.

[Conversión de unidades](https://en.wikipedia.org/wiki/Conversion_of_units) en inglés.
