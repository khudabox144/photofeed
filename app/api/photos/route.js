import { getAllPhotos } from "@/lib/image-data"
import { NextResponse } from "next/server";


export async function GET(){
    console.log("this is the photos folder");
    const data= await getAllPhotos();
    return NextResponse.json(data);
}