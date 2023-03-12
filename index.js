const fetch = require('node-fetch');
const moment = require('moment');
const chalk = require('chalk');
const rs = require('readline-sync');
const delay = require('delay');

const GoStumble = (code, auth) => new Promise((resolve, reject) => {

    fetch(`http://kitkabackend.eastus.cloudapp.azure.com:5010/round/finishv2/${code}`, {
        method: 'GET',
        headers: {
            'authorization': auth
        }
    })
    .then(res => res.text())
    .then(data=> {
        resolve(data);
    })
    .catch(err => {
        reject(err);
    });

});

(async () => {

    console.log(`
________________________________█████_____█████_________
______________________________███____██_██_____███______
___________________________ ██________██__________██____
________RakaModder_________██_________█____________██___
________██████____________██________________________██__
_____███████████_________██_________________________██__
____█████████████________██_______ 𝚆𝙸𝙳𝙸𝙰 ♥️ _________██__
___███████████████_______██_________________________██__
___████████████████______██________________________██___
___████████████████_______██______________________██____
____███████████████_______███____________________██_____
_______███████████_______██_██__________________██______
___________███████______████__██_______________██_______
____██████__██████████████_____██_____________██________
__██████████████████████________██___________██_________
_████████████████████_____________██_______██___________
██_█████_████████████_______________██___██_____________
█__█_██__████████████                 ███_______________
_____█__████████████____________________________________
_______█████████████____________________________________
_______██████████████___________________________________
_______███████████████__________________________________
________███████████████_________________________________
_______███████__████████________________________________
______███████_____███████_______________________________
____█████████________██████_____________________________


Creator : ${chalk.red('@RakaMods')} - ${chalk.blue('https://youtube.com/@RakaaMods')}
Modifed : ${chalk.white('@RakaMods')}
Features :



Warning:Sesuaikan Fiture Yang Kamu Ingin Gunakan Dengan Hadiah Yang Kamu Berhasil Dapatkan.

░▄▄▄▄░
▀▀▄██►
▀▀███►
░▀███►░█►
▒▄████▀▀

1. ${chalk.magenta('Reward : 1 Crown + 30 Trophy + 35 Star ( Stumble Pass ) + 3000 EXP')}
2. ${chalk.magenta('Reward : 20 Trophy + 30 Star ( Stumble Pass ) + 1500 EXP')}
3. ${chalk.magenta('Reward : 10 Trophy + 25 Star ( Stumble Pass ) + 500 EXP')}
4. ${chalk.magenta('Reward : 20 Star ( Stumble Pass ) + 100 EXP')}
`);

    const feature = rs.question('[+] Enter feature needed : ');

    if (feature == '1') {

        const auth = rs.question('[+] Enter your auth token : ');
        const time = rs.question('[+] Enter Delay in milisecond ( Ex : 120000 = 120 Second ) : '); 
        console.log('');

        while (true) {

            var code = '3';
            const result = await GoStumble(code, auth);
            if (!result) {

                console.log(chalk.red(`[ ${moment().format('HH:mm:ss')} ] Wrong cookie or Expired cookie !`));
                break;

            } else if (result.includes('User')) {

                const data = JSON.parse(result);
                const username = data.User.Username;
                const country = data.User.Country;
                const exp = data.User.Experience;
                const tokenPass = data.User.BattlePass.PassTokens;
                const trophy = data.User.SkillRating;
                const crown = data.User.Crowns;
                
                console.log(chalk.green(`[ ${moment().format('HH:mm:ss')} ] Nickname : ${username} | Country : ${country} | ${chalk.blue(`EXP : ${exp}`)} | ${chalk.blue(`Pass Star : ${tokenPass}`)} | ${chalk.blue(`Trophy : ${trophy}`)} | ${chalk.blue(`Crown : ${crown}`)}`));
                await delay(time)

            } else if (result == 'BANNED') {

                console.log(chalk.red(`[ ${moment().format('HH:mm:ss')} ] Banned !`));
                break;
                
            } else if (result == 'SERVER_ERROR' || result.includes('User path limit exceeded')) {

                continue;
                
            } else {
                
                console.log(chalk.red(`[ ${moment().format('HH:mm:ss')} ] Error !`));
                break;
                
            }
        }
        
    } else if (feature == '2') {

        const auth = rs.question('[+] Enter your auth token : ');
        const time = rs.question('[+] Enter Delay in milisecond ( Ex : 1000 = 1 sec ) : '); 
        console.log('');

        

        while (true) {

            var code = '2';
            const result = await GoStumble(code, auth);
            if (!result) {

                console.log(chalk.red(`[ ${moment().format('HH:mm:ss')} ] Wrong cookie or Expired cookie !`));
                break;

            } else if (result.includes('User')) {

                const data = JSON.parse(result);
                const username = data.User.Username;
                const country = data.User.Country;
                const exp = data.User.Experience;
                const tokenPass = data.User.BattlePass.PassTokens;
                const trophy = data.User.SkillRating;
                
                console.log(chalk.green(`[ ${moment().format('HH:mm:ss')} ] Nickname : ${username} | Country : ${country} | ${chalk.blue(`EXP : ${exp}`)} |  ${chalk.blue(`Pass Star : ${tokenPass}`)}  | ${chalk.blue(`Trophy : ${trophy}`)}`));
                await delay(time)
                
            } else if (result == 'BANNED') {

                console.log(chalk.red(`[ ${moment().format('HH:mm:ss')} ] Banned !`));
                break;
                
            } else if (result == 'SERVER_ERROR' || result.includes('User path limit exceeded')) {

                continue;
                
            } else {
                
                console.log(chalk.red(`[ ${moment().format('HH:mm:ss')} ] Error !`));
                break;
                
            }
        }

    } else if (feature == '3') {

        const auth = rs.question('[+] Enter your auth token : ');
        const time = rs.question('[+] Enter Delay in milisecond ( Ex : 1000 = 1 sec ) : '); // Input 0 for no delay ( High Risk)
        console.log('');

        while (true) {

            var code = '1';
            const result = await GoStumble(code, auth);
            if (!result) {

                console.log(chalk.red(`[ ${moment().format('HH:mm:ss')} ] Wrong cookie or Expired cookie !`));
                break;

            } else if (result.includes('User')) {

                const data = JSON.parse(result);
                const username = data.User.Username;
                const country = data.User.Country;
                const exp = data.User.Experience;
                const tokenPass = data.User.BattlePass.PassTokens;
                const trophy = data.User.SkillRating;
                
                console.log(chalk.green(`[ ${moment().format('HH:mm:ss')} ] Nickname : ${username} | Country : ${country} | ${chalk.blue(`EXP : ${exp}`)} |  ${chalk.blue(`Pass Star : ${tokenPass}`)}  | ${chalk.blue(`Trophy : ${trophy}`)}`));
                await delay(time)
                
            } else if (result == 'BANNED') {

                console.log(chalk.red(`[ ${moment().format('HH:mm:ss')} ] Banned !`));
                break;
                
            } else if (result == 'SERVER_ERROR' || result.includes('User path limit exceeded')) {

                continue;
                
            } else {
                
                console.log(chalk.red(`[ ${moment().format('HH:mm:ss')} ] Error !`));
                break;
                
            }
        }

    } else if (feature == '4') {

        const auth = rs.question('[+] Enter your auth token : ');
        const time = rs.question('[+] Enter Delay in milisecond ( Ex : 1000 = 1 sec ) : ');
        console.log('');
        
        while (true) {

            var code = '0';
            const result = await GoStumble(code, auth);
            if (!result) {

                console.log(chalk.red(`[ ${moment().format('HH:mm:ss')} ] Wrong cookie or Expired cookie !`));
                break;

            } else if (result.includes('User')) {

                const data = JSON.parse(result);
                const username = data.User.Username;
                const country = data.User.Country;
                const exp = data.User.Experience;
                const tokenPass = data.User.BattlePass.PassTokens;
                
                console.log(chalk.green(`[ ${moment().format('HH:mm:ss')} ] Nickname : ${username} | Country : ${country} | ${chalk.blue(`EXP : ${exp}`)} | ${chalk.blue(`Pass Star : ${tokenPass}`)}`));
                await delay(time)
                
            } else if (result == 'BANNED') {

                console.log(chalk.red(`[ ${moment().format('HH:mm:ss')} ] Banned !`));
                break;
                
            } else if (result == 'SERVER_ERROR' || result.includes('User path limit exceeded')) {

                continue;
                
            } else {

                console.log(chalk.red(`[ ${moment().format('HH:mm:ss')} ] Error !`));
                break;
                
            }
        }

    } else {

        console.log(chalk.red(`\n[ ${moment().format('HH:mm:ss')} ] Wrong feature !`));

    }
    

})();
