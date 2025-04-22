import NavBar from '@/components/NavBar';
import { ThemeProvider } from '@/components/ThemeProvider';

export default function Home() {
  return (
    <div>
      <h1> Olá mundo</h1>
      <NavBar />
      <ThemeProvider />
    </div>
  );
}
