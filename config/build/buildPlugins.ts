import webpack, {Configuration} from 'webpack'
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
const Dotenv = require('dotenv-webpack');
import {BuildOptions} from "./types/types";

export const buildPlugins = ({mode, paths}: BuildOptions): Configuration['plugins'] => {

    const isDev = mode === 'development';
    const isProd = mode === 'production';
    const plugins: Configuration['plugins'] = [
        new HtmlWebpackPlugin({template: paths.html}),

    ];

    if (isDev) {
        plugins.push(new webpack.ProgressPlugin())
        plugins.push(new Dotenv())
    }

    if (isProd) {
        plugins.push(new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css'
        }))
    }

    return plugins;
}