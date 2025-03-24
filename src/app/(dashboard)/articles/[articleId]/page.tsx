"use client";
import React, {use} from 'react'
import Link from 'next/link'

function NewsArticle({
  params, searchParams,
} : {
  params: Promise<{ articleId: string }>;
  searchParams: Promise<{ lang?: "en" | "es" | "fr" }>;
}) {
  const {articleId} =  use(params);
  const {lang = "en"} = use(searchParams);

  return (
    <div className='flex flex-col justify-center items-center h-screen'>
      <h1 className='text-4xl'>News Article {articleId}</h1>
      <p>Reading in {lang}</p>

      <div className="links flex gap-4 mt-4 underline">
        <Link href={`/articles/${articleId}?lang=en`}>English</Link>
        <Link href={`/articles/${articleId}?lang=es`}>Spanish</Link>
        <Link href={`/articles/${articleId}?lang=fr`}>French</Link>
      </div>
    </div>
  )
}

export default NewsArticle
