window.BLOG_POSTS = [
    {
        slug: "power-automate-flujos-confiables",
        date: "2026-10-10",
        readMin: 6,
        icon: "fa-bolt",
        tags: ["Power Automate", "Power Platform", "SharePoint"],
        published: true,
        es: {
            title: "Power Automate: cuatro hábitos para flujos que no fallan en producción",
            excerpt: "Límites por defecto que sorprenden, cómo filtrar en el origen y cómo manejar errores para que un flujo siga funcionando cuando algo sale mal.",
            body: [
                "Un flujo que funciona con diez elementos de prueba puede romperse con diez mil en producción. Casi siempre el problema no es la lógica, sino límites y valores por defecto que no se conocen de antemano.",
                "## 1. Filtrá en el origen, no dentro del flujo",
                "La acción **Get items** de SharePoint devuelve **100 elementos por defecto**. Para traer más hay que activar la **paginación** y definir un umbral, pero lo más eficiente es no traer datos de más: usá **Filter Query** (sintaxis OData) para que SharePoint devuelva solo lo necesario, en lugar de traer todo y filtrar después con **Filter array**.",
                "```\nEstado eq 'Pendiente' and Vencimiento le '2026-10-31'\n```",
                "## 2. Conocé la concurrencia de Apply to each",
                "- Por defecto, **Apply to each** procesa los elementos de a uno, en orden.",
                "- Si activás el control de concurrencia, el valor inicial es **20** ejecuciones en paralelo y el máximo es **50**.",
                "- Con concurrencia el orden ya no está garantizado, y modificar una misma variable desde varias iteraciones da resultados impredecibles.",
                "## 3. Revisá los límites de Do until",
                "Un bucle **Do until** tiene por defecto un máximo de **60 iteraciones** y un tiempo límite de **1 hora** (PT1H). Si tu condición puede tardar más, ajustá ambos valores o rediseñá el flujo para no depender de una espera larga.",
                "## 4. Manejá los errores con Scope",
                "Agrupá las acciones críticas dentro de una acción **Scope** y agregá otra después con **Configure run after** marcado en *has failed* y *has timed out*. Ahí podés notificar el error o registrarlo, como un try/catch en código.",
                "El historial de ejecuciones se conserva solo **28 días**, así que si necesitás auditoría a largo plazo, guardá los datos importantes en una lista o tabla propia.",
                "Estos cuatro puntos no hacen más lento el desarrollo: son decisiones que se toman una vez, al diseñar el flujo."
            ]
        },
        en: {
            title: "Power Automate: four habits for flows that don't fail in production",
            excerpt: "Default limits that catch people off guard, how to filter at the source, and how to handle errors so a flow keeps working when something goes wrong.",
            body: [
                "A flow that works with ten test items can break with ten thousand in production. Most of the time the problem isn't the logic but limits and default values nobody knew about upfront.",
                "## 1. Filter at the source, not inside the flow",
                "SharePoint's **Get items** action returns **100 items by default**. To get more you can turn on **pagination** and set a threshold, but the most efficient approach is to not fetch extra data: use **Filter Query** (OData syntax) so SharePoint returns only what you need, instead of fetching everything and filtering afterwards with **Filter array**.",
                "```\nStatus eq 'Pending' and DueDate le '2026-10-31'\n```",
                "## 2. Know how Apply to each concurrency works",
                "- By default, **Apply to each** processes items one at a time, in order.",
                "- If you turn on concurrency control, the initial value is **20** parallel runs and the maximum is **50**.",
                "- With concurrency, order is no longer guaranteed, and changing the same variable from several iterations gives unpredictable results.",
                "## 3. Check the Do until limits",
                "A **Do until** loop has a default maximum of **60 iterations** and a time limit of **1 hour** (PT1H). If your condition can take longer, adjust both values or redesign the flow so it doesn't rely on a long wait.",
                "## 4. Handle errors with Scope",
                "Group critical actions inside a **Scope** action and add another one after it with **Configure run after** set to *has failed* and *has timed out*. There you can notify or log the error, like a try/catch in code.",
                "Run history is kept for only **28 days**, so if you need long-term auditing, store the important data in your own list or table.",
                "None of these four points slows development down: they are decisions you make once, when designing the flow."
            ]
        }
    },
    {
        slug: "sql-server-consultas-sargables",
        date: "2026-08-31",
        readMin: 6,
        icon: "fa-database",
        tags: ["SQL Server", "Índices", "Rendimiento"],
        published: true,
        es: {
            title: "SQL Server: consultas SARGables e índices que realmente se usan",
            excerpt: "Por qué una función en el WHERE puede anular un índice, cómo funcionan los índices clustered y nonclustered, y qué límites tienen.",
            body: [
                "Crear un índice no garantiza que SQL Server lo use. Muchas consultas lentas tienen el índice correcto y aun así hacen un recorrido completo de la tabla, y casi siempre la causa está en cómo se escribió el WHERE.",
                "## Qué significa SARGable",
                "Una condición es SARGable (*Search ARGument able*) cuando el motor puede usar un índice para buscar directamente los valores, con un **Index Seek**. Si la condición obliga a calcular algo sobre cada fila, el motor termina haciendo un **Index Scan** o un **Table Scan**.",
                "- Aplicar una función a la columna indexada, como `YEAR(Fecha)`, normalmente impide el seek.",
                "- `LIKE 'abc%'` puede usar el índice; `LIKE '%abc'` no, porque no se sabe por dónde empezar a buscar.",
                "- Comparar columnas con tipos distintos puede forzar una conversión implícita que anula el índice.",
                "```sql\n-- No SARGable: la función se calcula fila por fila\nSELECT Id, Total FROM Pedidos WHERE YEAR(Fecha) = 2026;\n\n-- SARGable: rango sobre la columna original\nSELECT Id, Total FROM Pedidos\nWHERE Fecha >= '20260101' AND Fecha < '20270101';\n```",
                "## Clustered y nonclustered",
                "- Una tabla puede tener **un solo índice clustered**, porque define el orden físico en que se guardan las filas.",
                "- Puede tener hasta **999 índices nonclustered**.",
                "- La clave de un índice clustered admite hasta **900 bytes**, y la de un nonclustered hasta **1.700 bytes**.",
                "## Índices de cobertura",
                "Si una consulta necesita columnas que no están en la clave del índice, SQL Server hace una búsqueda extra en la tabla por cada fila. Con `INCLUDE` agregás esas columnas al índice sin que cuenten para el límite de tamaño de la clave.",
                "```sql\nCREATE NONCLUSTERED INDEX IX_Pedidos_Fecha\nON Pedidos (Fecha) INCLUDE (Total);\n```",
                "Antes de crear más índices, mirá el plan de ejecución real: cada índice acelera las lecturas pero hace más lentas las escrituras (INSERT, UPDATE y DELETE), porque hay que mantenerlo actualizado."
            ]
        },
        en: {
            title: "SQL Server: SARGable queries and indexes that actually get used",
            excerpt: "Why a function in the WHERE clause can cancel out an index, how clustered and nonclustered indexes work, and what limits they have.",
            body: [
                "Creating an index doesn't guarantee SQL Server will use it. Many slow queries have the right index and still scan the whole table, and the cause is almost always how the WHERE clause was written.",
                "## What SARGable means",
                "A condition is SARGable (*Search ARGument able*) when the engine can use an index to look up values directly, with an **Index Seek**. If the condition forces a calculation on every row, the engine ends up doing an **Index Scan** or a **Table Scan**.",
                "- Applying a function to the indexed column, such as `YEAR(OrderDate)`, normally prevents a seek.",
                "- `LIKE 'abc%'` can use the index; `LIKE '%abc'` can't, because there's no known starting point.",
                "- Comparing columns of different types can force an implicit conversion that defeats the index.",
                "```sql\n-- Not SARGable: the function runs row by row\nSELECT Id, Total FROM Orders WHERE YEAR(OrderDate) = 2026;\n\n-- SARGable: range on the original column\nSELECT Id, Total FROM Orders\nWHERE OrderDate >= '20260101' AND OrderDate < '20270101';\n```",
                "## Clustered vs nonclustered",
                "- A table can have **only one clustered index**, because it defines the physical order in which rows are stored.",
                "- It can have up to **999 nonclustered indexes**.",
                "- A clustered index key supports up to **900 bytes**, and a nonclustered key up to **1,700 bytes**.",
                "## Covering indexes",
                "If a query needs columns that aren't in the index key, SQL Server does an extra lookup in the table for every row. With `INCLUDE` you add those columns to the index without counting toward the key size limit.",
                "```sql\nCREATE NONCLUSTERED INDEX IX_Orders_OrderDate\nON Orders (OrderDate) INCLUDE (Total);\n```",
                "Before adding more indexes, look at the actual execution plan: every index speeds up reads but slows down writes (INSERT, UPDATE and DELETE), because it has to be kept up to date."
            ]
        }
    },
    {
        slug: "power-apps-delegacion",
        date: "2026-10-05",
        readMin: 5,
        icon: "fa-table",
        tags: ["Power Apps", "Power Platform", "SharePoint"],
        published: true,
        es: {
            title: "Delegación en Power Apps: por qué tu galería solo muestra 500 registros",
            excerpt: "Qué es la delegación, qué pasa cuando una fórmula no se puede delegar y cómo diseñar consultas que escalen sin perder datos.",
            body: [
                "Una confusión muy común al construir una app en Power Apps: la galería parece mostrar todos los datos... hasta que la lista crece. Casi siempre la causa es la delegación.",
                "## Qué es la delegación",
                "Cuando una fórmula es delegable, Power Apps envía la consulta al origen de datos (Dataverse, SharePoint, SQL Server) y este devuelve solo el resultado. Cuando no lo es, la app descarga una cantidad limitada de filas y filtra de forma local. Ese límite es de **500 registros por defecto** y puede subirse hasta **2.000** en la configuración de la app (Data row limit).",
                "Si tu tabla tiene 3.000 filas y la fórmula no es delegable, la app analiza solo las primeras 500 (o 2.000) y el resultado queda incompleto, sin ningún error visible para el usuario. Lo único que avisa es la advertencia de delegación en el editor.",
                "## Casos típicos",
                "- En SharePoint, **Filter** sobre columnas simples y **StartsWith** se delegan; **Search** no.",
                "- Dataverse delega un conjunto de operaciones más amplio que SharePoint, por eso conviene conocer las limitaciones de cada origen.",
                "- Aplicar funciones como `Left` o `Mid` sobre una columna dentro del filtro suele romper la delegación.",
                "## Cómo diseñarlo bien",
                "- Filtrá primero con una condición delegable y recién después refiná localmente sobre el resultado.",
                "- Guardá en la lista columnas ya preparadas (por ejemplo, un texto normalizado) en lugar de transformar la columna dentro de la fórmula.",
                "- Buscá a pedido (al presionar un botón o con `StartsWith`) en vez de consultar en cada pulsación de tecla.",
                "- Revisá las advertencias de delegación antes de publicar, no después de que los usuarios noten datos faltantes.",
                "```\nFilter(\n    Pedidos,\n    Estado = \"Abierto\",\n    StartsWith(Cliente, txtBuscar.Text)\n)\n```",
                "Con columnas de texto en una lista de SharePoint, esta fórmula se delega completa: el filtrado ocurre en el servidor sin importar cuántos pedidos existan."
            ]
        },
        en: {
            title: "Delegation in Power Apps: why your gallery only shows 500 records",
            excerpt: "What delegation is, what happens when a formula can't be delegated, and how to design queries that scale without losing data.",
            body: [
                "A very common surprise when building a Power Apps app: the gallery seems to show all your data... until the list grows. Most of the time the cause is delegation.",
                "## What delegation is",
                "When a formula is delegable, Power Apps sends the query to the data source (Dataverse, SharePoint, SQL Server) and only the result comes back. When it isn't, the app downloads a limited number of rows and filters them locally. That limit is **500 records by default** and can be raised up to **2,000** in the app settings (Data row limit).",
                "If your table has 3,000 rows and the formula isn't delegable, the app only analyzes the first 500 (or 2,000) and the result is incomplete, with no visible error for the user. The only warning is the delegation notice in the editor.",
                "## Typical cases",
                "- In SharePoint, **Filter** on simple columns and **StartsWith** are delegable; **Search** is not.",
                "- Dataverse delegates a wider set of operations than SharePoint, so it pays to know the limits of each data source.",
                "- Wrapping a column in functions like `Left` or `Mid` inside the filter usually breaks delegation.",
                "## How to design it well",
                "- Filter first with a delegable condition, then refine locally on the result.",
                "- Store prepared columns in the list (for example, normalized text) instead of transforming the column inside the formula.",
                "- Search on demand (on a button press or with `StartsWith`) instead of querying on every keystroke.",
                "- Check delegation warnings before publishing, not after users notice missing data.",
                "```\nFilter(\n    Orders,\n    Status = \"Open\",\n    StartsWith(Customer, txtSearch.Text)\n)\n```",
                "With text columns in a SharePoint list, this formula is fully delegated: filtering happens on the server no matter how many orders exist."
            ]
        }
    },
    {
        slug: "core-web-vitals-sitio-rapido",
        date: "2026-09-21",
        readMin: 5,
        icon: "fa-tachometer",
        tags: ["HTML", "CSS", "JavaScript", "Rendimiento"],
        published: true,
        es: {
            title: "Core Web Vitals: tres métricas para saber si tu sitio se siente rápido",
            excerpt: "LCP, INP y CLS explicados con sus umbrales reales y cambios concretos de HTML y CSS que las mejoran.",
            body: [
                "Un sitio puede pasar una prueba de carga y aun así sentirse lento. Core Web Vitals es el conjunto de métricas de Google que mide la experiencia real del usuario en tres frentes: carga, interacción y estabilidad visual.",
                "## Las tres métricas",
                "- **LCP** (Largest Contentful Paint): cuánto tarda en verse el elemento principal de la página. Es bueno si es de **2,5 segundos o menos**.",
                "- **INP** (Interaction to Next Paint): cuánto tarda la página en responder visualmente a una interacción. Es bueno si es de **200 ms o menos**. Reemplazó a FID como métrica Core Web Vital en **marzo de 2024**.",
                "- **CLS** (Cumulative Layout Shift): cuánto se mueve el contenido mientras carga. Es bueno si es de **0,1 o menos**.",
                "Estos valores se evalúan en el **percentil 75** de las visitas reales, separando móvil y escritorio.",
                "## Cambios simples que funcionan",
                "- Definí `width` y `height` (o `aspect-ratio`) en imágenes y videos para evitar saltos de diseño y mejorar el CLS.",
                "- Usá `loading=\"lazy\"` en imágenes que están fuera de pantalla, pero nunca en la imagen principal: retrasaría el LCP.",
                "- Marcá la imagen principal con `fetchpriority=\"high\"` para que el navegador la descargue primero.",
                "- Dividí las tareas largas de JavaScript y evitá trabajo pesado dentro de los manejadores de eventos para mejorar el INP.",
                "```html\n<img src=\"hero.webp\" width=\"1200\" height=\"630\"\n     fetchpriority=\"high\" alt=\"Portada del proyecto\">\n<img src=\"galeria-1.webp\" width=\"600\" height=\"400\"\n     loading=\"lazy\" alt=\"Captura de la galería\">\n```",
                "## Cómo medirlo",
                "- **PageSpeed Insights** muestra datos reales de usuarios (CrUX) cuando hay tráfico suficiente, junto con el análisis de laboratorio de Lighthouse.",
                "- Las pruebas de laboratorio sirven para depurar; los datos de campo muestran lo que realmente vive tu audiencia."
            ]
        },
        en: {
            title: "Core Web Vitals: three metrics to tell whether your site feels fast",
            excerpt: "LCP, INP and CLS explained with their real thresholds, plus concrete HTML and CSS changes that improve them.",
            body: [
                "A site can pass a load test and still feel slow. Core Web Vitals is Google's set of metrics that measures real user experience on three fronts: loading, interactivity and visual stability.",
                "## The three metrics",
                "- **LCP** (Largest Contentful Paint): how long the main element of the page takes to render. It's good at **2.5 seconds or less**.",
                "- **INP** (Interaction to Next Paint): how long the page takes to visually respond to an interaction. It's good at **200 ms or less**. It replaced FID as a Core Web Vital in **March 2024**.",
                "- **CLS** (Cumulative Layout Shift): how much content moves around while loading. It's good at **0.1 or less**.",
                "These values are assessed at the **75th percentile** of real visits, split by mobile and desktop.",
                "## Simple changes that work",
                "- Set `width` and `height` (or `aspect-ratio`) on images and videos to prevent layout shifts and improve CLS.",
                "- Use `loading=\"lazy\"` on off-screen images, but never on the main image: it would delay LCP.",
                "- Mark the main image with `fetchpriority=\"high\"` so the browser downloads it first.",
                "- Break up long JavaScript tasks and avoid heavy work inside event handlers to improve INP.",
                "```html\n<img src=\"hero.webp\" width=\"1200\" height=\"630\"\n     fetchpriority=\"high\" alt=\"Project cover\">\n<img src=\"gallery-1.webp\" width=\"600\" height=\"400\"\n     loading=\"lazy\" alt=\"Gallery screenshot\">\n```",
                "## How to measure it",
                "- **PageSpeed Insights** shows real-user data (CrUX) when there is enough traffic, alongside Lighthouse's lab analysis.",
                "- Lab tests are for debugging; field data shows what your audience actually experiences."
            ]
        }
    }
];