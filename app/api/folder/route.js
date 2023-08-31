import FolderModel from "@/models/folderModel";
import connectDB from "@/utils/database";
import { NextResponse } from "next/server";


// POST
export async function POST(request) {
    try {
        const { name } = await request.json();
        await connectDB();
        await FolderModel.create({ name });

        // Fetch the updated list of folders
        const folders = await FolderModel.find();
        return NextResponse.json({ message: "Folder Created", folders }, { status: 201 });
    } catch (error) {
        console.error("Error while creating folder:", error);
        return NextResponse.json({ message: "Failed to create folder" }, { status: 500 });
    }
}

// GET
export async function GET() {
    try {
        await connectDB();
        const folders = await FolderModel.find();
        return NextResponse.json(folders);
    } catch (error) {
        console.error("Error while getting folder:", error);
        return NextResponse.json({ message: "Failed to get folder" }, { status: 500 });
    }
}

// DELETE
export async function DELETE(request) {
    const id = request.nextUrl.searchParams.get("id")
    await connectDB()
    await FolderModel.findByIdAndDelete(id)
    return NextResponse.json({ message: "Folder Deleted" }, { status: 200 })
}



