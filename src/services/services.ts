import { toast } from 'react-toastify';
import { HTTPMutationMethods } from 'types/requests';
import { API_URL, setHeaders } from 'constants/requests';

export const queryFetcher = <T>(url: string, signal?: AbortSignal): Promise<T> => {
  return (
    fetch(`${API_URL}/${url}`, {
      headers: setHeaders(),
      signal
    })
      .then(async (response: Response) => {
        const jsonResponse = await response.json();

        if (!response.ok) {
          toast(jsonResponse.error?.message || jsonResponse.detail);
          throw new Error(jsonResponse.detail);
        }
        return jsonResponse;
      })
      .catch((error) => {
        toast(error.title || error.detail);
      })
  );
};

export const queryMutation = (url: string, method: HTTPMutationMethods, data?: unknown): Promise<Response> => {
  return (
    fetch(`${API_URL}/${url}`, {
      method,
      body: JSON.stringify(data),
      headers: setHeaders()
    })
      .then(async (response: Response) => {
        if (response.status === 204) return { success: true };

        const jsonResponse = await response.json();

        return jsonResponse;
      })
      .catch((error) => {
        toast(error.title || error.detail);
      })
  );
};
