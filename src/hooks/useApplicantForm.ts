import { fetcher } from "lib/axios";
import useSWR from "swr";
import { FormContent } from "types/api";

function useApplicantForm(uuid?: string) {
  const { data, error, mutate, isLoading } = useSWR<FormContent>(
    uuid ? `/applicants/application-form/${uuid}` : null,
    fetcher()
  );

  return {
    data: data?.content.data,
    error,
    isLoading,
    mutate,
  };
}

export default useApplicantForm;
