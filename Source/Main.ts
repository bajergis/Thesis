namespace Thesis {
  export import ƒ = FudgeCore;
  export import ƒS = FudgeStory;

  // **** TRANSITIONS ****
  // transitions is declared here as well as initialized
  export let transitions = {
    // puzzle: {
    //   duration: 2,
    //   alpha: "Images/Transitions/jigsaw_06.jpg",
    //   edge: 1,
    // },
  };

  // **** SOUND ****
  // sound is declared here as well as initialized
  export let sound = {
    // themes
    template: "Audio/template.ogg",
  };

  // **** LOCATIONS ****
  export let locations = {
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
  export let items = {
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

  export let letters = {
    template: {
      name: "Template",
      background: "Images/Backgrounds/Letters/Template.png"
    },
  }

  // **** DATA THAT WILL BE SAVED (GAME PROGRESS) ****
  export let dataForSave = {
    nameProtagonist: "",
    TemplateScore: 0,
  };

  // **** CHARACTERS ****
  // characters is declared here as well as initialized

  export let characters = {
    narrator: {
      name: "",
    },
    MIN: {
      name: "Min",
    },
    LUMILLE: {
      name: "Lumille",
      origin: ƒS.ORIGIN.BOTTOMCENTER,
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
      origin: ƒS.ORIGIN.BOTTOMCENTER,
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
  export function showCredits(): void {
    ƒS.Text.setClass("credits");
    ƒS.Text.print("Story: Jason Blackschleger <br\><br\> Art: Jason Blackschleger <br\><br\>");
  }


  // **** ANIMATIONS ****
  export function appearAnimation(): ƒS.AnimationDefinition {
    return {
      start: { translation: ƒS.positionPercent(20, 100), color: ƒS.Color.CSS("black", 0) },
      end: { translation: ƒS.positionPercent(30, 100), color: ƒS.Color.CSS("white", 1) },
      duration: 2,
      playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE
    };
  }

  export function disappearAnimation(): ƒS.AnimationDefinition {
    return {
      start: { translation: ƒS.positionPercent(30, 100), color: ƒS.Color.CSS("white", 1) },
      end: { translation: ƒS.positionPercent(20, 100), color: ƒS.Color.CSS("black", 0) },
      duration: 3,
      playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE
    };
  }

  export function getAnimation(): ƒS.AnimationDefinition {
    return {
      start: { translation: ƒS.positions.bottomleft, rotation: -20, scaling: new ƒS.Position(0.5, 1.5), color: ƒS.Color.CSS("white", 0.3) },
      end: { translation: ƒS.positions.bottomright, rotation: 20, scaling: new ƒS.Position(1.5, 0.5), color: ƒS.Color.CSS("red") },
      duration: 1,
      playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE
    };
  }

  // **** MENÜ ****
  // Buttons
  let inGameMenuButtons = {
    save: "Save",
    load: "Load",
    close: "Close",
    credits: "Credits"
  };

  let gameMenu: ƒS.Menu;

  // true = offen; false = geschlossen
  let menuIsOpen: boolean = true;

  async function buttonFunctionalities(_option: string): Promise<void> {
    console.log(_option);
    switch (_option) {
      case inGameMenuButtons.save:
        await ƒS.Progress.save();
        break;
      case inGameMenuButtons.load:
        await ƒS.Progress.load();
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
  async function hndKeyPress(_event: KeyboardEvent): Promise<void> {
    switch (_event.code) {
      case ƒ.KEYBOARD_CODE.F8:
        console.log("Save");
        await ƒS.Progress.save();
        break;
      case ƒ.KEYBOARD_CODE.F9:
        console.log("Load");
        await ƒS.Progress.load();
        break;
      case ƒ.KEYBOARD_CODE.M:
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
      case ƒ.KEYBOARD_CODE.I:
        console.log("open inventory");
        await ƒS.Inventory.open();
        break;
      case ƒ.KEYBOARD_CODE.ESC:
        console.log("close inventory");
        await ƒS.Inventory.open();
        ƒS.Inventory.close();
        break;
    }
  }

  window.addEventListener("load", start);
  function start(_event: Event): void {
    gameMenu = ƒS.Menu.create(inGameMenuButtons, buttonFunctionalities, "gameMenuCSSclass");
    buttonFunctionalities("Close");
    // **** SCENE HIERARCHY ****
    let scenes: ƒS.Scenes = [
      { id: "intro", scene: Intro, name: "Intro", next: "scene01" },
      // Empty ending scene to stop the program
      { id: "Empty Scene", scene: Empty, name: "END" }

    ];

    let uiElement: HTMLElement = document.querySelector("[type=interface]");
    dataForSave = ƒS.Progress.setData(dataForSave, uiElement);

    // start the sequence
    ƒS.Progress.go(scenes);
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

}