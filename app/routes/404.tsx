import type { MetaFunction } from "@remix-run/data";

export const meta: MetaFunction = () => ({ title: "Ain't nothing here" });

export default function FourOhFour() {
  return (
    <div>
      <h1>404</h1>
    </div>
  );
}
