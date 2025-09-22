import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-16 md:py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 md:mb-8 px-4 sm:px-0">
            Contactez-nous
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-blue-100 mb-6 md:mb-8 max-w-xs sm:max-w-2xl md:max-w-3xl mx-auto px-4 sm:px-0">
            Prêt à démarrer votre projet ? Contactez notre équipe d'experts pour discuter de vos besoins.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 md:mb-8">Discutons de votre projet</h2>
              <form action="https://formspree.io/f/xkgvdzkd" method="POST" className="space-y-4 md:space-y-6">
                <input type="hidden" name="_replyto" value="najwaborak2@gmail.com" />
                <input type="hidden" name="_next" value="https://nolia.fr/contact?success=true" />
                <input type="hidden" name="_subject" value="Nouveau message depuis la page Contact - NOLIA" />
                <input type="hidden" name="_cc" value="najwaborak2@gmail.com" />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Prénom</label>
                    <Input name="prenom" placeholder="Votre prénom" required className="touch-manipulation" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Nom</label>
                    <Input name="nom" placeholder="Votre nom" required className="touch-manipulation" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <Input
                    type="email"
                    name="email"
                    placeholder="votre.email@exemple.com"
                    required
                    className="touch-manipulation"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Entreprise</label>
                  <Input name="entreprise" placeholder="Nom de votre entreprise" className="touch-manipulation" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <Textarea
                    name="message"
                    placeholder="Parlez-nous de votre projet..."
                    rows={5}
                    required
                    className="touch-manipulation"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 md:py-3 text-base md:text-lg font-medium touch-manipulation"
                >
                  Envoyer le message
                </Button>
              </form>
            </div>

            <div className="space-y-6 md:space-y-8">
              <div>
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3 md:mb-4">Email</h3>
                <p className="text-gray-600 text-sm md:text-base">contact@nolia.fr</p>
                <p className="text-gray-600 text-sm md:text-base">hello@nolia.fr</p>
              </div>

              <div>
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3 md:mb-4">Téléphone</h3>
                <p className="text-gray-600 text-sm md:text-base">+33 1 23 45 67 89</p>
                <p className="text-gray-600 text-sm md:text-base">Lun - Ven : 9h - 18h</p>
              </div>

              <div>
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3 md:mb-4">Adresse</h3>
                <p className="text-gray-600 text-sm md:text-base">123 Avenue de l'Innovation</p>
                <p className="text-gray-600 text-sm md:text-base">75000 Paris, France</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
