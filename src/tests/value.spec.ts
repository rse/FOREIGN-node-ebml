import fs from 'fs';
import assert from 'assert';
import { EbmlDecoder, EbmlTag } from '..';
import { EbmlTagPosition } from '../models/EbmlTagPosition';
import { EbmlTagId } from '../models/EbmlTagId';
import { SimpleBlockData } from '../models/SimpleBlockData';

process.setMaxListeners(Infinity);

describe('EBML', () => {
  describe('Values in tags', () => {
    describe('AVC1', () => {
      const data = fs.readFileSync('media/video-webm-codecs-avc1-42E01E.webm');

      it('should get a correct PixelWidth value from a file (2-byte unsigned int)', done => {
        const decoder = new EbmlDecoder();
        decoder.on('data', (tag: EbmlTag) => {
          if (tag.position === EbmlTagPosition.Content && tag.type.id === EbmlTagId.PixelWidth) {
            assert.strictEqual(tag.data, 352);
            done();
          }
        });
        decoder.on('finish', () => {
          assert.strictEqual(0, 1, 'hit end of file without finding tag.');
          done();
        });
        decoder.write(data);
      });

      it('should get a correct EBMLVersion value from a file (one-byte unsigned int)', done => {
        const decoder = new EbmlDecoder();
        decoder.on('data', (tag: EbmlTag) => {
          if (tag.position === EbmlTagPosition.Content && tag.type.id === EbmlTagId.EBMLVersion) {
            assert.strictEqual(tag.data, 1);
            done();
          }
          decoder.on('finish', () => {
            assert.strictEqual(0, 1, 'hit end of file without finding tag.');
            done();
          });
        });
        decoder.write(data);
      });

      it('should get a correct TimeCodeScale value from a file (3-byte unsigned int)', done => {
        const decoder = new EbmlDecoder();
        decoder.on('data', (tag: EbmlTag) => {
          if (tag.position === EbmlTagPosition.Content && tag.type.id === EbmlTagId.TimecodeScale) {
            assert.strictEqual(tag.data, 1000000);
            done();
          }
          decoder.on('finish', () => {
            assert.strictEqual(0, 1, 'hit end of file without finding tag.');
            done();
          });
        });
        decoder.write(data);
      });

      it('should get a correct TrackUID value from a file (56-bit integer in hex)', done => {
        const decoder = new EbmlDecoder();
        decoder.on('data', (tag: EbmlTag) => {
          if (tag.position === EbmlTagPosition.Content && tag.type.id === EbmlTagId.TrackUID) {
            assert.strictEqual(tag.data, '1c63824e507a46');
            done();
          }
        });
        decoder.on('finish', () => {
          assert.strictEqual(0, 1, 'hit end of file without finding tag.');
          done();
        });
        decoder.write(data);
      });

      it('should get a correct DocType value from a file (ASCII text)', done => {
        const decoder = new EbmlDecoder();
        decoder.on('data', (tag: EbmlTag) => {
          if (tag.position === EbmlTagPosition.Content && tag.type.id === EbmlTagId.DocType) {
            assert.strictEqual(tag.data, 'matroska');
            done();
          }
          decoder.on('finish', () => {
            assert.strictEqual(0, 1, 'hit end of file without finding tag.');
            done();
          });
        });
        decoder.write(data);
      });

      it('should get a correct MuxingApp value from a file (utf8 text)', done => {
        const decoder = new EbmlDecoder();
        decoder.on('data', (tag: EbmlTag) => {
          if (tag.position === EbmlTagPosition.Content && tag.type.id === EbmlTagId.MuxingApp) {
            assert.strictEqual(tag.data, 'Chrome', JSON.stringify(tag));
            done();
          }
          decoder.on('finish', () => {
            assert.strictEqual(0, 1, 'hit end of file without finding tag.');
            done();
          });
        });
        decoder.write(data);
      });

      it('should get a correct SimpleBlock time payload from a file (binary)', done => {
        const decoder = new EbmlDecoder();
        decoder.on('data', (tag: EbmlTag) => {
          if (tag.position === EbmlTagPosition.Content && tag.type.id === EbmlTagId.SimpleBlock) {
            let simpleBlockData = <SimpleBlockData>tag.data;
            if (simpleBlockData.value > 0 && simpleBlockData.value < 200) {
              /* look at second simpleBlock */
              assert.strictEqual(simpleBlockData.track, 1, 'track');
              assert.strictEqual(simpleBlockData.value, 191, 'value (timestamp)');
              assert.strictEqual(
                simpleBlockData.payload.byteLength,
                169,
                JSON.stringify(simpleBlockData.payload),
              );
              done();
            }
          }
        });
        decoder.on('finish', () => {
          assert.strictEqual(0, 1, 'hit end of file without finding tag.');
          done();
        });
        decoder.write(data);
      });
    });

    describe('VP8', () => {
      const data = fs.readFileSync('media/video-webm-codecs-vp8.webm');

      it('should get a correct PixelWidth value from a video/webm; codecs="vp8" file (2-byte unsigned int)', done => {
        const decoder = new EbmlDecoder();
        decoder.on('data', (tag: EbmlTag) => {
          if (tag.position === EbmlTagPosition.Content && tag.type.id === EbmlTagId.PixelWidth) {
            assert.strictEqual(tag.data, 352);
            done();
          }
        });
        decoder.on('finish', () => {
          assert.strictEqual(0, 1, 'hit end of file without finding tag.');
          done();
        });
        decoder.write(data);
      });

      it('should get a correct EBMLVersion value from a video/webm; codecs="vp8" file (one-byte unsigned int)', done => {
        const decoder = new EbmlDecoder();
        decoder.on('data', (tag: EbmlTag) => {
          if (tag.position === EbmlTagPosition.Content && tag.type.id === EbmlTagId.EBMLVersion) {
            assert.strictEqual(tag.data, 1);
            done();
          }
        });
        decoder.on('finish', () => {
          assert.strictEqual(0, 1, 'hit end of file without finding tag.');
          done();
        });
        decoder.write(data);
      });

      it('should get a correct TimeCodeScale value from a video/webm; codecs="vp8" file (3-byte unsigned int)', done => {
        const decoder = new EbmlDecoder();
        decoder.on('data', (tag: EbmlTag) => {
          if (tag.position === EbmlTagPosition.Content && tag.type.id === EbmlTagId.TimecodeScale) {
            assert.strictEqual(tag.data, 1000000);
            done();
          }
        });
        decoder.on('finish', () => {
          assert.strictEqual(0, 1, 'hit end of file without finding tag.');
          done();
        });
        decoder.write(data);
      });

      it('should get a correct TrackUID value from a video/webm; codecs="vp8" file (56-bit integer in hex)', done => {
        const decoder = new EbmlDecoder();
        decoder.on('data', (tag: EbmlTag) => {
          if (tag.position === EbmlTagPosition.Content && tag.type.id === EbmlTagId.TrackUID) {
            assert.strictEqual(tag.data, '306d02aaa74d06');
            done();
          }
          decoder.on('finish', () => {
            assert.strictEqual(0, 1, 'hit end of file without finding tag.');
            done();
          });
        });
        decoder.write(data);
      });

      it('should get a correct DocType value from a video/webm; codecs="vp8" file (ASCII text)', done => {
        const decoder = new EbmlDecoder();
        decoder.on('data', (tag: EbmlTag) => {
          if (tag.position === EbmlTagPosition.Content && tag.type.id === EbmlTagId.DocType) {
            assert.strictEqual(tag.data, 'webm');
            done();
          }
        });
        decoder.on('finish', () => {
          assert.strictEqual(0, 1, 'hit end of file without finding tag.');
          done();
        });
        decoder.write(data);
      });

      it('should get a correct MuxingApp value from a video/webm; codecs="vp8" file (utf8 text)', done => {
        const decoder = new EbmlDecoder();
        decoder.on('data', (tag: EbmlTag) => {
          if (tag.position === EbmlTagPosition.Content && tag.type.id === EbmlTagId.MuxingApp) {
            assert.strictEqual(tag.data, 'Chrome');
            done();
          }
        });
        decoder.write(data);
        decoder.on('finish', () => {
          assert.strictEqual(0, 1, 'hit end of file without finding tag.');
          done();
        });
      });

      it('should get a correct SimpleBlock time payload from a file (binary)', done => {
        const decoder = new EbmlDecoder();
        decoder.on(
          'data',
          (tag: EbmlTag) => {
            if (tag.position === EbmlTagPosition.Content && tag.type.id === EbmlTagId.SimpleBlock) {
              let simpleBlockData = <SimpleBlockData>tag.data;
              if (simpleBlockData.value > 0 && simpleBlockData.value < 100) {
                assert.strictEqual(simpleBlockData.track, 1, 'track');
                assert.strictEqual(
                  simpleBlockData.value,
                  96,
                  JSON.stringify(tag),
                );
                /* look at second simpleBlock */
                assert.strictEqual(
                  simpleBlockData.payload.byteLength,
                  43,
                  JSON.stringify(tag),
                );
                assert.strictEqual(simpleBlockData.discardable, false, 'discardable');
                done();
              }
            }
          },
        );
        decoder.on('finish', () => {
          assert.strictEqual(0, 1, 'hit end of file without finding tag.');
          done();
        });
        decoder.write(data);
      });
    });
  });
});
