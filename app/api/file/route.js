import FileModel from "@/models/fileModel";
import connectDB from "@/utils/database";
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth"
import { authOptions } from "@/app/api/auth/[...nextauth]/route"




// POST 
export async function POST(request) {
    try {
        const session = await getServerSession(authOptions)

        const { filename, size, url, mimetype } = await request.json();
        await connectDB();
        await FileModel.create({ filename, size, url, mimetype, userId: session.user._id });
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

// PUT
export async function PUT(request) {
    const body = Object.fromEntries([...new FormData(request)])
    const id = request.nextUrl.searchParams.get("id")
    await connectDB()
    const updatedFileData = await FileModel.findOneAndUpdate({ "_id": id }, body, { new: true })
    return NextResponse.json(updatedFileData, { status: 200 })
}




// import FileModel from "@/models/fileModel";
// import connectDB from "@/utils/database";
// import { NextResponse } from "next/server";
// import { getSession } from "next-auth/react";

// // POST
// export async function POST(request) {
//     try {
//         const { filename, size, url, mimetype } = await request.json();
//         const session = await getSession({ req: request.req });
//         if (!session) {
//             return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
//         }
//         const userId = session.user.id; // Get the user's ID from the session
//         await connectDB();
//         await FileModel.create({ filename, size, url, mimetype, userId });
//         return NextResponse.json({ message: "File Created" }, { status: 201 });
//     } catch (error) {
//         console.error("Error while creating file:", error);
//         return NextResponse.json({ message: "Failed to create file" }, { status: 500 });
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
//         const files = await FileModel.find({ userId }); // Filter by user's ID
//         return NextResponse.json(files);
//     } catch (error) {
//         console.error("Error while getting files:", error);
//         return NextResponse.json({ message: "Failed to get files" }, { status: 500 });
//     }
// }

// // DELETE
// export async function DELETE(request) {
//     const id = request.nextUrl.searchParams.get("id");
//     await connectDB();
//     await FileModel.findByIdAndDelete(id);
//     return NextResponse.json({ message: "File Deleted" }, { status: 200 });
// }

// // PUT
// export async function PUT(request) {
//     const body = JSON.parse((await request).body);
//     const id = request.nextUrl.searchParams.get("id");
//     await connectDB();
//     const updatedFileData = await FileModel.findOneAndUpdate({ "_id": id }, body, { new: true });
//     return NextResponse.json(updatedFileData, { status: 200 });
// }

