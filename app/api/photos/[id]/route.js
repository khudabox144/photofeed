import { getPhotoById } from "@/lib/image-data";
import { NextResponse } from "next/server";


export async function GET(request,{params}){
    const {id}=await params;
    const photoId= id;
    const data=await getPhotoById(photoId)
    return NextResponse.json(data);
}