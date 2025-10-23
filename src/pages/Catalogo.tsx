import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Search, Filter, ShoppingCart, FileText } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Catalogo = () => {
  const [searchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState("");
  const categoryFilter = searchParams.get("categoria") || "all";

  const categories = [
    { name: "Todas las Categorías", value: "all" },
    { name: "Mobiliario Médico", value: "mobiliario" },
    { name: "Dispositivos de Medición", value: "dispositivos" },
    { name: "Enfermería", value: "enfermeria" },
    { name: "Rehabilitación", value: "rehabilitacion" },
    { name: "Ortesis y Prótesis", value: "ortesis" },
    { name: "Suministros Desechables", value: "suministros" },
    { name: "Ayuda Biomecánica", value: "ayuda-biomecanica" },
    { name: "Fisioterapia", value: "fisioterapia" },
    { name: "Material Médico", value: "material-medico" },
  ];

  // Mock products - en producción esto vendría de Odoo
  const products = [
    {
      id: 1,
      name: "Cama Clínica Manual 2 Posiciones",
      category: "mobiliario",
      sku: "CAM-001",
      price: "S/ 1,850",
      stock: true,
      registered: true,
      image: "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=400",
    },
    {
      id: 2,
      name: "Silla de Ruedas Estándar",
      category: "ayuda-biomecanica",
      sku: "SR-102",
      price: "S/ 450",
      stock: true,
      registered: true,
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400",
    },
    {
      id: 3,
      name: "Tensiómetro Digital de Brazo",
      category: "dispositivos",
      sku: "TEN-205",
      price: "S/ 120",
      stock: true,
      registered: true,
      image: "https://images.unsplash.com/photo-1615461066841-6116e61058f4?w=400",
    },
    {
      id: 4,
      name: "Camilla de Exploración",
      category: "mobiliario",
      sku: "CAM-050",
      price: "Consultar",
      stock: true,
      registered: true,
      image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=400",
    },
    {
      id: 5,
      name: "Set Instrumental Quirúrgico",
      category: "material-medico",
      sku: "INS-301",
      price: "S/ 2,500",
      stock: true,
      registered: true,
      image: "https://images.unsplash.com/photo-1582719366384-80fd9d60a402?w=400",
    },
    {
      id: 6,
      name: "Andador de Aluminio Plegable",
      category: "ayuda-biomecanica",
      sku: "AND-108",
      price: "S/ 180",
      stock: true,
      registered: true,
      image: "https://images.unsplash.com/photo-1579762594131-4c12e9e8c0a0?w=400",
    },
  ];

  const filteredProducts = products.filter((product) => {
    const matchesCategory = categoryFilter === "all" || product.category === categoryFilter;
    const matchesSearch =
      searchQuery === "" ||
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.sku.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-12 bg-gradient-primary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Catálogo de Productos
            </h1>
            <p className="text-lg text-white/90">
              Equipos médicos certificados para hospitales, clínicas y profesionales
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-8 bg-muted border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  placeholder="Buscar por nombre o código..."
                  className="pl-10 bg-background"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
            <div className="md:w-64">
              <Select defaultValue={categoryFilter}>
                <SelectTrigger className="bg-background">
                  <Filter className="h-4 w-4 mr-2" />
                  <SelectValue placeholder="Categoría" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((cat) => (
                    <SelectItem key={cat.value} value={cat.value}>
                      {cat.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="mt-4 flex items-center justify-between">
            <p className="text-sm text-muted-foreground">
              Mostrando {filteredProducts.length} productos
            </p>
            <Select defaultValue="relevance">
              <SelectTrigger className="w-48 bg-background">
                <SelectValue placeholder="Ordenar por" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="relevance">Relevancia</SelectItem>
                <SelectItem value="price-asc">Precio: Menor a Mayor</SelectItem>
                <SelectItem value="price-desc">Precio: Mayor a Menor</SelectItem>
                <SelectItem value="name">Nombre A-Z</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          {filteredProducts.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-xl text-muted-foreground">
                No se encontraron productos con los filtros seleccionados
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <Card key={product.id} className="hover:shadow-lg transition-all hover:-translate-y-1">
                  <CardHeader className="p-0">
                    <div className="aspect-square overflow-hidden rounded-t-lg">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover hover:scale-105 transition-transform"
                      />
                    </div>
                  </CardHeader>
                  <CardContent className="p-4">
                    <div className="flex gap-2 mb-2">
                      {product.stock && (
                        <Badge variant="secondary" className="text-xs">
                          En Stock
                        </Badge>
                      )}
                      {product.registered && (
                        <Badge variant="default" className="text-xs bg-secondary">
                          Reg. Sanitario
                        </Badge>
                      )}
                    </div>
                    <CardTitle className="text-lg mb-2 line-clamp-2">
                      {product.name}
                    </CardTitle>
                    <CardDescription>
                      SKU: {product.sku}
                    </CardDescription>
                    <p className="text-2xl font-bold text-primary mt-3">
                      {product.price}
                    </p>
                  </CardContent>
                  <CardFooter className="p-4 pt-0 flex gap-2">
                    <Button variant="retail" className="flex-1">
                      <ShoppingCart className="h-4 w-4 mr-2" />
                      Añadir
                    </Button>
                    <Button variant="outline" size="icon">
                      <FileText className="h-4 w-4" />
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Info Banner */}
      <section className="py-12 bg-primary-light">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              ¿Necesitas una cotización especial?
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Para compras corporativas, licitaciones o pedidos especiales, contáctanos
              directamente
            </p>
            <Button variant="b2b" size="lg">
              Solicitar Cotización B2B
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Catalogo;
