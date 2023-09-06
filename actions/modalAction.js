export async function handleCreate(newFolderName) {
    try {
        // Create a new folder in the component
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

        // Fetch the updated list of folders from the component
        const updatedFolders = await fetchFolders();
        return updatedFolders;
    } catch (error) {
        throw new Error(`Error creating folder: ${error}`);
    }
}
