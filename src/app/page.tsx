import NavBar from '@/components/Header/NavBar';
import { ThemeProvider } from '@/components/Header/ThemeProvider';

export default function Home() {
  return (
    <div>
      <NavBar />
      <ThemeProvider />
    </div>
  );
}
