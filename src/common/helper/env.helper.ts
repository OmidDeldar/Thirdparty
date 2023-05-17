import { resolve } from 'path';

export function getEnvPath(): string {
  // const prefix = '../';
  const env: string | undefined = process.env.APP_MODE;
  const filename: string = env ? `.env.${env}` : '.env.local';
  return resolve(`${filename}`);
}
