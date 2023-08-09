import { parse } from 'plist';

export const stdoutToJson = <O>({ stdout }: { stdout: string }) => {
  if (!stdout) {
    return {} as O;
  }
  return parse(stdout ?? '') as unknown as O;
};
