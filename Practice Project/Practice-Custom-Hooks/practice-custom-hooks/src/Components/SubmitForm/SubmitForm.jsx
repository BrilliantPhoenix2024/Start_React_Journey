import React from "react";
import "./SubmitForm.css";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const SubmitForm = () => {
  const schema = yup.object().shape({
    name: yup.string().required("نام اجباری است"),
    email: yup.string().email("ایمیل صحیح نیست").required("ایمیل اجباری است"),
    age: yup.number().positive().min(18).max(100).required(),
    password: yup
      .string()
      .min(4)
      .max(14, "کمتر از 14 کارکتر باشد")
      .matches(/[a-z]+/)
      .matches(/[A-Z]+/)
      .matches(/\d+/)
      .required(),
    // Regular Expression => search for this about password format
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password")], "پسورد مشابه باشد")
      .required(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onFormSubmit = (data) => {
    console.log(data);
  };
  return (
    <div>
      <h1>Please fill the form</h1>
      <form onSubmit={handleSubmit(onFormSubmit)}>
        <input type="text" placeholder="Name..." {...register("name")} />
        {errors.name && <p>{errors.name?.message}</p>}
        <input type="email" placeholder="Email..." {...register("email")} />
        {errors.email && <p>{errors.email?.message}</p>}
        <input type="number" placeholder="Age..." {...register("age")} />
        {errors.age && <p>{errors.age?.message}</p>}
        <input
          type="password"
          placeholder="Password..."
          {...register("password")}
        />
        {errors.password && <p>{errors.password?.message}</p>}
        <input
          type="password"
          placeholder="Confirm Password..."
          {...register("confirmPassword")}
        />
        {errors.confirmPassword && <p>{errors.confirmPassword?.message}</p>}
        <input type="submit" />
      </form>
    </div>
  );
};

export default SubmitForm;
