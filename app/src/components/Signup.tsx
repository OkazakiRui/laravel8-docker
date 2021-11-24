import { VFC } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import axios from 'axios';

type Inputs = {
  name: string;
  email: string;
  password: string;
  passwordConfirmation: string;
};

const Signup: VFC = () => {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<Inputs>({
    criteriaMode: 'all',
  });
  const onSubmit: SubmitHandler<Inputs> = (data) =>
    axios
      .post('http://127.0.0.1:8000/api/todos', {
        id_users: 10,
        title: 'front',
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  // axios
  //   .get('http://127.0.0.1:8000/api/todos')
  //   .then((res) => console.log(res))
  //   .catch((err) => console.log(err));

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="name">
        名前：
        <input
          type="text"
          id="name"
          {...register('name', {
            required: {
              value: true,
              message: '名前を入力してください',
            },
            maxLength: {
              value: 16,
              message: '名前は16文字以内で入力してください',
            },
          })}
        />
      </label>
      <ErrorMessage errors={errors} name="name" />
      <br />
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
              value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/,
              message: '半角英数のみで入力してください',
            },
          })}
        />
      </label>
      <ErrorMessage errors={errors} name="password" />
      <br />
      <label htmlFor="passwordConfirmation">
        パスワード確認：
        <input
          type="password"
          id="passwordConfirmation"
          {...register('passwordConfirmation', {
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
              value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/,
              message: '半角英数を含めて入力してください',
            },
            validate: (value) =>
              value === getValues('password') || 'パスワードが一致しません',
          })}
        />
      </label>{' '}
      <ErrorMessage errors={errors} name="passwordConfirmation" />
      <br />
      <input type="submit" value="新規登録" />
    </form>
  );
};
export default Signup;
