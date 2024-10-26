// src/routes/menu/index.tsx
import { component$ } from '@builder.io/qwik';
import { MainLayout } from '../../layouts/MainLayout';

export default component$(() => {
  return (
    <MainLayout>
      <h2>Menú</h2>
      <p>Consulta nuestro menú de platillos deliciosos.</p>
    </MainLayout>
  );
});
