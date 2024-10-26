import { component$ } from '@builder.io/qwik';
import { MainLayout } from '../layouts/MainLayout';

export default component$(() => {
  return (
    <MainLayout>
      <h2>Bienvenido a Home</h2>
      <p>Esta es la página principal.</p>
    </MainLayout>
  );
});
