import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Building2,
  Landmark,
  Stethoscope,
  ShoppingCart,
  Truck,
  Shield,
  CheckCircle2,
  FileCheck,
  ArrowRight,
  Heart,
} from "lucide-react";
import heroImage from "@/assets/hero-medical.jpg";

const Inicio = () => {
  const segments = [
    {
      icon: Building2,
      title: "Empresas y Clínicas",
      description: "Abastecimiento integral para centros médicos y clínicas",
      cta: "Solicitar Cotización",
      link: "/contacto?tipo=cotizacion",
      variant: "b2b" as const,
    },
    {
      icon: Landmark,
      title: "Gobierno",
      description: "Experiencia en licitaciones públicas y contratos marco",
      cta: "Ver Servicios",
      link: "/servicios",
      variant: "b2b" as const,
    },
    {
      icon: Stethoscope,
      title: "Profesionales de la Salud",
      description: "Asesoría especializada para equipamiento profesional",
      cta: "Contactar Asesor",
      link: "/contacto",
      variant: "default" as const,
    },
    {
      icon: ShoppingCart,
      title: "Usuarios Finales",
      description: "Compra directa de productos médicos certificados",
      cta: "Ver Catálogo",
      link: "/catalogo",
      variant: "retail" as const,
    },
  ];

  const categories = [
    { name: "Mobiliario Médico", count: "50+", slug: "mobiliario" },
    { name: "Dispositivos de Medición", count: "30+", slug: "dispositivos" },
    { name: "Enfermería", count: "40+", slug: "enfermeria" },
    { name: "Rehabilitación", count: "35+", slug: "rehabilitacion" },
    { name: "Ortesis y Prótesis", count: "45+", slug: "ortesis" },
    { name: "Suministros Desechables", count: "60+", slug: "suministros" },
  ];

  const benefits = [
    {
      icon: Truck,
      title: "Entrega Nacional",
      description: "Cobertura en todo el Perú con tiempos garantizados",
    },
    {
      icon: Shield,
      title: "Stock Verificado",
      description: "Productos certificados y disponibles de inmediato",
    },
    {
      icon: CheckCircle2,
      title: "Soporte Técnico",
      description: "Asesoría especializada antes y después de la compra",
    },
    {
      icon: FileCheck,
      title: "Trazabilidad",
      description: "Documentación completa y registros sanitarios",
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(135deg, rgba(33, 103, 185, 0.9), rgba(33, 103, 185, 0.7)), url(${heroImage})`,
          }}
        />
        <div className="container relative z-10 mx-auto px-4 text-center">
          <Badge className="mb-4 bg-secondary text-secondary-foreground">
            <Heart className="mr-2 h-4 w-4" />
            Aliados de Confianza en Salud
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Equipos Médicos Confiables para Empresas, Gobierno y Profesionales
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Distribución nacional, stock verificado y soporte técnico especializado en todo el Perú
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contacto?tipo=cotizacion">
              <Button variant="hero" size="lg" className="text-lg">
                Solicitar Cotización
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/catalogo">
              <Button variant="outline" size="lg" className="bg-white/10 border-white text-white hover:bg-white hover:text-primary text-lg">
                Ver Catálogo
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Segments Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Segmentos que Atendemos</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Soluciones especializadas para cada tipo de cliente
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {segments.map((segment, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-primary-light flex items-center justify-center mb-4">
                    <segment.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{segment.title}</CardTitle>
                  <CardDescription>{segment.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Link to={segment.link}>
                    <Button variant={segment.variant} className="w-full">
                      {segment.cta}
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Categorías Destacadas</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Amplio catálogo de equipos y suministros médicos certificados
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((category, index) => (
              <Link key={index} to={`/catalogo?categoria=${category.slug}`}>
                <Card className="hover:shadow-lg transition-all hover:-translate-y-1 cursor-pointer">
                  <CardContent className="p-6 text-center">
                    <p className="font-semibold mb-2">{category.name}</p>
                    <Badge variant="secondary">{category.count} productos</Badge>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/catalogo">
              <Button variant="default" size="lg">
                Ver Catálogo Completo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Beneficios Diferenciales</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Por qué elegir ATAO Group como tu proveedor de confianza
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="h-16 w-16 rounded-full bg-gradient-primary flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            ¿Listo para Comenzar?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Solicita tu cotización hoy y recibe atención personalizada de nuestros especialistas
          </p>
          <Link to="/contacto?tipo=cotizacion">
            <Button variant="hero" size="lg" className="bg-white text-primary hover:bg-white/90 text-lg">
              Solicitar Cotización Ahora
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Inicio;
