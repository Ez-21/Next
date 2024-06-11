"use client"
import { useRouter } from "next/navigation";
export default function Home() {
  const $router = useRouter()
  const ck = ()=>{
    $router.push('/index')
  }
  return (
    <div>
        <button type="button" onClick={ck}>点击我</button>
    </div>
  );
}
