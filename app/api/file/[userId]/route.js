// params file/[userId] , create new folder for this route (dynamic) 

import FileModel from "@/models/fileModel";
import connectDB from "@/utils/database";
import { NextResponse } from "next/server";
import { useSession } from "next-auth/react";




// GET

export async function GET(req) {
    try {
        const { userId } = req.query
        console.log(userId)
        console.log(req.query)
        await connectDB();
        const folders = await FileModel.find();
        return NextResponse.json(folders);
    } catch (error) {
        console.error("Error while getting folder:", error);
        return NextResponse.json({ message: "Failed to get folder" }, { status: 500 });
    }
}
