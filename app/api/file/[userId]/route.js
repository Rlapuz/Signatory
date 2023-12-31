// params file/[userId] , create new folder for this route (dynamic) 

import FileModel from "@/models/fileModel";
import connectDB from "@/utils/database";
import { NextResponse } from "next/server";
import { useSession } from "next-auth/react";




// GET
export async function GET(req) {
    try {
        const { userId } = req.query
        // console.log(userId)
        // console.log(req.query)
        console.log("Received userId:", userId);

        await connectDB();
        const files = await FileModel.find({ userId });
        return NextResponse.json(files);
    } catch (error) {
        console.error("Error while getting files:", error);
        return NextResponse.json({ message: "Failed to get files" }, { status: 500 });
    }
}
