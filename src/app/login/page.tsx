import LoginForm from '@/components/LoginForm';
import Image from 'next/image';

export default function Login() {
  return (
    <div className='lg:grid lg:grid-cols-2 min-h-screen'>
      <div className='flex justify-center items-center p-5'>
        <LoginForm />
      </div>
      <div>
        <Image
          src='/images/login.png'
          alt='login image'
          width={400}
          height={400}
          sizes='100vw'
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />
      </div>
    </div>
  );
}
