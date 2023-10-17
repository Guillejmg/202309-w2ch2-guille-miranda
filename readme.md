Escribe en un módulo propio, una función llamada strictEquals(a, b)que devuelva el mismo valor que a === b. Tu implementación no puede usar los operadores ===ni !==.

Testea la función desde otro fichero con este conjunto de pruebas:

Dada la función strictEquals
Cuando se comparan <A> y <B>
Entonces el resultado será <Resultado>

A	B	RESULTADO	
1	1	verdadero	
Yaya	Yaya	FALSO	// Excepción de regla
0	-0	verdadero	// Excepción de regla
-0	0	verdadero	// Excepción de regla
1	"1"	FALSO	
verdadero	FALSO	FALSO	
FALSO	FALSO	verdadero	
"agua"	"aceite"	FALSO	
Crea un repo como siempre, con los mismos hook husky que anteriormente

Creamos proyecto incluido ESLint (xo) y prettier
Creamos el repo, protegemos la rama y añadimos husky
Añadimos acciones de GitHub
Creamos la rama de trabajo:
Fusionamos con PR
