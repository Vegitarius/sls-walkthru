import { Storage } from 'aws-amplify';

export async function s3Upload(file) {
  // creates a unique filename using date.now (not recc. if app used heavily)
  const filename = `${Date.now()}-${file.name}`;

  // uploads the file to users S3 folder
  const stored = await Storage.vault.put(filename, file, {
    contentType: file.type
  });

  return stored.key
}