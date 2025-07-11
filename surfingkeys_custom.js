// ✅ SurfingKeys Custom Config (Fixed Version)

console.log("✅ Surfingkeys custom config loaded!");

// =============================
//         Helper Function
// =============================
function openLinks(urls) {
    urls.forEach(url => {
        RUNTIME("openLink", {
            tab: { tabbed: true },
            url: url
        });
    });
}

// =============================
//         Menu Shortcut
// =============================
mapkey(',h', "Help menu for key binds", function () {
    Front.showEditor(`
🔑 My Surfingkeys Shortcuts:

,rs → Research
,ls → Linux Practice
,cs → Cubing Practice
,cp → Chess Practice
,ts → Typing Practice
,ms → Movies Sources
,as → Anime Sources
,ns → Note Sources
    `);
});

// =============================
//        Category Mappings
// =============================

function createChoicePrompt(title, choices) {
    Front.showEditor(title, function(choice) {
        const selected = choice.trim().toLowerCase();
        if (selected === "0") {
            openLinks(Object.values(choices));
        } else if (choices[selected]) {
            openLinks([choices[selected]]);
        } else {
            Front.showPopup("❌ Invalid choice. Try a number from the list.");
        }
    });
}

// =============================
// Research Tools
// =============================
mapkey(',rs', "Research sources", function () {
    createChoicePrompt(`
Choose a Research Tool:

1 - YouTube
2 - GitHub
3 - Reddit
4 - Arch Wiki
5 - Dev.to
6 - Lobsters
7 - ChatGPT
8 - Hacker News
9 - StackExchange
10 - DevDocs
0 - Open All
    `, {
        "1": "https://www.youtube.com/",
        "2": "https://github.com/sumitBabuDhungel",
        "3": "https://www.reddit.com/",
        "4": "https://wiki.archlinux.org/",
        "5": "https://dev.to/",
        "6": "https://lobste.rs/",
        "7": "https://chat.openai.com/",
        "8": "https://news.ycombinator.com/",
        "9": "https://stackexchange.com/",
        "10": "https://devdocs.io/"
    });
});

// =============================
// Linux Sources
// =============================
mapkey(',ls', "Linux Practice", function () {
    createChoicePrompt(`
Choose a Linux Tool:

1 - OverTheWire
2 - CmdChallenge
3 - Warp
4 - ExplainShell
5 - LinuxCommand.org
6 - HTB Academy
7 - tldr.sh
0 - Open All
    `, {
        "1": "https://overthewire.org/wargames/bandit/",
        "2": "https://cmdchallenge.com/",
        "3": "https://www.warp.dev/terminus",
        "4": "https://explainshell.com/",
        "5": "https://linuxcommand.org/",
        "6": "https://academy.hackthebox.com/modules",
        "7": "https://tldr.inbrowser.app/pages/common/tar"
    });
});

// =============================
// Cubing Tools
// =============================
mapkey(',cs', "Cubing Tools", function () {
    createChoicePrompt(`
Choose a Cubing Tool:

1 - YouTube
2 - JPerm OLL
3 - CSTimer
4 - SpeedcubeDB
5 - CubeSkills
0 - Open All
    `, {
        "1": "https://www.youtube.com/",
        "2": "https://jperm.net/algs/oll",
        "3": "https://cstimer.net/",
        "4": "https://speedcubedb.com/",
        "5": "https://cubeskills.com/"
    });
});

// =============================
// Chess Tools
// =============================
mapkey(',cp', "Chess Tools", function () {
    createChoicePrompt(`
Choose a Chess Tool:

1 - Chess.com
2 - Lichess
3 - YouTube
4 - ChessVision
5 - ChessTempo
0 - Open All
    `, {
        "1": "https://www.chess.com/home",
        "2": "https://lichess.org/learn",
        "3": "https://www.youtube.com/",
        "4": "https://chessvision.ai/",
        "5": "https://www.chesstempo.com/"
    });
});

// =============================
// Typing Tools
// =============================
mapkey(',ts', "Typing Tools", function () {
    createChoicePrompt(`
Choose a Typing Tool:

1 - YouTube
2 - TypingClub
3 - 10FastFingers
4 - MonkeyType
5 - Keybr
6 - TypeRacer
7 - ZType
8 - TypeLit
9 - KeyHero
10 - TypeWars
0 - Open All
    `, {
        "1": "https://www.youtube.com/",
        "2": "https://www.edclub.com/sportal/program-3.game",
        "3": "https://10fastfingers.com/typing-test/english",
        "4": "https://monkeytype.com/",
        "5": "https://www.keybr.com/",
        "6": "https://play.typeracer.com/",
        "7": "https://zty.pe/",
        "8": "https://www.typelit.io/",
        "9": "https://www.keyhero.com/",
        "10": "https://typewars.netlify.app/"
    });
});

// =============================
// Movie Tools
// =============================
mapkey(',ms', "Movies and Series", function () {
    createChoicePrompt(`
Choose a Movie Tool:

1 - MoviesJoy
2 - Netflix
3 - KissKH
4 - YouTube
0 - Open All
    `, {
        "1": "https://en.moviesjoy-to.lol/home",
        "2": "https://www.netflix.com/np/",
        "3": "https://kisskh.do/",
        "4": "https://www.youtube.com/"
    });
});

// =============================
// Anime Tools
// =============================
mapkey(',as', "Anime and Manga", function () {
    createChoicePrompt(`
Choose an Anime Tool:

1 - Aniwatch
2 - Hianime
3 - MangaReader
4 - YouTube
0 - Open All
    `, {
        "1": "https://aniwatchtv.to/home",
        "2": "https://hianime.to/home",
        "3": "https://mangareader.to/home",
        "4": "https://www.youtube.com/"
    });
});

// =============================
// Note Tools
// =============================
mapkey(',ns', "Note Sources", function () {
    createChoicePrompt(`
Choose a Note Tool:

1 - Notion
2 - Obsidian
3 - Standard Notes
4 - Logseq
0 - Open All
    `, {
        "1": "https://www.notion.so/command-for-linux-1fe872012b2d805fac38c22d9137ebff",
        "2": "https://obsidian.md/",
        "3": "https://standardnotes.com/",
        "4": "https://logseq.com/"
    });
});
