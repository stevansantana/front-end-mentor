async function getData(): Promise<void> {
    try {
        const data = await fetch('data.json')
        const response = await data.json()
        manipulateData(response)
    } catch(error) {
        alert('Erro na captura dos dados')
    }
}

function manipulateData(data: any) {
    const buttons = document.getElementsByTagName('span')
        
    for(let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", () => {

            for(let i = 0; i < buttons.length; i++) {
                if(buttons[i].style.color === 'white') {
                    buttons[i].style.color = ''   
                }
            }
            buttons[i].style.color = 'white'

            const currentTime = document.getElementsByClassName('current-time')
            const previousTime = document.getElementsByClassName('previous-time')    
            const title = document.getElementsByClassName("title")

            switch(buttons[i].textContent) {
                case 'Daily':
                    timeChosen(data, 'daily')
                    break

                case 'Weekly':       
                    timeChosen(data, 'weekly')
                    break

                case 'Monthly': 
                    timeChosen(data, 'monthly')
                    break
            }
        })
    }
}

function timeChosen(data: any, category: 'daily' | 'weekly' | 'monthly') {
    const currentTime = document.getElementsByClassName('current-time')
    const previousTime = document.getElementsByClassName('previous-time')    
    const title = document.getElementsByClassName("title")

    for(let i = 0; i < data.length; i++) {
        const dailyCurrent = data[i].timeframes[category].current
        const dailyPrevious = data[i].timeframes[category].previous

        title[i].textContent = data[i].title
        currentTime[i].innerHTML = `${dailyCurrent}hrs`
        previousTime[i].innerHTML = `Last Week - ${dailyPrevious}hrs`
    }
}

getData()