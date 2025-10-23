import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, FileCheck, Package, Award, ClipboardList, TrendingUp, AlertCircle } from "lucide-react";

const Calidad = () => {
  const standards = [
    {
      title: "ISO 9001:2015",
      description: "Sistema de Gestión de Calidad certificado",
      status: "Certificado",
      icon: Award,
    },
    {
      title: "ISO 13485",
      description: "Calidad para dispositivos médicos",
      status: "En proceso",
      icon: Shield,
    },
    {
      title: "Registros DIGEMID",
      description: "Productos con registro sanitario vigente",
      status: "Vigente",
      icon: FileCheck,
    },
  ];

  const qualityPillars = [
    {
      icon: Package,
      title: "Trazabilidad Completa",
      description:
        "Control de lote y serie desde la recepción hasta la entrega final. Cada producto cuenta con su historial documentado.",
    },
    {
      icon: ClipboardList,
      title: "Control de Recepción",
      description:
        "Inspección de calidad en cada ingreso de mercadería. Verificación de registros sanitarios y fechas de vencimiento.",
    },
    {
      icon: Shield,
      title: "Almacenamiento Controlado",
      description:
        "Instalaciones climatizadas con monitoreo de temperatura y humedad. Segregación por tipo de producto.",
    },
    {
      icon: FileCheck,
      title: "Checklist de Despacho",
      description:
        "Verificación final antes de cada entrega. Documentación completa: fichas técnicas, manuales y certificados.",
    },
  ];

  const warrantyProcess = [
    "Registro de reclamo en 24 horas",
    "Evaluación técnica en 48 horas",
    "Resolución o reposición en 7-15 días",
    "Seguimiento hasta cierre del caso",
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-primary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-4 bg-white/20 text-white border-white/30">
              <Shield className="mr-2 h-4 w-4" />
              Compromiso con la Excelencia
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Calidad Garantizada en Cada Producto
            </h1>
            <p className="text-xl text-white/90">
              Estándares internacionales, procesos documentados y mejora continua
              para asegurar tu tranquilidad
            </p>
          </div>
        </div>
      </section>

      {/* Policy Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Política de Calidad
              </h2>
              <p className="text-lg text-muted-foreground">
                Principios que guían nuestra operación
              </p>
            </div>
            <Card className="bg-primary-light border-primary/20">
              <CardContent className="p-8">
                <div className="space-y-4 text-lg">
                  <p>
                    En ATAO Group nos comprometemos a proveer{" "}
                    <strong>equipos médicos certificados</strong> que cumplan las más altas
                    exigencias de seguridad y desempeño.
                  </p>
                  <p>
                    Trabajamos bajo <strong>procesos documentados</strong> y{" "}
                    <strong>mejora continua</strong>, garantizando la trazabilidad completa
                    desde la selección de proveedores hasta la entrega final.
                  </p>
                  <p>
                    Nuestro objetivo es ser el{" "}
                    <strong>aliado de confianza</strong> del sector salud en el Perú,
                    cumpliendo normativas nacionales e internacionales.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Standards Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Estándares y Certificaciones
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Respaldos que garantizan nuestro compromiso con la calidad
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {standards.map((standard, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="h-16 w-16 rounded-full bg-gradient-primary flex items-center justify-center mx-auto mb-4">
                    <standard.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl">{standard.title}</CardTitle>
                  <CardDescription>{standard.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Badge
                    variant={standard.status === "Certificado" ? "default" : "secondary"}
                    className="text-sm"
                  >
                    {standard.status}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-8 max-w-3xl mx-auto">
            <Card className="bg-accent-light border-accent/30">
              <CardContent className="p-6 flex items-start space-x-4">
                <AlertCircle className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold mb-2">Espacio para Evidencias</p>
                  <p className="text-sm text-muted-foreground">
                    Los certificados y documentos de cumplimiento se encuentran disponibles
                    para consulta de nuestros clientes corporativos. Contacta a tu asesor
                    para obtener copias certificadas.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Quality Pillars */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Pilares de Nuestro Sistema de Calidad
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Controles en cada etapa del proceso
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {qualityPillars.map((pillar, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-secondary-light flex items-center justify-center mb-4">
                    <pillar.icon className="h-6 w-6 text-secondary" />
                  </div>
                  <CardTitle className="text-xl">{pillar.title}</CardTitle>
                  <CardDescription className="text-base">
                    {pillar.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Warranty Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Gestión de Garantías
              </h2>
              <p className="text-lg text-muted-foreground">
                Procedimiento claro y tiempos definidos
              </p>
            </div>
            <Card>
              <CardHeader>
                <CardTitle>Proceso de Atención de Garantías</CardTitle>
                <CardDescription>
                  Pasos que seguimos para resolver cualquier inconveniente
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {warrantyProcess.map((step, index) => (
                    <div key={index} className="flex items-center space-x-4">
                      <div className="h-10 w-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold flex-shrink-0">
                        {index + 1}
                      </div>
                      <p className="text-lg">{step}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-6 p-4 bg-primary-light rounded-lg">
                  <p className="font-semibold mb-2">Qué cubre nuestra garantía:</p>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Defectos de fabricación</li>
                    <li>• Mal funcionamiento sin uso inadecuado</li>
                    <li>• Piezas y mano de obra (según producto)</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Continuous Improvement */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <TrendingUp className="h-16 w-16 text-primary mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Mejora Continua
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Realizamos auditorías internas periódicas y medimos indicadores de
              desempeño para identificar oportunidades de optimización.
            </p>
            <p className="text-lg text-muted-foreground">
              Tu retroalimentación es esencial para seguir mejorando nuestros procesos
              y servicios.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Calidad;
