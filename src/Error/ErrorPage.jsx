import { useRouteError, Link } from "react-router-dom";
import { LOGOUT } from "../Path/Paths"

const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="flex flex-col items-center justify-center px-2">
      <img
        src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/404/404-computer.svg"
        alt="Error"
      />
      <h1 className="text-2xl font-bold mb-3 text-blue-700">404 Not Found</h1>
      <p className="text-4xl font-bold mb-8 text-center">
        Oops! Esta página no existe.
      </p>
      <p className="text-slate-500 text-lg mb-3">Presione aquí para volver:</p>
      <Link to={LOGOUT} className="text-slate-500 border-b border-b-slate-400">
        Volver
      </Link>
    </div>
  );
};

export default ErrorPage;
