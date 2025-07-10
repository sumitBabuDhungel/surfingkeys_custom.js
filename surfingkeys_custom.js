// =============================
//         Research Tools
// =============================

let surfingkeysEnabled = true;

mapkey('<Alt-s>', 'Toggle SurfingKeys on/off', function () {
    if (surfingkeysEnabled) {
        unmapAllExcept(['<Alt-s>']);
        Front.showPopup('🔕 SurfingKeys OFF (refresh to re-enable)');
    } else {
        location.reload();
    }
    surfingkeysEnabled = !surfingkeysEnabled;
});

mapkey(',h', "Help menu for key binds", function () {
    Front.showEditor(
        `🔑 My Surfingkeys Shortcuts:

        ,rs research
        ,ls linux Practice
        ,cs Cubing Practice
        ,cp Chess Practice
        ,ts Typing Practice 
        ,ms movies Sources
        ,as anime Sources
        ,ns Note Sources
        `,
        function () { }
    );
});

mapkey(',rs', "Research sources", function () {
    Front.showEditor(
        `
            Choose a Research Tool:

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
        `,
        function (choose) {
            switch (choose.trim().toLowerCase()) {
                case "1": window.open("https://www.youtube.com/", "_blank"); break;
                case "2": window.open("https://github.com/sumitBabuDhungel", "_blank"); break;
                case "3": window.open("https://www.reddit.com/", "_blank"); break;
                case "4": window.open("https://wiki.archlinux.org/title/Main_page", "_blank"); break;
                case "5": window.open("https://dev.to/", "_blank"); break;
                case "6": window.open("https://lobste.rs/", "_blank"); break;
                case "7": window.open("https://chatgpt.com/", "_blank"); break;
                case "8": window.open("https://news.ycombinator.com/", "_blank"); break;
                case "9": window.open("https://stackexchange.com/", "_blank"); break;
                case "10": window.open("https://devdocs.io/", "_blank"); break;
                case "0":
                    [
                        "https://www.youtube.com/",
                        "https://chatgpt.com/",
                        "https://github.com/sumitBabuDhungel",
                        "https://www.reddit.com/",
                        "https://wiki.archlinux.org/title/Main_page",
                        "https://dev.to/",
                        "https://lobste.rs/",
                        "https://news.ycombinator.com/",
                        "https://stackexchange.com/",
                        "https://devdocs.io/"
                    ].forEach(url => window.open(url, "_blank"));
                    break;
                default:
                    Front.showPopup("Invalid choice. Please enter a number from the list.");
            }
        }
    );
});

mapkey(',ls', 'Linux Sources', function () {
    Front.showEditor(
        `
        Choose a linux tool:

        1 - OverTheWire
        2 - Cmd Challenge
        3 - Warp
        4 - explain shell
        5 - linuxCommand.org
        6 - htbAcademy
        7 - tldr.sh
        0 - Open All Linux Tools
        `,
        function (choice) {
            switch (choice.trim().toLowerCase()) {
                case "1": window.open("https://overthewire.org/wargames/bandit/", "_blank"); break;
                case "2": window.open("https://cmdchallenge.com/", "_blank"); break;
                case "3": window.open("https://www.warp.dev/terminus", "_blank"); break;
                case "4": window.open("https://explainshell.com/", "_blank"); break;
                case "5": window.open("https://linuxcommand.org/", "_blank"); break;
                case "6": window.open("https://academy.hackthebox.com/modules", "_blank"); break;
                case "7": window.open("https://tldr.inbrowser.app/pages/common/tar", "_blank"); break;
                case "0":
                    [
                        "https://overthewire.org/wargames/bandit/",
                        "https://cmdchallenge.com/",
                        "https://www.warp.dev/terminus",
                        "https://explainshell.com/",
                        "https://linuxcommand.org/",
                        "https://academy.hackthebox.com/modules",
                        "https://tldr.inbrowser.app/pages/common/tar"
                    ].forEach(url => window.open(url, "_blank"));
                    break;
                default:
                    Front.showPopup("Invalid choice. Please enter a number from the list.");
            }
        }
    );
});

mapkey(',cs', "Cubing Sources", function () {
    Front.showEditor(
        `
        Choose a cubing tool:
        1 - youtube
        2 - JPerm OLL & PLL
        3 - CSTimer
        4 - Speedcube
        5 - Cubeskills
        0 - Open All Cubing Tools
        `,
        function (choice) {
            switch (choice.trim().toLowerCase()) {
                case "1": window.open("https://www.youtube.com/", "_blank"); break;
                case "2": window.open("https://jperm.net/algs/oll", "_blank"); break;
                case "3": window.open("https://cstimer.net/", "_blank"); break;
                case "4": window.open("https://speedcubedb.com/", "_blank"); break;
                case "5": window.open("https://cubeskills.com/", "_blank"); break;
                case "0":
                    [
                        "https://www.youtube.com/",
                        "https://cstimer.net/",
                        "https://jperm.net/algs/oll",
                        "https://speedcubedb.com/",
                        "https://cubeskills.com/"
                    ].forEach(url => window.open(url, "_blank"));
                    break;
                default:
                    Front.showPopup("Invalid choice. Please enter a number from the list.");
            }
        }
    );
});

mapkey(',cp', "Chess Practice", function () {
    Front.showEditor(
        `
        Choose a chess tool:
        1 - chess.com
        2 - lichess
        3 - youtube
        4 - chessVision.ai
        5 - chessTempo
        0 - Open All Chess Tools
        `,
        function (choice) {
            switch (choice.trim().toLowerCase()) {
                case "1": window.open("https://www.chess.com/home", "_blank"); break;
                case "2": window.open("https://lichess.org/learn", "_blank"); break;
                case "3": window.open("https://www.youtube.com/", "_blank"); break;
                case "4": window.open("https://chessvision.ai/", "_blank"); break;
                case "5": window.open("https://www.chesstempo.com/", "_blank"); break;
                case "0":
                    [
                        "https://www.youtube.com/",
                        "https://www.chess.com/home",
                        "https://lichess.org/learn",
                        "https://www.chessvision.ai/",
                        "https://www.chesstempo.com/"
                    ].forEach(url => window.open(url, "_blank"));
                    break;
                default:
                    Front.showPopup("Invalid choice. Please enter a number from the list.");
            }
        }
    );
});

mapkey(',ts', "Typing Sources", function () {
    Front.showEditor(
        `
        Choose a typing tool:
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
        `,
        function (choice) {
            switch (choice.trim().toLowerCase()) {
                case "1": window.open("https://www.youtube.com/", "_blank"); break;
                case "2": window.open("https://www.edclub.com/sportal/program-3.game", "_blank"); break;
                case "3": window.open("https://10fastfingers.com/typing-test/english", "_blank"); break;
                case "4": window.open("https://monkeytype.com/", "_blank"); break;
                case "5": window.open("https://www.keybr.com/", "_blank"); break;
                case "6": window.open("https://play.typeracer.com/", "_blank"); break;
                case "7": window.open("https://zty.pe/", "_blank"); break;
                case "8": window.open("https://www.typelit.io/", "_blank"); break;
                case "9": window.open("https://www.keyhero.com/", "_blank"); break;
                case "10": window.open("https://typewars.netlify.app/", "_blank"); break;
                case "0":
                    [
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
                    ].forEach(url => window.open(url, "_blank"));
                    break;
                default:
                    Front.showPopup("Invalid choice. Please enter a number from the list.");
            }
        }
    );
});

mapkey(',ms', "Movies and Series", function () {
    Front.showEditor(
        `
        Choose a movie Tool:
        1 - movies.joy
        2 - netflix
        3 - kiss.kh
        4 - youtube
        0 - Open All Movie Tools
        `,
        function (choice) {
            switch (choice.trim().toLowerCase()) {
                case "1": window.open("https://en.moviesjoy-to.lol/home", "_blank"); break;
                case "2": window.open("https://www.netflix.com/np/", "_blank"); break;
                case "3": window.open("https://kisskh.do/", "_blank"); break;
                case "4": window.open("https://www.youtube.com/", "_blank"); break;
                case "0":
                    [
                        "https://en.moviesjoy-to.lol/home",
                        "https://www.netflix.com/np/",
                        "https://kisskh.do/",
                        "https://www.youtube.com/"
                    ].forEach(url => window.open(url, "_blank"));
                    break;
                default:
                    Front.showPopup("Invalid choice. Please enter a number from the list.");
            }
        }
    );
});

mapkey(',as', "Anime and manga", function () {
    Front.showEditor(
        `
        Choose an Anime Tool:
        1 - aniwatch
        2 - hianime
        3 - readmanga
        4 - youtube
        0 - Open All Anime Tools
        `,
        function (choice) {
            switch (choice.trim().toLowerCase()) {
                case "1": window.open("https://aniwatchtv.to/home", "_blank"); break;
                case "2": window.open("https://hianime.to/home", "_blank"); break;
                case "3": window.open("https://mangareader.to/home", "_blank"); break;
                case "4": window.open("https://www.youtube.com/", "_blank"); break;
                case "0":
                    [
                        "https://aniwatchtv.to/home",
                        "https://hianime.to/home",
                        "https://mangareader.to/home",
                        "https://www.youtube.com/"
                    ].forEach(url => window.open(url, "_blank"));
                    break;
                default:
                    Front.showPopup("Invalid choice. Please enter a number from the list.");
            }
        }
    );
});

mapkey(',ns', "Note Sources", function () {
    Front.showEditor(
        `
        Choose a Note Tool:
        1 - notion.so
        2 - obsidian.md
        3 - Standard Notes
        4 - Logseq
        0 - Open All Note Tools
        `,
        function (choice) {
            switch (choice.trim().toLowerCase()) {
                case "1": window.open("https://www.notion.so/command-for-linux-1fe872012b2d805fac38c22d9137ebff", "_blank"); break;
                case "2": window.open("https://obsidian.md/", "_blank"); break;
                case "3": window.open("https://standardnotes.com/", "_blank"); break;
                case "4": window.open("https://logseq.com/", "_blank"); break;
                case "0":
                    [
                        "https://obsidian.md/",
                        "https://www.notion.so/command-for-linux-1fe872012b2d805fac38c22d9137ebff",
                        "https://standardnotes.com/",
                        "https://logseq.com/"
                    ].forEach(url => window.open(url, "_blank"));
                    break;
                default:
                    Front.showPopup("Invalid choice. Please enter a number from the list.");
            }
        }
    );
});
