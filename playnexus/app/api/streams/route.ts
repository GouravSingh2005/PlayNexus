import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { prisma1 } from "@/app/lib/db";
// @ts-ignore
import youtubesearchapi from "youtube-search-api";

const YT_Regex = /^(?:(?:https?:)?\/\/)?(?:www\.)?(?:m\.)?(?:youtu(?:be)?\.com\/(?:v\/|embed\/|watch\?v=)|youtu\.be\/)((?:\w|-){11})(?:\S+)?$/;

const CreateStreamSchema = z.object({
  creatorId: z.string(),
  url: z.string()
});

export async function POST(req: NextRequest) {
  try {
    const data = CreateStreamSchema.parse(await req.json());

    const match = data.url.match(YT_Regex);
    const extractedId = match ? match[1] : null;

    if (!extractedId) {
      return NextResponse.json({ message: "Invalid YouTube URL" }, { status: 400 });
    }

    const res = await youtubesearchapi.GetVideoDetails(extractedId);
    const thumbnails = res.thumbnail?.thumbnails || [];

    // Sort thumbnails by width (ascending)
    thumbnails.sort((a: { width: number }, b: { width: number }) => a.width - b.width);

    const fallbackImg = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIotI7zK5ks2VLB-BqbrHFWjPLRlTiEdLJWSOmk55bHOUhnK4UBva9mys&s";

    const smallImg = thumbnails.length > 1
      ? thumbnails[thumbnails.length - 2]?.url || fallbackImg
      : thumbnails[0]?.url || fallbackImg;

    const bigImg = thumbnails[thumbnails.length - 1]?.url || fallbackImg;

    const stream = await prisma1.stream.create({
      data: {
        userId: data.creatorId,
        videolink: data.url,
        extractedId,
        type: "youtube",
        title: res.title ?? "Cannot find title", // Assuming your Prisma schema has a 'title' field
        smallImg,
        bigImg
      }
    });

    return NextResponse.json({
      message: "Stream added successfully",
      id: stream.id
    }, { status: 200 });

  } catch (e: any) {
    console.error("Error in POST /stream:", e);
    return NextResponse.json({
      message: "Error while adding a stream",
      error: e.message ?? "Unknown error"
    }, { status: 500 });
  }
}

export async function GET(req: NextRequest) {
  try {
    const creatorId = req.nextUrl.searchParams.get("creatorId");

    if (!creatorId) {
      return NextResponse.json({ message: "creatorId is required" }, { status: 400 });
    }

    const streams = await prisma1.stream.findMany({
      where: {
        userId: creatorId
      }
    });

    return NextResponse.json(streams, { status: 200 });
  } catch (e: any) {
    console.error("Error in GET /stream:", e);
    return NextResponse.json({
      message: "Error while fetching streams",
      error: e.message ?? "Unknown error"
    }, { status: 500 });
  }
}