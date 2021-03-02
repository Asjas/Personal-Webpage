import type { LoaderFunction, MetaFunction } from '@remix-run/data';
import { useRouteData } from '@remix-run/react';

export let loader: LoaderFunction = async () => {
  return { message: 'this is awesome 😎' };
};

export let meta: MetaFunction = () => {
  return {
    title: 'Remix Starter',
    description: 'Welcome to remix!',
  };
}

export default function Index() {
  let data = useRouteData();

  return (
    <div className="text-lg text-center">
      <h2>Welcome to Remix!</h2>
      <p className="text-success">SUCCESS!</p>
      <p className="text-alert">ALERT!</p>
      <p className="text-error">ERROR!</p>
      <p className="text-hot-pink">HOT PINK!</p>
      <p className="text-casandora-yellow">CASANDRA YELLOW!</p>
      <p className="text-madonna-purple">MADONNA PURPLE!</p>
      <p>
        <a href="https://remix.run/dashboard/docs">Check out the docs</a> to get started.
      </p>
      <p>Message from the loader: {data.message}</p>
    </div>
  );
}
