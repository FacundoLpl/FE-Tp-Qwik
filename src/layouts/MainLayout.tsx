import { component$, Slot } from '@builder.io/qwik';
import { Header } from '../components/common/Header';
import { Footer } from '../components/common/Footer';

export const MainLayout = component$(() => {
  return (
    <div>
      <Header />
      <main>
        <Slot />
      </main>
      <Footer />
    </div>
  );
});
