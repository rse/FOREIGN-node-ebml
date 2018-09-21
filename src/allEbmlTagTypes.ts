import { EbmlTagId } from "./models/EbmlTagId";
import { EbmlTagType } from "./models/EbmlTagType";
import { EbmlElementType } from "./models/EbmlElementType";

export const AllEbmlTagTypes = new Map([
    [
        EbmlTagId.ChapterDisplay,
        <EbmlTagType>{
            id: EbmlTagId.ChapterDisplay,
            dataType: EbmlElementType.Master,
            level: 4,
            minver: 1,
            description: `Contains all possible strings to use for the chapter display.`
        },
    ],
    [
        EbmlTagId.TrackType,
        <EbmlTagType>{
            id: EbmlTagId.TrackType,
            dataType: EbmlElementType.UnsignedInt,
            level: 3,
            minver: 1,
            description: `A set of track types coded on 8 bits (1: video, 2: audio, 3: complex, 0x10: logo, 0x11: subtitle, 0x12: buttons, 0x20: control).`
        },
    ],
    [
        EbmlTagId.ChapString,
        <EbmlTagType>{
            id: EbmlTagId.ChapString,
            dataType: EbmlElementType['Utf-8'],
            level: 5,
            minver: 1,
            description: `Contains the string to use as the chapter atom.`
        },
    ],
    [
        EbmlTagId.CodecID,
        <EbmlTagType>{
            id: EbmlTagId.CodecID,
            dataType: EbmlElementType.String,
            level: 3,
            minver: 1,
            description: `An ID corresponding to the codec, see the codec page for more info.`
        },
    ],
    [
        EbmlTagId.FlagDefault,
        <EbmlTagType>{
            id: EbmlTagId.FlagDefault,
            dataType: EbmlElementType.UnsignedInt,
            level: 3,
            minver: 1,
            description: `Set if that track (audio, video or subs) SHOULD be active if no language found matches the user preference. (1 bit)`
        },
    ],
    [
        EbmlTagId.ChapterTrackNumber,
        <EbmlTagType>{
            id: EbmlTagId.ChapterTrackNumber,
            dataType: EbmlElementType.UnsignedInt,
            level: 5,
            minver: 1,
            description: `UID of the Track to apply this chapter too. In the absense of a control track, choosing this chapter will select the listed Tracks and deselect unlisted tracks. Absense of this element indicates that the Chapter should be applied to any currently used Tracks.`
        },
    ],
    [
        EbmlTagId.ChapterTimeStart,
        <EbmlTagType>{
            id: EbmlTagId.ChapterTimeStart,
            dataType: EbmlElementType.UnsignedInt,
            level: 4,
            minver: 1,
            description: `Timestamp of the start of Chapter (not scaled).`
        },
    ],
    [
        EbmlTagId.ChapterTimeEnd,
        <EbmlTagType>{
            id: EbmlTagId.ChapterTimeEnd,
            dataType: EbmlElementType.UnsignedInt,
            level: 4,
            minver: 1,
            description: `Timestamp of the end of Chapter (timestamp excluded, not scaled).`
        },
    ],
    [
        EbmlTagId.CueRefTime,
        <EbmlTagType>{
            id: EbmlTagId.CueRefTime,
            dataType: EbmlElementType.UnsignedInt,
            level: 5,
            minver: 2,
            description: `Timestamp of the referenced Block.`
        },
    ],
    [
        EbmlTagId.CueRefCluster,
        <EbmlTagType>{
            id: EbmlTagId.CueRefCluster,
            dataType: EbmlElementType.UnsignedInt,
            level: 5,
            minver: 0,
            description: `The Position of the Cluster containing the referenced Block.`
        },
    ],
    [
        EbmlTagId.ChapterFlagHidden,
        <EbmlTagType>{
            id: EbmlTagId.ChapterFlagHidden,
            dataType: EbmlElementType.UnsignedInt,
            level: 4,
            minver: 1,
            description: `If a chapter is hidden (1), it should not be available to the user interface (but still to Control Tracks; see flag notes). (1 bit)`
        },
    ],
    [
        EbmlTagId.ContentCompAlgo,
        <EbmlTagType>{
            id: EbmlTagId.ContentCompAlgo,
            dataType: EbmlElementType.UnsignedInt,
            level: 6,
            minver: 1,
            description: `The compression algorithm used. Algorithms that have been specified so far are: 0 - zlib,   3 - Header Stripping`
        },
    ],
    [
        EbmlTagId.ContentCompSettings,
        <EbmlTagType>{
            id: EbmlTagId.ContentCompSettings,
            dataType: EbmlElementType.Binary,
            level: 6,
            minver: 1,
            description: `Settings that might be needed by the decompressor. For Header Stripping (ContentCompAlgo=3), the bytes that were removed from the beggining of each frames of the track.`
        },
    ],
    [
        EbmlTagId.DocType,
        <EbmlTagType>{
            id: EbmlTagId.DocType,
            dataType: EbmlElementType.String,
            level: 1,
            minver: 1,
            description: `A string that describes the type of document that follows this EBML header. 'matroska' in our case or 'webm' for webm files.`
        },
    ],
    [
        EbmlTagId.DocTypeReadVersion,
        <EbmlTagType>{
            id: EbmlTagId.DocTypeReadVersion,
            dataType: EbmlElementType.UnsignedInt,
            level: 1,
            minver: 1,
            description: `The minimum DocType version an interpreter has to support to read this file.`
        },
    ],
    [
        EbmlTagId.EBMLVersion,
        <EbmlTagType>{
            id: EbmlTagId.EBMLVersion,
            dataType: EbmlElementType.UnsignedInt,
            level: 1,
            minver: 1,
            description: `The version of EBML parser used to create the file.`
        },
    ],
    [
        EbmlTagId.DocTypeVersion,
        <EbmlTagType>{
            id: EbmlTagId.DocTypeVersion,
            dataType: EbmlElementType.UnsignedInt,
            level: 1,
            minver: 1,
            description: `The version of DocType interpreter used to create the file.`
        },
    ],
    [
        EbmlTagId.SegmentFamily,
        <EbmlTagType>{
            id: EbmlTagId.SegmentFamily,
            dataType: EbmlElementType.Binary,
            level: 2,
            minver: 1,
            description: `A randomly generated unique ID that all segments related to each other must use (128 bits).`
        },
    ],
    [
        EbmlTagId.DateUTC,
        <EbmlTagType>{
            id: EbmlTagId.DateUTC,
            dataType: EbmlElementType.Date,
            level: 2,
            minver: 1,
            description: `Date of the origin of timestamp (value 0), i.e. production date.`
        },
    ],
    [
        EbmlTagId.TagDefault,
        <EbmlTagType>{
            id: EbmlTagId.TagDefault,
            dataType: EbmlElementType.UnsignedInt,
            level: 4,
            minver: 1,
            description: `Indication to know if this is the default/original language to use for the given tag. (1 bit)`
        },
    ],
    [
        EbmlTagId.TagBinary,
        <EbmlTagType>{
            id: EbmlTagId.TagBinary,
            dataType: EbmlElementType.Binary,
            level: 4,
            minver: 1,
            description: `The values of the Tag if it is binary. Note that this cannot be used in the same SimpleTag as TagString.`
        },
    ],
    [
        EbmlTagId.TagString,
        <EbmlTagType>{
            id: EbmlTagId.TagString,
            dataType: EbmlElementType['Utf-8'],
            level: 4,
            minver: 1,
            description: `The value of the Tag.`
        },
    ],
    [
        EbmlTagId.Duration,
        <EbmlTagType>{
            id: EbmlTagId.Duration,
            dataType: EbmlElementType.Float,
            level: 2,
            minver: 1,
            description: `Duration of the segment (based on TimecodeScale).`
        },
    ],
    [
        EbmlTagId.ChapterFlagEnabled,
        <EbmlTagType>{
            id: EbmlTagId.ChapterFlagEnabled,
            dataType: EbmlElementType.UnsignedInt,
            level: 4,
            minver: 1,
            description: `Specify wether the chapter is enabled. It can be enabled/disabled by a Control Track. When disabled, the movie should skip all the content between the TimeStart and TimeEnd of this chapter (see flag notes). (1 bit)`
        },
    ],
    [
        EbmlTagId.FileMimeType,
        <EbmlTagType>{
            id: EbmlTagId.FileMimeType,
            dataType: EbmlElementType.String,
            level: 3,
            minver: 1,
            description: `MIME type of the file.`
        },
    ],
    [
        EbmlTagId.FileUsedStartTime,
        <EbmlTagType>{
            id: EbmlTagId.FileUsedStartTime,
            dataType: EbmlElementType.UnsignedInt,
            level: 3,
            minver: undefined,
            description: `DivX font extension`
        },
    ],
    [
        EbmlTagId.FileUsedEndTime,
        <EbmlTagType>{
            id: EbmlTagId.FileUsedEndTime,
            dataType: EbmlElementType.UnsignedInt,
            level: 3,
            minver: undefined,
            description: `DivX font extension`
        },
    ],
    [
        EbmlTagId.FileReferral,
        <EbmlTagType>{
            id: EbmlTagId.FileReferral,
            dataType: EbmlElementType.Binary,
            level: 3,
            minver: undefined,
            description: `A binary value that a track/codec can refer to when the attachment is needed.`
        },
    ],
    [
        EbmlTagId.ContentEncodingOrder,
        <EbmlTagType>{
            id: EbmlTagId.ContentEncodingOrder,
            dataType: EbmlElementType.UnsignedInt,
            level: 5,
            minver: 1,
            description: `Tells when this modification was used during encoding/muxing starting with 0 and counting upwards. The decoder/demuxer has to start with the highest order number it finds and work its way down. This value has to be unique over all ContentEncodingOrder elements in the segment.`
        },
    ],
    [
        EbmlTagId.ContentEncodingScope,
        <EbmlTagType>{
            id: EbmlTagId.ContentEncodingScope,
            dataType: EbmlElementType.UnsignedInt,
            level: 5,
            minver: 1,
            description: `A bit field that describes which elements have been modified in this way. Values (big endian) can be OR'ed. Possible values: 1 - all frame contents, 2 - the track's private data, 4 - the next ContentEncoding (next ContentEncodingOrder. Either the data inside ContentCompression and/or ContentEncryption)`
        },
    ],
    [
        EbmlTagId.ContentEncodingType,
        <EbmlTagType>{
            id: EbmlTagId.ContentEncodingType,
            dataType: EbmlElementType.UnsignedInt,
            level: 5,
            minver: 1,
            description: `A value describing what kind of transformation has been done. Possible values: 0 - compression, 1 - encryption`
        },
    ],
    [
        EbmlTagId.ContentCompression,
        <EbmlTagType>{
            id: EbmlTagId.ContentCompression,
            dataType: EbmlElementType.Master,
            level: 5,
            minver: 1,
            description: `Settings describing the compression used. Must be present if the value of ContentEncodingType is 0 and absent otherwise. Each block must be decompressable even if no previous block is available in order not to prevent seeking.`
        },
    ],
    [
        EbmlTagId.ContentEncryption,
        <EbmlTagType>{
            id: EbmlTagId.ContentEncryption,
            dataType: EbmlElementType.Master,
            level: 5,
            minver: 1,
            description: `Settings describing the encryption used. Must be present if the value of ContentEncodingType is 1 and absent otherwise.`
        },
    ],
    [
        EbmlTagId.CueBlockNumber,
        <EbmlTagType>{
            id: EbmlTagId.CueBlockNumber,
            dataType: EbmlElementType.UnsignedInt,
            level: 4,
            minver: 1,
            description: `Number of the Block in the specified Cluster.`
        },
    ],
    [
        EbmlTagId.ChapterStringUID,
        <EbmlTagType>{
            id: EbmlTagId.ChapterStringUID,
            dataType: EbmlElementType['Utf-8'],
            level: 4,
            minver: 3,
            description: `A unique string ID to identify the Chapter. Use for WebVTT cue identifier storage.`
        },
    ],
    [
        EbmlTagId.WritingApp,
        <EbmlTagType>{
            id: EbmlTagId.WritingApp,
            dataType: EbmlElementType['Utf-8'],
            level: 2,
            minver: 1,
            description: `Writing application ("mkvmerge-0.3.3").`
        },
    ],
    [
        EbmlTagId.SilentTracks,
        <EbmlTagType>{
            id: EbmlTagId.SilentTracks,
            dataType: EbmlElementType.Master,
            level: 2,
            minver: 1,
            description: `The list of tracks that are not used in that part of the stream. It is useful when using overlay tracks on seeking. Then you should decide what track to use.`
        },
    ],
    [
        EbmlTagId.ContentEncoding,
        <EbmlTagType>{
            id: EbmlTagId.ContentEncoding,
            dataType: EbmlElementType.Master,
            level: 4,
            minver: 1,
            description: `Settings for one content encoding like compression or encryption.`
        },
    ],
    [
        EbmlTagId.BitDepth,
        <EbmlTagType>{
            id: EbmlTagId.BitDepth,
            dataType: EbmlElementType.UnsignedInt,
            level: 4,
            minver: 1,
            description: `Bits per sample, mostly used for PCM.`
        },
    ],
    [
        EbmlTagId.SignedElement,
        <EbmlTagType>{
            id: EbmlTagId.SignedElement,
            dataType: EbmlElementType.Binary,
            level: 3,
            minver: undefined,
            description: `An element ID whose data will be used to compute the signature.`
        },
    ],
    [
        EbmlTagId.TrackTranslate,
        <EbmlTagType>{
            id: EbmlTagId.TrackTranslate,
            dataType: EbmlElementType.Master,
            level: 3,
            minver: 1,
            description: `The track identification for the given Chapter Codec.`
        },
    ],
    [
        EbmlTagId.ChapProcessCommand,
        <EbmlTagType>{
            id: EbmlTagId.ChapProcessCommand,
            dataType: EbmlElementType.Master,
            level: 5,
            minver: 1,
            description: `Contains all the commands associated to the Atom.`
        },
    ],
    [
        EbmlTagId.ChapProcessTime,
        <EbmlTagType>{
            id: EbmlTagId.ChapProcessTime,
            dataType: EbmlElementType.UnsignedInt,
            level: 6,
            minver: 1,
            description: `Defines when the process command should be handled (0: during the whole chapter, 1: before starting playback, 2: after playback of the chapter).`
        },
    ],
    [
        EbmlTagId.ChapterTranslate,
        <EbmlTagType>{
            id: EbmlTagId.ChapterTranslate,
            dataType: EbmlElementType.Master,
            level: 2,
            minver: 1,
            description: `A tuple of corresponding ID used by chapter codecs to represent this segment.`
        },
    ],
    [
        EbmlTagId.ChapProcessData,
        <EbmlTagType>{
            id: EbmlTagId.ChapProcessData,
            dataType: EbmlElementType.Binary,
            level: 6,
            minver: 1,
            description: `Contains the command information. The data should be interpreted depending on the ChapProcessCodecID value. For ChapProcessCodecID = 1, the data correspond to the binary DVD cell pre/post commands.`
        },
    ],
    [
        EbmlTagId.ChapProcess,
        <EbmlTagType>{
            id: EbmlTagId.ChapProcess,
            dataType: EbmlElementType.Master,
            level: 4,
            minver: 1,
            description: `Contains all the commands associated to the Atom.`
        },
    ],
    [
        EbmlTagId.ChapProcessCodecID,
        <EbmlTagType>{
            id: EbmlTagId.ChapProcessCodecID,
            dataType: EbmlElementType.UnsignedInt,
            level: 5,
            minver: 1,
            description: `Contains the type of the codec used for the processing. A value of 0 means native Matroska processing (to be defined), a value of 1 means the DVD command set is used. More codec IDs can be added later.`
        },
    ],
    [
        EbmlTagId.Tag,
        <EbmlTagType>{
            id: EbmlTagId.Tag,
            dataType: EbmlElementType.Master,
            level: 2,
            minver: 1,
            description: `Element containing elements specific to Tracks/Chapters.`
        },
    ],
    [
        EbmlTagId.SegmentFilename,
        <EbmlTagType>{
            id: EbmlTagId.SegmentFilename,
            dataType: EbmlElementType['Utf-8'],
            level: 2,
            minver: 1,
            description: `A filename corresponding to this segment.`
        },
    ],
    [
        EbmlTagId.AttachmentLink,
        <EbmlTagType>{
            id: EbmlTagId.AttachmentLink,
            dataType: EbmlElementType.UnsignedInt,
            level: 3,
            minver: 1,
            description: `The UID of an attachment that is used by this codec.`
        },
    ],
    [
        EbmlTagId.CodecName,
        <EbmlTagType>{
            id: EbmlTagId.CodecName,
            dataType: EbmlElementType['Utf-8'],
            level: 3,
            minver: 1,
            description: `A human-readable string specifying the codec.`
        },
    ],
    [
        EbmlTagId.Segment,
        <EbmlTagType>{
            id: EbmlTagId.Segment,
            dataType: EbmlElementType.Master,
            level: 0,
            minver: 1,
            description: `This element contains all other top-level (level 1) elements. Typically a Matroska file is composed of 1 segment.`
        },
    ],
    [
        EbmlTagId.TagLanguage,
        <EbmlTagType>{
            id: EbmlTagId.TagLanguage,
            dataType: EbmlElementType.String,
            level: 4,
            minver: 1,
            description: `Specifies the language of the tag specified, in the Matroska languages form.`
        },
    ],
    [
        EbmlTagId.TagName,
        <EbmlTagType>{
            id: EbmlTagId.TagName,
            dataType: EbmlElementType['Utf-8'],
            level: 4,
            minver: 1,
            description: `The name of the Tag that is going to be stored.`
        },
    ],
    [
        EbmlTagId.SimpleTag,
        <EbmlTagType>{
            id: EbmlTagId.SimpleTag,
            dataType: EbmlElementType.Master,
            level: 3,
            minver: 1,
            description: `Contains general information about the target.`
        },
    ],
    [
        EbmlTagId.TagAttachmentUID,
        <EbmlTagType>{
            id: EbmlTagId.TagAttachmentUID,
            dataType: EbmlElementType.UnsignedInt,
            level: 4,
            minver: 1,
            description: `A unique ID to identify the Attachment(s) the tags belong to. If the value is 0 at this level, the tags apply to all the attachments in the Segment.`
        },
    ],
    [
        EbmlTagId.TagChapterUID,
        <EbmlTagType>{
            id: EbmlTagId.TagChapterUID,
            dataType: EbmlElementType.UnsignedInt,
            level: 4,
            minver: 1,
            description: `A unique ID to identify the Chapter(s) the tags belong to. If the value is 0 at this level, the tags apply to all chapters in the Segment.`
        },
    ],
    [
        EbmlTagId.TagEditionUID,
        <EbmlTagType>{
            id: EbmlTagId.TagEditionUID,
            dataType: EbmlElementType.UnsignedInt,
            level: 4,
            minver: 1,
            description: `A unique ID to identify the EditionEntry(s) the tags belong to. If the value is 0 at this level, the tags apply to all editions in the Segment.`
        },
    ],
    [
        EbmlTagId.TagTrackUID,
        <EbmlTagType>{
            id: EbmlTagId.TagTrackUID,
            dataType: EbmlElementType.UnsignedInt,
            level: 4,
            minver: 1,
            description: `A unique ID to identify the Track(s) the tags belong to. If the value is 0 at this level, the tags apply to all tracks in the Segment.`
        },
    ],
    [
        EbmlTagId.TargetType,
        <EbmlTagType>{
            id: EbmlTagId.TargetType,
            dataType: EbmlElementType.String,
            level: 4,
            minver: 1,
            description: `An  string that can be used to display the logical level of the target like "ALBUM", "TRACK", "MOVIE", "CHAPTER", etc (see TargetType).`
        },
    ],
    [
        EbmlTagId.TargetTypeValue,
        <EbmlTagType>{
            id: EbmlTagId.TargetTypeValue,
            dataType: EbmlElementType.UnsignedInt,
            level: 4,
            minver: 1,
            description: `A number to indicate the logical level of the target (see TargetType).`
        },
    ],
    [
        EbmlTagId.Targets,
        <EbmlTagType>{
            id: EbmlTagId.Targets,
            dataType: EbmlElementType.Master,
            level: 3,
            minver: 1,
            description: `Contain all UIDs where the specified meta data apply. It is empty to describe everything in the segment.`
        },
    ],
    [
        EbmlTagId.Tags,
        <EbmlTagType>{
            id: EbmlTagId.Tags,
            dataType: EbmlElementType.Master,
            level: 1,
            minver: 1,
            description: `Element containing elements specific to Tracks/Chapters. A list of valid tags can be found here.`
        },
    ],
    [
        EbmlTagId.ChapProcessPrivate,
        <EbmlTagType>{
            id: EbmlTagId.ChapProcessPrivate,
            dataType: EbmlElementType.Binary,
            level: 5,
            minver: 1,
            description: `Some optional data attached to the ChapProcessCodecID information. For ChapProcessCodecID = 1, it is the "DVD level" equivalent.`
        },
    ],
    [
        EbmlTagId.ChapCountry,
        <EbmlTagType>{
            id: EbmlTagId.ChapCountry,
            dataType: EbmlElementType.String,
            level: 5,
            minver: 1,
            description: `The countries corresponding to the string, same 2 octets as in Internet domains.`
        },
    ],
    [
        EbmlTagId.ChapLanguage,
        <EbmlTagType>{
            id: EbmlTagId.ChapLanguage,
            dataType: EbmlElementType.String,
            level: 5,
            minver: 1,
            description: `The languages corresponding to the string, in the bibliographic ISO-639-2 form.`
        },
    ],
    [
        EbmlTagId.ChapterTrack,
        <EbmlTagType>{
            id: EbmlTagId.ChapterTrack,
            dataType: EbmlElementType.Master,
            level: 4,
            minver: 1,
            description: `List of tracks on which the chapter applies. If this element is not present, all tracks apply`
        },
    ],
    [
        EbmlTagId.ChapterPhysicalEquiv,
        <EbmlTagType>{
            id: EbmlTagId.ChapterPhysicalEquiv,
            dataType: EbmlElementType.UnsignedInt,
            level: 4,
            minver: 1,
            description: `Specify the physical equivalent of this ChapterAtom like "DVD" (60) or "SIDE" (50), see complete list of values.`
        },
    ],
    [
        EbmlTagId.ChapterSegmentEditionUID,
        <EbmlTagType>{
            id: EbmlTagId.ChapterSegmentEditionUID,
            dataType: EbmlElementType.UnsignedInt,
            level: 4,
            minver: 1,
            description: `The EditionUID to play from the segment linked in ChapterSegmentUID.`
        },
    ],
    [
        EbmlTagId.ChapterSegmentUID,
        <EbmlTagType>{
            id: EbmlTagId.ChapterSegmentUID,
            dataType: EbmlElementType.Binary,
            level: 4,
            minver: 1,
            description: `A segment to play in place of this chapter. Edition ChapterSegmentEditionUID should be used for this segment, otherwise no edition is used.`
        },
    ],
    [
        EbmlTagId.ChapterUID,
        <EbmlTagType>{
            id: EbmlTagId.ChapterUID,
            dataType: EbmlElementType.UnsignedInt,
            level: 4,
            minver: 1,
            description: `A unique ID to identify the Chapter.`
        },
    ],
    [
        EbmlTagId.ChapterAtom,
        <EbmlTagType>{
            id: EbmlTagId.ChapterAtom,
            dataType: EbmlElementType.Master,
            level: 3,
            minver: 1,
            description: `Contains the atom information to use as the chapter atom (apply to all tracks).`
        },
    ],
    [
        EbmlTagId.EditionFlagOrdered,
        <EbmlTagType>{
            id: EbmlTagId.EditionFlagOrdered,
            dataType: EbmlElementType.UnsignedInt,
            level: 3,
            minver: 1,
            description: `Specify if the chapters can be defined multiple times and the order to play them is enforced. (1 bit)`
        },
    ],
    [
        EbmlTagId.EditionFlagDefault,
        <EbmlTagType>{
            id: EbmlTagId.EditionFlagDefault,
            dataType: EbmlElementType.UnsignedInt,
            level: 3,
            minver: 1,
            description: `If a flag is set (1) the edition should be used as the default one. (1 bit)`
        },
    ],
    [
        EbmlTagId.EditionFlagHidden,
        <EbmlTagType>{
            id: EbmlTagId.EditionFlagHidden,
            dataType: EbmlElementType.UnsignedInt,
            level: 3,
            minver: 1,
            description: `If an edition is hidden (1), it should not be available to the user interface (but still to Control Tracks; see flag notes). (1 bit)`
        },
    ],
    [
        EbmlTagId.EditionUID,
        <EbmlTagType>{
            id: EbmlTagId.EditionUID,
            dataType: EbmlElementType.UnsignedInt,
            level: 3,
            minver: 1,
            description: `A unique ID to identify the edition. It's useful for tagging an edition.`
        },
    ],
    [
        EbmlTagId.EditionEntry,
        <EbmlTagType>{
            id: EbmlTagId.EditionEntry,
            dataType: EbmlElementType.Master,
            level: 2,
            minver: 1,
            description: `Contains all information about a segment edition.`
        },
    ],
    [
        EbmlTagId.Chapters,
        <EbmlTagType>{
            id: EbmlTagId.Chapters,
            dataType: EbmlElementType.Master,
            level: 1,
            minver: 1,
            description: `A system to define basic menus and partition data. For more detailed information, look at the Chapters Explanation.`
        },
    ],
    [
        EbmlTagId.FileUID,
        <EbmlTagType>{
            id: EbmlTagId.FileUID,
            dataType: EbmlElementType.UnsignedInt,
            level: 3,
            minver: 1,
            description: `Unique ID representing the file, as random as possible.`
        },
    ],
    [
        EbmlTagId.FileData,
        <EbmlTagType>{
            id: EbmlTagId.FileData,
            dataType: EbmlElementType.Binary,
            level: 3,
            minver: 1,
            description: `The data of the file.`
        },
    ],
    [
        EbmlTagId.FileName,
        <EbmlTagType>{
            id: EbmlTagId.FileName,
            dataType: EbmlElementType['Utf-8'],
            level: 3,
            minver: 1,
            description: `Filename of the attached file.`
        },
    ],
    [
        EbmlTagId.FileDescription,
        <EbmlTagType>{
            id: EbmlTagId.FileDescription,
            dataType: EbmlElementType['Utf-8'],
            level: 3,
            minver: 1,
            description: `A human-friendly name for the attached file.`
        },
    ],
    [
        EbmlTagId.AttachedFile,
        <EbmlTagType>{
            id: EbmlTagId.AttachedFile,
            dataType: EbmlElementType.Master,
            level: 2,
            minver: 1,
            description: `An attached file.`
        },
    ],
    [
        EbmlTagId.Attachments,
        <EbmlTagType>{
            id: EbmlTagId.Attachments,
            dataType: EbmlElementType.Master,
            level: 1,
            minver: 1,
            description: `Contain attached files.`
        },
    ],
    [
        EbmlTagId.CueRefCodecState,
        <EbmlTagType>{
            id: EbmlTagId.CueRefCodecState,
            dataType: EbmlElementType.UnsignedInt,
            level: 5,
            minver: undefined,
            description: `The position of the Codec State corresponding to this referenced element. 0 means that the data is taken from the initial Track Entry.`
        },
    ],
    [
        EbmlTagId.CueRefNumber,
        <EbmlTagType>{
            id: EbmlTagId.CueRefNumber,
            dataType: EbmlElementType.UnsignedInt,
            level: 5,
            minver: undefined,
            description: `Number of the referenced Block of Track X in the specified Cluster.`
        },
    ],
    [
        EbmlTagId.CueReference,
        <EbmlTagType>{
            id: EbmlTagId.CueReference,
            dataType: EbmlElementType.Master,
            level: 4,
            minver: 2,
            description: `The Clusters containing the required referenced Blocks.`
        },
    ],
    [
        EbmlTagId.CueCodecState,
        <EbmlTagType>{
            id: EbmlTagId.CueCodecState,
            dataType: EbmlElementType.UnsignedInt,
            level: 4,
            minver: 2,
            description: `The position of the Codec State corresponding to this Cue element. 0 means that the data is taken from the initial Track Entry.`
        },
    ],
    [
        EbmlTagId.CueDuration,
        <EbmlTagType>{
            id: EbmlTagId.CueDuration,
            dataType: EbmlElementType.UnsignedInt,
            level: 4,
            minver: 4,
            description: `The duration of the block according to the segment time base. If missing the track's DefaultDuration does not apply and no duration information is available in terms of the cues.`
        },
    ],
    [
        EbmlTagId.CueRelativePosition,
        <EbmlTagType>{
            id: EbmlTagId.CueRelativePosition,
            dataType: EbmlElementType.UnsignedInt,
            level: 4,
            minver: 4,
            description: `The relative position of the referenced block inside the cluster with 0 being the first possible position for an element inside that cluster.`
        },
    ],
    [
        EbmlTagId.CueClusterPosition,
        <EbmlTagType>{
            id: EbmlTagId.CueClusterPosition,
            dataType: EbmlElementType.UnsignedInt,
            level: 4,
            minver: 1,
            description: `The position of the Cluster containing the required Block.`
        },
    ],
    [
        EbmlTagId.CueTrack,
        <EbmlTagType>{
            id: EbmlTagId.CueTrack,
            dataType: EbmlElementType.UnsignedInt,
            level: 4,
            minver: 1,
            description: `The track for which a position is given.`
        },
    ],
    [
        EbmlTagId.CueTrackPositions,
        <EbmlTagType>{
            id: EbmlTagId.CueTrackPositions,
            dataType: EbmlElementType.Master,
            level: 3,
            minver: 1,
            description: `Contain positions for different tracks corresponding to the timestamp.`
        },
    ],
    [
        EbmlTagId.CueTime,
        <EbmlTagType>{
            id: EbmlTagId.CueTime,
            dataType: EbmlElementType.UnsignedInt,
            level: 3,
            minver: 1,
            description: `Absolute timestamp according to the segment time base.`
        },
    ],
    [
        EbmlTagId.CuePoint,
        <EbmlTagType>{
            id: EbmlTagId.CuePoint,
            dataType: EbmlElementType.Master,
            level: 2,
            minver: 1,
            description: `Contains all information relative to a seek point in the segment.`
        },
    ],
    [
        EbmlTagId.Cues,
        <EbmlTagType>{
            id: EbmlTagId.Cues,
            dataType: EbmlElementType.Master,
            level: 1,
            minver: 1,
            description: `A top-level element to speed seeking access. All entries are local to the segment. Should be mandatory for non "live" streams.`
        },
    ],
    [
        EbmlTagId.AESSettingsCipherMode,
        <EbmlTagType>{
            id: EbmlTagId.AESSettingsCipherMode,
            dataType: EbmlElementType.UnsignedInt,
            level: 7,
            minver: 1,
            description: `The cipher mode used in the encryption. Predefined values: 1 - CTR`
        },
    ],
    [
        EbmlTagId.ContentEncAESSettings,
        <EbmlTagType>{
            id: EbmlTagId.ContentEncAESSettings,
            dataType: EbmlElementType.Master,
            level: 6,
            minver: 1,
            description: `Settings describing the encryption algorithm used. If ContentEncAlgo != 5 this MUST be absent.`
        },
    ],
    [
        EbmlTagId.ContentSigHashAlgo,
        <EbmlTagType>{
            id: EbmlTagId.ContentSigHashAlgo,
            dataType: EbmlElementType.UnsignedInt,
            level: 6,
            minver: 1,
            description: `The hash algorithm used for the signature. A value of '0' means that the contents have not been signed but only encrypted. Predefined values: 1 - SHA1-160 2 - MD5`
        },
    ],
    [
        EbmlTagId.ContentSigAlgo,
        <EbmlTagType>{
            id: EbmlTagId.ContentSigAlgo,
            dataType: EbmlElementType.UnsignedInt,
            level: 6,
            minver: 1,
            description: `The algorithm used for the signature. A value of '0' means that the contents have not been signed but only encrypted. Predefined values: 1 - RSA`
        },
    ],
    [
        EbmlTagId.ContentSigKeyID,
        <EbmlTagType>{
            id: EbmlTagId.ContentSigKeyID,
            dataType: EbmlElementType.Binary,
            level: 6,
            minver: 1,
            description: `This is the ID of the private key the data was signed with.`
        },
    ],
    [
        EbmlTagId.ContentSignature,
        <EbmlTagType>{
            id: EbmlTagId.ContentSignature,
            dataType: EbmlElementType.Binary,
            level: 6,
            minver: 1,
            description: `A cryptographic signature of the contents.`
        },
    ],
    [
        EbmlTagId.ContentEncKeyID,
        <EbmlTagType>{
            id: EbmlTagId.ContentEncKeyID,
            dataType: EbmlElementType.Binary,
            level: 6,
            minver: 1,
            description: `For public key algorithms this is the ID of the public key the the data was encrypted with.`
        },
    ],
    [
        EbmlTagId.ContentEncAlgo,
        <EbmlTagType>{
            id: EbmlTagId.ContentEncAlgo,
            dataType: EbmlElementType.UnsignedInt,
            level: 6,
            minver: 1,
            description: `The encryption algorithm used. The value '0' means that the contents have not been encrypted but only signed. Predefined values: 1 - DES, 2 - 3DES, 3 - Twofish, 4 - Blowfish, 5 - AES`
        },
    ],
    [
        EbmlTagId.ContentEncodings,
        <EbmlTagType>{
            id: EbmlTagId.ContentEncodings,
            dataType: EbmlElementType.Master,
            level: 3,
            minver: 1,
            description: `Settings for several content encoding mechanisms like compression or encryption.`
        },
    ],
    [
        EbmlTagId.TrickMasterTrackSegmentUID,
        <EbmlTagType>{
            id: EbmlTagId.TrickMasterTrackSegmentUID,
            dataType: EbmlElementType.Binary,
            level: 3,
            minver: undefined,
            description: `DivX trick track extenstions`
        },
    ],
    [
        EbmlTagId.TrickMasterTrackUID,
        <EbmlTagType>{
            id: EbmlTagId.TrickMasterTrackUID,
            dataType: EbmlElementType.UnsignedInt,
            level: 3,
            minver: undefined,
            description: `DivX trick track extenstions`
        },
    ],
    [
        EbmlTagId.TrickTrackFlag,
        <EbmlTagType>{
            id: EbmlTagId.TrickTrackFlag,
            dataType: EbmlElementType.UnsignedInt,
            level: 3,
            minver: undefined,
            description: `DivX trick track extenstions`
        },
    ],
    [
        EbmlTagId.TrickTrackSegmentUID,
        <EbmlTagType>{
            id: EbmlTagId.TrickTrackSegmentUID,
            dataType: EbmlElementType.Binary,
            level: 3,
            minver: undefined,
            description: `DivX trick track extenstions`
        },
    ],
    [
        EbmlTagId.TrickTrackUID,
        <EbmlTagType>{
            id: EbmlTagId.TrickTrackUID,
            dataType: EbmlElementType.UnsignedInt,
            level: 3,
            minver: undefined,
            description: `DivX trick track extenstions`
        },
    ],
    [
        EbmlTagId.TrackJoinUID,
        <EbmlTagType>{
            id: EbmlTagId.TrackJoinUID,
            dataType: EbmlElementType.UnsignedInt,
            level: 5,
            minver: 3,
            description: `The trackUID number of a track whose blocks are used to create this virtual track.`
        },
    ],
    [
        EbmlTagId.TrackJoinBlocks,
        <EbmlTagType>{
            id: EbmlTagId.TrackJoinBlocks,
            dataType: EbmlElementType.Master,
            level: 4,
            minver: 3,
            description: `Contains the list of all tracks whose Blocks need to be combined to create this virtual track`
        },
    ],
    [
        EbmlTagId.TrackPlaneType,
        <EbmlTagType>{
            id: EbmlTagId.TrackPlaneType,
            dataType: EbmlElementType.UnsignedInt,
            level: 6,
            minver: 3,
            description: `The kind of plane this track corresponds to (0: left eye, 1: right eye, 2: background).`
        },
    ],
    [
        EbmlTagId.TrackPlaneUID,
        <EbmlTagType>{
            id: EbmlTagId.TrackPlaneUID,
            dataType: EbmlElementType.UnsignedInt,
            level: 6,
            minver: 3,
            description: `The trackUID number of the track representing the plane.`
        },
    ],
    [
        EbmlTagId.TrackPlane,
        <EbmlTagType>{
            id: EbmlTagId.TrackPlane,
            dataType: EbmlElementType.Master,
            level: 5,
            minver: 3,
            description: `Contains a video plane track that need to be combined to create this 3D track`
        },
    ],
    [
        EbmlTagId.TrackCombinePlanes,
        <EbmlTagType>{
            id: EbmlTagId.TrackCombinePlanes,
            dataType: EbmlElementType.Master,
            level: 4,
            minver: 3,
            description: `Contains the list of all video plane tracks that need to be combined to create this 3D track`
        },
    ],
    [
        EbmlTagId.TrackOperation,
        <EbmlTagType>{
            id: EbmlTagId.TrackOperation,
            dataType: EbmlElementType.Master,
            level: 3,
            minver: 3,
            description: `Operation that needs to be applied on tracks to create this virtual track. For more details look at the Specification Notes on the subject.`
        },
    ],
    [
        EbmlTagId.ChannelPositions,
        <EbmlTagType>{
            id: EbmlTagId.ChannelPositions,
            dataType: EbmlElementType.Binary,
            level: 4,
            minver: undefined,
            description: `Table of horizontal angles for each successive channel, see appendix.`
        },
    ],
    [
        EbmlTagId.Channels,
        <EbmlTagType>{
            id: EbmlTagId.Channels,
            dataType: EbmlElementType.UnsignedInt,
            level: 4,
            minver: 1,
            description: `Numbers of channels in the track.`
        },
    ],
    [
        EbmlTagId.OutputSamplingFrequency,
        <EbmlTagType>{
            id: EbmlTagId.OutputSamplingFrequency,
            dataType: EbmlElementType.Float,
            level: 4,
            minver: 1,
            description: `Real output sampling frequency in Hz (used for SBR techniques).`
        },
    ],
    [
        EbmlTagId.SamplingFrequency,
        <EbmlTagType>{
            id: EbmlTagId.SamplingFrequency,
            dataType: EbmlElementType.Float,
            level: 4,
            minver: 1,
            description: `Sampling frequency in Hz.`
        },
    ],
    [
        EbmlTagId.Audio,
        <EbmlTagType>{
            id: EbmlTagId.Audio,
            dataType: EbmlElementType.Master,
            level: 3,
            minver: 1,
            description: `Audio settings.`
        },
    ],
    [
        EbmlTagId.FrameRate,
        <EbmlTagType>{
            id: EbmlTagId.FrameRate,
            dataType: EbmlElementType.Float,
            level: 4,
            minver: undefined,
            description: `Number of frames per second.  only.`
        },
    ],
    [
        EbmlTagId.GammaValue,
        <EbmlTagType>{
            id: EbmlTagId.GammaValue,
            dataType: EbmlElementType.Float,
            level: 4,
            minver: undefined,
            description: `Gamma Value.`
        },
    ],
    [
        EbmlTagId.ColourSpace,
        <EbmlTagType>{
            id: EbmlTagId.ColourSpace,
            dataType: EbmlElementType.Binary,
            level: 4,
            minver: 1,
            description: `Same value as in AVI (32 bits).`
        },
    ],
    [
        EbmlTagId.AspectRatioType,
        <EbmlTagType>{
            id: EbmlTagId.AspectRatioType,
            dataType: EbmlElementType.UnsignedInt,
            level: 4,
            minver: 1,
            description: `Specify the possible modifications to the aspect ratio (0: free resizing, 1: keep aspect ratio, 2: fixed).`
        },
    ],
    [
        EbmlTagId.DisplayUnit,
        <EbmlTagType>{
            id: EbmlTagId.DisplayUnit,
            dataType: EbmlElementType.UnsignedInt,
            level: 4,
            minver: 1,
            description: `How DisplayWidth & DisplayHeight should be interpreted (0: pixels, 1: centimeters, 2: inches, 3: Display Aspect Ratio).`
        },
    ],
    [
        EbmlTagId.DisplayHeight,
        <EbmlTagType>{
            id: EbmlTagId.DisplayHeight,
            dataType: EbmlElementType.UnsignedInt,
            level: 4,
            minver: 1,
            description: `Height of the video frames to display. The default value is only valid when DisplayUnit is 0.`
        },
    ],
    [
        EbmlTagId.DisplayWidth,
        <EbmlTagType>{
            id: EbmlTagId.DisplayWidth,
            dataType: EbmlElementType.UnsignedInt,
            level: 4,
            minver: 1,
            description: `Width of the video frames to display. The default value is only valid when DisplayUnit is 0.`
        },
    ],
    [
        EbmlTagId.PixelCropRight,
        <EbmlTagType>{
            id: EbmlTagId.PixelCropRight,
            dataType: EbmlElementType.UnsignedInt,
            level: 4,
            minver: 1,
            description: `The number of video pixels to remove on the right of the image.`
        },
    ],
    [
        EbmlTagId.PixelCropLeft,
        <EbmlTagType>{
            id: EbmlTagId.PixelCropLeft,
            dataType: EbmlElementType.UnsignedInt,
            level: 4,
            minver: 1,
            description: `The number of video pixels to remove on the left of the image.`
        },
    ],
    [
        EbmlTagId.PixelCropTop,
        <EbmlTagType>{
            id: EbmlTagId.PixelCropTop,
            dataType: EbmlElementType.UnsignedInt,
            level: 4,
            minver: 1,
            description: `The number of video pixels to remove at the top of the image.`
        },
    ],
    [
        EbmlTagId.PixelCropBottom,
        <EbmlTagType>{
            id: EbmlTagId.PixelCropBottom,
            dataType: EbmlElementType.UnsignedInt,
            level: 4,
            minver: 1,
            description: `The number of video pixels to remove at the bottom of the image (for HDTV content).`
        },
    ],
    [
        EbmlTagId.PixelHeight,
        <EbmlTagType>{
            id: EbmlTagId.PixelHeight,
            dataType: EbmlElementType.UnsignedInt,
            level: 4,
            minver: 1,
            description: `Height of the encoded video frames in pixels.`
        },
    ],
    [
        EbmlTagId.PixelWidth,
        <EbmlTagType>{
            id: EbmlTagId.PixelWidth,
            dataType: EbmlElementType.UnsignedInt,
            level: 4,
            minver: 1,
            description: `Width of the encoded video frames in pixels.`
        },
    ],
    [
        EbmlTagId.OldStereoMode,
        <EbmlTagType>{
            id: EbmlTagId.OldStereoMode,
            dataType: EbmlElementType.UnsignedInt,
            level: 4,
            minver: undefined,
            description: `DEPRECATED, DO NOT USE. Bogus StereoMode value used in old versions of libmatroska. (0: mono, 1: right eye, 2: left eye, 3: both eyes).`
        },
    ],
    [
        EbmlTagId.AlphaMode,
        <EbmlTagType>{
            id: EbmlTagId.AlphaMode,
            dataType: EbmlElementType.UnsignedInt,
            level: 4,
            minver: 3,
            description: `Alpha Video Mode. Presence of this element indicates that the BlockAdditional element could contain Alpha data.`
        },
    ],
    [
        EbmlTagId.StereoMode,
        <EbmlTagType>{
            id: EbmlTagId.StereoMode,
            dataType: EbmlElementType.UnsignedInt,
            level: 4,
            minver: 3,
            description: `Stereo-3D video mode (0: mono, 1: side by side (left eye is first), 2: top-bottom (right eye is first), 3: top-bottom (left eye is first), 4: checkboard (right is first), 5: checkboard (left is first), 6: row interleaved (right is first), 7: row interleaved (left is first), 8: column interleaved (right is first), 9: column interleaved (left is first), 10: anaglyph (cyan/red), 11: side by side (right eye is first), 12: anaglyph (green/magenta), 13 both eyes laced in one Block (left eye is first), 14 both eyes laced in one Block (right eye is first)) . There are some more details on 3D support in the Specification Notes.`
        },
    ],
    [
        EbmlTagId.FlagInterlaced,
        <EbmlTagType>{
            id: EbmlTagId.FlagInterlaced,
            dataType: EbmlElementType.UnsignedInt,
            level: 4,
            minver: 2,
            description: `Set if the video is interlaced. (1 bit)`
        },
    ],
    [
        EbmlTagId.Video,
        <EbmlTagType>{
            id: EbmlTagId.Video,
            dataType: EbmlElementType.Master,
            level: 3,
            minver: 1,
            description: `Video settings.`
        },
    ],
    [
        EbmlTagId.TrackTranslateTrackID,
        <EbmlTagType>{
            id: EbmlTagId.TrackTranslateTrackID,
            dataType: EbmlElementType.Binary,
            level: 4,
            minver: 1,
            description: `The binary value used to represent this track in the chapter codec data. The format depends on the ChapProcessCodecID used.`
        },
    ],
    [
        EbmlTagId.TrackTranslateCodec,
        <EbmlTagType>{
            id: EbmlTagId.TrackTranslateCodec,
            dataType: EbmlElementType.UnsignedInt,
            level: 4,
            minver: 1,
            description: `The chapter codec using this ID (0: Matroska Script, 1: DVD-menu).`
        },
    ],
    [
        EbmlTagId.TrackTranslateEditionUID,
        <EbmlTagType>{
            id: EbmlTagId.TrackTranslateEditionUID,
            dataType: EbmlElementType.UnsignedInt,
            level: 4,
            minver: 1,
            description: `Specify an edition UID on which this translation applies. When not specified, it means for all editions found in the segment.`
        },
    ],
    [
        EbmlTagId.SeekPreRoll,
        <EbmlTagType>{
            id: EbmlTagId.SeekPreRoll,
            dataType: EbmlElementType.UnsignedInt,
            level: 3,
            minver: 4,
            description: `After a discontinuity, SeekPreRoll is the duration in nanoseconds of the data the decoder must decode before the decoded data is valid.`
        },
    ],
    [
        EbmlTagId.CodecDelay,
        <EbmlTagType>{
            id: EbmlTagId.CodecDelay,
            dataType: EbmlElementType.UnsignedInt,
            level: 3,
            minver: 4,
            description: `CodecDelay is The codec-built-in delay in nanoseconds. This value must be subtracted from each block timestamp in order to get the actual timestamp. The value should be small so the muxing of tracks with the same actual timestamp are in the same Cluster.`
        },
    ],
    [
        EbmlTagId.TrackOverlay,
        <EbmlTagType>{
            id: EbmlTagId.TrackOverlay,
            dataType: EbmlElementType.UnsignedInt,
            level: 3,
            minver: 1,
            description: `Specify that this track is an overlay track for the Track specified (in the u-integer). That means when this track has a gap (see SilentTracks) the overlay track should be used instead. The order of multiple TrackOverlay matters, the first one is the one that should be used. If not found it should be the second, etc.`
        },
    ],
    [
        EbmlTagId.CodecDecodeAll,
        <EbmlTagType>{
            id: EbmlTagId.CodecDecodeAll,
            dataType: EbmlElementType.UnsignedInt,
            level: 3,
            minver: 2,
            description: `The codec can decode potentially damaged data (1 bit).`
        },
    ],
    [
        EbmlTagId.CodecDownloadURL,
        <EbmlTagType>{
            id: EbmlTagId.CodecDownloadURL,
            dataType: EbmlElementType.String,
            level: 3,
            minver: undefined,
            description: `A URL to download about the codec used.`
        },
    ],
    [
        EbmlTagId.CodecInfoURL,
        <EbmlTagType>{
            id: EbmlTagId.CodecInfoURL,
            dataType: EbmlElementType.String,
            level: 3,
            minver: undefined,
            description: `A URL to find information about the codec used.`
        },
    ],
    [
        EbmlTagId.CodecSettings,
        <EbmlTagType>{
            id: EbmlTagId.CodecSettings,
            dataType: EbmlElementType['Utf-8'],
            level: 3,
            minver: undefined,
            description: `A string describing the encoding setting used.`
        },
    ],
    [
        EbmlTagId.CodecPrivate,
        <EbmlTagType>{
            id: EbmlTagId.CodecPrivate,
            dataType: EbmlElementType.Binary,
            level: 3,
            minver: 1,
            description: `Private data only known to the codec.`
        },
    ],
    [
        EbmlTagId.Language,
        <EbmlTagType>{
            id: EbmlTagId.Language,
            dataType: EbmlElementType.String,
            level: 3,
            minver: 1,
            description: `Specifies the language of the track in the Matroska languages form.`
        },
    ],
    [
        EbmlTagId.Name,
        <EbmlTagType>{
            id: EbmlTagId.Name,
            dataType: EbmlElementType['Utf-8'],
            level: 3,
            minver: 1,
            description: `A human-readable track name.`
        },
    ],
    [
        EbmlTagId.MaxBlockAdditionID,
        <EbmlTagType>{
            id: EbmlTagId.MaxBlockAdditionID,
            dataType: EbmlElementType.UnsignedInt,
            level: 3,
            minver: 1,
            description: `The maximum value of BlockAdditions for this track.`
        },
    ],
    [
        EbmlTagId.TrackOffset,
        <EbmlTagType>{
            id: EbmlTagId.TrackOffset,
            dataType: EbmlElementType.Integer,
            level: 3,
            minver: undefined,
            description: `A value to add to the Block's Timestamp. This can be used to adjust the playback offset of a track.`
        },
    ],
    [
        EbmlTagId.TrackTimecodeScale,
        <EbmlTagType>{
            id: EbmlTagId.TrackTimecodeScale,
            dataType: EbmlElementType.Float,
            level: 3,
            minver: 1,
            description: `DEPRECATED, DO NOT USE. The scale to apply on this track to work at normal speed in relation with other tracks (mostly used to adjust video speed when the audio length differs).`
        },
    ],
    [
        EbmlTagId.DefaultDecodedFieldDuration,
        <EbmlTagType>{
            id: EbmlTagId.DefaultDecodedFieldDuration,
            dataType: EbmlElementType.UnsignedInt,
            level: 3,
            minver: 4,
            description: `The period in nanoseconds (not scaled by TimcodeScale)
between two successive fields at the output of the decoding process (see the notes)`
        },
    ],
    [
        EbmlTagId.DefaultDuration,
        <EbmlTagType>{
            id: EbmlTagId.DefaultDuration,
            dataType: EbmlElementType.UnsignedInt,
            level: 3,
            minver: 1,
            description: `Number of nanoseconds (not scaled via TimecodeScale) per frame ('frame' in the Matroska sense -- one element put into a (Simple)Block).`
        },
    ],
    [
        EbmlTagId.MaxCache,
        <EbmlTagType>{
            id: EbmlTagId.MaxCache,
            dataType: EbmlElementType.UnsignedInt,
            level: 3,
            minver: 1,
            description: `The maximum cache size required to store referenced frames in and the current frame. 0 means no cache is needed.`
        },
    ],
    [
        EbmlTagId.MinCache,
        <EbmlTagType>{
            id: EbmlTagId.MinCache,
            dataType: EbmlElementType.UnsignedInt,
            level: 3,
            minver: 1,
            description: `The minimum number of frames a player should be able to cache during playback. If set to 0, the reference pseudo-cache system is not used.`
        },
    ],
    [
        EbmlTagId.FlagLacing,
        <EbmlTagType>{
            id: EbmlTagId.FlagLacing,
            dataType: EbmlElementType.UnsignedInt,
            level: 3,
            minver: 1,
            description: `Set if the track may contain blocks using lacing. (1 bit)`
        },
    ],
    [
        EbmlTagId.FlagForced,
        <EbmlTagType>{
            id: EbmlTagId.FlagForced,
            dataType: EbmlElementType.UnsignedInt,
            level: 3,
            minver: 1,
            description: `Set if that track MUST be active during playback. There can be many forced track for a kind (audio, video or subs), the player should select the one which language matches the user preference or the default + forced track. Overlay MAY happen between a forced and non-forced track of the same kind. (1 bit)`
        },
    ],
    [
        EbmlTagId.FlagEnabled,
        <EbmlTagType>{
            id: EbmlTagId.FlagEnabled,
            dataType: EbmlElementType.UnsignedInt,
            level: 3,
            minver: 2,
            description: `Set if the track is usable. (1 bit)`
        },
    ],
    [
        EbmlTagId.TrackUID,
        <EbmlTagType>{
            id: EbmlTagId.TrackUID,
            dataType: EbmlElementType.UnsignedInt,
            level: 3,
            minver: 1,
            description: `A unique ID to identify the Track. This should be kept the same when making a direct stream copy of the Track to another file.`
        },
    ],
    [
        EbmlTagId.TrackNumber,
        <EbmlTagType>{
            id: EbmlTagId.TrackNumber,
            dataType: EbmlElementType.UnsignedInt,
            level: 3,
            minver: 1,
            description: `The track number as used in the Block Header (using more than 127 tracks is not encouraged, though the design allows an unlimited number).`
        },
    ],
    [
        EbmlTagId.TrackEntry,
        <EbmlTagType>{
            id: EbmlTagId.TrackEntry,
            dataType: EbmlElementType.Master,
            level: 2,
            minver: 1,
            description: `Describes a track with all elements.`
        },
    ],
    [
        EbmlTagId.Tracks,
        <EbmlTagType>{
            id: EbmlTagId.Tracks,
            dataType: EbmlElementType.Master,
            level: 1,
            minver: 1,
            description: `A top-level block of information with many tracks described.`
        },
    ],
    [
        EbmlTagId.EncryptedBlock,
        <EbmlTagType>{
            id: EbmlTagId.EncryptedBlock,
            dataType: EbmlElementType.Binary,
            level: 2,
            minver: undefined,
            description: `Similar to EncryptedBlock Structure)`
        },
    ],
    [
        EbmlTagId.ReferenceTimeCode,
        <EbmlTagType>{
            id: EbmlTagId.ReferenceTimeCode,
            dataType: EbmlElementType.UnsignedInt,
            level: 4,
            minver: 0,
            description: `DivX trick track extenstions`
        },
    ],
    [
        EbmlTagId.ReferenceOffset,
        <EbmlTagType>{
            id: EbmlTagId.ReferenceOffset,
            dataType: EbmlElementType.UnsignedInt,
            level: 4,
            minver: 0,
            description: `DivX trick track extenstions`
        },
    ],
    [
        EbmlTagId.ReferenceFrame,
        <EbmlTagType>{
            id: EbmlTagId.ReferenceFrame,
            dataType: EbmlElementType.Master,
            level: 3,
            minver: 0,
            description: `DivX trick track extenstions`
        },
    ],
    [
        EbmlTagId.SliceDuration,
        <EbmlTagType>{
            id: EbmlTagId.SliceDuration,
            dataType: EbmlElementType.UnsignedInt,
            level: 5,
            minver: undefined,
            description: `The (scaled) duration to apply to the element.`
        },
    ],
    [
        EbmlTagId.Delay,
        <EbmlTagType>{
            id: EbmlTagId.Delay,
            dataType: EbmlElementType.UnsignedInt,
            level: 5,
            minver: undefined,
            description: `The (scaled) delay to apply to the element.`
        },
    ],
    [
        EbmlTagId.BlockAdditionID,
        <EbmlTagType>{
            id: EbmlTagId.BlockAdditionID,
            dataType: EbmlElementType.UnsignedInt,
            level: 5,
            minver: undefined,
            description: `The ID of the BlockAdditional element (0 is the main Block).`
        },
    ],
    [
        EbmlTagId.FrameNumber,
        <EbmlTagType>{
            id: EbmlTagId.FrameNumber,
            dataType: EbmlElementType.UnsignedInt,
            level: 5,
            minver: undefined,
            description: `The number of the frame to generate from this lace with this delay (allow you to generate many frames from the same Block/Frame).`
        },
    ],
    [
        EbmlTagId.LaceNumber,
        <EbmlTagType>{
            id: EbmlTagId.LaceNumber,
            dataType: EbmlElementType.UnsignedInt,
            level: 5,
            minver: 1,
            description: `The reverse number of the frame in the lace (0 is the last frame, 1 is the next to last, etc). While there are a few files in the wild with this element, it is no longer in use and has been deprecated. Being able to interpret this element is not required for playback.`
        },
    ],
    [
        EbmlTagId.TimeSlice,
        <EbmlTagType>{
            id: EbmlTagId.TimeSlice,
            dataType: EbmlElementType.Master,
            level: 4,
            minver: 1,
            description: `Contains extra time information about the data contained in the Block. While there are a few files in the wild with this element, it is no longer in use and has been deprecated. Being able to interpret this element is not required for playback.`
        },
    ],
    [
        EbmlTagId.Slices,
        <EbmlTagType>{
            id: EbmlTagId.Slices,
            dataType: EbmlElementType.Master,
            level: 3,
            minver: 1,
            description: `Contains slices description.`
        },
    ],
    [
        EbmlTagId.DiscardPadding,
        <EbmlTagType>{
            id: EbmlTagId.DiscardPadding,
            dataType: EbmlElementType.Integer,
            level: 3,
            minver: 4,
            description: `Duration in nanoseconds of the silent data added to the Block (padding at the end of the Block for positive value, at the beginning of the Block for negative value). The duration of DiscardPadding is not calculated in the duration of the TrackEntry and should be discarded during playback.`
        },
    ],
    [
        EbmlTagId.CodecState,
        <EbmlTagType>{
            id: EbmlTagId.CodecState,
            dataType: EbmlElementType.Binary,
            level: 3,
            minver: 2,
            description: `The new codec state to use. Data interpretation is private to the codec. This information should always be referenced by a seek entry.`
        },
    ],
    [
        EbmlTagId.ReferenceVirtual,
        <EbmlTagType>{
            id: EbmlTagId.ReferenceVirtual,
            dataType: EbmlElementType.Integer,
            level: 3,
            minver: undefined,
            description: `Relative position of the data that should be in position of the virtual block.`
        },
    ],
    [
        EbmlTagId.ReferenceBlock,
        <EbmlTagType>{
            id: EbmlTagId.ReferenceBlock,
            dataType: EbmlElementType.Integer,
            level: 3,
            minver: 1,
            description: `Timestamp of another frame used as a reference (ie: B or P frame). The timestamp is relative to the block it's attached to.`
        },
    ],
    [
        EbmlTagId.ReferencePriority,
        <EbmlTagType>{
            id: EbmlTagId.ReferencePriority,
            dataType: EbmlElementType.UnsignedInt,
            level: 3,
            minver: 1,
            description: `This frame is referenced and has the specified cache priority. In cache only a frame of the same or higher priority can replace this frame. A value of 0 means the frame is not referenced.`
        },
    ],
    [
        EbmlTagId.BlockDuration,
        <EbmlTagType>{
            id: EbmlTagId.BlockDuration,
            dataType: EbmlElementType.UnsignedInt,
            level: 3,
            minver: 1,
            description: `The duration of the Block (based on TimecodeScale). This element is mandatory when DefaultDuration is set for the track (but can be omitted as other default values). When not written and with no DefaultDuration, the value is assumed to be the difference between the timestamp of this Block and the timestamp of the next Block in "display" order (not coding order). This element can be useful at the end of a Track (as there is not other Block available), or when there is a break in a track like for subtitle tracks. When set to 0 that means the frame is not a keyframe.`
        },
    ],
    [
        EbmlTagId.BlockAdditional,
        <EbmlTagType>{
            id: EbmlTagId.BlockAdditional,
            dataType: EbmlElementType.Binary,
            level: 5,
            minver: 1,
            description: `Interpreted by the codec as it wishes (using the BlockAddID).`
        },
    ],
    [
        EbmlTagId.BlockAddID,
        <EbmlTagType>{
            id: EbmlTagId.BlockAddID,
            dataType: EbmlElementType.UnsignedInt,
            level: 5,
            minver: 1,
            description: `An ID to identify the BlockAdditional level.`
        },
    ],
    [
        EbmlTagId.BlockMore,
        <EbmlTagType>{
            id: EbmlTagId.BlockMore,
            dataType: EbmlElementType.Master,
            level: 4,
            minver: 1,
            description: `Contain the BlockAdditional and some parameters.`
        },
    ],
    [
        EbmlTagId.BlockAdditions,
        <EbmlTagType>{
            id: EbmlTagId.BlockAdditions,
            dataType: EbmlElementType.Master,
            level: 3,
            minver: 1,
            description: `Contain additional blocks to complete the main one. An EBML parser that has no knowledge of the Block structure could still see and use/skip these data.`
        },
    ],
    [
        EbmlTagId.BlockVirtual,
        <EbmlTagType>{
            id: EbmlTagId.BlockVirtual,
            dataType: EbmlElementType.Binary,
            level: 3,
            minver: undefined,
            description: `A Block with no data. It must be stored in the stream at the place the real Block should be in display order. (see Block Virtual)`
        },
    ],
    [
        EbmlTagId.Block,
        <EbmlTagType>{
            id: EbmlTagId.Block,
            dataType: EbmlElementType.Binary,
            level: 3,
            minver: 1,
            description: `Block containing the actual data to be rendered and a timestamp relative to the Cluster Timecode. (see Block Structure)`
        },
    ],
    [
        EbmlTagId.BlockGroup,
        <EbmlTagType>{
            id: EbmlTagId.BlockGroup,
            dataType: EbmlElementType.Master,
            level: 2,
            minver: 1,
            description: `Basic container of information containing a single Block or BlockVirtual, and information specific to that Block/VirtualBlock.`
        },
    ],
    [
        EbmlTagId.SimpleBlock,
        <EbmlTagType>{
            id: EbmlTagId.SimpleBlock,
            dataType: EbmlElementType.Binary,
            level: 2,
            minver: 2,
            description: `Similar to SimpleBlock Structure)`
        },
    ],
    [
        EbmlTagId.PrevSize,
        <EbmlTagType>{
            id: EbmlTagId.PrevSize,
            dataType: EbmlElementType.UnsignedInt,
            level: 2,
            minver: 1,
            description: `Size of the previous Cluster, in octets. Can be useful for backward playing.`
        },
    ],
    [
        EbmlTagId.Position,
        <EbmlTagType>{
            id: EbmlTagId.Position,
            dataType: EbmlElementType.UnsignedInt,
            level: 2,
            minver: 1,
            description: `The Position of the Cluster in the segment (0 in live broadcast streams). It might help to resynchronise offset on damaged streams.`
        },
    ],
    [
        EbmlTagId.SilentTrackNumber,
        <EbmlTagType>{
            id: EbmlTagId.SilentTrackNumber,
            dataType: EbmlElementType.UnsignedInt,
            level: 3,
            minver: 1,
            description: `One of the track number that are not used from now on in the stream. It could change later if not specified as silent in a further Cluster.`
        },
    ],
    [
        EbmlTagId.Timecode,
        <EbmlTagType>{
            id: EbmlTagId.Timecode,
            dataType: EbmlElementType.UnsignedInt,
            level: 2,
            minver: 1,
            description: `Absolute timestamp of the cluster (based on TimecodeScale).`
        },
    ],
    [
        EbmlTagId.Cluster,
        <EbmlTagType>{
            id: EbmlTagId.Cluster,
            dataType: EbmlElementType.Master,
            level: 1,
            minver: 1,
            description: `The lower level element containing the (monolithic) Block structure.`
        },
    ],
    [
        EbmlTagId.MuxingApp,
        <EbmlTagType>{
            id: EbmlTagId.MuxingApp,
            dataType: EbmlElementType['Utf-8'],
            level: 2,
            minver: 1,
            description: `Muxing application or library ("libmatroska-0.4.3").`
        },
    ],
    [
        EbmlTagId.Title,
        <EbmlTagType>{
            id: EbmlTagId.Title,
            dataType: EbmlElementType['Utf-8'],
            level: 2,
            minver: 1,
            description: `General name of the segment.`
        },
    ],
    [
        EbmlTagId.TimecodeScaleDenominator,
        <EbmlTagType>{
            id: EbmlTagId.TimecodeScaleDenominator,
            dataType: EbmlElementType.UnsignedInt,
            level: 2,
            minver: 4,
            description: `Timestamp scale numerator, see TimecodeScale.`
        },
    ],
    [
        EbmlTagId.TimecodeScale,
        <EbmlTagType>{
            id: EbmlTagId.TimecodeScale,
            dataType: EbmlElementType.UnsignedInt,
            level: 2,
            minver: 1,
            description: `Timestamp scale in nanoseconds (1.000.000 means all timestamps in the segment are expressed in milliseconds).`
        },
    ],
    [
        EbmlTagId.ChapterTranslateID,
        <EbmlTagType>{
            id: EbmlTagId.ChapterTranslateID,
            dataType: EbmlElementType.Binary,
            level: 3,
            minver: 1,
            description: `The binary value used to represent this segment in the chapter codec data. The format depends on the ChapProcessCodecID used.`
        },
    ],
    [
        EbmlTagId.ChapterTranslateCodec,
        <EbmlTagType>{
            id: EbmlTagId.ChapterTranslateCodec,
            dataType: EbmlElementType.UnsignedInt,
            level: 3,
            minver: 1,
            description: `The chapter codec using this ID (0: Matroska Script, 1: DVD-menu).`
        },
    ],
    [
        EbmlTagId.ChapterTranslateEditionUID,
        <EbmlTagType>{
            id: EbmlTagId.ChapterTranslateEditionUID,
            dataType: EbmlElementType.UnsignedInt,
            level: 3,
            minver: 1,
            description: `Specify an edition UID on which this correspondance applies. When not specified, it means for all editions found in the segment.`
        },
    ],
    [
        EbmlTagId.NextFilename,
        <EbmlTagType>{
            id: EbmlTagId.NextFilename,
            dataType: EbmlElementType['Utf-8'],
            level: 2,
            minver: 1,
            description: `An escaped filename corresponding to the next segment.`
        },
    ],
    [
        EbmlTagId.NextUID,
        <EbmlTagType>{
            id: EbmlTagId.NextUID,
            dataType: EbmlElementType.Binary,
            level: 2,
            minver: 1,
            description: `A unique ID to identify the next chained segment (128 bits).`
        },
    ],
    [
        EbmlTagId.PrevFilename,
        <EbmlTagType>{
            id: EbmlTagId.PrevFilename,
            dataType: EbmlElementType['Utf-8'],
            level: 2,
            minver: 1,
            description: `An escaped filename corresponding to the previous segment.`
        },
    ],
    [
        EbmlTagId.PrevUID,
        <EbmlTagType>{
            id: EbmlTagId.PrevUID,
            dataType: EbmlElementType.Binary,
            level: 2,
            minver: 1,
            description: `A unique ID to identify the previous chained segment (128 bits).`
        },
    ],
    [
        EbmlTagId.SegmentUID,
        <EbmlTagType>{
            id: EbmlTagId.SegmentUID,
            dataType: EbmlElementType.Binary,
            level: 2,
            minver: 1,
            description: `A randomly generated unique ID to identify the current segment between many others (128 bits).`
        },
    ],
    [
        EbmlTagId.Info,
        <EbmlTagType>{
            id: EbmlTagId.Info,
            dataType: EbmlElementType.Master,
            level: 1,
            minver: 1,
            description: `Contains miscellaneous general information and statistics on the file.`
        },
    ],
    [
        EbmlTagId.SeekPosition,
        <EbmlTagType>{
            id: EbmlTagId.SeekPosition,
            dataType: EbmlElementType.UnsignedInt,
            level: 3,
            minver: 1,
            description: `The position of the element in the segment in octets (0 = first level 1 element).`
        },
    ],
    [
        EbmlTagId.SeekID,
        <EbmlTagType>{
            id: EbmlTagId.SeekID,
            dataType: EbmlElementType.Binary,
            level: 3,
            minver: 1,
            description: `The binary ID corresponding to the element name.`
        },
    ],
    [
        EbmlTagId.Seek,
        <EbmlTagType>{
            id: EbmlTagId.Seek,
            dataType: EbmlElementType.Master,
            level: 2,
            minver: 1,
            description: `Contains a single seek entry to an EBML element.`
        },
    ],
    [
        EbmlTagId.SeekHead,
        <EbmlTagType>{
            id: EbmlTagId.SeekHead,
            dataType: EbmlElementType.Master,
            level: 1,
            minver: 1,
            description: `Contains the position of other level 1 elements.`
        },
    ],
    [
        EbmlTagId.SignatureElementList,
        <EbmlTagType>{
            id: EbmlTagId.SignatureElementList,
            dataType: EbmlElementType.Master,
            level: 2,
            minver: undefined,
            description: `A list consists of a number of consecutive elements that represent one case where data is used in signature. Ex:  means that the BlockAdditional of all Blocks in all Clusters is used for encryption.`
        },
    ],
    [
        EbmlTagId.SignatureElements,
        <EbmlTagType>{
            id: EbmlTagId.SignatureElements,
            dataType: EbmlElementType.Master,
            level: 1,
            minver: undefined,
            description: `Contains elements that will be used to compute the signature.`
        },
    ],
    [
        EbmlTagId.Signature,
        <EbmlTagType>{
            id: EbmlTagId.Signature,
            dataType: EbmlElementType.Binary,
            level: 1,
            minver: undefined,
            description: `The signature of the data (until a new.`
        },
    ],
    [
        EbmlTagId.SignaturePublicKey,
        <EbmlTagType>{
            id: EbmlTagId.SignaturePublicKey,
            dataType: EbmlElementType.Binary,
            level: 1,
            minver: undefined,
            description: `The public key to use with the algorithm (in the case of a PKI-based signature).`
        },
    ],
    [
        EbmlTagId.SignatureHash,
        <EbmlTagType>{
            id: EbmlTagId.SignatureHash,
            dataType: EbmlElementType.UnsignedInt,
            level: 1,
            minver: undefined,
            description: `Hash algorithm used (1=SHA1-160, 2=MD5).`
        },
    ],
    [
        EbmlTagId.SignatureAlgo,
        <EbmlTagType>{
            id: EbmlTagId.SignatureAlgo,
            dataType: EbmlElementType.UnsignedInt,
            level: 1,
            minver: undefined,
            description: `Signature algorithm used (1=RSA, 2=elliptic).`
        },
    ],
    [
        EbmlTagId.SignatureSlot,
        <EbmlTagType>{
            id: EbmlTagId.SignatureSlot,
            dataType: EbmlElementType.Master,
            level: -1,
            minver: undefined,
            description: `Contain signature of some (coming) elements in the stream.`
        },
    ],
    [
        EbmlTagId['CRC-32'],
        <EbmlTagType>{
            id: EbmlTagId['CRC-32'],
            dataType: EbmlElementType.Binary,
            level: -1,
            minver: 1,
            description: `The CRC is computed on all the data of the Master element it's in. The CRC element should be the first in it's parent master for easier reading. All level 1 elements should include a CRC-32. The CRC in use is the IEEE CRC32 Little Endian`
        },
    ],
    [
        EbmlTagId.Void,
        <EbmlTagType>{
            id: EbmlTagId.Void,
            dataType: EbmlElementType.Binary,
            level: -1,
            minver: 1,
            description: `Used to void damaged data, to avoid unexpected behaviors when using damaged data. The content is discarded. Also used to reserve space in a sub-element for later use.`
        },
    ],
    [
        EbmlTagId.EBMLMaxSizeLength,
        <EbmlTagType>{
            id: EbmlTagId.EBMLMaxSizeLength,
            dataType: EbmlElementType.UnsignedInt,
            level: 1,
            minver: 1,
            description: `The maximum length of the sizes you'll find in this file (8 or less in Matroska). This does not override the element size indicated at the beginning of an element. Elements that have an indicated size which is larger than what is allowed by EBMLMaxSizeLength shall be considered invalid.`
        },
    ],
    [
        EbmlTagId.EBMLMaxIDLength,
        <EbmlTagType>{
            id: EbmlTagId.EBMLMaxIDLength,
            dataType: EbmlElementType.UnsignedInt,
            level: 1,
            minver: 1,
            description: `The maximum length of the IDs you'll find in this file (4 or less in Matroska).`
        },
    ],
    [
        EbmlTagId.EBMLReadVersion,
        <EbmlTagType>{
            id: EbmlTagId.EBMLReadVersion,
            dataType: EbmlElementType.UnsignedInt,
            level: 1,
            minver: 1,
            description: `The minimum EBML version a parser has to support to read this file.`
        },
    ],
    [
        EbmlTagId.EBML,
        <EbmlTagType>{
            id: EbmlTagId.EBML,
            dataType: EbmlElementType.Master,
            level: 0,
            minver: 1,
            description: `Set the EBML characteristics of the data to follow. Each EBML document has to start with this.`
        },
    ],
]);
