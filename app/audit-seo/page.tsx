"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"

export default function AuditSEOPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-500 to-cyan-400 text-white py-16 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Audit SEO <span className="text-cyan-200">Gratuit</span>
          </h1>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Découvrez le potentiel de votre site web avec notre audit SEO complet et personnalisé
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <Card className="shadow-2xl border-0">
            <CardHeader className="text-center pb-8">
              <CardTitle className="text-3xl font-bold text-gray-900">Demandez votre audit SEO gratuit</CardTitle>
              <p className="text-gray-600 mt-4">
                Remplissez ce formulaire et recevez votre audit personnalisé sous 48h
              </p>
            </CardHeader>
            <CardContent>
              <form action="https://formspree.io/f/xdkogqpb" method="POST" className="space-y-8">
                {/* Informations personnelles */}
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold text-gray-900 border-b border-gray-200 pb-2">
                    Vos informations
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="prenom">Prénom *</Label>
                      <Input id="prenom" name="prenom" required className="h-12" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="nom">Nom *</Label>
                      <Input id="nom" name="nom" required className="h-12" />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input id="email" name="_replyto" type="email" required className="h-12" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="telephone">Téléphone</Label>
                      <Input id="telephone" name="telephone" type="tel" className="h-12" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="entreprise">Entreprise *</Label>
                    <Input id="entreprise" name="entreprise" required className="h-12" />
                  </div>
                </div>

                {/* Informations sur le site */}
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold text-gray-900 border-b border-gray-200 pb-2">
                    Informations sur votre site
                  </h3>
                  <div className="space-y-2">
                    <Label htmlFor="site-url">URL de votre site web *</Label>
                    <Input
                      id="site-url"
                      name="site_url"
                      type="url"
                      required
                      className="h-12"
                      placeholder="https://votre-site.com"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="secteur">Secteur d'activité *</Label>
                    <Select name="secteur" required>
                      <SelectTrigger className="h-12">
                        <SelectValue placeholder="Sélectionnez votre secteur" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="e-commerce">E-commerce</SelectItem>
                        <SelectItem value="services">Services</SelectItem>
                        <SelectItem value="immobilier">Immobilier</SelectItem>
                        <SelectItem value="sante">Santé</SelectItem>
                        <SelectItem value="finance">Finance</SelectItem>
                        <SelectItem value="technologie">Technologie</SelectItem>
                        <SelectItem value="restauration">Restauration</SelectItem>
                        <SelectItem value="education">Éducation</SelectItem>
                        <SelectItem value="autre">Autre</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="mots-cles">Mots-clés principaux que vous ciblez</Label>
                    <Input
                      id="mots-cles"
                      name="mots_cles"
                      className="h-12"
                      placeholder="Ex: agence web, développement site internet..."
                    />
                  </div>
                </div>

                {/* Objectifs SEO */}
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold text-gray-900 border-b border-gray-200 pb-2">
                    Vos objectifs SEO
                  </h3>
                  <div className="space-y-4">
                    <Label className="text-base font-medium">
                      Quels sont vos principaux objectifs ? (plusieurs choix possibles)
                    </Label>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="flex items-center space-x-2">
                        <Checkbox id="augmenter-trafic" name="objectifs" value="augmenter-trafic" />
                        <Label htmlFor="augmenter-trafic" className="text-sm font-normal">
                          Augmenter le trafic organique
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="ameliorer-positions" name="objectifs" value="ameliorer-positions" />
                        <Label htmlFor="ameliorer-positions" className="text-sm font-normal">
                          Améliorer les positions sur Google
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="augmenter-conversions" name="objectifs" value="augmenter-conversions" />
                        <Label htmlFor="augmenter-conversions" className="text-sm font-normal">
                          Augmenter les conversions
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="visibilite-locale" name="objectifs" value="visibilite-locale" />
                        <Label htmlFor="visibilite-locale" className="text-sm font-normal">
                          Améliorer la visibilité locale
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="refonte-seo" name="objectifs" value="refonte-seo" />
                        <Label htmlFor="refonte-seo" className="text-sm font-normal">
                          Refonte SEO du site
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="audit-concurrence" name="objectifs" value="audit-concurrence" />
                        <Label htmlFor="audit-concurrence" className="text-sm font-normal">
                          Analyser la concurrence
                        </Label>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Situation actuelle */}
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold text-gray-900 border-b border-gray-200 pb-2">
                    Situation actuelle
                  </h3>
                  <div className="space-y-2">
                    <Label htmlFor="trafic-mensuel">Trafic organique mensuel approximatif</Label>
                    <Select name="trafic_mensuel">
                      <SelectTrigger className="h-12">
                        <SelectValue placeholder="Sélectionnez votre trafic mensuel" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="0-1000">0 - 1 000 visiteurs</SelectItem>
                        <SelectItem value="1000-5000">1 000 - 5 000 visiteurs</SelectItem>
                        <SelectItem value="5000-10000">5 000 - 10 000 visiteurs</SelectItem>
                        <SelectItem value="10000-50000">10 000 - 50 000 visiteurs</SelectItem>
                        <SelectItem value="50000+">Plus de 50 000 visiteurs</SelectItem>
                        <SelectItem value="ne-sais-pas">Je ne sais pas</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="problemes-actuels">Quels problèmes rencontrez-vous actuellement ?</Label>
                    <Textarea
                      id="problemes-actuels"
                      name="problemes_actuels"
                      rows={4}
                      placeholder="Ex: Site mal positionné, trafic en baisse, concurrence forte..."
                    />
                  </div>
                </div>

                {/* Informations complémentaires */}
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold text-gray-900 border-b border-gray-200 pb-2">
                    Informations complémentaires
                  </h3>
                  <div className="space-y-2">
                    <Label htmlFor="budget-seo">Budget mensuel envisagé pour le SEO</Label>
                    <Select name="budget_seo">
                      <SelectTrigger className="h-12">
                        <SelectValue placeholder="Sélectionnez votre budget" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="500-1000">500€ - 1 000€</SelectItem>
                        <SelectItem value="1000-2500">1 000€ - 2 500€</SelectItem>
                        <SelectItem value="2500-5000">2 500€ - 5 000€</SelectItem>
                        <SelectItem value="5000+">Plus de 5 000€</SelectItem>
                        <SelectItem value="a-definir">À définir</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="delai-souhaite">Dans quel délai souhaitez-vous voir les premiers résultats ?</Label>
                    <Select name="delai_souhaite">
                      <SelectTrigger className="h-12">
                        <SelectValue placeholder="Sélectionnez un délai" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1-3-mois">1 à 3 mois</SelectItem>
                        <SelectItem value="3-6-mois">3 à 6 mois</SelectItem>
                        <SelectItem value="6-12-mois">6 à 12 mois</SelectItem>
                        <SelectItem value="plus-12-mois">Plus de 12 mois</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message-complementaire">Message complémentaire</Label>
                    <Textarea
                      id="message-complementaire"
                      name="message_complementaire"
                      rows={4}
                      placeholder="Parlez-nous de votre projet, vos attentes spécifiques..."
                    />
                  </div>
                </div>

                {/* Champs cachés pour Formspree */}
                <input type="hidden" name="_next" value="https://nolia.vercel.app/merci" />
                <input type="hidden" name="_cc" value="najwaborak2@gmail.com" />
                <input type="hidden" name="_subject" value="Nouvelle demande d'audit SEO gratuit" />

                <div className="pt-6">
                  <Button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 text-lg font-medium"
                  >
                    Demander mon audit SEO gratuit
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Ce que vous recevrez</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 text-2xl">📊</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Analyse complète</h3>
              <p className="text-gray-600">Audit technique, sémantique et de la concurrence</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-cyan-600 text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Recommandations</h3>
              <p className="text-gray-600">Plan d'action personnalisé et priorisé</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-700 text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Livraison rapide</h3>
              <p className="text-gray-600">Votre audit sous 48h maximum</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
