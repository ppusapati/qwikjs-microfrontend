import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import RemoteMfe from '../components/remote-mfe/remote-mfe';
import { remotes } from 'apps/host/config';

export default component$(() => {
  return (
        <main>
          <RemoteMfe remote={remotes.admin} />
          <RemoteMfe remote={remotes.hero} />

        </main>
     
  );
});

export const head: DocumentHead = {
  title: 'Welcome to Qwik',
  meta: [
    {
      name: 'description',
      content: 'Qwik site description',
    },
  ],
};
