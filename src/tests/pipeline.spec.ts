import assert from 'assert';
import { EbmlStreamDecoder } from '../decoder';
import { EbmlStreamEncoder } from '../encoder';
import { EbmlTag } from '../models/EbmlTag';
import { EbmlTagId } from '../models/EbmlTagId';
import { EbmlTagFactory } from '../models/EbmlTagFactory';
import { EbmlTagPosition } from '../models/EbmlTagPosition';

describe('ebml', () => {
  describe('Pipeline', () => {
    it('should output input buffer', done => {
      const decoder = new EbmlStreamDecoder();
      const encoder = new EbmlStreamEncoder();
      const buffer = Buffer.from([
        0x1a,
        0x45,
        0xdf,
        0xa3,
        0x84,
        0x42,
        0x86,
        0x81,
        0x00,
      ]);

      encoder.on('data', chunk => {
        assert.strictEqual(chunk.toString('hex'), buffer.toString('hex'));
        encoder.on('finish', done);
        done();
      });
      encoder.on('finish', done);
      decoder.pipe(encoder);
      decoder.write(buffer);
      decoder.end();
    });

    it('should support end === -1', done => {
      const decoder = new EbmlStreamDecoder();
      const encoder = new EbmlStreamEncoder();

      encoder.write(
        Object.assign(EbmlTagFactory.create(EbmlTagId.Cluster), {
          position: EbmlTagPosition.Start,
          size: -1
        })
      );
      encoder.write(
        Object.assign(EbmlTagFactory.create(EbmlTagId.Cluster), {
          position: EbmlTagPosition.End,
          size: -1
        })
      );

      encoder.pipe(decoder).on('data', (tag: EbmlTag) => {
        assert.strictEqual(tag.id, EbmlTagId.Cluster);
        //assert.strictEqual(data[1].start, 0);
        assert.strictEqual(tag.size, -1);
        done();
      });
      encoder.pipe(decoder).on('finish', done);
      encoder.end();
    });
  });
});
