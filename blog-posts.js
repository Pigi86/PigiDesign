window.BLOG_POSTS = [
    {
        slug: "photoshop-flujo-no-destructivo",
        date: "2026-06-15",
        readMin: 5,
        icon: "fa-picture-o",
        tags: ["Photoshop", "Diseño gráfico", "Flujo de trabajo"],
        published: true,
        es: {
            title: "Photoshop: flujo de trabajo no destructivo con capas de ajuste, máscaras y objetos inteligentes",
            excerpt: "Cómo editar sin tocar los píxeles originales para poder cambiar de opinión (o atender el cambio de un cliente) sin rehacer el trabajo.",
            body: [
                "Retocar una imagen directamente sobre su capa funciona hasta el día en que el cliente pide un cambio. El flujo no destructivo de Photoshop deja intacta la imagen original y hace que cada decisión se pueda editar después.",
                "## Capas de ajuste",
                "Una capa de ajuste (Curvas, Niveles, Tono/Saturación, entre otras) aplica su efecto sobre las capas de abajo sin modificar sus píxeles. Podés cambiar los valores, apagarla con el ojo o borrarla cuando quieras.",
                "## Máscaras de capa",
                "En una máscara, el **blanco muestra**, el **negro oculta** y los grises muestran de forma parcial. En lugar de borrar píxeles con la goma, pintá sobre la máscara con un pincel: si te equivocás, invertís el color y recuperás la imagen.",
                "## Objetos inteligentes",
                "Un objeto inteligente guarda el contenido original dentro de la capa. Podés reducirlo y volver a agrandarlo sin perder calidad, algo que no pasa con una capa de píxeles normal: al achicarla, la información descartada no se recupera. Además, los filtros aplicados sobre un objeto inteligente se convierten en **filtros inteligentes**, que siguen siendo editables.",
                "## Límites a tener en cuenta",
                "- El formato PSD admite hasta **30.000 píxeles por lado** y **2 GB** de tamaño.",
                "- Para documentos más grandes existe el formato **PSB** (Large Document Format), que llega hasta 300.000 píxeles por lado.",
                "- Trabajá en **RGB** para pantallas y convertí a **CMYK** recién al preparar un archivo para imprimir.",
                "## Exportar sin pasos manuales",
                "Si nombrás una capa o un grupo con una extensión, como `logo.png` o `portada.jpg`, y activás **Archivo > Generar > Recursos de imagen**, Photoshop exporta ese elemento automáticamente cada vez que lo modificás.",
                "```\nCapas (de arriba hacia abajo)\n├─ Curvas             (capa de ajuste)\n├─ Titulo             (texto)\n├─ logo.png           (objeto inteligente, se exporta solo)\n├─ Foto + máscara     (objeto inteligente con máscara)\n└─ Fondo\n```",
                "Con esta estructura, cambiar un color, reemplazar una foto o corregir un texto lleva segundos y no afecta al resto del diseño."
            ]
        },
        en: {
            title: "Photoshop: a non-destructive workflow with adjustment layers, masks and smart objects",
            excerpt: "How to edit without touching the original pixels, so you can change your mind (or handle a client's change request) without redoing the work.",
            body: [
                "Retouching an image directly on its layer works until the day the client asks for a change. Photoshop's non-destructive workflow keeps the original image intact and makes every decision editable later.",
                "## Adjustment layers",
                "An adjustment layer (Curves, Levels, Hue/Saturation, among others) applies its effect to the layers below without modifying their pixels. You can change the values, hide it with the eye icon or delete it whenever you like.",
                "## Layer masks",
                "In a mask, **white reveals**, **black hides** and grays reveal partially. Instead of erasing pixels with the eraser, paint on the mask with a brush: if you make a mistake, invert the color and the image comes back.",
                "## Smart objects",
                "A smart object stores the original content inside the layer. You can shrink it and enlarge it again without losing quality, which doesn't happen with a regular pixel layer: once you scale it down, the discarded information can't be recovered. Filters applied to a smart object also become **smart filters**, which stay editable.",
                "## Limits to keep in mind",
                "- The PSD format supports up to **30,000 pixels per side** and **2 GB** in size.",
                "- For larger documents there is the **PSB** format (Large Document Format), which goes up to 300,000 pixels per side.",
                "- Work in **RGB** for screens and convert to **CMYK** only when preparing a file for print.",
                "## Export without manual steps",
                "If you name a layer or group with an extension, like `logo.png` or `cover.jpg`, and turn on **File > Generate > Image Assets**, Photoshop automatically exports that element every time you change it.",
                "```\nLayers (top to bottom)\n├─ Curves             (adjustment layer)\n├─ Title              (text)\n├─ logo.png           (smart object, exports itself)\n├─ Photo + mask       (smart object with a mask)\n└─ Background\n```",
                "With this structure, changing a color, swapping a photo or fixing a text takes seconds and doesn't affect the rest of the design."
            ]
        }
    },
    {
        slug: "adobe-fireworks-que-aprender",
        date: "2026-05-25",
        readMin: 5,
        icon: "fa-paint-brush",
        tags: ["Adobe Fireworks", "Diseño web", "Diseño gráfico"],
        published: true,
        es: {
            title: "Adobe Fireworks: qué lo hacía especial para diseñar interfaces y qué podemos aprender de él",
            excerpt: "Una mirada a la herramienta que muchos diseñadores web usaron durante años, y a las ideas suyas que siguen vivas en las herramientas actuales.",
            body: [
                "Adobe Fireworks fue durante años una de las herramientas favoritas para diseñar interfaces y gráficos web. Adobe dejó de desarrollarlo en 2013, pero muchas de sus ideas siguen presentes en las herramientas de hoy.",
                "## Un poco de historia",
                "Fireworks nació en Macromedia y pasó a manos de Adobe cuando esta compró Macromedia en **2005**. Su última versión fue **Fireworks CS6**, de 2012, y en **2013** Adobe anunció que no seguiría desarrollándolo.",
                "## Qué lo hacía diferente",
                "- Combinaba **vectores y mapas de bits** en el mismo documento, sin cambiar de programa.",
                "- Su formato nativo era **PNG**, con la información de capas y vectores guardada dentro del propio archivo.",
                "- Un mismo archivo podía tener varias **páginas** (pantallas) y **estados**, por ejemplo un botón normal, en hover y presionado.",
                "- Los **símbolos** permitían reutilizar elementos, y el **escalado en 9 porciones** (9-slice) permitía estirar botones y paneles sin deformar las esquinas.",
                "- Las **porciones** (slices) y el panel de **optimización** exportaban cada parte como GIF, JPEG o PNG con la compresión elegida.",
                "## Qué se puede aprender",
                "Las ideas de Fireworks hoy tienen otros nombres. Conocer la equivalencia ayuda a trabajar mejor en cualquier herramienta moderna.",
                "```\nFireworks            Herramientas actuales\nPáginas          ->  Artboards / frames\nEstados          ->  Variantes de componentes\nSímbolos         ->  Componentes\nSlices           ->  Presets de exportación\n```",
                "Photoshop incorporó los **artboards** en la versión CC 2015, y con la opción *Generar recursos de imagen* cubre buena parte del flujo de exportación que antes resolvían los slices.",
                "Si todavía conservás archivos de Fireworks, se ven como un PNG común en cualquier visor, pero para seguir editando sus capas y vectores hace falta el propio Fireworks."
            ]
        },
        en: {
            title: "Adobe Fireworks: what made it special for interface design and what we can learn from it",
            excerpt: "A look at the tool many web designers used for years, and at the ideas of it that live on in today's tools.",
            body: [
                "Adobe Fireworks was for years one of the favorite tools for designing interfaces and web graphics. Adobe stopped developing it in 2013, but many of its ideas are still present in today's tools.",
                "## A bit of history",
                "Fireworks started at Macromedia and moved to Adobe when it acquired Macromedia in **2005**. Its last version was **Fireworks CS6**, released in 2012, and in **2013** Adobe announced it would not develop it any further.",
                "## What made it different",
                "- It combined **vectors and bitmaps** in the same document, without switching programs.",
                "- Its native format was **PNG**, with layer and vector information stored inside the file itself.",
                "- A single file could hold several **pages** (screens) and **states**, for example a button in its normal, hover and pressed versions.",
                "- **Symbols** allowed reusing elements, and **9-slice scaling** let you stretch buttons and panels without distorting the corners.",
                "- **Slices** and the **optimization** panel exported each part as GIF, JPEG or PNG with the chosen compression.",
                "## What we can learn",
                "Fireworks' ideas now go by other names. Knowing the equivalents helps you work better in any modern tool.",
                "```\nFireworks            Current tools\nPages            ->  Artboards / frames\nStates           ->  Component variants\nSymbols          ->  Components\nSlices           ->  Export presets\n```",
                "Photoshop added **artboards** in the CC 2015 release, and with its *Generate Image Assets* option it covers a good part of the export workflow that slices used to handle.",
                "If you still have Fireworks files, they show up as a regular PNG in any viewer, but you need Fireworks itself to keep editing their layers and vectors."
            ]
        }
    },
    {
        slug: "unity-recolector-basura-object-pooling",
        date: "2026-07-27",
        readMin: 6,
        icon: "fa-gamepad",
        tags: ["Unity", "C#", "Rendimiento"],
        published: true,
        es: {
            title: "Unity: cómo evitar los tirones del recolector de basura con object pooling",
            excerpt: "Qué genera basura en C#, cómo detectarla con el Profiler y cómo reutilizar objetos con el ObjectPool que incluye Unity.",
            body: [
                "En un juego, un tirón de 30 ms se nota más que un promedio de 60 FPS. Muchos de esos tirones vienen del recolector de basura (GC), y casi siempre son evitables.",
                "## Cómo funciona el GC en Unity",
                "Los objetos de C# viven en el heap administrado. El recolector libera la memoria de los que ya no se usan y, mientras trabaja, puede frenar el juego por un instante. Desde Unity **2019.1** existe el **recolector incremental**, que reparte ese trabajo entre varios frames para reducir los picos.",
                "Aun así, la mejor estrategia es generar menos basura en primer lugar.",
                "## Qué genera basura",
                "- Concatenar texto en cada frame, como `\"Puntos: \" + puntos` dentro de `Update`.",
                "- Usar LINQ o lambdas que capturan variables en código que se ejecuta todo el tiempo.",
                "- Hacer *boxing*: pasar un `int` o un `struct` a un parámetro de tipo `object`.",
                "- Crear y destruir objetos constantemente con `Instantiate` y `Destroy`: balas, enemigos, efectos.",
                "## Object pooling",
                "En lugar de destruir un objeto, lo desactivás y lo guardás para reutilizarlo. Desde Unity **2021.1** el namespace `UnityEngine.Pool` incluye `ObjectPool<T>`, así que no hace falta escribirlo desde cero.",
                "```csharp\nusing UnityEngine;\nusing UnityEngine.Pool;\n\npublic class BulletSpawner : MonoBehaviour\n{\n    [SerializeField] Bullet prefab;\n    ObjectPool<Bullet> pool;\n\n    void Awake()\n    {\n        pool = new ObjectPool<Bullet>(\n            () => Instantiate(prefab),\n            b => b.gameObject.SetActive(true),\n            b => b.gameObject.SetActive(false),\n            b => Destroy(b.gameObject),\n            defaultCapacity: 20,\n            maxSize: 100);\n    }\n\n    public Bullet Shoot() => pool.Get();\n    public void Return(Bullet b) => pool.Release(b);\n}\n```",
                "Los cuatro primeros parámetros indican cómo crear el objeto, qué hacer al pedirlo, qué hacer al devolverlo y cómo destruirlo si el pool supera su tamaño máximo.",
                "## Cómo detectarlo",
                "- Abrí el **Profiler**, andá al módulo **CPU Usage** y mirá la columna **GC Alloc**: durante el gameplay lo ideal es que esté en 0 B por frame.",
                "- Cacheá referencias en `Awake` o `Start` en vez de llamar a `GetComponent` en cada `Update`.",
                "- Optimizá donde el Profiler lo indique: medir primero evita arreglar problemas que no existen."
            ]
        },
        en: {
            title: "Unity: avoiding garbage collector stutters with object pooling",
            excerpt: "What creates garbage in C#, how to spot it with the Profiler, and how to reuse objects with Unity's built-in ObjectPool.",
            body: [
                "In a game, a 30 ms hitch is more noticeable than a 60 FPS average. Many of those hitches come from the garbage collector (GC), and almost all of them are avoidable.",
                "## How the GC works in Unity",
                "C# objects live on the managed heap. The collector frees the memory of objects that are no longer used and, while it works, it can pause the game for a moment. Since Unity **2019.1** there is an **incremental garbage collector**, which spreads that work across several frames to reduce spikes.",
                "Even so, the best strategy is to create less garbage in the first place.",
                "## What creates garbage",
                "- Concatenating text every frame, like `\"Score: \" + score` inside `Update`.",
                "- Using LINQ or lambdas that capture variables in code that runs all the time.",
                "- *Boxing*: passing an `int` or a `struct` to an `object` parameter.",
                "- Constantly creating and destroying objects with `Instantiate` and `Destroy`: bullets, enemies, effects.",
                "## Object pooling",
                "Instead of destroying an object, you deactivate it and keep it for reuse. Since Unity **2021.1** the `UnityEngine.Pool` namespace includes `ObjectPool<T>`, so you don't need to write one from scratch.",
                "```csharp\nusing UnityEngine;\nusing UnityEngine.Pool;\n\npublic class BulletSpawner : MonoBehaviour\n{\n    [SerializeField] Bullet prefab;\n    ObjectPool<Bullet> pool;\n\n    void Awake()\n    {\n        pool = new ObjectPool<Bullet>(\n            () => Instantiate(prefab),\n            b => b.gameObject.SetActive(true),\n            b => b.gameObject.SetActive(false),\n            b => Destroy(b.gameObject),\n            defaultCapacity: 20,\n            maxSize: 100);\n    }\n\n    public Bullet Shoot() => pool.Get();\n    public void Return(Bullet b) => pool.Release(b);\n}\n```",
                "The first four parameters define how to create the object, what to do when it's requested, what to do when it's returned, and how to destroy it if the pool exceeds its maximum size.",
                "## How to detect it",
                "- Open the **Profiler**, go to the **CPU Usage** module and check the **GC Alloc** column: during gameplay the ideal is 0 B per frame.",
                "- Cache references in `Awake` or `Start` instead of calling `GetComponent` in every `Update`.",
                "- Optimize where the Profiler points: measuring first avoids fixing problems that don't exist."
            ]
        }
    },
    {
        slug: "unity-update-fixedupdate-lateupdate",
        date: "2026-07-06",
        readMin: 5,
        icon: "fa-cubes",
        tags: ["Unity", "C#", "Física"],
        published: true,
        es: {
            title: "Unity: Update, FixedUpdate y LateUpdate, cuándo usar cada uno",
            excerpt: "Cada método corre en un momento distinto del ciclo de Unity. Elegir bien evita movimientos entrecortados, física inestable y cámaras que tiemblan.",
            body: [
                "Un error muy común al empezar con Unity es poner todo el código en `Update`. Unity ejecuta distintos métodos en momentos diferentes de cada ciclo, y elegir el correcto evita movimientos entrecortados, física inestable y cámaras que tiemblan.",
                "## Update: una vez por frame",
                "Se llama una vez por frame, así que su frecuencia depende de los FPS. Es el lugar para leer input y mover objetos que no usan física. Multiplicá siempre el movimiento por `Time.deltaTime` (los segundos que tardó el último frame) para que la velocidad sea la misma a 30 o a 144 FPS.",
                "## FixedUpdate: paso fijo de física",
                "Se ejecuta a intervalos fijos: **0,02 segundos por defecto, es decir 50 veces por segundo**, sincronizado con el motor de física. Acá van las fuerzas y los cambios sobre un `Rigidbody`. Dentro de `FixedUpdate`, `Time.deltaTime` devuelve el paso fijo, por lo que el cálculo no cambia.",
                "Si un frame tarda demasiado, `FixedUpdate` puede ejecutarse varias veces seguidas para ponerse al día, hasta el límite de **Maximum Allowed Timestep** (0,333 segundos por defecto). Ambos valores se configuran en *Project Settings > Time*.",
                "## LateUpdate: después de todos los Update",
                "Se llama una vez por frame, cuando todos los `Update` ya terminaron. Es el lugar ideal para una cámara que sigue a un objeto: el objetivo ya se movió y la cámara no queda un frame atrasada.",
                "## Una regla práctica",
                "- Leé el input en `Update` y guardalo en una variable. Si lo leés en `FixedUpdate` podés perder pulsaciones, porque no corre en todos los frames.",
                "- Usá el valor guardado en `FixedUpdate` para mover el `Rigidbody`.",
                "- Si un objeto con `Rigidbody` se ve entrecortado, probá activar **Interpolate** en el componente.",
                "```csharp\npublic class PlayerMotor : MonoBehaviour\n{\n    [SerializeField] float speed = 5f;\n    [SerializeField] Rigidbody rb;\n    Vector3 input;\n\n    void Update()\n    {\n        // Input: una vez por frame\n        input = new Vector3(Input.GetAxis(\"Horizontal\"), 0f, Input.GetAxis(\"Vertical\"));\n    }\n\n    void FixedUpdate()\n    {\n        // Física: paso fijo\n        rb.MovePosition(rb.position + input * speed * Time.fixedDeltaTime);\n    }\n}\n\npublic class CameraFollow : MonoBehaviour\n{\n    [SerializeField] Transform target;\n\n    void LateUpdate()\n    {\n        transform.position = target.position + new Vector3(0f, 5f, -8f);\n    }\n}\n```"
            ]
        },
        en: {
            title: "Unity: Update, FixedUpdate and LateUpdate, when to use each one",
            excerpt: "Each method runs at a different point in Unity's loop. Choosing well avoids jerky movement, unstable physics and shaky cameras.",
            body: [
                "A very common mistake when starting with Unity is putting all the code in `Update`. Unity runs different methods at different points in each cycle, and choosing the right one avoids jerky movement, unstable physics and shaky cameras.",
                "## Update: once per frame",
                "It's called once per frame, so its frequency depends on FPS. It's the place to read input and move objects that don't use physics. Always multiply movement by `Time.deltaTime` (the seconds the last frame took) so speed is the same at 30 or 144 FPS.",
                "## FixedUpdate: fixed physics step",
                "It runs at fixed intervals: **0.02 seconds by default, that is 50 times per second**, in sync with the physics engine. Forces and changes to a `Rigidbody` go here. Inside `FixedUpdate`, `Time.deltaTime` returns the fixed step, so the calculation doesn't change.",
                "If a frame takes too long, `FixedUpdate` can run several times in a row to catch up, up to the **Maximum Allowed Timestep** limit (0.333 seconds by default). Both values are set in *Project Settings > Time*.",
                "## LateUpdate: after every Update",
                "It's called once per frame, after all `Update` methods have finished. It's the ideal place for a camera that follows an object: the target has already moved, so the camera doesn't lag a frame behind.",
                "## A practical rule",
                "- Read input in `Update` and store it in a variable. If you read it in `FixedUpdate` you can miss key presses, because it doesn't run on every frame.",
                "- Use the stored value in `FixedUpdate` to move the `Rigidbody`.",
                "- If an object with a `Rigidbody` looks jerky, try enabling **Interpolate** on the component.",
                "```csharp\npublic class PlayerMotor : MonoBehaviour\n{\n    [SerializeField] float speed = 5f;\n    [SerializeField] Rigidbody rb;\n    Vector3 input;\n\n    void Update()\n    {\n        // Input: once per frame\n        input = new Vector3(Input.GetAxis(\"Horizontal\"), 0f, Input.GetAxis(\"Vertical\"));\n    }\n\n    void FixedUpdate()\n    {\n        // Physics: fixed step\n        rb.MovePosition(rb.position + input * speed * Time.fixedDeltaTime);\n    }\n}\n\npublic class CameraFollow : MonoBehaviour\n{\n    [SerializeField] Transform target;\n\n    void LateUpdate()\n    {\n        transform.position = target.position + new Vector3(0f, 5f, -8f);\n    }\n}\n```"
            ]
        }
    },
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
