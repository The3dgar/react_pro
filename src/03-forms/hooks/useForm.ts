import React, { ChangeEvent, useState } from 'react';

export const useForm = <T>(initialState: T, submit: any) => {
  const [formData, setFormData] = useState(initialState);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    submit(formData);
  };

  const resetForm = () => {
    setFormData(initialState);
  };

  const isValidEmail = (email: string) => {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  };
  
  return {
    formData,
    onChange,
    onSubmit,
    resetForm,
    isValidEmail
  };
};
