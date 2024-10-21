import fs from 'fs-extra';
import path from 'path';

type SourceDestination = { source: string; destination: string };

type Folders = SourceDestination[];

async function clearFolder(folderPath: string) {
  try {
    await fs.rm(folderPath, { recursive: true, force: true });
    console.log(`${folderPath} has been cleared`);

    // Membuat kembali folder yang kosong jika perlu
    await fs.mkdir(folderPath);
    console.log(`${folderPath} has been recreated as empty`);
  } catch (err) {
    console.error(`Error while clearing folder: ${err}`);
  }
}

async function copyFolder(folders: Folders) {
  try {
    for (const folder of folders) {
      // Mengecek apakah folder sumber ada
      const sourceExists = await fs.pathExists(folder.source);
      if (!sourceExists) {
        console.error(`Folder source '${folder.source}' not found.`);
        throw new Error(`Folder source '${folder.source}' not found.`);
      }

      // Menyalin seluruh isi folder ke destination
      await fs.copy(folder.source, folder.destination, { overwrite: true });
    }

    console.log('Folder copied successfully!');
  } catch (err) {
    console.error('Error copying folder:', err);
    clearFolder(path.join(__dirname, 'build'));
  }
}

const folders: Folders = [
  {
    source: 'src/public',
    destination: 'build/public'
  }
  // tambahkan folder selain typescript yg mau di copy
];

copyFolder(folders);
