"use strict";
var Thesis;
(function (Thesis) {
    Thesis.ƒ = FudgeCore;
    Thesis.ƒS = FudgeStory;
    // **** TRANSITIONS ****
    // transitions is declared here as well as initialized
    Thesis.transitions = {
    // puzzle: {
    //   duration: 2,
    //   alpha: "Images/Transitions/jigsaw_06.jpg",
    //   edge: 1,
    // },
    };
    // **** SOUND ****
    // sound is declared here as well as initialized
    Thesis.sound = {
        // themes
        template: "Audio/template.ogg",
    };
    // **** LOCATIONS ****
    Thesis.locations = {
        Template: {
            name: "Template",
            background: "Images/Backgrounds/Black.png"
        },
        BackroomPurple: {
            name: "Template",
            background: "Images/Backgrounds/backroomPurple.png"
        },
        Backroom: {
            name: "Template",
            background: "Images/Backgrounds/backroom.png"
        },
        Demo: {
            name: "Template",
            background: "Images/Backgrounds/bgVNprototype.png"
        },
        Panorama: {
            name: "Template",
            background: "Images/Backgrounds/bg2drawndemohotel.png"
        },
    };
    // **** ITEMS ****
    // items is declared here as well as initialized
    Thesis.items = {
        compass: {
            name: "Compass",
            description: " A compass pointing nowhere <br\>",
            image: "Images/Items/item_compass.png",
            static: true
        },
        note: {
            name: "Compass",
            description: " A note <br\>",
            image: "Images/Items/note.png",
            static: true
        },
        soup: {
            name: "Soup",
            description: " I can't read the characters at all <br\>",
            image: "Images/Items/soup.png",
            static: true
        },
        water: {
            name: "Compass",
            description: " At least we won't die of thirst... for now <br\>",
            image: "Images/Items/item_water.png",
            static: true
        },
    };
    Thesis.letters = {
        template: {
            name: "Template",
            background: "Images/Backgrounds/Letters/Template.png"
        },
    };
    // **** DATA THAT WILL BE SAVED (GAME PROGRESS) ****
    Thesis.dataForSave = {
        nameProtagonist: "",
        TemplateScore: 0,
    };
    // **** CHARACTERS ****
    // characters is declared here as well as initialized
    Thesis.characters = {
        narrator: {
            name: "",
        },
        MIN: {
            name: "Min",
        },
        LUMILLE: {
            name: "Lumille",
            origin: Thesis.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                side: "Images/Characters/LUM1LL3_lean.png",
                neutral: "Images/Characters/LUM1LL3_neutral.png",
                surprised: "Images/Characters/LUM1LL3_surprised.png",
                happy: "Images/Characters/LUM1LL3_happy.png",
                pout: "Images/Characters/LUM1LL3_pout.png",
                default: "Images/Characters/LUM1LL3.png",
            }
        },
        SERA: {
            name: "Sera",
            origin: Thesis.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                side: "Images/Characters/S3R4_lean.png",
                neutral: "Images/Characters/S3R4_neutral.png",
                happy: "Images/Characters/S3R4_happy.png",
                heh: "Images/Characters/S3R4_heh.png",
                sad: "Images/Characters/S3R4_sad.png",
                default: "Images/Characters/S3R4.png",
            }
        },
    };
    // **** CREDITS ****
    function showCredits() {
        Thesis.ƒS.Text.setClass("credits");
        Thesis.ƒS.Text.print("Story: Jason Blackschleger <br\><br\> Art: Jason Blackschleger <br\><br\>");
    }
    Thesis.showCredits = showCredits;
    // **** ANIMATIONS ****
    function appearAnimation() {
        return {
            start: { translation: Thesis.ƒS.positionPercent(20, 100), color: Thesis.ƒS.Color.CSS("black", 0) },
            end: { translation: Thesis.ƒS.positionPercent(30, 100), color: Thesis.ƒS.Color.CSS("white", 1) },
            duration: 2,
            playmode: Thesis.ƒS.ANIMATION_PLAYMODE.PLAYONCE
        };
    }
    Thesis.appearAnimation = appearAnimation;
    function disappearAnimation() {
        return {
            start: { translation: Thesis.ƒS.positionPercent(30, 100), color: Thesis.ƒS.Color.CSS("white", 1) },
            end: { translation: Thesis.ƒS.positionPercent(20, 100), color: Thesis.ƒS.Color.CSS("black", 0) },
            duration: 3,
            playmode: Thesis.ƒS.ANIMATION_PLAYMODE.PLAYONCE
        };
    }
    Thesis.disappearAnimation = disappearAnimation;
    function getAnimation() {
        return {
            start: { translation: Thesis.ƒS.positions.bottomleft, rotation: -20, scaling: new Thesis.ƒS.Position(0.5, 1.5), color: Thesis.ƒS.Color.CSS("white", 0.3) },
            end: { translation: Thesis.ƒS.positions.bottomright, rotation: 20, scaling: new Thesis.ƒS.Position(1.5, 0.5), color: Thesis.ƒS.Color.CSS("red") },
            duration: 1,
            playmode: Thesis.ƒS.ANIMATION_PLAYMODE.PLAYONCE
        };
    }
    Thesis.getAnimation = getAnimation;
    // **** MENÜ ****
    // Buttons
    let inGameMenuButtons = {
        save: "Save",
        load: "Load",
        close: "Close",
        credits: "Credits"
    };
    let gameMenu;
    // true = offen; false = geschlossen
    let menuIsOpen = true;
    async function buttonFunctionalities(_option) {
        console.log(_option);
        switch (_option) {
            case inGameMenuButtons.save:
                await Thesis.ƒS.Progress.save();
                break;
            case inGameMenuButtons.load:
                await Thesis.ƒS.Progress.load();
                break;
            case inGameMenuButtons.close:
                gameMenu.close();
                menuIsOpen = false;
                break;
            case inGameMenuButtons.credits:
                showCredits();
        }
    }
    // Menu shortcuts
    document.addEventListener("keydown", hndKeyPress);
    async function hndKeyPress(_event) {
        switch (_event.code) {
            case Thesis.ƒ.KEYBOARD_CODE.F8:
                console.log("Save");
                await Thesis.ƒS.Progress.save();
                break;
            case Thesis.ƒ.KEYBOARD_CODE.F9:
                console.log("Load");
                await Thesis.ƒS.Progress.load();
                break;
            case Thesis.ƒ.KEYBOARD_CODE.M:
                if (menuIsOpen) {
                    console.log("Close");
                    gameMenu.close();
                    menuIsOpen = false;
                }
                else {
                    console.log("Open");
                    gameMenu.open();
                    menuIsOpen = true;
                }
                break;
            // Inventory shortcuts
            case Thesis.ƒ.KEYBOARD_CODE.I:
                console.log("open inventory");
                await Thesis.ƒS.Inventory.open();
                break;
            case Thesis.ƒ.KEYBOARD_CODE.ESC:
                console.log("close inventory");
                await Thesis.ƒS.Inventory.open();
                Thesis.ƒS.Inventory.close();
                break;
        }
    }
    window.addEventListener("load", start);
    function start(_event) {
        gameMenu = Thesis.ƒS.Menu.create(inGameMenuButtons, buttonFunctionalities, "gameMenuCSSclass");
        buttonFunctionalities("Close");
        // **** SCENE HIERARCHY ****
        let scenes = [
            { id: "intro", scene: Thesis.Intro, name: "Intro", next: "scene01" },
            // Empty ending scene to stop the program
            { id: "Empty Scene", scene: Thesis.Empty, name: "END" }
        ];
        let uiElement = document.querySelector("[type=interface]");
        Thesis.dataForSave = Thesis.ƒS.Progress.setData(Thesis.dataForSave, uiElement);
        // start the sequence
        Thesis.ƒS.Progress.go(scenes);
    }
    // toggle 3D and normal
    // const aScene = document.getElementById('a-scene') as HTMLDivElement;
    // const scene = document.getElementById('scene') as HTMLDivElement;
    // const interactiveObject = document.getElementById('interactive-object') as HTMLButtonElement;
    // export function toggleScene(): void {
    //   if (aScene.style.display !== 'none') {
    //     aScene.style.display = 'none';
    //     scene.style.display = 'block';
    //   } else {
    //     aScene.style.display = 'block';
    //     scene.style.display = 'none';
    //   }
    // }
    //interactiveObject.addEventListener('click', toggleScene);
})(Thesis || (Thesis = {}));
var Thesis;
(function (Thesis) {
    async function Empty() {
        console.log("THE VISUAL NOVEL ENDS HERE");
    }
    Thesis.Empty = Empty;
})(Thesis || (Thesis = {}));
var Thesis;
(function (Thesis) {
    async function Intro() {
        console.log("Intro Scene starting");
        let text = {
            Intro: {
                L0001: "I’m not one to get spooked by some ominous surroundings, but even I must admit this is suspicious. What’s next, voices echoing in the walls? But it doesn’t matter, I’m prepared for whatever comes our way. I survived the past three days, what’s one more. Okay then, what’s the first piece of evidence we’re working off of?.",
                M0001: "I haven’t found anything yet. Maybe we should investigate our surroundings and see what’s in our immediate vicinity.",
                L0002: "Agreed. We’ll have to split up for this - no sense wasting energy searching the same places. Take a good, hard look at this hallway and report back to me. Where do you want to go?."
            },
            ChoiceEast: {
                N0001: "After some more or less fruitless searching, I decided to head back to Lumille.",
                M0001: "I found… a shopping receipt. It’s mostly normal groceries. But it’s very odd, it’s just lying there. Come to think of it, I haven’t seen a single trash can so far.",
                L0001: "That IS odd. Keep your eyes peeled for me, will you? I’ll search the other side of this hall, and if I find anything, I’ll report back to you immediately. I wonder if we’re trapped here? Better get a head start on this. I’ll meet you back here soon.",
                N0002: "She ran off without saying goodbye.",
                M0002: "Well, she’s gone for now. I’ll look around and explore the nearest place.",
                M0003: "Oh, a note. Maybe from a previous explorer. And a can of soup. This might come in handy later.",
                N0003: "An hour later, we met up again.",
                L0002: "Alright, I’m back. Find anything on your end?",
                N0004: "She noticed the note in your hand and the can of soup.",
                L0003: "Is that…? Could it be that I’m not the first person here? Come on, read what it says.",
                M0004: "I’ll read it to you in a bit. But i was wondering, you haven’t met anyone else so far, have you? I’m the first one? Then… have you found any evidence of other people so far?",
                L0004: "It’s a giant complex, I’m not surprised that I haven’t come across another person yet. Maybe there is some kind of mystery to solve. But, now let’s see the note. Maybe it’ll help shed a little more light on the situation. ",
                N0005: "I read her the contents of the note.",
                M0005: "I’m hungry, but i eat and eat, it doesn’t change this empty feeling. Day 3: I give up. I refuse to eat another spoon of this soup. Day 6: soup-soup-soup. Day 9: I won’t make it until tomorrow",
                L0005: "Hmm… It does sound like it’s an actual human, although it is eerie. Whatever happened to them was not good. But something still isn’t adding up. The writing is shaky by the end. That can happen from hunger, sure, but from day 9, I get the sense that something else happened. Something that prompted them to write those final lines.",
                M0006: "We should investigate this place further.",
                END1: "[PROTOTYPE END 1]"
            },
            ChoiceWest: {
                N0001: "After some more or less fruitless searching, I decided to head back to Lumille.",
                L0001: "I found something interesting, how about you?",
                M0001: "A can of soup.",
                L0002: "What type of soup? Where did you find it?",
                M0002: "Just some potato soup in that room over there.",
                L0003: "I found a diary. It’s a bit long, so I’ll summarize it briefly. It’s over a course of nine days. But something happened between day 6 and 9. But not much info from the author. Just confusing rants. Maybe we need to find the right spots.",
                L0003b: "Do you think there might be anything that’s left behind? Like, say, blood or other evidence of… bad things happening? Because it doesn’t sound good. Something is here with us, still in this complex.",
                M0003: "Maybe… there was a time limit. Let me read the entry.",
                N0002: "I glanced over the entry with the nine final days.",
                M0004: "It seems like he was still moving between day 3 and 6. But from day 6 to 9, he stayed at the same spot. Something must have happened then.",
                L0004: "That’s an interesting theory. The writer’s food and energy was running out, making it harder to get by. But the big question still remains. How did they vanish?",
                M0005: "Maybe we should check the place where you found the diary.",
                L0005: "Hmm… No physical evidence of a struggle. No signs of blood, no… anything. Nothing to be honest. How perplexing.",
                M0006: "Maybe we’ll get a lead if we continue to follow the path the writer seems to have taken. What happens if we continue deeper into the complex?",
                L0006: "I saw some stairs that led down a level. We can check that out.",
                END2: "[PROTOTYPE END 2]"
            }
        };
        await Thesis.ƒS.Location.show(Thesis.locations.Demo);
        await Thesis.ƒS.Character.animate(Thesis.characters.LUMILLE, Thesis.characters.LUMILLE.pose.default, Thesis.appearAnimation());
        await Thesis.ƒS.update();
        await Thesis.ƒS.Speech.tell(Thesis.characters.LUMILLE, text.Intro.L0001);
        await Thesis.ƒS.Speech.tell(Thesis.characters.MIN, text.Intro.M0001);
        await Thesis.ƒS.Character.hide(Thesis.characters.LUMILLE);
        await Thesis.ƒS.Character.show(Thesis.characters.LUMILLE, Thesis.characters.LUMILLE.pose.neutral, Thesis.ƒS.positionPercent(30, 100));
        await Thesis.ƒS.update();
        await Thesis.ƒS.Speech.tell(Thesis.characters.LUMILLE, text.Intro.L0002);
        await Thesis.ƒS.Character.hide(Thesis.characters.LUMILLE);
        await Thesis.ƒS.Character.animate(Thesis.characters.LUMILLE, Thesis.characters.LUMILLE.pose.default, Thesis.disappearAnimation());
        await Thesis.ƒS.update();
        //CHOICE
        Thesis.ƒS.Speech.clear();
        Thesis.ƒS.Speech.hide();
        await Thesis.ƒS.update(1.5);
        let decideRoom = {
            answerEast: "Check out the Room to the East.",
            answerWest: "Check out the Room to the West.",
        };
        let Room = await Thesis.ƒS.Menu.getInput(decideRoom, "choicesCSSclass");
        switch (Room) {
            case decideRoom.answerEast:
                // East Room
                await Thesis.ƒS.Speech.tell(Thesis.characters.narrator, text.ChoiceEast.N0001);
                await Thesis.ƒS.Character.animate(Thesis.characters.LUMILLE, Thesis.characters.LUMILLE.pose.default, Thesis.appearAnimation());
                await Thesis.ƒS.update();
                await Thesis.ƒS.Speech.tell(Thesis.characters.MIN, text.ChoiceEast.M0001);
                await Thesis.ƒS.Speech.tell(Thesis.characters.LUMILLE, text.ChoiceEast.L0001);
                await Thesis.ƒS.Character.animate(Thesis.characters.LUMILLE, Thesis.characters.LUMILLE.pose.default, Thesis.disappearAnimation());
                await Thesis.ƒS.update();
                await Thesis.ƒS.Speech.tell(Thesis.characters.narrator, text.ChoiceEast.N0002);
                await Thesis.ƒS.Speech.tell(Thesis.characters.MIN, text.ChoiceEast.M0002),
                    await Thesis.ƒS.Speech.tell(Thesis.characters.MIN, text.ChoiceEast.M0003);
                await Thesis.ƒS.Speech.tell(Thesis.characters.narrator, text.ChoiceEast.N0003);
                await Thesis.ƒS.Character.animate(Thesis.characters.LUMILLE, Thesis.characters.LUMILLE.pose.default, Thesis.appearAnimation());
                await Thesis.ƒS.update();
                await Thesis.ƒS.Speech.tell(Thesis.characters.LUMILLE, text.ChoiceEast.L0002);
                await Thesis.ƒS.Speech.tell(Thesis.characters.narrator, text.ChoiceEast.N0004);
                await Thesis.ƒS.Character.hide(Thesis.characters.LUMILLE);
                await Thesis.ƒS.Character.show(Thesis.characters.LUMILLE, Thesis.characters.LUMILLE.pose.surprised, Thesis.ƒS.positionPercent(30, 100));
                await Thesis.ƒS.update();
                await Thesis.ƒS.Speech.tell(Thesis.characters.LUMILLE, text.ChoiceEast.L0003);
                await Thesis.ƒS.Character.hide(Thesis.characters.LUMILLE);
                await Thesis.ƒS.Character.show(Thesis.characters.LUMILLE, Thesis.characters.LUMILLE.pose.default, Thesis.ƒS.positionPercent(30, 100));
                await Thesis.ƒS.update();
                await Thesis.ƒS.Speech.tell(Thesis.characters.MIN, text.ChoiceEast.M0004);
                await Thesis.ƒS.Speech.tell(Thesis.characters.LUMILLE, text.ChoiceEast.L0004);
                await Thesis.ƒS.Speech.tell(Thesis.characters.narrator, text.ChoiceEast.N0005);
                await Thesis.ƒS.Speech.tell(Thesis.characters.MIN, text.ChoiceEast.M0005);
                await Thesis.ƒS.Speech.tell(Thesis.characters.LUMILLE, text.ChoiceEast.L0005);
                await Thesis.ƒS.Speech.tell(Thesis.characters.MIN, text.ChoiceEast.M0006);
                await Thesis.ƒS.Speech.tell(Thesis.characters.narrator, text.ChoiceEast.END1);
                break;
            case decideRoom.answerWest:
                // West Room
                await Thesis.ƒS.Speech.tell(Thesis.characters.narrator, text.ChoiceWest.N0001);
                await Thesis.ƒS.Character.animate(Thesis.characters.LUMILLE, Thesis.characters.LUMILLE.pose.default, Thesis.appearAnimation());
                await Thesis.ƒS.update();
                await Thesis.ƒS.Speech.tell(Thesis.characters.LUMILLE, text.ChoiceWest.L0001);
                await Thesis.ƒS.Speech.tell(Thesis.characters.MIN, text.ChoiceWest.M0001);
                await Thesis.ƒS.Speech.tell(Thesis.characters.LUMILLE, text.ChoiceWest.L0002);
                await Thesis.ƒS.Speech.tell(Thesis.characters.MIN, text.ChoiceWest.M0002);
                await Thesis.ƒS.Speech.tell(Thesis.characters.LUMILLE, text.ChoiceWest.L0003);
                await Thesis.ƒS.Speech.tell(Thesis.characters.LUMILLE, text.ChoiceWest.L0003b);
                await Thesis.ƒS.Speech.tell(Thesis.characters.MIN, text.ChoiceWest.M0003);
                await Thesis.ƒS.Speech.tell(Thesis.characters.narrator, text.ChoiceWest.N0002);
                await Thesis.ƒS.Speech.tell(Thesis.characters.MIN, text.ChoiceWest.M0004);
                await Thesis.ƒS.Speech.tell(Thesis.characters.LUMILLE, text.ChoiceWest.L0004);
                await Thesis.ƒS.Speech.tell(Thesis.characters.MIN, text.ChoiceWest.M0005);
                await Thesis.ƒS.Character.hide(Thesis.characters.LUMILLE);
                await Thesis.ƒS.Character.show(Thesis.characters.LUMILLE, Thesis.characters.LUMILLE.pose.pout, Thesis.ƒS.positionPercent(30, 100));
                await Thesis.ƒS.update();
                await Thesis.ƒS.Speech.tell(Thesis.characters.LUMILLE, text.ChoiceWest.L0005);
                await Thesis.ƒS.Speech.tell(Thesis.characters.MIN, text.ChoiceWest.M0006);
                await Thesis.ƒS.Character.hide(Thesis.characters.LUMILLE);
                await Thesis.ƒS.Character.show(Thesis.characters.LUMILLE, Thesis.characters.LUMILLE.pose.default, Thesis.ƒS.positionPercent(30, 100));
                await Thesis.ƒS.update();
                await Thesis.ƒS.Speech.tell(Thesis.characters.LUMILLE, text.ChoiceWest.L0006);
                await Thesis.ƒS.Speech.tell(Thesis.characters.narrator, text.ChoiceWest.END2);
                break;
        }
        await Thesis.ƒS.update();
        //toggleScene();
    }
    Thesis.Intro = Intro;
})(Thesis || (Thesis = {}));
//# sourceMappingURL=Thesis.js.map