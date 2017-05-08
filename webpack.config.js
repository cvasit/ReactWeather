module.exports={
    entry:'./app/app.js',
    output:{
        path: __dirname,
        filename:'./public/bundle.js'
    },
    resolve:{
        root: __dirname,
        alias:{
            Main:'app/components/Main.js',
            Nav :'app/components/Nav.js',
            About:'app/components/About.js',
            Weather:'app/components/Weather.js',
            Examples:'app/components/Examples.js',
            WeatherForm:'app/components/WeatherForm.js',
            WeatherMessage:'app/components/WeatherMessage.js',
            OpenWeatherMap:'app/api/openWeatherMap.js',
        },
        extensions:['','.js','.jsx']
    },
    module:{
        loaders:[
            {
            loader:'babel-loader',
            query:{
            presets:['react','es2015','stage-0']
            },
        test: /\.jsx?$/,
        exclude:/(node_nodules | bower_components)/
        }
        ]
    },
    devtool:'cheap-module-eval-source-map'
};