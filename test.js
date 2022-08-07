function deChicken(number) {
    for(let i = 4; i <= number; i++) {
        let isiHopSo = false;
        for(let a = 2; a < i; a++){
            if(i % a == 0 ) {
                isiHopSo = true;
                break;
            }
        }
        if(isiHopSo) {
            for(let j = 4; j <= number - i; j++) {
                let isjHopSo = false;
                for(let b = 2; b < j; b++){
                    if(j % b == 0 ) {
                        isjHopSo = true;
                        break;
                    }
                }
                if(isjHopSo) {
                    if(i + j == number) {
                        console.log(`ĐÚNG vì: ${i} + ${j} = ${number}`)
                    }
                }
            }
        }
    }
}

for(let k = 12; k <= 100; k++) {
    deChicken(k);
}