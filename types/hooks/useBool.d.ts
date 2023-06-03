export declare const useBool: (init?: boolean) => readonly [boolean, {
    setTrue: () => void;
    setFalse: () => void;
    toggle: () => void;
}];
