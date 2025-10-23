import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="h-10 w-10 rounded-lg bg-gradient-primary flex items-center justify-center">
                <span className="text-xl font-bold text-primary-foreground">AG</span>
              </div>
              <div>
                <span className="text-lg font-bold text-primary">ATAO Group</span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Equipos médicos confiables para empresas, gobierno y profesionales en todo el Perú.
            </p>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>RUC: 20XXXXXXXXX</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/nosotros" className="text-muted-foreground hover:text-primary transition-colors">
                  Nosotros
                </Link>
              </li>
              <li>
                <Link to="/servicios" className="text-muted-foreground hover:text-primary transition-colors">
                  Servicios
                </Link>
              </li>
              <li>
                <Link to="/calidad" className="text-muted-foreground hover:text-primary transition-colors">
                  Calidad
                </Link>
              </li>
              <li>
                <Link to="/catalogo" className="text-muted-foreground hover:text-primary transition-colors">
                  Catálogo
                </Link>
              </li>
              <li>
                <Link to="/contacto" className="text-muted-foreground hover:text-primary transition-colors">
                  Contáctanos
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">Contacto</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                <span className="text-muted-foreground">
                  Lima, Perú - Cobertura Nacional
                </span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                <a href="tel:+51999999999" className="text-muted-foreground hover:text-primary transition-colors">
                  +51 999 999 999
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-primary flex-shrink-0" />
                <a href="mailto:contacto@ataogroup.pe" className="text-muted-foreground hover:text-primary transition-colors">
                  contacto@ataogroup.pe
                </a>
              </li>
              <li className="flex items-start space-x-2">
                <Clock className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                <span className="text-muted-foreground">
                  Lun - Vie: 8:00 AM - 6:00 PM<br />
                  Sáb: 9:00 AM - 1:00 PM
                </span>
              </li>
            </ul>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="font-semibold mb-4">Certificaciones</h3>
            <div className="space-y-3">
              <div className="bg-background p-3 rounded-lg border">
                <p className="text-xs text-muted-foreground">Registros Sanitarios</p>
                <p className="text-sm font-semibold text-primary">DIGEMID</p>
              </div>
              <div className="bg-background p-3 rounded-lg border">
                <p className="text-xs text-muted-foreground">Calidad Certificada</p>
                <p className="text-sm font-semibold text-primary">ISO 9001</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-muted-foreground">
              © {currentYear} ATAO Group SAC. Todos los derechos reservados.
            </p>
            <div className="flex space-x-4 text-sm">
              <Link to="/terminos" className="text-muted-foreground hover:text-primary transition-colors">
                Términos
              </Link>
              <Link to="/privacidad" className="text-muted-foreground hover:text-primary transition-colors">
                Privacidad
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
