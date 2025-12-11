/* =============================================================
   DROPDOWN LOGIC + FULL DATA FOR SECTIONS 1, 2, 3
   ============================================================= */

const DATA = {
  /* =============================================================
       SECTION 1 — INTRODUCTION TO NODE.JS
       ============================================================= */

  1: {
    "what-is-node": {
      title: "What is Node.js?",
      english: `
Node.js is a JavaScript runtime built on the ultra-fast Google V8 engine. 
It allows JavaScript to run OUTSIDE the browser — on servers, operating systems, terminals, etc.

Node is **event-driven**, **non-blocking**, and super-efficient for I/O heavy tasks.

🔥 MAIN POINTS
1) Not a language — Node just runs JS.
2) Non-blocking I/O — does NOT wait for slow tasks.
3) Event-driven — everything works through events + callbacks.
4) Uses V8 engine — JavaScript → Machine code, extremely fast.
5) Perfect for APIs, real-time apps, microservices, streaming.

💥 Example:
console.log("Node running JS outside browser!");
            `,
      malayalam: `
Node.js ഒരു JavaScript runtime ആണ് — അഥവാ JavaScript ബ്രൗസറിന് പുറത്തു run ചെയ്യാനുള്ള ഒരു platform.

Chrome-ന്റെ V8 engine ഉപയോഗിക്കുന്നതിനാൽ Node വളരെ വേഗത്തിലാണ് പ്രവർത്തിക്കുന്നത്.

🔥 പ്രധാന കാര്യങ്ങൾ:
1) Node ഒരു ഭാഷ അല്ല → JavaScript run ചെയ്യാനുള്ള engine മാത്രമാണ്.
2) Non-blocking I/O → slow tasks ഒന്നും block cheyyilla.
3) Event-driven architecture → events & callbacks പാടിയാണ് execution.
4) V8 engine → JS machine code ആക്കി മാറ്റും → വേഗം അത്യധികം.
5) APIs, Live chats, Real-time apps, Streaming apps എല്ലാം build ചെയ്യാൻ perfect.

💥 ഉദാഹരണം:
console.log("ബ്രൗസറിന് പുറത്തും JS ഓടുന്നു!");
            `,
    },

    "runtime-environment": {
      title: "Runtime environment",
      english: `
Node.js provides the environment needed to run JavaScript outside the browser.

It includes:
1) V8 Engine → JS to machine code
2) Event Loop → handles async tasks
3) Libuv → thread pool & async operations
4) Node APIs → fs, http, crypto, events, stream
5) C++ bindings → internal communication with OS

🔥 In short: Node = JS + V8 + Event Loop + Libuv + Core APIs
            `,
      malayalam: `
Node.js JavaScript run ചെയ്യാൻ വേണ്ട മുഴുവൻ സംവിധാനങ്ങളും (runtime environment) നൽകുന്നു.

ഇതിൽ ഉൾപ്പെടുന്നവ:
1) V8 Engine → JS machine code ആക്കുന്നു
2) Event Loop → async tasks കൈകാര്യം ചെയ്യുന്നു
3) Libuv → thread pool + async I/O
4) Node APIs → fs, http, crypto, stream etc.
5) C++ bindings → OS-ലോട് direct കണക്ഷൻ

🔥 സിമ്പിളായി പറഞ്ഞാൽ:
Node = JS + V8 + Event Loop + Libuv + APIs
            `,
    },

    advantages: {
      title: "Advantages of Node.js",
      english: `
🔥 KEY BENEFITS:
1) Extremely fast — V8 engine
2) Non-blocking I/O — handles 1000s requests
3) Single language for frontend + backend
4) Huge ecosystem → millions of npm packages
5) Ideal for APIs, microservices, real-time apps

Example uses:
✔ Chat apps
✔ Streaming apps
✔ API servers
✔ Data handling services
            `,
      malayalam: `
🔥 Node.js ന്റെ പ്രധാന ഗുണങ്ങൾ:
1) വളരെ വേഗം → V8 engine
2) Non-blocking I/O → ഒരുമിച്ച് ആയിരങ്ങൾ request കൈകാര്യം ചെയ്യാം
3) Frontend + Backend → ഒരേ ഭാഷ (JavaScript)
4) വലിയ ecosystem → npm packages
5) Real-time apps, APIs, microservices എല്ലാം easy ആയി build ചെയ്യാം

ഉപയോഗങ്ങൾ:
✔ Chat apps  
✔ Streaming apps  
✔ REST APIs  
✔ Data servers  
            `,
    },

    features: {
      title: "Features of Node.js",
      english: `
Node.js comes with powerful features:

1) Asynchronous — tasks run without waiting
2) Event-driven architecture
3) Single-threaded but highly scalable
4) Built-in modules (fs, http, crypto…)
5) Fast execution using V8

Example:
setTimeout(() => console.log("Async!"), 1000);
            `,
      malayalam: `
Node.js ന്റെ പ്രധാന പ്രത്യേകതകൾ:

1) Asynchronous → wait ചെയ്യാതെ tasksrun ചെയ്യും  
2) Event-driven → എല്ലാ പ്രവർത്തനങ്ങളും events/handlers  
3) Single-threaded ആയിട്ടും scalable  
4) Built-in modules — fs, http, crypto  
5) V8 engine → fast execution  

ഉദാഹരണം:
setTimeout(() => console.log("Async!"), 1000);
            `,
    },
  },

  /* =============================================================
       SECTION 2 — NODE.JS ARCHITECTURE
       ============================================================= */

  2: {
    "core-modules": {
      title: "Core modules in Node.js",
      english: `
Node includes built-in modules that DO NOT require installation:

✔ fs → file system  
✔ http / https → web servers  
✔ path → file paths  
✔ events → event emitter  
✔ stream → streaming data  
✔ os → system info  
✔ crypto → hashing/encryption  

They are compiled into Node itself → fastest, optimized modules.
            `,
      malayalam: `
Node.js ൽ installation ആവശ്യമില്ലാത്ത built-in modules:

✔ fs → file system  
✔ http / https → web servers  
✔ path → ഫയൽ പാത്തുകൾ  
✔ events → event handling  
✔ stream → streaming data  
✔ os → operating system info  
✔ crypto → hashing/encryption  

ഇവ Node-ലേയ്ക്ക് നേരിട്ട് build ചെയ്തവയാണ് → വളരെയധികം fast & optimized.
            `,
    },

    "buffer-class": {
      title: "Buffer class",
      english: `
Buffer allows Node.js to handle **binary data**.

Used in:
✔ file operations  
✔ network operations  
✔ streaming  
✔ working with bytes  

Example:
const buf = Buffer.from("Hello");
console.log(buf); // <Buffer 48 65 6c 6c 6f>
            `,
      malayalam: `
Buffer Node.js-ൽ **binary data** കൈകാര്യം ചെയ്യാൻ ഉപയോഗിക്കുന്നു.

ഉപയോഗങ്ങൾ:
✔ ഫയൽ reading  
✔ നെറ്റ്‌വർക്ക് data  
✔ streams  
✔ byte-level operations  

ഉദാഹരണം:
const buf = Buffer.from("Hello");
console.log(buf);
            `,
    },

    "event-driven": {
      title: "Event-driven programming",
      english: `
Node uses an **event-driven model**.

Everything works through events:
✔ request comes → event  
✔ file read finished → event  
✔ timer completed → event  

Example:
emitter.on("start", () => console.log("Started!"));
            `,
      malayalam: `
Node ഒരു event-driven model ആണ് ഉപയോഗിക്കുന്നത്.

എല്ലാ പ്രവർത്തനങ്ങളും event ആണെന്ന് കാണാം:
✔ request → event  
✔ file read → event  
✔ timer → event  

ഉദാഹരണം:
emitter.on("start", () => console.log("Started!"));
            `,
    },

    concurrency: {
      title: "Node concurrency",
      english: `
Node is single-threaded but concurrency is achieved by:

1) Event loop → handles async I/O  
2) Libuv thread pool → file, DNS, compression  
3) Non-blocking callbacks → execution never stops  

This is why Node handles thousands of requests.
            `,
      malayalam: `
Node ഒരു single-threaded engine ആണെങ്കിലും concurrency ഉണ്ടാക്കുന്നത്:

1) Event loop → async tasks  
2) Libuv thread pool → file I/O, DNS, zip  
3) Non-blocking callbacks → execution block ആവില്ല  

അതിനാൽ Node ഒരുമിച്ച് ആയിരക്കണക്കിന് request കൈകാര്യം ചെയ്യുന്നു.
            `,
    },

    "event-loop": {
      title: "Understanding the event loop",
      english: `
Event loop runs in phases:

1) Timers  
2) Pending callbacks  
3) Idle/prepare  
4) Poll phase  
5) Check  
6) Close callbacks  

Promises → microtasks → run immediately after current operation.  
process.nextTick → runs BEFORE microtasks.
            `,
      malayalam: `
Event loop പ്രവർത്തിക്കുന്നത് താഴെപ്പറയുന്ന ഘട്ടങ്ങളിൽ:

1) Timers  
2) Pending callbacks  
3) Idle/prepare  
4) Poll  
5) Check  
6) Close callbacks  

Promises → microtasks → current task കഴിഞ്ഞതോടെ run ചെയ്യും  
process.nextTick → microtasks-നു മുമ്പോട്ട് run ചെയ്യും.
            `,
    },

    libuv: {
      title: "Libuv and thread pool",
      english: `
Libuv is the library behind Node.js that gives:

✔ Thread pool  
✔ Async file operations  
✔ DNS  
✔ Timers  
✔ OS-level operations  

Default thread pool size = 4 threads.
            `,
      malayalam: `
libuv Node.js-ന്റെ അടിസ്ഥാനം ആയ async library ആണ്.

ഇത് നൽകുന്നത്:
✔ Thread pool  
✔ File I/O async  
✔ DNS  
✔ Timers  
✔ OS പ്രവർത്തനങ്ങൾ  

Default thread pool size = 4 threads.
            `,
    },

    "single-threaded": {
      title: "Single-threaded nature of Node.js",
      english: `
Node's JavaScript runtime is single-threaded.

BUT:
✔ libuv thread pool  
✔ OS async APIs  
still work in background.

Heavy CPU tasks → block event loop → use worker threads instead.
            `,
      malayalam: `
Node ഒരു single-threaded runtime ആണ്.

പക്ഷേ:
✔ libuv thread pool  
✔ OS async APIs  

background-ൽ പ്രവർത്തിക്കും.

CPU-heavy tasks → event loop block ചെയ്യും → worker threads ഉപയോഗിക്കുക.
            `,
    },

    "garbage-collection": {
      title: "Garbage collection",
      english: `
GC is handled by V8 (mark & sweep algorithm).

Issues:
✔ memory leaks  
✔ long-lived objects  
✔ huge arrays/buffers  

Use:
console.log(process.memoryUsage());
for debugging.
            `,
      malayalam: `
V8 engine ആണ് garbage collection നടത്തുന്നത് (mark & sweep).

ശ്രദ്ധിക്കേണ്ട കാര്യങ്ങൾ:
✔ memory leaks  
✔ അധികകാലം ജീവിക്കുന്ന objects  
✔ വലിയ arrays/buffers  

Debug ചെയ്യാൻ:
console.log(process.memoryUsage());
            `,
    },
  },

  /* =============================================================
       SECTION 3 — NPM
       ============================================================= */

  3: {
    "npm-init": {
      title: "npm init",
      english: `
npm init creates package.json.

package.json stores:
✔ project details  
✔ dependencies  
✔ scripts  
✔ version  

npm init -y → create auto default file.
            `,
      malayalam: `
npm init package.json ഫയൽ ഉണ്ടാക്കുന്നു.

ഇതിൽ store ചിയുന്നത്:
✔ project details  
✔ dependencies  
✔ scripts  
✔ version  

npm init -y → default values ഉപയോഗിച്ച് package.json ഉണ്ടാക്കും.
            `,
    },

    "npm-vs-npx": {
      title: "npm vs npx",
      english: `
npm → installs packages  
npx → runs package commands WITHOUT installing globally

Example:
npx create-react-app myapp
            `,
      malayalam: `
npm → packages install ചെയ്യുന്നു  
npx → global install ചെയ്യാതെ command run ചെയ്യുന്നു

ഉദാഹരണം:
npx create-react-app myapp
            `,
    },

    "package-json": {
      title: "package.json & package-lock.json",
      english: `
package.json → project info + dependency versions  
package-lock.json → exact versions + dependency tree

ALWAYS commit package-lock.json
            `,
      malayalam: `
package.json → project info + dependency version ranges  
package-lock.json → ഓരോ dependency യുടെയും exact version

package-lock.json commit ചെയ്യുന്നത് നിർബന്ധം.
            `,
    },

    "dev-vs-deps": {
      title: "Dev dependencies vs dependencies",
      english: `
dependencies → production use  
devDependencies → only for development

Example devDependencies:
✔ nodemon  
✔ eslint  
✔ jest  
            `,
      malayalam: `
dependencies → production-ൽ ആവശ്യമാണ്  
devDependencies → development-ൽ മാത്രം

ഉദാഹരണം:
✔ nodemon  
✔ eslint  
✔ jest  
            `,
    },

    "npm-start": {
      title: "npm start",
      english: `
Defined in package.json scripts:

"start": "node index.js"

Run:
npm start
            `,
      malayalam: `
package.json scripts-ൽ define ചെയ്യണം:

"start": "node index.js"

Run ചെയ്യാൻ:
npm start
            `,
    },

    "npm-publish": {
      title: "npm publish",
      english: `
Publishes your package to npm registry.

Before publish:
✔ update version  
✔ remove private data  
✔ check .npmignore  
            `,
      malayalam: `
npm registry ലേക്ക് package upload ചെയ്യുന്നു.

publish ചെയ്യുന്നതിന് മുൻപ്:
✔ version update  
✔ private data നീക്കം ചെയ്യുക  
✔ .npmignore check ചെയ്യുക  
            `,
    },

    npmrc: {
      title: ".npmrc file",
      english: `
.npmrc stores npm configuration:

✔ registry  
✔ auth token  
✔ proxy settings  
✔ default behaviors  
            `,
      malayalam: `
.npmrc ൽ npm configuration settings store ചെയ്യും:

✔ registry  
✔ auth token  
✔ proxy  
✔ default settings  
            `,
    },

    scaffolding: {
      title: "Scaffolding (express-generator)",
      english: `
express-generator creates folder structure:

/routes  
/views  
/public  
app.js  

Run:
npx express-generator myapp
            `,
      malayalam: `
express-generator folder structure create ചെയ്യും:

/routes  
/views  
/public  
app.js  

Run ചെയ്യാൻ:
npx express-generator myapp
            `,
    },
  },
};

/* =============================================================
   SECTION 4 — EXPRESS.JS AND ALTERNATIVES
   ============================================================= */

DATA["4"] = {
  /* -----------------------------
       4.1 — What is Express.js?
       ----------------------------- */
  "what-is-express": {
    title: "What is Express.js?",
    english: `
Express.js is a minimal, fast and flexible backend framework for Node.js.

🔥 Why Express?
1) Lightweight — only core essentials
2) Middleware-based — flexible request handling
3) Easy routing — route handlers for each URL
4) Supports templates (EJS, Pug)
5) Perfect for REST APIs and MVC

Example:
const express = require("express");
const app = express();
app.get("/", (req,res)=>res.send("Hello"));
app.listen(3000);
        `,
    malayalam: `
Express.js Node.js-ന് വേണ്ടി ഉള്ള ഒരു ലളിതവും ശക്തവുമായ backend framework ആണു.

🔥 Express ഉപയോഗിക്കുന്നതിന് കാരണം:
1) വളരെ lightweight  
2) Middleware architecture — requests‌ നെ നിയന്ത്രിക്കാൻ easy  
3) Routing വളരെ simple  
4) Templating engines പിന്തുണയുണ്ട്  
5) REST APIs നിർമ്മിക്കാനായി ഏറ്റവും ഉപയോഗിക്കുന്നത് Express ആണ്  

ഉദാഹരണം:
const express = require("express");
const app = express();
app.get("/", (req,res)=>res.send("Hello"));
app.listen(3000);
        `,
  },

  /* -----------------------------
       Purpose & Use cases
       ----------------------------- */
  "purpose-usecases": {
    title: "Purpose and Use Cases of Express.js",
    english: `
Express simplifies server-side JavaScript development.

Common use cases:
1) REST API development  
2) Real-time apps (combined with Socket.io)
3) MVC applications  
4) Middleware-based apps  
5) Authentication, JWT, cookies  

Example:
app.post("/login", (req,res)=> {...});
        `,
    malayalam: `
Express backend development നെ വളരെ എളുപ്പമാക്കുന്നു.

ഉപയോഗങ്ങൾ:
1) REST API development  
2) Real-time apps (Socket.io ഉപയോഗിച്ച്)  
3) MVC based applications  
4) Middleware-heavy apps  
5) Authentication, JWT login systems  

ഉദാഹരണം:
app.post("/login", (req,res)=> {...});
        `,
  },

  /* -----------------------------
       Features of Express.js
       ----------------------------- */
  middleware: {
    title: "Middleware in Express.js",
    english: `
Middleware are functions that run between request and response.

Types:
1) Application-level  
2) Router-level  
3) Error-handling  
4) Built-in middleware (express.json etc.)

Example:
app.use((req,res,next)=>{
    console.log("Time:", Date.now());
    next();
});
        `,
    malayalam: `
Middleware എന്നത് request → response ഇടയിൽ run ചെയ്യുന്ന function ആണ്.

Types:
1) Application-level  
2) Router-level  
3) Error-handling  
4) Built-in middleware  

ഉദാഹരണം:
app.use((req,res,next)=>{
    console.log("Time:", Date.now());
    next();
});
        `,
  },

  routing: {
    title: "Routing in Express.js",
    english: `
Routing means mapping URL → handler.

Example:
app.get("/about", (req,res)=> res.send("About"));

Types:
✔ Basic routing  
✔ Dynamic routing  
✔ Router instance (express.Router)  
✔ Advanced chaining  
        `,
    malayalam: `
Routing എന്നത് URL നെ ഒരു function-ലേക്ക് connect ചെയ്യുന്നതാണ്.

ഉദാഹരണം:
app.get("/about", (req,res)=> res.send("About"));

Types:
✔ Basic routing  
✔ Dynamic routing  
✔ express.Router ഉപയോഗിക്കുന്നത്  
✔ chaining  
        `,
  },

  "template-engines": {
    title: "Template Engines",
    english: `
Express supports many template engines:

✔ EJS  
✔ Handlebars  
✔ Pug  

Example (EJS):
app.set("view engine", "ejs");
        `,
    malayalam: `
Express ൽ template engines ഉപയോഗിക്കാം:

✔ EJS  
✔ Handlebars  
✔ Pug  

Example (EJS):
app.set("view engine", "ejs");
        `,
  },

  extensibility: {
    title: "Extensibility",
    english: `
Express is highly extensible.

Reason:
✔ middleware pattern  
✔ 3rd party modules  
✔ modular routing  
✔ template engines  

You can build any backend architecture with Express.
        `,
    malayalam: `
Express വളരെ extensible ആണ്.

കാരണം:
✔ middleware pattern  
✔ 3rd-party modules  
✔ router splitting  
✔ template engine support  

ഏതുതരം backend architecture-യും Express ഉപയോഗിച്ച് ഉണ്ടാക്കാം.
        `,
  },

  performance: {
    title: "Performance in Express",
    english: `
Express is very fast because:

✔ minimal overhead  
✔ async I/O  
✔ lightweight core  

Suitable for:
✔ REST APIs  
✔ high-load servers  
✔ microservices  
        `,
    malayalam: `
Express വളരെ performance-friendly ആണ്.

കാരണം:
✔ കുറഞ്ഞ overhead  
✔ async I/O  
✔ lightweight

ഈിടങ്ങളിൽ perfect:
✔ REST APIs  
✔ high-load apps  
✔ microservices  
        `,
  },

  /* -----------------------------
       Routing Advanced
       ----------------------------- */

  "basic-routing": {
    title: "Basic Routing",
    english: `
Basic routing = match URL + HTTP method.

Example:
app.get("/", (req,res)=> res.send("Home"));
        `,
    malayalam: `
Basic routing = URL + HTTP method match ചെയ്യുക.

ഉദാഹരണം:
app.get("/", (req,res)=> res.send("Home"));
        `,
  },

  router: {
    title: "express.Router()",
    english: `
Router helps to split routes into separate files.

Example:
const router = express.Router();
router.get("/users", ...);
app.use("/api", router);
        `,
    malayalam: `
Router routes separate files-ലേക്ക് split ചെയ്യാൻ ഉപയോഗിക്കുന്നു.

Example:
const router = express.Router();
router.get("/users", ...);
app.use("/api", router);
        `,
  },

  "router-all": {
    title: "Router.all",
    english: `
Handles ALL HTTP methods.

Example:
router.all("/test", (req,res)=>{...});
        `,
    malayalam: `
എല്ലാ HTTP methods-നും handle ചെയ്യാൻ router.all ഉപയോഗിക്കുന്നു.

ഉദാഹരണം:
router.all("/test", (req,res)=>{...});
        `,
  },

  "advanced-routing": {
    title: "Advanced Routing",
    english: `
Advanced routing includes:

✔ regex routes  
✔ multiple handlers  
✔ route grouping  
✔ chaining  

Example:
app.route("/book")
   .get(...)
   .post(...);
        `,
    malayalam: `
Advanced routing ൽ:

✔ regex routes  
✔ multiple handlers  
✔ grouped routes  
✔ chaining  

ഉദാഹരണം:
app.route("/book")
   .get(...)
   .post(...);
        `,
  },

  "dynamic-routing": {
    title: "Dynamic Routing",
    english: `
Dynamic routes contain parameters:

Example:
app.get("/user/:id", (req,res)=> {
    res.send(req.params.id);
});
        `,
    malayalam: `
Dynamic routesൽ :id പോലുള്ള parameters ഉണ്ടാകും.

ഉദാഹരണം:
app.get("/user/:id", (req,res)=>{
    res.send(req.params.id);
});
        `,
  },

  "router-chaining": {
    title: "Router Chaining",
    english: `
Same URL → multiple actions

router.route("/product")
 .get(...)
 .put(...)
 .delete(...);
        `,
    malayalam: `
ഒരേ URL → വ്യത്യസ്ത actions

router.route("/product")
 .get(...)
 .put(...)
 .delete(...);
        `,
  },

  "query-vs-url": {
    title: "Query vs URL Params",
    english: `
Query params → ?name=busthu  
URL params → /user/10  

req.query → { name:"busthu" }  
req.params → { id:"10" }
        `,
    malayalam: `
Query params → ?name=busthu  
URL params → /user/10  

req.query → { name:"busthu" }  
req.params → { id:"10" }
        `,
  },

  "static-files": {
    title: "Static Files",
    english: `
Serve static files:

app.use(express.static("public"));
        `,
    malayalam: `
Static files serve ചെയ്യാൻ:

app.use(express.static("public"));
        `,
  },

  /* -----------------------------
       Middleware Types
       ----------------------------- */

  "app-level-mw": {
    title: "Application-Level Middleware",
    english: `
Runs for EVERY request.

Example:
app.use((req,res,next)=>{ console.log("Hit"); next(); });
        `,
    malayalam: `
എല്ലാ requests-നും run ചെയ്യുന്ന middleware.

ഉദാഹരണം:
app.use((req,res,next)=>{ console.log("Hit"); next(); });
        `,
  },

  "router-level-mw": {
    title: "Router Level Middleware",
    english: `
Example:
router.use((req,res,next)=>{ ... });
        `,
    malayalam: `
Router-ൽ മാത്രം ഉപയോഗിക്കുന്ന middleware.

Example:
router.use((req,res,next)=>{ ... });
        `,
  },

  "common-mw": {
    title: "Common Middlewares",
    english: `
✔ express.json()  
✔ express.urlencoded()  
✔ express.static()  
        `,
    malayalam: `
✔ express.json()  
✔ express.urlencoded()  
✔ express.static()  
        `,
  },

  "error-mw": {
    title: "Error Handling Middleware",
    english: `
Error middleware must have 4 params:

(err, req, res, next)

app.use((err,req,res,next)=>{ ... });
        `,
    malayalam: `
Error middleware 4 parameters വേണം:

(err, req, res, next)

app.use((err,req,res,next)=>{ ... });
        `,
  },

  /* -----------------------------
       MVC
       ----------------------------- */

  "understand-mvc": {
    title: "Understanding MVC",
    english: `
MVC = Model, View, Controller

Model → data  
View → UI  
Controller → logic  
        `,
    malayalam: `
MVC = Model, View, Controller

Model → data  
View → UI  
Controller → logic  
        `,
  },

  "impl-mvc": {
    title: "Implementing MVC in Express",
    english: `
Structure:
controllers/
models/
routes/
views/

Each controller handles one business logic.
        `,
    malayalam: `
Folder structure:

controllers/  
models/  
routes/  
views/

Controller → ഒരു logic കൈകാര്യം ചെയ്യുന്നു.
        `,
  },

  /* -----------------------------
       View Engines
       ----------------------------- */

  ejs: {
    title: "EJS",
    english: `EJS = Embedded JavaScript Templates.`,
    malayalam: `EJS = Embedded JavaScript Templates.`,
  },

  handlebars: {
    title: "Handlebars",
    english: `Popular templating engine for Express.`,
    malayalam: `Express-ൽ ഉപയോഗിക്കുന്ന template engine.`,
  },

  pug: {
    title: "Pug",
    english: `Template engine with indentation syntax.`,
    malayalam: `Indentation base ചെയ്‌ത് പ്രവർത്തിക്കുന്ന template engine.`,
  },

  /* -----------------------------
       Sessions & Cookies
       ----------------------------- */
  "session-management": {
    title: "Session Management",
    english: `
Sessions store login state.

Example:
express-session package.
        `,
    malayalam: `
Login സ്ഥിതി സൂക്ഷിക്കാൻ session ഉപയോഗിക്കുന്നു.

Example:
express-session.
        `,
  },

  cookies: {
    title: "Cookies",
    english: `
Cookies store small data in browser.
        `,
    malayalam: `
Cookies browser-ൽ ചെറിയ data സൂക്ഷിക്കുന്നു.
        `,
  },

  /* -----------------------------
       Alternatives to Express
       ----------------------------- */

  koa: {
    title: "Koa",
    english: `A minimal next-generation framework.`,
    malayalam: `Express-ന്റെ next generation version പോലെ.`,
  },

  hapi: {
    title: "Hapi",
    english: `Used for enterprise apps.`,
    malayalam: `വലിയ enterprise apps-ൽ ഉപയോഗിക്കുന്നു.`,
  },

  fastify: {
    title: "Fastify",
    english: `Extremely fast Node.js framework.`,
    malayalam: `വളരെ വേഗമുള്ള Node.js framework.`,
  },

  /* -----------------------------
       Additional Topics
       ----------------------------- */

  security: {
    title: "Security Best Practices",
    english: `
✔ Helmet  
✔ Rate limiting  
✔ Input validation  
✔ CORS control  
        `,
    malayalam: `
✔ Helmet  
✔ Rate limiting  
✔ Input validation  
✔ CORS control  
        `,
  },

  testing: {
    title: "Testing in Express",
    english: `
Tools:
✔ Jest  
✔ Supertest  
        `,
    malayalam: `
Testing tools:
✔ Jest  
✔ Supertest  
        `,
  },

  "perf-opt": {
    title: "Performance Optimization",
    english: `
✔ Clustering  
✔ Compression  
✔ Caching  
✔ Streams  
        `,
    malayalam: `
✔ Clustering  
✔ Compression  
✔ Caching  
✔ Streams  
        `,
  },

  logging: {
    title: "Logging",
    english: `Use Morgan or Winston.`,
    malayalam: `Morgan അല്ലെങ്കിൽ Winston ഉപയോഗിക്കാം.`,
  },

  i18n: {
    title: "Internationalization",
    english: `i18n → multi-language apps.`,
    malayalam: `i18n → പല ഭാഷകളും support ചെയ്യുന്ന apps.`,
  },

  websockets: {
    title: "WebSockets",
    english: `Real-time communication.`,
    malayalam: `Real-time communication.`,
  },

  graphql: {
    title: "GraphQL",
    english: `Query language for APIs.`,
    malayalam: `APIs-നു വേണ്ടി ഉള്ള query language.`,
  },

  deployment: {
    title: "Deployment",
    english: `Deploy on: Heroku, Render, Vercel, AWS.`,
    malayalam: `Deploy ചെയ്യാൻ: Heroku, Render, Vercel, AWS.`,
  },
};

/* =============================================================
   SECTION 5 — HTTP & MIDDLEWARE
   ============================================================= */

DATA["5"] = {
  "http-vs-https": {
    title: "HTTP vs HTTPS",
    english: `
HTTP → Not encrypted  
HTTPS → Encrypted using SSL/TLS  

HTTPS is required for:
✔ login  
✔ payments  
✔ sensitive data  
        `,
    malayalam: `
HTTP → എൻക്രിപ്ഷൻ ഇല്ല  
HTTPS → SSL/TLS ഉപയോഗിച്ച് എൻക്രിപ്റ്റ് ചെയ്ത data  

HTTPS ആവശ്യം:
✔ login  
✔ payment  
✔ private data  
        `,
  },

  "http-methods": {
    title: "HTTP Methods",
    english: `
GET → fetch  
POST → create  
PUT → full update  
PATCH → partial update  
DELETE → remove  
OPTIONS → preflight  
HEAD → header only  
        `,
    malayalam: `
GET → data വായിക്കുക  
POST → create ചെയ്യുക  
PUT → full update  
PATCH → ഭാഗിക update  
DELETE → remove  
OPTIONS → preflight  
HEAD → header മാത്രം ലഭിക്കും  
        `,
  },

  headers: {
    title: "Headers",
    english: `
Headers carry metadata:

✔ Content-Type  
✔ Authorization  
✔ Cookie  
✔ User-Agent  
✔ Accept  
        `,
    malayalam: `
Headers metadataയാണ്:

✔ Content-Type  
✔ Authorization  
✔ Cookie  
✔ User-Agent  
✔ Accept  
        `,
  },

  "status-codes": {
    title: "Status Codes",
    english: `
2xx → success  
3xx → redirection  
4xx → client error  
5xx → server error  

Example:
400 → Bad Request  
401 → Unauthorized  
404 → Not Found  
        `,
    malayalam: `
2xx → success  
3xx → redirect  
4xx → client error  
5xx → server error  

Examples:
400 → Bad Request  
401 → Unauthorized  
404 → Not Found  
        `,
  },

  cors: {
    title: "CORS",
    english: `
Browser security feature.

Controls:
✔ which origins allowed  
✔ methods  
✔ headers  

Example:
app.use(cors());
        `,
    malayalam: `
Browser security system ആണ്.

Control ചെയ്യുന്നത്:
✔ ഏത് domain allowed  
✔ methods  
✔ headers  

Example:
app.use(cors());
        `,
  },

  "res-variants": {
    title: "res.send vs res.write vs res.end",
    english: `
res.send → auto sets headers + ends  
res.write → write chunk (stream)  
res.end → end response  

Example:
res.write("Hello");
res.end();
        `,
    malayalam: `
res.send → headers setചെയ്ത് response അയക്കും  
res.write → streaming chunk അയക്കും  
res.end → response close ചെയ്യും  

ഉദാഹരണം:
res.write("Hello");
res.end();
        `,
  },

  "res-redirect": {
    title: "res.redirect",
    english: `
Redirect user to another page.

Example:
res.redirect("/login");
        `,
    malayalam: `
User നെ മറ്റൊരു page-ലേക്ക് redirect ചെയ്യും.

Example:
res.redirect("/login");
        `,
  },

  params: {
    title: "Query Params & Path Params",
    english: `
Query:
?name=busthu  

Path:
/user/10  

req.query → query params  
req.params → path params  
        `,
    malayalam: `
Query:
?name=busthu  

Path:
/user/10  

req.query → query params  
req.params → path params  
        `,
  },

  options: {
    title: "HTTP OPTIONS (Preflight)",
    english: `
OPTIONS request checks:

✔ allowed method?  
✔ allowed headers?  
✔ allowed origin?  

Used for CORS.
        `,
    malayalam: `
OPTIONS request പരിശോധിക്കുന്നത്:

✔ ഏത് method allowed  
✔ ഏത് headers allowed  
✔ ഏത് origin allowed  

ഇത് CORS preflight ന്റെ ഭാഗമാണ്.
        `,
  },

  "file-response": {
    title: "File Response & Download",
    english: `
Example:
res.download("file.txt");
res.sendFile(__dirname + "/a.pdf");
        `,
    malayalam: `
File download ചെയ്യാൻ:

res.download("file.txt");
res.sendFile(__dirname + "/a.pdf");
        `,
  },

  "middleware-types": {
    title: "Middleware Types",
    english: `
✔ Application-level  
✔ Router-level  
✔ Error-handling  
✔ 3rd party (morgan, cors)  
        `,
    malayalam: `
✔ Application-level  
✔ Router-level  
✔ Error-handling  
✔ 3rd party middleware  
        `,
  },
};
/* =============================================================
   SECTION 6 — STREAMS, EVENTS & ASYNCHRONOUS OPERATIONS
   ============================================================= */

DATA["6"] = {
  /* -----------------------------
       Streams
       ----------------------------- */
  streams: {
    title: "Streams",
    english: `
Streams allow data to be processed in **chunks** instead of loading all at once.

Types of streams:
1) Readable Stream → read data
2) Writable Stream → write data
3) Duplex Stream → read + write
4) Transform Stream → modify data (compression, encryption)

Example:
const fs = require("fs");
const stream = fs.createReadStream("file.txt");
stream.on("data", chunk => console.log(chunk.toString()));
        `,
    malayalam: `
Streams data chunk-കളായി process ചെയ്യാൻ സഹായിക്കുന്നു.
ഒറ്റയടിക്ക് മുഴുവൻ file load ചെയ്യാതെ memory save ചെയ്യാം.

Stream Types:
1) Readable → data വായിക്കാൻ  
2) Writable → data എഴുതാൻ  
3) Duplex → read + write  
4) Transform → data മാറ്റാൻ (compress, encrypt)

ഉദാഹരണം:
const fs = require("fs");
const stream = fs.createReadStream("file.txt");
stream.on("data", chunk => console.log(chunk.toString()));
        `,
  },

  /* -----------------------------
       Stream Piping
       ----------------------------- */
  piping: {
    title: "Stream Piping",
    english: `
Piping connects one stream to another.

Example:
readStream.pipe(writeStream);

Uses:
✔ copying files  
✔ streaming video/audio  
✔ compression pipelines  
        `,
    malayalam: `
Piping ഒരു stream-ന്റെ output മറ്റൊരു stream-ന്റെ input ആക്കുന്നു.

ഉദാഹരണം:
readStream.pipe(writeStream);

ഉപയോഗങ്ങൾ:
✔ files copy ചെയ്യാൻ  
✔ audio/video stream ചെയ്യാൻ  
✔ compression ചെയ്യാൻ  
        `,
  },

  /* -----------------------------
       Event-driven Architecture
       ----------------------------- */
  "event-driven-arch": {
    title: "Event-driven architecture",
    english: `
Node.js apps run based on events.

✔ request received → event  
✔ file read finished → event  
✔ timer completed → event  

EventEmitter class is used to create custom events.

Example:
const EventEmitter = require("events");
const emitter = new EventEmitter();

emitter.on("start", ()=> console.log("Started"));
emitter.emit("start");
        `,
    malayalam: `
Node.js event-based ആയ architecture ആണ്.

✔ request → event  
✔ file reading complete → event  
✔ timer end → event  

Custom events ഉണ്ടാക്കാൻ EventEmitter ഉപയോഗിക്കുന്നു.

ഉദാഹരണം:
const EventEmitter = require("events");
const emitter = new EventEmitter();

emitter.on("start", ()=> console.log("Started"));
emitter.emit("start");
        `,
  },

  /* -----------------------------
       Event Emitter
       ----------------------------- */
  "event-emitter": {
    title: "Event Emitter & Handlers",
    english: `
EventEmitter is the heart of event-driven architecture.

Methods:
✔ on() → listen  
✔ emit() → trigger event  
✔ once() → run only once  
✔ removeListener()  

Example:
emitter.on("hi", ()=> console.log("Hello"));
emitter.emit("hi");
        `,
    malayalam: `
EventEmitter ആണ് Node.js event-driven system-ന്റെ അടിസ്ഥാന ഘടകം.

Methods:
✔ on() → event listen ചെയ്യാൻ  
✔ emit() → event trigger ചെയ്യാൻ  
✔ once() → ഒരു പ്രാവശ്യം മാത്രം  
✔ removeListener() → listener നീക്കം ചെയ്യാൻ  

ഉദാഹരണം:
emitter.on("hi", ()=> console.log("Hello"));
emitter.emit("hi");
        `,
  },

  /* -----------------------------
       Async Operations
       ----------------------------- */
  "async-ops": {
    title: "Asynchronous Operations",
    english: `
Node handles async tasks using:

✔ callbacks  
✔ promises  
✔ async/await  
✔ event loop  
✔ thread pool  

Example:
setTimeout(()=> console.log("Async"), 1000);
        `,
    malayalam: `
Node.js async tasks handle ചെയ്യുന്നത്:

✔ callbacks  
✔ promises  
✔ async/await  
✔ event loop  
✔ libuv thread pool  

ഉദാഹരണം:
setTimeout(()=> console.log("Async"), 1000);
        `,
  },

  /* -----------------------------
       Promises
       ----------------------------- */
  promises: {
    title: "Promises",
    english: `
Promise represents an async value.

States:
✔ pending  
✔ fulfilled  
✔ rejected  

Example:
new Promise((resolve)=>{
  setTimeout(()=> resolve("Done"), 1000);
});
        `,
    malayalam: `
Promise ഒരു async value-നെ represent ചെയ്യുന്നു.

States:
✔ pending  
✔ fulfilled  
✔ rejected  

ഉദാഹരണം:
new Promise((resolve)=>{
  setTimeout(()=> resolve("Done"), 1000);
});
        `,
  },

  /* -----------------------------
       Promisify
       ----------------------------- */
  promisify: {
    title: "Promisify",
    english: `
Node callback APIs can be converted to Promises.

Example:
const util = require("util");
const readFile = util.promisify(fs.readFile);
        `,
    malayalam: `
Callback-based functions നെ Promise ആക്കാൻ promisify ഉപയോഗിക്കുന്നു.

Example:
const util = require("util");
const readFile = util.promisify(fs.readFile);
        `,
  },

  /* -----------------------------
       Callbacks
       ----------------------------- */
  callbacks: {
    title: "Callbacks",
    english: `
A callback is a function passed to another function.

Node-style callback format:
(err, result) => {}

Example:
fs.readFile("a.txt",(err,data)=>{});
        `,
    malayalam: `
Callback ഒരു function-നു argument ആയി മറ്റൊരു function നൽകുന്നതാണ്.

Node callback format:
(err, result) => {}

ഉദാഹരണം:
fs.readFile("a.txt",(err,data)=>{});
        `,
  },

  /* -----------------------------
       async/await
       ----------------------------- */
  "async-await": {
    title: "async/await",
    english: `
async/await makes async code look synchronous.

Example:
async function run(){
  let data = await readFile("a.txt");
}
        `,
    malayalam: `
async/await ഉപയോഗിച്ചാൽ async code synchronous പോലെ കാണപ്പെടും.

ഉദാഹരണം:
async function run(){
  let data = await readFile("a.txt");
}
        `,
  },
};

/* =============================================================
   SECTION 7 — ADVANCED EXPRESS.JS
   ============================================================= */

DATA["7"] = {
  /* -----------------------------
       PUT vs PATCH
       ----------------------------- */
  "put-vs-patch": {
    title: "PUT vs PATCH",
    english: `
PUT → replace entire resource  
PATCH → update only part  

✔ PATCH is preferred for updating specific fields  
✔ PUT is idempotent (same operation gives same result)
        `,
    malayalam: `
PUT → മുഴുവൻ data replace ചെയ്യും  
PATCH → ഭാഗികമായി update ചെയ്യും  

✔ ചെറിയ update-കൾക്ക് PATCH  
✔ PUT idempotent ആണ് (എത്രതവണ run ചെയ്താലും same result)
        `,
  },

  /* -----------------------------
       Scope chaining (var vs let)
       ----------------------------- */
  "scope-chaining": {
    title: "Handling Scope Chaining",
    english: `
var → function scoped  
let → block scoped  
const → block scoped (cannot reassign)

Always use let + const.

Example:
if(true){
  let x = 10;
}
        `,
    malayalam: `
var → function scope  
let → block scope  
const → block scope (reassign ചെയ്യാൻ പറ്റില്ല)

Best practice → let + const മാത്രം ഉപയോഗിക്കുക.
        `,
  },

  /* -----------------------------
       URL Encoding
       ----------------------------- */
  "url-encoding": {
    title: "URL Encoding",
    english: `
URL encoding converts unsafe characters:

space → %20  
@ → %40  

Use:
encodeURIComponent("hi busthu");
        `,
    malayalam: `
URL encoding unsafe characters encode ചെയ്യുന്നു:

space → %20  
@ → %40  

ഉപയോഗം:
encodeURIComponent("hi busthu");
        `,
  },

  /* -----------------------------
       body-parser vs express.json()
       ----------------------------- */
  "body-parser": {
    title: "Body Parser vs express.json",
    english: `
Old method:
const bodyParser = require("body-parser");

NOW:
express.json()  
express.urlencoded()

Example:
app.use(express.json());
        `,
    malayalam: `
മുന്പ്:
body-parser ഉപയോഗിച്ച് body parse ചെയ്തു.

ഇപ്പോൾ:
express.json()  
express.urlencoded()

Example:
app.use(express.json());
        `,
  },

  /* -----------------------------
       Cookies & Sessions
       ----------------------------- */
  "cookies-sessions": {
    title: "Handling Cookies & Sessions",
    english: `
Cookies → small data in browser  
Session → server-side login state  

Libraries:
✔ cookie-parser  
✔ express-session  
        `,
    malayalam: `
Cookies → browser-ൽ data  
Session → server-ൽ login state  

Libraries:
✔ cookie-parser  
✔ express-session  
        `,
  },

  /* -----------------------------
       File handling with fs
       ----------------------------- */
  "file-handling": {
    title: "File Handling using fs module",
    english: `
fs.readFile  
fs.writeFile  
fs.appendFile  
fs.unlink  

Example:
fs.readFile("a.txt","utf8",(err,data)=>{});
        `,
    malayalam: `
fs module ഉപയോഗിച്ച്:

fs.readFile  
fs.writeFile  
fs.appendFile  
fs.unlink  

ഉദാഹരണം:
fs.readFile("a.txt","utf8",(err,data)=>{});
        `,
  },

  /* -----------------------------
       Async file read/write
       ----------------------------- */
  "async-file": {
    title: "Reading & Writing Files Asynchronously",
    english: `
Async method:
fs.promises.readFile  
fs.promises.writeFile  

Example:
await fs.promises.writeFile("a.txt","hello");
        `,
    malayalam: `
Async file operations:

fs.promises.readFile  
fs.promises.writeFile  

Example:
await fs.promises.writeFile("a.txt","hello");
        `,
  },
};

/* =============================================================
   SECTION 8 — CONCURRENCY, MULTITHREADING & CHILD PROCESSES
   ============================================================= */

DATA["8"] = {
  /* -----------------------------
       Node Concurrency Model
       ----------------------------- */
  "node-concurrency": {
    title: "Node Concurrency Model",
    english: `
Node.js is single-threaded for JavaScript BUT highly concurrent due to:

1) Event Loop → handles async operations  
2) Libuv Thread Pool → file I/O, DNS, crypto  
3) Non-blocking calls → request does not wait  
4) OS async APIs → background operations  

This combination allows Node to handle **thousands of requests**.

Example:
fs.readFile("a.txt", ()=> console.log("done"));
        `,
    malayalam: `
Node.js single-threaded ആണ്, പക്ഷേ concurrency വളരെ ഉയർന്നതാണ് കാരണം:

1) Event Loop → async tasks കൈകാര്യം ചെയ്യുന്നു  
2) Libuv Thread Pool → file I/O, DNS, crypto  
3) Non-blocking I/O → request block ആവില്ല  
4) OS async APIs → background task handling  

ഈ സംവിധാനങ്ങൾ കാരണം Node ഒരുമിച്ച് ആയിരങ്ങളെ request കൈകാര്യം ചെയ്യുന്നു.

ഉദാഹരണം:
fs.readFile("a.txt", ()=> console.log("done"));
        `,
  },

  /* -----------------------------
       Fork, Spawn, Exec, ExecFile
       ----------------------------- */
  fork: {
    title: "Fork, Spawn, Exec, ExecFile",
    english: `
Node provides 4 methods to run child processes:

✔ spawn() → runs a command, streams output  
✔ exec() → runs command, returns full output buffer  
✔ execFile() → runs an executable directly  
✔ fork() → runs another Node.js script (IPC messaging enabled)

Example fork():
const { fork } = require("child_process");
const child = fork("child.js");
child.send("Start");
        `,
    malayalam: `
Node child processes run ചെയ്യാൻ 4 main methods ഉണ്ട്:

✔ spawn() → command run + streaming output  
✔ exec() → command run + full output buffer ആയി ലഭിക്കും  
✔ execFile() → ഒരു executable direct run ചെയ്യും  
✔ fork() → രണ്ടാം Node.js script run ചെയ്യാൻ (IPC messaging സഹിതം)

fork() ഉദാഹരണം:
const { fork } = require("child_process");
const child = fork("child.js");
child.send("Start");
        `,
  },

  /* -----------------------------
       Child Processes
       ----------------------------- */
  "child-process": {
    title: "Child Processes",
    english: `
Child processes allow Node to use multi-core CPUs.

Why needed?
✔ Node’s main thread should not handle heavy tasks  
✔ CPU-heavy tasks → hashing, compression, rendering  
✔ Each child runs separately → no event loop blocking  

Example:
const { exec } = require("child_process");
exec("ls", (err, out)=> console.log(out));
        `,
    malayalam: `
Child processes ഉപയോഗിക്കുന്നത് Node multi-core CPU ഉപയോഗിക്കാൻ സഹായിക്കുന്നു.

എന്തിന്?
✔ main thread block ആകരുത്  
✔ CPU-heavy tasks (hashing, compression) background-ൽ ചെയ്യണം  
✔ child process → completely separate execution  

ഉദാഹരണം:
const { exec } = require("child_process");
exec("ls", (err, out)=> console.log(out));
        `,
  },

  /* -----------------------------
       Clustering
       ----------------------------- */
  clustering: {
    title: "Clustering in Node.js",
    english: `
Clustering creates multiple Node.js processes (workers) sharing the same port.

Why cluster?
✔ utilize all CPU cores  
✔ improve performance  
✔ avoid event-loop blocking  

Example:
if(cluster.isMaster){ cluster.fork(); }
        `,
    malayalam: `
Clustering പല Node.js worker processes ഉണ്ടാക്കുന്നു — ഒരേ port share ചെയ്ത്.

കാരണം:
✔ CPU cores എല്ലാം use ചെയ്യാൻ  
✔ performance വർദ്ധിപ്പിക്കാൻ  
✔ event loop block ആവുന്നത് കുറക്കാൻ  

Example:
if(cluster.isMaster){ cluster.fork(); }
        `,
  },

  /* -----------------------------
       nextTick vs setImmediate
       ----------------------------- */
  "nexttick-vs-immediate": {
    title: "process.nextTick vs setImmediate",
    english: `
process.nextTick()  
→ runs BEFORE microtasks  
→ runs BEFORE event loop continues  
→ extremely high priority

setImmediate()  
→ runs at the CHECK phase  
→ runs after I/O events  

nextTick = highest priority callback
        `,
    malayalam: `
process.nextTick()  
→ microtask-നു മുൻപും event loop-നു മുൻപും run ചെയ്യും  
→ ഏറ്റവും ഉയർന്ന priority  

setImmediate()  
→ CHECK phase-ൽ run ചെയ്യും  
→ I/O operations കഴിഞ്ഞതിന് ശേഷം  

nextTick = ഏറ്റവും മുൻഗണനയുള്ള callback
        `,
  },

  /* -----------------------------
       PM2 Process Manager
       ----------------------------- */
  pm2: {
    title: "PM2 Process Manager",
    english: `
PM2 is a production process manager.

Features:
✔ clustering  
✔ auto restart  
✔ monitoring  
✔ logs  
✔ load balancing  

Start app:
pm2 start app.js
        `,
    malayalam: `
PM2 production-ൽ ഉപയോഗിക്കുന്ന process manager ആണ്.

Features:
✔ clustering  
✔ auto-restart  
✔ monitoring panel  
✔ logs  
✔ load balancing  

Start ചെയ്യാൻ:
pm2 start app.js
        `,
  },

  /* -----------------------------
       REPL
       ----------------------------- */
  repl: {
    title: "Node REPL",
    english: `
REPL = Read Eval Print Loop.

Use for:
✔ testing code  
✔ trying modules  
✔ experimenting  

Open REPL:
node
        `,
    malayalam: `
REPL = Read Eval Print Loop.

ഉപയോഗങ്ങൾ:
✔ ചെറിയ code പരിശോധിക്കുക  
✔ modules try ചെയ്യുക  
✔ learning  

Open REPL:
node
        `,
  },

  /* -----------------------------
       Events + Child Processes
       ----------------------------- */
  "events-childproc": {
    title: "Using Events with Child Processes",
    english: `
Child processes communicate via events.

child.on("message", ...)  
child.send("data")  

Used for:
✔ background workers  
✔ parallel jobs  
✔ CPU heavy tasks  
        `,
    malayalam: `
Child processes event വഴി communicate ചെയ്യും.

child.on("message", ...)  
child.send("data")  

ഉപയോഗങ്ങൾ:
✔ background workers  
✔ parallel tasks  
✔ CPU-heavy jobs  
        `,
  },
};

/* =============================================================
   SECTION 9 — SOCKETS & SECURITY
   ============================================================= */

DATA["9"] = {
  /* -----------------------------
       WebSocket Communication
       ----------------------------- */
  websocket: {
    title: "WebSocket Communication",
    english: `
WebSockets provide **full-duplex real-time communication**.

Unlike HTTP:
✔ no request/response cycle  
✔ stays open  
✔ bi-directional communication  

Used for:
✔ chat apps  
✔ live dashboards  
✔ multiplayer games  
        `,
    malayalam: `
WebSocket real-time full-duplex communication നൽകുന്നു.

HTTP-നു ഭിന്നം:
✔ request/response ആവശ്യമില്ല  
✔ connection open ആയി നിലനിൽക്കും  
✔ രണ്ട് ദിശയിലും data പോകും  

ഉപയോഗങ്ങൾ:
✔ chat apps  
✔ live data dashboards  
✔ multiplayer games  
        `,
  },

  /* -----------------------------
       Socket.io
       ----------------------------- */
  socketio: {
    title: "Socket.io",
    english: `
Socket.io = WebSocket + extra features:

✔ auto reconnection  
✔ fallbacks  
✔ rooms & namespaces  
✔ event-based communication  

Example:
io.on("connection", socket=>{
  socket.emit("welcome","Hi!");
});
        `,
    malayalam: `
Socket.io = WebSocket + അധിക features:

✔ auto-reconnect  
✔ fallback transport  
✔ rooms & namespaces  
✔ event-based messaging  

ഉദാഹരണം:
io.on("connection", socket=>{
  socket.emit("welcome","Hi!");
});
        `,
  },

  /* -----------------------------
       Security Best Practices
       ----------------------------- */
  "node-security": {
    title: "Security Best Practices",
    english: `
Security checklist:

✔ validate input  
✔ sanitize user data  
✔ use helmet  
✔ use rate limiter  
✔ enable CORS restrictions  
✔ hide x-powered-by  

Example:
app.use(helmet());
        `,
    malayalam: `
Security checklist:

✔ input validation  
✔ sanitize user data  
✔ helmet ഉപയോഗിക്കുക  
✔ rate limiter  
✔ CORS നിയന്ത്രണം  
✔ x-powered-by നീക്കം ചെയ്യുക  

Example:
app.use(helmet());
        `,
  },

  /* -----------------------------
       Authentication & Authorization
       ----------------------------- */
  auth: {
    title: "Authentication & Authorization",
    english: `
Authentication = verify user  
Authorization = check permissions  

Tools:
✔ Passport.js  
✔ JWT (jsonwebtoken)  
✔ OAuth  

Example:
passport.authenticate("local")
        `,
    malayalam: `
Authentication = user ശരിയാണോ എന്ന് പരിശോധിച്ചു  
Authorization = user-ന് എന്ത് access ഉണ്ട് എന്ന് പരിശോധിക്കുന്നു  

Tools:
✔ Passport.js  
✔ JWT  
✔ OAuth  

ഉദാഹരണം:
passport.authenticate("local")
        `,
  },

  /* -----------------------------
       CSRF
       ----------------------------- */
  csrf: {
    title: "CSRF Protection",
    english: `
CSRF = unauthorized actions triggered from another site.

Fix:
✔ CSRF tokens  
✔ SameSite cookies  
✔ double submit cookies  
        `,
    malayalam: `
CSRF = മറ്റൊരു website വഴി അനധികൃത action ചെയ്യുന്നത്.

പരിഹാരം:
✔ CSRF token  
✔ SameSite cookies  
✔ double submit cookies  
        `,
  },

  /* -----------------------------
       Encryption vs Hashing
       ----------------------------- */
  "encrypt-hash": {
    title: "Encryption vs Hashing",
    english: `
Hashing (bcrypt):
✔ one-way  
✔ cannot be reversed  
✔ used for passwords  

Encryption (AES):
✔ reversible  
✔ used for data storage  

Rule:
NEVER store plaintext passwords.
        `,
    malayalam: `
Hashing (bcrypt):
✔ one-way ആണ്  
✔ തിരിച്ചു original ആക്കാനാകില്ല  
✔ password-ുകൾക്ക് ഉപയോഗിക്കുന്നു  

Encryption (AES):
✔ reversible ആണ്  
✔ data store ചെയ്യാൻ ഉപയോഗിക്കുന്നു  

Rule:
Plaintext password ഒരിക്കലും save ചെയ്യരുത്.
        `,
  },

  /* -----------------------------
       CSP
       ----------------------------- */
  csp: {
    title: "Content Security Policy (CSP)",
    english: `
CSP prevents XSS attacks.

It controls:
✔ allowed scripts  
✔ allowed sources  
✔ inline script blocking  

Example:
Content-Security-Policy: default-src 'self'
        `,
    malayalam: `
CSP XSS ആക്രമണം തടയാൻ ഉപയോഗിക്കുന്നു.

ഇത് നിയന്ത്രിക്കുന്നത്:
✔ ഏത് scripts load ചെയാൻ പാടുള്ളു  
✔ allowed domains  
✔ inline scripts block ചെയ്യുന്നു  

Example:
Content-Security-Policy: default-src 'self'
        `,
  },
};

/* =============================================================
   SECTION 10 — CONFIGURATION & ENVIRONMENT
   ============================================================= */

DATA["10"] = {
  /* -----------------------------
       Environment Variables
       ----------------------------- */
  "env-vars": {
    title: "Environment Variables & dotenv",
    english: `
Environment variables store sensitive config:

✔ DB passwords  
✔ API keys  
✔ ports  

Use dotenv:
require("dotenv").config();
console.log(process.env.PORT);
        `,
    malayalam: `
Environment variables ഉപയോഗിക്കുന്നത് sensitive data store ചെയ്യാൻ:

✔ database password  
✔ API keys  
✔ port numbers  

dotenv ഉപയോഗിക്കാൻ:
require("dotenv").config();
console.log(process.env.PORT);
        `,
  },

  /* -----------------------------
       Process Management & Cron
       ----------------------------- */
  "process-mgmt": {
    title: "Process Management & Cron Jobs",
    english: `
Use PM2 for production process management.

Cron jobs automate tasks:
✔ cleanup  
✔ backups  
✔ scheduled tasks  

Example cron:
0 * * * * → run every hour
        `,
    malayalam: `
Process management production-ൽ PM2 ഉപയോഗിക്കുന്നു.

Cron jobs ഉപയോഗിക്കുന്നത്:
✔ cleanup  
✔ backup  
✔ scheduled tasks  

Example cron:
0 * * * * → ഓരോ മണിക്കൂറിലും run ചെയ്യും
        `,
  },

  /* -----------------------------
       NVM
       ----------------------------- */
  nvm: {
    title: "NVM (Node Version Manager)",
    english: `
NVM allows switching between Node versions.

Commands:
nvm install 18  
nvm use 18  
nvm ls  
        `,
    malayalam: `
NVM ഉപയോഗിച്ച് വിവിധ Node.js versions install ചെയ്യാനും switch ചെയ്യാനും കഴിയും.

Commands:
nvm install 18  
nvm use 18  
nvm ls  
        `,
  },

  /* -----------------------------
       Practical Example
       ----------------------------- */
  "practical-example": {
    title: "Practical Example: URL Hostname + Write to File",
    english: `
Example:
const url = new URL("https://example.com:8080/login");
console.log(url.hostname); // example.com

fs.writeFile("log.txt", Date.now()+"\\n");
        `,
    malayalam: `
ഉദാഹരണം:
const url = new URL("https://example.com:8080/login");
console.log(url.hostname); // example.com

fs.writeFile("log.txt", Date.now()+"\\n");
        `,
  },

  /* -----------------------------
       Domain & Port Handling
       ----------------------------- */
  "domain-port": {
    title: "Domain & Port Handling",
    english: `
Domain = website address  
Port = entry point to application  

Example:
app.listen(3000); // port 3000  
        `,
    malayalam: `
Domain = website address  
Port = application run ചെയ്യുന്ന gateway  

ഉദാഹരണം:
app.listen(3000);
        `,
  },
};

/* =============================================================
   SECTION 11 — OTHER RELEVANT CONCEPTS
   ============================================================= */

DATA["11"] = {
  /* -----------------------------
       JSON Parsing & Stringifying
       ----------------------------- */
  json: {
    title: "JSON Parsing & Stringifying",
    english: `
JSON.parse() → converts JSON string to Object  
JSON.stringify() → converts Object to JSON string  

Example:
const obj = JSON.parse('{"name":"busthu"}');
const str = JSON.stringify(obj);
        `,
    malayalam: `
JSON.parse() → JSON string നെ Object ആക്കുന്നു  
JSON.stringify() → Object നെ JSON string ആക്കുന്നു  

ഉദാഹരണം:
const obj = JSON.parse('{"name":"busthu"}');
const str = JSON.stringify(obj);
        `,
  },

  /* -----------------------------
       Blocking vs Non-blocking
       ----------------------------- */
  blocking: {
    title: "Blocking vs Non-blocking Code",
    english: `
Blocking (Sync):
✔ waits for operation to finish  
✔ event loop stops  
Example: fs.readFileSync()

Non-blocking (Async):
✔ does NOT wait  
✔ event loop continues  
Example: fs.readFile()
        `,
    malayalam: `
Blocking (Sync):
✔ task പൂർത്തിയാകുന്നത് വരെ wait ചെയ്യും  
✔ event loop നിൽക്കും  
ഉദാഹരണം: fs.readFileSync()

Non-blocking (Async):
✔ wait ചെയ്യില്ല  
✔ event loop തുടരുന്നു  
ഉദാഹരണം: fs.readFile()
        `,
  },

  /* -----------------------------
       Conditional vs Optional Chaining
       ----------------------------- */
  "cond-optional": {
    title: "Conditional Operator vs Optional Chaining",
    english: `
Conditional operator:
condition ? a : b

Optional chaining:
object?.property  
→ prevents "undefined error"

Example:
user?.address?.city
        `,
    malayalam: `
Conditional operator:
condition ? a : b

Optional chaining:
object?.property  
→ undefined error വരുന്നത് തടയും  

ഉദാഹരണം:
user?.address?.city
        `,
  },

  /* -----------------------------
       Why Node is Single Threaded
       ----------------------------- */
  "why-single-thread": {
    title: "Why Node.js Uses a Single Thread",
    english: `
Reasons:
1) JavaScript originally single-threaded  
2) Avoid race conditions  
3) Event loop handles concurrency  
4) Multithreading handled by libuv  

Single thread + async = highly scalable.
        `,
    malayalam: `
Node.js single-threaded ആക്കിയതിന്റെ കാരണങ്ങൾ:

1) JavaScript ആദ്യം മുതൽ single-threaded  
2) race condition ഒഴിവാക്കാൻ  
3) concurrency event loop കൈകാര്യം ചെയ്യുന്നു  
4) multithreading → libuv thread pool  

Single-thread + async → scalable architecture.
        `,
  },

  /* -----------------------------
       Thread Pool & Async Operations
       ----------------------------- */
  threadpool: {
    title: "Understanding Thread Pool & Async Operations",
    english: `
Thread pool (libuv) is used for:

✔ file I/O  
✔ DNS  
✔ crypto hashing  
✔ compression  

Default size = 4 threads.
        `,
    malayalam: `
Thread pool (libuv) ഉപയോഗിക്കുന്നത്:

✔ file I/O  
✔ DNS  
✔ crypto hashing  
✔ compression  

Default thread count = 4.
        `,
  },

  /* -----------------------------
       Trace & Performance
       ----------------------------- */
  "trace-perf": {
    title: "Trace & Performance Tuning",
    english: `
Tools:
✔ node --trace-events  
✔ Chrome DevTools  
✔ Perf hooks API  

Used for:
✔ find slow functions  
✔ detect event loop lag  
✔ optimize CPU usage  
        `,
    malayalam: `
ഉപയോഗിക്കുന്ന tools:

✔ node --trace-events  
✔ Chrome DevTools  
✔ Perf Hooks API  

Use cases:
✔ slow functions കണ്ടെത്തുക  
✔ event loop lag കണ്ടെത്തുക  
✔ CPU optimize ചെയ്യുക  
        `,
  },

  /* -----------------------------
       BSON
       ----------------------------- */
  bson: {
    title: "Binary JSON (BSON)",
    english: `
Used by MongoDB.

Features:
✔ binary format  
✔ supports more types than JSON  
✔ faster for databases  
        `,
    malayalam: `
MongoDB ഉപയോഗിക്കുന്ന data format ആണ് BSON.

✔ binary format  
✔ JSON-നേക്കാൾ കൂടുതൽ data types support ചെയ്യും  
✔ database operations വേഗമാണ്  
        `,
  },

  /* -----------------------------
       Middleware in Large Apps
       ----------------------------- */
  "middleware-large": {
    title: "Using Middleware in Large Applications",
    english: `
Large apps must use organized middleware:

✔ authentication middleware  
✔ logger middleware  
✔ request validator  
✔ role-based access middleware  

Break into multiple router files.
        `,
    malayalam: `
Large apps ല് middleware organize ചെയ്യേണ്ടത്:

✔ authentication  
✔ logging  
✔ validation  
✔ role-based access  

Routers പല files-ൽ split ചെയുക.
        `,
  },

  /* -----------------------------
       Custom Middleware Examples
       ----------------------------- */
  "custom-mw": {
    title: "Custom Middleware Examples",
    english: `
Example:
app.use((req,res,next)=>{
  console.log("Time:", Date.now());
  next();
});

Security middleware:
app.use((req,res,next)=> checkToken(req,res,next));
        `,
    malayalam: `
ഉദാഹരണം:
app.use((req,res,next)=>{
  console.log("Time:", Date.now());
  next();
});

Security middleware:
app.use((req,res,next)=> checkToken(req,res,next));
        `,
  },
};

/* =============================================================
   SECTION 12 — REQUEST & RESPONSE LIFECYCLE
   ============================================================= */

DATA["12"] = {
  lifecycle: {
    title: "Lifecycle of an HTTP Request & Response",
    english: `
Lifecycle steps:
1) client → request  
2) middleware runs  
3) router match  
4) controller logic  
5) response generated  
6) connection close  

Everything passes through middleware.
        `,
    malayalam: `
Request/Response lifecycle:

1) client request അയക്കും  
2) middleware run ചെയ്യും  
3) router match  
4) controller logic  
5) response generate ചെയ്യുന്നു  
6) connection close  

എല്ലാം middleware വഴി കടക്കും.
        `,
  },

  "cookies-sessions": {
    title: "Cookies & Sessions",
    english: `
Cookies → stored in browser  
Session → stored on server  

Example:
cookie-parser  
express-session  
        `,
    malayalam: `
Cookies browser-ൽ store ചെയ്യും  
Session server-ൽ store ചെയ്യും  

ഉപയോഗിക്കുന്ന tools:
cookie-parser  
express-session  
        `,
  },

  "status-change": {
    title: "Changing Status Codes",
    english: `
Example:
res.status(201).send("Created");
res.status(404).send("Not Found");
        `,
    malayalam: `
Status code മാറ്റാൻ:

res.status(201).send("Created");
res.status(404).send("Not Found");
        `,
  },

  "login-redirect": {
    title: "Login Handling & Redirect Logic",
    english: `
If user already logged in:
redirect → dashboard

If not:
show login page

Example:
if(req.session.user){ res.redirect("/home"); }
        `,
    malayalam: `
User login ചെയ്തു കഴിഞ്ഞാൽ:
dashboard ലേക്ക് redirect

Login ഇല്ലെങ്കിൽ:
login page കാണിക്കുക

ഉദാഹരണം:
if(req.session.user){ res.redirect("/home"); }
        `,
  },

  "path-url": {
    title: "Path & URL Handling",
    english: `
URL parts:
protocol → https  
hostname → example.com  
port → 8080  
pathname → /login  
hash → #top  

Example:
new URL("https://site.com/home#top");
        `,
    malayalam: `
URL ഭാഗങ്ങൾ:
protocol → https  
hostname → example.com  
port → 8080  
pathname → /login  
hash → #top  

ഉദാഹരണം:
new URL("https://site.com/home#top");
        `,
  },

  "payload-get": {
    title: "Can We Send Body Payload in GET?",
    english: `
NO — GET should NOT contain body payload.

Why?
✔ violates HTTP standards  
✔ many servers ignore GET body  
✔ unsafe and unpredictable  

Use POST instead.
        `,
    malayalam: `
GET request body payload അയക്കുന്നത് ശരിയല്ല.

കാരണം:
✔ HTTP standard ലംഘനം  
✔ പല servers ഇത് ignore ചെയ്യും  
✔ safe അല്ല  

Body അയക്കാൻ POST മാത്രം ഉപയോഗിക്കുക.
        `,
  },
};

/* =============================================================
   SECTION 13 — PERFORMANCE & DEBUGGING
   ============================================================= */

DATA["13"] = {
  debugging: {
    title: "Debugging Node.js Applications",
    english: `
Tools:
✔ Chrome DevTools  
✔ VS Code debugger  
✔ console.log  
✔ node --inspect  

Breakpoints allow stepping through code.
        `,
    malayalam: `
Debug tools:

✔ Chrome DevTools  
✔ VS Code debugger  
✔ console.log  
✔ node --inspect  

Breakpoints ഉപയോഗിച്ച് code step-by-step run ചെയ്യാം.
        `,
  },

  "large-scale": {
    title: "Handling Large-Scale Applications",
    english: `
Techniques:
✔ split routes  
✔ service layer  
✔ MVC  
✔ microservices  
✔ caching  
✔ clustering  
        `,
    malayalam: `
Large-scale apps കൈകാര്യം ചെയ്യാൻ:

✔ routes split ചെയ്യുക  
✔ service layer ഉപയോഗിക്കുക  
✔ MVC structure  
✔ microservices  
✔ caching  
✔ clustering  
        `,
  },

  "event-driven-use": {
    title: "Using Event-driven Programming Effectively",
    english: `
Use events for:
✔ background jobs  
✔ notifications  
✔ decoupling logic  
✔ async workflows  
        `,
    malayalam: `
Events ഉപയോഗിക്കുന്നത്:

✔ background jobs  
✔ notifications  
✔ code decouple ചെയ്യണം  
✔ async workflows  
        `,
  },

  "perf-strategies": {
    title: "Performance Optimization Strategies",
    english: `
✔ clustering  
✔ load balancing  
✔ caching (Redis)  
✔ using Streams  
✔ minimizing sync code  
✔ using PM2  
        `,
    malayalam: `
Performance മെച്ചപ്പെടുത്താൻ:

✔ clustering  
✔ load balancing  
✔ caching (Redis)  
✔ streams ഉപയോഗിക്കുക  
✔ sync code കുറക്കുക  
✔ PM2 ഉപയോഗിക്കുക  
        `,
  },

  profiling: {
    title: "Profiling",
    english: `
Tools:
✔ clinic.js  
✔ node --prof  
✔ perf hooks  

Used to measure:
✔ CPU  
✔ memory  
✔ function usage  
        `,
    malayalam: `
Profiling tools:

✔ clinic.js  
✔ node --prof  
✔ perf hooks  

Measure ചെയ്യുന്നത്:
✔ CPU usage  
✔ memory usage  
✔ function performance  
        `,
  },

  "pm2-monitoring": {
    title: "Monitoring Using PM2",
    english: `
PM2 provides:
✔ real-time CPU usage  
✔ logs  
✔ restart count  
✔ uptime  

Command:
pm2 monit
        `,
    malayalam: `
PM2 monitoring നൽകുന്നത്:

✔ real-time CPU usage  
✔ logs  
✔ restart count  
✔ uptime  

Command:
pm2 monit
        `,
  },

  repl: {
    title: "REPL in Debugging",
    english: `
REPL helps:
✔ quick testing  
✔ logic experiment  
✔ try modules  

Type:
node
        `,
    malayalam: `
REPL ഉപയോഗിച്ച്:

✔ small code test ചെയ്യാം  
✔ logic try ചെയ്യാം  
✔ modules test ചെയ്യാം  

Open:
node
        `,
  },
};

/* =============================================================
   SECTION 14 — FINAL REVIEW & PRACTICE
   ============================================================= */

DATA["14"] = {
  "review-core": {
    title: "Review Core Node.js Concepts",
    english: `
Core concepts:
✔ event loop  
✔ async I/O  
✔ streams  
✔ modules  
✔ promises  
✔ express basics  
        `,
    malayalam: `
Core concepts:

✔ event loop
✔ async I/O  
✔ streams  
✔ modules  
✔ promises  
✔ express അടിസ്ഥാനങ്ങൾ  
        `,
  },

  "practical-examples": {
    title: "Practical Examples",
    english: `
Examples:
✔ project scaffolding  
✔ custom middleware  
✔ routing patterns  
✔ API versioning  
        `,
    malayalam: `
ഉദാഹരണങ്ങൾ:

✔ project scaffolding  
✔ custom middleware  
✔ routing patterns  
✔ API versioning  
        `,
  },

  "review-package": {
    title: "Review package.json Components",
    english: `
Important parts:
✔ dependencies  
✔ devDependencies  
✔ scripts  
✔ version  
✔ main entry  
        `,
    malayalam: `
package.json ഭാഗങ്ങൾ:

✔ dependencies  
✔ devDependencies  
✔ scripts  
✔ version  
✔ main entry  
        `,
  },

  "middleware-practice": {
    title: "Middleware Usage Practice",
    english: `
Practice:
✔ logger middleware  
✔ auth middleware  
✔ error handler  
✔ rate limiter  
        `,
    malayalam: `
Practice ചെയ്യേണ്ട middleware:

✔ logging  
✔ authentication  
✔ error handler  
✔ rate limiting  
        `,
  },

  "realworld-express": {
    title: "Real-world Express Implementations",
    english: `
Examples:
✔ ecommerce backend  
✔ chat server  
✔ blog API  
✔ authentication system  
        `,
    malayalam: `
Real-world implementations:

✔ ecommerce backend  
✔ chat server  
✔ blog API  
✔ authentication system  
        `,
  },

  "rest-api": {
    title: "Build a REST API From Scratch",
    english: `
Steps:
1) initialize project  
2) folder structure  
3) controllers  
4) routes  
5) middleware  
6) DB integration  
        `,
    malayalam: `
REST API ഉണ്ടാക്കാനുള്ള steps:

1) project initialize  
2) folder structure  
3) controllers  
4) routes  
5) middleware  
6) database connection  
        `,
  },

  "complex-routing": {
    title: "Handling Complex Routing",
    english: `
Use:
✔ express.Router()  
✔ route groups  
✔ nested routes  
✔ versioning (/v1, /v2)  
        `,
    malayalam: `
Complex routing:

✔ express.Router()  
✔ route groups  
✔ nested routes  
✔ versioning (/v1, /v2)  
        `,
  },

  "event-loop-real": {
    title: "Event Loop in Real Apps",
    english: `
Event loop used for:
✔ scheduling tasks  
✔ async jobs  
✔ background workers  
✔ non-blocking logic  
        `,
    malayalam: `
Event loop real apps ൽ ഉപയോഗിക്കുന്നത്:

✔ scheduling  
✔ async jobs  
✔ background workers  
✔ non-blocking programming  
        `,
  },
};

/* =============================================================
   DROPDOWN TOGGLE LOGIC
   ============================================================= */

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".topic").forEach((topic) => {
    topic.addEventListener("click", () => {
      const sec = topic.dataset.section;
      const sub = topic.dataset.sub;

      const content = DATA?.[sec]?.[sub];
      if (!content) return;

      let next = topic.nextElementSibling;

      // If already open → close it
      if (next && next.classList.contains("dropdown-box")) {
        next.remove();
        return;
      }

      // Close all open dropdowns
      document.querySelectorAll(".dropdown-box").forEach((b) => b.remove());

      // Build new dropdown
      const box = document.createElement("div");
      box.className = "dropdown-box";

      box.innerHTML = `
                <div class="drop-inner">
                    <strong>English Explanation:</strong><br>
                    ${content.english.replace(/\n/g, "<br>")}<br><br>

                    <strong>Malayalam Explanation:</strong><br>
                    ${content.malayalam.replace(/\n/g, "<br>")}<br><br>
                    <p>For help: </p>

                    <div class="ai-actions">
  <!-- ChatGPT -->
  <button class="chatgpt-btn" title="Ask ChatGPT">
    <img
      src="https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg"
      alt="ChatGPT"
      class="ai-logo"
    />
  </button>

  <!-- Gemini -->
  <button class="gemini-btn" title="Ask Gemini">
  <span class="gemini-icon">✦</span>
</button>

</div>


                </div>
            `;

      topic.insertAdjacentElement("afterend", box);

      // ChatGPT button logic
     // ChatGPT click
box.querySelector(".chatgpt-btn").addEventListener("click", () => {
  const prompt = `Explain deeply: ${content.title}

English:
${content.english}

Malayalam:
${content.malayalam}`;

  navigator.clipboard.writeText(prompt);
  window.open("https://chatgpt.com/", "_blank");
});

// Gemini click
box.querySelector(".gemini-btn").addEventListener("click", () => {
  const prompt = `Explain deeply: ${content.title}

English:
${content.english}

Malayalam:
${content.malayalam}`;

  navigator.clipboard.writeText(prompt);
  window.open("https://gemini.google.com/", "_blank");
});
    });
  });
});
// // ChatGPT button logic (FIXED)
// box.querySelector(".chatgpt-btn").addEventListener("click", () => {
//   const chatGPTUrl = "https://chatgpt.com/";
//   window.open(chatGPTUrl, "_blank");
// });



