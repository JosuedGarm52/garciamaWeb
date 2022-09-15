# Flex Box

## Flex Box
|Nombre | Descripcion|
|--------|------------|
|inline-flex | Establece un contenedor en línea, similar a inline-block (ocupa solo el contenido).|
|flex | Establece un contenedor en bloque, similar a block (ocupa todo el ancho del padre).|
### Dirección de los ejes 
|Nombre | Valor | Descripcion|
|---|------|-----|
flex-direction|(row) or (row-reverse) or (column or column-reverse) | Cambia la orientación del eje principal.|
  
### Valor del flex direction
|Nombre | Descripcion|
|--------|------------|
row	|Establece la dirección del eje principal en horizontal.
row-reverse	|Establece la dirección del eje principal en horizontal (invertido).
column	|Establece la dirección del eje principal en vertical.
column-reverse	|Establece la dirección del eje principal en vertical (invertido).
  
### Contenedor flexbox multilínea
|Nombre | Valor | Descripcion|
|---|------|-----|
flex-wrap | (nowrap) or (wrap) or (wrap-reverse)|Evita o permite el desbordamiento (multilinea).

### Valor del flex wrap
|Nombre | Descripcion|
|--------|------------|
nowrap	|Establece los ítems en una sola línea (no permite que se desborde el contenedor).
wrap	|Establece los ítems en modo multilínea (permite que se desborde el contenedor).
wrap-reverse	|Establece los ítems en modo multilínea, pero en dirección inversa.
### Atajo: Dirección de los ejes
#### Propiedades de alineación 
|Nombre | Valor | eje|
|---|------|-----|
justify-content	|flex-start ~ flex-end ~ center ~ space-between ~ space-around ~ space-evenly	|1️
align-content|	flex~start ~ flex-end ~ center ~ space-between ~ space~around ~ space~evenly ~ stretch	|2
align-items	|flex-start ~ flex~end ~ center ~ stretch ~ baseline	|2
align~self	|auto ~ flex-start ~ flex~end ~ center ~ stretch ~ baseline	|2️
  
### Eje principal
#### justify-content
|Nombre | Descripcion|
|--------|------------|
flex-start	|Agrupa los ítems al principio del eje principal.
flex-end	|Agrupa los ítems al final del eje principal.
center	|Agrupa los ítems al centro del eje principal.
space-between	|Distribuye los ítems dejando el máximo espacio para separarlos.
space-around	|Distribuye los ítems dejando el mismo espacio alrededor de ellos (izq/dcha).
space-evenly	|Distribuye los ítems dejando el mismo espacio (solapado) a izquierda y derecha.
####  align-content
|Nombre | Descripcion|
|--------|------------|
flex-start |Agrupa los ítems al principio del eje principal.
flex-end	|Agrupa los ítems al final del eje principal.
center	|Agrupa los ítems al centro del eje principal.
space-between	|Distribuye los ítems desde el inicio hasta el final.
space-around	|Distribuye los ítems dejando el mismo espacio a los lados de cada uno.
stretch	|Estira los ítems para ocupar de forma equitativa todo el espacio.

### Sobre el eje secundario
#### align-items
|Nombre | Descripcion|
|--------|------------|
flex-start	|Alinea los ítems al principio del eje secundario.
flex-end	|Alinea los ítems al final del eje secundario.
center	|Alinea los ítems al centro del eje secundario.
stretch	|Alinea los ítems estirándolos de modo que cubran desde el inicio hasta el final del contenedor.
baseline	|Alinea los ítems en el contenedor según la base del contenido de los ítems del contenedor.
###  align-self
|Nombre | Descripcion|
|--------|------------|
flex-start  |Alinea los ítems al principio del contenedor.
flex-end	|Alinea los ítems al final del contenedor.
center	|Alinea los ítems al centro del contenedor.
stretch	|Alinea los ítems estirándolos al tamaño del contenedor.
baseline	|Alinea los ítems en el contenedor según la base de los ítems.
auto	|Hereda el valor de align-items del padre (si no se ha definido, es stretch).

### Atajo: Alineaciones
### Propiedades de hijos
|Nombre | Valor |Descripcion|
|--------|--------|----|
flex-grow	|0   | Número que indica el factor de crecimiento del ítem respecto al resto.
flex-shrink	| 1 | 	Número que indica el factor de decrecimiento del ítem respecto al resto.
flex-basis  |	size ~ content | content	Tamaño base de los ítems antes de aplicar variación.
order	|0 | 	Número (peso) que indica el orden de aparición de los ítems.

### Atajo: Propiedades de hijos 
|Nombre | Valor |Descripcion|
|--------|--------|----|
row-gap	normal | normal~size	|Espacio entre filas (sólo si flex-direction: column)
column-gap	normal | normal~size|Espacio entre columnas (sólo si flex-direction: row)
### Atajo: Huecos
|Nombre | Valor |Descripcion|
|--------|--------|----|
gap	|0 ~ size| 	Aplica el tamaño indicado para el hueco en ambos ejes.
gap	|0 0 ~ size or size |  	Aplica los tamaños indicados para el hueco del eje X y el eje Y.

### Orden de los ítems 
Por último, y quizás una de las propiedades más interesantes, es order, que modificar y establece el orden de los ítems según una secuencia numérica.

Por defecto, todos los ítems flex tienen un order: 0 implícito, aunque no se especifique. Si indicamos un order con un valor numérico, irá recolocando los ítems según su número, colocando antes los ítems con número más pequeño (incluso valores negativos) y después los ítems con números más altos.