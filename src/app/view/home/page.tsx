"use client";
import React from "react";
import Link from "next/link";
export default function Index() {
  const getUser = () => {
    fetch("/api/user")
      .then((res) => res.json())
      .then((res: any) => {
        console.log(res, "res");
      });
  };
  return (
    <div>
      我是首页
      <button type='button' onClick={getUser}>
        点击
      </button>
    </div>
  );
}
