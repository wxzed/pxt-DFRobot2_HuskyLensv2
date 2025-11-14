/**
 * Custom graphic block
 */
//% weight=100 color=#0fbc11 icon="\uf067" block="HuskylensV2"
//% groups='["Communication","Algorithm Switch","Face Recognition","Object Recognition","Object Tracking","Object Classification","Self-learning Classification","Line Tracking","Color Recognition","Instance Segmentation","Gesture Recognition","Pose Recognition","License Plate Recognition","Text Recognition","Emotion Recognition","Tag Recognition","QR Code Recognition","Barcode Recognition","Custom Model"]'
namespace huskylensV2 {
    // MakeCode global types are automatically injected, these declarations are only to suppress IDE warnings
    // These declarations are not needed in the actual MakeCode compilation environment
    // Low-level Communication Code is in huskylensV2-communication.ts
   
    // Algorithm selection enum
    export enum Algorithm {
        //% block="Any"
        ALGORITHM_ANY = 0,                      // 0
        //% block="Face recognition"
        ALGORITHM_FACE_RECOGNITION = 1,         // 1
        //% block="Object tracking"
        ALGORITHM_OBJECT_TRACKING,              // 2
        //% block="Object recognition"
        ALGORITHM_OBJECT_RECOGNITION,           // 3
        //% block="Line tracking"
        ALGORITHM_LINE_TRACKING,                // 6
        //% block="Color recognition"
        ALGORITHM_COLOR_RECOGNITION,            // 5
        //% block="Tag recognition"
        ALGORITHM_TAG_RECOGNITION,              // 6
        //% block="Self-learning classification"
        ALGORITHM_SELF_LEARNING_CLASSIFICATION, // 7
        //% block="OCR recognition"
        ALGORITHM_OCR_RECOGNITION,              // 8
        //% block="License plate recognition"
        ALGORITHM_LICENSE_RECOGNITION,          // 9
        //% block="QR code recognition"
        ALGORITHM_QRCODE_RECOGNITION,           // 10
        //% block="Barcode recognition"
        ALGORITHM_BARCODE_RECOGNITION,          // 11
        //% block="Emotion recognition"
        ALGORITHM_EMOTION_RECOGNITION,          // 12
        //% block="Pose recognition"
        ALGORITHM_POSE_RECOGNITION,             // 13
        //% block="Hand recognition"
        ALGORITHM_HAND_RECOGNITION,             // 14
        //% block="Object classification"
        ALGORITHM_OBJECT_CLASSIFICATION,        // 15
        //% block="Blink recognition"
        ALGORITHM_BLINK_RECOGNITION,            // 16
        //% block="Gaze recognition"
        ALGORITHM_GAZE_RECOGNITION,             // 17
        //% block="Face orientation"
        ALGORITHM_FACE_ORIENTATION,             // 18
        //% block="Fall-down recognition"
        ALGORITHM_FALLDOWN_RECOGNITION,         // 19
        //% block="Segmentation"
        ALGORITHM_SEGMENT,                      // 20
        //% block="Face action recognition"
        ALGORITHM_FACE_ACTION_RECOGNITION,      // 21
        //% block="Custom 0"
        ALGORITHM_CUSTOM0,                      // 22
        //% block="Custom 1"
        ALGORITHM_CUSTOM1,                      // 23
        //% block="Custom 2"
        ALGORITHM_CUSTOM2,                      // 24
        //% block="Builtin count"
        ALGORITHM_BUILTIN_COUNT,                // 25
        
        //% block="Custom begin"
        ALGORITHM_CUSTOM_BEGIN = 128, // 128
    }

    // Face properties (with ID)
    export enum FaceProperty {
        //% block="ID"
        ID,
        //% block="Name"
        Name,
        //% block="X Center"
        XCenter,
        //% block="Y Center"
        YCenter,
        //% block="Width"
        Width,
        //% block="Height"
        Height,
        //% block="Left Eye X"
        LeftEyeX,
        //% block="Left Eye Y"
        LeftEyeY,
        //% block="Right Eye X"
        RightEyeX,
        //% block="Right Eye Y"
        RightEyeY,
        //% block="Left Mouth X"
        LeftMouthX,
        //% block="Left Mouth Y"
        LeftMouthY,
        //% block="Right Mouth X"
        RightMouthX,
        //% block="Right Mouth Y"
        RightMouthY,
        //% block="Nose X"
        NoseX,
        //% block="Nose Y"
        NoseY,
    }

    // Face properties (without ID)
    export enum FacePropertyID {
        //% block="Name"
        Name,
        //% block="X Center"
        XCenter,
        //% block="Y Center"
        YCenter,
        //% block="Width"
        Width,
        //% block="Height"
        Height,
        //% block="Left Eye X"
        LeftEyeX,
        //% block="Left Eye Y"
        LeftEyeY,
        //% block="Right Eye X"
        RightEyeX,
        //% block="Right Eye Y"
        RightEyeY,
        //% block="Left Mouth X"
        LeftMouthX,
        //% block="Left Mouth Y"
        LeftMouthY,
        //% block="Right Mouth X"
        RightMouthX,
        //% block="Right Mouth Y"
        RightMouthY,
        //% block="Nose X"
        NoseX,
        //% block="Nose Y"
        NoseY,
    }

    // Object properties (with ID)
    export enum ObjectProperty {
        //% block="ID"
        ID,
        //% block="Name"
        Name,
        //% block="X Center"
        XCenter,
        //% block="Y Center"
        YCenter,
        //% block="Width"
        Width,
        //% block="Height"
        Height,
    }

    // Object properties (without ID)
    export enum ObjectPropertyID {
        //% block="Name"
        Name,
        //% block="X Center"
        XCenter,
        //% block="Y Center"
        YCenter,
        //% block="Width"
        Width,
        //% block="Height"
        Height,
    }

    // Color properties (with ID)
    export enum ColorProperty {
        //% block="ID"
        ID,
        //% block="Name"
        Name,
        //% block="X Center"
        XCenter,
        //% block="Y Center"
        YCenter,
        //% block="Width"
        Width,
        //% block="Height"
        Height,
    }

    // Color properties (without ID)
    export enum ColorPropertyID {
        //% block="Name"
        Name,
        //% block="X Center"
        XCenter,
        //% block="Y Center"
        YCenter,
        //% block="Width"
        Width,
        //% block="Height"
        Height,
    }

    // Instance properties (with ID)
    export enum InstanceProperty {
        //% block="ID"
        ID,
        //% block="Name"
        Name,
        //% block="X Center"
        XCenter,
        //% block="Y Center"
        YCenter,
        //% block="Width"
        Width,
        //% block="Height"
        Height,
    }

    // Instance properties (without ID)
    export enum InstancePropertyID {
        //% block="Name"
        Name,
        //% block="X Center"
        XCenter,
        //% block="Y Center"
        YCenter,
        //% block="Width"
        Width,
        //% block="Height"
        Height,
    }


    // Helper function: Convert Algorithm enum to algorithm ID
    function algorithmToID(alg: Algorithm): number {
        return alg as number;
    }

    // Helper function: Get FaceResult property value
    function getFacePropertyValue(result: ResultVariant, prop: FaceProperty): any {
        if (!result) return 0;
        if (result instanceof FaceResult) {
            const fr = result as FaceResult;
            switch (prop) {
                case FaceProperty.ID: return fr.ID;
                case FaceProperty.Name: return fr.name; // Return name length or existence flag
                case FaceProperty.XCenter: return fr.xCenter;
                case FaceProperty.YCenter: return fr.yCenter;
                case FaceProperty.Width: return fr.width;
                case FaceProperty.Height: return fr.height;
                case FaceProperty.LeftEyeX: return fr.leye_x;
                case FaceProperty.LeftEyeY: return fr.leye_y;
                case FaceProperty.RightEyeX: return fr.reye_x;
                case FaceProperty.RightEyeY: return fr.reye_y;
                case FaceProperty.LeftMouthX: return fr.lmouth_x;
                case FaceProperty.LeftMouthY: return fr.lmouth_y;
                case FaceProperty.RightMouthX: return fr.rmouth_x;
                case FaceProperty.RightMouthY: return fr.rmouth_y;
                case FaceProperty.NoseX: return fr.nose_x;
                case FaceProperty.NoseY: return fr.nose_y;
                default: return 0;
            }
        }
        // Regular Result also supports basic properties
        const res = result as Result;
        switch (prop) {
            case FaceProperty.ID: return res.ID;
            case FaceProperty.Name: return res.name; // Return name string
            case FaceProperty.XCenter: return res.xCenter;
            case FaceProperty.YCenter: return res.yCenter;
            case FaceProperty.Width: return res.width;
            case FaceProperty.Height: return res.height;
            default: return 0;
        }
    }

    function getFacePropertyValueID(result: ResultVariant, prop: FacePropertyID): any {
        if (!result) return 0;
        if (result instanceof FaceResult) {
            const fr = result as FaceResult;
            switch (prop) {
                case FacePropertyID.Name: return fr.name;
                case FacePropertyID.XCenter: return fr.xCenter;
                case FacePropertyID.YCenter: return fr.yCenter;
                case FacePropertyID.Width: return fr.width;
                case FacePropertyID.Height: return fr.height;
                case FacePropertyID.LeftEyeX: return fr.leye_x;
                case FacePropertyID.LeftEyeY: return fr.leye_y;
                case FacePropertyID.RightEyeX: return fr.reye_x;
                case FacePropertyID.RightEyeY: return fr.reye_y;
                case FacePropertyID.LeftMouthX: return fr.lmouth_x;
                case FacePropertyID.LeftMouthY: return fr.lmouth_y;
                case FacePropertyID.RightMouthX: return fr.rmouth_x;
                case FacePropertyID.RightMouthY: return fr.rmouth_y;
                case FacePropertyID.NoseX: return fr.nose_x;
                case FacePropertyID.NoseY: return fr.nose_y;
                default: return 0;
            }
        }
        const res = result as Result;
        switch (prop) {
            case FacePropertyID.Name: return res.name;
            case FacePropertyID.XCenter: return res.xCenter;
            case FacePropertyID.YCenter: return res.yCenter;
            case FacePropertyID.Width: return res.width;
            case FacePropertyID.Height: return res.height;
            default: return 0;
        }
    }

    function getObjectPropertyValue(result: ResultVariant, prop: ObjectProperty): any {
        if (!result) return 0;
        const res = result as Result;
        switch (prop) {
            case ObjectProperty.ID: return res.ID;
            case ObjectProperty.Name: return res.name.length > 0 ? res.name : "";
            case ObjectProperty.XCenter: return res.xCenter;
            case ObjectProperty.YCenter: return res.yCenter;
            case ObjectProperty.Width: return res.width;
            case ObjectProperty.Height: return res.height;
            default: return 0;
        }
    }

    function getObjectPropertyValueID(result: ResultVariant, prop: ObjectPropertyID): any {
        if (!result) return 0;
        const res = result as Result;
        switch (prop) {
            case ObjectPropertyID.Name: return res.name.length > 0 ? res.name : "";
            case ObjectPropertyID.XCenter: return res.xCenter;
            case ObjectPropertyID.YCenter: return res.yCenter;
            case ObjectPropertyID.Width: return res.width;
            case ObjectPropertyID.Height: return res.height;
            default: return 0;
        }
    }

    /**
     *  Init I2C until success
     */

    //% weight=200
    //%block="initialize via I2C until success"
    //% group="Communication"
    export function I2CInit(): void {
        beginInternal();
    }

    /**
     * Switch algorithm
     * @param alg select algorithm
     */
    //% block="switch algorithm %alg"
    //% weight=199
    //% group="Algorithm Switch"
    export function switchAlgorithm(alg: Algorithm): void {
        switchAlgorithmInternal(algorithmToID(alg));
    }

    /**
     * Request one-time face recognition result and store it
     */
    //% block="get face recognition result"
    //% weight=198
    //% group="Face Recognition"
    export function getResultFaceRecogtion(): void {
        getResultInternal(ALGORITHM_FACE_RECOGNITION);
    }

    /**
     * Whether face recognized
     * Return true if a face is detected
     */
    //% block="available face recogtion"
    //% weight=197
    //% group="Face Recognition"
    export function availableFaceRecogtion(): boolean {
        return availableInternal(ALGORITHM_FACE_RECOGNITION);
    }

    /**
     * Get cached result of the face nearest to the center
     * @param alg face property to query
     */
    //% block="face nearest to center %alg"
    //% weight=196
    //% group="Face Recognition"
    export function getCachedCenterResult(alg: FaceProperty): any {
        const r = getCachedCenterResultInternal(ALGORITHM_FACE_RECOGNITION);
        return getFacePropertyValue(r, alg);
    }

    /**
     * Get number of detected faces from cache
     */
    //% block="number of detected faces"
    //% weight=195
    //% group="Face Recognition"
    export function getCachedResultNumFace(): number {
        return getCachedResultNumInternal(ALGORITHM_FACE_RECOGNITION);
    }

    /**
     * Get a specific face's property by index from cache
     * @param index face index (1-based)
     * @param alg face property to query
     */
    //% block="face %index %alg"
    //% weight=194
    //% index.min=1 index.defl=1
    //% group="Face Recognition"
    export function getCachedResultFaceProperty(index: number, alg: FaceProperty): any {
        const r = getCachedResultByIndexInternal(ALGORITHM_FACE_RECOGNITION, index - 1);
        return getFacePropertyValue(r, alg);
    }

    /**
     * Get number of learned face IDs
     */
    //% block="number of learned face IDs"
    //% weight=193
    //% group="Face Recognition"
    export function getNumLearnedFaceIDs(): number {
        return getCachedResultLearnedNumInternal(ALGORITHM_FACE_RECOGNITION);
    }

    /**
     * Whether face with given ID exists
     * @param index face ID index (number)
     */
    //% block="face ID %index exists?"
    //% weight=192
    //% index.min=1 index.defl=1
    //% group="Face Recognition"
    export function faceIdExists(index: number): boolean {
        const r = getCachedResultByIDInternal(ALGORITHM_FACE_RECOGNITION, index);
        return r != null;
    }

    /**
     * Get number of faces with a given ID
     * @param index face ID index (number)
     */
    //% block="number of faces with ID %index"
    //% weight=191
    //% index.min=1 index.defl=1
    //% group="Face Recognition"
    export function getNumFaceByID(index: number): number {
        return getCachedResultNumByIDInternal(ALGORITHM_FACE_RECOGNITION, index);
    }

    /**
     * Get a property for faces with a given ID
     * @param index face ID index (number)
     * @param alg face property (without ID)
     */
    //% block="face ID %index %alg"
    //% weight=190
    //% index.min=1 index.defl=1
    //% group="Face Recognition"
    export function getFacePropertyByID(index: number, alg: FacePropertyID): any {
        const r = getCachedResultByIDInternal(ALGORITHM_FACE_RECOGNITION, index);
        return getFacePropertyValueID(r, alg);
    }

    /**
     * Get a property for the Nth face of a given ID
     * @param id face ID (number)
     * @param n Nth face (1-based)
     * @param alg face property (without ID)
     */
    //% block="face ID %id nth %n %alg"
    //% weight=189
    //% id.min=1 id.defl=1
    //% n.min=1 n.defl=1
    //% group="Face Recognition"
    export function getFacePropertyByIDNth(id: number, n: number, alg: FacePropertyID): any {
        const r = getCachedIndexResultByIDInternal(ALGORITHM_FACE_RECOGNITION, id, n - 1);
        return getFacePropertyValueID(r, alg);
    }
    
    // ================= Object Recognition =================
    /** Get one-time object recognition result and cache it */
    //% block="get object recognition result"
    //% weight=188
    //% group="Object Recognition"
    export function getResultObjectRecogtion(): void {
        getResultInternal(ALGORITHM_OBJECT_RECOGNITION);
    }

    /** Whether object detected */
    //% block="object detected?"
    //% weight=187
    //% group="Object Recognition"
    export function availableObjectRecogtion(): boolean {
        return availableInternal(ALGORITHM_OBJECT_RECOGNITION);
    }

    /** Object property nearest to center */
    //% block="object nearest to center %alg"
    //% weight=186
    //% group="Object Recognition"
    export function getCachedCenterObjectResult(alg: ObjectProperty): number {
        const r = getCachedCenterResultInternal(ALGORITHM_OBJECT_RECOGNITION);
        return getObjectPropertyValue(r, alg);
    }

    /** Total number of detected objects */
    //% block="number of detected objects"
    //% weight=185
    //% group="Object Recognition"
    export function getCachedResultNumObject(): number {
        return getCachedResultNumInternal(ALGORITHM_OBJECT_RECOGNITION);
    }

    /** Property of Nth object */
    //% block="object %index %alg"
    //% weight=184
    //% index.min=1 index.defl=1
    //% group="Object Recognition"
    export function getCachedResultObjectProperty(index: number, alg: ObjectProperty): number {
        const r = getCachedResultByIndexInternal(ALGORITHM_OBJECT_RECOGNITION, index - 1);
        return getObjectPropertyValue(r, alg);
    }

    /** Total number of learned object IDs */
    //% block="number of learned object IDs"
    //% weight=183
    //% group="Object Recognition"
    export function getNumLearnedObjectIDs(): number {
        return getCachedResultLearnedNumInternal(ALGORITHM_OBJECT_RECOGNITION);
    }

    /** Whether object with specified ID exists */
    //% block="object ID %index exists?"
    //% weight=182
    //% index.min=1 index.defl=1
    //% group="Object Recognition"
    export function objectIdExists(index: number): boolean {
        const r = getCachedResultByIDInternal(ALGORITHM_OBJECT_RECOGNITION, index);
        return r != null;
    }

    /** Number of objects with specified ID */
    //% block="number of objects with ID %index"
    //% weight=181
    //% index.min=1 index.defl=1
    //% group="Object Recognition"
    export function getNumObjectByID(index: number): number {
        return getCachedResultNumByIDInternal(ALGORITHM_OBJECT_RECOGNITION, index);
    }

    /** Property of object with specified ID */
    //% block="object ID %index %alg"
    //% weight=180
    //% index.min=1 index.defl=1
    //% group="Object Recognition"
    export function getObjectPropertyByID(index: number, alg: ObjectPropertyID): number {
        const r = getCachedResultByIDInternal(ALGORITHM_OBJECT_RECOGNITION, index);
        return getObjectPropertyValueID(r, alg);
    }

    /** Property of Nth object with specified ID */
    //% block="object ID %id nth %n %alg"
    //% weight=179
    //% id.min=1 id.defl=1
    //% n.min=1 n.defl=1
    //% group="Object Recognition"
    export function getObjectPropertyByIDNth(id: number, n: number, alg: ObjectPropertyID): number {
        const r = getCachedIndexResultByIDInternal(ALGORITHM_OBJECT_RECOGNITION, id, n - 1);
        return getObjectPropertyValueID(r, alg);
    }

    // ================= Object Tracking =================
    /** Request one-time object tracking data and store in result */
    //% block="get object tracking result"
    //% weight=178
    //% group="Object Tracking"
    export function getResultObjectTracking(): void {
        getResultInternal(ALGORITHM_OBJECT_TRACKING);
    }

    /** Whether tracked object detected */
    //% block="tracked object detected?"
    //% weight=177
    //% group="Object Tracking"
    export function availableObjectTracking(): boolean {
        return availableInternal(ALGORITHM_OBJECT_TRACKING);
    }

    /** Property of tracked object */
    //% block="tracked object %alg"
    //% weight=176
    //% group="Object Tracking"
    export function getCachedObjectTrackingResult(alg: ObjectProperty): number {
        const r = getCachedCenterResultInternal(ALGORITHM_OBJECT_TRACKING);
        return getObjectPropertyValue(r, alg);
    }

    // ================= Color Recognition =================
    function getColorPropertyValue(result: ResultVariant, prop: ColorProperty): number {
        return getObjectPropertyValue(result, prop as any);
    }

    function getColorPropertyValueID(result: ResultVariant, prop: ColorPropertyID): number {
        return getObjectPropertyValueID(result, prop as any);
    }

    /** Get one-time color recognition result and cache it */
    //% block="get color recognition result"
    //% weight=175
    //% group="Color Recognition"
    export function getResultColorRecogtion(): void {
        getResultInternal(ALGORITHM_COLOR_RECOGNITION);
    }

    /** Whether color block detected */
    //% block="color block detected?"
    //% weight=174
    //% group="Color Recognition"
    export function availableColorRecogtion(): boolean {
        return availableInternal(ALGORITHM_COLOR_RECOGNITION);
    }

    /** Color block property nearest to center */
    //% block="color block nearest to center %alg"
    //% weight=173
    //% group="Color Recognition"
    export function getCachedCenterColorResult(alg: ColorProperty): number {
        const r = getCachedCenterResultInternal(ALGORITHM_COLOR_RECOGNITION);
        return getColorPropertyValue(r, alg);
    }

    /** Total number of detected color blocks */
    //% block="number of detected color blocks"
    //% weight=172
    //% group="Color Recognition"
    export function getCachedResultNumColor(): number {
        return getCachedResultNumInternal(ALGORITHM_COLOR_RECOGNITION);
    }

    /** Property of Nth color block */
    //% block="color block %index %alg"
    //% weight=171
    //% index.min=1 index.defl=1
    //% group="Color Recognition"
    export function getCachedResultColorProperty(index: number, alg: ColorProperty): number {
        const r = getCachedResultByIndexInternal(ALGORITHM_COLOR_RECOGNITION, index - 1);
        return getColorPropertyValue(r, alg);
    }

    /** Total number of learned color block IDs */
    //% block="number of learned color block IDs"
    //% weight=170
    //% group="Color Recognition"
    export function getNumLearnedColorIDs(): number {
        return getCachedResultLearnedNumInternal(ALGORITHM_COLOR_RECOGNITION);
    }

    /** Whether color block with specified ID exists */
    //% block="color block ID %index exists?"
    //% weight=169
    //% index.min=1 index.defl=1
    //% group="Color Recognition"
    export function colorIdExists(index: number): boolean {
        const r = getCachedResultByIDInternal(ALGORITHM_COLOR_RECOGNITION, index);
        return r != null;
    }

    /** Number of color blocks with specified ID */
    //% block="number of color blocks with ID %index"
    //% weight=168
    //% index.min=1 index.defl=1
    //% group="Color Recognition"
    export function getNumColorByID(index: number): number {
        return getCachedResultNumByIDInternal(ALGORITHM_COLOR_RECOGNITION, index);
    }

    /** Property of color block with specified ID */
    //% block="color block ID %index %alg"
    //% weight=167
    //% index.min=1 index.defl=1
    //% group="Color Recognition"
    export function getColorPropertyByID(index: number, alg: ColorPropertyID): number {
        const r = getCachedResultByIDInternal(ALGORITHM_COLOR_RECOGNITION, index);
        return getColorPropertyValueID(r, alg);
    }

    /** Property of Nth color block with specified ID */
    //% block="color block ID %id nth %n %alg"
    //% weight=166
    //% id.min=1 id.defl=1
    //% n.min=1 n.defl=1
    //% group="Color Recognition"
    export function getColorPropertyByIDNth(id: number, n: number, alg: ColorPropertyID): number {
        const r = getCachedIndexResultByIDInternal(ALGORITHM_COLOR_RECOGNITION, id, n - 1);
        return getColorPropertyValueID(r, alg);
    }


    // ================= Object Classification =================
    // Object classification properties (only ID and Name)
    export enum ObjectClassificationProperty {
        //% block="ID"
        ID,
        //% block="Name"
        Name,
    }

    function getObjectClassificationPropertyValue(result: ResultVariant, prop: ObjectClassificationProperty): any {
        if (!result) return 0;
        const res = result as Result;
        switch (prop) {
            case ObjectClassificationProperty.ID: return res.ID;
            case ObjectClassificationProperty.Name: return res.name.length > 0 ? res.name : "";
            default: return 0;
        }
    }

    /** Request one-time object classification data and store in result */
    //% block="get object classification result"
    //% weight=165
    //% group="Object Classification"
    export function getResultObjectClassification(): void {
        getResultInternal(ALGORITHM_OBJECT_CLASSIFICATION);
    }

    /** Whether classified object detected */
    //% block="classified object detected?"
    //% weight=164
    //% group="Object Classification"
    export function availableObjectClassification(): boolean {
        return availableInternal(ALGORITHM_OBJECT_CLASSIFICATION);
    }

    /** Property of classified object */
    //% block="classified object %alg"
    //% weight=163
    //% group="Object Classification"
    export function getCachedObjectClassificationResult(alg: ObjectClassificationProperty): any {
        const r = getCachedCenterResultInternal(ALGORITHM_OBJECT_CLASSIFICATION);
        return getObjectClassificationPropertyValue(r, alg);
    }

    // ================= Self-Learning Classification =================
    // Self-learning classification properties (only ID and Name)
    export enum SelfLearningClassificationProperty {
        //% block="ID"
        ID,
        //% block="Name"
        Name,
    }

    function getSelfLearningClassificationPropertyValue(result: ResultVariant, prop: SelfLearningClassificationProperty): any {
        if (!result) return 0;
        const res = result as Result;
        switch (prop) {
            case SelfLearningClassificationProperty.ID: return res.ID;
            case SelfLearningClassificationProperty.Name: return res.name.length > 0 ? res.name : "";
            default: return 0;
        }
    }

    /** Request one-time self-learning classification data and store in result */
    //% block="get self-learning classification result"
    //% weight=162
    //% group="Self-learning Classification"
    export function getResultSelfLearningClassification(): void {
        getResultInternal(ALGORITHM_SELF_LEARNING_CLASSIFICATION);
    }

    /** Whether self-learning classification detected */
    //% block="self-learning classification detected?"
    //% weight=161
    //% group="Self-learning Classification"
    export function availableSelfLearningClassification(): boolean {
        return availableInternal(ALGORITHM_SELF_LEARNING_CLASSIFICATION);
    }

    /** Property of self-learning classification */
    //% block="self-learning classification %alg"
    //% weight=160
    //% group="Self-learning Classification"
    export function getCachedSelfLearningClassificationResult(alg: SelfLearningClassificationProperty): any {
        const r = getCachedCenterResultInternal(ALGORITHM_SELF_LEARNING_CLASSIFICATION);
        return getSelfLearningClassificationPropertyValue(r, alg);
    }

    // ================= Instance Segmentation =================
    function getInstancePropertyValue(result: ResultVariant, prop: InstanceProperty): number {
        return getObjectPropertyValue(result, prop as any);
    }

    function getInstancePropertyValueID(result: ResultVariant, prop: InstancePropertyID): number {
        return getObjectPropertyValueID(result, prop as any);
    }

    /** Get one-time instance segmentation result and cache it */
    //% block="get instance segmentation result"
    //% weight=159
    //% group="Instance Segmentation"
    export function getResultInstanceRecogtion(): void {
        getResultInternal(ALGORITHM_SEGMENT);
    }

    /** Whether instance detected */
    //% block="instance detected?"
    //% weight=158
    //% group="Instance Segmentation"
    export function availableInstanceRecogtion(): boolean {
        return availableInternal(ALGORITHM_SEGMENT);
    }

    /** Instance property nearest to center */
    //% block="instance nearest to center %alg"
    //% weight=157
    //% group="Instance Segmentation"
    export function getCachedCenterInstanceResult(alg: InstanceProperty): number {
        const r = getCachedCenterResultInternal(ALGORITHM_SEGMENT);
        return getInstancePropertyValue(r, alg);
    }

    /** Total number of detected instances */
    //% block="number of detected instances"
    //% weight=156
    //% group="Instance Segmentation"
    export function getCachedResultNumInstance(): number {
        return getCachedResultNumInternal(ALGORITHM_SEGMENT);
    }

    /** Property of Nth instance */
    //% block="instance %index %alg"
    //% weight=155
    //% index.min=1 index.defl=1
    //% group="Instance Segmentation"
    export function getCachedResultInstanceProperty(index: number, alg: InstanceProperty): number {
        const r = getCachedResultByIndexInternal(ALGORITHM_SEGMENT, index - 1);
        return getInstancePropertyValue(r, alg);
    }

    /** Total number of learned instance IDs */
    //% block="number of learned instance IDs"
    //% weight=154
    //% group="Instance Segmentation"
    export function getNumLearnedInstanceIDs(): number {
        return getCachedResultLearnedNumInternal(ALGORITHM_SEGMENT);
    }

    /** Whether instance with specified ID exists */
    //% block="instance ID %index exists?"
    //% weight=153
    //% index.min=1 index.defl=1
    //% group="Instance Segmentation"
    export function instanceIdExists(index: number): boolean {
        const r = getCachedResultByIDInternal(ALGORITHM_SEGMENT, index);
        return r != null;
    }

    /** Number of instances with specified ID */
    //% block="number of instances with ID %index"
    //% weight=152
    //% index.min=1 index.defl=1
    //% group="Instance Segmentation"
    export function getNumInstanceByID(index: number): number {
        return getCachedResultNumByIDInternal(ALGORITHM_SEGMENT, index);
    }

    /** Property of instance with specified ID */
    //% block="instance ID %index %alg"
    //% weight=151
    //% index.min=1 index.defl=1
    //% group="Instance Segmentation"
    export function getInstancePropertyByID(index: number, alg: InstancePropertyID): number {
        const r = getCachedResultByIDInternal(ALGORITHM_SEGMENT, index);
        return getInstancePropertyValueID(r, alg);
    }

    /** Property of Nth instance with specified ID */
    //% block="instance ID %id nth %n %alg"
    //% weight=150
    //% id.min=1 id.defl=1
    //% n.min=1 n.defl=1
    //% group="Instance Segmentation"
    export function getInstancePropertyByIDNth(id: number, n: number, alg: InstancePropertyID): number {
        const r = getCachedIndexResultByIDInternal(ALGORITHM_SEGMENT, id, n - 1);
        return getInstancePropertyValueID(r, alg);
    }

    // ================= Gesture Recognition =================
    function getGesturePropertyValue(result: ResultVariant, prop: GestureProperty): number {
        if (!result) return 0;
        if (result instanceof HandResult) {
            const hr = result as HandResult;
            switch (prop) {
                case GestureProperty.ID: return hr.ID;
                case GestureProperty.Name: return hr.name.length > 0 ? 1 : 0;
                case GestureProperty.XCenter: return hr.xCenter;
                case GestureProperty.YCenter: return hr.yCenter;
                case GestureProperty.Width: return hr.width;
                case GestureProperty.Height: return hr.height;
                case GestureProperty.ThumbBaseX: return hr.thumb_cmc_x;
                case GestureProperty.ThumbBaseY: return hr.thumb_cmc_y;
                case GestureProperty.ThumbMiddleJointX: return hr.thumb_mcp_x;
                case GestureProperty.ThumbMiddleJointY: return hr.thumb_mcp_y;
                case GestureProperty.ThumbSecondJointX: return hr.thumb_ip_x;
                case GestureProperty.ThumbSecondJointY: return hr.thumb_ip_y;
                case GestureProperty.ThumbTipX: return hr.thumb_tip_x;
                case GestureProperty.ThumbTipY: return hr.thumb_tip_y;
                case GestureProperty.IndexFingerBaseX: return hr.index_finger_mcp_x;
                case GestureProperty.IndexFingerBaseY: return hr.index_finger_mcp_y;
                case GestureProperty.IndexFingerFirstJointX: return hr.index_finger_pip_x;
                case GestureProperty.IndexFingerFirstJointY: return hr.index_finger_pip_y;
                case GestureProperty.IndexFingerSecondJointX: return hr.index_finger_dip_x;
                case GestureProperty.IndexFingerSecondJointY: return hr.index_finger_dip_y;
                case GestureProperty.IndexFingerTipX: return hr.index_finger_tip_x;
                case GestureProperty.IndexFingerTipY: return hr.index_finger_tip_y;
                case GestureProperty.MiddleFingerBaseX: return hr.middle_finger_mcp_x;
                case GestureProperty.MiddleFingerBaseY: return hr.middle_finger_mcp_y;
                case GestureProperty.MiddleFingerFirstJointX: return hr.middle_finger_pip_x;
                case GestureProperty.MiddleFingerFirstJointY: return hr.middle_finger_pip_y;
                case GestureProperty.MiddleFingerSecondJointX: return hr.middle_finger_dip_x;
                case GestureProperty.MiddleFingerSecondJointY: return hr.middle_finger_dip_y;
                case GestureProperty.MiddleFingerTipX: return hr.middle_finger_tip_x;
                case GestureProperty.MiddleFingerTipY: return hr.middle_finger_tip_y;
                case GestureProperty.RingFingerBaseX: return hr.ring_finger_mcp_x;
                case GestureProperty.RingFingerBaseY: return hr.ring_finger_mcp_y;
                case GestureProperty.RingFingerFirstJointX: return hr.ring_finger_pip_x;
                case GestureProperty.RingFingerFirstJointY: return hr.ring_finger_pip_y;
                case GestureProperty.RingFingerSecondJointX: return hr.ring_finger_dip_x;
                case GestureProperty.RingFingerSecondJointY: return hr.ring_finger_dip_y;
                case GestureProperty.RingFingerTipX: return hr.ring_finger_tip_x;
                case GestureProperty.RingFingerTipY: return hr.ring_finger_tip_y;
                case GestureProperty.PinkyFingerBaseX: return hr.pinky_finger_mcp_x;
                case GestureProperty.PinkyFingerBaseY: return hr.pinky_finger_mcp_y;
                case GestureProperty.PinkyFingerFirstJointX: return hr.pinky_finger_pip_x;
                case GestureProperty.PinkyFingerFirstJointY: return hr.pinky_finger_pip_y;
                case GestureProperty.PinkyFingerSecondJointX: return hr.pinky_finger_dip_x;
                case GestureProperty.PinkyFingerSecondJointY: return hr.pinky_finger_dip_y;
                case GestureProperty.PinkyFingerTipX: return hr.pinky_finger_tip_x;
                case GestureProperty.PinkyFingerTipY: return hr.pinky_finger_tip_y;
                default: return 0;
            }
        }
        return getObjectPropertyValue(result, prop as any);
    }

    function getGesturePropertyValueID(result: ResultVariant, prop: GesturePropertyID): number {
        if (!result) return 0;
        if (result instanceof HandResult) {
            const hr = result as HandResult;
            switch (prop) {
                case GesturePropertyID.Name: return hr.name.length > 0 ? 1 : 0;
                case GesturePropertyID.XCenter: return hr.xCenter;
                case GesturePropertyID.YCenter: return hr.yCenter;
                case GesturePropertyID.Width: return hr.width;
                case GesturePropertyID.Height: return hr.height;
                case GesturePropertyID.confidence: return hr.confidence;
                case GesturePropertyID.WristX: return hr.wrist_x;
                case GesturePropertyID.WristY: return hr.wrist_y;
                case GesturePropertyID.ThumbBaseX: return hr.thumb_cmc_x;
                case GesturePropertyID.ThumbBaseY: return hr.thumb_cmc_y;
                case GesturePropertyID.ThumbMiddleJointX: return hr.thumb_mcp_x;
                case GesturePropertyID.ThumbMiddleJointY: return hr.thumb_mcp_y;
                case GesturePropertyID.ThumbSecondJointX: return hr.thumb_ip_x;
                case GesturePropertyID.ThumbSecondJointY: return hr.thumb_ip_y;
                case GesturePropertyID.ThumbTipX: return hr.thumb_tip_x;
                case GesturePropertyID.ThumbTipY: return hr.thumb_tip_y;
                case GesturePropertyID.IndexFingerBaseX: return hr.index_finger_mcp_x;
                case GesturePropertyID.IndexFingerBaseY: return hr.index_finger_mcp_y;
                case GesturePropertyID.IndexFingerFirstJointX: return hr.index_finger_pip_x;
                case GesturePropertyID.IndexFingerFirstJointY: return hr.index_finger_pip_y;
                case GesturePropertyID.IndexFingerSecondJointX: return hr.index_finger_dip_x;
                case GesturePropertyID.IndexFingerSecondJointY: return hr.index_finger_dip_y;
                case GesturePropertyID.IndexFingerTipX: return hr.index_finger_tip_x;
                case GesturePropertyID.IndexFingerTipY: return hr.index_finger_tip_y;
                case GesturePropertyID.MiddleFingerBaseX: return hr.middle_finger_mcp_x;
                case GesturePropertyID.MiddleFingerBaseY: return hr.middle_finger_mcp_y;
                case GesturePropertyID.MiddleFingerFirstJointX: return hr.middle_finger_pip_x;
                case GesturePropertyID.MiddleFingerFirstJointY: return hr.middle_finger_pip_y;
                case GesturePropertyID.MiddleFingerSecondJointX: return hr.middle_finger_dip_x;
                case GesturePropertyID.MiddleFingerSecondJointY: return hr.middle_finger_dip_y;
                case GesturePropertyID.MiddleFingerTipX: return hr.middle_finger_tip_x;
                case GesturePropertyID.MiddleFingerTipY: return hr.middle_finger_tip_y;
                case GesturePropertyID.RingFingerBaseX: return hr.ring_finger_mcp_x;
                case GesturePropertyID.RingFingerBaseY: return hr.ring_finger_mcp_y;
                case GesturePropertyID.RingFingerFirstJointX: return hr.ring_finger_pip_x;
                case GesturePropertyID.RingFingerFirstJointY: return hr.ring_finger_pip_y;
                case GesturePropertyID.RingFingerSecondJointX: return hr.ring_finger_dip_x;
                case GesturePropertyID.RingFingerSecondJointY: return hr.ring_finger_dip_y;
                case GesturePropertyID.RingFingerTipX: return hr.ring_finger_tip_x;
                case GesturePropertyID.RingFingerTipY: return hr.ring_finger_tip_y;
                case GesturePropertyID.PinkyFingerBaseX: return hr.pinky_finger_mcp_x;
                case GesturePropertyID.PinkyFingerBaseY: return hr.pinky_finger_mcp_y;
                case GesturePropertyID.PinkyFingerFirstJointX: return hr.pinky_finger_pip_x;
                case GesturePropertyID.PinkyFingerFirstJointY: return hr.pinky_finger_pip_y;
                case GesturePropertyID.PinkyFingerSecondJointX: return hr.pinky_finger_dip_x;
                case GesturePropertyID.PinkyFingerSecondJointY: return hr.pinky_finger_dip_y;
                case GesturePropertyID.PinkyFingerTipX: return hr.pinky_finger_tip_x;
                case GesturePropertyID.PinkyFingerTipY: return hr.pinky_finger_tip_y;
                default: return 0;
            }
        }
        return getObjectPropertyValueID(result, prop as any);
    }

    // Gesture properties (with ID)
    export enum GestureProperty {
        //% block="ID"
        ID,
        //% block="Name"
        Name,
        //% block="X Center"
        XCenter,
        //% block="Y Center"
        YCenter,
        //% block="Width"
        Width,
        //% block="Height"
        Height,
        //% block="Thumb Base X"
        ThumbBaseX,
        //% block="Thumb Base Y"
        ThumbBaseY,
        //% block="Thumb Middle Joint X"
        ThumbMiddleJointX,
        //% block="Thumb Middle Joint Y"
        ThumbMiddleJointY,
        //% block="Thumb Second Joint X"
        ThumbSecondJointX,
        //% block="Thumb Second Joint Y"
        ThumbSecondJointY,
        //% block="Thumb Tip X"
        ThumbTipX,
        //% block="Thumb Tip Y"
        ThumbTipY,
        //% block="Index Finger Base X"
        IndexFingerBaseX,
        //% block="Index Finger Base Y"
        IndexFingerBaseY,
        //% block="Index Finger First Joint X"
        IndexFingerFirstJointX,
        //% block="Index Finger First Joint Y"
        IndexFingerFirstJointY,
        //% block="Index Finger Second Joint X"
        IndexFingerSecondJointX,
        //% block="Index Finger Second Joint Y"
        IndexFingerSecondJointY,
        //% block="Index Finger Tip X"
        IndexFingerTipX,
        //% block="Index Finger Tip Y"
        IndexFingerTipY,
        //% block="Middle Finger Base X"
        MiddleFingerBaseX,
        //% block="Middle Finger Base Y"
        MiddleFingerBaseY,
        //% block="Middle Finger First Joint X"
        MiddleFingerFirstJointX,
        //% block="Middle Finger First Joint Y"
        MiddleFingerFirstJointY,
        //% block="Middle Finger Second Joint X"
        MiddleFingerSecondJointX,
        //% block="Middle Finger Second Joint Y"
        MiddleFingerSecondJointY,
        //% block="Middle Finger Tip X"
        MiddleFingerTipX,
        //% block="Middle Finger Tip Y"
        MiddleFingerTipY,
        //% block="Ring Finger Base X"
        RingFingerBaseX,
        //% block="Ring Finger Base Y"
        RingFingerBaseY,
        //% block="Ring Finger First Joint X"
        RingFingerFirstJointX,
        //% block="Ring Finger First Joint Y"
        RingFingerFirstJointY,
        //% block="Ring Finger Second Joint X"
        RingFingerSecondJointX,
        //% block="Ring Finger Second Joint Y"
        RingFingerSecondJointY,
        //% block="Ring Finger Tip X"
        RingFingerTipX,
        //% block="Ring Finger Tip Y"
        RingFingerTipY,
        //% block="Pinky Finger Base X"
        PinkyFingerBaseX,
        //% block="Pinky Finger Base Y"
        PinkyFingerBaseY,
        //% block="Pinky Finger First Joint X"
        PinkyFingerFirstJointX,
        //% block="Pinky Finger First Joint Y"
        PinkyFingerFirstJointY,
        //% block="Pinky Finger Second Joint X"
        PinkyFingerSecondJointX,
        //% block="Pinky Finger Second Joint Y"
        PinkyFingerSecondJointY,
        //% block="Pinky Finger Tip X"
        PinkyFingerTipX,
        //% block="Pinky Finger Tip Y"
        PinkyFingerTipY,
    }

    // Gesture properties (without ID)
    export enum GesturePropertyID {
        //% block="Name"
        Name,
        //% block="X Center"
        XCenter,
        //% block="Y Center"
        YCenter,
        //% block="Width"
        Width,
        //% block="Height"
        Height,
        //% block="confidence"
        confidence,
        //% block="Wrist X"
        WristX,
        //% block="Wrist Y"
        WristY,
        //% block="Thumb Base X"
        ThumbBaseX,
        //% block="Thumb Base Y"
        ThumbBaseY,
        //% block="Thumb Middle Joint X"
        ThumbMiddleJointX,
        //% block="Thumb Middle Joint Y"
        ThumbMiddleJointY,
        //% block="Thumb Second Joint X"
        ThumbSecondJointX,
        //% block="Thumb Second Joint Y"
        ThumbSecondJointY,
        //% block="Thumb Tip X"
        ThumbTipX,
        //% block="Thumb Tip Y"
        ThumbTipY,
        //% block="Index Finger Base X"
        IndexFingerBaseX,
        //% block="Index Finger Base Y"
        IndexFingerBaseY,
        //% block="Index Finger First Joint X"
        IndexFingerFirstJointX,
        //% block="Index Finger First Joint Y"
        IndexFingerFirstJointY,
        //% block="Index Finger Second Joint X"
        IndexFingerSecondJointX,
        //% block="Index Finger Second Joint Y"
        IndexFingerSecondJointY,
        //% block="Index Finger Tip X"
        IndexFingerTipX,
        //% block="Index Finger Tip Y"
        IndexFingerTipY,
        //% block="Middle Finger Base X"
        MiddleFingerBaseX,
        //% block="Middle Finger Base Y"
        MiddleFingerBaseY,
        //% block="Middle Finger First Joint X"
        MiddleFingerFirstJointX,
        //% block="Middle Finger First Joint Y"
        MiddleFingerFirstJointY,
        //% block="Middle Finger Second Joint X"
        MiddleFingerSecondJointX,
        //% block="Middle Finger Second Joint Y"
        MiddleFingerSecondJointY,
        //% block="Middle Finger Tip X"
        MiddleFingerTipX,
        //% block="Middle Finger Tip Y"
        MiddleFingerTipY,
        //% block="Ring Finger Base X"
        RingFingerBaseX,
        //% block="Ring Finger Base Y"
        RingFingerBaseY,
        //% block="Ring Finger First Joint X"
        RingFingerFirstJointX,
        //% block="Ring Finger First Joint Y"
        RingFingerFirstJointY,
        //% block="Ring Finger Second Joint X"
        RingFingerSecondJointX,
        //% block="Ring Finger Second Joint Y"
        RingFingerSecondJointY,
        //% block="Ring Finger Tip X"
        RingFingerTipX,
        //% block="Ring Finger Tip Y"
        RingFingerTipY,
        //% block="Pinky Finger Base X"
        PinkyFingerBaseX,
        //% block="Pinky Finger Base Y"
        PinkyFingerBaseY,
        //% block="Pinky Finger First Joint X"
        PinkyFingerFirstJointX,
        //% block="Pinky Finger First Joint Y"
        PinkyFingerFirstJointY,
        //% block="Pinky Finger Second Joint X"
        PinkyFingerSecondJointX,
        //% block="Pinky Finger Second Joint Y"
        PinkyFingerSecondJointY,
        //% block="Pinky Finger Tip X"
        PinkyFingerTipX,
        //% block="Pinky Finger Tip Y"
        PinkyFingerTipY,
    }

    /** Get one-time gesture recognition result and cache it */
    //% block="get gesture recognition result"
    //% weight=149
    //% group="Gesture Recognition"
    export function getResultGestureRecogtion(): void {
        getResultInternal(ALGORITHM_HAND_RECOGNITION);
    }

    /** Whether gesture detected */
    //% block="gesture detected?"
    //% weight=148
    //% group="Gesture Recognition"
    export function availableGestureRecogtion(): boolean {
        return availableInternal(ALGORITHM_HAND_RECOGNITION);
    }

    /** Gesture property nearest to center */
    //% block="gesture nearest to center %alg"
    //% weight=147
    //% group="Gesture Recognition"
    export function getCachedCenterGestureResult(alg: GestureProperty): number {
        const r = getCachedCenterResultInternal(ALGORITHM_HAND_RECOGNITION);
        return getGesturePropertyValue(r, alg);
    }

    /** Total number of detected gestures */
    //% block="number of detected gestures"
    //% weight=146
    //% group="Gesture Recognition"
    export function getCachedResultNumGesture(): number {
        return getCachedResultNumInternal(ALGORITHM_HAND_RECOGNITION);
    }

    /** Property of Nth gesture */
    //% block="gesture %index %alg"
    //% weight=145
    //% index.min=1 index.defl=1
    //% group="Gesture Recognition"
    export function getCachedResultGestureProperty(index: number, alg: GestureProperty): number {
        const r = getCachedResultByIndexInternal(ALGORITHM_HAND_RECOGNITION, index - 1);
        return getGesturePropertyValue(r, alg);
    }

    /** Total number of learned gesture IDs */
    //% block="number of learned gesture IDs"
    //% weight=144
    //% group="Gesture Recognition"
    export function getNumLearnedGestureIDs(): number {
        return getCachedResultLearnedNumInternal(ALGORITHM_HAND_RECOGNITION);
    }

    /** Whether gesture with specified ID exists */
    //% block="gesture ID %index exists?"
    //% weight=143
    //% index.min=1 index.defl=1
    //% group="Gesture Recognition"
    export function gestureIdExists(index: number): boolean {
        const r = getCachedResultByIDInternal(ALGORITHM_HAND_RECOGNITION, index);
        return r != null;
    }

    /** Number of gestures with specified ID */
    //% block="number of gestures with ID %index"
    //% weight=142
    //% index.min=1 index.defl=1
    //% group="Gesture Recognition"
    export function getNumGestureByID(index: number): number {
        return getCachedResultNumByIDInternal(ALGORITHM_HAND_RECOGNITION, index);
    }

    /** Property of gesture with specified ID */
    //% block="gesture ID %index %alg"
    //% weight=141
    //% index.min=1 index.defl=1
    //% group="Gesture Recognition"
    export function getGesturePropertyByID(index: number, alg: GesturePropertyID): number {
        const r = getCachedResultByIDInternal(ALGORITHM_HAND_RECOGNITION, index);
        return getGesturePropertyValueID(r, alg);
    }

    /** Property of Nth gesture with specified ID */
    //% block="gesture ID %id nth %n %alg"
    //% weight=140
    //% id.min=1 id.defl=1
    //% n.min=1 n.defl=1
    //% group="Gesture Recognition"
    export function getGesturePropertyByIDNth(id: number, n: number, alg: GesturePropertyID): number {
        const r = getCachedIndexResultByIDInternal(ALGORITHM_HAND_RECOGNITION, id, n - 1);
        return getGesturePropertyValueID(r, alg);
    }

    // ================= Pose Recognition (Human Pose) =================
    function getPosePropertyValue(result: ResultVariant, prop: PoseProperty): number {
        if (!result) return 0;
        if (result instanceof PoseResult) {
            const pr = result as PoseResult;
            switch (prop) {
                case PoseProperty.ID: return pr.ID;
                case PoseProperty.Name: return pr.name.length > 0 ? 1 : 0;
                case PoseProperty.XCenter: return pr.xCenter;
                case PoseProperty.YCenter: return pr.yCenter;
                case PoseProperty.Width: return pr.width;
                case PoseProperty.Height: return pr.height;
                case PoseProperty.NoseX: return pr.nose_x;
                case PoseProperty.NoseY: return pr.nose_y;
                case PoseProperty.LeftEyeX: return pr.leye_x;
                case PoseProperty.LeftEyeY: return pr.leye_y;
                case PoseProperty.RightEyeX: return pr.reye_x;
                case PoseProperty.RightEyeY: return pr.reye_y;
                case PoseProperty.LeftEarX: return pr.lear_x;
                case PoseProperty.LeftEarY: return pr.lear_y;
                case PoseProperty.RightEarX: return pr.rear_x;
                case PoseProperty.RightEarY: return pr.rear_y;
                case PoseProperty.LeftShoulderX: return pr.lshoulder_x;
                case PoseProperty.LeftShoulderY: return pr.lshoulder_y;
                case PoseProperty.RightShoulderX: return pr.rshoulder_x;
                case PoseProperty.RightShoulderY: return pr.rshoulder_y;
                case PoseProperty.LeftElbowX: return pr.lelbow_x;
                case PoseProperty.LeftElbowY: return pr.lelbow_y;
                case PoseProperty.RightElbowX: return pr.relbow_x;
                case PoseProperty.RightElbowY: return pr.relbow_y;
                case PoseProperty.LeftWristX: return pr.lwrist_x;
                case PoseProperty.LeftWristY: return pr.lwrist_y;
                case PoseProperty.RightWristX: return pr.rwrist_x;
                case PoseProperty.RightWristY: return pr.rwrist_y;
                case PoseProperty.LeftHipX: return pr.lhip_x;
                case PoseProperty.LeftHipY: return pr.lhip_y;
                case PoseProperty.RightHipX: return pr.rhip_x;
                case PoseProperty.RightHipY: return pr.rhip_y;
                case PoseProperty.LeftKneeX: return pr.lknee_x;
                case PoseProperty.LeftKneeY: return pr.lknee_y;
                case PoseProperty.RightKneeX: return pr.rknee_x;
                case PoseProperty.RightKneeY: return pr.rknee_y;
                case PoseProperty.LeftAnkleX: return pr.lankle_x;
                case PoseProperty.LeftAnkleY: return pr.lankle_y;
                case PoseProperty.RightAnkleX: return pr.rankle_x;
                case PoseProperty.RightAnkleY: return pr.rankle_y;
                default: return 0;
            }
        }
        return getObjectPropertyValue(result, prop as any);
    }

    function getPosePropertyValueID(result: ResultVariant, prop: PosePropertyID): number {
        if (!result) return 0;
        if (result instanceof PoseResult) {
            const pr = result as PoseResult;
            switch (prop) {
                case PosePropertyID.Name: return pr.name.length > 0 ? 1 : 0;
                case PosePropertyID.XCenter: return pr.xCenter;
                case PosePropertyID.YCenter: return pr.yCenter;
                case PosePropertyID.Width: return pr.width;
                case PosePropertyID.Height: return pr.height;
                case PosePropertyID.NoseX: return pr.nose_x;
                case PosePropertyID.NoseY: return pr.nose_y;
                case PosePropertyID.LeftEyeX: return pr.leye_x;
                case PosePropertyID.LeftEyeY: return pr.leye_y;
                case PosePropertyID.RightEyeX: return pr.reye_x;
                case PosePropertyID.RightEyeY: return pr.reye_y;
                case PosePropertyID.LeftEarX: return pr.lear_x;
                case PosePropertyID.LeftEarY: return pr.lear_y;
                case PosePropertyID.RightEarX: return pr.rear_x;
                case PosePropertyID.RightEarY: return pr.rear_y;
                case PosePropertyID.LeftShoulderX: return pr.lshoulder_x;
                case PosePropertyID.LeftShoulderY: return pr.lshoulder_y;
                case PosePropertyID.RightShoulderX: return pr.rshoulder_x;
                case PosePropertyID.RightShoulderY: return pr.rshoulder_y;
                case PosePropertyID.LeftElbowX: return pr.lelbow_x;
                case PosePropertyID.LeftElbowY: return pr.lelbow_y;
                case PosePropertyID.RightElbowX: return pr.relbow_x;
                case PosePropertyID.RightElbowY: return pr.relbow_y;
                case PosePropertyID.LeftWristX: return pr.lwrist_x;
                case PosePropertyID.LeftWristY: return pr.lwrist_y;
                case PosePropertyID.RightWristX: return pr.rwrist_x;
                case PosePropertyID.RightWristY: return pr.rwrist_y;
                case PosePropertyID.LeftHipX: return pr.lhip_x;
                case PosePropertyID.LeftHipY: return pr.lhip_y;
                case PosePropertyID.RightHipX: return pr.rhip_x;
                case PosePropertyID.RightHipY: return pr.rhip_y;
                case PosePropertyID.LeftKneeX: return pr.lknee_x;
                case PosePropertyID.LeftKneeY: return pr.lknee_y;
                case PosePropertyID.RightKneeX: return pr.rknee_x;
                case PosePropertyID.RightKneeY: return pr.rknee_y;
                case PosePropertyID.LeftAnkleX: return pr.lankle_x;
                case PosePropertyID.LeftAnkleY: return pr.lankle_y;
                case PosePropertyID.RightAnkleX: return pr.rankle_x;
                case PosePropertyID.RightAnkleY: return pr.rankle_y;
                default: return 0;
            }
        }
        return getObjectPropertyValueID(result, prop as any);
    }

    // Pose properties (with ID)
    export enum PoseProperty {
        //% block="ID"
        ID,
        //% block="Name"
        Name,
        //% block="X Center"
        XCenter,
        //% block="Y Center"
        YCenter,
        //% block="Width"
        Width,
        //% block="Height"
        Height,
        //% block="Nose X"
        NoseX,
        //% block="Nose Y"
        NoseY,
        //% block="Left Eye X"
        LeftEyeX,
        //% block="Left Eye Y"
        LeftEyeY,
        //% block="Right Eye X"
        RightEyeX,
        //% block="Right Eye Y"
        RightEyeY,
        //% block="Left Ear X"
        LeftEarX,
        //% block="Left Ear Y"
        LeftEarY,
        //% block="Right Ear X"
        RightEarX,
        //% block="Right Ear Y"
        RightEarY,
        //% block="Left Shoulder X"
        LeftShoulderX,
        //% block="Left Shoulder Y"
        LeftShoulderY,
        //% block="Right Shoulder X"
        RightShoulderX,
        //% block="Right Shoulder Y"
        RightShoulderY,
        //% block="Left Elbow X"
        LeftElbowX,
        //% block="Left Elbow Y"
        LeftElbowY,
        //% block="Right Elbow X"
        RightElbowX,
        //% block="Right Elbow Y"
        RightElbowY,
        //% block="Left Wrist X"
        LeftWristX,
        //% block="Left Wrist Y"
        LeftWristY,
        //% block="Right Wrist X"
        RightWristX,
        //% block="Right Wrist Y"
        RightWristY,
        //% block="Left Hip X"
        LeftHipX,
        //% block="Left Hip Y"
        LeftHipY,
        //% block="Right Hip X"
        RightHipX,
        //% block="Right Hip Y"
        RightHipY,
        //% block="Left Knee X"
        LeftKneeX,
        //% block="Left Knee Y"
        LeftKneeY,
        //% block="Right Knee X"
        RightKneeX,
        //% block="Right Knee Y"
        RightKneeY,
        //% block="Left Ankle X"
        LeftAnkleX,
        //% block="Left Ankle Y"
        LeftAnkleY,
        //% block="Right Ankle X"
        RightAnkleX,
        //% block="Right Ankle Y"
        RightAnkleY,
    }

    // Pose properties (without ID)
    export enum PosePropertyID {
        //% block="Name"
        Name,
        //% block="X Center"
        XCenter,
        //% block="Y Center"
        YCenter,
        //% block="Width"
        Width,
        //% block="Height"
        Height,
        //% block="Nose X"
        NoseX,
        //% block="Nose Y"
        NoseY,
        //% block="Left Eye X"
        LeftEyeX,
        //% block="Left Eye Y"
        LeftEyeY,
        //% block="Right Eye X"
        RightEyeX,
        //% block="Right Eye Y"
        RightEyeY,
        //% block="Left Ear X"
        LeftEarX,
        //% block="Left Ear Y"
        LeftEarY,
        //% block="Right Ear X"
        RightEarX,
        //% block="Right Ear Y"
        RightEarY,
        //% block="Left Shoulder X"
        LeftShoulderX,
        //% block="Left Shoulder Y"
        LeftShoulderY,
        //% block="Right Shoulder X"
        RightShoulderX,
        //% block="Right Shoulder Y"
        RightShoulderY,
        //% block="Left Elbow X"
        LeftElbowX,
        //% block="Left Elbow Y"
        LeftElbowY,
        //% block="Right Elbow X"
        RightElbowX,
        //% block="Right Elbow Y"
        RightElbowY,
        //% block="Left Wrist X"
        LeftWristX,
        //% block="Left Wrist Y"
        LeftWristY,
        //% block="Right Wrist X"
        RightWristX,
        //% block="Right Wrist Y"
        RightWristY,
        //% block="Left Hip X"
        LeftHipX,
        //% block="Left Hip Y"
        LeftHipY,
        //% block="Right Hip X"
        RightHipX,
        //% block="Right Hip Y"
        RightHipY,
        //% block="Left Knee X"
        LeftKneeX,
        //% block="Left Knee Y"
        LeftKneeY,
        //% block="Right Knee X"
        RightKneeX,
        //% block="Right Knee Y"
        RightKneeY,
        //% block="Left Ankle X"
        LeftAnkleX,
        //% block="Left Ankle Y"
        LeftAnkleY,
        //% block="Right Ankle X"
        RightAnkleX,
        //% block="Right Ankle Y"
        RightAnkleY,
    }

    /** Get one-time pose recognition result and cache it */
    //% block="get pose recognition result"
    //% weight=139
    //% group="Pose Recognition"
    export function getResultPoseRecogtion(): void {
        getResultInternal(ALGORITHM_POSE_RECOGNITION);
    }

    /** Whether pose detected */
    //% block="pose detected?"
    //% weight=138
    //% group="Pose Recognition"
    export function availablePoseRecogtion(): boolean {
        return availableInternal(ALGORITHM_POSE_RECOGNITION);
    }

    /** Pose property nearest to center */
    //% block="pose nearest to center %alg"
    //% weight=137
    //% group="Pose Recognition"
    export function getCachedCenterPoseResult(alg: PoseProperty): number {
        const r = getCachedCenterResultInternal(ALGORITHM_POSE_RECOGNITION);
        return getPosePropertyValue(r, alg);
    }

    /** Total number of detected poses */
    //% block="number of detected poses"
    //% weight=136
    //% group="Pose Recognition"
    export function getCachedResultNumPose(): number {
        return getCachedResultNumInternal(ALGORITHM_POSE_RECOGNITION);
    }

    /** Property of Nth pose */
    //% block="pose %index %alg"
    //% weight=135
    //% index.min=1 index.defl=1
    //% group="Pose Recognition"
    export function getCachedResultPoseProperty(index: number, alg: PoseProperty): number {
        const r = getCachedResultByIndexInternal(ALGORITHM_POSE_RECOGNITION, index - 1);
        return getPosePropertyValue(r, alg);
    }

    /** Total number of learned pose IDs */
    //% block="number of learned pose IDs"
    //% weight=134
    //% group="Pose Recognition"
    export function getNumLearnedPoseIDs(): number {
        return getCachedResultLearnedNumInternal(ALGORITHM_POSE_RECOGNITION);
    }

    /** Whether pose with specified ID exists */
    //% block="pose ID %index exists?"
    //% weight=133
    //% index.min=1 index.defl=1
    //% group="Pose Recognition"
    export function poseIdExists(index: number): boolean {
        const r = getCachedResultByIDInternal(ALGORITHM_POSE_RECOGNITION, index);
        return r != null;
    }

    /** Number of poses with specified ID */
    //% block="number of poses with ID %index"
    //% weight=132
    //% index.min=1 index.defl=1
    //% group="Pose Recognition"
    export function getNumPoseByID(index: number): number {
        return getCachedResultNumByIDInternal(ALGORITHM_POSE_RECOGNITION, index);
    }

    /** Property of pose with specified ID */
    //% block="pose ID %index %alg"
    //% weight=131
    //% index.min=1 index.defl=1
    //% group="Pose Recognition"
    export function getPosePropertyByID(index: number, alg: PosePropertyID): number {
        const r = getCachedResultByIDInternal(ALGORITHM_POSE_RECOGNITION, index);
        return getPosePropertyValueID(r, alg);
    }

    /** Property of Nth pose with specified ID */
    //% block="pose ID %id nth %n %alg"
    //% weight=130
    //% id.min=1 id.defl=1
    //% n.min=1 n.defl=1
    //% group="Pose Recognition"
    export function getPosePropertyByIDNth(id: number, n: number, alg: PosePropertyID): number {
        const r = getCachedIndexResultByIDInternal(ALGORITHM_POSE_RECOGNITION, id, n - 1);
        return getPosePropertyValueID(r, alg);
    }

    // ================= License Plate Recognition =================
    function getPlatePropertyValue(result: ResultVariant, prop: PlateProperty): any {
        if (!result) return 0;
        const res = result as Result;
        switch (prop) {
            case PlateProperty.ID: return res.ID;
            case PlateProperty.Name: return res.name.length > 0 ? res.name : "";
            case PlateProperty.Content: return res.content.length > 0 ? res.content : "";
            case PlateProperty.XCenter: return res.xCenter;
            case PlateProperty.YCenter: return res.yCenter;
            case PlateProperty.Width: return res.width;
            case PlateProperty.Height: return res.height;
            default: return 0;
        }
    }

    function getPlatePropertyValueID(result: ResultVariant, prop: PlatePropertyID): any {
        if (!result) return 0;
        const res = result as Result;
        switch (prop) {
            case PlatePropertyID.Name: return res.name.length > 0 ? res.name : "";
            case PlatePropertyID.Content: return res.content.length > 0 ? res.content : "";
            case PlatePropertyID.XCenter: return res.xCenter;
            case PlatePropertyID.YCenter: return res.yCenter;
            case PlatePropertyID.Width: return res.width;
            case PlatePropertyID.Height: return res.height;
            default: return 0;
        }
    }

    // 车牌属性（含ID）
    export enum PlateProperty {
        //% block="ID"
        ID,
        //% block="Name"
        Name,
        //% block="X Center"
        XCenter,
        //% block="Y Center"
        YCenter,
        //% block="Width"
        Width,
        //% block="Height"
        Height,
        //% block="Content"
        Content,
    }

    // 车牌属性（不含ID）
    export enum PlatePropertyID {
        //% block="Name"
        Name,
        //% block="X Center"
        XCenter,
        //% block="Y Center"
        YCenter,
        //% block="Width"
        Width,
        //% block="Height"
        Height,
        //% block="Content"
        Content,
    }

    /** Get one-time license plate recognition result and cache it */
    //% block="get license plate recognition result"
    //% weight=129
    //% group="License Plate Recognition"
    export function getResultPlateRecogtion(): void {
        getResultInternal(ALGORITHM_LICENSE_RECOGNITION);
    }

    /** Whether license plate detected */
    //% block="license plate detected?"
    //% weight=128
    //% group="License Plate Recognition"
    export function availablePlateRecogtion(): boolean {
        return availableInternal(ALGORITHM_LICENSE_RECOGNITION);
    }

    /** 靠近中心的车牌属性 */
    //% block="Plate near center %alg"
    //% weight=127
    //% group="License Plate Recognition"
    export function getCachedCenterPlateResult(alg: PlateProperty): any {
        const r = getCachedCenterResultInternal(ALGORITHM_LICENSE_RECOGNITION);
        return getPlatePropertyValue(r, alg);
    }

    /** 检测到的车牌总数 */
    //% block="Number of detected plates"
    //% weight=126
    //% group="License Plate Recognition"
    export function getCachedResultNumPlate(): number {
        return getCachedResultNumInternal(ALGORITHM_LICENSE_RECOGNITION);
    }

    /** 第N个车牌的属性 */
    //% block="Plate %index %alg"
    //% weight=125
    //% index.min=1 index.defl=1
    //% group="License Plate Recognition"
    export function getCachedResultPlateProperty(index: number, alg: PlateProperty): any {
        const r = getCachedResultByIndexInternal(ALGORITHM_LICENSE_RECOGNITION, index - 1);
        return getPlatePropertyValue(r, alg);
    }

    /** 已学习的车牌ID总数 */
    //% block="Number of learned plate IDs"
    //% weight=124
    //% group="License Plate Recognition"
    export function getNumLearnedPlateIDs(): number {
        return getCachedResultLearnedNumInternal(ALGORITHM_LICENSE_RECOGNITION);
    }

    /** 指定ID的车牌是否存在 */
    //% block="Does plate ID %index exist?"
    //% weight=123
    //% index.min=1 index.defl=1
    //% group="License Plate Recognition"
    export function plateIdExists(index: number): boolean {
        const r = getCachedResultByIDInternal(ALGORITHM_LICENSE_RECOGNITION, index);
        return r != null;
    }

    /** 指定ID的车牌数量 */
    //% block="Number of plates with ID %index"
    //% weight=122
    //% index.min=1 index.defl=1
    //% group="License Plate Recognition"
    export function getNumPlateByID(index: number): number {
        return getCachedResultNumByIDInternal(ALGORITHM_LICENSE_RECOGNITION, index);
    }

    /** 指定ID的车牌属性 */
    //% block="Plate ID %index %alg"
    //% weight=121
    //% index.min=1 index.defl=1
    //% group="License Plate Recognition"
    export function getPlatePropertyByID(index: number, alg: PlatePropertyID): any {
        const r = getCachedResultByIDInternal(ALGORITHM_LICENSE_RECOGNITION, index);
        return getPlatePropertyValueID(r, alg);
    }

    /** 指定ID第N个车牌的属性 */
    //% block="Plate ID %id No.%n %alg"
    //% weight=120
    //% id.min=1 id.defl=1
    //% n.min=1 n.defl=1
    //% group="License Plate Recognition"
    export function getPlatePropertyByIDNth(id: number, n: number, alg: PlatePropertyID): any {
        const r = getCachedIndexResultByIDInternal(ALGORITHM_LICENSE_RECOGNITION, id, n - 1);
        return getPlatePropertyValueID(r, alg);
    }

    // ================= 文字识别（OCR） =================
    function getTextPropertyValue(result: ResultVariant, prop: TextProperty): any {
        if (!result) return 0;
        const res = result as Result;
        
        switch (prop) {
            case TextProperty.ID: return res.ID;
            case TextProperty.Name: return res.name.length > 0 ? res.name : "";
            case TextProperty.Content: return res.content.length > 0 ? res.content : "";
            case TextProperty.XCenter: return res.xCenter;
            case TextProperty.YCenter: return res.yCenter;
            case TextProperty.Width: return res.width;
            case TextProperty.Height: return res.height;
            default: return 0;
        }
    }

    function getTextPropertyValueID(result: ResultVariant, prop: TextPropertyID): any {
        if (!result) return 0;
        const res = result as Result;
        
        switch (prop) {
            case TextPropertyID.Name: return res.name.length > 0 ? res.name : "";
            case TextPropertyID.Content: return res.content.length > 0 ? res.content : "";
            case TextPropertyID.XCenter: return res.xCenter;
            case TextPropertyID.YCenter: return res.yCenter;
            case TextPropertyID.Width: return res.width;
            case TextPropertyID.Height: return res.height;
            default: return 0;
        }
    }

    // 文字属性（含ID）
    export enum TextProperty {
        //% block="ID"
        ID,
        //% block="Name"
        Name,
        //% block="X Center"
        XCenter,
        //% block="Y Center"
        YCenter,
        //% block="Width"
        Width,
        //% block="Height"
        Height,
        //% block="Content"
        Content,
    }

    // 文字属性（不含ID）
    export enum TextPropertyID {
        //% block="Name"
        Name,
        //% block="X Center"
        XCenter,
        //% block="Y Center"
        YCenter,
        //% block="Width"
        Width,
        //% block="Height"
        Height,
        //% block="Content"
        Content,
    }

    /** 获取一次文字识别结果并缓存 */
    //% block="Get text recognition result"
    //% weight=119
    //% group="Text Recognition"
    export function getResultTextRecogtion(): void {
        getResultInternal(ALGORITHM_OCR_RECOGNITION);
    }

    /** 是否检测到文字 */
    //% block="Whether text detected"
    //% weight=118
    //% group="Text Recognition"
    export function availableTextRecogtion(): boolean {
        return availableInternal(ALGORITHM_OCR_RECOGNITION);
    }

    /** 靠近中心的文字属性 */
    //% block="Text near center %alg"
    //% weight=117
    //% group="Text Recognition"
    export function getCachedCenterTextResult(alg: TextProperty): any {
        const r = getCachedCenterResultInternal(ALGORITHM_OCR_RECOGNITION);
        return getTextPropertyValue(r, alg);
    }

    /** 检测到的文字总数 */
    //% block="Number of detected texts"
    //% weight=116
    //% group="Text Recognition"
    export function getCachedResultNumText(): number {
        return getCachedResultNumInternal(ALGORITHM_OCR_RECOGNITION);
    }

    /** 第N个文字区域的属性 */
    //% block="Text %index %alg"
    //% weight=115
    //% index.min=1 index.defl=1
    //% group="Text Recognition"
    export function getCachedResultTextProperty(index: number, alg: TextProperty): any {
        const r = getCachedResultByIndexInternal(ALGORITHM_OCR_RECOGNITION, index - 1);
        return getTextPropertyValue(r, alg);
    }

    /** 已学习的文字ID总数 */
    //% block="Number of learned text IDs"
    //% weight=114
    //% group="Text Recognition"
    export function getNumLearnedTextIDs(): number {
        return getCachedResultLearnedNumInternal(ALGORITHM_OCR_RECOGNITION);
    }

    /** 指定ID的文字是否存在 */
    //% block="Does text ID %index exist?"
    //% weight=113
    //% index.min=1 index.defl=1
    //% group="Text Recognition"
    export function textIdExists(index: number): boolean {
        const r = getCachedResultByIDInternal(ALGORITHM_OCR_RECOGNITION, index);
        return r != null;
    }

    /** 指定ID的文字数量 */
    //% block="Number of texts with ID %index"
    //% weight=112
    //% index.min=1 index.defl=1
    //% group="Text Recognition"
    export function getNumTextByID(index: number): number {
        return getCachedResultNumByIDInternal(ALGORITHM_OCR_RECOGNITION, index);
    }

    /** 指定ID的文字属性 */
    //% block="Text ID %index %alg"
    //% weight=111
    //% index.min=1 index.defl=1
    //% group="Text Recognition"
    export function getTextPropertyByID(index: number, alg: TextPropertyID): any {
        const r = getCachedResultByIDInternal(ALGORITHM_OCR_RECOGNITION, index);
        return getTextPropertyValueID(r, alg);
    }

    /** 指定ID第N个文字的属性 */
    //% block="Text ID %id No.%n %alg"
    //% weight=110
    //% id.min=1 id.defl=1
    //% n.min=1 n.defl=1
    //% group="Text Recognition"
    export function getTextPropertyByIDNth(id: number, n: number, alg: TextPropertyID): any {
        const r = getCachedIndexResultByIDInternal(ALGORITHM_OCR_RECOGNITION, id, n - 1);
        return getTextPropertyValueID(r, alg);
    }

    // ================= 巡线跟踪 =================
    function getLineTrackingPropertyValue(result: ResultVariant, prop: LineTrackingProperty): number {
        if (!result) return 0;
        const res = result as Result;
        switch (prop) {
            case LineTrackingProperty.XComponent: return res.xCenter;
            case LineTrackingProperty.YComponent: return res.yCenter;
            case LineTrackingProperty.Angle: return res.angle;
            case LineTrackingProperty.Length: return res.length;
            default: return 0;
        }
    }

    // Line tracking properties
    export enum LineTrackingProperty {
        //% block="X Component"
        XComponent,
        //% block="Y Component"
        YComponent,
        //% block="Angle"
        Angle,
        //% block="Length"
        Length,
    }

    /** 请求一次巡线数据存入结果 */
    //% block="Request line tracking data and store result"
    //% weight=109
    //% group="Line Tracking"
    export function getResultLineTracking(): void {
        getResultInternal(ALGORITHM_LINE_TRACKING);
    }

    /** 是否检测到路线 */
    //% block="Whether line detected"
    //% weight=108
    //% group="Line Tracking"
    export function availableLineTracking(): boolean {
        return availableInternal(ALGORITHM_LINE_TRACKING);
    }

    /** 当前路线的属性 */
    //% block="Current line %alg"
    //% weight=107
    //% group="Line Tracking"
    export function getCachedLineTrackingResult(alg: LineTrackingProperty): number {
        const r = getCurrentBranchInternal(ALGORITHM_LINE_TRACKING);
        return getLineTrackingPropertyValue(r, alg);
    }

    /** 前方路口分支数量 */
    //% block="Number of branches at intersection ahead"
    //% weight=106
    //% group="Line Tracking"
    export function getLineTrackingBranchCount(): number {
        return getUpcomingBranchCountInternal(ALGORITHM_LINE_TRACKING);
    }

    /** 逆时针第index条分支路线的属性 */
    //% block="Branch %index counterclockwise %alg"
    //% weight=105
    //% index.min=1 index.defl=1
    //% group="Line Tracking"
    export function getLineTrackingBranchProperty(index: number, alg: LineTrackingProperty): number {
        const r = getBranchInternal(ALGORITHM_LINE_TRACKING, index - 1);
        return getLineTrackingPropertyValue(r, alg);
    }

    // ================= 表情识别 =================
    function getEmotionPropertyValue(result: ResultVariant, prop: EmotionProperty): number {
        return getObjectPropertyValue(result, prop as any);
    }

    function getEmotionPropertyValueID(result: ResultVariant, prop: EmotionPropertyID): number {
        return getObjectPropertyValueID(result, prop as any);
    }

    export enum EmotionProperty {
        //% block="ID"
        ID,
        //% block="Name"
        Name,
        //% block="X Center"
        XCenter,
        //% block="Y Center"
        YCenter,
        //% block="Width"
        Width,
        //% block="Height"
        Height,
    }

    export enum EmotionPropertyID {
        //% block="Name"
        Name,
        //% block="X Center"
        XCenter,
        //% block="Y Center"
        YCenter,
        //% block="Width"
        Width,
        //% block="Height"
        Height,
    }

    //% block="Get emotion recognition result"
    //% weight=104
    //% group="Emotion Recognition"
    export function getResultEmotionRecogtion(): void {
        getResultInternal(ALGORITHM_EMOTION_RECOGNITION);
    }

    //% block="Whether emotion detected"
    //% weight=103
    //% group="Emotion Recognition"
    export function availableEmotionRecogtion(): boolean {
        return availableInternal(ALGORITHM_EMOTION_RECOGNITION);
    }

    //% block="Emotion near center %alg"
    //% weight=102
    //% group="Emotion Recognition"
    export function getCachedCenterEmotionResult(alg: EmotionProperty): number {
        const r = getCachedCenterResultInternal(ALGORITHM_EMOTION_RECOGNITION);
        return getEmotionPropertyValue(r, alg);
    }

    //% block="Number of detected emotions"
    //% weight=101
    //% group="Emotion Recognition"
    export function getCachedResultNumEmotion(): number {
        return getCachedResultNumInternal(ALGORITHM_EMOTION_RECOGNITION);
    }

    //% block="Emotion %index %alg"
    //% weight=100
    //% index.min=1 index.defl=1
    //% group="Emotion Recognition"
    export function getCachedResultEmotionProperty(index: number, alg: EmotionProperty): number {
        const r = getCachedResultByIndexInternal(ALGORITHM_EMOTION_RECOGNITION, index - 1);
        return getEmotionPropertyValue(r, alg);
    }

    //% block="Number of learned emotion IDs"
    //% weight=99
    //% group="Emotion Recognition"
    export function getNumLearnedEmotionIDs(): number {
        return getCachedResultLearnedNumInternal(ALGORITHM_EMOTION_RECOGNITION);
    }

    //% block="Does emotion ID %index exist?"
    //% weight=98
    //% index.min=1 index.defl=1
    //% group="Emotion Recognition"
    export function emotionIdExists(index: number): boolean {
        const r = getCachedResultByIDInternal(ALGORITHM_EMOTION_RECOGNITION, index);
        return r != null;
    }

    //% block="Number of emotions with ID %index"
    //% weight=97
    //% index.min=1 index.defl=1
    //% group="Emotion Recognition"
    export function getNumEmotionByID(index: number): number {
        return getCachedResultNumByIDInternal(ALGORITHM_EMOTION_RECOGNITION, index);
    }

    //% block="Emotion ID %index %alg"
    //% weight=96
    //% index.min=1 index.defl=1
    //% group="Emotion Recognition"
    export function getEmotionPropertyByID(index: number, alg: EmotionPropertyID): number {
        const r = getCachedResultByIDInternal(ALGORITHM_EMOTION_RECOGNITION, index);
        return getEmotionPropertyValueID(r, alg);
    }

    //% block="Emotion ID %id No.%n %alg"
    //% weight=95
    //% id.min=1 id.defl=1
    //% n.min=1 n.defl=1
    //% group="Emotion Recognition"
    export function getEmotionPropertyByIDNth(id: number, n: number, alg: EmotionPropertyID): number {
        const r = getCachedIndexResultByIDInternal(ALGORITHM_EMOTION_RECOGNITION, id, n - 1);
        return getEmotionPropertyValueID(r, alg);
    }

    // ================= 标签识别 =================
    function getTagPropertyValue(result: ResultVariant, prop: TagProperty): any {
        if (!result) return 0;
        const res = result as Result;
        switch (prop) {
            case TagProperty.ID: return res.ID;
            case TagProperty.Name: return res.name.length > 0 ? res.name : "";
            case TagProperty.Content: return res.content.length > 0 ? res.content : "";
            case TagProperty.XCenter: return res.xCenter;
            case TagProperty.YCenter: return res.yCenter;
            case TagProperty.Width: return res.width;
            case TagProperty.Height: return res.height;
            default: return 0;
        }
    }

    function getTagPropertyValueID(result: ResultVariant, prop: TagPropertyID): any {
        if (!result) return 0;
        const res = result as Result;
        switch (prop) {
            case TagPropertyID.Name: return res.name.length > 0 ? res.name : "";
            case TagPropertyID.Content: return res.content.length > 0 ? res.content : "";
            case TagPropertyID.XCenter: return res.xCenter;
            case TagPropertyID.YCenter: return res.yCenter;
            case TagPropertyID.Width: return res.width;
            case TagPropertyID.Height: return res.height;
            default: return 0;
        }
    }

    export enum TagProperty {
        //% block="ID"
        ID,
        //% block="Name"
        Name,
        //% block="X Center"
        XCenter,
        //% block="Y Center"
        YCenter,
        //% block="Width"
        Width,
        //% block="Height"
        Height,
        //% block="Content"
        Content,
    }

    export enum TagPropertyID {
        //% block="Name"
        Name,
        //% block="X Center"
        XCenter,
        //% block="Y Center"
        YCenter,
        //% block="Width"
        Width,
        //% block="Height"
        Height,
        //% block="Content"
        Content,
    }

    //% block="Get tag recognition result"
    //% weight=94
    //% group="Tag Recognition"
    export function getResultTagRecogtion(): void {
        getResultInternal(ALGORITHM_TAG_RECOGNITION);
    }

    //% block="Whether tag detected"
    //% weight=93
    //% group="Tag Recognition"
    export function availableTagRecogtion(): boolean {
        return availableInternal(ALGORITHM_TAG_RECOGNITION);
    }

    //% block="Tag near center %alg"
    //% weight=92
    //% group="Tag Recognition"
    export function getCachedCenterTagResult(alg: TagProperty): any {
        const r = getCachedCenterResultInternal(ALGORITHM_TAG_RECOGNITION);
        return getTagPropertyValue(r, alg);
    }

    //% block="Number of detected tags"
    //% weight=91
    //% group="Tag Recognition"
    export function getCachedResultNumTag(): number {
        return getCachedResultNumInternal(ALGORITHM_TAG_RECOGNITION);
    }

    //% block="Tag %index %alg"
    //% weight=90
    //% index.min=1 index.defl=1
    //% group="Tag Recognition"
    export function getCachedResultTagProperty(index: number, alg: TagProperty): any {
        const r = getCachedResultByIndexInternal(ALGORITHM_TAG_RECOGNITION, index - 1);
        return getTagPropertyValue(r, alg);
    }

    //% block="Number of learned tag IDs"
    //% weight=89
    //% group="Tag Recognition"
    export function getNumLearnedTagIDs(): number {
        return getCachedResultLearnedNumInternal(ALGORITHM_TAG_RECOGNITION);
    }

    //% block="Does tag ID %index exist?"
    //% weight=88
    //% index.min=1 index.defl=1
    //% group="Tag Recognition"
    export function tagIdExists(index: number): boolean {
        const r = getCachedResultByIDInternal(ALGORITHM_TAG_RECOGNITION, index);
        return r != null;
    }

    //% block="Number of tags with ID %index"
    //% weight=87
    //% index.min=1 index.defl=1
    //% group="Tag Recognition"
    export function getNumTagByID(index: number): number {
        return getCachedResultNumByIDInternal(ALGORITHM_TAG_RECOGNITION, index);
    }

    //% block="Tag ID %index %alg"
    //% weight=86
    //% index.min=1 index.defl=1
    //% group="Tag Recognition"
    export function getTagPropertyByID(index: number, alg: TagPropertyID): any {
        const r = getCachedResultByIDInternal(ALGORITHM_TAG_RECOGNITION, index);
        return getTagPropertyValueID(r, alg);
    }

    //% block="Tag ID %id No.%n %alg"
    //% weight=85
    //% id.min=1 id.defl=1
    //% n.min=1 n.defl=1
    //% group="Tag Recognition"
    export function getTagPropertyByIDNth(id: number, n: number, alg: TagPropertyID): any {
        const r = getCachedIndexResultByIDInternal(ALGORITHM_TAG_RECOGNITION, id, n - 1);
        return getTagPropertyValueID(r, alg);
    }

    // ================= 二维码识别 =================
    function getQRCodePropertyValue(result: ResultVariant, prop: QRCodeProperty): any {
        if (!result) return 0;
        const res = result as Result;
        switch (prop) {
            case QRCodeProperty.ID: return res.ID;
            case QRCodeProperty.Name: return res.name.length > 0 ? res.name : "";
            case QRCodeProperty.Content: return res.content.length > 0 ? res.content : "";
            case QRCodeProperty.XCenter: return res.xCenter;
            case QRCodeProperty.YCenter: return res.yCenter;
            case QRCodeProperty.Width: return res.width;
            case QRCodeProperty.Height: return res.height;
            default: return 0;
        }
    }

    function getQRCodePropertyValueID(result: ResultVariant, prop: QRCodePropertyID): any {
        if (!result) return 0;
        const res = result as Result;
        switch (prop) {
            case QRCodePropertyID.Name: return res.name.length > 0 ? res.name : "";
            case QRCodePropertyID.Content: return res.content.length > 0 ? res.content : "";
            case QRCodePropertyID.XCenter: return res.xCenter;
            case QRCodePropertyID.YCenter: return res.yCenter;
            case QRCodePropertyID.Width: return res.width;
            case QRCodePropertyID.Height: return res.height;
            default: return 0;
        }
    }

    export enum QRCodeProperty {
        //% block="ID"
        ID,
        //% block="Name"
        Name,
        //% block="X Center"
        XCenter,
        //% block="Y Center"
        YCenter,
        //% block="Width"
        Width,
        //% block="Height"
        Height,
        //% block="Content"
        Content,
    }

    export enum QRCodePropertyID {
        //% block="Name"
        Name,
        //% block="X Center"
        XCenter,
        //% block="Y Center"
        YCenter,
        //% block="Width"
        Width,
        //% block="Height"
        Height,
        //% block="Content"
        Content,
    }

    //% block="Get QR code recognition result"
    //% weight=84
    //% group="QR Code Recognition"
    export function getResultQRCodeRecogtion(): void {
        getResultInternal(ALGORITHM_QRCODE_RECOGNITION);
    }

    //% block="Whether QR code detected"
    //% weight=83
    //% group="QR Code Recognition"
    export function availableQRCodeRecogtion(): boolean {
        return availableInternal(ALGORITHM_QRCODE_RECOGNITION);
    }

    //% block="QR code near center %alg"
    //% weight=82
    //% group="QR Code Recognition"
    export function getCachedCenterQRCodeResult(alg: QRCodeProperty): any {
        const r = getCachedCenterResultInternal(ALGORITHM_QRCODE_RECOGNITION);
        return getQRCodePropertyValue(r, alg);
    }

    //% block="Number of detected QR codes"
    //% weight=81
    //% group="QR Code Recognition"
    export function getCachedResultNumQRCode(): number {
        return getCachedResultNumInternal(ALGORITHM_QRCODE_RECOGNITION);
    }

    //% block="QR code %index %alg"
    //% weight=80
    //% index.min=1 index.defl=1
    //% group="QR Code Recognition"
    export function getCachedResultQRCodeProperty(index: number, alg: QRCodeProperty): any {
        const r = getCachedResultByIndexInternal(ALGORITHM_QRCODE_RECOGNITION, index - 1);
        return getQRCodePropertyValue(r, alg);
    }

    //% block="Number of learned QR code IDs"
    //% weight=79
    //% group="QR Code Recognition"
    export function getNumLearnedQRCodeIDs(): number {
        return getCachedResultLearnedNumInternal(ALGORITHM_QRCODE_RECOGNITION);
    }

    //% block="Does QR code ID %index exist?"
    //% weight=78
    //% index.min=1 index.defl=1
    //% group="QR Code Recognition"
    export function qrcodeIdExists(index: number): boolean {
        const r = getCachedResultByIDInternal(ALGORITHM_QRCODE_RECOGNITION, index);
        return r != null;
    }

    //% block="Number of QR codes with ID %index"
    //% weight=77
    //% index.min=1 index.defl=1
    //% group="QR Code Recognition"
    export function getNumQRCodeByID(index: number): number {
        return getCachedResultNumByIDInternal(ALGORITHM_QRCODE_RECOGNITION, index);
    }

    //% block="QR code ID %index %alg"
    //% weight=76
    //% index.min=1 index.defl=1
    //% group="QR Code Recognition"
    export function getQRCodePropertyByID(index: number, alg: QRCodePropertyID): any {
        const r = getCachedResultByIDInternal(ALGORITHM_QRCODE_RECOGNITION, index);
        return getQRCodePropertyValueID(r, alg);
    }

    //% block="QR code ID %id No.%n %alg"
    //% weight=75
    //% id.min=1 id.defl=1
    //% n.min=1 n.defl=1
    //% group="QR Code Recognition"
    export function getQRCodePropertyByIDNth(id: number, n: number, alg: QRCodePropertyID): any {
        const r = getCachedIndexResultByIDInternal(ALGORITHM_QRCODE_RECOGNITION, id, n - 1);
        return getQRCodePropertyValueID(r, alg);
    }

    // ================= 条形码识别 =================
    function getBarcodePropertyValue(result: ResultVariant, prop: BarcodeProperty): any {
        if (!result) return 0;
        const res = result as Result;
        switch (prop) {
            case BarcodeProperty.ID: return res.ID;
            case BarcodeProperty.Name: return res.name.length > 0 ? res.name : "";
            case BarcodeProperty.Content: return res.content.length > 0 ? res.content : "";
            case BarcodeProperty.XCenter: return res.xCenter;
            case BarcodeProperty.YCenter: return res.yCenter;
            case BarcodeProperty.Width: return res.width;
            case BarcodeProperty.Height: return res.height;
            default: return 0;
        }
    }

    function getBarcodePropertyValueID(result: ResultVariant, prop: BarcodePropertyID): any {
        if (!result) return 0;
        const res = result as Result;
        switch (prop) {
            case BarcodePropertyID.Name: return res.name.length > 0 ? res.name : "";
            case BarcodePropertyID.Content: return res.content.length > 0 ? res.content : "";
            case BarcodePropertyID.XCenter: return res.xCenter;
            case BarcodePropertyID.YCenter: return res.yCenter;
            case BarcodePropertyID.Width: return res.width;
            case BarcodePropertyID.Height: return res.height;
            default: return 0;
        }
    }

    export enum BarcodeProperty {
        //% block="ID"
        ID,
        //% block="Name"
        Name,
        //% block="X Center"
        XCenter,
        //% block="Y Center"
        YCenter,
        //% block="Width"
        Width,
        //% block="Height"
        Height,
        //% block="Content"
        Content,
    }

    export enum BarcodePropertyID {
        //% block="Name"
        Name,
        //% block="X Center"
        XCenter,
        //% block="Y Center"
        YCenter,
        //% block="Width"
        Width,
        //% block="Height"
        Height,
        //% block="Content"
        Content,
    }

    //% block="Get barcode recognition result"
    //% weight=74
    //% group="Barcode Recognition"
    export function getResultBarcodeRecogtion(): void {
        getResultInternal(ALGORITHM_BARCODE_RECOGNITION);
    }

    //% block="Whether barcode detected"
    //% weight=73
    //% group="Barcode Recognition"
    export function availableBarcodeRecogtion(): boolean {
        return availableInternal(ALGORITHM_BARCODE_RECOGNITION);
    }

    //% block="Barcode near center %alg"
    //% weight=72
    //% group="Barcode Recognition"
    export function getCachedCenterBarcodeResult(alg: BarcodeProperty): any {
        const r = getCachedCenterResultInternal(ALGORITHM_BARCODE_RECOGNITION);
        return getBarcodePropertyValue(r, alg);
    }

    //% block="Number of detected barcodes"
    //% weight=71
    //% group="Barcode Recognition"
    export function getCachedResultNumBarcode(): number {
        return getCachedResultNumInternal(ALGORITHM_BARCODE_RECOGNITION);
    }

    //% block="Barcode %index %alg"
    //% weight=70
    //% index.min=1 index.defl=1
    //% group="Barcode Recognition"
    export function getCachedResultBarcodeProperty(index: number, alg: BarcodeProperty): any {
        const r = getCachedResultByIndexInternal(ALGORITHM_BARCODE_RECOGNITION, index - 1);
        return getBarcodePropertyValue(r, alg);
    }

    //% block="Number of learned barcode IDs"
    //% weight=69
    //% group="Barcode Recognition"
    export function getNumLearnedBarcodeIDs(): number {
        return getCachedResultLearnedNumInternal(ALGORITHM_BARCODE_RECOGNITION);
    }

    //% block="Does barcode ID %index exist?"
    //% weight=68
    //% index.min=1 index.defl=1
    //% group="Barcode Recognition"
    export function barcodeIdExists(index: number): boolean {
        const r = getCachedResultByIDInternal(ALGORITHM_BARCODE_RECOGNITION, index);
        return r != null;
    }

    //% block="Number of barcodes with ID %index"
    //% weight=67
    //% index.min=1 index.defl=1
    //% group="Barcode Recognition"
    export function getNumBarcodeByID(index: number): number {
        return getCachedResultNumByIDInternal(ALGORITHM_BARCODE_RECOGNITION, index);
    }

    //% block="Barcode ID %index %alg"
    //% weight=66
    //% index.min=1 index.defl=1
    //% group="Barcode Recognition"
    export function getBarcodePropertyByID(index: number, alg: BarcodePropertyID): any {
        const r = getCachedResultByIDInternal(ALGORITHM_BARCODE_RECOGNITION, index);
        return getBarcodePropertyValueID(r, alg);
    }

    //% block="Barcode ID %id No.%n %alg"
    //% weight=65
    //% id.min=1 id.defl=1
    //% n.min=1 n.defl=1
    //% group="Barcode Recognition"
    export function getBarcodePropertyByIDNth(id: number, n: number, alg: BarcodePropertyID): any {
        const r = getCachedIndexResultByIDInternal(ALGORITHM_BARCODE_RECOGNITION, id, n - 1);
        return getBarcodePropertyValueID(r, alg);
    }

    // ================= 自训练模型 =================
    function getCustomModelPropertyValue(result: ResultVariant, prop: CustomModelProperty): number {
        return getObjectPropertyValue(result, prop as any);
    }

    function getCustomModelPropertyValueID(result: ResultVariant, prop: CustomModelPropertyID): number {
        return getObjectPropertyValueID(result, prop as any);
    }

    // Custom model properties (with ID)
    export enum CustomModelProperty {
        //% block="ID"
        ID,
        //% block="Name"
        Name,
        //% block="X Center"
        XCenter,
        //% block="Y Center"
        YCenter,
        //% block="Width"
        Width,
        //% block="Height"
        Height,
    }

    // Custom model properties (without ID)
    export enum CustomModelPropertyID {
        //% block="Name"
        Name,
        //% block="X Center"
        XCenter,
        //% block="Y Center"
        YCenter,
        //% block="Width"
        Width,
        //% block="Height"
        Height,
    }

    /** HUSKYLENS 2切换算法ID直到成功 */
    //% block="HUSKYLENS 2 switch algorithm ID %algorithmId until success"
    //% weight=64
    //% algorithmId.min=1 algorithmId.defl=128
    //% group="Custom Model"
    export function switchCustomModelAlgorithm(algorithmId: number): void {
        const algoId = ALGORITHM_CUSTOM_BEGIN + (algorithmId - 1);
        switchAlgorithmInternal(algoId);
    }

    /** 算法ID请求一次数据存入结果 */
    //% block="Algorithm ID %algorithmId request data and store result"
    //% weight=63
    //% algorithmId.min=1 algorithmId.defl=128
    //% group="Custom Model"
    export function getResultCustomModel(algorithmId: number): void {
        const algoId = ALGORITHM_CUSTOM_BEGIN + (algorithmId - 1);
        getResultInternal(algoId);
    }

    /** 算法ID检测到目标 */
    //% block="Algorithm ID %algorithmId target detected?"
    //% weight=62
    //% algorithmId.min=1 algorithmId.defl=128
    //% group="Custom Model"
    export function availableCustomModel(algorithmId: number): boolean {
        const algoId = ALGORITHM_CUSTOM_BEGIN + (algorithmId - 1);
        return availableInternal(algoId);
    }

    /** 算法ID靠近中心的目标属性 */
    //% block="Algorithm ID %algorithmId target near center %alg1"
    //% weight=61
    //% algorithmId.min=1 algorithmId.defl=128
    //% group="Custom Model"
    export function getCachedCenterCustomModelResult(algorithmId: number, alg1: CustomModelProperty): number {
        const algoId = ALGORITHM_CUSTOM_BEGIN + (algorithmId - 1);
        const r = getCachedCenterResultInternal(algoId);
        return getCustomModelPropertyValue(r, alg1);
    }

    /** 算法ID检测到的目标总数 */
    //% block="Algorithm ID %algorithmId number of detected targets"
    //% weight=60
    //% algorithmId.min=1 algorithmId.defl=128
    //% group="Custom Model"
    export function getCachedResultNumCustomModel(algorithmId: number): number {
        const algoId = ALGORITHM_CUSTOM_BEGIN + (algorithmId - 1);
        return getCachedResultNumInternal(algoId);
    }

    /** 算法ID第num个目标的属性 */
    //% block="Algorithm ID %algorithmId target %num %alg1"
    //% weight=59
    //% algorithmId.min=1 algorithmId.defl=128
    //% num.min=1 num.defl=1
    //% group="Custom Model"
    export function getCachedResultCustomModelProperty(algorithmId: number, num: number, alg1: CustomModelProperty): number {
        const algoId = ALGORITHM_CUSTOM_BEGIN + (algorithmId - 1);
        const r = getCachedResultByIndexInternal(algoId, num - 1);
        return getCustomModelPropertyValue(r, alg1);
    }

    /** 算法ID已学习的目标ID总数 */
    //% block="Algorithm ID %algorithmId number of learned target IDs"
    //% weight=58
    //% algorithmId.min=1 algorithmId.defl=128
    //% group="Custom Model"
    export function getNumLearnedCustomModelIDs(algorithmId: number): number {
        const algoId = ALGORITHM_CUSTOM_BEGIN + (algorithmId - 1);
        return getCachedResultLearnedNumInternal(algoId);
    }

    /** 算法ID ID的目标存在 */
    //% block="Algorithm ID %algorithmId target ID %targetId exists?"
    //% weight=57
    //% algorithmId.min=1 algorithmId.defl=128
    //% targetId.min=1 targetId.defl=1
    //% group="Custom Model"
    export function customModelIdExists(algorithmId: number, targetId: number): boolean {
        const algoId = ALGORITHM_CUSTOM_BEGIN + (algorithmId - 1);
        const r = getCachedResultByIDInternal(algoId, targetId);
        return r != null;
    }

    /** 算法ID ID的目标总数 */
    //% block="Algorithm ID %algorithmId number of targets with ID %targetId"
    //% weight=56
    //% algorithmId.min=1 algorithmId.defl=128
    //% targetId.min=1 targetId.defl=1
    //% group="Custom Model"
    export function getNumCustomModelByID(algorithmId: number, targetId: number): number {
        const algoId = ALGORITHM_CUSTOM_BEGIN + (algorithmId - 1);
        return getCachedResultNumByIDInternal(algoId, targetId);
    }

    /** 算法ID ID的目标属性 */
    //% block="Algorithm ID %algorithmId target ID %targetId %alg2"
    //% weight=55
    //% algorithmId.min=1 algorithmId.defl=128
    //% targetId.min=1 targetId.defl=1
    //% group="Custom Model"
    export function getCustomModelPropertyByID(algorithmId: number, targetId: number, alg2: CustomModelPropertyID): number {
        const algoId = ALGORITHM_CUSTOM_BEGIN + (algorithmId - 1);
        const r = getCachedResultByIDInternal(algoId, targetId);
        return getCustomModelPropertyValueID(r, alg2);
    }

    /** 算法ID ID的第num个目标的属性 */
    //% block="Algorithm %algorithmId ID%targetId No.%num %alg2"
    //% inlineInputMode=inline
    //% weight=54
    //% algorithmId.min=1 algorithmId.defl=128
    //% targetId.min=1 targetId.defl=1
    //% num.min=1 num.defl=1
    //% group="Custom Model"
    export function getCustomModelPropertyByIDNth(algorithmId: number, targetId: number, num: number, alg2: CustomModelPropertyID): number {
        const algoId = ALGORITHM_CUSTOM_BEGIN + (algorithmId - 1);
        const r = getCachedIndexResultByIDInternal(algoId, targetId, num - 1);
        return getCustomModelPropertyValueID(r, alg2);
    }

}
