import assert from 'assert';
import { EbmlEncoder as Encoder } from '../encoder';
import "jasmine";
import { EbmlTagId } from '../models/EbmlTagId';
import { EbmlTag } from '../models/EbmlTag';
import { AllEbmlTagTypes } from '../allEbmlTagTypes';
import { EbmlTagPosition } from '../models/EbmlTagPosition';

const invalidTag = <EbmlTag>{
  type: <any>'404NotFound',
  position: undefined,
  size: -1,
  data: null
};

const incompleteTag = <EbmlTag>{
  type: AllEbmlTagTypes.get(EbmlTagId.EBML),
  position: undefined,
  size: -1,
  data: null
};

const ebmlStartTag = <EbmlTag>{
  type: AllEbmlTagTypes.get(EbmlTagId.EBML),
  position: EbmlTagPosition.Start,
  size: 10,
  data: null
};

const ebmlEndTag = <EbmlTag>{
  type: AllEbmlTagTypes.get(EbmlTagId.EBML),
  position: EbmlTagPosition.End,
  size: 10,
  data: null
};

const ebmlVersion1Tag = <EbmlTag>{
  type: AllEbmlTagTypes.get(EbmlTagId.EBMLVersion),
  position: EbmlTagPosition.Content,
  data: 1
};

const ebmlVersion0Tag = <EbmlTag>{
  type: AllEbmlTagTypes.get(EbmlTagId.EBMLVersion),
  position: EbmlTagPosition.Content,
  data: 0
};

describe('EBML', () => {
  describe('Encoder', () => {
    function createEncoder(expected, done) {
      const encoder = new Encoder();
      encoder.on('data', chunk => {
        assert.strictEqual(
          chunk.toString('hex'),
          Buffer.from(expected).toString('hex'),
        );
        encoder.on('finish', done);
        done();
      });
      encoder.on('finish', done);
      return encoder;
    }

    it('should write a single tag', done => {
      const encoder = createEncoder([0x42, 0x86, 0x81, 0x01], done);
      encoder.write(ebmlVersion1Tag);
      encoder.end();
    });
    it('should write a tag with a single child', done => {
      const encoder = createEncoder(
        [0x1a, 0x45, 0xdf, 0xa3, 0x84, 0x42, 0x86, 0x81, 0x00],
        done,
      );
      encoder.write(ebmlStartTag);
      encoder.write(ebmlVersion0Tag);
      encoder.write(ebmlEndTag);
      encoder.end();
    });
    describe('#cork and #uncork', () => {
      let encoder;
      beforeEach(() => {
        encoder = new Encoder();
      });
      it('should block flushing when corked', () => {
        encoder.write(ebmlStartTag);
        encoder.write(ebmlVersion0Tag);
        encoder.cork();
        encoder.write(ebmlEndTag);
        encoder.flush();
        assert.ok(
          encoder.buffer.toString('hex'),
          Buffer.from([0x1a, 0x45, 0xdf, 0xa3, 0x84, 0x42, 0x86, 0x81, 0x00]).toString('hex'),
        );
      });
      it('should not block flushing when uncorked', () => {
        encoder.write(ebmlStartTag);
        encoder.write(ebmlVersion0Tag);
        encoder.cork();
        encoder.write(ebmlEndTag);
        encoder.flush();
        assert.ok(
          encoder.buffer.toString('hex'),
          Buffer.from([0x1a, 0x45, 0xdf, 0xa3, 0x84, 0x42, 0x86, 0x81, 0x00]).toString('hex'),
        );
        encoder.uncork();
        encoder.flush();
        assert.notStrictEqual(encoder.buffer instanceof Buffer, undefined);
      });
    });
    describe('#writeTag', () => {
      let encoder;
      beforeAll(() => {
        encoder = new Encoder();
      });
      it('does nothing with incomplete tag data', () => {
        encoder.write(incompleteTag);
        assert.strictEqual(encoder.stack.length, 0);
      });
      it('throws with an invalid tag id', () => {
        assert.throws(
          () => {
            encoder.write(invalidTag);
          },
          /No schema entry found/,
          'Not throwing properly',
        );
      });
    });
    describe('#startTag', () => {
      let encoder;
      beforeAll(() => {
        encoder = new Encoder();
      });
      it('throws with an invalid tag id', () => {
        assert.throws(
          () => {
            encoder.write(invalidTag);
          },
          /No schema entry found/,
          'Not throwing properly',
        );
      });
    });
    describe('#_transform', () => {
      it('should do nothing on an incomplete tag', () => {
        const encoder = new Encoder();
        encoder.write(incompleteTag);
        assert.ok(encoder.buffer == null || encoder.buffer.length === 0);
      });
    });
    describe('#_bufferAndFlush', () => {
      /* eslint-disable no-underscore-dangle */
      let encoder;
      beforeEach(() => {
        encoder = new Encoder();
      });
      it('should create a new buffer (but still be empty after eval) with an empty buffer', () => {
        assert.ok(encoder.buffer == null || encoder.buffer.length === 0);
        encoder._bufferAndFlush(Buffer.from([0x42, 0x86, 0x81, 0x01]));
        assert.ok(encoder.buffer == null || encoder.buffer.length === 0);
      });
      it('should append to the buffer (and empty after eval) with an existing buffer', () => {
        encoder.buffer = Buffer.from([0x42, 0x86, 0x81, 0x01]);
        assert.ok(encoder.buffer instanceof Buffer);
        encoder._bufferAndFlush(Buffer.from([0x42, 0x86, 0x81, 0x01]));
        assert.ok(encoder.buffer == null || encoder.buffer.length === 0);
      });
      /* eslint-enable no-underscore-dangle */
    });
  });
});
