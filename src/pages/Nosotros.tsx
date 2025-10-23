import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Users, Building, Award, TrendingUp, Heart } from "lucide-react";
import warehouseImage from "@/assets/warehouse.jpg";

const Nosotros = () => {
  const timeline = [
    { year: "2015", event: "Fundación de ATAO Group" },
    { year: "2017", event: "Expansión a cobertura nacional" },
    { year: "2019", event: "Certificación ISO 9001" },
    { year: "2021", event: "Más de 500 clientes atendidos" },
    { year: "2024", event: "Líderes en equipamiento médico B2B/B2G" },
  ];

  const team = [
    {
      area: "Comité Técnico",
      description: "Especialistas en normativas y selección de equipamiento médico",
      icon: Award,
    },
    {
      area: "Área Comercial",
      description: "Asesores dedicados para empresas y gobierno",
      icon: Users,
    },
    {
      area: "Operaciones y Logística",
      description: "Garantizamos entregas oportunas en todo el país",
      icon: Building,
    },
  ];

  const coverage = [
    "Lima y Callao",
    "Norte: Piura, Chiclayo, Trujillo",
    "Centro: Huancayo, Huánuco",
    "Sur: Arequipa, Cusco, Tacna",
    "Oriente: Iquitos, Pucallpa",
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-primary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-4 bg-white/20 text-white border-white/30">
              <Heart className="mr-2 h-4 w-4" />
              Nuestra Historia
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Aliados de Confianza para Profesionales de la Salud
            </h1>
            <p className="text-xl text-white/90">
              Más de una década comprometidos con la excelencia en equipamiento médico y
              atención personalizada
            </p>
          </div>
        </div>
      </section>

      {/* Purpose Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Nuestro Propósito
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                En ATAO Group, nos dedicamos a ser el aliado estratégico de instituciones
                de salud, empresas, gobierno y profesionales médicos en todo el Perú.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                Proveemos equipamiento médico certificado con el más alto estándar de
                calidad, respaldado por asesoría técnica especializada y un servicio de
                distribución nacional que garantiza entregas oportunas.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center space-x-2">
                  <TrendingUp className="h-5 w-5 text-primary" />
                  <span className="font-semibold">+500 Clientes Satisfechos</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Award className="h-5 w-5 text-secondary" />
                  <span className="font-semibold">Certificación ISO 9001</span>
                </div>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img
                src={warehouseImage}
                alt="Almacén ATAO Group"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Nuestra Trayectoria
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Una década de crecimiento y compromiso con la salud en el Perú
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary/20" />
              
              {timeline.map((item, index) => (
                <div
                  key={index}
                  className={`relative flex items-center mb-8 ${
                    index % 2 === 0 ? "justify-start" : "justify-end"
                  }`}
                >
                  <Card
                    className={`w-5/12 ${
                      index % 2 === 0 ? "mr-auto" : "ml-auto"
                    }`}
                  >
                    <CardHeader>
                      <CardTitle className="text-2xl text-primary">
                        {item.year}
                      </CardTitle>
                      <CardDescription className="text-base">
                        {item.event}
                      </CardDescription>
                    </CardHeader>
                  </Card>
                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Coverage Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Cobertura Nacional
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Presencia en las principales ciudades del Perú
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {coverage.map((region, index) => (
              <Card key={index}>
                <CardContent className="p-6 flex items-center space-x-3">
                  <MapPin className="h-6 w-6 text-primary flex-shrink-0" />
                  <span className="font-medium">{region}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Nuestro Equipo
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Profesionales comprometidos con la excelencia en el servicio
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="h-16 w-16 rounded-full bg-gradient-primary flex items-center justify-center mx-auto mb-4">
                    <member.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl">{member.area}</CardTitle>
                  <CardDescription>{member.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Infrastructure Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Infraestructura y Logística
              </h2>
              <p className="text-lg text-muted-foreground">
                Instalaciones modernas y procesos optimizados
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardHeader className="text-center">
                  <CardTitle className="text-3xl text-primary">1,500m²</CardTitle>
                  <CardDescription>Almacén climatizado</CardDescription>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader className="text-center">
                  <CardTitle className="text-3xl text-secondary">24-72h</CardTitle>
                  <CardDescription>Tiempo de entrega estándar</CardDescription>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader className="text-center">
                  <CardTitle className="text-3xl text-accent">98%</CardTitle>
                  <CardDescription>SLA de despacho cumplido</CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Nosotros;
