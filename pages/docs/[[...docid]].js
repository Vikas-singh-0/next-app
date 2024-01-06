import React from 'react'
import { useRouter } from 'next/router'
export default function docId() {
  const { docid } = useRouter().query;
  return (
    <h1>Doc id {docid}</h1>
  )
}
