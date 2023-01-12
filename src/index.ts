import { Tategaki } from "tategaki"

const article = document.querySelector('article')
if (article) {
    const tategaki = new Tategaki(article, {
        shouldPcS: true,
        imitatePcS: true,
        shouldAdjustOrphanLine: true
    })

    tategaki.parse()
}
