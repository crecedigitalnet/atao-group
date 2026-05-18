import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { MapPin, Phone, Mail, Clock, MessageCircle, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contacto = () => {
  const [searchParams] = useSearchParams();
  const { toast } = useToast();
  const tipoInicial = searchParams.get("tipo") || "consulta";
  
  const [formData, setFormData] = useState({
    tipo: tipoInicial,
    nombre: "",
    email: "",
    telefono: "",
    empresa: "",
    ruc: "",
    mensaje: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Mensaje enviado",
      description: "Nos pondremos en contacto contigo en las próximas 24 horas.",
    });
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-12 bg-gradient-primary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Contáctanos</h1>
            <p className="text-lg text-white/90">
              Estamos aquí para ayudarte. Elige el tipo de consulta y nos comunicaremos
              contigo a la brevedad.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Formulario de Contacto</CardTitle>
                  <CardDescription>
                    Completa tus datos y nos pondremos en contacto contigo
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Tipo de Consulta */}
                    <div className="space-y-2">
                      <Label htmlFor="tipo">Tipo de Consulta *</Label>
                      <Select
                        value={formData.tipo}
                        onValueChange={(value) => handleChange("tipo", value)}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Selecciona..." />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="cotizacion">
                            Cotización B2B/B2G
                          </SelectItem>
                          <SelectItem value="soporte">
                            Soporte / Garantía
                          </SelectItem>
                          <SelectItem value="consulta">
                            Consulta General
                          </SelectItem>
                          <SelectItem value="retail">
                            Consulta Retail
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="nombre">Nombre Completo *</Label>
                        <Input
                          id="nombre"
                          placeholder="Tu nombre"
                          value={formData.nombre}
                          onChange={(e) => handleChange("nombre", e.target.value)}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="telefono">Teléfono *</Label>
                        <Input
                          id="telefono"
                          type="tel"
                          placeholder="+51 986 722 623"
                          value={formData.telefono}
                          onChange={(e) => handleChange("telefono", e.target.value)}
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Correo Electrónico *</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="tu@email.com"
                        value={formData.email}
                        onChange={(e) => handleChange("email", e.target.value)}
                        required
                      />
                    </div>

                    {/* Campos adicionales para B2B */}
                    {(formData.tipo === "cotizacion" || formData.tipo === "soporte") && (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="empresa">Empresa *</Label>
                          <Input
                            id="empresa"
                            placeholder="Nombre de la empresa"
                            value={formData.empresa}
                            onChange={(e) => handleChange("empresa", e.target.value)}
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="ruc">RUC *</Label>
                          <Input
                            id="ruc"
                            placeholder="20XXXXXXXXX"
                            value={formData.ruc}
                            onChange={(e) => handleChange("ruc", e.target.value)}
                            required
                          />
                        </div>
                      </div>
                    )}

                    <div className="space-y-2">
                      <Label htmlFor="mensaje">
                        {formData.tipo === "cotizacion"
                          ? "Detalle de Requerimiento *"
                          : formData.tipo === "soporte"
                          ? "Descripción del Problema *"
                          : "Mensaje *"}
                      </Label>
                      <Textarea
                        id="mensaje"
                        placeholder={
                          formData.tipo === "cotizacion"
                            ? "Lista de productos, cantidades, especificaciones..."
                            : formData.tipo === "soporte"
                            ? "Describe el problema, incluye N° de serie/lote si es posible"
                            : "Cuéntanos en qué podemos ayudarte"
                        }
                        rows={6}
                        value={formData.mensaje}
                        onChange={(e) => handleChange("mensaje", e.target.value)}
                        required
                      />
                    </div>

                    <Button
                      type="submit"
                      variant={formData.tipo === "cotizacion" ? "b2b" : "default"}
                      size="lg"
                      className="w-full"
                    >
                      <Send className="h-5 w-5 mr-2" />
                      Enviar Mensaje
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              {/* Contact Details */}
              <Card>
                <CardHeader>
                  <CardTitle>Información de Contacto</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold">Dirección</p>
                      <p className="text-sm text-muted-foreground">
                        Lima, Perú
                        <br />
                        Cobertura Nacional
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Phone className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold">Teléfono</p>
                      <a
                        href="tel:+51986722623"
                        className="text-sm text-muted-foreground hover:text-primary"
                      >
                        +51 986 722 623
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Mail className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold">Email</p>
                      <a
                        href="mailto:contacto@ataogroup.pe"
                        className="text-sm text-muted-foreground hover:text-primary"
                      >
                        contacto@ataogroup.pe
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Clock className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold">Horario</p>
                      <p className="text-sm text-muted-foreground">
                        Lun - Vie: 8:00 AM - 6:00 PM
                        <br />
                        Sáb: 9:00 AM - 1:00 PM
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* WhatsApp */}
              <Card className="bg-secondary-light border-secondary/30">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <MessageCircle className="h-5 w-5 mr-2" />
                    WhatsApp Oficial
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    ¿Necesitas respuesta inmediata? Contáctanos por WhatsApp
                  </p>
                  <a
                    href="https://wa.me/51999999999"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="secondary" className="w-full">
                      <MessageCircle className="h-5 w-5 mr-2" />
                      Chatear Ahora
                    </Button>
                  </a>
                </CardContent>
              </Card>

              {/* SLA */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Tiempo de Respuesta</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Cotizaciones B2B:</span>
                    <span className="font-semibold">24-48 horas</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Soporte Técnico:</span>
                    <span className="font-semibold">24 horas</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Consultas Generales:</span>
                    <span className="font-semibold">48 horas</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contacto;
