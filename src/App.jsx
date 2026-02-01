import './index.css'

function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">
      {/* Navigation */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-5xl mx-auto px-4 py-4 flex justify-between items-center">
          <a href="/" className="text-xl font-bold text-teal-700">RegnskabsHjælpen.dk</a>
          <div className="hidden md:flex space-x-6">
            <a href="/" className="hover:text-teal-600 transition-colors">Forside</a>
            <a href="#guide" className="hover:text-teal-600 transition-colors">Guide</a>
            <a href="#sammenlign" className="hover:text-teal-600 transition-colors">Sammenlign</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="bg-gradient-to-br from-teal-700 to-teal-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
            Gør bogføring let med det rette program
          </h1>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Vi har sammenlignet de bedste danske regnskabssystemer til selvstændige og små virksomheder.
          </p>
          <a 
            href="#sammenlign" 
            className="inline-block bg-white text-teal-700 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg"
          >
            Se sammenligning →
          </a>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-16">
        {/* Comparison Section */}
        <section id="sammenlign" className="mb-16">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold mb-2">Populære regnskabsprogrammer</h2>
            <p className="text-gray-600 mb-8">Opdateret Februar 2026 - Baseret på pris, brugervenlighed og funktioner</p>
            
            <div className="space-y-6">
              {/* Provider 1 */}
              <article className="flex flex-col md:flex-row md:items-center justify-between border border-gray-200 rounded-lg p-6 hover:border-teal-300 hover:shadow-md transition-all">
                <div className="mb-4 md:mb-0">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="font-bold text-xl">Billy Regnskabsprogram</h3>
                    <span className="bg-teal-100 text-teal-800 text-xs font-semibold px-2 py-1 rounded">Mest populær</span>
                  </div>
                  <p className="text-gray-600 mb-2">Brugervenligt og perfekt til små virksomheder og selvstændige.</p>
                  <ul className="text-sm text-gray-500 space-y-1">
                    <li>✓ Gratis version tilgængelig</li>
                    <li>✓ Automatisk bankafstemning</li>
                    <li>✓ Nem fakturering</li>
                  </ul>
                </div>
                <div className="text-left md:text-right">
                  <span className="block text-2xl font-bold text-teal-600 mb-1">Fra 0 DKK</span>
                  <span className="block text-sm text-gray-500 mb-3">Gratis version</span>
                  <a 
                    href="https://www.partner-ads.com/dk/klikads.php?id=6248&builtin=1" 
                    rel="noopener sponsored"
                    className="inline-block bg-teal-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-teal-700 transition-colors"
                  >
                    Prøv gratis →
                  </a>
                </div>
              </article>

              {/* Provider 2 */}
              <article className="flex flex-col md:flex-row md:items-center justify-between border border-gray-200 rounded-lg p-6 hover:border-teal-300 hover:shadow-md transition-all">
                <div className="mb-4 md:mb-0">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="font-bold text-xl">Dinero</h3>
                    <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-1 rounded">100% gratis</span>
                  </div>
                  <p className="text-gray-600 mb-2">Automatiseret bogføring til iværksættere. Altid gratis.</p>
                  <ul className="text-sm text-gray-500 space-y-1">
                    <li>✓ Helt gratis - ingen skjulte priser</li>
                    <li>✓ Automatisk bogføring</li>
                    <li>✓ Integration med banker</li>
                  </ul>
                </div>
                <div className="text-left md:text-right">
                  <span className="block text-2xl font-bold text-green-600 mb-1">Gratis</span>
                  <span className="block text-sm text-gray-500 mb-3">For altid</span>
                  <a 
                    href="https://www.partner-ads.com/dk/klikads.php?id=5513&builtin=1" 
                    rel="noopener sponsored"
                    className="inline-block bg-teal-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-teal-700 transition-colors"
                  >
                    Opret konto →
                  </a>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* Guide Section */}
        <section id="guide" className="mb-16">
          <article className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold mb-6">Sådan vælger du det rigtige regnskabsprogram</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Det rigtige <strong>regnskabsprogram</strong> kan spare dig mange timer og hovedpine. Men med så mange muligheder kan det være svært at vælge. Her er hvad du skal overveje.
            </p>
            
            <h3 className="text-2xl font-bold mt-8 mb-4">Hvad skal et godt regnskabsprogram kunne?</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• <strong>Fakturering</strong> - Opret og send fakturaer hurtigt</li>
              <li>• <strong>Bogføring</strong> - Automatisk eller manuel bogføring af bilag</li>
              <li>• <strong>Bankafstemning</strong> - Synkroniser med din bankkonto</li>
              <li>• <strong>Momsafregning</strong> - Beregn og indberett moms</li>
              <li>• <strong>Rapportering</strong> - Få overblik over din økonomi</li>
            </ul>

            <h3 className="text-2xl font-bold mt-8 mb-4">Gratis vs betalt regnskabsprogram</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Flere programmer som <strong>Dinero</strong> er helt gratis og dækker de fleste behov for små virksomheder. Betalte løsninger som <strong>e-conomic</strong> giver flere avancerede funktioner til større virksomheder.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Start med en gratis løsning og opgradér kun hvis du har brug for mere funktionalitet.
            </p>

            <h3 className="text-2xl font-bold mt-8 mb-4">Lovkrav til bogføring i Danmark</h3>
            <p className="text-gray-700 leading-relaxed">
              Fra 2024 skal alle virksomheder i Danmark bogføre digitalt. Det betyder at du skal bruge et godkendt bogføringssystem der kan arkivere bilag i 5 år.
            </p>
          </article>
        </section>

        {/* FAQ Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Ofte stillede spørgsmål</h2>
          <div className="space-y-4">
            <details className="bg-white rounded-lg shadow p-6 cursor-pointer group">
              <summary className="font-bold text-lg flex justify-between items-center">
                Kan jeg bruge et gratis regnskabsprogram?
                <span className="text-teal-600 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-4 text-gray-600">
                Ja, programmer som Dinero er 100% gratis og dækker alle basale behov. De fleste selvstændige og små virksomheder klarer sig fint med en gratis løsning.
              </p>
            </details>
            <details className="bg-white rounded-lg shadow p-6 cursor-pointer group">
              <summary className="font-bold text-lg flex justify-between items-center">
                Skal jeg bruge en revisor?
                <span className="text-teal-600 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-4 text-gray-600">
                Små virksomheder under revisionspligten behøver ikke revisor. Med et godt regnskabsprogram kan du selv klare bogføringen og årsrapporten.
              </p>
            </details>
            <details className="bg-white rounded-lg shadow p-6 cursor-pointer group">
              <summary className="font-bold text-lg flex justify-between items-center">
                Hvad er digital bogføringspligt?
                <span className="text-teal-600 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-4 text-gray-600">
                Fra 2024 skal alle danske virksomheder bogføre digitalt i et godkendt system. Alle programmer på denne side opfylder kravene.
              </p>
            </details>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="font-bold text-white mb-4">RegnskabsHjælpen.dk</h4>
              <p className="text-sm">
                Vi hjælper danske virksomheder med at finde det bedste regnskabsprogram.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Links</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="/" className="hover:text-white transition-colors">Forside</a></li>
                <li><a href="#guide" className="hover:text-white transition-colors">Guide</a></li>
                <li><a href="#sammenlign" className="hover:text-white transition-colors">Sammenlign</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Information</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="/privatlivspolitik" className="hover:text-white transition-colors">Privatlivspolitik</a></li>
                <li><a href="/om-os" className="hover:text-white transition-colors">Om os</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-sm">
            <p>&copy; 2026 RegnskabsHjælpen.dk - Alle rettigheder forbeholdes</p>
            <p className="mt-2 text-gray-500">
              Denne side indeholder affiliate links. Vi modtager provision ved køb gennem vores links.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
