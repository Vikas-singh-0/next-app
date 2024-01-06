import { useRouter } from "next/router"

export default function Post() {
  const router = useRouter();
  const {params} = router.query;
  console.log(router);
  return (
    <h1>{params.postid}</h1>
  )
}
