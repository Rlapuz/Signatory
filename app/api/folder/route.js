import FolderModel from "@/models/folderModel";
import connectDB from "@/utils/database";
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth"
import { authOptions } from "@/app/api/auth/[...nextauth]/route"



// POST
export async function POST(request) {
    try {
        const session = await getServerSession(authOptions)
        const { name } = await request.json();
        await connectDB();
        await FolderModel.create({ name, userId: session.user._id });
        return NextResponse.json({ message: "Folder Created" }, { status: 201 });
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

// PUT
export async function PUT(request) {
    const data = JSON.parse((await request).body)
    const id = request.nextUrl.searchParams.get("id")
    await connectDB()
    const result = await FolderModel.updateOne({ "_id": id }, { "name": data })
    return NextResponse.json(result, { status: 200 })
}






// import FolderModel from "@/models/folderModel";
// import connectDB from "@/utils/database";
// import { NextResponse } from "next/server";
// import { getSession } from 'next-auth/react';

// // POST
// export async function POST(request) {
//     try {
//         const { name } = await request.json();
//         const session = await getSession({ req: request.req });
//         if (!session) {
//             return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
//         }
//         const userId = session.user.id; // Get the user's ID from the session
//         await connectDB();
//         await FolderModel.create({ name, userId });

//         // Fetch the updated list of folders
//         const folders = await FolderModel.find({ userId }); // Filter by user's ID
//         return NextResponse.json({ message: "Folder Created", folders }, { status: 201 });
//     } catch (error) {
//         console.error("Error while creating folder:", error);
//         return NextResponse.json({ message: "Failed to create folder" }, { status: 500 });
//     }
// }

// // GET
// export async function GET(request) {
//     try {
//         const session = await getSession({ req: request.req });
//         if (!session) {
//             return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
//         }
//         const userId = session.user.id; // Get the user's ID from the session
//         await connectDB();
//         const folders = await FolderModel.find({ userId }); // Filter by user's ID
//         return NextResponse.json(folders);
//     } catch (error) {
//         console.error("Error while getting folders:", error);
//         return NextResponse.json({ message: "Failed to get folders" }, { status: 500 });
//     }
// }

// // DELETE
// export async function DELETE(request) {
//     const id = request.nextUrl.searchParams.get("id");
//     await connectDB();
//     await FolderModel.findByIdAndDelete(id);
//     return NextResponse.json({ message: "Folder Deleted" }, { status: 200 });
// }

// // PUT
// export async function PUT(request) {
//     const data = JSON.parse((await request).body);
//     const id = request.nextUrl.searchParams.get("id");
//     await connectDB();
//     const result = await FolderModel.updateOne({ "_id": id }, { "name": data });
//     return NextResponse.json(result, { status: 200 });
// }

