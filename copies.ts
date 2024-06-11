import fs from 'fs-extra';

type SourceDestination = { source: string; destination: string };

type Folders = SourceDestination[];

async function copyFolder(folders: Folders) {
  try {
    folders.forEach(async (folder) => {
      // Mengecek apakah folder sumber ada
      const sourceExists = await fs.pathExists(folder.source);
      if (!sourceExists) {
        console.error(`Folder source '${folder.source}' not found.`);
        return;
      }

      // Menyalin seluruh isi folder ke destination
      await fs.copy(folder.source, folder.destination, { overwrite: true });
    });

    console.log('Folder copied successfully!');
  } catch (err) {
    console.error('Error copying folder:', err);
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
