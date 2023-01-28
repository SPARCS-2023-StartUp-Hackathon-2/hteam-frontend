import { useAuth } from "components/common/AuthProvider";
import { fetcher } from "lib/axios";
import useSWR from "swr";
import { User } from "types/api";

function useMe() {
  const { loggedIn, token, logout, axiosAuthHeader } = useAuth();

  const { data, error, mutate, isLoading } = useSWR<User>(
    token ? "/users/me" : null,
    fetcher({ auth: token })
  );

  return {
    data,
    error,
    isLoading,
    token,
    mutate,
    loggedIn,
    logout,
    axiosAuthHeader,
  };
}

export default useMe;
