import Header from './components/layout/Header';
import Hero from './components/sections/Hero';

export default function Home() {
  return (
    <div className="bg-white dark:bg-gray-900 transition-colors duration-300">
      <Header />
      <Hero />
      <div className="h-32"></div>
    </div>
  );
}
