import { Card } from '@/components/card'
import Link from 'next/link'
import React from 'react'

function ArchivedNotification() {
  return (
    <div>
      <Card>
        Archived Notification
        <Link 
        href={"/complex-dashboard"}
        className='text-blue-500 ml-4 underline'
        >Default</Link>
      </Card>
    </div>
  )
}

export default ArchivedNotification
