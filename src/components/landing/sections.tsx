import { Link } from "@tanstack/react-router";
import {
  ClipboardList,
  FileText,
  Layers,
  Send,
  ShieldCheck,
  Clock,
  Database,
  History,
  ArrowRight,
  Sparkles,
  Gift,
  Sprout,
  BriefcaseBusiness,
  Building2,
  CheckCircle2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/landing/Reveal";
import heroImg from "@/assets/hero-data.jpg";
import iaImg from "@/assets/ia-policies.jpg";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border bg-background">
      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 md:grid-cols-2 md:py-24">
        <div>
          <Reveal immediate>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
              Cumplimiento. Trazabilidad. Ley 1581.
            </p>
          </Reveal>
          <Reveal immediate delay={90}>
            <h1 className="mt-4 text-4xl font-extrabold leading-[1.05] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Protege los datos personales de tu organización con inteligencia humana y artificial.
            </h1>
          </Reveal>
          <Reveal immediate delay={180}>
            <p className="mt-6 max-w-xl text-base text-muted-foreground">
              Cerebiia Data centraliza la recolección de consentimiento, las políticas de
              tratamiento, el registro de actividades (RAT), las solicitudes ARCO y los plazos
              legales, con evidencia auditable en cada paso.
            </p>
          </Reveal>
          <Reveal immediate delay={270} className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg">
              <Link to="/contacto">Solicitar demo</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href="#modulos">Conocer la plataforma</a>
            </Button>
          </Reveal>
        </div>

        <Reveal immediate delay={200} className="relative">
          <div className="absolute inset-6 -z-10 rounded-full bg-primary/10 blur-3xl" />
          <img
            src={heroImg}
            alt="Escudo de protección de datos personales con flujos de información"
            width={1024}
            height={1024}
            className="mx-auto w-full max-w-lg rounded-3xl"
          />
        </Reveal>
      </div>
    </section>
  );
}


export function IaBlock() {
  return (
    <section id="solucion" className="border-b border-border bg-card">
      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 md:grid-cols-2 md:py-20">
        <Reveal>
        <img
          src={iaImg}
          alt="Documentos de política de tratamiento validados automáticamente"
          width={1024}
          height={768}
          loading="lazy"
          className="w-full rounded-3xl shadow-card"
        />
        </Reveal>
        <Reveal delay={120}>
          <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
            <Sparkles className="size-3.5" /> IA aplicada al cumplimiento
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Menos trabajo manual, más evidencia de cumplimiento
          </h2>
          <p className="mt-4 text-muted-foreground">
            La inteligencia artificial redacta políticas de tratamiento, clasifica bases de datos y
            detecta datos sensibles, mientras el sistema alerta los plazos legales antes de que se
            venzan.
          </p>
          <ul className="mt-6 space-y-3">
            {[
              "Generación de políticas de tratamiento con IA",
              "Clasificación automática de datos y detección de datos sensibles",
              "Alertas de vencimiento de solicitudes ARCO (Art. 11 y 14)",
            ].map((t) => (
              <li key={t} className="flex items-start gap-3 text-sm text-foreground">
                <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-success" />
                {t}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

const modulos = [
  {
    icon: ClipboardList,
    title: "Recolección de datos",
    desc: "Formularios de consentimiento propios o importados, con evidencia de aceptación.",
  },
  {
    icon: FileText,
    title: "Políticas de tratamiento",
    desc: "Publica, versiona y comparte las políticas que tus titulares deben aceptar.",
  },
  {
    icon: Layers,
    title: "Clasificación",
    desc: "Trazabilidad de cada registro recolectado, verificado o pendiente.",
  },
  {
    icon: Send,
    title: "Campañas de consentimiento",
    desc: "Envía campañas masivas y mide la tasa de autorización obtenida.",
  },
  {
    icon: ShieldCheck,
    title: "Solicitudes ARCO",
    desc: "Recibe, asigna y resuelve solicitudes de acceso, rectificación y supresión.",
  },
  {
    icon: Clock,
    title: "Plazos",
    desc: "Bandeja priorizada por urgencia con días restantes y responsables.",
  },
  {
    icon: Database,
    title: "Registro RAT",
    desc: "Inventario de actividades de tratamiento con base legal y ciclo de vida.",
  },
  {
    icon: History,
    title: "Auditoría",
    desc: "Bitácora completa de acciones para demostrar cumplimiento ante la SIC.",
  },
];

export function Modulos() {
  return (
    <section id="modulos" className="border-b border-border bg-background">
      <div className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 md:py-20">
        <Reveal className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Todo el ciclo de vida del dato personal
          </h2>
          <p className="mt-4 text-muted-foreground">
            Ocho módulos conectados entre sí para operar el programa de protección de datos de tu
            empresa sin hojas de cálculo.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {modulos.map((m, i) => (
            <Reveal
              as="article"
              key={m.title}
              delay={i * 70}
              className="rounded-2xl border border-border bg-card p-5 transition-shadow hover:shadow-card"
            >
              <span className="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <m.icon className="size-5" />
              </span>
              <h3 className="mt-4 text-base font-semibold text-card-foreground">{m.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{m.desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Cumplimiento() {
  const kpis = [
    { label: "Solicitudes respondidas en plazo", value: "100%", tone: "text-success" },
    { label: "Registros verificados", value: "1.240", tone: "text-primary" },
    { label: "Políticas vigentes", value: "8", tone: "text-foreground" },
    { label: "Días promedio de respuesta", value: "3,4", tone: "text-foreground" },
  ];

  return (
    <section id="cumplimiento" className="border-b border-border bg-card">
      <div className="mx-auto grid w-full max-w-7xl gap-12 px-4 py-16 sm:px-6 md:grid-cols-2 md:py-20">
        <Reveal>
          <h2 className="text-3xl font-bold tracking-tight text-card-foreground sm:text-4xl">
            Cumplimiento con resultados medibles
          </h2>
          <p className="mt-4 text-muted-foreground">
            Un panel único muestra el estado real del programa: qué se recolectó, qué falta
            verificar, qué solicitudes están por vencer y quién responde por cada una.
          </p>
          <Button asChild className="mt-8" size="lg">
            <Link to="/contacto">
              Hablemos de tu operación <ArrowRight className="size-4" />
            </Link>
          </Button>
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2">
          {kpis.map((k, i) => (
            <Reveal key={k.label} delay={i * 80} className="rounded-2xl border border-border bg-background p-5">
              <p className={`text-3xl font-extrabold tracking-tight ${k.tone}`}>{k.value}</p>
              <p className="mt-2 text-sm text-muted-foreground">{k.label}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Proceso() {
  const pasos = [
    { n: "01", t: "Configura", d: "Define responsable de datos, políticas y bases legales." },
    { n: "02", t: "Recolecta", d: "Captura consentimiento con formularios y campañas trazables." },
    { n: "03", t: "Clasifica y responde", d: "Ordena tus bases y resuelve solicitudes ARCO a tiempo." },
    { n: "04", t: "Audita", d: "Exporta el RAT y la evidencia cuando la autoridad lo requiera." },
  ];

  return (
    <section id="proceso" className="border-b border-border bg-background">
      <div className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 md:py-20">
        <Reveal>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Cómo funciona
          </h2>
        </Reveal>
        <div className="mt-10 grid gap-6 md:grid-cols-4">
          {pasos.map((p, i) => (
            <Reveal key={p.n} delay={i * 90} className="border-t-2 border-primary pt-5">
              <span className="text-sm font-bold text-primary">{p.n}</span>
              <h3 className="mt-2 text-lg font-semibold text-foreground">{p.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{p.d}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

const planes = [
  {
    nombre: "Gratuito",
    icono: Gift,
    descripcion: "Ideal para comenzar a gestionar tus datos personales.",
    precio: "$0",
    periodo: "Sin costo",
    caracteristicas: [
      "Acceso completo a las funciones de la plataforma",
      "Hasta 10.000 registros de datos personales",
      "1 usuario",
      "Asesoría legal para implementar 1 plantilla personalizada",
    ],
  },
  {
    nombre: "Semilla",
    icono: Sprout,
    descripcion: "Para empresas que inician su gestión de datos personales.",
    precio: "$1.000.000",
    periodo: "COP / anual",
    caracteristicas: [
      "Acceso completo a las funciones de la plataforma",
      "Hasta 10.000 registros de datos personales",
      "1 usuario",
      "Asesoría legal para implementar 1 plantilla personalizada",
    ],
  },
  {
    nombre: "Profesional",
    icono: BriefcaseBusiness,
    descripcion: "Para empresas que manejan grandes volúmenes de datos.",
    precio: "$2.000.000",
    periodo: "COP / anual",
    caracteristicas: [
      "Acceso completo a las funciones de la plataforma",
      "Hasta 50.000 registros de datos personales",
      "5 usuarios",
      "Asesoría legal para implementar 1 plantilla personalizada",
    ],
  },
  {
    nombre: "Corporativo",
    icono: Building2,
    descripcion: "Para organizaciones que requieren monitoreo, reportes y envíos masivos.",
    precio: "$3.000.000",
    periodo: "COP / anual",
    caracteristicas: [
      "Acceso completo a las funciones de la plataforma",
      "Hasta 100.000 registros de datos personales",
      "Usuarios ilimitados",
      "Asesoría legal para implementar 1 plantilla personalizada",
      "10.000 SMS durante el primer mes",
    ],
  },
];



export function Planes() {
  return (
    <section id="planes" className="border-b border-border bg-background">
      <div className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 md:py-20">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Planes diseñados para tu empresa
            </h2>
            <p className="mt-4 text-muted-foreground">
              Elige el plan que mejor se adapte a las necesidades de gestión
              y protección de tus datos personales.
            </p>
          </div>
        </Reveal>

        {/* Tarjetas de planes */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {planes.map((plan, index) => (
            <Reveal key={plan.nombre} delay={index * 100}>
              <div className="flex h-full flex-col rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">

                {/* Icono */}
                <div className="mb-5 flex justify-center">
                  <span className="flex size-16 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <plan.icono className="size-8" />
                  </span>
                </div>

                {/* Nombre */}
                <h3 className="text-xl font-bold text-foreground">
                  {plan.nombre}
                </h3>

                {/* Descripción */}
                <p className="mt-2 min-h-12 text-sm text-muted-foreground">
                  {plan.descripcion}
                </p>

                {/* Precio */}
                <div className="mt-6">
                  <span className="text-3xl font-bold text-foreground">
                    {plan.precio}
                  </span>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {plan.periodo}
                  </p>
                </div>

                <div className="my-6 border-t border-border" />

                {/* Características */}
                <ul className="flex-1 space-y-4">
                  {plan.caracteristicas.map((caracteristica) => (
                    <li
                      key={caracteristica}
                      className="flex items-start gap-2 text-sm text-muted-foreground"
                    >
                      <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />
                      <span>{caracteristica}</span>
                    </li>
                  ))}
                </ul>

                {/* Botón seleccionar plan */}
                <Button
                  asChild
                  className="mt-8 w-full"
                  variant={plan.nombre === "Gratuito" ? "outline" : "default"}
                >
                  <Link to="/contacto">
                    Seleccionar plan
                  </Link>
                </Button>

              </div>
            </Reveal>
          ))}
        </div>

        {/* Botón general de registro */}
        <div className="mt-10 flex justify-center">
          <Button
            size="lg"
            className="min-w-56"
            onClick={() => {}}
          >
            Regístrate ahora
          </Button>
        </div>

      </div>
    </section>
  );
}


export function Familia() {
  const productos = [
    { t: "Cerebiia RRHH", d: "Gestión del talento y procesos de personal.", active: false },
    { t: "Cerebiia Calidad", d: "Sistemas de gestión y mejora continua.", active: false },
    { t: "Cerebiia Data 1581", d: "Protección de datos personales y cumplimiento.", active: true },
  ];

  return (
    <section className="border-b border-border bg-navy text-navy-foreground">
      <div className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 md:py-20">
        <Reveal>
          <h2 className="max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl">
            Soluciones SaaS
          </h2>
          <p className="mt-4 max-w-2xl text-navy-foreground/70">
            Plataformas seguras y personalizables para sectores clave, con inteligencia artificial y
            herramientas colaborativas integradas.
          </p>
        </Reveal>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {productos.map((p, i) => (
            <Reveal
              key={p.t}
              delay={i * 90}
              className={`rounded-2xl border p-6 ${
                p.active
                  ? "border-primary bg-primary/15"
                  : "border-navy-foreground/15 bg-navy-foreground/5"
              }`}
            >
              <h3 className="text-lg font-semibold">{p.t}</h3>
              <p className="mt-2 text-sm text-navy-foreground/70">{p.d}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Aliados() {
  const aliados = [
    "CENS",
    "Zero",
    "HAD Seguros",
    "Happy BPO",
    "Conectados RC",
    "Asconfit",
    "Umake",
    "Coagronorte",
  ];

  return (
    <section className="border-b border-border bg-background">
      <div className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6">
        <Reveal>
          <p className="text-center text-sm font-semibold uppercase tracking-[0.22em] text-muted-foreground">
            +50 aliados confían en Cerebiia
          </p>
        </Reveal>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
          {aliados.map((a, i) => (
            <Reveal
              as="span"
              key={a}
              delay={i * 60}
              className="text-lg font-bold tracking-tight text-muted-foreground/70"
            >
              {a}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CtaFinal() {
  return (
    <section className="bg-brand-gradient">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-start gap-6 px-4 py-16 sm:px-6 md:flex-row md:items-center md:justify-between">
        <Reveal>
          <h2 className="text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl">
            Pon tu empresa al día con la Ley 1581
          </h2>
          <p className="mt-3 max-w-xl text-primary-foreground/80">
            Agenda una demostración y te mostramos cómo migrar tu operación actual a Cerebiia Data.
          </p>
        </Reveal>
        <Reveal delay={120}>
          <Button asChild size="lg" variant="secondary">
            <Link to="/contacto">Solicitar demo</Link>
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
