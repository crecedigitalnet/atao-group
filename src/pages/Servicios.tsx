import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Truck,
  FileText,
  GraduationCap,
  Wrench,
  Shield,
  ClipboardCheck,
  Building2,
  Phone,
  ArrowRight,
} from "lucide-react";

const Servicios = () => {
  const services = [
    {
      icon: Building2,
      title: "Abastecimiento Mayorista y Licitaciones",
      description:
        "Experiencia en abastecimiento a clínicas, hospitales, municipalidades y ministerios. Gestión integral de procesos de licitación pública y contratos marco.",
      features: [
        "Proformas multi-SKU personalizadas",
        "Especificaciones técnicas detalladas",
        "Acompañamiento en licitaciones",
        "Cumplimiento de plazos contractuales",
      ],
    },
    {
      icon: FileText,
      title: "Asesoría Técnica y Preventa",
      description:
        "Nuestros especialistas te ayudan a seleccionar el equipamiento adecuado según normativas vigentes y necesidades específicas.",
      features: [
        "Evaluación de requerimientos",
        "Recomendación de equipos certificados",
        "Asesoría en normativas MINSA/DIGEMID",
        "Comparativas técnicas",
      ],
    },
    {
      icon: Wrench,
      title: "Instalación y Puesta en Marcha",
      description:
        "Instalación profesional de equipos y capacitación inicial para garantizar el correcto funcionamiento desde el primer día.",
      features: [
        "Instalación por técnicos certificados",
        "Verificación de funcionamiento",
        "Capacitación de usuario básico",
        "Protocolos de seguridad",
      ],
    },
    {
      icon: GraduationCap,
      title: "Capacitación de Uso y Mantenimiento",
      description:
        "Programas de capacitación personalizados para optimizar el uso y prolongar la vida útil de los equipos.",
      features: [
        "Capacitación en sitio o remota",
        "Manuales en español",
        "Videos tutoriales",
        "Soporte técnico continuo",
      ],
    },
    {
      icon: Shield,
      title: "Garantías, Repuestos y Soporte",
      description:
        "Sistema integral de garantías con repuestos originales y atención técnica especializada en todo el país.",
      features: [
        "Garantía de fábrica extendida",
        "Stock de repuestos originales",
        "RMA simplificado",
        "Atención en campo (según zona)",
      ],
    },
    {
      icon: ClipboardCheck,
      title: "Documentación y Trazabilidad",
      description:
        "Entrega completa de documentación técnica, fichas de seguridad y registros sanitarios para cumplimiento normativo.",
      features: [
        "Fichas técnicas en español",
        "Hojas de seguridad (MSDS)",
        "Certificados de origen",
        "Registros sanitarios DIGEMID",
      ],
    },
  ];

  const cta = [
    {
      title: "Empresas y Gobierno",
      description: "Cotizaciones corporativas y licitaciones",
      icon: Building2,
      link: "/contacto?tipo=cotizacion",
      buttonText: "Solicitar Cotización",
      variant: "b2b" as const,
    },
    {
      title: "Profesionales de la Salud",
      description: "Asesoría personalizada para equipamiento",
      icon: Phone,
      link: "/contacto",
      buttonText: "Contactar Asesor",
      variant: "default" as const,
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-primary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Servicios Integrales para el Sector Salud
            </h1>
            <p className="text-xl text-white/90">
              Desde la asesoría técnica hasta el soporte postventa, acompañamos cada etapa
              de tu inversión en equipamiento médico
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-primary-light flex items-center justify-center mb-4">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">{service.title}</CardTitle>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-start space-x-2">
                        <ArrowRight className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Nuestro Proceso de Atención
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Metodología probada para garantizar tu satisfacción
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                { step: "01", title: "Consulta", desc: "Evaluamos tus necesidades" },
                { step: "02", title: "Propuesta", desc: "Cotización personalizada" },
                { step: "03", title: "Entrega", desc: "Instalación y capacitación" },
                { step: "04", title: "Soporte", desc: "Seguimiento continuo" },
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="h-16 w-16 rounded-full bg-gradient-primary flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-white">{item.step}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Comienza Hoy
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Selecciona el tipo de servicio que necesitas
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {cta.map((item, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="h-16 w-16 rounded-full bg-gradient-primary flex items-center justify-center mx-auto mb-4">
                    <item.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl">{item.title}</CardTitle>
                  <CardDescription className="text-base">
                    {item.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Link to={item.link}>
                    <Button variant={item.variant} size="lg" className="w-full">
                      {item.buttonText}
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Servicios;
