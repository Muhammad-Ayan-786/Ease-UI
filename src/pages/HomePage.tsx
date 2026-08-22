import { Card } from '@/components/Card/Card';
import { Button } from '@/components/Button/Button';
import { useNavigate } from 'react-router';

const HomePage = () => {

  const navigate = useNavigate()

  return (
    <main className="container mx-auto px-6 py-12">
      <header className="text-center mb-16">
        <h1 className="text-5xl font-bold text-gray-900 mb-4">Welcome to Ease UI</h1>
        <p className="text-xl text-gray-600 mb-8">A beautiful and simple component library.</p>
        <Button variant="primary" onClick={() => navigate("/components/button")}>Get Started</Button>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Card title="Easy to Use" description="Simple components for quick integration." />
        <Card title="Fully Customizable" description="Styling tailored to your project needs." />
        <Card title="Modern Design" description="Built with latest UI trends in mind." />
      </section>
    </main>
  );
};

export default HomePage;
