// Header.tsx
import { component$ } from '@builder.io/qwik';

export const Header = component$(() => {
  return (
    <header>
      <h1>Mi Sitio</h1>
      <nav>
        <a href="/home">Home</a>
        <a href="/menu">Menú</a>
        <a href="/reservas">Reservas</a>
        <a href="/quienes-somos">Quiénes Somos</a>
        <a href="/faq">FAQ</a>
      </nav>
    </header>
  );
});
