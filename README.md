# Laboratorio 04: Pruebas Unitarias con Jest en React

Este laboratorio tiene como objetivo proporcionar una introducción práctica a las pruebas unitarias en aplicaciones React utilizando Jest y React Testing Library.

## Aplicación Todo List

La aplicación desarrollada es una lista de tareas (Todo List) con las siguientes funcionalidades:

- Añadir nuevas tareas
- Marcar tareas como completadas
- Eliminar tareas
- Filtrar tareas por estado (todas, activas, completadas)
- Ver estadísticas de tareas
- Borrar todas las tareas completadas

## Estructura del Proyecto

```
app/
├── components/
│   ├── Todo.tsx               # Componente principal que integra todos los demás
│   ├── TodoForm.tsx           # Formulario para añadir nuevas tareas
│   ├── TodoItem.tsx           # Componente individual para cada tarea
│   ├── TodoList.tsx           # Lista de tareas
│   ├── TodoFilter.tsx         # Filtros para las tareas
│   ├── TodoStats.tsx          # Estadísticas de tareas
│   └── __tests__/             # Directorio de pruebas
│       ├── TodoItem.test.tsx  # Pruebas para TodoItem
│       ├── TodoForm.test.tsx  # Pruebas para TodoForm
│       └── TodoList.test.tsx  # Pruebas para TodoList
├── page.tsx                   # Página principal
└── layout.tsx                 # Layout de la aplicación
```

## Instrucciones del Laboratorio

En este laboratorio, exploraremos cómo escribir pruebas unitarias efectivas siguiendo el patrón **Prepare, Execute and Validate**:

1. **Prepare**: Configurar el entorno de prueba y los datos necesarios
2. **Execute**: Realizar la acción que queremos probar
3. **Validate**: Verificar que el resultado es el esperado

### Ejercicios

#### Ejercicio 1: Completar prueba de TodoItem

Completa el test para verificar que el componente `TodoItem` muestra correctamente el texto de una tarea con caracteres especiales.

Archivo: `app/components/__tests__/TodoItem.test.tsx`

#### Ejercicio 2: Completar prueba de TodoForm

Completa el test para verificar que el componente `TodoForm` maneja correctamente la entrada de texto con espacios al inicio o final.

Archivo: `app/components/__tests__/TodoForm.test.tsx`

#### Ejercicio 3: Completar prueba de TodoList

Completa el test para verificar que el componente `TodoList` pasa correctamente las funciones onToggle y onDelete a cada TodoItem.

Archivo: `app/components/__tests__/TodoList.test.tsx`

## Casos de Prueba

En las pruebas existentes, podrás encontrar ejemplos de:

- **Happy Path**: Pruebas que verifican el comportamiento correcto cuando todo funciona como se espera
- **Unhappy Path**: Pruebas que verifican el comportamiento cuando hay situaciones inesperadas o errores

## Ejecución de Pruebas

Para ejecutar las pruebas, utiliza el siguiente comando:

```bash
npm test
```

Para ejecutar las pruebas en modo observador (útil durante el desarrollo):

```bash
npm run test:watch
```

## Recursos Adicionales

- [Jest Documentation](https://jestjs.io/docs/getting-started)
- [React Testing Library Documentation](https://testing-library.com/docs/react-testing-library/intro/)
- [Jest DOM Testing Library](https://github.com/testing-library/jest-dom)

HISTORIAS DE USUARIO:
Vela Larrea, David Enrique
HU: Registrar inventario de bienes comunes / Actualizar estado de bienes comunes
Tareas:

TA008 Crear formulario de registro de bienes

TA009 Crear función para actualizar estado de bien común
1. Caso de prueba para la tarea TA008: Crear formulario de registro de bienes
Happy Path:
Prueba 1:

Descripción: Se completa el formulario de registro con todos los campos obligatorios (nombre, cantidad, estado, observaciones) y se envía correctamente.

Resultado esperado: El sistema debe guardar la información del bien común y mostrar un mensaje de éxito.

Condición previa: El usuario debe estar autenticado y tener permisos para registrar bienes comunes.

Prueba 2:

Descripción: Se verifica que los campos del formulario tienen validación de datos (por ejemplo, cantidad debe ser un número positivo, estado debe estar entre valores predefinidos como "nuevo", "usado", etc.).

Resultado esperado: Si los datos ingresados son correctos, se guarda la información; si son incorrectos, se muestra un mensaje de error correspondiente.

Unhappy Path:
Prueba 3:

Descripción: El usuario intenta enviar el formulario sin completar los campos obligatorios.

Resultado esperado: El sistema debe mostrar un mensaje de error indicando que los campos obligatorios no pueden estar vacíos.

Condición previa: Ningún dato del formulario es completado.

Prueba 4:

Descripción: Se intenta registrar un bien con un valor inválido para el campo "cantidad" (por ejemplo, un valor negativo o un texto en lugar de un número).

Resultado esperado: El sistema debe mostrar un mensaje de error indicando que la cantidad debe ser un número positivo.

2. Caso de prueba para la tarea TA009: Crear función para actualizar estado de bien común
Happy Path:
Prueba 1:

Descripción: El usuario actualiza correctamente el estado de un bien común existente (por ejemplo, de "nuevo" a "usado").

Resultado esperado: El sistema debe reflejar el nuevo estado del bien en la base de datos y mostrar un mensaje de confirmación.

Condición previa: El bien debe existir en la base de datos y el usuario debe tener permisos para realizar la actualización.

Prueba 2:

Descripción: El sistema valida que el nuevo estado es uno de los valores predefinidos (por ejemplo, "nuevo", "usado", "dañado").

Resultado esperado: Si el valor ingresado es válido, el sistema actualiza el estado correctamente; si el valor es inválido, muestra un mensaje de error.

Unhappy Path:
Prueba 3:

Descripción: El usuario intenta actualizar el estado de un bien que no existe en la base de datos.

Resultado esperado: El sistema debe mostrar un mensaje de error indicando que el bien no fue encontrado o no existe.

Condición previa: El bien que el usuario intenta actualizar no existe en la base de datos.

Prueba 4:

Descripción: El usuario intenta actualizar el estado con un valor inválido (por ejemplo, un valor que no pertenece a los estados predefinidos).

Resultado esperado: El sistema debe mostrar un mensaje de error indicando que el valor del estado no es válido.
