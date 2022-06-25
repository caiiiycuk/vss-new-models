import vss, { FileOpenFlags } from "./vss";

const log = (...args: any[]) => {
    console.log("new-models:", ...args);
};

export function init() {
    const root = vss.getScriptsFolder() + "/assets/data/";
    vss.addQuantListener("file_open", (payload) => {
        if (payload.flags & FileOpenFlags.XS_IN) {
            const absFile = root + payload.file;
            if (vss.isFileExists(absFile)) {
                log("used", absFile);
                return {
                    file: absFile,
                };
            }
        }
    });
}
