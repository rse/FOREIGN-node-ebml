export enum EbmlTagId {
    ChapterDisplay = 0x80,
    TrackType = 0x83,
    ChapString = 0x85,
    CodecID = 0x86,
    FlagDefault = 0x88,
    ChapterTrackNumber = 0x89,
    ChapterTimeStart = 0x91,
    ChapterTimeEnd = 0x92,
    CueRefTime = 0x96,
    CueRefCluster = 0x97,
    ChapterFlagHidden = 0x98,
    ContentCompAlgo = 0x4254,
    ContentCompSettings = 0x4255,
    DocType = 0x4282,
    DocTypeReadVersion = 0x4285,
    EBMLVersion = 0x4286,
    DocTypeVersion = 0x4287,
    SegmentFamily = 0x4444,
    DateUTC = 0x4461,
    TagDefault = 0x4484,
    TagBinary = 0x4485,
    TagString = 0x4487,
    Duration = 0x4489,
    ChapterFlagEnabled = 0x4598,
    FileMimeType = 0x4660,
    FileUsedStartTime = 0x4661,
    FileUsedEndTime = 0x4662,
    FileReferral = 0x4675,
    ContentEncodingOrder = 0x5031,
    ContentEncodingScope = 0x5032,
    ContentEncodingType = 0x5033,
    ContentCompression = 0x5034,
    ContentEncryption = 0x5035,
    CueBlockNumber = 0x5378,
    ChapterStringUID = 0x5654,
    WritingApp = 0x5741,
    SilentTracks = 0x5854,
    ContentEncoding = 0x6240,
    BitDepth = 0x6264,
    SignedElement = 0x6532,
    TrackTranslate = 0x6624,
    ChapProcessCommand = 0x6911,
    ChapProcessTime = 0x6922,
    ChapterTranslate = 0x6924,
    ChapProcessData = 0x6933,
    ChapProcess = 0x6944,
    ChapProcessCodecID = 0x6955,
    Tag = 0x7373,
    SegmentFilename = 0x7384,
    AttachmentLink = 0x7446,
    CodecName = 0x258688,
    Segment = 0x18538067,
    TagLanguage = 0x447a,
    TagName = 0x45a3,
    SimpleTag = 0x67c8,
    TagAttachmentUID = 0x63c6,
    TagChapterUID = 0x63c4,
    TagEditionUID = 0x63c9,
    TagTrackUID = 0x63c5,
    TargetType = 0x63ca,
    TargetTypeValue = 0x68ca,
    Targets = 0x63c0,
    Tags = 0x1254c367,
    ChapProcessPrivate = 0x450d,
    ChapCountry = 0x437e,
    ChapLanguage = 0x437c,
    ChapterTrack = 0x8f,
    ChapterPhysicalEquiv = 0x63c3,
    ChapterSegmentEditionUID = 0x6ebc,
    ChapterSegmentUID = 0x6e67,
    ChapterUID = 0x73c4,
    ChapterAtom = 0xb6,
    EditionFlagOrdered = 0x45dd,
    EditionFlagDefault = 0x45db,
    EditionFlagHidden = 0x45bd,
    EditionUID = 0x45bc,
    EditionEntry = 0x45b9,
    Chapters = 0x1043a770,
    FileUID = 0x46ae,
    FileData = 0x465c,
    FileName = 0x466e,
    FileDescription = 0x467e,
    AttachedFile = 0x61a7,
    Attachments = 0x1941a469,
    CueRefCodecState = 0xeb,
    CueRefNumber = 0x535f,
    CueReference = 0xdb,
    CueCodecState = 0xea,
    CueDuration = 0xb2,
    CueRelativePosition = 0xf0,
    CueClusterPosition = 0xf1,
    CueTrack = 0xf7,
    CueTrackPositions = 0xb7,
    CueTime = 0xb3,
    CuePoint = 0xbb,
    Cues = 0x1c53bb6b,
    AESSettingsCipherMode = 0x47e8,
    ContentEncAESSettings = 0x47e7,
    ContentSigHashAlgo = 0x47e6,
    ContentSigAlgo = 0x47e5,
    ContentSigKeyID = 0x47e4,
    ContentSignature = 0x47e3,
    ContentEncKeyID = 0x47e2,
    ContentEncAlgo = 0x47e1,
    ContentEncodings = 0x6d80,
    TrickMasterTrackSegmentUID = 0xc4,
    TrickMasterTrackUID = 0xc7,
    TrickTrackFlag = 0xc6,
    TrickTrackSegmentUID = 0xc1,
    TrickTrackUID = 0xc0,
    TrackJoinUID = 0xed,
    TrackJoinBlocks = 0xe9,
    TrackPlaneType = 0xe6,
    TrackPlaneUID = 0xe5,
    TrackPlane = 0xe4,
    TrackCombinePlanes = 0xe3,
    TrackOperation = 0xe2,
    ChannelPositions = 0x7d7b,
    Channels = 0x9f,
    OutputSamplingFrequency = 0x78b5,
    SamplingFrequency = 0xb5,
    Audio = 0xe1,
    FrameRate = 0x2383e3,
    GammaValue = 0x2fb523,
    ColourSpace = 0x2eb524,
    AspectRatioType = 0x54b3,
    DisplayUnit = 0x54b2,
    DisplayHeight = 0x54ba,
    DisplayWidth = 0x54b0,
    PixelCropRight = 0x54dd,
    PixelCropLeft = 0x54cc,
    PixelCropTop = 0x54bb,
    PixelCropBottom = 0x54aa,
    PixelHeight = 0xba,
    PixelWidth = 0xb0,
    OldStereoMode = 0x53b9,
    AlphaMode = 0x53c0,
    StereoMode = 0x53b8,
    FlagInterlaced = 0x9a,
    Video = 0xe0,
    TrackTranslateTrackID = 0x66a5,
    TrackTranslateCodec = 0x66bf,
    TrackTranslateEditionUID = 0x66fc,
    SeekPreRoll = 0x56bb,
    CodecDelay = 0x56aa,
    TrackOverlay = 0x6fab,
    CodecDecodeAll = 0xaa,
    CodecDownloadURL = 0x26b240,
    CodecInfoURL = 0x3b4040,
    CodecSettings = 0x3a9697,
    CodecPrivate = 0x63a2,
    Language = 0x22b59c,
    Name = 0x536e,
    MaxBlockAdditionID = 0x55ee,
    TrackOffset = 0x537f,
    TrackTimecodeScale = 0x23314f,
    DefaultDecodedFieldDuration = 0x234e7a,
    DefaultDuration = 0x23e383,
    MaxCache = 0x6df8,
    MinCache = 0x6de7,
    FlagLacing = 0x9c,
    FlagForced = 0x55aa,
    FlagEnabled = 0xb9,
    TrackUID = 0x73c5,
    TrackNumber = 0xd7,
    TrackEntry = 0xae,
    Tracks = 0x1654ae6b,
    EncryptedBlock = 0xaf,
    ReferenceTimeCode = 0xca,
    ReferenceOffset = 0xc9,
    ReferenceFrame = 0xc8,
    SliceDuration = 0xcf,
    Delay = 0xce,
    BlockAdditionID = 0xcb,
    FrameNumber = 0xcd,
    LaceNumber = 0xcc,
    TimeSlice = 0xe8,
    Slices = 0x8e,
    DiscardPadding = 0x75a2,
    CodecState = 0xa4,
    ReferenceVirtual = 0xfd,
    ReferenceBlock = 0xfb,
    ReferencePriority = 0xfa,
    BlockDuration = 0x9b,
    BlockAdditional = 0xa5,
    BlockAddID = 0xee,
    BlockMore = 0xa6,
    BlockAdditions = 0x75a1,
    BlockVirtual = 0xa2,
    Block = 0xa1,
    BlockGroup = 0xa0,
    SimpleBlock = 0xa3,
    PrevSize = 0xab,
    Position = 0xa7,
    SilentTrackNumber = 0x58d7,
    Timecode = 0xe7,
    Cluster = 0x1f43b675,
    MuxingApp = 0x4d80,
    Title = 0x7ba9,
    TimecodeScaleDenominator = 0x2ad7b2,
    TimecodeScale = 0x2ad7b1,
    ChapterTranslateID = 0x69a5,
    ChapterTranslateCodec = 0x69bf,
    ChapterTranslateEditionUID = 0x69fc,
    NextFilename = 0x3e83bb,
    NextUID = 0x3eb923,
    PrevFilename = 0x3c83ab,
    PrevUID = 0x3cb923,
    SegmentUID = 0x73a4,
    Info = 0x1549a966,
    SeekPosition = 0x53ac,
    SeekID = 0x53ab,
    Seek = 0x4dbb,
    SeekHead = 0x114d9b74,
    SignatureElementList = 0x7e7b,
    SignatureElements = 0x7e5b,
    Signature = 0x7eb5,
    SignaturePublicKey = 0x7ea5,
    SignatureHash = 0x7e9a,
    SignatureAlgo = 0x7e8a,
    SignatureSlot = 0x1b538667,
    CRC32 = 0xbf,
    Void = 0xec,
    EBMLMaxSizeLength = 0x42f3,
    EBMLMaxIDLength = 0x42f2,
    EBMLReadVersion = 0x42f7,
    EBML = 0x1a45dfa3,
}
export const EbmlTagId2Name: { [key: string]: string }  = {
    "0x80": "ChapterDisplay",
    "0x83": "TrackType",
    "0x85": "ChapString",
    "0x86": "CodecID",
    "0x88": "FlagDefault",
    "0x89": "ChapterTrackNumber",
    "0x91": "ChapterTimeStart",
    "0x92": "ChapterTimeEnd",
    "0x96": "CueRefTime",
    "0x97": "CueRefCluster",
    "0x98": "ChapterFlagHidden",
    "0x4254": "ContentCompAlgo",
    "0x4255": "ContentCompSettings",
    "0x4282": "DocType",
    "0x4285": "DocTypeReadVersion",
    "0x4286": "EBMLVersion",
    "0x4287": "DocTypeVersion",
    "0x4444": "SegmentFamily",
    "0x4461": "DateUTC",
    "0x4484": "TagDefault",
    "0x4485": "TagBinary",
    "0x4487": "TagString",
    "0x4489": "Duration",
    "0x4598": "ChapterFlagEnabled",
    "0x4660": "FileMimeType",
    "0x4661": "FileUsedStartTime",
    "0x4662": "FileUsedEndTime",
    "0x4675": "FileReferral",
    "0x5031": "ContentEncodingOrder",
    "0x5032": "ContentEncodingScope",
    "0x5033": "ContentEncodingType",
    "0x5034": "ContentCompression",
    "0x5035": "ContentEncryption",
    "0x5378": "CueBlockNumber",
    "0x5654": "ChapterStringUID",
    "0x5741": "WritingApp",
    "0x5854": "SilentTracks",
    "0x6240": "ContentEncoding",
    "0x6264": "BitDepth",
    "0x6532": "SignedElement",
    "0x6624": "TrackTranslate",
    "0x6911": "ChapProcessCommand",
    "0x6922": "ChapProcessTime",
    "0x6924": "ChapterTranslate",
    "0x6933": "ChapProcessData",
    "0x6944": "ChapProcess",
    "0x6955": "ChapProcessCodecID",
    "0x7373": "Tag",
    "0x7384": "SegmentFilename",
    "0x7446": "AttachmentLink",
    "0x258688": "CodecName",
    "0x18538067": "Segment",
    "0x447a": "TagLanguage",
    "0x45a3": "TagName",
    "0x67c8": "SimpleTag",
    "0x63c6": "TagAttachmentUID",
    "0x63c4": "TagChapterUID",
    "0x63c9": "TagEditionUID",
    "0x63c5": "TagTrackUID",
    "0x63ca": "TargetType",
    "0x68ca": "TargetTypeValue",
    "0x63c0": "Targets",
    "0x1254c367": "Tags",
    "0x450d": "ChapProcessPrivate",
    "0x437e": "ChapCountry",
    "0x437c": "ChapLanguage",
    "0x8f": "ChapterTrack",
    "0x63c3": "ChapterPhysicalEquiv",
    "0x6ebc": "ChapterSegmentEditionUID",
    "0x6e67": "ChapterSegmentUID",
    "0x73c4": "ChapterUID",
    "0xb6": "ChapterAtom",
    "0x45dd": "EditionFlagOrdered",
    "0x45db": "EditionFlagDefault",
    "0x45bd": "EditionFlagHidden",
    "0x45bc": "EditionUID",
    "0x45b9": "EditionEntry",
    "0x1043a770": "Chapters",
    "0x46ae": "FileUID",
    "0x465c": "FileData",
    "0x466e": "FileName",
    "0x467e": "FileDescription",
    "0x61a7": "AttachedFile",
    "0x1941a469": "Attachments",
    "0xeb": "CueRefCodecState",
    "0x535f": "CueRefNumber",
    "0xdb": "CueReference",
    "0xea": "CueCodecState",
    "0xb2": "CueDuration",
    "0xf0": "CueRelativePosition",
    "0xf1": "CueClusterPosition",
    "0xf7": "CueTrack",
    "0xb7": "CueTrackPositions",
    "0xb3": "CueTime",
    "0xbb": "CuePoint",
    "0x1c53bb6b": "Cues",
    "0x47e8": "AESSettingsCipherMode",
    "0x47e7": "ContentEncAESSettings",
    "0x47e6": "ContentSigHashAlgo",
    "0x47e5": "ContentSigAlgo",
    "0x47e4": "ContentSigKeyID",
    "0x47e3": "ContentSignature",
    "0x47e2": "ContentEncKeyID",
    "0x47e1": "ContentEncAlgo",
    "0x6d80": "ContentEncodings",
    "0xc4": "TrickMasterTrackSegmentUID",
    "0xc7": "TrickMasterTrackUID",
    "0xc6": "TrickTrackFlag",
    "0xc1": "TrickTrackSegmentUID",
    "0xc0": "TrickTrackUID",
    "0xed": "TrackJoinUID",
    "0xe9": "TrackJoinBlocks",
    "0xe6": "TrackPlaneType",
    "0xe5": "TrackPlaneUID",
    "0xe4": "TrackPlane",
    "0xe3": "TrackCombinePlanes",
    "0xe2": "TrackOperation",
    "0x7d7b": "ChannelPositions",
    "0x9f": "Channels",
    "0x78b5": "OutputSamplingFrequency",
    "0xb5": "SamplingFrequency",
    "0xe1": "Audio",
    "0x2383e3": "FrameRate",
    "0x2fb523": "GammaValue",
    "0x2eb524": "ColourSpace",
    "0x54b3": "AspectRatioType",
    "0x54b2": "DisplayUnit",
    "0x54ba": "DisplayHeight",
    "0x54b0": "DisplayWidth",
    "0x54dd": "PixelCropRight",
    "0x54cc": "PixelCropLeft",
    "0x54bb": "PixelCropTop",
    "0x54aa": "PixelCropBottom",
    "0xba": "PixelHeight",
    "0xb0": "PixelWidth",
    "0x53b9": "OldStereoMode",
    "0x53c0": "AlphaMode",
    "0x53b8": "StereoMode",
    "0x9a": "FlagInterlaced",
    "0xe0": "Video",
    "0x66a5": "TrackTranslateTrackID",
    "0x66bf": "TrackTranslateCodec",
    "0x66fc": "TrackTranslateEditionUID",
    "0x56bb": "SeekPreRoll",
    "0x56aa": "CodecDelay",
    "0x6fab": "TrackOverlay",
    "0xaa": "CodecDecodeAll",
    "0x26b240": "CodecDownloadURL",
    "0x3b4040": "CodecInfoURL",
    "0x3a9697": "CodecSettings",
    "0x63a2": "CodecPrivate",
    "0x22b59c": "Language",
    "0x536e": "Name",
    "0x55ee": "MaxBlockAdditionID",
    "0x537f": "TrackOffset",
    "0x23314f": "TrackTimecodeScale",
    "0x234e7a": "DefaultDecodedFieldDuration",
    "0x23e383": "DefaultDuration",
    "0x6df8": "MaxCache",
    "0x6de7": "MinCache",
    "0x9c": "FlagLacing",
    "0x55aa": "FlagForced",
    "0xb9": "FlagEnabled",
    "0x73c5": "TrackUID",
    "0xd7": "TrackNumber",
    "0xae": "TrackEntry",
    "0x1654ae6b": "Tracks",
    "0xaf": "EncryptedBlock",
    "0xca": "ReferenceTimeCode",
    "0xc9": "ReferenceOffset",
    "0xc8": "ReferenceFrame",
    "0xcf": "SliceDuration",
    "0xce": "Delay",
    "0xcb": "BlockAdditionID",
    "0xcd": "FrameNumber",
    "0xcc": "LaceNumber",
    "0xe8": "TimeSlice",
    "0x8e": "Slices",
    "0x75a2": "DiscardPadding",
    "0xa4": "CodecState",
    "0xfd": "ReferenceVirtual",
    "0xfb": "ReferenceBlock",
    "0xfa": "ReferencePriority",
    "0x9b": "BlockDuration",
    "0xa5": "BlockAdditional",
    "0xee": "BlockAddID",
    "0xa6": "BlockMore",
    "0x75a1": "BlockAdditions",
    "0xa2": "BlockVirtual",
    "0xa1": "Block",
    "0xa0": "BlockGroup",
    "0xa3": "SimpleBlock",
    "0xab": "PrevSize",
    "0xa7": "Position",
    "0x58d7": "SilentTrackNumber",
    "0xe7": "Timecode",
    "0x1f43b675": "Cluster",
    "0x4d80": "MuxingApp",
    "0x7ba9": "Title",
    "0x2ad7b2": "TimecodeScaleDenominator",
    "0x2ad7b1": "TimecodeScale",
    "0x69a5": "ChapterTranslateID",
    "0x69bf": "ChapterTranslateCodec",
    "0x69fc": "ChapterTranslateEditionUID",
    "0x3e83bb": "NextFilename",
    "0x3eb923": "NextUID",
    "0x3c83ab": "PrevFilename",
    "0x3cb923": "PrevUID",
    "0x73a4": "SegmentUID",
    "0x1549a966": "Info",
    "0x53ac": "SeekPosition",
    "0x53ab": "SeekID",
    "0x4dbb": "Seek",
    "0x114d9b74": "SeekHead",
    "0x7e7b": "SignatureElementList",
    "0x7e5b": "SignatureElements",
    "0x7eb5": "Signature",
    "0x7ea5": "SignaturePublicKey",
    "0x7e9a": "SignatureHash",
    "0x7e8a": "SignatureAlgo",
    "0x1b538667": "SignatureSlot",
    "0xbf": "CRC32",
    "0xec": "Void",
    "0x42f3": "EBMLMaxSizeLength",
    "0x42f2": "EBMLMaxIDLength",
    "0x42f7": "EBMLReadVersion",
    "0x1a45dfa3": "EBML"
}
