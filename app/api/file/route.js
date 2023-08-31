import FileModel from "@/models/fileModel";
import connectDB from "@/utils/database";
import { NextResponse } from "next/server";

// POST 
export async function POST(request) {
    try {
        const { filename, size, url, mimetype } = await request.json();
        await connectDB();
        await FileModel.create({ filename, size, url, mimetype });
        return NextResponse.json({ message: "File Created" }, { status: 201 });
    } catch (error) {
        console.error("Error while creating file:", error);
        return NextResponse.json({ message: "Failed to create file" }, { status: 500 });
    }
}

// GET
export async function GET() {
    try {
        await connectDB();
        const files = await FileModel.find();
        return NextResponse.json(files);
    } catch (error) {
        console.error("Error while getting files:", error);
        return NextResponse.json({ message: "Failed to get files" }, { status: 500 });
    }
}

// DELETE
export async function DELETE(request) {
    const id = request.nextUrl.searchParams.get("id")
    await connectDB()
    await FileModel.findByIdAndDelete(id)
    return NextResponse.json({ message: "Topic Deleted" }, { status: 200 })
}

