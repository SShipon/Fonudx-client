import React from 'react'
import Container from '../../UI/Container'
import { Button } from '@nextui-org/button'
import Link from 'next/link'

export default async function RecentPosts() {
  
  const res = await fetch("")
  return (
      <Container>
              <div className='section-title my-8'>
                    <h2 className='mb-2 text-center text-2xl'>Recently Found Items</h2>
                    <p className='text-center'>A list of items that have been recently found and reported</p>
              </div>
              <div className='my-8 grid justify-center gap-10 sm:grid-cols-1 md:grid-cols-4'>
                   <h2>Recent Posts</h2>
              </div>
              <div className='flex justify-center'>
                 <Button className='rounded-md bg-default-900 text-default '>
                     <Link href="/found-items">See All</Link>
                 </Button>
              </div>
      </Container>
  )
}
