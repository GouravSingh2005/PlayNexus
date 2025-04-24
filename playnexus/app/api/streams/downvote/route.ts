import { prisma1 } from "@/app/lib/db";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const UpvoteSchema=z.object({
    streamId:z.string(),
})

export async function POST(req:NextRequest){
    const session=await getServerSession();
    const user=await prisma1.user.findFirst({
        where:{
            email:session?.user?.email ?? ""
        }
    })
    if(!user){
        return NextResponse.json({
            message:"Unauthorized"
        },{
            status: 403 
        })
    }
    try{
        const data=UpvoteSchema.parse(await req.json());
        await prisma1.upvote.delete({
            where:{
                userId_StreamId:{

                    userId:user.id,
                    StreamId:data.streamId

                }
           
            }
        });
    }catch(e) {
        return NextResponse.json({
            message:"Error While upvoting"
        },{
            status:403
        })
    }
   
}