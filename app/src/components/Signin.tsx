import React, { VFC } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import axios from 'axios';

type Inputs = {
  email: string;
  password: string;
};

const Signin: VFC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    criteriaMode: 'all',
  });
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    axios.get('/api/csrf-cookie').then(() => {
      console.log('ok');

      axios
        .post('/api/login', {
          // email: data.email,
          // password: data.password,
          email: 'test1@test.jp',
          password: 'testtest',
        })
        .then((res) => {
          console.log(res);
        });
    });
  };

  const test = () => {
    axios
      .get('/api/todos', {
        withCredentials: true,
      })
      .then((res) => console.log(res));
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="email">
          メールアドレス：
          <input
            type="text"
            id="email"
            {...register('email', {
              required: {
                value: true,
                message: 'メールアドレスを入力してください',
              },
              pattern: {
                value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
                message: '正しいメールアドレスを入力してください',
              },
            })}
          />
        </label>
        <ErrorMessage errors={errors} name="email" />
        <br />
        <label htmlFor="password">
          パスワード：
          <input
            type="password"
            id="password"
            {...register('password', {
              required: {
                value: true,
                message: 'パスワードを入力してください',
              },
              maxLength: {
                value: 64,
                message: 'パスワードは64文字以内で入力してください',
              },
              minLength: {
                value: 6,
                message: 'パスワードは6文字以上で入力してください',
              },
              pattern: {
                value: /^[a-zA-Z0-9]+$/,
                message: '半角英数のみで入力してください',
              },
            })}
          />
        </label>
        <ErrorMessage errors={errors} name="password" />
        <br />
        <input type="submit" value="ログイン" />
      </form>
      <button onClick={test}>get todos</button>
    </>
  );
};
export default Signin;
