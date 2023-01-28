import { useAuth } from "components/common/AuthProvider";
import { fetcher } from "lib/axios";
import useSWR from "swr";
import { Recruitment } from "types/api";

function useFormInfo(id: string) {
  const { token } = useAuth();

  const { data, error, mutate, isLoading } = useSWR<Recruitment>(
    token && id ? `/forms?recruitmentId=${id}` : null,
    fetcher({ auth: token })
  );

  return {
    data,
    error,
    isLoading,
    mutate,
  };
}

export default useFormInfo;
