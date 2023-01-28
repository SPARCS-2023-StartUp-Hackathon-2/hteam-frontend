import { useAuth } from "components/common/AuthProvider";
import { fetcher } from "lib/axios";
import useSWR from "swr";
import { Applicant, Recruitment } from "types/api";

function useApplicants(recruitmentId: string) {
  const { token } = useAuth();

  const { data, error, mutate, isLoading } = useSWR<Applicant[]>(
    token && recruitmentId ? `/applicants?recruitmentId=${recruitmentId}` : null,
    fetcher({ auth: token })
  );

  return {
    data,
    error,
    isLoading,
    mutate,
  };
}

export default useApplicants;
