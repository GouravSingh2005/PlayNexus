import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { prisma1 } from "@/app/lib/db";

const YT_REGEX = new RegExp("(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/watch\?v=|youtu\.be\/)([a-zA-Z0-9_-]{11})");


const CreateStreamSchema = z.object({
    creatorId: z.string(),
    url: z.string()
});

export async function POST(req: NextRequest) {
    try {
  
        const data = CreateStreamSchema.parse(await req.json());


        const isYt = YT_REGEX.test(data.url);
        if (!isYt) {
            return NextResponse.json({
                message: "wrong url"
            }, {
                status: 411
            });
        }

      
        const extractedId = data.url.split("?v=")[1];

       
        await prisma1.stream.create({
            data: {
                userId: data.creatorId,
                videolink: data.url,
                extractedId,
                type: "youtube" 
            }
        });

        return NextResponse.json({
            message: "Stream added successfully"
        }, {
            status: 200
        });

    } catch (e) {
        console.error(e);
        return NextResponse.json({
            message: "Error While adding a Stream"
        }, {
            status: 500
        });
    }
}

export async function GET(req:NextRequest){
    const creatorId=req.nextUrl.searchParams.get("creatorId");
    const streams=await prisma1.stream.findMany({
        where:{
            userId:creatorId ?? ""
        }
    })
}