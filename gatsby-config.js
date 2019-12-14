module.exports = {
    siteMetadata: {
        title: 'NSJS Workshop',
        description: 'Test'
    },
    plugins: [
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'images',
                path: `${__dirname}/src/images/`,
            },
        },{
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'marcdown',
                path: `${__dirname}/src/blog/`,
            },
        },
        'gatsby-transformer-sharp',
        'gatsby-plugin-sharp',
        'gatsby-plugin-react-helmet',
        'gatsby-transformer-remark'
    ]
};
