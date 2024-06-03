import type { MetaFunction } from "@remix-run/node";
export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

/**
 *
 * Root Route:
 * - use as public facing login/dashboard
 */

export default function Index() {
  // const [data, setData] = useState(null);
  // useEffect(() => {
  //   fetch("http://localhost:3001/api/hello-world")
  //     .then((res) => res.json())
  //     .then((data) => setData(data));
  // }, []);

  return <div></div>;
}
