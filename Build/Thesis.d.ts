declare namespace Thesis {
    export import ƒ = FudgeCore;
    export import ƒS = FudgeStory;
    let transitions: {};
    let sound: {
        template: string;
    };
    let locations: {
        Template: {
            name: string;
            background: string;
        };
        BackroomPurple: {
            name: string;
            background: string;
        };
        Backroom: {
            name: string;
            background: string;
        };
        Demo: {
            name: string;
            background: string;
        };
        Panorama: {
            name: string;
            background: string;
        };
    };
    let items: {
        compass: {
            name: string;
            description: string;
            image: string;
            static: boolean;
        };
        note: {
            name: string;
            description: string;
            image: string;
            static: boolean;
        };
        soup: {
            name: string;
            description: string;
            image: string;
            static: boolean;
        };
        water: {
            name: string;
            description: string;
            image: string;
            static: boolean;
        };
    };
    let letters: {
        template: {
            name: string;
            background: string;
        };
    };
    let dataForSave: {
        nameProtagonist: string;
        TemplateScore: number;
    };
    let characters: {
        narrator: {
            name: string;
        };
        MIN: {
            name: string;
        };
        LUMILLE: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                side: string;
                neutral: string;
                surprised: string;
                happy: string;
                pout: string;
                default: string;
            };
        };
        SERA: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                side: string;
                neutral: string;
                happy: string;
                heh: string;
                sad: string;
                default: string;
            };
        };
    };
    function showCredits(): void;
    function appearAnimation(): ƒS.AnimationDefinition;
    function disappearAnimation(): ƒS.AnimationDefinition;
    function getAnimation(): ƒS.AnimationDefinition;
}
declare namespace Thesis {
    function Empty(): ƒS.SceneReturn;
}
declare namespace Thesis {
    function Intro(): ƒS.SceneReturn;
}
