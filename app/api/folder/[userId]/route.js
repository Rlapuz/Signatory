// params file/[userId] , create new folder for this route (dynamic) 

import connectDB from "@/utils/database";
import { NextResponse } from "next/server";
import { useSession } from "next-auth/react";
import FolderModel from "@/models/folderModel";




// GET
export async function GET(req) {
    try {
        const { userId } = req.query
        // console.log(userId)
        // console.log(req.query)
        console.log("Received userId:", userId);

        await connectDB();
        const folders = await FolderModel.find({ userId });
        return NextResponse.json(folders);
    } catch (error) {
        console.error("Error while getting folders:", error);
        return NextResponse.json({ message: "Failed to get folders" }, { status: 500 });
    }
}
