import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <section className="relative gradient-hero text-white py-32 px-4 overflow-hidden particles-bg">
        <div className="absolute inset-0 animate-zoom-in">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-secondary/80 to-primary/90"></div>
        </div>
        <div className="container mx-auto text-center relative z-10">
          <div className="animate-fade-in-up">
            <h1 className="text-7xl md:text-8xl font-bold mb-8 text-white">
              À propos de <span className="text-white">NOLIA</span>
            </h1>
            <p className="text-xl text-cyan-100 mb-12 max-w-4xl mx-auto leading-relaxed">
              NOLIA est une agence digitale innovante spécialisée dans l'acquisition et la transformation numérique.
              Nous accompagnons les entreprises dans leur croissance digitale grâce à des solutions technologiques de
              pointe et une expertise reconnue dans les domaines du marketing digital.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/#services-section">
                <Button className="bg-accent hover:bg-accent/90 text-white px-12 py-6 text-lg font-medium rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 hover-glow">
                  Découvrir nos services
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white hover:text-primary px-12 py-6 text-lg font-medium bg-transparent rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                >
                  Contactez-nous
                </Button>
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
      </section>

      <section className="py-32 bg-background relative">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <div className="space-y-8 animate-slide-in-left">
                <div>
                  <h2 className="text-6xl font-bold text-primary mb-6 text-gradient-primary">Notre histoire</h2>
                  <div className="w-24 h-1 bg-accent rounded-full mb-8"></div>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Fondée avec la vision de démocratiser l'accès aux technologies digitales avancées, NOLIA s'est
                  rapidement imposée comme un acteur incontournable de la transformation numérique. Depuis nos débuts,
                  nous avons accompagné plus de 500 entreprises dans leur évolution digitale.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Notre approche unique combine expertise technique, créativité et compréhension approfondie des enjeux
                  business pour créer des solutions qui génèrent un impact réel et mesurable sur la croissance de nos
                  clients.
                </p>

                <div className="space-y-8 pt-8">
                  <div className="flex items-center group">
                    <div className="timeline-dot w-6 h-6 bg-accent rounded-full mr-8 group-hover:scale-125 transition-transform duration-300"></div>
                    <div>
                      <h4 className="font-bold text-primary text-lg mb-2">2020 - Fondation</h4>
                      <p className="text-muted-foreground">Création de NOLIA avec une vision innovante du digital</p>
                    </div>
                  </div>
                  <div className="flex items-center group">
                    <div className="timeline-dot w-6 h-6 bg-secondary rounded-full mr-8 group-hover:scale-125 transition-transform duration-300"></div>
                    <div>
                      <h4 className="font-bold text-primary text-lg mb-2">2022 - Expansion</h4>
                      <p className="text-muted-foreground">Développement de notre expertise en IA et automation</p>
                    </div>
                  </div>
                  <div className="flex items-center group">
                    <div className="timeline-dot w-6 h-6 bg-chart-2 rounded-full mr-8 group-hover:scale-125 transition-transform duration-300"></div>
                    <div>
                      <h4 className="font-bold text-primary text-lg mb-2">2024 - Leadership</h4>
                      <p className="text-muted-foreground">500+ projets réalisés et reconnaissance du marché</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="animate-slide-in-right">
                <Card className="bg-card/80 backdrop-blur-sm border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 hover-lift">
                  <CardContent className="p-12">
                    <h3 className="text-4xl font-bold text-primary mb-10 text-center text-gradient-primary">
                      Nos chiffres clés
                    </h3>
                    <div className="grid grid-cols-2 gap-8">
                      <div className="text-center p-8 bg-gradient-to-br from-accent/10 to-secondary/10 rounded-3xl hover-lift">
                        <div className="text-5xl font-bold text-gradient-primary mb-4">500+</div>
                        <div className="text-muted-foreground font-medium text-lg">Projets réalisés</div>
                      </div>
                      <div className="text-center p-8 bg-gradient-to-br from-secondary/10 to-chart-2/10 rounded-3xl hover-lift">
                        <div className="text-5xl font-bold text-gradient-secondary mb-4">98%</div>
                        <div className="text-muted-foreground font-medium text-lg">Clients satisfaits</div>
                      </div>
                      <div className="text-center p-8 bg-gradient-to-br from-chart-2/10 to-chart-3/10 rounded-3xl hover-lift">
                        <div className="text-5xl font-bold text-gradient-primary mb-4">50+</div>
                        <div className="text-muted-foreground font-medium text-lg">Experts</div>
                      </div>
                      <div className="text-center p-8 bg-gradient-to-br from-chart-3/10 to-accent/10 rounded-3xl hover-lift">
                        <div className="text-5xl font-bold text-gradient-secondary mb-4">24/7</div>
                        <div className="text-muted-foreground font-medium text-lg">Support</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 bg-card/30 particles-bg">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20 animate-fade-in-up">
            <h2 className="text-6xl font-bold text-primary mb-6 text-gradient-primary">Notre expertise</h2>
            <div className="w-24 h-1 bg-accent rounded-full mx-auto mb-8"></div>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              NOLIA maîtrise l'ensemble de l'écosystème digital pour vous offrir des solutions complètes et
              performantes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group p-10 border-0 shadow-xl hover:shadow-2xl transition-all duration-500 bg-background/90 backdrop-blur-sm hover-lift animate-bounce-in">
              <CardContent className="pt-6">
                <div className="w-20 h-20 bg-gradient-to-br from-accent to-secondary rounded-3xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:animate-pulse-glow transition-all duration-300">
                  <span className="text-white text-3xl">🌐</span>
                </div>
                <h3 className="text-2xl font-bold text-primary mb-6 group-hover:text-accent transition-colors">
                  Développement Web
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Sites vitrines, e-commerce, applications web sur mesure avec les dernières technologies.
                </p>
              </CardContent>
            </Card>

            <Card
              className="group p-10 border-0 shadow-xl hover:shadow-2xl transition-all duration-500 bg-background/90 backdrop-blur-sm hover-lift animate-bounce-in"
              style={{ animationDelay: "0.1s" }}
            >
              <CardContent className="pt-6">
                <div className="w-20 h-20 bg-gradient-to-br from-chart-2 to-chart-3 rounded-3xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:animate-pulse-glow transition-all duration-300">
                  <span className="text-white text-3xl">📈</span>
                </div>
                <h3 className="text-2xl font-bold text-primary mb-6 group-hover:text-chart-2 transition-colors">
                  Marketing Digital
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  SEO, SEA, social media, email marketing pour maximiser votre visibilité en ligne.
                </p>
              </CardContent>
            </Card>

            <Card
              className="group p-10 border-0 shadow-xl hover:shadow-2xl transition-all duration-500 bg-background/90 backdrop-blur-sm hover-lift animate-bounce-in"
              style={{ animationDelay: "0.2s" }}
            >
              <CardContent className="pt-6">
                <div className="w-20 h-20 bg-gradient-to-br from-secondary to-chart-5 rounded-3xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:animate-pulse-glow transition-all duration-300">
                  <span className="text-white text-3xl">📊</span>
                </div>
                <h3 className="text-2xl font-bold text-primary mb-6 group-hover:text-secondary transition-colors">
                  Analytics & Data
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Analyse de données, tableaux de bord personnalisés et insights pour optimiser vos performances.
                </p>
              </CardContent>
            </Card>

            <Card
              className="group p-10 border-0 shadow-xl hover:shadow-2xl transition-all duration-500 bg-background/90 backdrop-blur-sm hover-lift animate-bounce-in"
              style={{ animationDelay: "0.3s" }}
            >
              <CardContent className="pt-6">
                <div className="w-20 h-20 bg-gradient-to-br from-chart-3 to-chart-4 rounded-3xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:animate-pulse-glow transition-all duration-300">
                  <span className="text-white text-3xl">🤖</span>
                </div>
                <h3 className="text-2xl font-bold text-primary mb-6 group-hover:text-chart-3 transition-colors">
                  Intelligence Artificielle
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Solutions IA personnalisées, chatbots intelligents et automatisation des processus.
                </p>
              </CardContent>
            </Card>

            <Card
              className="group p-10 border-0 shadow-xl hover:shadow-2xl transition-all duration-500 bg-background/90 backdrop-blur-sm hover-lift animate-bounce-in"
              style={{ animationDelay: "0.4s" }}
            >
              <CardContent className="pt-6">
                <div className="w-20 h-20 bg-gradient-to-br from-chart-4 to-destructive rounded-3xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:animate-pulse-glow transition-all duration-300">
                  <span className="text-white text-3xl">⚙️</span>
                </div>
                <h3 className="text-2xl font-bold text-primary mb-6 group-hover:text-chart-4 transition-colors">
                  CRM & Automation
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Systèmes CRM sur mesure et automatisation des processus métier pour optimiser votre productivité.
                </p>
              </CardContent>
            </Card>

            <Card
              className="group p-10 border-0 shadow-xl hover:shadow-2xl transition-all duration-500 bg-background/90 backdrop-blur-sm hover-lift animate-bounce-in"
              style={{ animationDelay: "0.5s" }}
            >
              <CardContent className="pt-6">
                <div className="w-20 h-20 bg-gradient-to-br from-chart-1 to-accent rounded-3xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:animate-pulse-glow transition-all duration-300">
                  <span className="text-white text-3xl">🎓</span>
                </div>
                <h3 className="text-2xl font-bold text-primary mb-6 group-hover:text-chart-1 transition-colors">
                  Formation
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Formations personnalisées pour maîtriser les outils digitaux et développer vos compétences.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-32 bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-card/30 to-accent/5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-20 animate-fade-in-up">
            <h2 className="text-6xl font-bold text-primary mb-6 text-gradient-primary">Nos valeurs fondamentales</h2>
            <div className="w-24 h-1 bg-accent rounded-full mx-auto mb-8"></div>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Chez NOLIA, nous croyons en l'innovation, l'excellence et la collaboration pour créer des solutions
              digitales exceptionnelles.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="group text-center p-12 border-0 shadow-xl hover:shadow-2xl transition-all duration-500 bg-background/90 backdrop-blur-sm hover-lift animate-scale-in">
              <CardContent className="pt-6">
                <div className="w-24 h-24 bg-gradient-to-br from-accent to-secondary rounded-full flex items-center justify-center mx-auto mb-10 group-hover:scale-110 group-hover:animate-pulse-glow transition-all duration-300">
                  <span className="text-white text-4xl">💡</span>
                </div>
                <h3 className="text-3xl font-bold text-primary mb-8 group-hover:text-accent transition-colors">
                  Innovation
                </h3>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  Nous utilisons les dernières technologies pour créer des solutions avant-gardistes.
                </p>
              </CardContent>
            </Card>

            <Card
              className="group text-center p-12 border-0 shadow-xl hover:shadow-2xl transition-all duration-500 bg-background/90 backdrop-blur-sm hover-lift animate-scale-in"
              style={{ animationDelay: "0.1s" }}
            >
              <CardContent className="pt-6">
                <div className="w-24 h-24 bg-gradient-to-br from-chart-2 to-chart-3 rounded-full flex items-center justify-center mx-auto mb-10 group-hover:scale-110 group-hover:animate-pulse-glow transition-all duration-300">
                  <span className="text-white text-4xl">⭐</span>
                </div>
                <h3 className="text-3xl font-bold text-primary mb-8 group-hover:text-chart-2 transition-colors">
                  Excellence
                </h3>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  Nous visons l'excellence dans chaque projet et dépassons les attentes de nos clients.
                </p>
              </CardContent>
            </Card>

            <Card
              className="group text-center p-12 border-0 shadow-xl hover:shadow-2xl transition-all duration-500 bg-background/90 backdrop-blur-sm hover-lift animate-scale-in"
              style={{ animationDelay: "0.2s" }}
            >
              <CardContent className="pt-6">
                <div className="w-24 h-24 bg-gradient-to-br from-secondary to-chart-5 rounded-full flex items-center justify-center mx-auto mb-10 group-hover:scale-110 group-hover:animate-pulse-glow transition-all duration-300">
                  <span className="text-white text-4xl">🤝</span>
                </div>
                <h3 className="text-3xl font-bold text-primary mb-8 group-hover:text-secondary transition-colors">
                  Collaboration
                </h3>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  Nous travaillons en étroite collaboration avec nos clients pour atteindre leurs objectifs.
                </p>
              </CardContent>
            </Card>

            <Card
              className="group text-center p-12 border-0 shadow-xl hover:shadow-2xl transition-all duration-500 bg-background/90 backdrop-blur-sm hover-lift animate-scale-in"
              style={{ animationDelay: "0.3s" }}
            >
              <CardContent className="pt-6">
                <div className="w-24 h-24 bg-gradient-to-br from-chart-3 to-chart-4 rounded-full flex items-center justify-center mx-auto mb-10 group-hover:scale-110 group-hover:animate-pulse-glow transition-all duration-300">
                  <span className="text-white text-4xl">🎯</span>
                </div>
                <h3 className="text-3xl font-bold text-primary mb-8 group-hover:text-chart-3 transition-colors">
                  Résultats
                </h3>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  Nous nous concentrons sur des résultats mesurables et un retour sur investissement optimal.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-32 bg-card/30 particles-bg">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <div className="space-y-8 animate-slide-in-left">
                <div>
                  <h2 className="text-6xl font-bold text-primary mb-6 text-gradient-primary">Notre équipe</h2>
                  <div className="w-24 h-1 bg-accent rounded-full mb-8"></div>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  L'équipe NOLIA réunit des experts passionnés par le digital : développeurs full-stack, spécialistes
                  marketing, designers UX/UI, consultants en transformation digitale et experts en intelligence
                  artificielle.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Chaque membre de notre équipe apporte son expertise unique pour créer des solutions innovantes et
                  performantes, adaptées aux besoins spécifiques de chaque client.
                </p>
                <div className="space-y-8 pt-8">
                  <div className="flex items-center group">
                    <div className="w-6 h-6 bg-gradient-to-r from-accent to-secondary rounded-full mr-8 group-hover:scale-125 transition-transform duration-300"></div>
                    <span className="text-primary text-lg font-medium">
                      Développeurs experts en technologies modernes
                    </span>
                  </div>
                  <div className="flex items-center group">
                    <div className="w-6 h-6 bg-gradient-to-r from-chart-2 to-chart-3 rounded-full mr-8 group-hover:scale-125 transition-transform duration-300"></div>
                    <span className="text-primary text-lg font-medium">Spécialistes marketing digital certifiés</span>
                  </div>
                  <div className="flex items-center group">
                    <div className="w-6 h-6 bg-gradient-to-r from-secondary to-chart-5 rounded-full mr-8 group-hover:scale-125 transition-transform duration-300"></div>
                    <span className="text-primary text-lg font-medium">Designers UX/UI créatifs et expérimentés</span>
                  </div>
                  <div className="flex items-center group">
                    <div className="w-6 h-6 bg-gradient-to-r from-chart-3 to-chart-4 rounded-full mr-8 group-hover:scale-125 transition-transform duration-300"></div>
                    <span className="text-primary text-lg font-medium">Consultants en transformation digitale</span>
                  </div>
                </div>
              </div>

              <div className="animate-slide-in-right">
                <Card className="bg-background/90 backdrop-blur-sm border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 hover-lift">
                  <CardContent className="p-12">
                    <h3 className="text-4xl font-bold text-primary mb-12 text-center text-gradient-primary">
                      Notre méthodologie
                    </h3>
                    <div className="space-y-10">
                      <div className="flex items-start group">
                        <div className="w-16 h-16 bg-gradient-to-br from-accent to-secondary rounded-3xl flex items-center justify-center mr-8 mt-1 group-hover:scale-110 group-hover:animate-pulse-glow transition-all duration-300">
                          <span className="text-white font-bold text-xl">1</span>
                        </div>
                        <div>
                          <h4 className="font-bold text-primary mb-4 text-xl">Analyse & Stratégie</h4>
                          <p className="text-muted-foreground leading-relaxed">
                            Audit complet de votre situation actuelle et définition d'une stratégie sur mesure.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start group">
                        <div className="w-16 h-16 bg-gradient-to-br from-chart-2 to-chart-3 rounded-3xl flex items-center justify-center mr-8 mt-1 group-hover:scale-110 group-hover:animate-pulse-glow transition-all duration-300">
                          <span className="text-white font-bold text-xl">2</span>
                        </div>
                        <div>
                          <h4 className="font-bold text-primary mb-4 text-xl">Conception & Design</h4>
                          <p className="text-muted-foreground leading-relaxed">
                            Création de maquettes et prototypes pour valider l'expérience utilisateur.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start group">
                        <div className="w-16 h-16 bg-gradient-to-br from-secondary to-chart-5 rounded-3xl flex items-center justify-center mr-8 mt-1 group-hover:scale-110 group-hover:animate-pulse-glow transition-all duration-300">
                          <span className="text-white font-bold text-xl">3</span>
                        </div>
                        <div>
                          <h4 className="font-bold text-primary mb-4 text-xl">Développement</h4>
                          <p className="text-muted-foreground leading-relaxed">
                            Développement agile avec tests réguliers et validation continue.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start group">
                        <div className="w-16 h-16 bg-gradient-to-br from-chart-3 to-chart-4 rounded-3xl flex items-center justify-center mr-8 mt-1 group-hover:scale-110 group-hover:animate-pulse-glow transition-all duration-300">
                          <span className="text-white font-bold text-xl">4</span>
                        </div>
                        <div>
                          <h4 className="font-bold text-primary mb-4 text-xl">Lancement & Suivi</h4>
                          <p className="text-muted-foreground leading-relaxed">
                            Mise en ligne, formation et accompagnement pour optimiser les performances.
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-secondary/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto text-center animate-fade-in-up">
            <h2 className="text-6xl font-bold text-primary mb-8 text-gradient-primary">Notre mission</h2>
            <div className="w-24 h-1 bg-accent rounded-full mx-auto mb-12"></div>
            <p className="text-xl text-muted-foreground mb-16 leading-relaxed">
              Transformer la présence digitale de nos clients en moteur de croissance durable. Nous combinons
              créativité, technologie et stratégie pour créer des expériences digitales exceptionnelles qui génèrent des
              résultats concrets et durables.
            </p>
            <Card className="bg-gradient-to-br from-card/80 via-accent/5 to-secondary/10 backdrop-blur-sm border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 hover-lift">
              <CardContent className="p-16">
                <p className="text-2xl text-primary italic leading-relaxed font-medium mb-12">
                  "Chez NOLIA, chaque projet est une opportunité de repousser les limites du possible et de créer des
                  solutions qui marquent la différence dans l'univers digital."
                </p>
                <div className="flex justify-center mb-12">
                  <div className="w-20 h-1 bg-accent rounded-full"></div>
                </div>
                <Link href="/contact">
                  <Button className="bg-accent hover:bg-accent/90 text-white px-16 py-6 text-xl font-medium rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 hover-glow">
                    Rejoignez-nous
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
