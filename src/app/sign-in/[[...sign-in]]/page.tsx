import { SignIn } from '@clerk/nextjs'

export default function Page() {
  return <div className='flex justify-center py-14'>
      <SignIn />
    </div>
}