const data = [
    {
        title: 'MacBook Air',
        img: 'macbookair.png',
        price: 999,
        url: 'https://www.apple.com/shop/buy-mac/macbook-air',
        colors: ['#C7C8CA', '#B1B2B7', '#E3CCB4'],
        specs: {
            display: {
                title: 'Retina display',
                size: 13.3
            },
            chip: {
                title: 'Apple M1 chip',
                description: ''
            },
            ram: {
                title: 'Up to 16GB unified memory',
                description: 'For increased performance and power efficiency'
            },
            memory: {
                size: 2,
                type: 'tb'
            },
            battery: 18,
            camera: {
                title: '720p FaceTime HD camera',
                description: 'With the image signal processor of M1 for drastically improved performance'
            },
            weight: 2.8,
            other: [
                'Touch ID'
            ]
        }
    },
    {
        title: 'MacBook Pro 13”',
        img: 'macbook13.png',
        price: 1299,
        url: 'https://www.apple.com/shop/buy-mac/macbook-pro/13-inch',
        colors: ['', '#C7C8CA', '#B1B2B7', ''],
        specs: {
            display: {
                title: 'Retina display',
                size: 13.3
            },
            chip: {
                title: 'Apple M1 chip',
                description: 'Also available with Intel Core i5 or i7 processor'
            },
            ram: {
                title: 'Up to 16GB unified memory',
                description: 'For increased performance and power efficiency'
            },
            memory: {
                size: 2,
                type: 'tb'
            },
            battery: 20,
            camera: {
                title: '720p FaceTime HD camera',
                description: 'With the image signal processor of M1 for drastically improved performance'
            },
            weight: 3.0,
            other: [
                'Touch Bar',
                'Sound',
                'Touch ID'
            ]
        }
    },
    {
        title: 'MacBook Pro 16',
        img: 'macbookpro.png',
        price: 2399,
        url: 'https://www.apple.com/shop/buy-mac/macbook-pro/16-inch',
        colors: ['#C7C8CA', '#B1B2B7', '#E3CCB4'],
        specs: {
            display: {
                title: 'Retina display',
                size: 16
            },
            chip: {
                title: 'Up to Intel Core i9 processor',
                description: ''
            },
            ram: {
                title: 'Up to 64GB memory',
                description: ''
            },
            memory: {
                size: 8,
                type: 'tb'
            },
            battery: 11,
            camera: {
                title: '720p FaceTime HD camera',
                description: ''
            },
            weight: 4.3,
            other: [
                'Touch Bar',
                'Sound',
                'Touch ID'
            ]
        }
    },
]

let wrap = document.querySelector('.wrap')
let box1 = document.querySelectorAll('.box1')


for(let item of data) {

    // 1
    let box = document.createElement('div')
    let macImg = document.createElement('img')
    let name = document.createElement('h1')
    let cena = document.createElement('p')
    let boxForCircle = document.createElement('div')
    let by = document.createElement('button')
    
    
    // 2
    
    box.classList.add('box')
    macImg.classList.add('macImg')
    name.classList.add('name')
    cena.classList.add('cena')
    boxForCircle.classList.add('boxForCircle')
    by.classList.add('by')
    
    // 3
    box.append(macImg, name, cena, boxForCircle, by)
    wrap.append(box)
    // 4
    
    
    cena.innerHTML = `From $${item.price}`
    name.innerHTML = item.title
    macImg.src = `./img/${item.img}`
    by.innerHTML = 'Buy'
    

    for(let item3 of box1) {
        let version = document.createElement('h1')
        version.classList.add('name')
        version.innerHTML = item.specs.display.size
        item3.append(version)
    }

    for(let item2 of item.colors) {
        let circle = document.createElement('div')
        circle.classList.add('circle')
        boxForCircle.append(circle)
        circle.style.background = item2
    }
}