import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-8">Contactez-nous</h1>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Prêt à démarrer votre projet ? Contactez notre équipe d'experts pour discuter de vos besoins.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Discutons de votre projet</h2>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Prénom</label>
                    <Input placeholder="Votre prénom" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Nom</label>
                    <Input placeholder="Votre nom" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <Input type="email" placeholder="votre.email@exemple.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Entreprise</label>
                  <Input placeholder="Nom de votre entreprise" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <Textarea placeholder="Parlez-nous de votre projet..." rows={5} />
                </div>
                <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 text-lg font-medium">
                  Envoyer le message
                </Button>
              </form>
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Email</h3>
                <p className="text-gray-600">contact@nolia.fr</p>
                <p className="text-gray-600">hello@nolia.fr</p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Téléphone</h3>
                <p className="text-gray-600">+33 1 23 45 67 89</p>
                <p className="text-gray-600">Lun - Ven : 9h - 18h</p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Adresse</h3>
                <p className="text-gray-600">123 Avenue de l'Innovation</p>
                <p className="text-gray-600">75000 Paris, France</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
