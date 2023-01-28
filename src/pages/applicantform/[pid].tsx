import InterviewInfoSet from 'components/common/InterviewInfoSet';
import { useRouter } from 'next/router';
import React from 'react';

function ApplicantFormPage() {
  const router = useRouter();
  const { pid } = router.query;
  return (
    <div>
      ApplicantFormPage
      <p> UUID: {pid}</p>
      <InterviewInfoSet />
    </div>
  );
}

export default ApplicantFormPage;
