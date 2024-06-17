import { NextResponse } from "next/server";
import connect from "../../../mysql/index";

export default async function handler(req, res) {
  console.log(req);
  let result = await connect.getConnection().query("select * from user");
  console.log(result);
  return NextResponse.json(result,{status:200});
}
