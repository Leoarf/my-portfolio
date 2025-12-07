import Header from './components/layout/Header';

export default function Home() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <div className="container mx-auto px-6 py-20">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Teste do Header
          </h1>
          <p className="text-gray-600 dark:text-gray-300 mb-8">
            Role a página para ver o header mudar. Clique no botão de menu no
            mobile.
          </p>
          {/* Content to make the page scrollable */}
          <div className="space-y-8">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
              <div
                key={item}
                className="p-6 bg-gray-100 dark:bg-gray-800 rounded-lg"
              >
                <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                  Seção {item}
                </h2>
                <p className="text-gray-600 dark:text-gray-300">
                  Conteúdo de exemplo para testar o scroll.
                </p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
