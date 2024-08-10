import { component$, useStylesScoped$ } from '@builder.io/qwik';
import { QwikLogo } from '../icons/qwik';
import styles from './header.css?inline';

export default component$(() => {
  useStylesScoped$(styles);

  return (
    <header>
      <div class="logo">
        <a href="https://qwik.builder.io/" target="_blank">
          <QwikLogo />
        </a>
      </div>
      <ul>
        <li>
          <a
            href="/admin"
          >
            Admin
          </a>
        </li>
        <li>
          <a
            href="/hero"
            target="_blank"
          >
           Hero
          </a>
        </li>
      </ul>
    </header>
  );
});
