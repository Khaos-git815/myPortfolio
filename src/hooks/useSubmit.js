import { useState } from 'react';
import axios from 'axios';

import { useAlertContext } from '../context/alertContext';

const useSubmit = () => {
  const [isLoading, setLoading] = useState(false);
  const { onOpen } = useAlertContext();

  const LAMBDA_URL = process.env.REACT_APP_LAMBDA_INVOKE_URL;

  const submit = async (formData, resetForm) => {
    setLoading(true);
    try {
      const payload = {
        // "to": The recipient's email address for the inquiry. This is read from an environment variable for flexibility and security.
        to: process.env.REACT_APP_TARGET_EMAIL,
        // "subject": The subject line of the email. It includes a personalized part - the first name of the person making the inquiry, which is extracted from the form data.
        subject: 'New Inquiry from ' + formData.firstName,
        // "body": The main content of the email. It compiles various pieces of information from the form data into a structured format.
        // This includes the sender's name, email, the type of inquiry they're making, and their actual message or comment.
        body: `Name: ${formData.firstName}\nEmail: ${formData.email}\nType: ${formData.type}\nComment: ${formData.comment}`,
      };

      // it sends this payload to the Lambda function via an HTTP POST request using Axios:
      await axios.post(LAMBDA_URL, payload);

      onOpen('success', 'Email sent successfully');
      resetForm();
    } catch (error) {
      let errorMessage = 'Error occurred while sending email.';
      if (error.response && error.response.data) {
        errorMessage =
          error.response.data.message || JSON.stringify(error.response.data);
      }
      onOpen('error', errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return { isLoading, submit };
};

export default useSubmit;
