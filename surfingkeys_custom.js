// =============================
//      Surfingkeys Config Fix
// =============================

console.log("✅ Surfingkeys custom config loaded!");

// Use api.mapkey because this script is autoloaded remotely
const { mapkey, Front, RUNTIME } = api;

function openLinks(urls) {
    urls.forEach(url => RUNTIME("openLink", { url }));
}

function createMenu(keys, description, sites) {
    mapkey(keys, description, function () {
        Front.showEditor(
            sites.map((site, i) => `${i + 1} - ${site.name}`).join("\n") +
            `\n0 - Open All`,
            function (choice) {
                const index = parseInt(choice.trim());
                if (index === 0) openLinks(sites.map(s => s.url));
                else if (!isNaN(index) && sites[index - 1]) RUNTIME("openLink", { url: sites[index - 1].url });
                else Front.showPopup("Invalid choice. Please enter a number from the list.");
            }
        );
    });
}

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

createMenu(',rs', 'Research Sources', [
    { name: 'YouTube', url: 'https://www.youtube.com/' },
    { name: 'GitHub', url: 'https://github.com/sumitBabuDhungel' },
    { name: 'Reddit', url: 'https://www.reddit.com/' },
    { name: 'Arch Wiki', url: 'https://wiki.archlinux.org/title/Main_page' },
    { name: 'dev.to', url: 'https://dev.to/' },
    { name: 'Lobste.rs', url: 'https://lobste.rs/' },
    { name: 'ChatGPT', url: 'https://chatgpt.com/' },
    { name: 'Hacker News', url: 'https://news.ycombinator.com/' },
    { name: 'StackExchange', url: 'https://stackexchange.com/' },
    { name: 'DevDocs', url: 'https://devdocs.io/' }
]);

createMenu(',ls', 'Linux Sources', [
    { name: 'OverTheWire', url: 'https://overthewire.org/wargames/bandit/' },
    { name: 'Cmd Challenge', url: 'https://cmdchallenge.com/' },
    { name: 'Warp', url: 'https://www.warp.dev/terminus' },
    { name: 'Explainshell', url: 'https://explainshell.com/' },
    { name: 'LinuxCommand.org', url: 'https://linuxcommand.org/' },
    { name: 'HTB Academy', url: 'https://academy.hackthebox.com/modules' },
    { name: 'tldr', url: 'https://tldr.inbrowser.app/pages/common/tar' }
]);

createMenu(',cs', 'Cubing Sources', [
    { name: 'YouTube', url: 'https://www.youtube.com/' },
    { name: 'JPerm OLL', url: 'https://jperm.net/algs/oll' },
    { name: 'CSTimer', url: 'https://cstimer.net/' },
    { name: 'SpeedcubeDB', url: 'https://speedcubedb.com/' },
    { name: 'CubeSkills', url: 'https://cubeskills.com/' }
]);

createMenu(',cp', 'Chess Practice', [
    { name: 'Chess.com', url: 'https://www.chess.com/home' },
    { name: 'Lichess', url: 'https://lichess.org/learn' },
    { name: 'YouTube', url: 'https://www.youtube.com/' },
    { name: 'ChessVision.ai', url: 'https://chessvision.ai/' },
    { name: 'ChessTempo', url: 'https://www.chesstempo.com/' }
]);

createMenu(',ts', 'Typing Practice', [
    { name: 'YouTube', url: 'https://www.youtube.com/' },
    { name: 'TypingClub', url: 'https://www.edclub.com/sportal/program-3.game' },
    { name: '10FastFingers', url: 'https://10fastfingers.com/typing-test/english' },
    { name: 'Monkeytype', url: 'https://monkeytype.com/' },
    { name: 'Keybr', url: 'https://www.keybr.com/' },
    { name: 'TypeRacer', url: 'https://play.typeracer.com/' },
    { name: 'ZType', url: 'https://zty.pe/' },
    { name: 'TypeLit', url: 'https://www.typelit.io/' },
    { name: 'KeyHero', url: 'https://www.keyhero.com/' },
    { name: 'TypeWars', url: 'https://typewars.netlify.app/' }
]);

createMenu(',ms', 'Movies and Series', [
    { name: 'MoviesJoy', url: 'https://en.moviesjoy-to.lol/home' },
    { name: 'Netflix', url: 'https://www.netflix.com/np/' },
    { name: 'KissKH', url: 'https://kisskh.do/' },
    { name: 'YouTube', url: 'https://www.youtube.com/' }
]);

createMenu(',as', 'Anime and Manga', [
    { name: 'Aniwatch', url: 'https://aniwatchtv.to/home' },
    { name: 'HiAnime', url: 'https://hianime.to/home' },
    { name: 'MangaReader', url: 'https://mangareader.to/home' },
    { name: 'YouTube', url: 'https://www.youtube.com/' }
]);

createMenu(',ns', 'Note Taking Tools', [
    { name: 'Notion', url: 'https://www.notion.so/command-for-linux-1fe872012b2d805fac38c22d9137ebff' },
    { name: 'Obsidian', url: 'https://obsidian.md/' },
    { name: 'Standard Notes', url: 'https://standardnotes.com/' },
    { name: 'Logseq', url: 'https://logseq.com/' }
]);
