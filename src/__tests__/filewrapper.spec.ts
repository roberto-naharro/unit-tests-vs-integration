import { parse } from 'plist';

// mocks
const mockParse = parse as jest.MockedFunction<typeof parse>;

import { stdoutToJson } from '../filewrapper';

describe('filewrapper Test Suite', () => {
  describe('stdoutToJson', () => {
    it('should return empty object if stdout is empty', () => {
      expect(stdoutToJson({ stdout: '' })).toEqual({});
    });

    it('should return empty object if stdout is undefined', () => {
      expect(stdoutToJson({ stdout: undefined } as any)).toEqual({});
    });

    it('should return empty object if stdout is null', () => {
      expect(stdoutToJson({ stdout: null } as any)).toEqual({});
    });

    it('should call parse with the stdout value', () => {
      const output = {};
      mockParse.mockReturnValueOnce(output);

      expect(stdoutToJson({ stdout: 'test' })).toEqual(output);

      expect(mockParse).toHaveBeenCalledTimes(1);
      expect(mockParse).toHaveBeenCalledWith('test');
    });
  });
});
