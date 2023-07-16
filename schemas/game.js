export default {
    name: 'game',
    title: 'Game',
    type: 'document',
    fields: [
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            
            options: {
                 hotspot: true
            }
        },
        {
            name: 'name',
            title: 'Name',
            type: 'string'
        },
        {
            name: 'og_price',
            title: 'OG_price',
            type: 'string'
        },
        {
            name: 'sell_price',
            title: 'Sell_price',
            type: 'number'
        },
        {
            name: 'buy_price',
            title: 'Buy_price',
            type: 'number'
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'name',
                maxLength: 90
            }
        },
        {
            title: 'Details', 
            name: 'details',
            type: 'array', 
            of: [{type: 'block'}]
        },
        {
            name: 'sales',
            title: 'Sales',
            type: 'number'
        },
        {
            name: 'platform',
            title: 'Platform',
            type: 'string'
        },
        {
            name:'developer',
            title: 'Developer',
            type: 'string'
        },
        {
            title: 'Genre',
            name: 'genre',
            type: 'array',
            of: [{type: 'string'}]
        },
        {
            title: 'Rating',
            name: 'rating',
            type: 'number',
        },
        {
            title: 'Release',
            name: 'release',
            type: 'number'
        }
    ]
};