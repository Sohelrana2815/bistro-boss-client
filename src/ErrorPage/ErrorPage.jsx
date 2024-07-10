import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <>
      <div className="flex items-center justify-center h-screen">
        <h2 className="text-5xl font-bold text-error text-center">
          404 not found!
        </h2>
        <div>
          <Link to="/">
            <p className="btn btn-outline btn-error">Go Back</p>
          </Link>
        </div>
      </div>
    </>
  );
};

export default ErrorPage;
