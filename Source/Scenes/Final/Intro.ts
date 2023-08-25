namespace Thesis {
    export async function Intro(): ƒS.SceneReturn {

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
        }

        await ƒS.Location.show(locations.Demo);
        await ƒS.Character.animate(characters.LUMILLE, characters.LUMILLE.pose.default, appearAnimation());
        await ƒS.update();
        await ƒS.Speech.tell(characters.LUMILLE, text.Intro.L0001);
        await ƒS.Speech.tell(characters.MIN, text.Intro.M0001);
        await ƒS.Character.hide(characters.LUMILLE);
        await ƒS.Character.show(characters.LUMILLE, characters.LUMILLE.pose.neutral, ƒS.positionPercent(30, 100));
        await ƒS.update();
        await ƒS.Speech.tell(characters.LUMILLE, text.Intro.L0002);
        await ƒS.Character.hide(characters.LUMILLE);
        await ƒS.Character.animate(characters.LUMILLE, characters.LUMILLE.pose.default, disappearAnimation());
        await ƒS.update();

        //CHOICE
        ƒS.Speech.clear();
        ƒS.Speech.hide();
        await ƒS.update(1.5);

        let decideRoom = {
            answerEast: "Check out the Room to the East.",
            answerWest: "Check out the Room to the West.",
        };

        let Room = await ƒS.Menu.getInput(decideRoom, "choicesCSSclass");

        switch (Room) {
            case decideRoom.answerEast:
                // East Room
                await ƒS.Speech.tell(characters.narrator, text.ChoiceEast.N0001);
                await ƒS.Character.animate(characters.LUMILLE, characters.LUMILLE.pose.default, appearAnimation());
                await ƒS.update();
                await ƒS.Speech.tell(characters.MIN, text.ChoiceEast.M0001);
                await ƒS.Speech.tell(characters.LUMILLE, text.ChoiceEast.L0001);
                await ƒS.Character.animate(characters.LUMILLE, characters.LUMILLE.pose.default, disappearAnimation());
                await ƒS.update();
                await ƒS.Speech.tell(characters.narrator, text.ChoiceEast.N0002);
                await ƒS.Speech.tell(characters.MIN, text.ChoiceEast.M0002),
                await ƒS.Speech.tell(characters.MIN, text.ChoiceEast.M0003);
                await ƒS.Speech.tell(characters.narrator, text.ChoiceEast.N0003);
                await ƒS.Character.animate(characters.LUMILLE, characters.LUMILLE.pose.default, appearAnimation());
                await ƒS.update();
                await ƒS.Speech.tell(characters.LUMILLE, text.ChoiceEast.L0002);
                await ƒS.Speech.tell(characters.narrator, text.ChoiceEast.N0004);
                await ƒS.Character.hide(characters.LUMILLE);
                await ƒS.Character.show(characters.LUMILLE, characters.LUMILLE.pose.surprised, ƒS.positionPercent(30, 100));
                await ƒS.update();
                await ƒS.Speech.tell(characters.LUMILLE, text.ChoiceEast.L0003);
                await ƒS.Character.hide(characters.LUMILLE);
                await ƒS.Character.show(characters.LUMILLE, characters.LUMILLE.pose.default, ƒS.positionPercent(30, 100));
                await ƒS.update();
                await ƒS.Speech.tell(characters.MIN, text.ChoiceEast.M0004);
                await ƒS.Speech.tell(characters.LUMILLE, text.ChoiceEast.L0004);
                await ƒS.Speech.tell(characters.narrator, text.ChoiceEast.N0005);
                await ƒS.Speech.tell(characters.MIN, text.ChoiceEast.M0005);
                await ƒS.Speech.tell(characters.LUMILLE, text.ChoiceEast.L0005);
                await ƒS.Speech.tell(characters.MIN, text.ChoiceEast.M0006);
                await ƒS.Speech.tell(characters.narrator, text.ChoiceEast.END1);
                break;
            case decideRoom.answerWest:
                // West Room
                await ƒS.Speech.tell(characters.narrator, text.ChoiceWest.N0001);
                await ƒS.Character.animate(characters.LUMILLE, characters.LUMILLE.pose.default, appearAnimation());
                await ƒS.update();
                await ƒS.Speech.tell(characters.LUMILLE, text.ChoiceWest.L0001);
                await ƒS.Speech.tell(characters.MIN, text.ChoiceWest.M0001);
                await ƒS.Speech.tell(characters.LUMILLE, text.ChoiceWest.L0002);
                await ƒS.Speech.tell(characters.MIN, text.ChoiceWest.M0002);
                await ƒS.Speech.tell(characters.LUMILLE, text.ChoiceWest.L0003);
                await ƒS.Speech.tell(characters.LUMILLE, text.ChoiceWest.L0003b);
                await ƒS.Speech.tell(characters.MIN, text.ChoiceWest.M0003);
                await ƒS.Speech.tell(characters.narrator, text.ChoiceWest.N0002);
                await ƒS.Speech.tell(characters.MIN, text.ChoiceWest.M0004);
                await ƒS.Speech.tell(characters.LUMILLE, text.ChoiceWest.L0004);
                await ƒS.Speech.tell(characters.MIN, text.ChoiceWest.M0005);
                await ƒS.Character.hide(characters.LUMILLE);
                await ƒS.Character.show(characters.LUMILLE, characters.LUMILLE.pose.pout, ƒS.positionPercent(30, 100));
                await ƒS.update();
                await ƒS.Speech.tell(characters.LUMILLE, text.ChoiceWest.L0005);
                await ƒS.Speech.tell(characters.MIN, text.ChoiceWest.M0006);
                await ƒS.Character.hide(characters.LUMILLE);
                await ƒS.Character.show(characters.LUMILLE, characters.LUMILLE.pose.default, ƒS.positionPercent(30, 100));
                await ƒS.update();
                await ƒS.Speech.tell(characters.LUMILLE, text.ChoiceWest.L0006);
                await ƒS.Speech.tell(characters.narrator, text.ChoiceWest.END2);
                break;
        }

        await ƒS.update();
        //toggleScene();
    }
}