import { Card } from '@/components/card'
import Link from 'next/link'
import React from 'react'

function Notification() {
  return (
    <div>
      <Card>
        Notification
        <Link 
        href={"/complex-dashboard/archived"}
        className='text-red-500 ml-4 underline'
        >Archived</Link>
      </Card>
    </div>
  )
}

export default Notification
