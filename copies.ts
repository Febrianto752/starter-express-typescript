import fs from "fs-extra";

async function copyFolder(source: string, destination: string) {
  try {
    // Mengecek apakah folder sumber ada
    const sourceExists = await fs.pathExists(source);
    if (!sourceExists) {
      console.error(`Folder source '${source}' not found.`);
      return;
    }

    // Menyalin seluruh isi folder ke destination
    await fs.copy(source, destination, { overwrite: true });

    console.log("Folder copied successfully!");
  } catch (err) {
    console.error("Error copying folder:", err);
  }
}

const folders = [
  {
    source: "src/public",
    dest: "build/public",
  },
  // tambahkan folder selain typescript yg mau di copy
];

folders.forEach((folder) => {
  copyFolder(folder.source, folder.dest);
});
