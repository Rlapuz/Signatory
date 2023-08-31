
'use server'

export async function handleCreate(newFolderName) {
    try {
        // Create a new folder
        const response = await fetch("http://localhost:3000/api/folder", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ name: newFolderName }),
        });

        if (!response.ok) {
            throw new Error("Failed to create folder");
        }

        // Fetch the updated list of folders
        const updatedResponse = await fetch("http://localhost:3000/api/folder", {
            method: "GET",
        });

        if (!updatedResponse.ok) {
            throw new Error("Failed to fetch folders");
        }

        const updatedFolders = await updatedResponse.json();
        return updatedFolders;
    } catch (error) {
        throw new Error(`Error creating folder: ${error}`);
    }
}
