import fs from 'fs';

export const readFilePromise = (fileUrl: string): Promise<Buffer> => new Promise((resolve, reject) => {
    fs.readFile(fileUrl, (err: any, data: Buffer) => {
        if (err) {
            reject(err);
        }
        resolve(data);
    });
});

export const goToSleepPromise = (ms: number): Promise<string> => new Promise((resolve, reject) => {
    setTimeout(((err: any) => {
            if (err) {
                reject(err);
            }
            resolve("success");
         
        }),ms)
  
});