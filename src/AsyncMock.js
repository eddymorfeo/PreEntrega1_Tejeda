const products = [
    {
        id: '1',
        name: 'Iphone 12',
        price: 1000,
        category: 'mangas',
        img: 'https://cbafederal.net/wp-content/uploads/2021/02/i-12-a.png',
        stock: 25,
        description: 'Descripcion de Iphone 12',
    },

    {
        id: '2',
        name: 'Iphone 13',
        price: 1000,
        category: 'serie',
        img: 'https://cbafederal.net/wp-content/uploads/2021/02/i-12-a.png',
        stock: 25,
        description: 'Descripcion de Iphone 12',
    },

    {
        id: '3',
        name: 'Iphone 14',
        price: 1000,
        category: 'peliculas',
        img: 'https://cbafederal.net/wp-content/uploads/2021/02/i-12-a.png',
        stock: 25,
        description: 'Descripcion de Iphone 12',
    }
    ,

    {
        id: '4',
        name: 'Iphone 15',
        price: 1000,
        category: 'mangas',
        img: 'https://cbafederal.net/wp-content/uploads/2021/02/i-12-a.png',
        stock: 25,
        description: 'Descripcion de Iphone 12',
    }
    ,

    {
        id: '5',
        name: 'Iphone 16',
        price: 1000,
        category: 'series',
        img: 'https://cbafederal.net/wp-content/uploads/2021/02/i-12-a.png',
        stock: 25,
        description: 'Descripcion de Iphone 12',
    }
    ,

    {
        id: '6',
        name: 'Iphone 17',
        price: 1000,
        category: 'peliculas',
        img: 'https://cbafederal.net/wp-content/uploads/2021/02/i-12-a.png',
        stock: 25,
        description: 'Descripcion de Iphone 12',
    }
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}

export const getProductById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        }, 500)
    })
}

export const getProductsByCategory = (productCategory) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.category === productCategory))
        }, 500)
    })
}