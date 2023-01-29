import { useAuth } from "components/common/AuthProvider";
import { fetcher } from "lib/axios";
import useSWR from "swr";
import { Applicant } from "types/api";

function useApplicant(id?: string) {
  const { token } = useAuth();

  const { data, error, mutate, isLoading } = useSWR<Applicant>(
    token && id ? `/applicants/${id}` : null,
    fetcher({ auth: token })
  );

  return {
    data,
    error,
    isLoading,
    mutate,
  };
}

export default useApplicant;
