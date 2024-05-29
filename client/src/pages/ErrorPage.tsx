import { AxiosError } from "axios";
import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);

  const getErrorMessage = (error: unknown) => {
    if (error instanceof AxiosError) {
      const { response } = error;
      if (response && response.data && response.data.message) {
        return response.data.message;
      }
    } else if (error !== null && error instanceof Object && "statusText" in error) {
      return error.statusText;
    }
  };

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{getErrorMessage(error)}</i>
      </p>
    </div>
  );
};

export default ErrorPage;
