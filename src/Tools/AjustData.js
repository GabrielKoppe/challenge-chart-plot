function getColor() {
    let r = parseInt(Math.random() * 255)
    let g = parseInt(Math.random() * 255)
    let b = parseInt(Math.random() * 255)
    return `rgb(${r}, ${g}, ${b})`
 }
 
// eslint-disable-next-line no-extend-native
String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.substr(1)
}

function timestampConversor(timestamp) {
    var date = new Date(timestamp)
    return `${date.getHours()}:0${date.getMinutes()}`
}

export function AjustData(dataTeste){
    const dataJSON = JSON.parse(dataTeste)
    
    let labels = []
    let datasets = []

    let select = []
    let group = []

    for(let i in dataJSON){
        if(dataJSON[i].type === 'start') {
            select = dataJSON[i].select
            group = dataJSON[i].group
        }
        if(dataJSON[i].type === 'span') {
            labels.push(dataJSON[i].begin) 
            labels.push(dataJSON[i].end)
        }
        if(dataJSON[i].type === 'data' && dataJSON[i].timestamp === labels[0]) {
            let colorMin = getColor()
            let templateMin = `{
                "label": "${dataJSON[i][`${group[0]}`].capitalize()} ${dataJSON[i][`${group[1]}`].capitalize()} ${select[0].replaceAll("_", " ")}",
                "data": [${dataJSON[i][`${select[0]}`]}],
                "borderColor": "${colorMin}",
                "backgroundColor": "${colorMin}",
                "options.plugins.legend.labels.color": "${colorMin}"
            }`
            datasets.push(JSON.parse(templateMin))
            let colorMax = getColor()
            let templateMax = `{
                "label": "${dataJSON[i][`${group[0]}`].capitalize()} ${dataJSON[i][`${group[1]}`].capitalize()} ${select[1].replaceAll("_", " ")}",
                "data": [${dataJSON[i][`${select[1]}`]}],
                "borderColor": "${colorMax}",
                "backgroundColor": "${colorMax}",
                "options.plugins.legend.labels.color": "${colorMax}"
            }`
            datasets.push(JSON.parse(templateMax))
        }
        if(dataJSON[i].type === 'data' && dataJSON[i].timestamp === labels[1]) {    
            for(let j in datasets) {
                if(datasets[j].label === `${dataJSON[i][`${group[0]}`].capitalize()} ${dataJSON[i][`${group[1]}`].capitalize()} ${select[0].replaceAll("_", " ")}`) {
                    datasets[j].data.push(dataJSON[i][`${select[0]}`])
                }
                if(datasets[j].label === `${dataJSON[i][`${group[0]}`].capitalize()} ${dataJSON[i][`${group[1]}`].capitalize()} ${select[1].replaceAll("_", " ")}`) {
                    datasets[j].data.push(dataJSON[i][`${select[1]}`])
                }
            }
        }
    }
    for(let l in labels){
        labels[l] = timestampConversor(labels[l])
    }
    return {labels, datasets}
}