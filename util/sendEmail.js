import axios from 'axios';

import { formValueTypes } from '@/components/ContactForm';

const sendEmail = async (formValues) => {
  return axios({
    method: 'post',
    url: '/api/send-email',
    data: formValues,
  });
};

export default sendEmail;