import { revalidatePath} from "next/cache";
import { type NextRequest, NextResponse } from "next/server";
import { parseBody } from "next-sanity/webhook";


const sercretSanityKey = process.env.SANITY_REVALIDATE_SECRET_KEY;

export async function POST(req: NextRequest) {
  try {

    const { isValidSignature, body } = await parseBody<{ _type: string }>(
      req,
      sercretSanityKey
    );

    if (!isValidSignature) {
      return new NextResponse("Invalid Signature", { status: 401 });
    }

    if (!body?._type) {
      return new NextResponse("Bad Request", { status: 400 });
    }


    console.log(`Revalidating tag: posts`);
    

    revalidatePath("/blog","page");

    return NextResponse.json({
      revalidated: true,
      now: Date.now(),
      message: "Cache cleared successfully",
    });
  } catch (err) {
    const errorMessage = err instanceof Error ? err.message : "Unknown error";
    console.error(errorMessage);
    return new NextResponse(errorMessage, { status: 500 });
  }
}