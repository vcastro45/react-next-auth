import { Button } from '@nextui-org/react'
import { logIn } from '@/actions/login'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <form action={logIn}>
        <Button type="submit">LogIn</Button>
      </form>
    </main>
  );
}
