export function getRandomUniqueIds(count){
        let uniqueNumbers = new Set();
        while (uniqueNumbers.size < count){
            uniqueNumbers.add(Math.floor(Math.random()*1000));
        }

        return Array.from(uniqueNumbers);

    }

export function shuffleArray(array){
        const copy = [...array];
        for (let i = copy.length - 1; i > 0; i--){
            const j = Math.floor(Math.random() * (i + 1));
            [copy[i], copy[j]] = [copy[j], copy[i]];
        }
        return copy
    }