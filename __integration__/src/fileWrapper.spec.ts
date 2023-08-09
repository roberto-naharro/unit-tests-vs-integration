import { stdoutToJson } from '../../src/filewrapper';

jest.unmock('plist');

describe('filewrapper Integration Tests', () => {
  describe('stdoutToJson', () => {
    it('should convert correctly from xml to json', () => {
      const xml = `<?xml version="1.0" encoding="UTF-8"?>
      <!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN"
      "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
      <plist version="1.0">
      <dict>
          <key>CFBundleDevelopmentRegion</key>
          <string>en</string>
          <key>CFBundleExecutable</key>
          <string>$(EXECUTABLE_NAME)</string>
          <key>CFBundleIdentifier</key>
          <string>$(PRODUCT_BUNDLE_IDENTIFIER)</string>
      </dict>
      </plist>
      `;

      const json = {
        CFBundleDevelopmentRegion: 'en',
        CFBundleExecutable: '$(EXECUTABLE_NAME)',
        CFBundleIdentifier: '$(PRODUCT_BUNDLE_IDENTIFIER)',
      };

      expect(stdoutToJson({ stdout: xml })).toEqual(json);
    });
  });
});
