// =============================
//         Research Tools
// =============================

// Main Help Menu
api.mapkey(',h', "Help menu for key binds", function () {
    Front.showPopup(`
🔑 My Surfingkeys Shortcuts:

,rs - Research Sources
,ls - Linux Practice
,cs - Cubing Practice
,cp - Chess Practice
,ts - Typing Practice 
,ms - Movies Sources
,as - Anime Sources
,ns - Note Sources
    `);
});

// Research Sources
api.mapkey(',rs', "Research sources", function () {
    Front.showBubble(`
1 - youtube
2 - github
3 - reddit
4 - wiki.archlinux
5 - dev.to 
6 - lobste.rs
7 - chatgpt
8 - Hacker News
9 - Stackexchange
10 - devdocs.io
0 - Open All Research Tools
    `, 5000);
    
    api.aceModeHandler("Research Tool: ", function(input) {
        const urls = {
            "1": "https://www.youtube.com/",
            "2": "https://github.com/sumitBabuDhungel",
            "3": "https://www.reddit.com/",
            "4": "https://wiki.archlinux.org/title/Main_page",
            "5": "https://dev.to/",
            "6": "https://lobste.rs/",
            "7": "https://chat.openai.com/",
            "8": "https://news.ycombinator.com/",
            "9": "https://stackexchange.com/",
            "10": "https://devdocs.io/",
            "0": [
                "https://www.youtube.com/",
                "https://chat.openai.com/",
                "https://github.com/sumitBabuDhungel",
                "https://www.reddit.com/",
                "https://wiki.archlinux.org/title/Main_page",
                "https://dev.to/",
                "https://lobste.rs/",
                "https://news.ycombinator.com/",
                "https://stackexchange.com/",
                "https://devdocs.io/"
            ]
        };
        
        const choice = input.trim();
        if (urls[choice]) {
            if (choice === "0") {
                // Stagger opening multiple tabs to avoid popup blocking
                urls[choice].forEach((url, i) => {
                    setTimeout(() => window.open(url, "_blank"), i * 300);
                });
            } else {
                window.open(urls[choice], "_blank");
            }
        } else {
            Front.showPopup("Invalid choice. Please try again.");
        }
    });
});

// Linux Sources
api.mapkey(',ls', 'Linux Sources', function () {
    Front.showBubble(`
1 - OverTheWire
2 - Cmd Challenge
3 - Warp
4 - explain shell
5 - linuxCommand.org
6 - htbAcademy
7 - tldr.sh
0 - Open All Linux Tools
    `, 5000);
    
    api.aceModeHandler("Linux Tool: ", function(input) {
        const urls = {
            "1": "https://overthewire.org/wargames/bandit/",
            "2": "https://cmdchallenge.com/",
            "3": "https://www.warp.dev/terminus",
            "4": "https://explainshell.com/",
            "5": "https://linuxcommand.org/",
            "6": "https://academy.hackthebox.com/modules",
            "7": "https://tldr.inbrowser.app/pages/common/tar",
            "0": [
                "https://overthewire.org/wargames/bandit/",
                "https://cmdchallenge.com/",
                "https://www.warp.dev/terminus",
                "https://explainshell.com/",
                "https://linuxcommand.org/",
                "https://academy.hackthebox.com/modules",
                "https://tldr.inbrowser.app/pages/common/tar"
            ]
        };
        
        handleSelection(input, urls);
    });
});

// Cubing Sources
api.mapkey(',cs', "Cubing Sources", function () {
    Front.showBubble(`
1 - youtube
2 - JPerm OLL & PLL
3 - CSTimer
4 - Speedcube
5 - Cubeskills
0 - Open All Cubing Tools
    `, 5000);
    
    api.aceModeHandler("Cubing Tool: ", function(input) {
        const urls = {
            "1": "https://www.youtube.com/",
            "2": "https://jperm.net/algs/oll",
            "3": "https://cstimer.net/",
            "4": "https://speedcubedb.com/",
            "5": "https://cubeskills.com/",
            "0": [
                "https://www.youtube.com/",
                "https://cstimer.net/",
                "https://jperm.net/algs/oll",
                "https://speedcubedb.com/",
                "https://cubeskills.com/"
            ]
        };
        
        handleSelection(input, urls);
    });
});

// Chess Practice
api.mapkey(',cp', "Chess Practice", function () {
    Front.showBubble(`
1 - chess.com
2 - lichess
3 - youtube
4 - chessVision.ai
5 - chessTempo
0 - Open All Chess Tools
    `, 5000);
    
    api.aceModeHandler("Chess Tool: ", function(input) {
        const urls = {
            "1": "https://www.chess.com/home",
            "2": "https://lichess.org/learn",
            "3": "https://www.youtube.com/",
            "4": "https://chessvision.ai/",
            "5": "https://www.chesstempo.com/",
            "0": [
                "https://www.youtube.com/",
                "https://www.chess.com/home",
                "https://lichess.org/learn",
                "https://chessvision.ai/",
                "https://www.chesstempo.com/"
            ]
        };
        
        handleSelection(input, urls);
    });
});

// Typing Sources
api.mapkey(',ts', "Typing Sources", function () {
    Front.showBubble(`
1 - youtube
2 - typingclub
3 - 10fastfingers
4 - monkeytype
5 - keybr.com
6 - typingracing
7 - Ztype
8 - typelit.io
9 - keyhero.com
10 - typewar
0 - Open All Typing Tools
    `, 5000);
    
    api.aceModeHandler("Typing Tool: ", function(input) {
        const urls = {
            "1": "https://www.youtube.com/",
            "2": "https://www.edclub.com/sportal/program-3.game",
            "3": "https://10fastfingers.com/typing-test/english",
            "4": "https://monkeytype.com/",
            "5": "https://www.keybr.com/",
            "6": "https://play.typeracer.com/",
            "7": "https://zty.pe/",
            "8": "https://www.typelit.io/",
            "9": "https://www.keyhero.com/",
            "10": "https://typewars.netlify.app/",
            "0": [
                "https://www.youtube.com/",
                "https://www.edclub.com/sportal/program-3.game",
                "https://10fastfingers.com/typing-test/english",
                "https://monkeytype.com/",
                "https://www.keybr.com/",
                "https://play.typeracer.com/",
                "https://zty.pe/",
                "https://www.typelit.io/",
                "https://www.keyhero.com/",
                "https://typewars.netlify.app/"
            ]
        };
        
        handleSelection(input, urls);
    });
});

// Movies and Series
api.mapkey(',ms', "Movies and Series", function () {
    Front.showBubble(`
1 - movies.joy
2 - netflix
3 - kiss.kh
4 - youtube
0 - Open All Movie Tools
    `, 5000);
    
    api.aceModeHandler("Movie Tool: ", function(input) {
        const urls = {
            "1": "https://en.moviesjoy-to.lol/home",
            "2": "https://www.netflix.com/np/",
            "3": "https://kisskh.do/",
            "4": "https://www.youtube.com/",
            "0": [
                "https://en.moviesjoy-to.lol/home",
                "https://www.netflix.com/np/",
                "https://kisskh.do/",
                "https://www.youtube.com/"
            ]
        };
        
        handleSelection(input, urls);
    });
});

// Anime and manga
api.mapkey(',as', "Anime and manga", function () {
    Front.showBubble(`
1 - aniwatch
2 - hianime
3 - readmanga
4 - youtube
0 - Open All Anime Tools
    `, 5000);
    
    api.aceModeHandler("Anime Tool: ", function(input) {
        const urls = {
            "1": "https://aniwatchtv.to/home",
            "2": "https://hianime.to/home",
            "3": "https://mangareader.to/home",
            "4": "https://www.youtube.com/",
            "0": [
                "https://aniwatchtv.to/home",
                "https://hianime.to/home",
                "https://mangareader.to/home",
                "https://www.youtube.com/"
            ]
        };
        
        handleSelection(input, urls);
    });
});

// Note Sources
api.mapkey(',ns', "Note Sources", function () {
    Front.showBubble(`
1 - notion.so
2 - obsidian.md
3 - Standard Notes
4 - Logseq
0 - Open All Note Tools
    `, 5000);
    
    api.aceModeHandler("Note Tool: ", function(input) {
        const urls = {
            "1": "https://www.notion.so/command-for-linux-1fe872012b2d805fac38c22d9137ebff",
            "2": "https://obsidian.md/",
            "3": "https://standardnotes.com/",
            "4": "https://logseq.com/",
            "0": [
                "https://obsidian.md/",
                "https://www.notion.so/command-for-linux-1fe872012b2d805fac38c22d9137ebff",
                "https://standardnotes.com/",
                "https://logseq.com/"
            ]
        };
        
        handleSelection(input, urls);
    });
});

// Helper function to handle selection and open URLs
function handleSelection(input, urlMap) {
    const choice = input.trim();
    if (urlMap[choice]) {
        if (choice === "0") {
            // Stagger opening multiple tabs to avoid popup blocking
            urlMap[choice].forEach((url, i) => {
                setTimeout(() => window.open(url, "_blank"), i * 300);
            });
        } else {
            window.open(urlMap[choice], "_blank");
        }
    } else {
        Front.showPopup("Invalid choice. Please try again.");
    }
}
