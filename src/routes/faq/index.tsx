import { component$ } from '@builder.io/qwik';
import { MainLayout } from '../../layouts/MainLayout';

export default component$(() => {
  const faqs = [
    { question: '¿Cuáles son los horarios?', answer: 'Estamos abiertos de 9am a 9pm todos los días.' },
    { question: '¿Dónde están ubicados?', answer: 'Estamos en el centro de la ciudad, en la calle principal.' },
    { question: '¿Aceptan reservas?', answer: 'Sí, puedes reservar desde la página de reservas.' }
  ];

  return (
    <MainLayout>
      <h2>Preguntas Frecuentes (FAQ)</h2>
      <ul>
        {faqs.map((faq, index) => (
          <li key={index}>
            <strong>{faq.question}</strong>
            <p>{faq.answer}</p>
          </li>
        ))}
      </ul>
    </MainLayout>
  );
});
